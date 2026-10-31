"use client";

import { useState, type FormEvent } from "react";
import { login, register } from "@/app/actions/auth";
import { validateAdmin, type AdminFields } from "@/lib/admin-validation";

const fields = {
  login: [
    { name: "name", key: "name", label: "User Name", type: "text" },
    { name: "password", key: "password", label: "Password", type: "password" },
  ],
  register: [
    { name: "name", key: "name", label: "User Name", type: "text" },
    { name: "email", key: "email", label: "Email Id", type: "email" },
    { name: "password", key: "password", label: "Password", type: "password" },
    { name: "confirm-password", key: "confirmPassword", label: "Confirm Password", type: "password" },
  ],
} as const;

/** Admin login / registration form: validates in the browser, then posts to the Server Action. */
export default function AdminAuthForm({ mode }: { mode: "login" | "register" }) {
  const [errors, setErrors] = useState<Partial<Record<keyof AdminFields, string>>>({});

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    const data = new FormData(event.currentTarget);
    const get = (name: string) => String(data.get(name) ?? "").trim();
    const found = validateAdmin(
      { name: get("name"), email: get("email"), password: get("password"), confirmPassword: get("confirm-password") },
      mode,
    );
    setErrors(found);
    if (Object.keys(found).length > 0) event.preventDefault();
  }

  return (
    <form
      id={mode === "login" ? "admin-login-form" : "admin-registration-form"}
      action={mode === "login" ? login : register}
      onSubmit={onSubmit}
      noValidate
    >
      {fields[mode].map((f) => (
        <div key={f.name} className="form-ele mb-3 d-flex flex-column gap-1">
          <label htmlFor={f.name}>{f.label}</label>
          <input type={f.type} name={f.name} id={f.name} />
          <span className="form-error">{errors[f.key]}</span>
        </div>
      ))}
      <div className="d-flex justify-content-center">
        <input className="btn btn-primary" type="submit" value="Submit" />
      </div>
    </form>
  );
}
