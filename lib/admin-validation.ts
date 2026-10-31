// Admin login/registration rules (from the old js/adminlogin.js and js/adminregister.js).

export const ADMIN_NAME = /^[a-zA-Z\s]+$/;
export const ADMIN_EMAIL = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// At least 8 characters with a letter, a digit and one of @$!%*#?&.
export const ADMIN_PASSWORD = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

export const PASSWORD_RULE = "Password must be at least 8 characters long, contain at least 1 letter, 1 number, and 1 special character";

export type AdminFields = { name: string; email?: string; password: string; confirmPassword?: string };

export function validateAdmin(values: AdminFields, mode: "login" | "register") {
  const errors: Partial<Record<keyof AdminFields, string>> = {};
  if (!values.name) errors.name = "Name is required";
  else if (!ADMIN_NAME.test(values.name)) errors.name = "Name can only contain letters and spaces";

  if (mode === "register") {
    if (!values.email) errors.email = "Email is required";
    else if (!ADMIN_EMAIL.test(values.email)) errors.email = "Invalid email format";
  }

  if (!values.password) errors.password = "Password is required";
  else if (!ADMIN_PASSWORD.test(values.password)) errors.password = PASSWORD_RULE;

  if (mode === "register") {
    if (!values.confirmPassword) errors.confirmPassword = "Confirm Password is required";
    else if (values.password !== values.confirmPassword) errors.confirmPassword = "Passwords do not match";
  }
  return errors;
}

export const registrationOpen = () => process.env.ALLOW_ADMIN_REGISTRATION === "true";
