import { FOOTER_CONTENT, NAV_LINKS } from "../content";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand-block">
          <a href="#top" className="brand" aria-label="BreakSignal AI homepage">
            <span className="brand-dot" aria-hidden="true" />
            <span>{FOOTER_CONTENT.wordmark}</span>
          </a>
          <a
            href={`mailto:${FOOTER_CONTENT.email}`}
            className="footer-email-link"
          >
            {FOOTER_CONTENT.email}
          </a>
        </div>

        <nav aria-label="Footer navigation" className="footer-nav">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="footer-nav-link">
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="footer-bottom">
        <p className="footer-privacy">{FOOTER_CONTENT.privacyStatement}</p>
        <p className="footer-copyright">
          © {currentYear} {FOOTER_CONTENT.wordmark}
        </p>
      </div>
    </footer>
  );
}
