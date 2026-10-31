// Field rules shared by the lead forms (client-side feedback) and their Server Actions (enforcement).
// Messages match the original site's validation scripts.

export type Values<F extends string> = Record<F, string>;
export type Errors<F extends string> = Partial<Record<F, string>>;

const NAME = /^[a-z ]+$/i;
const PHONE = /^[0-9]{10}$/;
const EMAIL = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/i;

function name(v: string) {
  if (!v) return "Name is required";
  if (!NAME.test(v)) return "Only Contains Alphabets, Space";
}

function email(v: string) {
  if (!v) return "Email is required";
  if (!EMAIL.test(v)) return "Invalid Email";
}

function phone(label: string) {
  return (v: string) => {
    if (!v) return `${label} is required`;
    if (!PHONE.test(v)) return "Must Contain 10 Digits";
  };
}

function required(message: string) {
  return (v: string) => (v ? undefined : message);
}

type Rules<F extends string> = Partial<Record<F, (v: string) => string | undefined>>;

function validator<F extends string>(rules: Rules<F>) {
  return (values: Values<F>): Errors<F> => {
    const errors: Errors<F> = {};
    for (const field of Object.keys(rules) as F[]) {
      const message = rules[field]!(values[field]?.trim() ?? "");
      if (message) errors[field] = message;
    }
    return errors;
  };
}

const contactRules = {
  name,
  email,
  contactNo: phone("Contact number"),
  whatsappNo: phone("Whatsapp number"),
};

export const courseFields = ["name", "email", "contactNo", "whatsappNo", "prefTime"] as const;
export const validateCourse = validator<(typeof courseFields)[number]>(contactRules);

export const enquiryFields = ["name", "email", "contactNo", "whatsappNo", "prefTime", "message"] as const;
export const validateEnquiry = validator<(typeof enquiryFields)[number]>(contactRules);

export const serviceFields = ["name", "email", "contactNo", "whatsappNo", "company", "prefTime", "message"] as const;
export const validateService = validator<(typeof serviceFields)[number]>({
  ...contactRules,
  company: required("Company name is required"),
  message: required("Fill out this field"),
});

export const internshipFields = ["name", "email", "contactNo", "whatsappNo", "college", "prefTime", "message"] as const;
export const validateInternship = validator<(typeof internshipFields)[number]>({
  ...contactRules,
  college: required("College name is required"),
  message: required("Message is required"),
});

export const jsInterviewFields = ["name", "email", "contactNo", "whatsappNo"] as const;
export const validateJsInterview = validator<(typeof jsInterviewFields)[number]>(contactRules);

export const PREF_TIME = /^([01]\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/;

export type LeadResult = { status: "success" | "error"; message: string };
