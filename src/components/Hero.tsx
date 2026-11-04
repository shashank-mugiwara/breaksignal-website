import { HERO_CONTENT } from "../content";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-content">
        <div className="hero-kicker">
          <span className="hero-kicker-label">BreakSignal</span>
        </div>
        <h1 id="hero-title" className="hero-title">
          {HERO_CONTENT.headline}
        </h1>
        <p className="hero-lede">{HERO_CONTENT.lede}</p>
        <div className="hero-actions">
          <a href={HERO_CONTENT.primaryAction.href} className="button button-primary">
            {HERO_CONTENT.primaryAction.label}
          </a>
          <a href={HERO_CONTENT.secondaryAction.href} className="button button-ghost">
            {HERO_CONTENT.secondaryAction.label}
          </a>
        </div>
      </div>
    </section>
  );
}
