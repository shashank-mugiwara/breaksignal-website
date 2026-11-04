import { FAQ_CONTENT } from "../content";

export default function FaqSection() {
  return (
    <section id="faq" className="section" aria-labelledby="faq-title">
      <header className="section-head">
        <h2 id="faq-title" className="section-title">
          {FAQ_CONTENT.heading}
        </h2>
      </header>

      <div className="faq-list">
        {FAQ_CONTENT.items.map((item) => (
          <details key={item.question} className="faq-item">
            <summary className="faq-summary">
              <span>{item.question}</span>
              <span className="faq-indicator" aria-hidden="true">
                +
              </span>
            </summary>
            <p className="faq-answer">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
