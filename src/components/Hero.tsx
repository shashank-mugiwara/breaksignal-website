const GUARANTEES = [
  "Zero Model Lock-in (Open & Frontier Models)",
  "India Cloud Data Residency (DPDP Compliant)",
  "Human-in-the-Loop Verification",
] as const;

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <p className="hero-eyebrow">TRACK A — BESPOKE SYSTEMS ENGINEERING</p>
      <h1 id="hero-title" className="hero-title">
        Bespoke Software Engineering Accelerated by Autonomous Multi-Agent
        Swarms.
      </h1>
      <p className="hero-lede">
        We engineer, build, and operate production-grade distributed backends,
        regulated financial workflows, and internal tooling via human-verified
        AI agent pipelines.
      </p>

      <ul className="guarantee-tags" aria-label="Key guarantees">
        {GUARANTEES.map((tag) => (
          <li key={tag} className="tag">
            {tag}
          </li>
        ))}
      </ul>

      <div className="hero-actions">
        <a href="#estimator" className="button">
          Configure Architecture
        </a>
        <a href="#contact" className="button button-ghost">
          Client Intake
        </a>
      </div>
    </section>
  );
}
