import { NAV_LINKS } from "../content";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-brand-group">
        <a href="#top" className="brand" aria-label="BreakSignal AI homepage">
          <span className="brand-dot" aria-hidden="true" />
          <span>BreakSignal AI</span>
        </a>
      </div>

      <div className="header-actions">
        <nav aria-label="Primary navigation" className="site-nav">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
