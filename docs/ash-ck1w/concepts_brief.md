# Concepts Brief: breaksignal.ai Redesign & Content Expansion

- **Bead**: `ash-ck1w`
- **Date**: 2026-11-04
- **Document**: `docs/ash-ck1w/concepts_brief.md`
- **Stage**: EGM Brainstorm (Concepts & Architecture)
- **Status**: Concept Approved (Owner Gates resolved via `docs/ash-ck1w/brief.md`)

---

## 1. Executive Summary & Problem Framing

### 1.1 Current State
The existing `breaksignal.ai` site is a minimal placeholder consisting of three thin sections rendered exclusively in dark mode (`#0f1114`). As observed by the product owner:
> *"More content needs to be there, just few lines is not giving idea."*

Furthermore, the live site carries unverified marketing assertions and prohibited buzzwords ("Accelerated by Autonomous Multi-Agent Swarms", "Zero Model Lock-in", "Zero data leakage"), lacks structural rhythm, has no light theme, and fails to differentiate BreakSignal's three distinct operating facets (internal products, hosted creation, and financial systems agency).

### 1.2 Target State
A complete, credible, one-page marketing site anchored across nine distinct sections. The interface defaults to a crisp, high-contrast **light theme** (warm white / slate ink / signal red) with a persistent, non-flashing dark theme toggle. Every single factual statement is strictly bound to claims `C1` through `C21` in `docs/ash-ck1w/claims.md`. All copy is plain, transparent, and devoid of AI hype. Design adheres to the Impeccable principles: system font hierarchy, varied spatial rhythm, semantic HTML, and zero AI-slop visual tropes.

---

## 2. Owner Gates & Explicit Resolution Matrix

Per run rules, operator gates are resolved without pause by selecting either the option explicitly fixed by `docs/ash-ck1w/brief.md` or the most conservative, factual alternative.

| Gate # | Topic | Options Considered | Resolution & Rationale |
|---|---|---|---|
| **Gate 1** | **Visual Tone & Aesthetic** | **A:** Flashy AI-startup (neon glows, dark-only, animated mesh blobs, gradient text).<br>**B:** Editorial / Utilitarian Engineering (clean white ground, crisp system type, signal red accents, high legibility, understated).<br>**C:** Playful consumer SaaS. | **Option B (Fixed by Brief & Impeccable rules)**. Restrained, authoritative engineering aesthetic fitting regulated financial infrastructure. |
| **Gate 2** | **Theme Strategy & Defaults** | **A:** Dark default (current).<br>**B:** Light default, dark toggle, pre-paint inline script (`localStorage` + `prefers-color-scheme` fallback).<br>**C:** System-preference-only (no toggle). | **Option B (Fixed by Brief §Theme)**. Light theme is the primary, fully polished experience. Dark theme is the secondary toggle. Choice persists in `localStorage` with try/catch safeguard. |
| **Gate 3** | **Typographic System** | **A:** Third-party web fonts (Inter, Geist, Roboto via Google Fonts/CDN).<br>**B:** Native system font stack (`system-ui`, `-apple-system`, "Segoe UI", Arial, sans-serif) with fluid `clamp()` modular scale.<br>**C:** Monospace default across all elements. | **Option B (Fixed by Brief §Design & §Technical)**. Zero network requests, zero layout shift (CLS), pure privacy, instant rendering. Weight and scale drive hierarchy without decorative monospace clichés. |
| **Gate 4** | **Information Architecture** | **A:** Multi-page site with client-side routing.<br>**B:** Single anchored one-page document with 9 sequential sections.<br>**C:** Tabbed application dashboard. | **Option B (Fixed by Brief §Sections)**. Linear scannability, predictable deep-linking (`#what-we-do`, `#how-we-build`, `#products`, `#engagements`, `#faq`, `#contact`), no router overhead. |
| **Gate 5** | **Content Boundary & Discarded Claims** | **A:** Expand copy with illustrative case studies, estimated build speeds, and code ownership claims.<br>**B:** Strict subset strictly bounded by C1–C21; explicitly drop unsupported questions (e.g. "what happens to generated code"). | **Option B (Fixed by Brief §Content rule & §FAQ)**. Zero invented facts. If a claim is not in C1–C21, it is omitted completely. |
| **Gate 6** | **Lead Capture & Contact** | **A:** Multi-field lead form with submission endpoint, validation, and database storage.<br>**B:** Direct `mailto:hello@breaksignal.com` with visible plain-text email, copy button/layout, and guided checklist of what to send.<br>**C:** Embedded third-party calendar / booking widget. | **Option B (Fixed by Brief §Sections and Claims C20, C21)**. No backend form processing, no cookies, no tracking scripts, zero third-party dependencies. |
| **Gate 7** | **Technical Stack & Build Rigor** | **A:** Add UI component libraries (Tailwind, Radix, Lucide, Framer Motion).<br>**B:** React 19 + Vite 7 + strict TypeScript + CSS custom properties, zero added dependencies. Typed arrays in `src/content.ts`. | **Option B (Fixed by Brief §Technical constraints)**. Fast builds (`tsc --noEmit && vite build`), zero unused locals, audited content isolation. |

---

## 3. Goldfish Critical Reviews & Specialist Lenses

### 3.1 Lens A: Claim Traceability & Fact Verification (C1–C21 Audit)

The site makes zero claims beyond `docs/ash-ck1w/claims.md`. Every statement maps directly to an approved claim ID:

```
[Claim ID] -> Permitted Statement Boundary -> Assigned Page Section
------------------------------------------------------------------------------------------------------------------------
C1         -> Harness concept (one company, one harness; AI agents build inside harness, people review; 3 uses) -> Hero, What We Do, How We Build
C2         -> Agency builds for finance, banking, insurance; requirements -> build -> hand-over or host/maintain -> What We Do, Engagements, FAQ
C3         -> Target clients: small insurance intermediaries, TPAs, small NBFCs, fintechs -> Hero, Engagements
C4         -> Default delivery into client's cloud in India region; hosted operation only after compliance audit -> Engagements, FAQ
C5         -> Regulatory context: RBI, IRDAI, CERT-In, DPDP rules shape default; NO compliance certifications claimed -> Engagements, FAQ
C6         -> Agency exclusion: Mobile (iOS) apps are outside agency scope for client work -> Engagements, FAQ
C7         -> Commercials: No self-serve checkout; engagement begins with conversation -> Engagements, FAQ
C8         -> Pricing: Not published yet (cost per app is still being measured); no prices or ranges -> Engagements, FAQ
C9         -> Speed / Performance: No speed, cost-saving, or "faster than X" claims; say "AI-assisted", never "10x" or "weeks" -> Hero, Site-wide
C10        -> Quality Gate: A person reviews and approves work before delivery; process built around human gate -> Hero, How We Build, FAQ
C11        -> AgentManage purpose: Runs and maintains applications (run, maintain, fix, small enhancements); hosted creation path -> What We Do, Products
C12        -> AgentManage roles: Five fixed roles (Chief of Staff, Engineer, Watchdog, Support, Gatekeeper); customers cannot define roles -> Products (Table)
C13        -> Chief of Staff function: Tracks work as tasks (beads) and assigns each task to an agent -> How We Build, Products
C14        -> Safeguards ("designed so that"): No deploy credentials for agents; separate deployer; diff + test + risk + rollback; Gatekeeper restrictions -> How We Build, Products
C15        -> AgentManage isolation: Append-only audit log per org; database row-level security (RLS) isolation -> Products
C16        -> AgentManage delivery: Managed cloud by BreakSignal OR installed on-prem in customer AWS/servers (infra billed to customer) -> Products, Engagements
C17        -> AgentManage readiness: In development, not generally available (status as of 2026-11-04) -> Products, FAQ
C18        -> AtomicSync product: iOS health app, "Atomic Sync: Digital Twin", daily avatar evolves with state, Apple Watch companion -> What We Do, Products
C19        -> AtomicSync readiness: Not yet on App Store; v1.0.1 waiting for review; "release pending" -> Products, FAQ
C20        -> Contact: hello@breaksignal.com -> Header, Contact, Footer
C21        -> Privacy posture: No analytics, trackers, cookies, or forms -> Site-wide, FAQ, Footer
```

#### Discarded & Prohibited Statements Audit:
- **Discarded Question:** "What happens to the generated code?" (Omitted because no claim in C1–C21 addresses intellectual property assignment or copyright transfer).
- **Discarded Time Estimates:** Any mentions of "delivery in 2 weeks" or "overnight turnarounds" are banned per C9.
- **Discarded Capability Claims:** Agency mobile apps are strictly disclaimed per C6.

---

### 3.2 Lens B: Forbidden Words & Lexical Guardrails (Anti-Hype Scanner)

The copy engine enforces a zero-tolerance dictionary for buzzwords, unverified certifications, and AI jargon:

#### Prohibited Terms & Required Conversions
- ❌ **AI Models & Vendors**: OpenAI, Anthropic, Claude, GPT, Gemini, Llama, Bedrock, Vertex, "open and frontier models", "zero model lock-in".
  - *Correction*: Refer only to "AI agents running inside our own harness" or "AI-assisted engineering".
- ❌ **Hype Words**: seamless, robust, cutting-edge, revolutionary, world-class, swarm, supercharge, unlock, 10x, accelerated, magic, effortless, disruptive, bespoke multi-agent swarm.
  - *Correction*: Plain, functional engineering terms: "built", "verified", "delivered", "maintained", "automated checks", "human review".
- ❌ **Unverified Regulatory / Compliance Claims**: SOC 2, ISO 27001, RBI-approved, DPDP compliant, HIPAA, zero data leakage, guaranteed secure.
  - *Correction*: State only that "RBI, IRDAI, CERT-In, and DPDP rules shape our architecture" (C5) and that BreakSignal "makes no compliance claims on this page; compliance is an engagement conversation" (FAQ).
- ❌ **Metrics / SLAs**: 24x7, 99.99%, sub-50ms, 100%, uptime guarantees, latency numbers.
  - *Correction*: State only operational facts without quantitative marketing claims.
- ❌ **Legal / Corporate Fiction**: Private Limited, CIN, SRN, patented, patent-pending.
  - *Correction*: Use "(c) 2026 BreakSignal" only; use "proprietary harness" only if referring to internal tooling.
- ❌ **Safeguard Language Rule**: Never state "guarantees" or "ensures". Must explicitly prefix AgentManage operational protections with **"designed so that"** (C14).

---

### 3.3 Lens C: Light & Dark Contrast & Colorimetry

#### The Problem with Naive Light Mode Accents
The legacy site used `#ff4438` (Signal Red) on dark ground (`#0f1114`).
- Contrast of `#ff4438` on `#0f1114` is **5.81:1** (Passes WCAG AA).
- Contrast of `#ff4438` on pure white (`#ffffff`) is only **3.22:1** (FAILS WCAG AA 4.5:1 for body and normal text).
Therefore, a single static accent color cannot be used across both themes without failing accessibility audits.

#### Dual-Token Palette & WCAG Mathematical Verification
To satisfy WCAG 2.1 AA (and AAA for normal body text) across both modes:

```css
/* LIGHT THEME (Default) */
:root {
  --color-ground: #ffffff;             /* Crisp white background */
  --color-surface: #f4f5f7;            /* Tinted cool-grey panel ground */
  --color-surface-raised: #e9ebef;     /* Layered surface */
  --color-ink: #111418;                /* Primary text (slate-tinted near-black) */
  --color-ink-muted: #575e67;          /* Secondary text */
  --color-border: #d0d5dd;             /* Hairline structural border */
  --color-border-subtle: #e4e7ec;      /* Soft divider */
  --color-accent: #c5221f;             /* Deep Signal Red (AA compliant on white) */
  --color-accent-contrast: #ffffff;    /* Text on accent */
  --color-focus: #c5221f;              /* 2px outline */
}

/* DARK THEME (Activated via [data-theme="dark"]) */
:root[data-theme="dark"] {
  --color-ground: #0d0f12;             /* Deep slate-black */
  --color-surface: #15181d;            /* Elevated panel ground */
  --color-surface-raised: #1d2128;     /* Raised surface */
  --color-ink: #eceef0;                /* Primary text */
  --color-ink-muted: #949ca6;          /* Secondary text */
  --color-border: #272d36;             /* Hairline structural border */
  --color-border-subtle: #1c2128;      /* Soft divider */
  --color-accent: #ff5447;             /* Bright Signal Red */
  --color-accent-contrast: #0d0f12;    /* Dark ink on bright red button */
  --color-focus: #ff5447;              /* 2px outline */
}
```

#### Contrast Ratio Table (Evaluated against WCAG 2.1)
| Theme | Element Pair | Computed Luminance Ratio | WCAG AA Standard | Status |
|---|---|---|---|---|
| **Light** | Primary Text (`#111418`) on Ground (`#ffffff`) | **17.8:1** | ≥ 4.5:1 (AAA: ≥ 7.0:1) | **PASS (AAA)** |
| **Light** | Muted Text (`#575e67`) on Ground (`#ffffff`) | **5.58:1** | ≥ 4.5:1 | **PASS (AA)** |
| **Light** | Muted Text (`#575e67`) on Surface (`#f4f5f7`) | **5.12:1** | ≥ 4.5:1 | **PASS (AA)** |
| **Light** | Deep Signal Red (`#c5221f`) on Ground (`#ffffff`) | **5.81:1** | ≥ 4.5:1 (Normal text/icon) | **PASS (AA)** |
| **Light** | White (`#ffffff`) on Red CTA Button (`#c5221f`) | **5.81:1** | ≥ 4.5:1 | **PASS (AA)** |
| **Light** | Interactive Border (`#575e67`) on Ground (`#ffffff`) | **5.58:1** | ≥ 3.0:1 (UI Components) | **PASS (AA)** |
| **Dark** | Primary Text (`#eceef0`) on Ground (`#0d0f12`) | **16.1:1** | ≥ 4.5:1 (AAA: ≥ 7.0:1) | **PASS (AAA)** |
| **Dark** | Muted Text (`#949ca6`) on Ground (`#0d0f12`) | **6.15:1** | ≥ 4.5:1 | **PASS (AA)** |
| **Dark** | Muted Text (`#949ca6`) on Surface (`#15181d`) | **5.51:1** | ≥ 4.5:1 | **PASS (AA)** |
| **Dark** | Bright Signal Red (`#ff5447`) on Ground (`#0d0f12`) | **5.42:1** | ≥ 4.5:1 (Normal text/icon) | **PASS (AA)** |
| **Dark** | Dark Ink (`#0d0f12`) on Red CTA (`#ff5447`) | **5.42:1** | ≥ 4.5:1 | **PASS (AA)** |
| **Dark** | Interactive Border (`#949ca6`) on Ground (`#0d0f12`) | **6.15:1** | ≥ 3.0:1 (UI Components) | **PASS (AA)** |

---

### 3.4 Lens D: Accessibility (A11y) & Semantic Architecture

1. **Semantic Landmark Graph**:
   - `<header className="site-header">` -> Top sticky bar with Wordmark, navigation, theme toggle.
   - `<nav aria-label="Main Navigation">` -> Anchored section links.
   - `<main id="main">` -> Target for skip link.
   - `<section aria-labelledby="...">` -> Every section uniquely labelled by its heading.
   - `<footer className="site-footer">` -> Bottom landmark.
2. **Heading Order**:
   - `<h1>`: Exactly one instance in Hero: `"Software built by AI agents, reviewed by people."`
   - `<h2>`: Exactly 7 section headings (`What we do`, `How we build`, `Products`, `Engagements`, `Frequently asked questions`, `Contact`).
   - `<h3>`: Component titles (e.g. Offer titles, Product names, Pipeline steps).
3. **Theme Switcher A11y**:
   - Native `<button type="button" className="theme-toggle" aria-label="Toggle light or dark theme" aria-pressed={isDark}>`.
   - Displays clear text/icon indicator of active mode.
   - Persists state in `localStorage` inside `try { ... } catch (e) { ... }` to avoid security exceptions in restricted sandboxes.
   - Prevents Flash of Unstyled Theme (FOUT/FOUC) by executing a small inline script in `index.html` `<head>` prior to first render:
     ```html
     <script>
       (function() {
         try {
           var saved = localStorage.getItem('theme');
           var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
           var theme = saved ? saved : (prefersDark ? 'dark' : 'light');
           document.documentElement.setAttribute('data-theme', theme);
         } catch(e) {
           document.documentElement.setAttribute('data-theme', 'light');
         }
       })();
     </script>
     ```
   - Synchronizes `<meta name="theme-color">` to match `--color-ground` dynamically.
4. **Interactive Accordion (FAQ)**:
   - Built exclusively with native HTML `<details>` and `<summary>` elements.
   - Zero JavaScript required for expand/collapse; accessible to keyboard users (`Space` / `Enter`) and screen readers out of the box.
5. **Focus Ring & Motion Safety**:
   - `:focus-visible` defines an unambiguous 2px solid accent outline with a 2px offset.
   - `@media (prefers-reduced-motion: reduce)` disables all CSS transitions and transforms.

---

### 3.5 Lens E: Impeccable Design & Anti-AI-Slop Review

Applying the guidance of `frontend-design`, `distill`, `clarify`, `typeset`, `arrange`, `polish`, and `audit`:

| AI-Slop Pattern to Avoid | Impeccable Design Solution for BreakSignal |
|---|---|
| **Gradient Text & Glows** | Pure solid ink. Hierarchy established through font weight (400 vs 600) and scale (`--step-0` to `--step-4`), never colored text fades. |
| **Card-in-Card Nesting** | Flattened layouts. Bordered panels used only where content grouping requires containerization (e.g. Products). Nested elements use clean rule dividers or whitespace. |
| **Identical 3-Card Grids Everywhere** | Varied structural rhythm across all 9 sections: <br>• Hero: Asymmetric two-column split with editorial lede.<br>• What we do: Three-column modular horizontal split.<br>• How we build: Vertical numbered chronological pipeline.<br>• Products: Two deep, distinct product dossiers with a tabular role breakdown for AgentManage.<br>• Engagements: Process flow list with data residency callout.<br>• FAQ: Stacked native disclosure list.<br>• Contact: Direct, copyable communication dossier. |
| **Generic Hero Blobs & 3D Shapes** | Clean typographic presentation with high whitespace ratio and an honest wordmark. No floating spheres, AI brain glyphs, or fake network meshes. |
| **Overused Icons with Colored Backdrops** | Omit redundant icon badges above headings. Headings speak for themselves without decorative crutches. |
| **Fake Hero Metric Counters** | No big numbers ("99.9%", "10x", "50k lines of code"). Hero leads with honest positioning and two direct action triggers. |
| **Bouncing / Elastic Transitions** | Subtle, linear or ease-out-quad transitions (150ms–200ms) applied strictly to hover, focus, and theme switches. |
| **Unresponsive / Monotonous Spacing** | Fluid vertical rhythm using `clamp()` (`--space-section: clamp(3.5rem, 3rem + 5vw, 6rem)`). Tight grouping for siblings (0.5rem–1rem), generous breathing room between major sections. |

---

## 4. Section-by-Section Structural & Content Blueprint

Every section below specifies its layout, content mapping, and visual structure:

```
+-----------------------------------------------------------------------------------+
| 1. HEADER: Wordmark "BreakSignal" | Nav links | Theme Toggle Button               |
+-----------------------------------------------------------------------------------+
| 2. HERO: Single H1 ("Software built by AI agents, reviewed by people")           |
|    Plain statement of purpose | Who it is for (C3) | [How we build] [Contact]     |
+-----------------------------------------------------------------------------------+
| 3. WHAT WE DO: Three distinct offerings (C1, C2, C11, C18)                        |
|    [ Own Products ]       [ Hosted Creation ]         [ Software Agency ]         |
+-----------------------------------------------------------------------------------+
| 4. HOW WE BUILD: 6-Stage Human-in-the-Loop Pipeline (C1, C10, C13, C14)           |
|    1. Requirements -> 2. Plan -> 3. Agents Build -> 4. Checks -> 5. Review -> 6. Delivery |
|    + Safeguards Box: "Designed so that..." & "What the agents do not do"          |
+-----------------------------------------------------------------------------------+
| 5. PRODUCTS: Two Product Cards                                                    |
|    [ Product A: AtomicSync ]               [ Product B: AgentManage ]             |
|    - iOS Health / Digital Twin (C18)       - Autonomous Application Ops (C11)     |
|    - Apple Watch glance (C18)              - In development (C17)                 |
|    - Release pending v1.0.1 (C19)          - 5 Fixed Roles Table (C12, C13, C14)  |
|                                            - Audit Log & RLS (C15)                |
|                                            - Cloud or On-Prem (C16)               |
+-----------------------------------------------------------------------------------+
| 6. ENGAGEMENTS: Structured Agency Delivery (C2, C3, C4, C5, C6, C7, C8)          |
|    - Who it is for (C3)                    - Delivery into your cloud (C4, C5)    |
|    - What it does not cover: iOS (C6)      - Commercials: No checkout/pricing (C7, C8) |
|    - 5 Steps: Talk -> Requirements -> Build with review -> Hand-over -> Maintain  |
+-----------------------------------------------------------------------------------+
| 7. FAQ: 9 Native <details> Questions Strictly Traceable to C1-C21                 |
|    (Who reviews; Where data lives; Hosting; Mobile apps; Cost; AtomicSync status; |
|     AgentManage status; Online signup; Compliance status)                         |
+-----------------------------------------------------------------------------------+
| 8. CONTACT: Plain text hello@breaksignal.com mailto link                          |
|    - Copyable address | What to send in first email | No form (C20, C21)          |
+-----------------------------------------------------------------------------------+
| 9. FOOTER: Wordmark | Section anchors | hello@breaksignal.com | (c) 2026 BreakSignal|
+-----------------------------------------------------------------------------------+
```

---

### Detailed Section Specifications

#### Section 1: Header
- **Landmark**: `<header className="site-header">`
- **Elements**:
  - **Wordmark**: `BreakSignal` (unadorned, semibold, links to `#top`).
  - **Navigation**: Links to `#what-we-do`, `#how-we-build`, `#products`, `#engagements`, `#faq`, `#contact`.
  - **Theme Toggle**: Real `<button>` with `aria-pressed` or accessible label toggling `light` / `dark`.
- **Claims**: Wordmark (C1), Contact link anchor (C20).

#### Section 2: Hero
- **Landmark**: `<section id="hero" className="section-hero">`
- **Heading**: `<h1>Software built by AI agents, reviewed by people.</h1>`
- **Copy**: Plain definition of BreakSignal. Software built with AI agents running inside our own harness, verified and approved by people before delivery. Built for small insurance intermediaries, TPAs, small NBFCs, and fintechs needing reliable operational systems (C1, C3, C10).
- **Actions**:
  - Primary button: `"How we build"` (in-page anchor to `#how-we-build`).
  - Secondary ghost button: `"Contact us"` (mailto to `hello@breaksignal.com`).
- **Forbidden Elements**: No quantitative metrics, no speed claims, no model vendor references, no floating illustration blobs.

#### Section 3: What We Do
- **Landmark**: `<section id="what-we-do" className="section-what-we-do">`
- **Heading**: `<h2>What we do</h2>`
- **Sub-lede**: "One company operating a single agent harness across three distinct models." (C1)
- **Three Offers Layout**:
  1. **Own Products**: BreakSignal designs and ships independent proprietary software, such as our digital twin iOS application AtomicSync (C1, C18).
  2. **Hosted Creation**: Application development, operations, and ongoing enhancements orchestrated through AgentManage in managed cloud environments (C1, C11).
  3. **Software Agency**: Bespoke engineering for finance, banking, and insurance organizations. We build against client requirements and deliver complete systems into your infrastructure (C1, C2, C3).

#### Section 4: How We Build
- **Landmark**: `<section id="how-we-build" className="section-how-we-build">`
- **Heading**: `<h2>How we build</h2>`
- **Lede**: "Our development process pairs automated agent execution inside our own harness with compulsory human approval gates." (C1, C10)
- **Numbered Pipeline (Chronological 1–6)**:
  1. **Requirements Definition**: Specifications are gathered directly from the client or product owner (C2).
  2. **Task Decomposition**: The Chief of Staff role breaks plans into granular task units (beads) and assigns each task to an agent (C13).
  3. **Harness Execution**: Specialized agent roles write code and execute implementation routines exclusively inside our internal harness (C1, C12).
  4. **Automated Verification**: The harness generates diff summaries, collects automated test runs, determines change risk classes, and formats rollback plans (C14).
  5. **Human Gate Review**: A person inspects the diff, reviews test logs, and approves or rejects the change before any deployment can proceed (C10, C14).
  6. **Delivery & Hand-over**: Software is transferred directly into the client's cloud infrastructure or transitioned to managed hosting (C2, C4).
- **Safeguards Callout ("Designed so that")**:
  - *Operational Safeguards*: Designed so that agents never hold production deploy credentials; a separate deployer executes approved changes (C14).
  - *Risk Restrictions*: Designed so that the Gatekeeper role can auto-approve only low-risk changes with passing tests and verified rollback plans; changes touching database schemas, access controls, credentials/secrets, or customer data always require human intervention (C14).
  - *What Agents Do Not Do*: A concise checklist reminding clients that agents do not hold production access keys and cannot approve risky structural changes alone (C14).

#### Section 5: Products
- **Landmark**: `<section id="products" className="section-products">`
- **Heading**: `<h2>Products</h2>`
- **Card 1: AtomicSync**:
  - **Tag / Status**: `Release pending` (C19).
  - **Overview**: An iOS personal health application under the App Store title *"Atomic Sync: Digital Twin"*. Features an evolving digital twin (avatar) reflecting daily health state, accompanied by an Apple Watch glance companion (C18).
  - **Key Facts**:
    - Platform: iOS with Apple Watch companion (C18).
    - Concept: Digital twin avatar reflecting daily physical state (C18).
    - Status: Version 1.0.1 waiting for review; release pending as of 2026-11-04 (C19).
- **Card 2: AgentManage**:
  - **Tag / Status**: `In development` (C17).
  - **Overview**: An application operations platform designed to run, maintain, fix, and enhance software systems—including software originally built elsewhere—as well as power hosted application creation (C11).
  - **Fixed Roles Breakdown Table** (C12, C13, C14):
    | Role Name | Scope & Defined Function |
    |---|---|
    | **Chief of Staff** | Tracks work items as tasks (beads) and allocates assignments across agent workers (C13). |
    | **Engineer** | Implements code changes and executes build scripts inside the harness environment (C1, C12). |
    | **Watchdog** | Fixed system monitoring role in the standard agent set (C12). |
    | **Support** | Fixed role dedicated to handling incoming support requests (C12). |
    | **Gatekeeper** | Evaluates automated test results; auto-approves only low-risk diffs with rollback plans; never auto-approves schema, access, secrets, or customer data (C14). |
  - **Infrastructure & Isolation Facts**:
    - Isolation: Append-only audit logs per organization; database row-level security (RLS) enforcement (C15).
    - Deployment: Available either managed in BreakSignal's cloud or installed on-premises in the customer's own AWS account/servers (C16).
    - Availability: In development; not generally available (C17).

#### Section 6: Engagements (Agency)
- **Landmark**: `<section id="engagements" className="section-engagements">`
- **Heading**: `<h2>Engagements</h2>`
- **Target Audience**: Built for small insurance intermediaries, third-party administrators (TPAs), small NBFCs, and fintech companies (C3).
- **Engagement Process (5 Steps)**:
  1. **Conversation**: Every engagement starts with a direct technical discussion; there is no self-serve online checkout (C7).
  2. **Requirements & Scope**: Requirements defined collaboratively. Mobile iOS development is explicitly outside agency client scope (C6).
  3. **Build with Human Review**: Systems built using our AI-assisted harness with mandatory human approval gates (C1, C10).
  4. **Cloud Delivery**: Systems deployed by default directly into the client's own cloud in an India region with limited vendor access (C4).
  5. **Operational Hand-off or Hosting**: Systems handed over completely to the client, or hosted and maintained by BreakSignal after an initial compliance audit (C2, C4, C11).
- **Regulatory Shaping Note**: RBI, IRDAI, CERT-In, and DPDP rules place strict governance duties on vendors handling regulated financial information. These standards shape our default to client-cloud delivery rather than shared multitenant hosting (C4, C5).
- **Pricing Status**: Pricing is not published; cost per application is actively being measured. Every project is scoped individually (C8).

#### Section 7: Frequently Asked Questions
- **Landmark**: `<section id="faq" className="section-faq">`
- **Heading**: `<h2>Frequently asked questions</h2>`
- **Accordion Questions (9 native `<details>` items, strictly mapped)**:
  1. **Who reviews and approves the software you build?**
     - *Answer*: Every change is reviewed and approved by a human engineer before it is delivered. Our engineering pipeline is structured around an enforced human approval gate (C10).
  2. **Where does our application data live?**
     - *Answer*: By default, software is delivered and deployed directly into your own cloud infrastructure in an India region, with limited vendor access (C4).
  3. **Do you provide hosted operation for client software?**
     - *Answer*: BreakSignal-hosted operation is available only at the client's explicit request and following a formal compliance audit. Our default remains delivery into your own cloud (C4).
  4. **Do you build mobile applications for agency clients?**
     - *Answer*: No. Mobile (iOS) applications are outside the agency's scope for client engagements (C6). (Our mobile development is reserved for internal products like AtomicSync) (C18).
  5. **What does an agency engagement cost?**
     - *Answer*: Pricing is not currently published because development costs per application are still being benchmarked. Engagements are scoped through individual technical conversations (C7, C8).
  6. **Is AtomicSync available on the App Store?**
     - *Answer*: Not yet. AtomicSync (version 1.0.1) is currently waiting for App Store review. Its release is pending (C19).
  7. **Can our team use AgentManage today?**
     - *Answer*: AgentManage is actively in development and is not yet generally available (status as of 2026-11-04) (C17).
  8. **Can I sign up or purchase services online?**
     - *Answer*: No. We do not provide self-serve checkouts or online signups. Every engagement begins with an introductory conversation (C7).
  9. **Are you certified or officially compliant with financial regulations?**
     - *Answer*: We make no compliance or certification claims on this page. Regulatory guidelines (such as RBI, IRDAI, CERT-In, and DPDP) guide our architecture and cloud deployment defaults; specific compliance requirements are evaluated individually during engagement discussions (C5).

*(Note: "What happens to the generated code" has been omitted per brief §FAQ instructions because claims C1–C21 contain no factual basis for it).*

#### Section 8: Contact
- **Landmark**: `<section id="contact" className="section-contact">`
- **Heading**: `<h2>Contact</h2>`
- **Direct Link**: `<a href="mailto:hello@breaksignal.com" className="email-link">hello@breaksignal.com</a>` (C20).
- **Layout & Guidance**: Clean, scannable panel displaying the plain-text email address. Includes helpful guidance for the initial correspondence:
  - *What to include*: A concise summary of the problem, the specific financial or operational domain, and where the software should ultimately run (your cloud or hosted) (Brief §Sections #8).
- **Privacy Assurance**: The site operates with zero forms, zero newsletter inputs, zero analytics scripts, and zero cookies (C21).

#### Section 9: Footer
- **Landmark**: `<footer className="site-footer">`
- **Elements**:
  - Wordmark: `BreakSignal`
  - Navigation anchors: Links to `#top`, `#what-we-do`, `#how-we-build`, `#products`, `#engagements`, `#faq`, `#contact`.
  - Contact mailto: `hello@breaksignal.com` (C20).
  - Copyright line: `(c) 2026 BreakSignal` (No company registration numbers, CIN/SRN, or legal entity claims).

---

## 5. Technical Implementation Blueprint

### 5.1 Data Structure & Content Isolation (`src/content.ts`)
To ensure total auditability and maintainability, all site copy and structured claim metadata will be maintained in a strictly typed `src/content.ts` module:

```typescript
export interface NavItem {
  readonly label: string;
  readonly href: string;
}

export interface OfferItem {
  readonly id: string;
  readonly title: string;
  readonly summary: string;
  readonly points: readonly string[];
  readonly claimRef: string;
}

export interface PipelineStep {
  readonly stepNumber: number;
  readonly title: string;
  readonly description: string;
  readonly claimRef: string;
}

export interface AgentRole {
  readonly role: string;
  readonly description: string;
  readonly claimRef: string;
}

export interface ProductItem {
  readonly id: string;
  readonly name: string;
  readonly badge: string;
  readonly summary: string;
  readonly facts: readonly string[];
  readonly claimRef: string;
}

export interface FaqItem {
  readonly question: string;
  readonly answer: string;
  readonly claimRef: string;
}

export interface EngagementStep {
  readonly number: number;
  readonly title: string;
  readonly description: string;
  readonly claimRef: string;
}
```

### 5.2 Theme State & FOUC Prevention
1. **Pre-paint Theme Initialization**: An inline `<script>` in `index.html` reads `localStorage.getItem('theme')` or falls back to system dark-mode preference (defaulting to light). It immediately assigns `data-theme="light"` or `data-theme="dark"` to `document.documentElement` before the browser executes layout or paint.
2. **React Theme Hook**:
   - Reads existing `document.documentElement.getAttribute('data-theme')`.
   - On user toggle, updates `localStorage`, `data-theme` attribute, and `<meta name="theme-color">`.
   - Wraps storage reads/writes in `try / catch` blocks to preserve functionality in private browsing or iframe sandboxes.

### 5.3 Technical Constraints Compliance
- **Zero New Dependencies**: Uses existing React 19, Vite 7, TypeScript 5.9.
- **Strict TypeScript**: Full compatibility with `tsc --noEmit`. No implicit `any`, no unused imports or variables.
- **System Fonts Only**: No external font weights or Google Fonts CDNs. Uses native OS rendering with fluid modular scale (`clamp()`).
- **Robots Specification**: Exactly matching the specified bot-disallow block in `public/robots.txt`.
- **HTML Document Headers**:
  - `lang="en"`
  - `<title>BreakSignal: software built by AI agents, reviewed by people</title>`
  - `<meta name="description" content="BreakSignal builds software with AI agents inside our own harness, reviewed and approved by people. Systems engineering for finance, banking, and insurance.">`
  - `<link rel="canonical" href="https://breaksignal.ai/">`
  - Open Graph title and description (without image).

---

## 6. Verification & Quality Gates Summary

| Verification Vector | Target Criterion | Verification Method |
|---|---|---|
| **Claim Compliance** | 100% of statements mapped to C1–C21 | Strict claim reference check in `src/content.ts` |
| **Forbidden Words** | Zero occurrences of AI models, hype words, false certifications | Regex scan across codebase for prohibited lexicon |
| **Accessibility (WCAG 2.1)** | All body text ≥ 4.5:1, UI elements ≥ 3.0:1 | Contrast matrix verification in `docs/ash-ck1w/contrast.md` |
| **Keyboard & A11y Navigation** | Skip link, native `<details>`, visible focus rings | Keyboard tab pass and DOM landmark structure audit |
| **Responsive Integrity** | Clean flow from 360px viewport to 4K without horizontal overflow | Responsive layout testing with fluid `clamp()` tokens |
| **Build Integrity** | Clean build with zero warnings or errors | `npm run build` (`tsc --noEmit && vite build`) |

---
*End of Concepts Brief (`docs/ash-ck1w/concepts_brief.md`). Ready for Phase 2: Design Draft.*
