"use client";

import type { ReactNode } from "react";
import type { LeadForm } from "./useLeadForm";

// Markup mirrors the PHP includes so the existing stylesheets keep applying.

type FieldProps<F extends string> = {
  form: LeadForm<F>;
  field: F;
  placeholder: string;
  type?: "text" | "tel";
  inputClassName?: string;
  className?: string;
};

export function TextField<F extends string>({
  form,
  field,
  placeholder,
  type = "text",
  inputClassName = "",
  className = "form-ele mb-3",
}: FieldProps<F>) {
  return (
    <div className={className}>
      <input
        type={type}
        className={`form-control ${inputClassName}`.trim()}
        placeholder={placeholder}
        {...form.bind(field)}
      />
      <span className="form-error">{form.errors[field]}</span>
    </div>
  );
}

export function WhatsappField<F extends string>({
  form,
  label = " whatsapp number same as contact number ",
  className = "form-ele mb-3",
}: {
  form: LeadForm<F>;
  label?: string;
  /** null renders the field without its wrapper <div> (the internship page layout). */
  className?: string | null;
}) {
  const field = "whatsappNo" as F;
  const content = (
    <>
      <input
        type="tel"
        className="form-control whatsapp-no"
        placeholder="Enter your Whatsapp Number"
        {...form.bind(field)}
      />
      <div className="form-check">
        <input
          className="form-check-input same-contact-no"
          type="checkbox"
          id={form.id("same-contact-no")}
          checked={form.sameNumber}
          onChange={(e) => form.toggleSameNumber(e.target.checked)}
        />
        <label className="form-check-label" htmlFor={form.id("same-contact-no")}>
          {label}
        </label>
      </div>
      <span className="form-error">{form.errors[field]}</span>
    </>
  );
  return className === null ? content : <div className={className}>{content}</div>;
}

export function PrefTimeField<F extends string>({
  form,
  className = "form-ele mb-3",
}: {
  form: LeadForm<F>;
  className?: string;
}) {
  const props = form.bind("prefTime" as F);
  return (
    <div className={className}>
      <label htmlFor={props.id}>Prefer time to call</label>
      <input type="time" className="form-control" {...props} />
    </div>
  );
}

export function MessageField<F extends string>({ form, showError = true }: { form: LeadForm<F>; showError?: boolean }) {
  const field = "message" as F;
  return (
    <div className="form-ele mb-3">
      <textarea className="form-control" rows={4} placeholder="How can we help you?" {...form.bind(field)} />
      {showError && <span className="form-error">{form.errors[field]}</span>}
    </div>
  );
}

/** Submit button plus the success / failure line shown after a submission. */
export function SubmitArea<F extends string>({
  form,
  messagePrefix,
  success,
}: {
  form: LeadForm<F>;
  /** Keeps the old class names, e.g. "enquiryform" -> "enquiryform-submit-success-message". */
  messagePrefix: string;
  success: ReactNode;
}) {
  const { status } = form;
  return (
    <>
      <input type="submit" className="submit-btn" value="Submit" disabled={form.pending} />
      {status.kind === "success" && (
        <p className={`mt-2 ${messagePrefix}-submit-success-message form-success`}>{success}</p>
      )}
      {status.kind === "error" && (
        <p
          className={`mt-2 ${messagePrefix}-submit-error-message form-error`}
          dangerouslySetInnerHTML={{ __html: status.html }}
        />
      )}
    </>
  );
}
