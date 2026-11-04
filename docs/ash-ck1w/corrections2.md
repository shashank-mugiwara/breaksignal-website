# Second-pass corrections (operator review of the built site, bead ash-ck1w)

The first build passes tsc and vite. Edit src/content.ts and the components/CSS/index.html as listed. Do not touch anything else.

## Theme (hard)
1. LIGHT IS ALWAYS THE DEFAULT. On first visit (no saved choice) the site is light even if the visitor's system is dark. Remove every use of prefers-color-scheme that selects dark (in index.html's pre-paint script, in CSS media queries, in ThemeToggle). Dark applies only when the visitor has clicked the toggle (saved in localStorage, try/catch) . Update meta theme-color per theme. Keep the toggle button text state-dependent.
2. Make sure the light theme is the polished one: white ground, near-black ink, restrained red accent, hairline borders that are visible, panels barely tinted.

## Copy: cut or fix these (each is unsupported or too strong for claims.md)
3. WHAT_WE_DO "Hosted creation": summary becomes "Users create applications on BreakSignal infrastructure through AgentManage." Points: "AgentManage is the path for hosted creation of new applications. It is in development." and "It is also designed to run and maintain existing applications, including ones built elsewhere."
4. HOW_WE_BUILD step 4 title "Automated checks": description becomes "AgentManage is designed so that every change carries a diff summary, test output, a risk class and a rollback plan." Remove the first safeguard-list item that repeats it (keep the other two).
5. ENGAGEMENTS lede becomes "Software for regulated finance, banking and insurance organisations, built to your requirements." Pricing note becomes "We do not publish pricing yet." FAQ answer about cost becomes "We do not publish pricing yet. Every engagement begins with a conversation."
6. FAQ answer on compliance: delete the last sentence ("Compliance requirements are evaluated as part of an engagement conversation.").
7. PRODUCTS AgentManage facts: "Deployment options" value becomes "Designed to be offered two ways: managed by BreakSignal in its cloud, or installed on-prem in the customer's own AWS account or servers (with infrastructure billed to the customer)." Gatekeeper role description becomes "Auto-approves only low-risk changes with green tests and a recorded rollback, never schema, access-control, secrets or customer-data changes."
8. Remove the "Operational scope" fact (it repeats the summary). Remove the "App Store title" fact (repeats the summary). Keep the grids tidy after removal.
9. FOOTER privacy statement is fine. Do not use "(c)" literal if a real © symbol renders; use the © character.

## Design
10. Tame the card monotony: What we do = three offers as a ruled list (numbered rows with title left and text right on desktop, stacked on phone), not three boxed cards. How we build = keep the numbered steps but as a two-column ladder with a thin vertical rule, no boxes. Products = two panels are fine. Keep boxes only for Products, the roles table and the notes. Increase body line length control (max 65ch) and the vertical rhythm between sections.
11. Hero: larger display headline with tight leading, a short rule or small label above ("BreakSignal"), the two buttons; leave generous space. Keep it free of decoration.
12. Verify at 360 px wide there is no horizontal scroll (tables: allow the roles table to stack or scroll inside its own container).

When done, list the files changed.
