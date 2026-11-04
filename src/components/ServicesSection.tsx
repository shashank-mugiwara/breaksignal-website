const CAPABILITIES = [
  {
    code: "A1",
    title: "Regulated Financial & Insurance Systems",
    body: "NBFC underwriting pipelines, automated reconciliation, and V-KYC tooling.",
    proof: ["NBFC underwriting pipelines", "Automated reconciliation", "V-KYC capture & review tooling"],
  },
  {
    code: "A2",
    title: "Distributed Backends & Search Engines",
    body: "PostgreSQL-backed search, Redis event streaming, and high-concurrency event loops.",
    proof: ["PostgreSQL search", "Redis streams as the event spine", "Non-blocking concurrency loops"],
  },
  {
    code: "A3",
    title: "Autonomous Operational Agent Fleets",
    body: "Self-healing platform watchdogs and synthetic audit workers that probe your stack before real incidents do.",
    proof: ["Self-healing platform watchdogs", "Synthetic audit workers", "Human verdicts on agent work"],
  },
] as const;


export default function ServicesSection() {
  return (
    <section id="capabilities" className="section" aria-labelledby="capabilities-title">
      <header className="section-head">
        <p className="eyebrow">TRACK A</p>
        <h2 id="capabilities-title" className="section-title">
          Capabilities: Bespoke Systems & Engineering
        </h2>
        <p className="section-lede">
          We take the squads that ship the systems. Every engagement runs
          through the AgentManage pipeline — compiled, audited, human-verified.
        </p>
      </header>

      <div className="grid-3">
        {CAPABILITIES.map((cap) => (
          <article key={cap.code} className="panel cap-card">
            <p className="cap-code">{cap.code}</p>
            <h3 className="cap-title">{cap.title}</h3>
            <p className="cap-body">{cap.body}</p>
            <ul className="proof-list">
              {cap.proof.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

    </section>
  );
}
