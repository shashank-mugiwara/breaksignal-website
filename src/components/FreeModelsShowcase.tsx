import { useState } from "react";

interface ModelEntry {
  model: string;
  fleet: "Open / free fleet" | "Frontier (escalation only)";
  input: number; // USD per million input tokens
  output: number; // USD per million output tokens
  medianLatency: string;
  role: string;
}

const FLEET: ModelEntry[] = [
  {
    model: "GLM-5.3-Flash",
    fleet: "Open / free fleet",
    input: 0.02,
    output: 0.08,
    medianLatency: "≈0.3s first token",
    role: "Default worker: routing, drafting, extraction, tool calls",
  },
  {
    model: "DeepSeek V4.1",
    fleet: "Open / free fleet",
    input: 0.27,
    output: 1.1,
    medianLatency: "≈0.8s first token",
    role: "Code generation and test synthesis at compiler gates",
  },
  {
    model: "Qwen",
    fleet: "Open / free fleet",
    input: 0.3,
    output: 1.2,
    medianLatency: "≈0.9s first token",
    role: "Structured output, localisation, long-context audit review",
  },
  {
    model: "Frontier class (propietary labs)",
    fleet: "Frontier (escalation only)",
    input: 3.0,
    output: 15.0,
    medianLatency: "≈2.5s first token",
    role: "Reserved for genuinely hard reasoning steps",
  },
];

/**
 * Typical agentic workload shape: ~80% input tokens (context, tool results),
 * 20% output tokens (acts, diffs, replies).
 */
const INPUT_SHARE = 0.8;

const blendedPrice = (entry: ModelEntry) =>
  entry.input * INPUT_SHARE + entry.output * (1 - INPUT_SHARE);

const openBlendedPrice =
  FLEET.filter((m) => m.fleet === "Open / free fleet").reduce(
    (sum, m) => sum + blendedPrice(m),
    0,
  ) / 3;

const frontierBlendedPrice = blendedPrice(FLEET[FLEET.length - 1]);

const usd = (value: number) =>
  value.toLocaleString("en-IN", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export default function FreeModelsShowcase() {
  const [monthlyMtok, setMonthlyMtok] = useState(500);
  const [openShare, setOpenShare] = useState(90);

  const share = openShare / 100;
  const blendedPerMtok = openBlendedPrice * share + frontierBlendedPrice * (1 - share);
  const allFrontierCost = monthlyMtok * frontierBlendedPrice;
  const blendedCost = monthlyMtok * blendedPerMtok;
  const savings = allFrontierCost - blendedCost;
  const savingsPct = allFrontierCost > 0 ? Math.round((savings / allFrontierCost) * 100) : 0;

  return (
    <section id="economics" className="section" aria-labelledby="economics-title">
      <header className="section-head">
        <p className="eyebrow">FLEET ECONOMICS</p>
        <h2 id="economics-title" className="section-title">
          Free &amp; Open Model Fleet
        </h2>
        <p className="section-lede">
          BreakSignal routes the bulk of every workload through an open/free
          fleet — GLM-5.3-Flash, DeepSeek V4.1, and Qwen — and escalates to
          frontier models only for genuinely complex reasoning steps. You are
          never locked to one model: the fleet is a choice, not a trapdoor.
        </p>
      </header>

      <div className="panel table-panel">
        <table className="fleet-table">
          <caption className="visually-hidden">
            Indicative token economics and latency by model tier
          </caption>
          <thead>
            <tr>
              <th scope="col">Model</th>
              <th scope="col">Fleet tier</th>
              <th scope="col">Input $/Mtok</th>
              <th scope="col">Output $/Mtok</th>
              <th scope="col">Median latency</th>
              <th scope="col">Role in the pipeline</th>
            </tr>
          </thead>
          <tbody>
            {FLEET.map((entry) => (
              <tr
                key={entry.model}
                className={entry.fleet === "Frontier (escalation only)" ? "row-frontier" : undefined}
              >
                <th scope="row">{entry.model}</th>
                <td>{entry.fleet}</td>
                <td>${entry.input.toFixed(2)}</td>
                <td>${entry.output.toFixed(2)}</td>
                <td>{entry.medianLatency}</td>
                <td className="muted">{entry.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="table-footnote">
          Indicative published pricing for comparison; blended per-token cost
          assumes a typical agentic mix of 80% input / 20% output tokens.
        </p>
      </div>

      <div className="panel econ-calculator">
        <h3 className="proof-subtitle">Token economics calculator</h3>
        <p className="econ-lede">
          Move the sliders: same workload, different fleet allocation.
        </p>

        <div className="econ-controls">
          <div className="econ-control">
            <label htmlFor="econ-tokens" className="field-label">
              Monthly volume: {monthlyMtok}M tokens
            </label>
            <input
              id="econ-tokens"
              type="range"
              min={10}
              max={2000}
              step={10}
              value={monthlyMtok}
              onChange={(event) => setMonthlyMtok(Number(event.target.value))}
            />
          </div>
          <div className="econ-control">
            <label htmlFor="econ-share" className="field-label">
              Share of tokens on the open fleet: {openShare}%
            </label>
            <input
              id="econ-share"
              type="range"
              min={0}
              max={100}
              step={5}
              value={openShare}
              onChange={(event) => setOpenShare(Number(event.target.value))}
            />
          </div>
        </div>

        <dl className="metrics">
          <div className="metric">
            <dt className="metric-label">Spend at 100% frontier</dt>
            <dd className="metric-value">{usd(allFrontierCost)}</dd>
          </div>
          <div className="metric">
            <dt className="metric-label">Blended BreakSignal spend</dt>
            <dd className="metric-value metric-value-accent">{usd(blendedCost)}</dd>
          </div>
          <div className="metric">
            <dt className="metric-label">Monthly savings</dt>
            <dd className="metric-value metric-value-accent">
              {usd(savings)} <span className="metric-sub">({savingsPct}%)</span>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
