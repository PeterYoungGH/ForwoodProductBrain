# EDP Customer Feedback Insights

**Topic:** EDP Customer Feedback - Contractual Requirements, Stability Issues, and Service Requests  
**Date:** 2025-12-01  
**Source Research:**  
- [Inbox Item: EDP Feedback](../../00-inbox/raw/2025-12-01-edp-feedback-[PROCESSING].md)  
- [Inbox Item: EDP Vision Framing Session – Meeting Notes](../../00-inbox/raw/2025-12-17-edp-project-team-vision-framing-session-meeting-notes-[PROCESSING].md)
- [Inbox Item: EDP Pain Points and Requests](../../00-inbox/raw/2025-12-08-edp-pain-points-and-requests-[PROCESSING].md)
- [Research: EDP Pain Points and Requests](../../research/customer-requirements/edp-pain-points-and-requests-2025-12.md)

---

## Insight Statement

EDP has identified significant gaps between their expectations for contractual requirements and Forwood's current product capabilities, along with critical stability and usability issues that are impacting user adoption and job performance. The feedback reveals three key areas of concern: (1) missing contractual features that EDP believes were promised, (2) stability and operational issues affecting daily use, and (3) usability and workflow improvements needed for effective adoption.

---

## Evidence

### Contractual Requirement Gaps (EDP believes these are contractual; Forwood disagrees)

1. **Enhanced Self-Service and Configuration Capability**: Ability to include or modify questions or questionnaires
2. **Application Loading on Other Devices**: Loading issues on certain devices (various Android versions and terminal models)
3. **Viewable User Comments**: Comments from risk checks cannot be viewed or exported together; each check must be accessed individually
4. **Configurable Action Plans and Evidence**: No direct warning when 'No' is answered in checks, which could lead to critical risks materializing as accidents
5. **Safety+App Dashboard and Predictive Analytics**: Dashboard is overly simple; the main differentiating element (predictive capacity for accidents) has not been shown in any model or example. Dashboards should be more action-oriented, easier to interpret, and enable immediate action based on results
6. **Import/Export Data Functionality**: Ability to import/export data between the app and other EDP systems has not been demonstrated. EDP does not currently have the capacity to import/export data in an agile and manageable way, nor verify information included in the application
7. **Date Filtering in Map View**: Risk assessments cannot be filtered by completion date on the map view. This is partially done but not available for all users
8. **Capturing Work Description in Verifications**: It is unclear what work each verification refers to

### Critical Stability and Operational Issues

- **Stability problems** reported by end users, discouraging use and risking job performance
- **Ticket management issues**:
  - Difficulty replicating reported problems
  - Slow resolution of operational incidents
  - False closure of unresolved tickets
  - Need for minimum information requirements when opening tickets
- **Localization**: Questions and questionnaires appear in English; should be in Spanish
- **Data quality**: Need to remove Forwood's test verifications and EDP test data
- **UI/UX issues**: Open/pending tickets showing as "white page with black text"
- **AI content accuracy**: AI-generated content may be incorrect

### Service Requests for Improvement

- Improve usability based on suggestions
- Propose methods to verify accuracy of user-entered information (including photographic evidence). The accuracy of information entered is the greatest risk of the tool
- Provide greater traceability and status updates for tickets, including expected resolution dates
- Make dashboards more action-oriented, easier to interpret, and enable immediate action (applies to all three dashboard types)
- Prepare comprehensive user manuals and quick reference guides for interpreting reports and suggested actions
- Create simple operational manual for bulk loading companies and contracts
- Enable admin role to delete records (e.g., tests)
- Grant contractors admin roles to download verifications from Safety Plus (in manageable file format like Excel) and create DACs for their personnel
- Adjust questionnaire options:
  - Action Type: Only "Implemented in field" or "Stop work"
  - Action Plan Type: Only "Procedure" and "Installation/equipment/weather"
- Adapt organizational structure and visibility to EDP requirements: Contractors should view verifications of their subcontractors; EDP contract managers should view verifications within their contracts
- Include audio recording for pre-task talks during questionnaire completion
- Create pop-up prompt for users when new version is available from Play Store or Apple Store

### Additional Evidence (Vision Framing Session – 16 Dec 2025)

- **Trust and adoption risk is acute:** EDP reinforced stability + usability + support friction as drivers of adoption regression (paper fallback), and emphasised “tool must be fully running” for mid-January ramp.
- **Support loop is a material pain point:** repeated “cannot reproduce” cycles and high-effort evidence gathering; EDP wants faster clarity on “known/defect/fix date”.
- **Gaps newly emphasised or sharpened:**
  - Reporting actionability + inconsistencies between Safety+ and dashboards
  - Printable verification records (PDF-like outputs with responses + signatures, mobile-shareable)
  - Offline verification upload/disappearing behaviour (raised; targeted fix communicated)
  - Taxonomy complexity (contractor/subcontractor hierarchies; multi-country structures; mappings)
  - Contractor supervisor monitoring (requirements visibility and workforce oversight without heavy admin)
  - Data integrity / veracity risk (suspected “rush/pass” behaviour) + desire for anomaly detection
  - “Correlation / cross-check” concept discussed (reporting-based heuristics like time/location/role; no commitment)
- **Near-term delivery path communicated by Forwood:** 18 Dec release (QA gated) + start QuickSight uplift immediately + early Jan reporting specialist + Jan roadmap session + Feb transition workshops + early Apr 2026 target migration.

---

## Context

This feedback comes from EDP, a key customer, and represents their assessment of the product state as of late 2025. The feedback is organized into three categories:

1. **Items EDP believes are contractual requirements** (should have been closed by end of October 2025) - Note: Forwood does not believe these are contractual
2. **Other detected issues** - Operational and stability problems affecting daily use
3. **Corrective and minor evolutionary service requests** - Improvements needed for effective adoption

The feedback indicates that stability issues are "discouraging use and risking job performance," suggesting these are not just feature requests but critical blockers to adoption and value realization.

---

## Implications

### Product

**High Priority:**
- **Stability and reliability** must be addressed immediately - users are being discouraged from using the product
- **Data accuracy verification mechanisms** are critical - EDP identifies this as "the greatest risk of the tool"
- **Predictive analytics visibility** - The main differentiating feature (predictive capacity) is not visible to users
- **Action-oriented dashboards** - Current dashboards are too simple and don't enable immediate action

**Medium Priority:**
- **Localization** - Spanish language support needed for questions/questionnaires
- **Export/import functionality** - Critical for EDP's workflow integration
- **Ticket management improvements** - Better traceability, status updates, and resolution processes
- **User documentation** - Comprehensive manuals and guides needed

**Lower Priority:**
- **Configuration capabilities** - Self-service question/questionnaire modification
- **Organizational visibility** - Contractor/subcontractor view requirements
- **Audio recording** - Pre-task talk recording during questionnaire completion

### Strategy

- **Contract alignment**: Need to clarify and align on what is truly contractual vs. enhancement requests
- **Customer success focus**: Stability issues are blocking adoption - this should be a strategic priority
- **Value demonstration**: Predictive analytics (key differentiator) is not visible to users - need to make value more apparent
- **Data trust**: Information accuracy verification is critical for customer trust and tool adoption

### Market

- **Competitive positioning**: If predictive analytics is the key differentiator but not visible, we're not demonstrating value
- **Customer retention risk**: Stability issues and unmet expectations could impact retention
- **Adoption barriers**: Multiple usability and workflow issues are creating barriers to effective adoption

---

## Confidence Level

- [x] High - Strong evidence, multiple sources
- [ ] Medium - Good evidence, some sources
- [ ] Low - Preliminary, needs more research

**Rationale**: This is direct customer feedback from a key account, providing comprehensive and specific evidence of issues and needs.

---

## Action Items

- [ ] **Immediate**: Address stability issues that are discouraging use
- [ ] **Immediate**: Clarify contractual requirements vs. enhancement requests with EDP
- [ ] **High Priority**: Implement data accuracy verification mechanisms
- [ ] **High Priority**: Make predictive analytics visible and actionable in dashboards
- [ ] **High Priority**: Improve ticket management processes (traceability, status updates, resolution)
- [ ] **Medium Priority**: Localization - Spanish language support for questions/questionnaires
- [ ] **Medium Priority**: Export/import functionality for EDP workflow integration
- [ ] **Medium Priority**: Create comprehensive user documentation (manuals, quick reference guides)
- [ ] **Lower Priority**: Self-service configuration capabilities
- [ ] **Lower Priority**: Organizational visibility improvements (contractor/subcontractor views)
- [ ] **Lower Priority**: Audio recording for pre-task talks

---

## Related Insights

- [Link to related insights as they are created]

---

## Review Date

**Next Review:** 2026-01-01  
**Rationale:** Review after addressing immediate stability issues and clarifying contractual requirements

---

## Related Documents

- [Inbox Item: EDP Feedback](../../00-inbox/raw/2025-12-01-edp-feedback-[PROCESSING].md)
- [Inbox Item: EDP Pain Points and Requests](../../00-inbox/raw/2025-12-08-edp-pain-points-and-requests-[PROCESSING].md)
- [Research: EDP Pain Points and Requests](../../research/customer-requirements/edp-pain-points-and-requests-2025-12.md)

