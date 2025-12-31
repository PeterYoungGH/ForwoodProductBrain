# EDP project team vision framing session – meeting notes - Processing

EDP project team vision framing session – meeting notes
Date: 16 Dec 2025
Time: 7:30pm–10:30pm AEDT
Attendees
Forwood
Jeremy, Meagan, Jess, Serina
EDP
Ramses, Juan, Rebekka
Purpose of session
Reset expectations and rebuild trust following ongoing Safety+ stability, usability, and support experience issues.
Provide executive-level vision and early disclosure of Forwood’s platform direction (Forwood One) before broader market release.
Confirm near-term remediation plan (Dec release + ticket burn-down) and outline the proposed path to migrate EDP to Forwood One.
Context and current-state pain points raised by EDP
Operational impact and adoption risk
High contractor population and limited ability to engage face-to-face; failures in the tool create “noise” that escalates through contractor management chains.
Field users (including non-technical workers) resist “questionnaires” and evidence capture; when the app fails, adoption regresses to paper.
Need for the tool to be stable and “fully running” to start the year at full pace (mid-January emphasis).
Ticketing and support process friction
EDP experience of repeated requests for screenshots/videos and “cannot reproduce” responses; time burden is material (high daily email volume).
EDP wants a more efficient diagnostic process and clearer, faster answers on: is it known, is it a defect, when will it be fixed.
Functional gaps (explicitly cited)
Reporting usability and actionability: EDP has high data volumes but cannot reliably derive clear actions; some inconsistencies reported between Safety+ and dashboards.
Evidence / outputs: difficulty producing “printable” verification records (PDF-like) with responses and signatures for sharing with contractors.
Filters and usability constraints (including reference to filter availability and confusion about what is or isn’t possible).
Offline verification issues (uploading/disappearing behaviour).
Taxonomy complexity: contractor–subcontractor hierarchies, multi-country structures, and company mappings described as clunky in current Safety+.
Contractor supervisors: inability (today) to easily see requirements (e.g., “how many verifications per month”) and monitor their workforce without heavy admin overhead.
Data integrity / veracity risk
EDP sees a meaningful portion of submissions as unreliable (described as users rushing or intentionally selecting “pass” answers to obtain approval to work).
Desire for additional barriers or intelligence to detect suspicious patterns and focus supervision/spot checks where the risk is highest.
Forwood executive acknowledgements and positioning
Forwood explicitly acknowledged under-delivery versus expectations and the impact on trust (including recognising “angry/frustrated” sentiment).
Commitment stated to rebuild trust through improved delivery discipline, clearer comms, and near-term remediation.
Strategic direction: Forwood One
Forwood positioned Forwood One as a step-change platform rebuild driven by:
Configurability: reduce dependency on support tickets for “minor changes”; empower customer admins to configure forms/checklists/worklists and behaviour.
Interconnectedness: single platform unifying modules (critical risk management, inspections, conversations, audits, etc.) with integrated actions and reporting.
AI readiness: Safety+ architecture not suited to AI; Forwood One designed to introduce near-term AI opportunities (e.g., assisted risk identification, coaching support, validation concepts).
Mobile app pathway (change management)
Two options described:
A new Forwood One mobile app (to access new capabilities).
Continued use of the existing app with improved performance by pointing to the new backend (minimising workforce disruption), with the option to migrate to the new app later.
Near-term delivery commitments discussed
Dec release (target 18 Dec 2025)
Forwood advised a release planned for 18 Dec to address multiple high-priority items, with the caveat: date may slip if QA/regression indicates risk (quality gate emphasis).
Items confirmed as included for the upcoming release (as presented in-session):
Usernames displayed in alphabetical order (by first name as stated)
Offline verifications upload issue resolved
Contractor company mismatch between web vs mobile resolved
Records not appearing in “recent verifications” resolved (identified as highest priority by EDP)
Jessica to share the slide deck after the meeting containing: what’s fixed this week vs still open, and the open-ticket list with status/escalations.
Reporting improvements (start immediately)
Forwood proposed starting dashboard improvement work immediately (via QuickSight), subject to EDP availability and requirements capture.
Forwood to bring a reporting specialist onto a call early in the new year to accelerate requirements capture and value delivery.
Forwood One proposed transition plan (high level)
Indicative sequence described
January 2026
Roadmap session with Product Management: walk through EDP’s desired outcomes and how Forwood One will support them (including items already raised by Jess).
Commence reporting requirements sessions and dashboard uplift work.
February 2026
Detailed transition workshops: scope confirmation, cutover approach, security/SSO considerations, readiness activities, and change impacts.
March 2026
Migration execution activities begin (prep, validation, UAT planning).
Early April 2026 (target)
Migrate EDP to Forwood One.
Cutover considerations mentioned: SSO work; possible short blackout window (indicatively 1–3 hours); data migration; UAT access and validation.
Enablement improvements referenced
Auto-generation of user guides/training materials from the platform source (kept continuously up to date).
AI-assisted translation for content and guidance (reduced translation break risk compared to legacy approach).
Key discussion threads and outcomes
A) Taxonomy and contractor hierarchy complexity
EDP reiterated contractor/subcontractor hierarchy is central to their operating model and was previously identified as constrained in Safety+.
Forwood indicated Forwood One taxonomy is a significant redesign enabled by new technology and should better support complex structures; however, Forwood will not commit to “fixing taxonomy” in existing Safety+ due to platform limitations.
B) Evidence, printable records, and reporting consistency
EDP reinforced the need to produce outputs that can be shared with contractors (without needing a laptop).
Forwood stated PDF-style output is available in Forwood One and positioned reporting improvements as an immediate focus area.
C) Data integrity and “supervisor cross-check” expectations
EDP requested a way to correlate worker submissions with supervisor checks to enable actioning (e.g., % rechecked, % compliant vs incorrect, targeted interventions).
Forwood clarified methodology position: verifications are independent checks (not “re-evaluations”) because conditions change; the current product model was not designed to link operator and supervisor verifications as a single connected record.
Forwood agreed to:
Explore short-term reporting-based approaches (e.g., using timestamp and geolocation heuristics) without committing until assessed.
Put the “correlated cross-check” concept into the Product Management roadmap discussion for potential future capability.
D) Reducing intentional or unintentional misreporting
Forwood reinforced this challenge is common across industries and that structured cross-checks and data patterning help identify anomalies.
Forwood One capabilities referenced that can improve veracity: mandatory questions, mandatory evidence (e.g., photo required if selecting “yes”), richer question guidance (tips, context, embedded instructions).
E) Support process improvement
Forwood acknowledged the described support loop is unacceptable and committed to review internal support process and expectations for evidence capture to reduce back-and-forth.
Decisions and agreements
Proceed with the 18 Dec release subject to QA quality gate; Forwood will delay if needed to prevent regressions.
Forwood will share a clear “fixed vs open” view immediately after the session (Jessica).
Early 2026: schedule a reporting-focused session with Forwood reporting specialist to uplift dashboards and actionability.
January 2026: schedule a Product Management roadmap session with EDP to map desired outcomes to Forwood One capabilities and confirm feasibility for priority items.
Work toward an EDP migration to Forwood One targeting early April 2026, with transition workshops in Feb and execution prep in Mar.
Action register (captured from discussion)
Action
Owner
Due / Timing
Notes
Share release slide deck: Dec fixes + open tickets list with statuses
Jessica (Forwood)
Immediately after meeting
Includes what is fixed in 18 Dec release and what remains open/escalated
Complete QA/regression and confirm release go/no-go and date
Forwood (Eng/Product via Jess)
By 18 Dec 2025
Date may move if quality risk identified
Set up reporting working session with Forwood reporting expert
Forwood (Jessica/Meagan)
Early Jan 2026
Focus: dashboard gaps, consistency, action-oriented outputs
Provide EDP reporting requirements and current dashboard pain points
EDP (Ramses/Juan/Rebekka)
Early Jan 2026
Enables QuickSight uplift work to start immediately
Schedule Product Management roadmap session (Forwood One deep dive)
Forwood (Jess / Serina/Peter /Meagan)
Jan 2026
Include taxonomy, evidence rules, data integrity controls, mobile pathway
Define transition workshop plan (scope, SSO, cutover, UAT, comms)
Forwood (Meagan + delivery leads)
Feb 2026
Establish readiness and migration approach
Investigate short-term “correlation” reporting concept for cross-checking verifications
Forwood (Jess + reporting expert)
Jan–Feb 2026
Explore feasibility using time/location/role heuristics; no commitment made yet
Review support evidence-gathering process and propose a streamlined diagnostic checklist
Forwood (Support/CS leadership)
Jan 2026
Aim: reduce repetitive requests, improve turnaround and clarity
Executive narrative (for stakeholder reuse)
EDP is experiencing material adoption and operational risk driven by Safety+ stability/performance and a high-friction support loop; contractor sentiment is trending negatively and needs rapid stabilisation.
Forwood has acknowledged the delivery gap and is taking a two-track approach: (1) immediate stabilisation via the 18 Dec release and ticket burn-down; (2) accelerated pathway to Forwood One as the structural solution (configurable, integrated platform, AI-ready).
Success over the next 4–8 weeks depends on: clean release execution, a visible reduction in high-impact defects, and fast delivery of reporting improvements that enable EDP to take clear actions from the data.
EDP’s higher-order asks (taxonomy flexibility, evidence rules, data integrity controls, and correlated cross-checking) will be worked through in January roadmap and February transition workshops, with migration targeted for early April 2026.

---

## Processing Notes

**Status:** Processing  
**Last Status Update:** 2025-12-17  
**Kanban Board:** [⬛ Inbox.md](../⬛ Inbox.md)

### Processed Documents (this run)

- Updated: [Forwood One Platform Launch (initiative)](../../02-initiatives/active/Forwood-One-platform-launch.md)
- Updated: [Delivery Roadmap](../../01-strategy/roadmap/03-delivery-roadmap.md)
- Updated: [EDP Customer Feedback Insights](../../03-discovery/insights/2025-12-01-edp-feedback-insights.md)


