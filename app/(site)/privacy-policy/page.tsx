import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import "@/styles/terms-privacy-careers.css";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/privacy-policy",
  title: "Read Our Privacy Policy | W3 Technologies",
  description:
    "Our privacy policy outlines W3 Technologies commitment to data security and transparency. Read more about how we handle your data.",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="banner">
        <SiteHeader />
        <div className="head">
          <h1>PRIVACY POLICY</h1>
        </div>
      </section>
      <section className="py-3">
        <div className="container">
          <h2 className="main-head">W3 Technologies Privacy Policy</h2>
          <div className="policy ">
            <h3 className="policy-head mb-2">1. Introduction</h3>
            <div className="policy-info">
              <p>
                Welcome to W3 Technologies (&quot;W3 Technologies,&quot; &quot;we,&quot;
                &quot;us,&quot; or &quot;our&quot;). We are committed to protecting your personal
                information and your right to privacy. This Privacy Policy explains how we collect,
                use, disclose, and safeguard your information when you visit our website{" "}
                <a href="https://w3tec.com/">w3tec.com</a> use our services, or engage with us in
                other ways.
              </p>
            </div>
          </div>
          <div className="policy ">
            <h3 className="policy-head mb-4">2. Information We Collect</h3>
            <div className="policy-info ">
              <div className="mt-3">
                <h4 className="policy-sub-head">2.1 Personal Information</h4>
                <p>
                  When you interact with us, we may collect personal information that you provide
                  directly, including :-
                </p>
                <ul className="py-2">
                  <li>
                    <b>Contact Information: </b>Name, email address, phone number, and mailing
                    address.
                  </li>
                  <li>
                    <b>Account Information: </b> Username, password, and other login details.
                  </li>
                  <li>
                    <b>Payment Information: </b> Payment card details, billing address, and
                    transaction history.
                  </li>
                  <li>
                    <b>Educational Information: </b> Details about your educational background,
                    current studies, and training interests.
                  </li>
                </ul>
              </div>
              <div className="mt-3">
                <h4 className="policy-sub-head">2.2 Usage Data</h4>
                <p>
                  We collect information about your interactions with our website and services, such
                  as :-
                </p>
                <ul className="py-2">
                  <li>
                    <b>Device Information: </b>IP address, browser type, operating system, and
                    device identifiers.
                  </li>
                  <li>
                    <b>Usage Data: </b>Pages visited, time spent on the site, referring site, and
                    other usage metrics.
                  </li>
                </ul>
              </div>
              <div className="mt-3">
                <h4 className="policy-sub-head">2.3 Cookies and Tracking Technologies</h4>
                <p>
                  We use cookies and similar tracking technologies to enhance your experience on our
                  website, including :-
                </p>
                <ul className="py-2">
                  <li>
                    <b>Essential Cookies: </b>Necessary for the functioning of our website and
                    services.
                  </li>
                  <li>
                    <b>Analytics Cookies: </b> To collect information about how users interact with
                    our website to improve our services.
                  </li>
                  <li>
                    <b>Marketing Cookies: </b> To tailor advertising and promotional content to your
                    interests.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="policy ">
            <h3 className="policy-head mb-2">3. How We Use Your Information</h3>
            <div className="policy-info">
              <p>We use the information we collect for various purposes, including :-</p>
              <ul className="py-2">
                <li>
                  <b>To Provide and Improve Our Services: </b> Delivering training programs,
                  customer support, and enhancing our offerings.
                </li>
                <li>
                  <b>To Process Transactions: </b> Handling payments, billing, and account
                  management.
                </li>
                <li>
                  <b>To Communicate with You: </b> Sending updates, promotional materials, and
                  responding to inquiries.
                </li>
                <li>
                  <b> To Personalize Your Experience: </b> Customizing content and recommendations
                  based on your interests and interactions.
                </li>
                <li>
                  <b> To Ensure Security: </b>Protecting against fraud and unauthorized access, and
                  maintaining the integrity of our services.
                </li>
              </ul>
            </div>
          </div>
          <div className="policy ">
            <h3 className="policy-head mb-2">4. How We Share Your Information</h3>
            <div className="policy-info">
              <p>We may share your information in the following situations :-</p>
              <ul className="py-2">
                <li>
                  <b>With Service Providers: </b>To facilitate our services, such as payment
                  processing, email delivery, and data analysis.
                </li>
                <li>
                  <b>For Legal Reasons: </b> When required by law or to protect our rights,
                  property,or safety, or the rights, property, or safety of others.
                </li>
                <li>
                  <b>In Business Transfers: </b> If we are involved in a merger, acquisition, or
                  asset sale, your information may be transferred as part of that transaction.
                </li>
              </ul>
            </div>
          </div>
          <div className="policy ">
            <h3 className="policy-head mb-4">5. Your Rights and Choices</h3>
            <div className="policy-info ">
              <div className="mt-3">
                <h4 className="policy-sub-head">5.1 Access and Correction</h4>
                <p>
                  You have the right to access and update your personal information. You can request
                  access to your information by contacting us.
                </p>
              </div>
              <div className="mt-3">
                <h4 className="policy-sub-head">5.2 Opt-Out</h4>
                <p>
                  You may opt-out of receiving marketing communications from us by following the
                  unsubscribe instructions in those communications or by contacting us directly.
                </p>
              </div>
              <div className="mt-3">
                <h4 className="policy-sub-head">5.3 Data Retention</h4>
                <p>
                  We retain your personal information only for as long as necessary to fulfill the
                  purposes for which it was collected or as required by law.
                </p>
              </div>
            </div>
          </div>
          <div className="policy ">
            <h3 className="policy-head mb-2">6. Security</h3>
            <div className="policy-info">
              <p>
                We implement reasonable security measures to protect your personal information from
                unauthorized access, use, or disclosure. However, no security system is
                impenetrable, and we cannot guarantee absolute security.
              </p>
            </div>
          </div>
          <div className="policy ">
            <h3 className="policy-head mb-2">7. Third-Party Links</h3>
            <div className="policy-info">
              <p>
                Our website may contain links to third-party websites. We are not responsible for
                the privacy practices or content of these external sites. We encourage you to review
                the privacy policies of any third-party sites you visit.
              </p>
            </div>
          </div>
          <div className="policy ">
            <h3 className="policy-head mb-2">8. Changes to This Privacy Policy</h3>
            <div className="policy-info">
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on
                this page with an updated effective date. We encourage you to review this Privacy
                Policy periodically to stay informed about how we are protecting your information.
              </p>
            </div>
          </div>
          <div className="policy ">
            <h3 className="policy-head mb-2">9. Contact Us</h3>
            <div className="policy-info">
              <p>
                If you have any questions about this Privacy Policy or our privacy practices, please
                contact us at:
              </p>
              <ul className="py-2">
                <li>
                  <b>W3 Technologies</b>
                </li>
                <li>
                  Email :- <a href="mailto:info@w3tec.com">info@w3tec.com</a>
                </li>
                <li>
                  Phone :- <a href="tel:+9174169393333">7416939333</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
