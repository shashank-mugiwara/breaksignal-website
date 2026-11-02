import { useState } from "react";

interface CaseStudy {
  name: string;
  tagline: string;
  description: string;
  metrics: Array<{ value: string; label: string }>;
  flow: string[];
  snippets: Array<{ label: string; code: string }>;
}

const CASES: Array<CaseStudy> = [
  {
    name: "PostgreSQL Event Search Engine",
    tagline: "10M+ events indexed — sub-40ms P99",
    description:
      "A custom inverted index over PostgreSQL combining GIN with pg_trgm, fed by Redis event streams. Full-text search across ten million+ events hovers at a sub-40ms P99 — no third-party search vendor, no data leaves the VPC.",
    metrics: [
      { value: "10M+", label: "events indexed" },
      { value: "<40ms", label: "P99 query latency" },
      { value: "12k/s", label: "sustained ingest" },
      { value: "0", label: "third-party egress" },
    ],
    flow: [
      "Event producers",
      "Redis Streams",
      "Batch indexer worker",
      "GIN + pg_trgm index",
      "Query router",
      "P99 < 40ms response",
    ],
    snippets: [
      {
        label: "schema.sql",
        code: `-- Events table with trigram-backed full-text index
CREATE TABLE events (
  id          BIGSERIAL PRIMARY KEY,
  source      TEXT NOT NULL,
  payload     JSONB NOT NULL,
  body        TEXT NOT NULL,
  occurred_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- The P99 winner: trigram GIN over the body
CREATE INDEX events_body_trgm_idx
  ON events USING GIN (body gin_trgm_ops);

CREATE INDEX events_source_time_idx
  ON events (source, occurred_at DESC);`,
      },
      {
        label: "search.sql",
        code: `-- Warm-cache miss path; cold path stays < 40ms at P99
SELECT id, source, body, occurred_at
FROM events
WHERE source = $1
  AND body % $2            -- pg_trgm similarity prefilter
ORDER BY occurred_at DESC
LIMIT 50;

-- Planner proves index usage before anything ships:
EXPLAIN (ANALYZE, BUFFERS) ...
-- -> Bitmap Index Scan on events_body_trgm_idx`,
      },
    ],
  },
  {
    name: "AtomicSync Biometric Engine",
    tagline: "Real-time sensor processing — zero-leakage local aggregation",
    description:
      "Real-time biometric sensor processing where aggregation happens locally and only signed digests leave the device. Raw samples are never transferred: the leakage surface is structural, not procedural.",
    metrics: [
      { value: "1,024", label: "concurrent sensor sessions" },
      { value: "250Hz", label: "sample processing rate" },
      { value: "0B", label: "raw samples transmitted" },
      { value: "100%", label: "aggregation on-device" },
    ],
    flow: [
      "Biometric sensors",
      "On-device ring buffer",
      "Frame processor",
      "Rolling local aggregate",
      "Signed digest (attested)",
      "Encrypted upload only",
    ],
    snippets: [
      {
        label: "aggregate.py",
        code: `def roll(session: SensorSession) -> SignedDigest:
    """Aggregate in device memory. Raw frames never leave this scope."""
    acc = RollingAccumulator(window=250)   # 1s @ 250Hz
    for frame in session.frames():         # reads the ring buffer
        acc.push(frame.detach_copy())      # no shared references
    digest = acc.digest()                  # local aggregation only
    return attest(digest, KEY_ENCLAVE)     # sign on secure element`,
      },
      {
        label: "transport.py",
        code: `def upload(digest: SignedDigest, channel) -> Receipt:
    # Structural zero-leakage: only the attested type is serializable.
    match digest:
        case SignedDigest():
            return channel.send(digest.encode())
        case _:
            raise ZeroLeakageError(
                "raw frames are not transportable by construction",
            )`,
      },
    ],
  },
  {
    name: "High-Performance NIO Multiplexer",
    tagline: "Non-blocking selector driving 50k concurrent TCP clients",
    description:
      "A non-blocking socket selector (epoll underneath java.nio on Linux) multiplexing tens of thousands of concurrent TCP client events with a bounded thread pool. No thread-per-connection, no reactor framework dependency.",
    metrics: [
      { value: "50k", label: "concurrent TCP clients" },
      { value: "300k/s", label: "events dispatched" },
      { value: "<5ms", label: "P99 event dispatch" },
      { value: "4", label: "selector threads total" },
    ],
    flow: [
      "TCP accept loop",
      "Selector registration",
      "epoll / NIO selector",
      "Ready-key drain ring",
      "Protocol decode",
      "Worker pool (bounded)",
    ],
    snippets: [
      {
        label: "Multiplexer.java",
        code: `Selector selector = Selector.open();          // epoll on Linux
serverChannel.configureBlocking(false);
serverChannel.register(selector, OP_ACCEPT);

while (true) {
    selector.select();                        // park until events
    for (var key : selector.selectedKeys()) {
        if (key.isAcceptable())      accept(key, selector);
        else if (key.isReadable())   drain(key);   // non-blocking read
        key.reset();                              // no missed ready keys
    }
}`,
      },
      {
        label: "WorkerPool.java",
        code: `// Decode off the selector thread; bound the pool, never growth-shock
private static final ExecutorService WORKERS =
    new ThreadPoolExecutor(
        4, 4,                                  // fixed, predictable
        60, SECONDS,
        new ArrayBlockingQueue<>(10_000),      // backpressure, not OOM
        new CallerRunsPolicy());

void drain(SelectionKey key) {
    socket.read(buffer);
    WORKERS.execute(() -> protocol.decode(flip(buffer)));
}`,
      },
    ],
  },
];

export default function ArchitectureProof() {
  const [active, setActive] = useState(0);

  return (
    <section id="proof" className="section" aria-labelledby="proof-title">
      <header className="section-head">
        <p className="eyebrow">TRACK C</p>
        <h2 id="proof-title" className="section-title">
          Technical Proof: Case Studies You Can Compile
        </h2>
        <p className="section-lede">
          Not screenshots — systems. Each case study carries its metrics, its
          architecture flow, and the snippets that implement the claimed
          behaviour.
        </p>
      </header>

      <div className="tabs" role="tablist" aria-label="Case study selector">
        {CASES.map((study, index) => (
          <button
            key={study.name}
            role="tab"
            id={`proof-tab-${index}`}
            aria-selected={index === active}
            aria-controls={`proof-panel-${index}`}
            tabIndex={index === active ? 0 : -1}
            className={`tab${index === active ? " is-active" : ""}`}
            onClick={() => setActive(index)}
            onKeyDown={(event) => {
              if (event.key === "ArrowRight") setActive((active + 1) % CASES.length);
              if (event.key === "ArrowLeft") setActive((active - 1 + CASES.length) % CASES.length);
            }}
          >
            {study.name}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`proof-panel-${active}`}
        aria-labelledby={`proof-tab-${active}`}
        className="proof-panel panel"
      >
        <h3 className="proof-tagline">{CASES[active].tagline}</h3>
        <p className="proof-description">{CASES[active].description}</p>

        <dl className="metrics">
          {CASES[active].metrics.map((metric) => (
            <div key={metric.label} className="metric">
              <dt className="metric-label">{metric.label}</dt>
              <dd className="metric-value">{metric.value}</dd>
            </div>
          ))}
        </dl>

        <h4 className="proof-subtitle">Architecture flow</h4>
        <div className="flow" aria-label="Architecture flow diagram">
          {CASES[active].flow.map((node, index) => (
            <span key={node} className="flow-seq">
              <span className="flow-node">{node}</span>
              {index < CASES[active].flow.length - 1 && (
                <span className="flow-arrow" aria-hidden="true">
                  →
                </span>
              )}
            </span>
          ))}
        </div>

        <h4 className="proof-subtitle">Verifiable snippets</h4>
        <div className="code-tabs">
          {CASES[active].snippets.map((snippet, index) => (
            <button
              key={snippet.label}
              className={`code-tab${index === 0 ? " is-active" : ""}`}
              onClick={(event) => {
                const parent = event.currentTarget.parentElement as HTMLElement;
                for (const sibling of parent.querySelectorAll<HTMLButtonElement>(".code-tab")) {
                  sibling.classList.remove("is-active");
                }
                event.currentTarget.classList.add("is-active");
                const group = parent.parentElement as HTMLElement;
                const panes = group.querySelectorAll<HTMLElement>(".codeblock");
                panes.forEach((pane) => pane.classList.remove("is-visible"));
                panes[index]?.classList.add("is-visible");
              }}
            >
              {snippet.label}
            </button>
          ))}
          {CASES[active].snippets.map((snippet, index) => (
            <pre
              key={snippet.label}
              className={`codeblock${index === 0 ? " is-visible" : ""}`}
            >
              <code>{snippet.code}</code>
            </pre>
          ))}
        </div>
      </div>
    </section>
  );
}
