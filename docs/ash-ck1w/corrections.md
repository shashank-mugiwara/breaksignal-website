# Corrections to apply on top of design_draft.md (operator, bead ash-ck1w)

Apply the findings in docs/ash-ck1w/review_report.md (all of them) plus these decisions. Where the draft and this file differ, this file wins.

1. Remove the word "bespoke" everywhere. Also remove: "specialized", "dedicated", "enforced", "continuous operation", "entirely in-house", "conceived", "direct consumer applications", "execute implementation routines", "drawn strictly from our documented operational standards".
2. AtomicSync: never print a version number or a review state or an "as of" date. Status badge text: "Release pending". Facts: "Not yet on the App Store."
3. AgentManage: status badge "In development". Do not print an "as of" date. Statements about what AgentManage does use "is designed to" or "is built to".
4. Replace the "What the agents do not do" list by one list titled "How AgentManage is designed" with items that each start "Designed so that": agents never hold production deploy credentials (a separate deployer executes an approved change); every change carries a diff summary, test output, risk class and rollback plan; the Gatekeeper auto-approves only low-risk changes with green tests and a recorded rollback, never schema, access-control, secrets or customer-data changes. Do not state these as guarantees.
5. Roles table: Chief of Staff (C13 text), Gatekeeper (C14 text only, drop "Evaluates automated tests"). For Engineer, Watchdog and Support write exactly "Fixed role." in the description column plus nothing else. Add a table caption: "Five fixed roles. Customers cannot define their own agents."
6. FAQ answer 4 (mobile apps): only "No. Mobile (iOS) apps are outside the agency's scope for client work." FAQ answers 6 and 7 must not contain dates or version numbers. FAQ count is 9; fix the "8" in the spec text.
7. The privacy line must read: "This site has no analytics, trackers or forms. It stores one thing in your browser, your light or dark choice." (localStorage is not a cookie, but be honest.) Put it only in the footer, not in the contact section.
8. Footer copyright uses the current year computed in code: "(c) {year} BreakSignal".
9. Hero lede second sentence: "The agency works for small insurance intermediaries, third-party administrators (TPAs), small NBFCs and fintechs." Keep it as the only place with the full client list plus the Engagements section; shorten the repeats elsewhere to "finance, banking and insurance".
10. Do not use the em dash character anywhere in site copy.
11. Use the accessible theme toggle label "Switch to dark theme" / "Switch to light theme" (state-dependent text on the button, no aria-pressed needed if the label changes; if you keep aria-pressed, keep the label constant).
12. Colors: keep the hex values from the draft (they were recomputed and pass). Do not use --color-border-subtle for interactive control borders or focus.
