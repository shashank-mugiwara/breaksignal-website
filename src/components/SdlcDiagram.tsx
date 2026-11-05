import { SDLC_DIAGRAM_CONTENT } from "../content";

export default function SdlcDiagram() {
  const { stages, deliveryOutcomes, maintenanceNote, ariaLabel } =
    SDLC_DIAGRAM_CONTENT;
  const stage1 = stages[0];
  const stage2 = stages[1];
  const stage3 = stages[2];
  const stage4 = stages[3];
  const stage5 = stages[4];
  const stage6 = stages[5];

  return (
    <figure className="sdlc-diagram">
      <figcaption className="visually-hidden">{ariaLabel}</figcaption>

      <div className="sdlc-flow">
        {/* ROW 1: Stages 1, 2, 3 */}
        <div className="sdlc-row sdlc-row-top">
          {/* Stage 1 */}
          <div className="sdlc-stage sdlc-stage-1" id="sdlc-stage-1">
            <div className="sdlc-stage-header">
              <span className="sdlc-stage-num">
                {String(stage1.stepNumber).padStart(2, "0")}
              </span>
              <span className="sdlc-stage-pill">{stage1.shortLabel}</span>
            </div>
            <div className="sdlc-stage-title">{stage1.title}</div>
          </div>

          {/* Connector 1 -> 2 */}
          <div className="sdlc-connector sdlc-conn-1" aria-hidden="true">
            <span className="sdlc-connector-line" />
            <span className="sdlc-signal-dot sdlc-dot-1" />
          </div>

          {/* Stage 2 */}
          <div className="sdlc-stage sdlc-stage-2" id="sdlc-stage-2">
            <div className="sdlc-stage-header">
              <span className="sdlc-stage-num">
                {String(stage2.stepNumber).padStart(2, "0")}
              </span>
              <span className="sdlc-stage-pill">{stage2.shortLabel}</span>
            </div>
            <div className="sdlc-stage-title">{stage2.title}</div>
          </div>

          {/* Connector 2 -> 3 */}
          <div className="sdlc-connector sdlc-conn-2" aria-hidden="true">
            <span className="sdlc-connector-line" />
            <span className="sdlc-signal-dot sdlc-dot-2" />
          </div>

          {/* Stage 3 */}
          <div className="sdlc-stage sdlc-stage-3" id="sdlc-stage-3">
            <div className="sdlc-stage-header">
              <span className="sdlc-stage-num">
                {String(stage3.stepNumber).padStart(2, "0")}
              </span>
              <span className="sdlc-stage-pill">{stage3.shortLabel}</span>
            </div>
            <div className="sdlc-stage-title">{stage3.title}</div>
            {stage3.detail && (
              <div className="sdlc-stage-detail">{stage3.detail}</div>
            )}
          </div>
        </div>

        {/* TRANSFER CONNECTOR: Between Row 1 and Row 2 */}
        <div className="sdlc-transfer-connector sdlc-conn-3" aria-hidden="true">
          <div className="sdlc-transfer-mobile">
            <span className="sdlc-connector-line" />
            <span className="sdlc-signal-dot sdlc-dot-3-mob" />
          </div>
          <div className="sdlc-transfer-desktop">
            <span className="sdlc-wrap-drop-right" />
            <span className="sdlc-wrap-rail" />
            <span className="sdlc-wrap-drop-left" />
            <span className="sdlc-signal-dot sdlc-dot-3-desk" />
          </div>
        </div>

        {/* ROW 2: Stages 4, 5 (GATE), 6 */}
        <div className="sdlc-row sdlc-row-bottom">
          {/* Stage 4 */}
          <div className="sdlc-stage sdlc-stage-4" id="sdlc-stage-4">
            <div className="sdlc-stage-header">
              <span className="sdlc-stage-num">
                {String(stage4.stepNumber).padStart(2, "0")}
              </span>
              <span className="sdlc-stage-pill">{stage4.shortLabel}</span>
            </div>
            <div className="sdlc-stage-title">{stage4.title}</div>
          </div>

          {/* Connector 4 -> 5 */}
          <div className="sdlc-connector sdlc-conn-4" aria-hidden="true">
            <span className="sdlc-connector-line" />
            <span className="sdlc-signal-dot sdlc-dot-4" />
          </div>

          {/* Stage 5: GATE */}
          <div
            className="sdlc-stage sdlc-stage-5 sdlc-stage-gate"
            id="sdlc-stage-5"
          >
            <div className="sdlc-gate-bar" aria-hidden="true" />
            <div className="sdlc-stage-header">
              <span className="sdlc-stage-num">
                {String(stage5.stepNumber).padStart(2, "0")}
              </span>
              <span className="sdlc-gate-badge">
                <span className="sdlc-gate-diamond" aria-hidden="true" />
                <span>GATE</span>
              </span>
            </div>
            <div className="sdlc-stage-title">{stage5.title}</div>
          </div>

          {/* Connector 5 -> 6 */}
          <div className="sdlc-connector sdlc-conn-5" aria-hidden="true">
            <span className="sdlc-connector-line" />
            <span className="sdlc-signal-dot sdlc-dot-5" />
          </div>

          {/* Stage 6 */}
          <div className="sdlc-stage sdlc-stage-6" id="sdlc-stage-6">
            <div className="sdlc-stage-header">
              <span className="sdlc-stage-num">
                {String(stage6.stepNumber).padStart(2, "0")}
              </span>
              <span className="sdlc-stage-pill">{stage6.shortLabel}</span>
            </div>
            <div className="sdlc-stage-title">{stage6.title}</div>
          </div>
        </div>

        {/* BRANCH CONNECTOR */}
        <div
          className="sdlc-branch-connector sdlc-conn-branch"
          aria-hidden="true"
        >
          <div className="sdlc-branch-mobile">
            <span className="sdlc-connector-line" />
            <span className="sdlc-signal-dot sdlc-dot-branch-mob" />
          </div>
          <div className="sdlc-branch-desktop">
            <span className="sdlc-branch-stub" />
            <span className="sdlc-branch-rail" />
            <span className="sdlc-branch-drop-1" />
            <span className="sdlc-branch-drop-2" />
            <span className="sdlc-branch-drop-3" />
            <span className="sdlc-signal-dot sdlc-dot-branch-desk" />
          </div>
        </div>

        {/* BRANCH & OUTCOMES */}
        <div className="sdlc-branches-wrapper">
          <div className="sdlc-outcome-node sdlc-outcome-1">
            <span className="sdlc-outcome-indicator" aria-hidden="true">
              ↳
            </span>
            <span className="sdlc-outcome-label">
              {deliveryOutcomes[0].label}
            </span>
          </div>
          <div className="sdlc-outcome-node sdlc-outcome-2">
            <span className="sdlc-outcome-indicator" aria-hidden="true">
              ↳
            </span>
            <span className="sdlc-outcome-label">
              {deliveryOutcomes[1].label}
            </span>
          </div>
          <div className="sdlc-maintenance-node sdlc-outcome-3" id="sdlc-maintenance">
            <span className="sdlc-maintenance-loop-icon" aria-hidden="true">
              ↻
            </span>
            <span className="sdlc-maintenance-text">{maintenanceNote}</span>
          </div>
        </div>
      </div>
    </figure>
  );
}
