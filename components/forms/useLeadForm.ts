"use client";

import { useId, useState, type FormEvent } from "react";
import type { Errors, LeadResult, Values } from "@/lib/validation";

export type SubmitStatus = { kind: "idle" } | { kind: "success" } | { kind: "error"; html: string };

type Options<F extends string> = {
  fields: readonly F[];
  validate: (values: Values<F>) => Errors<F>;
  submit: (values: Values<F>) => Promise<LeadResult>;
  /** Shown when the request itself fails (network / server crash). */
  networkErrorHtml: string;
};

const empty = <F extends string>(fields: readonly F[]) =>
  Object.fromEntries(fields.map((f) => [f, ""])) as Values<F>;

export function useLeadForm<F extends string>({ fields, validate, submit, networkErrorHtml }: Options<F>) {
  const uid = useId();
  const [values, setValues] = useState(() => empty(fields));
  const [errors, setErrors] = useState<Errors<F>>({});
  const [sameNumber, setSameNumber] = useState(false);
  const [status, setStatus] = useState<SubmitStatus>({ kind: "idle" });
  const [pending, setPending] = useState(false);

  const id = (field: string) => `${uid}-${field}`;

  function set(field: F, value: string) {
    setValues((v) => ({ ...v, [field]: value }));
  }

  /** Props for an <input>/<textarea> bound to `field`, with the red border the old site used for errors. */
  function bind(field: F) {
    return {
      id: id(field),
      name: field,
      value: values[field],
      onChange: (e: { target: { value: string } }) => set(field, e.target.value),
      style: errors[field] ? { border: "2px solid red" } : undefined,
    };
  }

  /** "Whatsapp number same as contact number" copies the contact number, unticking clears it. */
  function toggleSameNumber(checked: boolean) {
    setSameNumber(checked);
    const contact = (values as Record<string, string>).contactNo ?? "";
    setValues((v) => ({ ...v, whatsappNo: checked ? contact : "" }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const trimmed = Object.fromEntries(fields.map((f) => [f, values[f].trim()])) as Values<F>;
    setValues(trimmed);
    const found = validate(trimmed);
    setErrors(found);
    const firstInvalid = fields.find((f) => found[f]);
    if (firstInvalid) {
      formElement.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setStatus({ kind: "idle" });
    setPending(true);
    try {
      const result = await submit(trimmed);
      setStatus(
        result.status === "success"
          ? { kind: "success" }
          : { kind: "error", html: `<b>Oops! Something went wrong.</b><br>${escape(result.message)}` },
      );
    } catch {
      setStatus({ kind: "error", html: networkErrorHtml });
    } finally {
      // The old site cleared the form after every attempt, successful or not.
      setValues(empty(fields));
      setSameNumber(false);
      setPending(false);
    }
  }

  return { id, bind, errors, sameNumber, toggleSameNumber, status, pending, onSubmit };
}

export type LeadForm<F extends string> = ReturnType<typeof useLeadForm<F>>;

function escape(text: string) {
  return text.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
}
