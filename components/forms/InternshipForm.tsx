"use client";

import { submitInternshipEnquiry } from "@/app/actions/leads";
import { internshipFields, validateInternship } from "@/lib/validation";
import { MESSAGE_SENT, TRY_AGAIN_HTML } from "./EnquiryForm";
import { MessageField, PrefTimeField, SubmitArea, TextField, WhatsappField } from "./fields";
import { useLeadForm } from "./useLeadForm";

/**
 * Internship enquiry form.
 * "stacked" is the modal version (was includes/internship-form.php); "wide" is the two-column page section.
 */
export default function InternshipForm({ variant = "stacked" }: { variant?: "stacked" | "wide" }) {
  const form = useLeadForm({
    fields: internshipFields,
    validate: validateInternship,
    submit: submitInternshipEnquiry,
    networkErrorHtml: TRY_AGAIN_HTML,
  });

  const name = <TextField form={form} field="name" placeholder="Enter your Name" />;
  const email = <TextField form={form} field="email" placeholder="Enter your  Email" />;
  const contact = (
    <TextField
      form={form}
      field="contactNo"
      type="tel"
      inputClassName="contact-no"
      placeholder="Enter your Contact Number"
    />
  );
  const college = (
    <TextField form={form} field="college" className="form-ele mb-3 mt-lg-4" placeholder="Enter your College Name" />
  );
  const prefTime = <PrefTimeField form={form} />;

  return (
    <form method="post" noValidate onSubmit={form.onSubmit}>
      {variant === "stacked" ? (
        <>
          {name}
          {email}
          {contact}
          <WhatsappField form={form} />
          {college}
          {prefTime}
        </>
      ) : (
        <>
          <div className="row">
            <div className="col-12 col-lg-6">{name}</div>
            <div className="col-12 col-lg-6">{email}</div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6">{contact}</div>
            <div className="col-12 col-lg-6">
              <WhatsappField form={form} className={null} />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6">{college}</div>
            <div className="col-12 col-lg-6">{prefTime}</div>
          </div>
        </>
      )}
      <MessageField form={form} />
      <SubmitArea form={form} messagePrefix="internshipform" success={MESSAGE_SENT} />
    </form>
  );
}
