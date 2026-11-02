import { useEffect, useId, useRef, useState } from "react";
import type { FormEvent } from "react";

interface Values {
  name: string;
  email: string;
  requirements: string;
  budget: string;
  cloud: string;
  consent: boolean;
}

const BUDGET_OPTIONS = [
  "Under ₹10 lakh",
  "₹10 lakh – ₹50 lakh",
  "₹50 lakh – ₹2 crore",
  "Above ₹2 crore",
] as const;

const CLOUD_OPTIONS = [
  "Client-owned AWS / GCP / Azure VPC (India region)",
  "BreakSignal isolated bare-metal cluster",
  "Not sure yet — advise us",
] as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function ContactIntake() {
  const uid = useId();
  const [values, setValues] = useState<Values>({
    name: "",
    email: "",
    requirements: "",
    budget: "",
    cloud: "",
    consent: false,
  });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  // Errors are computed from live values; they only *render* for fields the
  // user has interacted with (or after a submit attempt).
  const errors: Partial<Record<keyof Values, string>> = {};
  if (!values.name.trim()) errors.name = "Enter your name so we know who is signalling.";
  else if (values.name.trim().length < 2) errors.name = "Name needs at least 2 characters.";
  if (!values.email) errors.email = "A work email is required — it is how we reply.";
  else if (!EMAIL_PATTERN.test(values.email)) errors.email = "Email must look like name@company.tld.";
  if (values.requirements.trim().length < 30)
    errors.requirements = "Describe the problem in at least 30 characters — constraints, deadline, and data sensitivity.";
  if (!values.budget) errors.budget = "Select a budget range.";
  if (!values.cloud) errors.cloud = "Select a cloud preference.";
  if (!values.consent) errors.consent = "Consent is required to process this intake under DPDP.";

  const touchedError = (field: keyof Values) =>
    (touched[field] || submitted) && errors[field] !== undefined;

  function markTouched(field: keyof Values) {
    setTouched((prev) => ({ ...prev, [field]: true }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    if (Object.keys(errors).length === 0) {
      // Real submission is a form POST handled server-side; this static site
      // demonstrates the successful state.
    }
  }

  if (submitted && Object.keys(errors).length === 0) {
    return (
      <section id="contact" className="section" aria-labelledby="contact-title">
        <SuccessPanel name={values.name.trim()} email={values.email} />
      </section>
    );
  }

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <header className="section-head">
        <p className="eyebrow">INTAKE</p>
        <h2 id="contact-title" className="section-title">
          Client Intake &amp; Contact
        </h2>
        <p className="section-lede">
          Tell us what needs engineering. Every field states its constraint
          before you type; feedback appears only after you interact.
        </p>
      </header>

      <form className="panel intake-form" noValidate onSubmit={handleSubmit}>
        <div className="field">
          <div className="field-head">
            <label htmlFor={`${uid}-name`} className="field-label">
              Full name <span className="field-required" aria-hidden="true">*</span>
            </label>
            <p id={`${uid}-name-hint`} className="hint">
              2–80 characters. Use the name your organisation recognises.
            </p>
            {touchedError("name") && (
              <p id={`${uid}-name-error`} className="field-error" role="alert">
                {errors.name}
              </p>
            )}
          </div>
          <input
            id={`${uid}-name`}
            name="name"
            type="text"
            autoComplete="name"
            required
            minLength={2}
            maxLength={80}
            className="field-control"
            aria-describedby={`${uid}-name-hint${touchedError("name") ? ` ${uid}-name-error` : ""}`}
            aria-invalid={touchedError("name") || undefined}
            aria-errormessage={touchedError("name") ? `${uid}-name-error` : undefined}
            value={values.name}
            onBlur={() => markTouched("name")}
            onChange={(event) => {
              markTouched("name");
              setValues((prev) => ({ ...prev, name: event.target.value }));
            }}
          />
        </div>

        <div className="field">
          <div className="field-head">
            <label htmlFor={`${uid}-email`} className="field-label">
              Work email <span className="field-required" aria-hidden="true">*</span>
            </label>
            <p id={`${uid}-email-hint`} className="hint">
              Format: name@company.tld. Personal addresses are fine for pilots.
            </p>
            {touchedError("email") && (
              <p id={`${uid}-email-error`} className="field-error" role="alert">
                {errors.email}
              </p>
            )}
          </div>
          <input
            id={`${uid}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            className="field-control"
            aria-describedby={`${uid}-email-hint${touchedError("email") ? ` ${uid}-email-error` : ""}`}
            aria-invalid={touchedError("email") || undefined}
            aria-errormessage={touchedError("email") ? `${uid}-email-error` : undefined}
            value={values.email}
            onBlur={() => markTouched("email")}
            onChange={(event) => {
              markTouched("email");
              setValues((prev) => ({ ...prev, email: event.target.value }));
            }}
          />
        </div>

        <div className="field">
          <div className="field-head">
            <label htmlFor={`${uid}-requirements`} className="field-label">
              Client requirements <span className="field-required" aria-hidden="true">*</span>
            </label>
            <p id={`${uid}-requirements-hint`} className="hint">
              At least 30 characters. Include constraints, deadlines, and how sensitive the data is.
            </p>
            {touchedError("requirements") && (
              <p id={`${uid}-requirements-error`} className="field-error" role="alert">
                {errors.requirements}
              </p>
            )}
          </div>
          <textarea
            id={`${uid}-requirements`}
            name="requirements"
            required
            rows={5}
            className="field-control"
            aria-describedby={`${uid}-requirements-hint${touchedError("requirements") ? ` ${uid}-requirements-error` : ""}`}
            aria-invalid={touchedError("requirements") || undefined}
            aria-errormessage={touchedError("requirements") ? `${uid}-requirements-error` : undefined}
            value={values.requirements}
            onBlur={() => markTouched("requirements")}
            onChange={(event) => {
              markTouched("requirements");
              setValues((prev) => ({ ...prev, requirements: event.target.value }));
            }}
          />
        </div>

        <div className="field-pair">
          <div className="field">
            <div className="field-head">
              <label htmlFor={`${uid}-budget`} className="field-label">
                Budget range <span className="field-required" aria-hidden="true">*</span>
              </label>
              <p id={`${uid}-budget-hint`} className="hint">
                An honest range gets an honest scope.
              </p>
              {touchedError("budget") && (
                <p id={`${uid}-budget-error`} className="field-error" role="alert">
                  {errors.budget}
                </p>
              )}
            </div>
            <select
              id={`${uid}-budget`}
              name="budget"
              required
              className="field-control"
              aria-describedby={`${uid}-budget-hint${touchedError("budget") ? ` ${uid}-budget-error` : ""}`}
              aria-invalid={touchedError("budget") || undefined}
              aria-errormessage={touchedError("budget") ? `${uid}-budget-error` : undefined}
              value={values.budget}
              onBlur={() => markTouched("budget")}
              onChange={(event) => {
                markTouched("budget");
                setValues((prev) => ({ ...prev, budget: event.target.value }));
              }}
            >
              <option value="" disabled>
                Select a range…
              </option>
              {BUDGET_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <div className="field-head">
              <label htmlFor={`${uid}-cloud`} className="field-label">
                Cloud preference <span className="field-required" aria-hidden="true">*</span>
              </label>
              <p id={`${uid}-cloud-hint`} className="hint">
                Decides the residency mode — your VPC or our bare-metal cluster.
              </p>
              {touchedError("cloud") && (
                <p id={`${uid}-cloud-error`} className="field-error" role="alert">
                  {errors.cloud}
                </p>
              )}
            </div>
            <select
              id={`${uid}-cloud`}
              name="cloud"
              required
              className="field-control"
              aria-describedby={`${uid}-cloud-hint${touchedError("cloud") ? ` ${uid}-cloud-error` : ""}`}
              aria-invalid={touchedError("cloud") || undefined}
              aria-errormessage={touchedError("cloud") ? `${uid}-cloud-error` : undefined}
              value={values.cloud}
              onBlur={() => markTouched("cloud")}
              onChange={(event) => {
                markTouched("cloud");
                setValues((prev) => ({ ...prev, cloud: event.target.value }));
              }}
            >
              <option value="" disabled>
                Select a preference…
              </option>
              {CLOUD_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="field">
          <div className="field-head">
            <div className="field-label">
              <input
                id={`${uid}-consent`}
                name="consent"
                type="checkbox"
                required
                className="field-checkbox"
                aria-describedby={`${uid}-consent-hint${touchedError("consent") ? ` ${uid}-consent-error` : ""}`}
                aria-invalid={touchedError("consent") || undefined}
                aria-errormessage={touchedError("consent") ? `${uid}-consent-error` : undefined}
                checked={values.consent}
                onBlur={() => markTouched("consent")}
                onChange={(event) => {
                  markTouched("consent");
                  setValues((prev) => ({ ...prev, consent: event.target.checked }));
                }}
              />
              <label htmlFor={`${uid}-consent`} className="field-label-inline">
                I consent to BreakSignal processing this intake under DPDP.{" "}
                <span className="field-required" aria-hidden="true">*</span>
              </label>
            </div>
            <p id={`${uid}-consent-hint`} className="hint">
              Intake data is stored on India-resident infrastructure and never shared with third parties.
            </p>
            {touchedError("consent") && (
              <p id={`${uid}-consent-error`} className="field-error" role="alert">
                {errors.consent}
              </p>
            )}
          </div>
        </div>

        <button type="submit" className="button">
          Submit intake
        </button>
        <p className="form-status" role="status" aria-live="polite">
          {submitted
            ? "Intake not sent yet — the flagged fields above need attention."
            : "All six fields are required."}
        </p>
      </form>
    </section>
  );
}

function SuccessPanel({ name, email }: { name: string; email: string }) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    panelRef.current?.focus();
  }, []);

  return (
    <div ref={panelRef} className="panel success-panel" tabIndex={-1} role="status" aria-live="polite">
      <p className="success-title">Intake received.</p>
      <p className="success-body">
        Thanks, {name}. A confirmation is headed to <strong>{email}</strong>,
        and a BreakSignal engineer (a human, verified) reviews every intake
        within two business days. Expect the first architecture questions in
        that reply — not a sales script.
      </p>
    </div>
  );
}
