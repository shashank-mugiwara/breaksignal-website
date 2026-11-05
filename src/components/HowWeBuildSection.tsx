import { HOW_WE_BUILD_CONTENT } from "../content";
import SdlcDiagram from "./SdlcDiagram";

export default function HowWeBuildSection() {
  return (
    <section id="how-we-build" className="section" aria-labelledby="how-we-build-title">
      <header className="section-head">
        <h2 id="how-we-build-title" className="section-title">
          {HOW_WE_BUILD_CONTENT.heading}
        </h2>
        <p className="section-lede">{HOW_WE_BUILD_CONTENT.lede}</p>
      </header>

      <SdlcDiagram />

      <div className="pipeline-ladder" role="list" aria-label="Build pipeline steps">
        {HOW_WE_BUILD_CONTENT.pipeline.map((step) => (
          <article key={step.stepNumber} className="ladder-step" role="listitem">
            <span className="ladder-number">
              {String(step.stepNumber).padStart(2, "0")}
            </span>
            <h3 className="ladder-title">{step.title}</h3>
            <p className="ladder-desc">{step.description}</p>
          </article>
        ))}
      </div>

      <div className="safeguards-box">
        <h3 className="safeguards-title">{HOW_WE_BUILD_CONTENT.safeguardsHeading}</h3>
        <ul className="safeguards-list" aria-label={HOW_WE_BUILD_CONTENT.safeguardsHeading}>
          {HOW_WE_BUILD_CONTENT.safeguards.map((item) => (
            <li key={item.text} className="safeguard-item">
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
