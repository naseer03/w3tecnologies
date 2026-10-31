/** "Have any questions?" call-to-action. The button opens the page's #centeredModal enquiry form. */
export default function HaveQuestions() {
  return (
    <section className="have-questions">
      <div className="container">
        <h2 className="head">
          Have any <span>Questions?</span>
        </h2>
        <div className="text">
          <p>
            Do you want to take advantage of our <span>Special Offers?</span>
          </p>
          <p>Please call us today.</p>
        </div>
        <div className="d-flex gap-3">
          <a href="tel:+917416939333" className="telNo-btn">
            <img src="/assets/home/banner/phone-icon.svg" alt="call" />
            <span className="tel-no">+91 741-693-9333</span>{" "}
          </a>
          <button type="button" className="callback-btn" data-bs-toggle="modal" data-bs-target="#centeredModal">
            Request A Call Back
          </button>
        </div>
      </div>
    </section>
  );
}
