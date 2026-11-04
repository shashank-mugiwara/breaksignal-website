const NAV_LINKS = [
  { href: "#capabilities", label: "Capabilities" },
  { href: "#agentmanage", label: "AgentManage" },
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

    </header>
  );
}
