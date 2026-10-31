import JsInterviewForm from "@/components/forms/JsInterviewForm";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import "@/styles/interview-qa.css";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/js-interview-qa",
  title: "Free JavaScript Interview Questions & Answers PDF | W3 Technologies",
  description:
    "Download a free PDF of JavaScript interview questions and answers from W3 Technologies, Nellore, and prepare for front-end and full stack developer interviews.",
});

export default function JsInterviewQaPage() {
  return (
    <>
      <section className="banner">
        <SiteHeader />
        <div className="container">
          <div className="head">
            <h1>JavaScript Interview Q&amp;A</h1>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="form-sec">
            <h2>Get Your Free JavaScript Interview Q&amp;A PDF</h2>
            <p>Fill out the form below to access JavaScript interview questions and answers!</p>
            <div className="card">
              <JsInterviewForm />
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
