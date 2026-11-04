# Allowed claims for breaksignal.ai (bead ash-ck1w)

Every factual statement on the site must map to a row here. A statement with no row is cut.
Sources are stored decisions (memory ids, 2026-10-17 to 2026-11-04). "Design" = how a thing is designed, not proof that it is live.

| # | Claim the site may make | Source |
|---|---|---|
| C1 | BreakSignal builds software with AI agents running inside its own harness, with people reviewing the work. It has three uses: its own products; hosted creation of apps through AgentManage; an outsourced software agency. One company, one harness. | mem_442339f70748a617, mem_803f64e43cf7202d, mem_219e087df528bde5 |
| C2 | The agency builds software for finance, banking and insurance clients: requirements come from the client, BreakSignal builds, then hands the software over or hosts and maintains it. | mem_803f64e43cf7202d, mem_442339f70748a617 |
| C3 | Intended clients: small insurance intermediaries, TPAs, small NBFCs and fintechs. | mem_a692242e64e31c1c |
| C4 | Default delivery is into the client's own cloud in an India region, with limited vendor access. BreakSignal-hosted operation only after a compliance audit and at the client's request. | mem_a692242e64e31c1c |
| C5 | Reason for C4: RBI, IRDAI, CERT-In and DPDP rules put duties on vendors that host or maintain regulated finance data. (Say only that these rules exist and shape the default. Do NOT say BreakSignal is compliant, certified or audited.) | mem_a692242e64e31c1c |
| C6 | Mobile (iOS) apps are outside the agency's scope for client work. | mem_066ef8839ffb48a6 |
| C7 | There is no public self-serve checkout; an engagement starts with a conversation. | mem_f30480d166128095, mem_066ef8839ffb48a6 |
| C8 | Pricing is not published yet (cost per app is still being measured). Do not state any price or range. | mem_e8f3b9a8c08eef9b |
| C9 | No speed, cost-saving or "faster than X" claim of any kind (none is validated). Say "AI-assisted", never "10x", "weeks", "accelerated". | mem_f7d16552ce95b9cf |
| C10 | A person reviews and approves work before it is delivered; the process is built around a human gate. | mem_0ec84b90c625106a |
| C11 | AgentManage runs and maintains applications (run, maintain, fix, small enhancements), including applications built elsewhere, and is also the path for hosted creation of new apps. | mem_fc55aa0e1162e7b8, mem_c00607cd88b27fa8, mem_f30480d166128095 |
| C12 | AgentManage uses five fixed agent roles: Chief of Staff, Engineer, Watchdog, Support, Gatekeeper. Customers cannot define their own agents. | mem_6aaaa16f21ff8e4b, mem_fc55aa0e1162e7b8 |
| C13 | The Chief of Staff role tracks work as tasks (beads) and assigns each task to an agent. | mem_6aaaa16f21ff8e4b |
| C14 | Design safeguards (say "designed so that", not "guarantees"): agents never hold production deploy credentials, a separate deployer executes an approved change; every change carries a diff summary, test output, risk class and rollback plan; the Gatekeeper auto-approves only low-risk changes with green tests and a recorded rollback, never schema, access-control, secrets or customer-data changes. | mem_f250b76eed80fb80 |
| C15 | The AgentManage control plane keeps an append-only audit log per organisation and isolates each organisation's data with database row-level security. | mem_53523229898825f5_c0 |
| C16 | AgentManage is offered two ways: managed by BreakSignal in its cloud, or installed on-prem in the customer's own AWS account or servers (infrastructure billed to the customer). | mem_e02ab5933bdd89fe |
| C17 | AgentManage is in development and not generally available. (State fact, as of 2026-11-04.) | mem_91f5e80f75bfe0a5, mem_c6fdbd7f8a1e37eb |
| C18 | AtomicSync is BreakSignal's own product: an iOS health app, App Store name "Atomic Sync: Digital Twin". A digital twin (avatar) shows your daily state and evolves as you do. An Apple Watch companion shows a glance of the avatar. | mem_50949174c07ae84b, mem_5e8db4aa7bee0d86, mem_eed76efbbbcf3990, mem_cdcc9fac95900888 |
| C19 | AtomicSync is not yet on the App Store (asc-status 2026-11-04: version 1.0.1 waiting for review). Say "release pending". | Scripts/asc-status.py read 2026-11-04 |
| C20 | Contact: hello@breaksignal.ai. | mem_b1289d7a2238776d |
| C21 | The site has no analytics, trackers, cookies or forms. | build fact (verify in code) |

## Forbidden (never write)
- Names of AI models, vendors or model families (his rule). Words like "open and frontier models", "zero model lock-in" are also out.
- Client names, case studies, metrics, uptime or latency numbers, testimonials, prices, delivery times, team members, addresses, phone numbers.
- Company registration, "Private Limited", CIN/SRN, compliance or certification claims, "SOC 2", "ISO", "RBI-approved", "DPDP compliant", "zero data leakage", "24x7", "sub-50ms".
- "Patent", "patented", "patent-pending" (use "proprietary" only if needed).
- Links to github.com/breaksignal, a VIP portal, ops, blog, or anything that is not an in-page anchor or mailto:hello@breaksignal.ai.
- Forms, newsletter boxes, "book a call" widgets, fake success messages.
