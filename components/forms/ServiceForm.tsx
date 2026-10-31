"use client";

import { submitServiceEnquiry } from "@/app/actions/leads";
import { serviceFields, validateService } from "@/lib/validation";
import { MESSAGE_SENT, TRY_AGAIN_HTML } from "./EnquiryForm";
import { MessageField, PrefTimeField, SubmitArea, TextField, WhatsappField } from "./fields";
import { useLeadForm } from "./useLeadForm";

/**
 * Service enquiry form for the services pages.
 * "stacked" is the modal version (was includes/services-form.php); "wide" is the two-column page section.
 */
export default function ServiceForm({ variant = "stacked" }: { variant?: "stacked" | "wide" }) {
  const form = useLeadForm({
    fields: serviceFields,
    validate: validateService,
    submit: submitServiceEnquiry,
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
  const whatsapp = <WhatsappField form={form} />;
  const company = (
    <TextField form={form} field="company" className="form-ele mb-3 mt-lg-4" placeholder="Enter your Company Name" />
  );
  const prefTime = <PrefTimeField form={form} />;

  return (
    <form method="post" noValidate onSubmit={form.onSubmit}>
      {variant === "stacked" ? (
        <>
          {name}
          {email}
          {contact}
          {whatsapp}
          {company}
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
            <div className="col-12 col-lg-6">{whatsapp}</div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6">{company}</div>
            <div className="col-12 col-lg-6">{prefTime}</div>
          </div>
        </>
      )}
      <MessageField form={form} />
      <SubmitArea form={form} messagePrefix="serviceform" success={MESSAGE_SENT} />
    </form>
  );
}
