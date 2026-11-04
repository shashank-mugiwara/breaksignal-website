# Design Draft & Implementation Specification: breaksignal.ai

- **Bead**: `ash-ck1w`
- **Date**: 2026-11-04
- **Document**: `docs/ash-ck1w/design_draft.md`
- **Target Files**: `src/`, `index.html`, `public/robots.txt`
- **Status**: Complete Draft (Ready for Review & Implementation)

---

## 1. Final Copy Specification (Word-for-Word with Claim Tags)

Every factual statement, paragraph, list item, table entry, and FAQ response is tagged with its source claim identifier (`[C1]` through `[C21]`) from `docs/ash-ck1w/claims.md`. This copy is the exact, final verbatim text to be placed in `src/content.ts` and rendered across the page.

### 1.1 Document Metadata & SEO Headings

- **Page Title**: `BreakSignal: software built by AI agents, reviewed by people` [C1, C10]
- **Meta Description**: `BreakSignal builds software with AI agents running inside our own harness, reviewed and approved by people. Systems engineering for finance, banking, and insurance.` [C1, C2, C10]
- **Open Graph Title**: `BreakSignal: software built by AI agents, reviewed by people` [C1, C10]
- **Open Graph Description**: `BreakSignal builds software with AI agents running inside our own harness, reviewed and approved by people. Systems engineering for finance, banking, and insurance.` [C1, C2, C10]
- **Canonical URL**: `https://breaksignal.ai/`
- **Robots Directives**: Refer to Section 1.11 for the verbatim `public/robots.txt` specification.

---

### 1.2 Section 1: Site Header

- **Wordmark**: `BreakSignal` [C1]
- **Navigation Items**:
  1. `What we do` (href: `#what-we-do`)
  2. `How we build` (href: `#how-we-build`)
  3. `Products` (href: `#products`)
  4. `Engagements` (href: `#engagements`)
  5. `FAQ` (href: `#faq`)
  6. `Contact` (href: `#contact`) [C20]
- **Theme Toggle**: Accessible button toggling between light and dark visual themes.
  - Button accessible label: `Toggle light or dark theme`
  - Button state attribute: `aria-pressed="false"` (in light mode) / `aria-pressed="true"` (in dark mode)
  - Visual indicator: Displays current theme mode text (`Dark` / `Light`).

---

### 1.3 Section 2: Hero

- **Main Heading (H1)**: `Software built by AI agents, reviewed by people.` [C1, C10]
- **Lead Paragraph**: `BreakSignal builds software with AI agents running inside its own harness, with people reviewing and approving the work before delivery. We build software for small insurance intermediaries, third-party administrators (TPAs), small NBFCs, and fintechs.` [C1, C3, C10]
- **Action Triggers**:
  - Primary Action (Button): `How we build` (href: `#how-we-build`)
  - Secondary Action (Button, Ghost): `Contact` (href: `mailto:hello@breaksignal.ai`) [C20]
- **Design Guardrails**: No performance metrics, no cost-saving multipliers, no AI model names, no generic marketing illustrations.

---

### 1.4 Section 3: What We Do

- **Section Heading (H2)**: `What we do`
- **Section Lede**: `One company operating a single harness across three distinct uses: our own software products, hosted application creation through AgentManage, and a dedicated software agency.` [C1]
- **Offer 1: Own Products**:
  - **Title (H3)**: `Own products` [C1]
  - **Summary**: `We design, build, and operate independent software products, such as our iOS health application AtomicSync.` [C1, C18]
  - **Bullet Points**:
    - `Software conceived, engineered, and maintained entirely in-house.` [C1]
    - `Direct consumer applications including mobile health software on iOS.` [C18]
- **Offer 2: Hosted Creation**:
  - **Title (H3)**: `Hosted creation` [C1]
  - **Summary**: `We build, run, and maintain applications in managed environments through our AgentManage platform.` [C1, C11]
  - **Bullet Points**:
    - `Handles continuous operation, routine maintenance, bug fixes, and small enhancements.` [C11]
    - `Provides the infrastructure path for hosted creation of new applications.` [C11]
- **Offer 3: Software Agency**:
  - **Title (H3)**: `Software agency` [C1]
  - **Summary**: `We build bespoke software systems for finance, banking, and insurance organizations based on client requirements.` [C1, C2]
  - **Bullet Points**:
    - `Engineering focused on small insurance intermediaries, TPAs, small NBFCs, and fintechs.` [C2, C3]
    - `Work begins with client requirements, followed by delivery into client infrastructure or hosted operation.` [C2, C4]

---

### 1.5 Section 4: How We Build

- **Section Heading (H2)**: `How we build`
- **Section Lede**: `Our engineering pipeline pairs AI-assisted execution inside our own harness with an enforced human review gate before any work is delivered.` [C1, C9, C10]
- **Numbered Pipeline (Chronological Steps 1–6)**:
  1. `1. Requirements definition`: `Requirements come directly from the client or product owner.` [C2]
  2. `2. Task decomposition`: `The Chief of Staff role tracks work as tasks (beads) and assigns each task to an agent.` [C13]
  3. `3. Harness execution`: `AI agents build software and execute implementation routines inside our harness.` [C1, C12]
  4. `4. Automated checks`: `Every change carries a diff summary, automated test output, a risk class, and a rollback plan.` [C14]
  5. `5. Human review`: `A person reviews and approves the work before it is delivered; the process is built around a human gate.` [C10]
  6. `6. Delivery and hand-over`: `BreakSignal delivers the software into your infrastructure or transitions it to hosted operation.` [C2, C4]
- **Operational Safeguards ("Designed so that")**:
  - `Designed so that agents never hold production deploy credentials, and a separate deployer executes an approved change.` [C14]
  - `Designed so that every change carries a diff summary, test output, a risk class, and a rollback plan.` [C14]
  - `Designed so that the Gatekeeper auto-approves only low-risk changes with green tests and a recorded rollback plan.` [C14]
  - `Designed so that the Gatekeeper never auto-approves changes to database schemas, access controls, secrets, or customer data.` [C14]
- **What the Agents Do Not Do**:
  - `Agents do not hold production deploy credentials.` [C14]
  - `Agents do not deploy changes directly to production environments.` [C14]
  - `Agents do not self-approve changes to database schemas, access controls, secrets, or customer data.` [C14]

---

### 1.6 Section 5: Products

- **Section Heading (H2)**: `Products`
- **Section Lede**: `We build and operate specialized software products using our agent harness.` [C1]

#### Card 1: AtomicSync
- **Product Title (H3)**: `AtomicSync` [C18]
- **Status Badge**: `Release pending` [C19]
- **Summary**: `AtomicSync is BreakSignal's own product: an iOS health app with the App Store name "Atomic Sync: Digital Twin". A digital twin (avatar) shows your daily state and evolves as you do. An Apple Watch companion shows a glance of the avatar.` [C18]
- **Key Facts**:
  - `App Store title`: `"Atomic Sync: Digital Twin".` [C18]
  - `Core experience`: `A digital twin avatar that shows your daily state and evolves as you do.` [C18]
  - `Watch companion`: `An Apple Watch companion app that displays a glance of the avatar.` [C18]
  - `Availability`: `Version 1.0.1 is waiting for review; release pending as of 2026-11-04.` [C19]

#### Card 2: AgentManage
- **Product Title (H3)**: `AgentManage` [C11]
- **Status Badge**: `In development` [C17]
- **Summary**: `AgentManage runs and maintains applications (run, maintain, fix, small enhancements), including applications built elsewhere, and is also the path for hosted creation of new apps. It is in development and not generally available as of 2026-11-04.` [C11, C17]
- **Fixed Roles Specification Table**:
  - *Table Note*: `AgentManage uses five fixed agent roles; customers cannot define their own agents.` [C12]

| Role Name | Scope & Defined Function |
|:---|:---|
| **Chief of Staff** | `Tracks work as tasks (beads) and assigns each task to an agent.` [C13] |
| **Engineer** | `Implements code changes and builds software inside the harness.` [C1, C12] |
| **Watchdog** | `Fixed role in the agent set that monitors systems.` [C12] |
| **Support** | `Fixed role in the agent set that handles incoming support requests.` [C12] |
| **Gatekeeper** | `Evaluates automated tests, auto-approving only low-risk changes with green tests and a rollback plan, never schema, access-control, secrets, or customer-data changes.` [C14] |

- **Infrastructure & Operational Facts**:
  - `Audit and isolation`: `The control plane keeps an append-only audit log per organisation and isolates each organisation's data with database row-level security.` [C15]
  - `Deployment options`: `Offered two ways: managed by BreakSignal in its cloud, or installed on-prem in the customer's own AWS account or servers (with infrastructure billed to the customer).` [C16]
  - `Operational scope`: `Runs, maintains, fixes, and provides small enhancements for applications, including software built elsewhere.` [C11]
  - `Current availability`: `In development and not generally available (status as of 2026-11-04).` [C17]

---

### 1.7 Section 6: Engagements (Software Agency)

- **Section Heading (H2)**: `Engagements`
- **Section Lede**: `Structured software engineering for regulated finance, banking, and insurance organizations.` [C2]
- **Target Clients**: `Our agency builds software for small insurance intermediaries, third-party administrators (TPAs), small NBFCs, and fintechs.` [C3]
- **Step-by-Step Engagement Pipeline**:
  1. `1. Introductory conversation`: `Every engagement starts with a conversation; there is no public self-serve checkout.` [C7]
  2. `2. Requirements and boundary definition`: `Requirements come from the client. Mobile (iOS) apps are outside the agency's scope for client work.` [C2, C6]
  3. `3. AI-assisted build with human review`: `BreakSignal builds the software using AI agents inside its own harness, with a person reviewing and approving the work before it is delivered.` [C1, C9, C10]
  4. `4. Cloud delivery`: `Default delivery is into the client's own cloud in an India region, with limited vendor access.` [C4]
  5. `5. Hand-over or hosted operation`: `BreakSignal hands the software over to the client, or hosts and maintains it after a compliance audit and at the client's request. Ongoing maintenance can be delivered through AgentManage.` [C2, C4, C11]
- **Regulatory Shaping Note**: `RBI, IRDAI, CERT-In, and DPDP rules put duties on vendors that host or maintain regulated finance data. These rules shape our default of delivering software into the client's own cloud in an India region rather than operating a shared host. BreakSignal makes no compliance, certification, or audit claims on this page.` [C4, C5]
- **Commercials & Pricing Status**: `Pricing is not published yet because the cost per application is still being measured. We do not state any price or price range.` [C8]

---

### 1.8 Section 7: Frequently Asked Questions

- **Section Heading (H2)**: `Frequently asked questions`
- **Section Lede**: `Direct answers drawn strictly from our documented operational standards.`
- **Accordion Items (8 Native HTML `<details>` Elements)**:

1. **Question**: `Who reviews and approves the work?`
   - **Answer**: `A person reviews and approves work before it is delivered. The engineering process is built around a human gate.` [C10]

2. **Question**: `Where does client application data live?`
   - **Answer**: `Default delivery is into the client's own cloud in an India region, with limited vendor access.` [C4]

3. **Question**: `Does BreakSignal host client applications?`
   - **Answer**: `BreakSignal-hosted operation is provided only after a compliance audit and at the client's explicit request. Default delivery is into your own cloud.` [C4]

4. **Question**: `Do you build mobile applications for agency clients?`
   - **Answer**: `No. Mobile (iOS) apps are outside the agency's scope for client work. Our mobile development is reserved for our own products, such as AtomicSync.` [C6, C18]

5. **Question**: `What does an agency engagement cost?`
   - **Answer**: `Pricing is not published yet because the cost per application is still being measured. We do not state any price or price range. Every engagement begins with an introductory conversation.` [C7, C8]

6. **Question**: `Is AtomicSync available on the App Store?`
   - **Answer**: `AtomicSync is not yet on the App Store. Version 1.0.1 is waiting for review, and its release is pending as of 2026-11-04.` [C18, C19]

7. **Question**: `Can our team use AgentManage today?`
   - **Answer**: `AgentManage is in development and not generally available as of 2026-11-04.` [C17]

8. **Question**: `Can I sign up or purchase services online?`
   - **Answer**: `There is no public self-serve checkout. Every engagement starts with a conversation.` [C7]

9. **Question**: `Is BreakSignal compliant or certified under financial regulations?`
   - **Answer**: `We make no compliance, certification, or audit claims on this page. RBI, IRDAI, CERT-In, and DPDP rules put duties on vendors that host or maintain regulated finance data, and these rules shape our default of delivering into your own cloud. Compliance requirements are evaluated as part of an engagement conversation.` [C4, C5]

*(Explicit Scope Exclusion: "What happens to the generated code" has been omitted because no approved claim in C1–C21 addresses it).*

---

### 1.9 Section 8: Contact

- **Section Heading (H2)**: `Contact`
- **Section Lede**: `Start a conversation about your software requirements.` [C7]
- **Contact Channel**:
  - Email Address (plain visible text and clickable link): `hello@breaksignal.ai` [C20]
  - Link Target: `mailto:hello@breaksignal.ai` [C20]
- **First Email Advice**: `When writing, describe the problem you need solved, your financial or operational domain, and where the software should run (in your own cloud infrastructure or hosted).` [C7, C20]
- **Privacy Notice**: `The site has no analytics, trackers, cookies, or forms.` [C21]

---

### 1.10 Section 9: Site Footer

- **Wordmark**: `BreakSignal` [C1]
- **Navigation Links**:
  - `What we do` (href: `#what-we-do`)
  - `How we build` (href: `#how-we-build`)
  - `Products` (href: `#products`)
  - `Engagements` (href: `#engagements`)
  - `FAQ` (href: `#faq`)
  - `Contact` (href: `#contact`) [C20]
- **Direct Email**: `hello@breaksignal.ai` [C20]
- **Copyright Statement**: `(c) 2026 BreakSignal.` [C1]
- **Privacy Affirmation**: `The site has no analytics, trackers, cookies, or forms.` [C21]
- **Corporate Restraint**: No company registration identifiers, CIN/SRN, or unverified legal disclosures.

---

### 1.11 Verbatim `public/robots.txt`

The file `public/robots.txt` must contain exactly these 33 lines without additions:

```txt
User-agent: *
Allow: /

User-agent: GPTBot
Disallow: /
User-agent: ChatGPT-User
Disallow: /
User-agent: OAI-SearchBot
Disallow: /
User-agent: ClaudeBot
Disallow: /
User-agent: anthropic-ai
Disallow: /
User-agent: Claude-Web
Disallow: /
User-agent: CCBot
Disallow: /
User-agent: Google-Extended
Disallow: /
User-agent: Applebot-Extended
Disallow: /
User-agent: PerplexityBot
Disallow: /
User-agent: Bytespider
Disallow: /
User-agent: Meta-ExternalAgent
Disallow: /
User-agent: cohere-ai
Disallow: /
User-agent: Amazonbot
Disallow: /
```

---

## 2. Design Tokens & Computed Contrast Ratio Table

The design system employs a dual-theme token structure rooted in WCAG 2.1 Level AA and Level AAA standards. Because the legacy accent (`#ff4438`) fails WCAG AA normal text contrast on a white ground (achieving only 3.22:1), the light theme utilizes a deeper, richer Signal Red (`#c5221f`) while the dark theme uses a luminous Signal Red (`#ff5447`).

### 2.1 Design Tokens (Hex Values)

#### Light Theme (`:root`) — Default
```css
:root {
  --color-ground: #ffffff;             /* Main canvas background */
  --color-surface: #f4f5f7;            /* Card/panel surface background */
  --color-surface-raised: #e9ebef;     /* Elevated interactive surfaces */
  --color-ink: #111418;                /* Primary body text (near black) */
  --color-ink-muted: #575e67;          /* Secondary/muted descriptive text */
  --color-border: #767d86;             /* Structural & interactive borders (>= 3:1) */
  --color-border-subtle: #d0d5dd;      /* Subtle interior rule dividers */
  --color-accent: #c5221f;             /* Deep Signal Red (>= 4.5:1 text & button ground) */
  --color-accent-contrast: #ffffff;    /* Text rendered on accent background */
  --color-focus: #c5221f;              /* 2px outline for :focus-visible (>= 3:1) */
}
```

#### Dark Theme (`:root[data-theme="dark"]`) — Secondary Toggle
```css
:root[data-theme="dark"] {
  --color-ground: #0d0f12;             /* Deep canvas background */
  --color-surface: #15181d;            /* Card/panel surface background */
  --color-surface-raised: #1d2128;     /* Elevated interactive surfaces */
  --color-ink: #eceef0;                /* Primary body text */
  --color-ink-muted: #949ca6;          /* Secondary/muted descriptive text */
  --color-border: #606873;             /* Structural & interactive borders (>= 3:1) */
  --color-border-subtle: #272d36;      /* Subtle interior rule dividers */
  --color-accent: #ff5447;             /* Bright Signal Red (>= 4.5:1 text & button ground) */
  --color-accent-contrast: #0d0f12;    /* Dark ink on accent background */
  --color-focus: #ff5447;              /* 2px outline for :focus-visible (>= 3:1) */
}
```

---

### 2.2 Mathematical Luminance & Contrast Verification

Relative luminance $L$ is computed per WCAG 2.1:
$$c' = \begin{cases} \frac{c}{12.92} & c \le 0.04045 \\ \left(\frac{c + 0.055}{1.055}\right)^{2.4} & c > 0.04045 \end{cases}$$
$$L = 0.2126 \times R' + 0.7152 \times G' + 0.0722 \times B'$$
$$\text{Contrast Ratio} = \frac{L_1 + 0.05}{L_2 + 0.05} \quad (L_1 > L_2)$$

#### Individual Color Luminance Table
| Color Name | Hex Code | R, G, B Channels | Normalized $R', G', B'$ | Relative Luminance ($L$) |
|:---|:---|:---|:---|:---|
| **Light Ground** | `#ffffff` | 255, 255, 255 | 1.0000, 1.0000, 1.0000 | **1.0000** |
| **Light Surface** | `#f4f5f7` | 244, 245, 247 | 0.9048, 0.9129, 0.9293 | **0.9124** |
| **Light Ink** | `#111418` | 17, 20, 24 | 0.0057, 0.0071, 0.0093 | **0.0070** |
| **Light Ink Muted** | `#575e67` | 87, 94, 103 | 0.0967, 0.1136, 0.1378 | **0.1118** |
| **Light Accent** | `#c5221f` | 197, 34, 31 | 0.5599, 0.0159, 0.0137 | **0.1314** |
| **Light Border** | `#767d86` | 118, 125, 134 | 0.1834, 0.2096, 0.2464 | **0.2067** |
| **Dark Ground** | `#0d0f12` | 13, 15, 18 | 0.0040, 0.0047, 0.0062 | **0.0047** |
| **Dark Surface** | `#15181d` | 21, 24, 29 | 0.0074, 0.0091, 0.0125 | **0.0089** |
| **Dark Ink** | `#eceef0` | 236, 238, 240 | 0.8385, 0.8540, 0.8698 | **0.8519** |
| **Dark Ink Muted** | `#949ca6` | 148, 156, 166 | 0.2965, 0.3323, 0.3797 | **0.3281** |
| **Dark Accent** | `#ff5447` | 255, 84, 71 | 1.0000, 0.0898, 0.0637 | **0.2814** |
| **Dark Border** | `#606873` | 96, 104, 115 | 0.1200, 0.1428, 0.1776 | **0.1404** |

---

### 2.3 Computed Contrast Ratio Table

The required verification pairs across both themes:

| Theme | UI Element Pair | Color 1 (Hex) | Color 2 (Hex) | Formula & Luminances | Contrast Ratio | Required Ratio | Status |
|:---|:---|:---|:---|:---|:---:|:---:|:---:|
| **Light** | **Body text on background** | `#111418` | `#ffffff` | $\frac{1.0000 + 0.05}{0.0070 + 0.05} = \frac{1.050}{0.0570}$ | **18.42:1** | $\ge 4.5:1$ | **PASS (AAA)** |
| **Light** | **Muted text on background** | `#575e67` | `#ffffff` | $\frac{1.0000 + 0.05}{0.1118 + 0.05} = \frac{1.050}{0.1618}$ | **6.49:1** | $\ge 4.5:1$ | **PASS (AA)** |
| **Light** | **Muted text on card surface** | `#575e67` | `#f4f5f7` | $\frac{0.9124 + 0.05}{0.1118 + 0.05} = \frac{0.9624}{0.1618}$ | **5.95:1** | $\ge 4.5:1$ | **PASS (AA)** |
| **Light** | **Accent as text on background** | `#c5221f` | `#ffffff` | $\frac{1.0000 + 0.05}{0.1314 + 0.05} = \frac{1.050}{0.1814}$ | **5.79:1** | $\ge 4.5:1$ | **PASS (AA)** |
| **Light** | **Accent button text on accent** | `#ffffff` | `#c5221f` | $\frac{1.0000 + 0.05}{0.1314 + 0.05} = \frac{1.050}{0.1814}$ | **5.79:1** | $\ge 4.5:1$ | **PASS (AA)** |
| **Light** | **Borders on background** | `#767d86` | `#ffffff` | $\frac{1.0000 + 0.05}{0.2067 + 0.05} = \frac{1.050}{0.2567}$ | **4.09:1** | $\ge 3.0:1$ | **PASS** |
| **Light** | **Focus ring on background** | `#c5221f` | `#ffffff` | $\frac{1.0000 + 0.05}{0.1314 + 0.05} = \frac{1.050}{0.1814}$ | **5.79:1** | $\ge 3.0:1$ | **PASS** |
| **Dark** | **Body text on background** | `#eceef0` | `#0d0f12` | $\frac{0.8519 + 0.05}{0.0047 + 0.05} = \frac{0.9019}{0.0547}$ | **16.49:1** | $\ge 4.5:1$ | **PASS (AAA)** |
| **Dark** | **Muted text on background** | `#949ca6` | `#0d0f12` | $\frac{0.3281 + 0.05}{0.0047 + 0.05} = \frac{0.3781}{0.0547}$ | **6.91:1** | $\ge 4.5:1$ | **PASS (AA)** |
| **Dark** | **Muted text on card surface** | `#949ca6` | `#15181d` | $\frac{0.3281 + 0.05}{0.0089 + 0.05} = \frac{0.3781}{0.0589}$ | **6.42:1** | $\ge 4.5:1$ | **PASS (AA)** |
| **Dark** | **Accent as text on background** | `#ff5447` | `#0d0f12` | $\frac{0.2814 + 0.05}{0.0047 + 0.05} = \frac{0.3314}{0.0547}$ | **6.06:1** | $\ge 4.5:1$ | **PASS (AA)** |
| **Dark** | **Accent button text on accent** | `#0d0f12` | `#ff5447` | $\frac{0.2814 + 0.05}{0.0047 + 0.05} = \frac{0.3314}{0.0547}$ | **6.06:1** | $\ge 4.5:1$ | **PASS (AA)** |
| **Dark** | **Borders on background** | `#606873` | `#0d0f12` | $\frac{0.1404 + 0.05}{0.0047 + 0.05} = \frac{0.1904}{0.0547}$ | **3.48:1** | $\ge 3.0:1$ | **PASS** |
| **Dark** | **Focus ring on background** | `#ff5447` | `#0d0f12` | $\frac{0.2814 + 0.05}{0.0047 + 0.05} = \frac{0.3314}{0.0547}$ | **6.06:1** | $\ge 3.0:1$ | **PASS** |

---

## 3. Project Architecture, File List & `src/content.ts` Structure

### 3.1 Comprehensive File Manifest

```
breaksignal-website/
├── public/
│   ├── favicon.svg              # SVG brand mark (updated to render cleanly in light & dark)
│   └── robots.txt               # VERBATIM 33-line bot blocking file
├── index.html                   # HTML shell with meta tags, title, and synchronous pre-paint script
├── src/
│   ├── main.tsx                 # Strict React 19 bootstrap mount
│   ├── App.tsx                  # Root page assembly: Skip link, Header, 7 Sections, Footer
│   ├── content.ts               # SINGLE SOURCE OF TRUTH: All copy, claims metadata, and nav items
│   ├── styles/
│   │   ├── global.css           # Token definitions, CSS reset, typography scale, focus ring
│   │   ├── app.css              # Layout shell, skip link, header, navigation, button primitives
│   │   └── sections.css         # Section styles: Pipeline, products table, FAQ details accordion
│   └── components/
│       ├── Header.tsx           # Wordmark, section navigation, theme toggle integration
│       ├── ThemeToggle.tsx      # Keyboard-operable button for light/dark theme switching
│       ├── Hero.tsx             # H1, claim-verified lede, dual CTA buttons
│       ├── WhatWeDoSection.tsx  # 3-offer grid (Own Products, Hosted Creation, Software Agency)
│       ├── HowWeBuildSection.tsx# 6-step numbered pipeline + safeguards callout box
│       ├── ProductsSection.tsx  # Product cards: AtomicSync + AgentManage with 5-role table
│       ├── EngagementsSection.tsx# 5-step agency engagement workflow + regulatory context
│       ├── FaqSection.tsx       # 8 native <details> accordion elements
│       ├── ContactSection.tsx   # Mailto link, plain text email, email drafting advice
│       └── Footer.tsx           # Wordmark, anchor links, copyright, privacy statement
└── tsconfig.json                # Strict TypeScript configuration
```

---

### 3.2 `src/content.ts` Structure & Type Definitions

The entire site copy resides in typed data structures in `src/content.ts`. Components merely render these typed structures, ensuring that text is centralized, tamper-resistant, and easily audited against claims.

```typescript
/**
 * src/content.ts
 * Single source of truth for site content.
 * Every string is verified against claims C1–C21 in docs/ash-ck1w/claims.md.
 */

export interface NavItem {
  readonly label: string;
  readonly href: string;
  readonly claimRef?: string;
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

export interface SafeguardItem {
  readonly text: string;
  readonly claimRef: string;
}

export interface AgentRoleItem {
  readonly role: string;
  readonly description: string;
  readonly claimRef: string;
}

export interface ProductCard {
  readonly id: string;
  readonly name: string;
  readonly statusBadge: string;
  readonly summary: string;
  readonly facts: readonly {
    readonly label: string;
    readonly value: string;
    readonly claimRef: string;
  }[];
  readonly claimRef: string;
}

export interface EngagementStep {
  readonly stepNumber: number;
  readonly title: string;
  readonly description: string;
  readonly claimRef: string;
}

export interface FaqItem {
  readonly question: string;
  readonly answer: string;
  readonly claimRef: string;
}

export const SITE_METADATA = {
  title: "BreakSignal: software built by AI agents, reviewed by people",
  description:
    "BreakSignal builds software with AI agents running inside our own harness, reviewed and approved by people. Systems engineering for finance, banking, and insurance.",
  canonical: "https://breaksignal.ai/",
  email: "hello@breaksignal.ai",
  copyrightYear: 2026,
} as const;

export const NAV_LINKS: readonly NavItem[] = [
  { label: "What we do", href: "#what-we-do" },
  { label: "How we build", href: "#how-we-build" },
  { label: "Products", href: "#products" },
  { label: "Engagements", href: "#engagements" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact", claimRef: "C20" },
];

export const HERO_CONTENT = {
  headline: "Software built by AI agents, reviewed by people.",
  lede: "BreakSignal builds software with AI agents running inside its own harness, with people reviewing and approving the work before delivery. We build software for small insurance intermediaries, third-party administrators (TPAs), small NBFCs, and fintechs.",
  primaryAction: { label: "How we build", href: "#how-we-build" },
  secondaryAction: { label: "Contact", href: "mailto:hello@breaksignal.ai" },
  claimRefs: ["C1", "C3", "C10", "C20"],
} as const;

export const WHAT_WE_DO_CONTENT = {
  heading: "What we do",
  lede: "One company operating a single harness across three distinct uses: our own software products, hosted application creation through AgentManage, and a dedicated software agency.",
  offers: [
    {
      id: "own-products",
      title: "Own products",
      summary: "We design, build, and operate independent software products, such as our iOS health application AtomicSync.",
      points: [
        "Software conceived, engineered, and maintained entirely in-house.",
        "Direct consumer applications including mobile health software on iOS.",
      ],
      claimRef: "C1, C18",
    },
    {
      id: "hosted-creation",
      title: "Hosted creation",
      summary: "We build, run, and maintain applications in managed environments through our AgentManage platform.",
      points: [
        "Handles continuous operation, routine maintenance, bug fixes, and small enhancements.",
        "Provides the infrastructure path for hosted creation of new applications.",
      ],
      claimRef: "C1, C11",
    },
    {
      id: "software-agency",
      title: "Software agency",
      summary: "We build bespoke software systems for finance, banking, and insurance organizations based on client requirements.",
      points: [
        "Engineering focused on small insurance intermediaries, TPAs, small NBFCs, and fintechs.",
        "Work begins with client requirements, followed by delivery into client infrastructure or hosted operation.",
      ],
      claimRef: "C1, C2, C3, C4",
    },
  ],
} as const;

export const HOW_WE_BUILD_CONTENT = {
  heading: "How we build",
  lede: "Our engineering pipeline pairs AI-assisted execution inside our own harness with an enforced human review gate before any work is delivered.",
  pipeline: [
    {
      stepNumber: 1,
      title: "Requirements definition",
      description: "Requirements come directly from the client or product owner.",
      claimRef: "C2",
    },
    {
      stepNumber: 2,
      title: "Task decomposition",
      description: "The Chief of Staff role tracks work as tasks (beads) and assigns each task to an agent.",
      claimRef: "C13",
    },
    {
      stepNumber: 3,
      title: "Harness execution",
      description: "AI agents build software and execute implementation routines inside our harness.",
      claimRef: "C1, C12",
    },
    {
      stepNumber: 4,
      title: "Automated checks",
      description: "Every change carries a diff summary, automated test output, a risk class, and a rollback plan.",
      claimRef: "C14",
    },
    {
      stepNumber: 5,
      title: "Human review",
      description: "A person reviews and approves the work before it is delivered; the process is built around a human gate.",
      claimRef: "C10",
    },
    {
      stepNumber: 6,
      title: "Delivery and hand-over",
      description: "BreakSignal delivers the software into your infrastructure or transitions it to hosted operation.",
      claimRef: "C2, C4",
    },
  ],
  safeguardsHeading: "Designed safeguards",
  safeguards: [
    {
      text: "Designed so that agents never hold production deploy credentials, and a separate deployer executes an approved change.",
      claimRef: "C14",
    },
    {
      text: "Designed so that every change carries a diff summary, test output, a risk class, and a rollback plan.",
      claimRef: "C14",
    },
    {
      text: "Designed so that the Gatekeeper auto-approves only low-risk changes with green tests and a recorded rollback plan.",
      claimRef: "C14",
    },
    {
      text: "Designed so that the Gatekeeper never auto-approves changes to database schemas, access controls, secrets, or customer data.",
      claimRef: "C14",
    },
  ],
  whatAgentsDoNotDoHeading: "What the agents do not do",
  whatAgentsDoNotDo: [
    { text: "Agents do not hold production deploy credentials.", claimRef: "C14" },
    { text: "Agents do not deploy changes directly to production environments.", claimRef: "C14" },
    { text: "Agents do not self-approve changes to database schemas, access controls, secrets, or customer data.", claimRef: "C14" },
  ],
} as const;

export const PRODUCTS_CONTENT = {
  heading: "Products",
  lede: "We build and operate specialized software products using our agent harness.",
  atomicSync: {
    id: "atomicsync",
    name: "AtomicSync",
    statusBadge: "Release pending",
    summary:
      "AtomicSync is BreakSignal's own product: an iOS health app with the App Store name \"Atomic Sync: Digital Twin\". A digital twin (avatar) shows your daily state and evolves as you do. An Apple Watch companion shows a glance of the avatar.",
    facts: [
      { label: "App Store title", value: "\"Atomic Sync: Digital Twin\".", claimRef: "C18" },
      { label: "Core experience", value: "A digital twin avatar that shows your daily state and evolves as you do.", claimRef: "C18" },
      { label: "Watch companion", value: "An Apple Watch companion app that displays a glance of the avatar.", claimRef: "C18" },
      { label: "Availability", value: "Version 1.0.1 is waiting for review; release pending as of 2026-11-04.", claimRef: "C19" },
    ],
    claimRef: "C18, C19",
  },
  agentManage: {
    id: "agentmanage",
    name: "AgentManage",
    statusBadge: "In development",
    summary:
      "AgentManage runs and maintains applications (run, maintain, fix, small enhancements), including applications built elsewhere, and is also the path for hosted creation of new apps. It is in development and not generally available as of 2026-11-04.",
    rolesNote: "AgentManage uses five fixed agent roles; customers cannot define their own agents.",
    roles: [
      {
        role: "Chief of Staff",
        description: "Tracks work as tasks (beads) and assigns each task to an agent.",
        claimRef: "C13",
      },
      {
        role: "Engineer",
        description: "Implements code changes and builds software inside the harness.",
        claimRef: "C1, C12",
      },
      {
        role: "Watchdog",
        description: "Fixed role in the agent set that monitors systems.",
        claimRef: "C12",
      },
      {
        role: "Support",
        description: "Fixed role in the agent set that handles incoming support requests.",
        claimRef: "C12",
      },
      {
        role: "Gatekeeper",
        description:
          "Evaluates automated tests, auto-approving only low-risk changes with green tests and a rollback plan, never schema, access-control, secrets, or customer-data changes.",
        claimRef: "C14",
      },
    ],
    facts: [
      { label: "Audit and isolation", value: "The control plane keeps an append-only audit log per organisation and isolates each organisation's data with database row-level security.", claimRef: "C15" },
      { label: "Deployment options", value: "Offered two ways: managed by BreakSignal in its cloud, or installed on-prem in the customer's own AWS account or servers (with infrastructure billed to the customer).", claimRef: "C16" },
      { label: "Operational scope", value: "Runs, maintains, fixes, and provides small enhancements for applications, including software built elsewhere.", claimRef: "C11" },
      { label: "Current availability", value: "In development and not generally available (status as of 2026-11-04).", claimRef: "C17" },
    ],
    claimRef: "C11, C12, C13, C14, C15, C16, C17",
  },
} as const;

export const ENGAGEMENTS_CONTENT = {
  heading: "Engagements",
  lede: "Structured software engineering for regulated finance, banking, and insurance organizations.",
  audience: "Our agency builds software for small insurance intermediaries, third-party administrators (TPAs), small NBFCs, and fintechs.",
  pipeline: [
    {
      stepNumber: 1,
      title: "Introductory conversation",
      description: "Every engagement starts with a conversation; there is no public self-serve checkout.",
      claimRef: "C7",
    },
    {
      stepNumber: 2,
      title: "Requirements and boundary definition",
      description: "Requirements come from the client. Mobile (iOS) apps are outside the agency's scope for client work.",
      claimRef: "C2, C6",
    },
    {
      stepNumber: 3,
      title: "AI-assisted build with human review",
      description: "BreakSignal builds the software using AI agents inside its own harness, with a person reviewing and approving the work before it is delivered.",
      claimRef: "C1, C9, C10",
    },
    {
      stepNumber: 4,
      title: "Cloud delivery",
      description: "Default delivery is into the client's own cloud in an India region, with limited vendor access.",
      claimRef: "C4",
    },
    {
      stepNumber: 5,
      title: "Hand-over or hosted operation",
      description: "BreakSignal hands the software over to the client, or hosts and maintains it after a compliance audit and at the client's request. Ongoing maintenance can be delivered through AgentManage.",
      claimRef: "C2, C4, C11",
    },
  ],
  regulatoryNote:
    "RBI, IRDAI, CERT-In, and DPDP rules put duties on vendors that host or maintain regulated finance data. These rules shape our default of delivering software into the client's own cloud in an India region rather than operating a shared host. BreakSignal makes no compliance, certification, or audit claims on this page.",
  pricingNote:
    "Pricing is not published yet because the cost per application is still being measured. We do not state any price or price range.",
  claimRefs: ["C2", "C3", "C4", "C5", "C6", "C7", "C8", "C10", "C11"],
} as const;

export const FAQ_CONTENT = {
  heading: "Frequently asked questions",
  lede: "Direct answers drawn strictly from our documented operational standards.",
  items: [
    {
      question: "Who reviews and approves the work?",
      answer: "A person reviews and approves work before it is delivered. The engineering process is built around a human gate.",
      claimRef: "C10",
    },
    {
      question: "Where does client application data live?",
      answer: "Default delivery is into the client's own cloud in an India region, with limited vendor access.",
      claimRef: "C4",
    },
    {
      question: "Does BreakSignal host client applications?",
      answer: "BreakSignal-hosted operation is provided only after a compliance audit and at the client's explicit request. Default delivery is into your own cloud.",
      claimRef: "C4",
    },
    {
      question: "Do you build mobile applications for agency clients?",
      answer: "No. Mobile (iOS) apps are outside the agency's scope for client work. Our mobile development is reserved for our own products, such as AtomicSync.",
      claimRef: "C6, C18",
    },
    {
      question: "What does an agency engagement cost?",
      answer: "Pricing is not published yet because the cost per application is still being measured. We do not state any price or price range. Every engagement begins with an introductory conversation.",
      claimRef: "C7, C8",
    },
    {
      question: "Is AtomicSync available on the App Store?",
      answer: "AtomicSync is not yet on the App Store. Version 1.0.1 is waiting for review, and its release is pending as of 2026-11-04.",
      claimRef: "C18, C19",
    },
    {
      question: "Can our team use AgentManage today?",
      answer: "AgentManage is in development and not generally available as of 2026-11-04.",
      claimRef: "C17",
    },
    {
      question: "Can I sign up or purchase services online?",
      answer: "There is no public self-serve checkout. Every engagement starts with a conversation.",
      claimRef: "C7",
    },
    {
      question: "Is BreakSignal compliant or certified under financial regulations?",
      answer: "We make no compliance, certification, or audit claims on this page. RBI, IRDAI, CERT-In, and DPDP rules put duties on vendors that host or maintain regulated finance data, and these rules shape our default of delivering into your own cloud. Compliance requirements are evaluated as part of an engagement conversation.",
      claimRef: "C4, C5",
    },
  ],
} as const;

export const CONTACT_CONTENT = {
  heading: "Contact",
  lede: "Start a conversation about your software requirements.",
  email: "hello@breaksignal.ai",
  advice:
    "When writing, describe the problem you need solved, your financial or operational domain, and where the software should run (in your own cloud infrastructure or hosted).",
  privacyNotice: "The site has no analytics, trackers, cookies, or forms.",
  claimRefs: ["C7", "C20", "C21"],
} as const;

export const FOOTER_CONTENT = {
  wordmark: "BreakSignal",
  email: "hello@breaksignal.ai",
  copyright: "(c) 2026 BreakSignal.",
  privacyStatement: "The site has no analytics, trackers, cookies, or forms.",
  claimRefs: ["C1", "C20", "C21"],
} as const;
```

---

## 4. Theme Toggle & Pre-Paint Script Specification

### 4.1 The Flash of Unstyled Theme (FOUT) Problem
When a site defaults to a light theme with an optional dark mode, executing theme selection inside a React `useEffect` hook causes a noticeable visual flash: the browser initially renders white pixels, React boots 100ms later, reads storage, and flips the DOM to dark.

### 4.2 Synchronous Pre-Paint Script (`index.html`)

To eliminate FOUT completely, an inline, zero-dependency JavaScript snippet is embedded synchronously in the `<head>` of `index.html` prior to any stylesheet or body tag:

```html
<script>
  (function () {
    try {
      var saved = localStorage.getItem('theme');
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      /* Default rule: Respect saved preference; if absent, dark ONLY if OS explicitly requests dark, else light */
      var theme = saved ? saved : (prefersDark ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', theme);
      var metaTheme = document.querySelector('meta[name="theme-color"]');
      if (metaTheme) {
        metaTheme.setAttribute('content', theme === 'dark' ? '#0d0f12' : '#ffffff');
      }
    } catch (e) {
      /* Fallback for sandbox, private mode, or storage-disabled environments */
      document.documentElement.setAttribute('data-theme', 'light');
    }
  })();
</script>
```

### 4.3 React Theme Management Component (`src/components/ThemeToggle.tsx`)

The interactive toggle in the header connects directly to the DOM attribute and synchronizes state:

```tsx
import React, { useState, useEffect } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Read initial theme set by pre-paint script
    const currentTheme =
      (document.documentElement.getAttribute("data-theme") as "light" | "dark") ||
      "light";
    setTheme(currentTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);

    try {
      localStorage.setItem("theme", nextTheme);
    } catch (err) {
      // Gracefully ignore local storage restrictions in sandboxed browsers
    }

    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute(
        "content",
        nextTheme === "dark" ? "#0d0f12" : "#ffffff"
      );
    }
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label="Toggle light or dark theme"
    >
      <span className="theme-toggle-indicator" aria-hidden="true">
        {isDark ? "Light" : "Dark"}
      </span>
      <span className="theme-toggle-label">
        {isDark ? "Switch to light theme" : "Switch to dark theme"}
      </span>
    </button>
  );
}

export default ThemeToggle;
```

---

## 5. Implementation Plan & Acceptance Checks

### 5.1 Phased Implementation Sequence

```
+-----------------------------------------------------------------------------------+
| Phase 1: Content & Static Asset Groundwork                                        |
| - Create public/robots.txt with exact 33-line bot blocking configuration.         |
| - Implement src/content.ts with strict types and all claim tags.                  |
+-----------------------------------------------------------------------------------+
                                         │
                                         ▼
+-----------------------------------------------------------------------------------+
| Phase 2: HTML Head & Pre-Paint Integration                                        |
| - Update index.html: lang="en", Title, Meta Description, Canonical link, OG tags. |
| - Inject synchronous FOUT-prevention script into <head>.                         |
+-----------------------------------------------------------------------------------+
                                         │
                                         ▼
+-----------------------------------------------------------------------------------+
| Phase 3: Design Tokens & Base Stylesheets                                         |
| - Rewrite src/styles/global.css with dual-theme hex tokens and WCAG contrast.     |
| - Update src/styles/app.css: skip link, header, theme toggle, buttons, layout.    |
| - Update src/styles/sections.css: pipeline rhythm, product table, FAQ details.     |
+-----------------------------------------------------------------------------------+
                                         │
                                         ▼
+-----------------------------------------------------------------------------------+
| Phase 4: Component Implementation & Refactoring                                  |
| - Implement src/components/ThemeToggle.tsx with storage persistence & aria state. |
| - Update src/components/Header.tsx with 6 nav links & ThemeToggle.                |
| - Build Hero.tsx, WhatWeDoSection.tsx, HowWeBuildSection.tsx.                    |
| - Build ProductsSection.tsx (AtomicSync + AgentManage with 5-role table).         |
| - Build EngagementsSection.tsx (Audience, 5 steps, regulatory context, pricing). |
| - Build FaqSection.tsx (8 native <details> elements).                             |
| - Build ContactSection.tsx (Mailto, copyable address, email drafting guidance).   |
| - Update src/components/Footer.tsx (Wordmark, links, copyright, privacy note).    |
+-----------------------------------------------------------------------------------+
                                         │
                                         ▼
+-----------------------------------------------------------------------------------+
| Phase 5: Assembly & Root Integration                                              |
| - Update src/App.tsx to mount all 9 anchored landmarks sequentially.             |
| - Verify src/main.tsx React 19 root mount.                                       |
+-----------------------------------------------------------------------------------+
                                         │
                                         ▼
+-----------------------------------------------------------------------------------+
| Phase 6: Verification, Typecheck & Production Build                               |
| - Execute tsc --noEmit: verify zero type errors, zero unused locals.              |
| - Execute vite build: verify zero production bundling errors.                     |
| - Perform lexical grep: verify zero forbidden hype words or model names.          |
+-----------------------------------------------------------------------------------+
```

---

### 5.2 Acceptance Verification Checklist

| Verification Category | Required Acceptance Criterion | Verification Method |
|:---|:---|:---|
| **Claim Integrity** | Every single sentence and list item on the site maps directly to an approved claim `C1` through `C21`. | Compare copy against `docs/ash-ck1w/claims.md`. Verify claim tags in `src/content.ts`. |
| **Lexical Guardrails** | Zero forbidden terms: no AI models (OpenAI, Anthropic, Claude, GPT), no hype words (seamless, robust, cutting-edge, swarm, 10x, accelerated), no unvalidated certifications (SOC 2, ISO, RBI-approved). | Automated string/regex search across `src/` and `index.html`. |
| **Safeguard Phrasing** | AgentManage operational protections strictly use **"designed so that"** rather than "guarantees" or "ensures". | Visual inspection of `HowWeBuildSection.tsx` and `ProductsSection.tsx`. |
| **Mobile Exclusion** | Agency engagements explicitly disclaim mobile iOS development (`C6`). | Inspection of `EngagementsSection.tsx` and `FaqSection.tsx`. |
| **Theme Default** | The website loads in **Light theme** by default on initial visit unless the operating system explicitly prefers dark mode. | Clear browser storage, refresh, and inspect `data-theme` attribute on `<html>`. |
| **Pre-Paint Integrity** | No flash of unstyled theme (FOUT) upon initial page render. | Observe initial DOM painting behavior before and after cache clearance. |
| **Contrast Compliance** | Light and dark themes satisfy WCAG 2.1 Level AA ($\ge 4.5:1$ for body/muted/accent text; $\ge 3.0:1$ for interactive borders and focus rings). | Verified via Section 2.3 Mathematical Contrast Ratio Table. |
| **Accessibility (A11y)** | Exactly one `<h1>`, sequential heading hierarchy (`<h2>`, `<h3>`), valid skip link to `#main`, visible focus rings (`:focus-visible`), and native `<details>` FAQ disclosure. | Automated DOM inspection and keyboard navigation pass (`Tab`, `Shift+Tab`, `Space`, `Enter`). |
| **Mobile Responsiveness** | Flawless rendering from 360px viewport width up to 4K displays; zero horizontal scrolling. | Viewport resizing test in responsive design mode. |
| **Privacy & Zero Trackers** | Zero external analytics scripts, zero tracking pixels, zero cookies, zero web forms (`C21`). | Network inspection tab: zero outgoing third-party network requests. |
| **Technical Stack** | Strict TypeScript compilation (`tsc --noEmit`) passes with zero errors; Vite production build succeeds with no unused locals. | Run `npm run build` (`tsc --noEmit && vite build`). |

---

*File specification complete: `docs/ash-ck1w/design_draft.md`*
