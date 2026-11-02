const RESOURCES = [
  { label: "Engineering Blog", href: "https://breaksignal.com", external: true },
  { label: "VIP Dashboard", href: "https://vipdashboard.breaksignal.com", external: true },
  { label: "Ops Monitor", href: "https://ops.breaksignal.com", external: true },
  { label: "GitHub", href: "https://github.com/breaksignal", external: true },
] as const;

const SECTIONS = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "AgentManage", href: "#agentmanage" },
  { label: "Technical Proof", href: "#proof" },
  { label: "Fleet Economics", href: "#economics" },
  { label: "Estimator", href: "#estimator" },
  { label: "Client Intake", href: "#contact" },
] as const;

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <a href="#top" className="brand">
            <span className="brand-pulse" aria-hidden="true" />
            <span className="brand-name">
              BREAKSIGNAL<span className="brand-sep">{"//"}</span>AI SYSTEMS
            </span>
          </a>
          <p className="footer-entity">
            BreakSignal Technologies Private Limited
            <br />
            (Under Incorporation | MCA SPICe+ SRN: AC7300076)
          </p>
          <p className="footer-mail">
            <a href="mailto:hello@breaksignal.dev">hello@breaksignal.dev</a>
          </p>
        </div>

        <nav className="footer-col" aria-label="Site sections">
          <h3 className="footer-heading">Site</h3>
          <ul className="footer-links">
            {SECTIONS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer-col" aria-label="Back office">
          <h3 className="footer-heading">Back office</h3>
          <ul className="footer-links">
            {RESOURCES.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-col footer-commitment">
          <h3 className="footer-heading">Security &amp; DPDP compliance</h3>
          <p className="footer-commitment-body">
            Every workload runs inside an India-resident boundary — your VPC or
            our isolated bare-metal cluster. Zero third-party data egress by
            construction, immutable audit trails on all agent actions, and
            human-in-the-loop verification as a standing commitment. DPDP
            compliance is architecture here, not paperwork.
          </p>
        </div>
      </div>

      <p className="footer-fineprint">
        © {new Date().getFullYear()} BreakSignal Technologies Private Limited. The signal stays on.
      </p>
    </footer>
  );
}
