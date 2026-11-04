const SECTIONS = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "AgentManage", href: "#agentmanage" },
  { label: "Contact", href: "#contact" },
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


      </div>

      <p className="footer-fineprint">
        © {new Date().getFullYear()} BreakSignal. The signal stays on.
      </p>
    </footer>
  );
}
