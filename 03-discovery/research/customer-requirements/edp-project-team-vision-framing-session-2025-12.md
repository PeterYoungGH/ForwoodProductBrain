# Research: EDP Project Team Vision Framing Session

**Type:** Customer Research  
**Date:** 2025-12-16  
**Researcher(s):** Jeremy, Meagan, Jess, Serina (Forwood); Ramses, Juan, Rebekka (EDP)  
**Status:** Completed  
**Created:** 2026-01-03  
**Last Updated:** 2026-01-03

## Research Question

How can Forwood reset expectations and rebuild trust with EDP following ongoing Safety+ stability, usability, and support experience issues, and what is the vision for EDP's migration to Forwood One?

## Objectives

- Reset expectations and rebuild trust following ongoing Safety+ issues
- Provide executive-level vision and early disclosure of Forwood One platform direction
- Confirm near-term remediation plan (Dec release + ticket burn-down)
- Outline proposed path to migrate EDP to Forwood One
- Capture EDP's current-state pain points and requirements

## Methodology

### Research Method
Executive vision framing session with customer team

### Participants/Data Sources
- **Forwood:** Jeremy, Meagan, Jess, Serina
- **EDP:** Ramses, Juan, Rebekka
- **Date:** 16 December 2025, 7:30pm–10:30pm AEDT
- **Duration:** 3 hours

### Timeline
- **Start:** 2025-12-16
- **End:** 2025-12-16

## Key Findings

### Finding 1: Operational Impact and Adoption Risk

**Critical Issues:**
- High contractor population and limited ability to engage face-to-face; failures in the tool create "noise" that escalates through contractor management chains
- Field users (including non-technical workers) resist "questionnaires" and evidence capture; when the app fails, adoption regresses to paper
- Need for the tool to be stable and "fully running" to start the year at full pace (mid-January emphasis)

**Implications:**
- Stability is blocking adoption - users are reverting to paper when tool fails
- Contractor sentiment is trending negatively and needs rapid stabilization
- Mid-January deadline is critical for EDP operations

### Finding 2: Ticketing and Support Process Friction

**EDP Experience:**
- Repeated requests for screenshots/videos and "cannot reproduce" responses
- Time burden is material (high daily email volume)
- EDP wants a more efficient diagnostic process and clearer, faster answers on:
  - Is it known?
  - Is it a defect?
  - When will it be fixed?

**Forwood Commitment:**
- Acknowledged the described support loop is unacceptable
- Committed to review internal support process and expectations for evidence capture to reduce back-and-forth
- Action: Review support evidence-gathering process and propose streamlined diagnostic checklist (Jan 2026)

### Finding 3: Functional Gaps (Explicitly Cited)

**Reporting Usability and Actionability:**
- EDP has high data volumes but cannot reliably derive clear actions
- Some inconsistencies reported between Safety+ and dashboards

**Evidence/Outputs:**
- Difficulty producing "printable" verification records (PDF-like) with responses and signatures for sharing with contractors
- Forwood stated PDF-style output is available in Forwood One

**Filters and Usability Constraints:**
- Reference to filter availability and confusion about what is or isn't possible

**Offline Verification Issues:**
- Uploading/disappearing behaviour (raised; targeted fix communicated in 18 Dec release)

**Taxonomy Complexity:**
- Contractor–subcontractor hierarchies, multi-country structures, and company mappings described as clunky in current Safety+
- EDP reiterated contractor/subcontractor hierarchy is central to their operating model
- Forwood indicated Forwood One taxonomy is a significant redesign enabled by new technology and should better support complex structures
- Forwood will not commit to "fixing taxonomy" in existing Safety+ due to platform limitations

**Contractor Supervisor Monitoring:**
- Inability (today) to easily see requirements (e.g., "how many verifications per month") and monitor their workforce without heavy admin overhead

### Finding 4: Data Integrity and Veracity Risk

**EDP Concerns:**
- EDP sees a meaningful portion of submissions as unreliable (described as users rushing or intentionally selecting "pass" answers to obtain approval to work)
- Desire for additional barriers or intelligence to detect suspicious patterns and focus supervision/spot checks where the risk is highest

**EDP Request:**
- Way to correlate worker submissions with supervisor checks to enable actioning (e.g., % rechecked, % compliant vs incorrect, targeted interventions)

**Forwood Response:**
- Clarified methodology position: verifications are independent checks (not "re-evaluations") because conditions change; current product model was not designed to link operator and supervisor verifications as a single connected record
- Agreed to explore short-term reporting-based approaches (e.g., using timestamp and geolocation heuristics) without committing until assessed
- Put the "correlated cross-check" concept into Product Management roadmap discussion for potential future capability
- Forwood One capabilities referenced that can improve veracity: mandatory questions, mandatory evidence (e.g., photo required if selecting "yes"), richer question guidance (tips, context, embedded instructions)

### Finding 5: Forwood Executive Acknowledgements and Positioning

**Acknowledgements:**
- Forwood explicitly acknowledged under-delivery versus expectations and the impact on trust (including recognising "angry/frustrated" sentiment)
- Commitment stated to rebuild trust through improved delivery discipline, clearer comms, and near-term remediation

**Strategic Direction: Forwood One**
Forwood positioned Forwood One as a step-change platform rebuild driven by:

1. **Configurability:** Reduce dependency on support tickets for "minor changes"; empower customer admins to configure forms/checklists/worklists and behaviour
2. **Interconnectedness:** Single platform unifying modules (critical risk management, inspections, conversations, audits, etc.) with integrated actions and reporting
3. **AI Readiness:** Safety+ architecture not suited to AI; Forwood One designed to introduce near-term AI opportunities (e.g., assisted risk identification, coaching support, validation concepts)

### Finding 6: Mobile App Pathway (Change Management)

**Two Options Described:**
1. A new Forwood One mobile app (to access new capabilities)
2. Continued use of the existing app with improved performance by pointing to the new backend (minimising workforce disruption), with the option to migrate to the new app later

### Finding 7: Near-Term Delivery Commitments

**December 2025 Release (target 18 Dec 2025):**
- Forwood advised a release planned for 18 Dec to address multiple high-priority items
- Caveat: date may slip if QA/regression indicates risk (quality gate emphasis)
- Items confirmed as included:
  - Usernames displayed in alphabetical order (by first name)
  - Offline verifications upload issue resolved
  - Contractor company mismatch between web vs mobile resolved
  - Records not appearing in "recent verifications" resolved (identified as highest priority by EDP)

**Reporting Improvements (start immediately):**
- Forwood proposed starting dashboard improvement work immediately (via QuickSight), subject to EDP availability and requirements capture
- Forwood to bring a reporting specialist onto a call early in the new year to accelerate requirements capture and value delivery

### Finding 8: Forwood One Proposed Transition Plan

**Indicative Sequence:**

**January 2026:**
- Roadmap session with Product Management: walk through EDP's desired outcomes and how Forwood One will support them (including items already raised by Jess)
- Commence reporting requirements sessions and dashboard uplift work

**February 2026:**
- Detailed transition workshops: scope confirmation, cutover approach, security/SSO considerations, readiness activities, and change impacts

**March 2026:**
- Migration execution activities begin (prep, validation, UAT planning)

**Early April 2026 (target):**
- Migrate EDP to Forwood One
- Cutover considerations: SSO work; possible short blackout window (indicatively 1–3 hours); data migration; UAT access and validation

### Finding 9: Enablement Improvements Referenced

- Auto-generation of user guides/training materials from the platform source (kept continuously up to date)
- AI-assisted translation for content and guidance (reduced translation break risk compared to legacy approach)

### Finding 10: Decisions and Agreements

1. Proceed with the 18 Dec release subject to QA quality gate; Forwood will delay if needed to prevent regressions
2. Forwood will share a clear "fixed vs open" view immediately after the session (Jessica)
3. Early 2026: schedule a reporting-focused session with Forwood reporting specialist to uplift dashboards and actionability
4. January 2026: schedule a Product Management roadmap session with EDP to map desired outcomes to Forwood One capabilities and confirm feasibility for priority items
5. Work toward an EDP migration to Forwood One targeting early April 2026, with transition workshops in Feb and execution prep in Mar

## Insights

Synthesized insights from the research:
- **Trust and adoption risk is acute:** EDP reinforced stability + usability + support friction as drivers of adoption regression (paper fallback), and emphasised "tool must be fully running" for mid-January ramp
- **Support loop is a material pain point:** repeated "cannot reproduce" cycles and high-effort evidence gathering; EDP wants faster clarity on "known/defect/fix date"
- **Forwood taking two-track approach:** (1) immediate stabilisation via 18 Dec release and ticket burn-down; (2) accelerated pathway to Forwood One as the structural solution
- **Success depends on:** clean release execution, visible reduction in high-impact defects, fast delivery of reporting improvements that enable EDP to take clear actions from data
- **Higher-order asks:** taxonomy flexibility, evidence rules, data integrity controls, and correlated cross-checking will be worked through in January roadmap and February transition workshops

## Implications

What do these findings mean for product decisions?

- **Immediate action required:** 18 Dec release must be clean and address high-priority items without regressions
- **Reporting is critical:** Dashboard improvements must start immediately to enable EDP to take clear actions from data
- **Support process must improve:** Streamlined diagnostic process needed to reduce back-and-forth
- **Forwood One migration is strategic:** Early April 2026 target requires careful planning and execution
- **Data integrity is a concern:** Need mechanisms to detect suspicious patterns and improve veracity
- **Taxonomy complexity must be addressed:** Forwood One redesign should better support contractor/subcontractor hierarchies

## Related Opportunities

Link to opportunities this research informs:
- [EDP Stability and Performance Improvements](../../04-opportunities/03-opportunities/backlog/edp-stability-performance-improvements.md) (if exists)
- [To be linked as opportunities are created from these requirements]

## Related Outcomes

Link to outcomes this research relates to:
- [Forwood One Migration Success Business Outcome](../../04-opportunities/01-business-outcomes/forwood-one-migration-success.md)
- [Client Satisfaction and Adoption Product Outcome](../../04-opportunities/02-product-outcomes/client-satisfaction-adoption.md)
- [Migration Execution Quality Product Outcome](../../04-opportunities/02-product-outcomes/migration-execution-quality.md)

## Recommendations

- **Immediate:** Execute 18 Dec release cleanly with quality gates; share clear "fixed vs open" view
- **Immediate:** Start reporting improvements work with EDP requirements capture
- **High Priority:** Schedule reporting specialist session early January 2026
- **High Priority:** Schedule Product Management roadmap session January 2026 to map EDP outcomes to Forwood One capabilities
- **High Priority:** Review and improve support evidence-gathering process (Jan 2026)
- **Medium Priority:** Investigate short-term "correlation" reporting concept for cross-checking verifications (Jan–Feb 2026)
- **Medium Priority:** Define transition workshop plan for February 2026
- **Strategic:** Execute migration to Forwood One targeting early April 2026

## Next Steps

- [ ] Execute 18 Dec release with quality gates
- [ ] Share "fixed vs open" view with EDP (Jessica)
- [ ] Schedule reporting specialist session (early Jan 2026)
- [ ] Schedule Product Management roadmap session (Jan 2026)
- [ ] Review support evidence-gathering process (Jan 2026)
- [ ] Investigate correlation reporting concept (Jan–Feb 2026)
- [ ] Define transition workshop plan (Feb 2026)
- [ ] Begin migration execution prep (Mar 2026)

## Artifacts

Links to research artifacts:
- [Source: EDP Vision Framing Session Meeting Notes](../../../00-inbox/raw/2025-12-17-edp-project-team-vision-framing-session-meeting-notes-[PROCESSING].md)
- [EDP Customer Feedback Insights](../../../03-discovery/insights/2025-12-01-edp-feedback-insights.md)
- [EDP Feedback Research](./edp-feedback-2025-12.md)
- [EDP Pain Points and Requests Research](./edp-pain-points-and-requests-2025-12.md)

## Notes

This was a critical 3-hour executive vision framing session with EDP to reset expectations and rebuild trust following ongoing Safety+ stability, usability, and support experience issues. The session resulted in:

- Clear acknowledgement of delivery gaps and trust impact
- Commitment to two-track approach: immediate stabilisation + accelerated Forwood One pathway
- Specific near-term delivery commitments (18 Dec release, reporting improvements)
- Detailed transition plan for Forwood One migration (target early April 2026)
- Multiple action items with owners and timelines

The session captured both immediate operational concerns and strategic vision for Forwood One migration, providing a comprehensive view of EDP's requirements and expectations.


