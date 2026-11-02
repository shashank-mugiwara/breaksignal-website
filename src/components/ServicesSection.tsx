const CAPABILITIES = [
  {
    code: "A1",
    title: "Regulated Financial & Insurance Systems",
    body: "NBFC underwriting pipelines, automated reconciliation, and V-KYC tooling with zero third-party data leakage.",
    proof: ["NBFC underwriting cores", "Automated reconciliation rails", "V-KYC capture & review tooling"],
  },
  {
    code: "A2",
    title: "Distributed Backends & Search Engines",
    body: "Sub-50ms PostgreSQL inverted search, Redis event streaming, and high-concurrency epoll/NIO event loops.",
    proof: ["Sub-50ms P99 inverted search", "Redis streams as the event spine", "epoll / NIO concurrency loops"],
  },
  {
    code: "A3",
    title: "Autonomous Operational Agent Fleets",
    body: "Self-healing platform watchdogs and synthetic audit workers that probe your stack before real incidents do.",
    proof: ["Self-healing platform watchdogs", "Synthetic audit workers", "24×7 fleet coverage with human verdicts"],
  },
] as const;

const RESIDENCY = [
  {
    value: "vpc",
    label: "Client-Owned India VPC (AWS/GCP/Azure)",
    detail:
      "Deployed inside your cloud account in an Indian region. You hold the keys, IAM, and audit trail. Ideal for regulated workloads where your cloud tenancy is the security boundary.",
    notes: ["Your tenancy, your KMS keys", "BreakSignal operates via scoped runbooks", "Audit logs exported to your bucket"],
  },
  {
    value: "bare-metal",
    label: "BreakSignal Isolated Bare-Metal Cluster",
    detail:
      "Single-tenant physical hardware with no hypervisor and no third-party dependency. Hard isolation for workloads that cannot tolerate shared infrastructure or vendor-side data paths.",
    notes: ["No hypervisor, no shared kernel paths", "Physically pinned to Indian data centres", "Immutable audit ledger on local disks"],
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

      <fieldset className="residency-toggle">
        <legend className="toggle-legend">Data residency — choose the boundary your workload lives inside:</legend>
        <div className="segmented" role="radiogroup" aria-label="Data residency mode">
          {RESIDENCY.map((mode) => (
            <label
              key={mode.value}
              className={mode.value === "vpc" ? "segment is-checked" : "segment"}
            >
              <input
                type="radio"
                name="residency"
                value={mode.value}
                defaultChecked={mode.value === "vpc"}
                className="visually-hidden"
              />
              <span className="segment-label">{mode.label}</span>
            </label>
          ))}
        </div>
        <div className="toggle-details">
          {RESIDENCY.map((mode) => (
            <div key={mode.value} className="toggle-detail">
              <p className="toggle-detail-body">{mode.detail}</p>
              <ul className="proof-list">
                {mode.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </fieldset>
    </section>
  );
}
