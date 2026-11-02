import { useId, useState } from "react";
import type { FormEvent } from "react";

const PIPELINE_STEPS = [
  { code: "01", title: "Spec intake", body: "Outcome spec passes human review before any agent writes a line." },
  { code: "02", title: "Task DAG (beads)", body: "The plan compiles into a beads DAG task tree — every unit is checkable." },
  { code: "03", title: "Agent swarm execution", body: "Open + frontier model fleet executes tasks in parallel, isolated per worker." },
  { code: "04", title: "Compiler & static passes", body: "Automated compiler passes gate every commit: types, lint, tests, proofs." },
  { code: "05", title: "Immutable audit trail", body: "Every read, write, and verdict is append-only recorded. Nothing is rewritten." },
  { code: "06", title: "Human verdict merge", body: "A named engineer signs off. The merge is a verdict, not a vibe." },
] as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function AgentManageSection() {
  const id = useId();
  const emailId = `${id}-email`;
  const emailHintId = `${id}-email-hint`;
  const emailErrorId = `${id}-email-error`;

  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);
  const [registered, setRegistered] = useState<string | null>(null);

  const emailError = !email
    ? "A work email is required to reserve a pilot slot."
    : EMAIL_PATTERN.test(email)
      ? null
      : "Enter an email in the form name@company.tld.";

  const emailInvalid = touched && emailError !== null;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTouched(true);
    if (emailError !== null) return;
    setRegistered(email.trim());
  }

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

      <div className="waitlist panel">
        <h3 className="waitlist-title">Pilot Registration</h3>
        <p className="waitlist-lede">
          Join the first cohort of teams running AgentManage against a real
          backlog. Seat-limited; we reply within two business days.
        </p>

        {registered === null ? (
          <form className="waitlist-form" noValidate onSubmit={handleSubmit}>
            <div className="field">
              <div className="field-head">
                <label htmlFor={emailId} className="field-label">
                  Work email <span aria-hidden="true" className="field-required">*</span>
                </label>
                {emailInvalid && (
                  <p
                    id={emailErrorId}
                    className="field-error"
                    role="alert"
                  >
                    {emailError}
                  </p>
                )}
              </div>
              <input
                id={emailId}
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@company.in"
                className="field-control"
                aria-describedby={emailHintId}
                aria-invalid={emailInvalid || undefined}
                aria-errormessage={emailInvalid ? emailErrorId : undefined}
                onBlur={() => setTouched(true)}
                onChange={(event) => {
                  setTouched(true);
                  setEmail(event.target.value);
                }}
              />
              <p id={emailHintId} className="hint">
                Validated as you type. Format: name@company.tld
              </p>
            </div>
            <button type="submit" className="button">
              {emailInvalid ? "Fix email to continue" : "Join Waitlist"}
            </button>
          </form>
        ) : (
          <div className="success-panel" role="status" aria-live="polite">
            <p className="success-title">Registered — check your inbox.</p>
            <p className="success-body">
              <strong>{registered}</strong> is in the pilot queue. The intake
              brief (architecture template, security questionnaire, and pilot
              scope doc) is on its way.
            </p>
          </div>
        )}

        <p className="waitlist-note">
          Pilot submissions land in the intake ledger at{" "}
          <a href="https://vipdashboard.breaksignal.com" target="_blank" rel="noreferrer">
            vipdashboard.breaksignal.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
