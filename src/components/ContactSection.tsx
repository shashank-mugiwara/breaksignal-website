import { CONTACT_CONTENT } from "../content";

export default function ContactSection() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <header className="section-head">
        <h2 id="contact-title" className="section-title">
          {CONTACT_CONTENT.heading}
        </h2>
        <p className="section-lede">{CONTACT_CONTENT.lede}</p>
      </header>

      <div className="contact-container">
        <div className="contact-card">
          <div className="contact-email-row">
            <a
              href={`mailto:${CONTACT_CONTENT.email}`}
              className="button button-primary"
            >
              Email Us
            </a>
            <a
              href={`mailto:${CONTACT_CONTENT.email}`}
              className="contact-email-link"
            >
              {CONTACT_CONTENT.email}
            </a>
          </div>

          <div className="contact-advice-box">
            <h3 className="contact-advice-title">What to include in your first email</h3>
            <p className="contact-advice-text">{CONTACT_CONTENT.advice}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
