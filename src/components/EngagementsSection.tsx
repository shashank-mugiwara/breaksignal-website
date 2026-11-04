import { ENGAGEMENTS_CONTENT } from "../content";

export default function EngagementsSection() {
  return (
    <section id="engagements" className="section" aria-labelledby="engagements-title">
      <header className="section-head">
        <h2 id="engagements-title" className="section-title">
          {ENGAGEMENTS_CONTENT.heading}
        </h2>
        <p className="section-lede">{ENGAGEMENTS_CONTENT.lede}</p>
      </header>

      <div className="engagements-audience-box">
        <p className="engagements-audience-text">{ENGAGEMENTS_CONTENT.audience}</p>
      </div>

      <ol className="engagements-steps" aria-label="Engagement process steps">
        {ENGAGEMENTS_CONTENT.pipeline.map((step) => (
          <li key={step.stepNumber} className="engagement-step-card">
            <span className="engagement-step-num">{step.stepNumber}</span>
            <div className="engagement-step-body">
              <h3 className="engagement-step-title">{step.title}</h3>
              <p className="engagement-step-desc">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="engagements-notes">
        <div className="regulatory-card">
          <h4 className="note-heading">Data Location & Regulations</h4>
          <p className="note-body">{ENGAGEMENTS_CONTENT.regulatoryNote}</p>
        </div>

        <div className="pricing-card">
          <h4 className="note-heading">Pricing Status</h4>
          <p className="note-body">{ENGAGEMENTS_CONTENT.pricingNote}</p>
        </div>
      </div>
    </section>
  );
}
