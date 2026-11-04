const PIPELINE_STEPS = [
  { code: "01", title: "Spec intake", body: "Outcome spec passes human review before any agent writes a line." },
  { code: "02", title: "Task DAG (beads)", body: "The plan compiles into a beads DAG task tree — every unit is checkable." },
  { code: "03", title: "Agent swarm execution", body: "Open + frontier model fleet executes tasks in parallel, isolated per worker." },
  { code: "04", title: "Compiler & static passes", body: "Automated compiler passes gate every commit: types, lint, tests." },
  { code: "05", title: "Immutable audit trail", body: "Every read, write, and verdict is append-only recorded. Nothing is rewritten." },
  { code: "06", title: "Human verdict merge", body: "A named engineer signs off. The merge is a verdict, not a vibe." },
] as const;

export default function AgentManageSection() {
  return (
    <section id="agentmanage" className="section" aria-labelledby="agentmanage-title">
      <header className="section-head">
        <p className="eyebrow">TRACK B</p>
        <h2 id="agentmanage-title" className="section-title">
          AgentManage: The Proprietary Software Factory Runtime
        </h2>
        <p className="section-lede">
          Multi-agent swarms execute code inside a runtime that measures them:
          automated compiler passes reject what does not compile, a beads DAG
          task tree makes every task an addressable unit, and an immutable
          audit trail records every action taken. Every merge is a verdict,
          not a vibe.
        </p>
      </header>

      <ol className="pipeline" aria-label="AgentManage execution pipeline">
        {PIPELINE_STEPS.map((step) => (
          <li key={step.code} className="panel pipeline-step">
            <p className="pipeline-code">{step.code}</p>
            <h3 className="pipeline-title">{step.title}</h3>
            <p className="pipeline-body">{step.body}</p>
          </li>
        ))}
      </ol>

    </section>
  );
}
