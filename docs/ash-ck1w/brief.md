# Brief: expand breaksignal.ai (light theme, real content)

Owner decisions are final (this brief is the owner's answer to every EGM owner gate; do not stop to ask).

## Goal
The live site (React 19 + Vite 7 + strict TypeScript, no router, system fonts) has three thin sections and a dark-only theme. The owner said: "More content needs to be there, just few lines is not giving idea." Rewrite it as a complete one-page marketing site with a LIGHT (white) default theme and a dark toggle, using the impeccable design skill, with substantially more content that is all true.

## Content rule (hard)
Use ONLY the claims in `docs/ash-ck1w/claims.md`, including its "Forbidden" list. Every sentence on the page must be traceable to a claim row C1-C21. If you want a sentence you cannot trace, drop it. Do not invent clients, numbers, prices, timelines, people, addresses, registrations, compliance or speed claims. Never name an AI model or vendor. Plain, specific language; no hype words (seamless, robust, cutting-edge, revolutionary, world-class, swarm, supercharge, unlock).

## Sections (one page, anchored, in this order)
1. Header: wordmark BreakSignal, nav (What we do, How we build, Products, Engagements, FAQ, Contact), theme toggle button.
2. Hero: say plainly what BreakSignal is (software built by AI agents inside our own harness, reviewed by people) and who it is for. Two actions: "How we build" and "Contact" (mailto). No metrics.
3. What we do: three offers (own products, hosted creation through AgentManage, software agency for finance, banking and insurance). Each with 2-4 lines of detail from the claims.
4. How we build: a numbered pipeline with human review (requirements from the client or product owner; plan split into tasks; agents build inside the harness; automated checks; a person reviews; delivery and hand-over). Use claims C1, C10, C13, C14; mark the AgentManage-specific safeguards as "designed so that". Include a short "what the agents do not do" list (do not hold production credentials, do not self-approve risky changes) from C14.
5. Products: two cards. AtomicSync (C18, C19: release pending) and AgentManage (C11-C17, C17 in development). Explain each in a short paragraph plus a facts list. AgentManage: roles table (five roles, one line each; keep each line to what C12/C13/C14 allow; for Watchdog and Support say only that they are fixed roles in the set, do not invent duties beyond "watches"/"handles support requests" implied by the names, or leave the line as "Fixed role" if unsure).
6. Engagements (agency): how an engagement works in steps (talk; requirements; build with review; deliver into your cloud by default; optional hosted operation after compliance audit; maintenance via AgentManage). Who it is for (C3), what it does not cover (C6), data location (C4, C5), no published pricing yet (C8), no self-serve checkout (C7). Do not give durations.
7. FAQ: 7-9 questions, native `<details>` elements, answers only from claims (who reviews the work; where does my data live; do you host; do you build mobile apps; what does it cost; is AtomicSync on the App Store; is AgentManage available; can I sign up online; are you compliant -> answer: we make no compliance claims on this page, it is a conversation for an engagement; what happens to the generated code).
   Careful: "what happens to the generated code" has no claim; omit it. Do not answer questions with anything outside the claims.
8. Contact: hello@breaksignal.com as a mailto link, with plain text address visible and a copy-friendly layout. One sentence on what to include in the first email (the problem, the domain, where it should run) is allowed as advice. No form.
9. Footer: wordmark, section links, hello@breaksignal.com, "(c) {year} BreakSignal". No registration text.

## Theme (hard)
- Light is the default and must be complete and polished by itself. Dark is the second theme.
- Toggle: a real `<button>` in the header, with `aria-pressed` or an accessible label stating the current theme, keyboard operable, remembers the choice in `localStorage` (wrap in try/catch), and on first visit follows `prefers-color-scheme` ONLY IF that is dark; otherwise light. Set the theme before first paint (tiny inline script in index.html that sets `data-theme` on `<html>`) to avoid a flash. Update `<meta name="theme-color">` with the theme.
- Tokens on `:root` (light) and `:root[data-theme="dark"]` (dark). No hard-coded colors in components. Keep the existing red accent family but pick a light-theme accent that passes contrast.
- Contrast: body text >= 4.5:1, large text and UI borders >= 3:1 in BOTH themes. State the pairs you chose and compute the ratios in `docs/ash-ck1w/contrast.md`.
- `prefers-reduced-motion` respected, visible focus ring, skip link, landmark structure, one `<h1>`, ordered headings, usable at 360 px wide, no horizontal scroll.

## Design (impeccable)
Read, and apply, these local files (read-only): `~/.claude/plugins/marketplaces/impeccable/.pi/skills/frontend-design/SKILL.md` (and its references), `.../teach-impeccable/SKILL.md`, `.../distill/SKILL.md`, `.../clarify/SKILL.md`, `.../typeset/SKILL.md`, `.../arrange/SKILL.md`, `.../polish/SKILL.md`, `.../audit/SKILL.md`. Avoid the AI-slop patterns they list (card-in-card, gradient text, glow, identical card grids everywhere, generic hero blobs). Typography: system font stack only (no web fonts, no external requests); build hierarchy with scale, weight and spacing; a restrained palette; real section rhythm (vary the layouts: a two-column intro, a numbered pipeline, a table for roles, details for FAQ). Keep the existing fluid-type token approach in `src/styles/global.css`.

## Technical constraints
- Keep Vite + React 19 + strict TS; no new dependencies, no router, no external scripts/fonts/images/trackers. `npm run build` (tsc --noEmit && vite build) must pass with zero errors and zero unused locals.
- Edit/replace files under `src/` and `index.html`. Add `public/robots.txt` and `public/sitemap.xml` is NOT wanted; only robots.txt (content given below). Add `<meta name="description">` (plain, claims only), Open Graph title/description (no image), `lang="en"`, a canonical link to `https://breaksignal.ai/`.
- Update the `<title>` to something plain such as "BreakSignal: software built by AI agents, reviewed by people" (no speed words).
- Content lives in typed data arrays in a `src/content.ts` file so copy is easy to audit; components stay small.
- Do not run shell commands that need network access. Do not touch anything outside this repository except reading the impeccable files.

## robots.txt (write exactly this to public/robots.txt)
```
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

## Done when
- `docs/ash-ck1w/` contains: this brief, claims.md, concepts_brief.md (from brainstorm), design_draft.md (from draft), the review report, contrast.md.
- The site builds; each section above exists; light default; toggle works and persists; copy traceable to claims.
