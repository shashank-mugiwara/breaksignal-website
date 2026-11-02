import { useState } from "react";

type ProjectType = "fintech" | "internal-tool" | "concurrency-api";
type ResidencyMode = "vpc" | "bare-metal";
type ScaleTier = "standard" | "high" | "extreme";

const PROJECT_TYPES: Record<ProjectType, { label: string; blueprint: string; baseWeeks: number }> = {
  fintech: {
    label: "Fintech / Regulated",
    blueprint:
      "Event-sourced underwriting core on PostgreSQL, Redis stream spine for reconciliation, V-KYC capture pipeline, and an immutable audit ledger for every agent action. Regulated workflows get dual human-verified sign-off gates.",
    baseWeeks: 9,
  },
  "internal-tool": {
    label: "Internal Tool / Ops",
    blueprint:
      "AgentManage runtime wrapping your backlog: beads DAG task trees, automated compiler passes as merge gates, ops dashboards with synthetic audit workers probing the stack 24×7.",
    baseWeeks: 5,
  },
  "concurrency-api": {
    label: "High-Concurrency API",
    blueprint:
      "epoll/NIO non-blocking event loops fronting PostgreSQL inverted search, Redis Streams as the event spine, bounded worker pools with backpressure queues, and P99 budgets enforced in CI.",
    baseWeeks: 7,
  },
};

const RESIDENCY: Record<ResidencyMode, { label: string; extraWeeks: number } > = {
  vpc: {
    label: "Client-Owned India VPC (AWS/GCP/Azure)",
    extraWeeks: 1, // tenancy integration, IAM scoping, key handover
  },
  "bare-metal": {
    label: "BreakSignal Isolated Bare-Metal Cluster",
    extraWeeks: 2, // physical provisioning and hard isolation hardening
  },
};

const TIERS: Record<ScaleTier, { label: string; extraWeeks: number; checklist: string[] }> = {
  standard: {
    label: "Standard (≤ 1k rps, ≤ 10 GB/day)",
    extraWeeks: 0,
    checklist: ["DPDP data-residency attestation (India region pin)", "Zero third-party data-egress audit"],
  },
  high: {
    label: "High (≤ 25k rps, ≤ 500 GB/day)",
    extraWeeks: 2,
    checklist: [
      "Load test at tier peak with sustained soak (24h)",
      "Redis / event-spine failover drill",
      "P99 budget enforced as a CI gate",
    ],
  },
  extreme: {
    label: "Extreme (> 25k rps, custom)",
    extraWeeks: 4,
    checklist: [
      "epoll/NIO event-loop concurrency certification at target fan-out",
      "Search index sharding + query-router benchmark proof",
      "Chaos drills: node kill, network partition, index rebuild",
      "Immutable audit ledger integrity verification",
    ],
  },
};

const BASE_CHECKLIST = [
  "Agent actions recorded in the immutable audit trail",
  "Human-in-the-loop verdict on every merge",
  "No model lock-in: open + frontier fleet provisioned from day one",
];

export default function ArchitectureEstimator() {
  const [projectType, setProjectType] = useState<ProjectType>("fintech");
  const [residency, setResidency] = useState<ResidencyMode>("vpc");
  const [tier, setTier] = useState<ScaleTier>("standard");

  const blueprint = PROJECT_TYPES[projectType];
  const residencyMode = RESIDENCY[residency];
  const scaleTier = TIERS[tier];

  const weeks = blueprint.baseWeeks + residencyMode.extraWeeks + scaleTier.extraWeeks;
  const traditionalMonths = Math.ceil((weeks * 2.1) / 4);

  const securityChecklist = [
    ...BASE_CHECKLIST,
    ...residency === "vpc"
      ? ["Tenancy isolation: your KMS keys, your IAM boundary, your region"]
      : ["Hard isolation: single-tenant bare metal, no hypervisor, no third-party dependency"],
    ...scaleTier.checklist.map((item) => `Tier gate (${scaleTier.label}): ${item}`),
  ];

  return (
    <section id="estimator" className="section" aria-labelledby="estimator-title">
      <header className="section-head">
        <p className="eyebrow">SCOPING</p>
        <h2 id="estimator-title" className="section-title">
          Interactive Architecture &amp; Project Estimator
        </h2>
        <p className="section-lede">
          Select a shape and the estimator outputs the blueprint, the delivery
          horizon, and the security boundary checklist we would hold ourselves
          to.
        </p>
      </header>

      <div className="estimator-grid">
        <form className="panel estimator-controls" aria-label="Estimator inputs">
          <RadioGroup
            legend="Project type"
            name="project-type"
            options={(Object.keys(PROJECT_TYPES) as ProjectType[]).map((value) => ({
              value,
              label: PROJECT_TYPES[value].label,
            }))}
            checked={projectType}
            onChange={(value) => setProjectType(value as ProjectType)}
          />
          <RadioGroup
            legend="Data residency mode"
            name="residency-mode"
            options={(Object.keys(RESIDENCY) as ResidencyMode[]).map((value) => ({
              value,
              label: RESIDENCY[value].label,
            }))}
            checked={residency}
            onChange={(value) => setResidency(value as ResidencyMode)}
          />
          <RadioGroup
            legend="Scale tier"
            name="scale-tier"
            options={(Object.keys(TIERS) as ScaleTier[]).map((value) => ({
              value,
              label: TIERS[value].label,
            }))}
            checked={tier}
            onChange={(value) => setTier(value as ScaleTier)}
          />
        </form>

        <div className="estimator-output">
          <div className="panel">
            <h3 className="output-label">Recommended architecture blueprint</h3>
            <p className="output-title">{blueprint.label}</p>
            <p className="output-body">{blueprint.blueprint}</p>
            <p className="output-meta">Residency: {residencyMode.label}</p>
          </div>

          <div className="panel">
            <h3 className="output-label">Delivery horizon</h3>
            <p className="horizon">
              <span className="horizon-weeks">{weeks} weeks</span>
              <span className="horizon-vs">
                vs the traditional {traditionalMonths}+ months of committee-paced delivery
              </span>
            </p>
            <p className="output-meta">
              Base {blueprint.baseWeeks} weeks + {residencyMode.extraWeeks} residency
              + {scaleTier.extraWeeks} tier hardening.
            </p>
          </div>

          <div className="panel">
            <h3 className="output-label">Security boundary checklist</h3>
            <ul className="checklist">
              {securityChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

interface RadioGroupProps {
  legend: string;
  name: string;
  options: Array<{ value: string; label: string }>;
  checked: string;
  onChange: (value: string) => void;
}

function RadioGroup({ legend, name, options, checked, onChange }: RadioGroupProps) {
  return (
    <fieldset className="control-group">
      <legend className="control-legend">{legend}</legend>
      <div className="control-options" role="radiogroup" aria-label={legend}>
        {options.map((option) => (
          <label
            key={option.value}
            className={option.value === checked ? "segment is-checked" : "segment"}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={option.value === checked}
              onChange={() => onChange(option.value)}
              className="visually-hidden"
            />
            <span className="segment-label">{option.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
