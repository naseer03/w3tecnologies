"use client";

import { submitEnquiry } from "@/app/actions/leads";
import { enquiryFields, validateEnquiry } from "@/lib/validation";
import { MessageField, PrefTimeField, SubmitArea, TextField, WhatsappField } from "./fields";
import { useLeadForm } from "./useLeadForm";

export const MESSAGE_SENT = (
  <>
    <b>Thank you! Your message has been sent successfully.</b>
    <br />
    We will get in touch with you soon.
  </>
);
export const TRY_AGAIN_HTML = "<b>Oops! Something went wrong.</b><br>Please try again.";

/**
 * General enquiry / call-back form.
 * "stacked" is the modal version (was includes/enq-form.php); "contact" is the grid on the contact page.
 */
export default function EnquiryForm({ variant = "stacked" }: { variant?: "stacked" | "contact" }) {
  const form = useLeadForm({
    fields: enquiryFields,
    validate: validateEnquiry,
    submit: submitEnquiry,
    networkErrorHtml: TRY_AGAIN_HTML,
  });

  const name = <TextField form={form} field="name" placeholder="Enter your Name" />;
  const email = <TextField form={form} field="email" placeholder="Enter your Email" />;

  return (
    <form method="post" noValidate onSubmit={form.onSubmit}>
      {variant === "stacked" ? (
        <>
          {name}
          {email}
          <TextField form={form} field="contactNo" type="tel" placeholder="Enter your Contact Number" />
          <WhatsappField form={form} />
          <PrefTimeField form={form} />
        </>
      ) : (
        <>
          <div className="row">
            <div className="col-12 col-lg-6">{name}</div>
            <div className="col-12 col-lg-6">{email}</div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-4">
              <TextField
                form={form}
                field="contactNo"
                type="tel"
                className="form-ele my-3"
                placeholder="Enter your Contact Number"
              />
            </div>
            <div className="col-12 col-lg-4">
              <WhatsappField form={form} className="form-ele my-3" label="Same as contact number " />
            </div>
            <div className="col-12 col-lg-4">
              <PrefTimeField form={form} />
            </div>
          </div>
        </>
      )}
      <MessageField form={form} showError={false} />
      <SubmitArea form={form} messagePrefix="enquiryform" success={MESSAGE_SENT} />
    </form>
  );
}
