const NAV_LINKS = [
  { href: "#capabilities", label: "Capabilities" },
  { href: "#agentmanage", label: "AgentManage" },
  { href: "#proof", label: "Technical Proof" },
  { href: "#economics", label: "Fleet Economics" },
  { href: "#estimator", label: "Estimator" },
  { href: "#contact", label: "Contact" },
] as const;

export default function Header() {
  return (
    <header className="site-header">
      <a href="#top" className="brand">
        <span className="brand-pulse" aria-hidden="true" />
        <span className="brand-name">
          BREAKSIGNAL<span className="brand-sep">{"//"}</span>AI SYSTEMS
        </span>
      </a>

      <nav aria-label="Primary" className="site-nav">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} className="nav-link">
            {link.label}
          </a>
        ))}
      </nav>

      <div className="back-office">
        <a
          href="https://breaksignal.com"
          target="_blank"
          rel="noreferrer"
          className="back-office-link"
        >
          Engineering Blog
        </a>
        <a
          href="https://vipdashboard.breaksignal.com"
          target="_blank"
          rel="noreferrer"
          className="back-office-link"
        >
          VIP Portal
          <span className="back-office-dot" aria-hidden="true" />
          <span className="visually-hidden">opens in a new tab</span>
        </a>
      </div>
    </header>
  );
}
