"use client";

import { submitJsInterviewDownload } from "@/app/actions/leads";
import { jsInterviewFields, validateJsInterview } from "@/lib/validation";
import { SubmitArea, TextField, WhatsappField } from "./fields";
import { useLeadForm } from "./useLeadForm";

/** "Get your free JavaScript interview Q&A PDF" form. */
export default function JsInterviewForm() {
  const form = useLeadForm({
    fields: jsInterviewFields,
    validate: validateJsInterview,
    submit: submitJsInterviewDownload,
    networkErrorHtml:
      "<b>Failed to Send!</b><br>Please verify your email address and resubmit the form, or contact us directly for assistance with downloading the JavaScript Interview Questions and Answers PDF.",
  });

  return (
    <form method="post" noValidate onSubmit={form.onSubmit}>
      <TextField form={form} field="name" placeholder="Enter your Name" />
      <TextField form={form} field="email" placeholder="Enter your  Email" />
      <TextField
        form={form}
        field="contactNo"
        type="tel"
        inputClassName="contact-no"
        placeholder="Enter your Contact Number"
      />
      <WhatsappField form={form} />
      <SubmitArea
        form={form}
        messagePrefix="courseform"
        success={
          <>
            <b>Download Ready! We&apos;ve emailed the JavaScript Interview Questions and Answers PDF to you.</b>
            <br />
            Please check your mail inbox or spam folder to access it.
          </>
        }
      />
    </form>
  );
}
