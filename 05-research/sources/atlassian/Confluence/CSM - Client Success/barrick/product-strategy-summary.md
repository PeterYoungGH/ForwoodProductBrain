# Barrick Meeting Minutes - Product & Strategy Summary

**Generated:** 2025-11-27  
**Source:** Barrick Client Meeting Minutes (15 pages reviewed)

---

## Executive Summary

Barrick represents a major enterprise deployment with specific requirements that highlight critical product gaps and strategic opportunities. The engagement reveals the importance of content customization, mobile app stability, action management workflows, and multi-language support for global mining operations.

---

## Critical Product Gaps & Feature Requests

### 1. Supervisor Actions Functionality (HIGH PRIORITY)
**Impact:** Blocking adoption and workflow efficiency

**Gaps Identified:**
- Users with Manager role should be able to edit/close ALL action plans (including supervisor actions)
- Responsible person should be able to edit and close their own action plans
- Reporting should be consolidated (not split by Manager/Supervisor)
- Supervisor actions should have action plan completion comment (same as Managers)
- All action plan data should be available in a single table (D3 dataset)
- **NEW REQUEST:** Supervisors should be able to edit ANY action plan (not just their own) to support high supervisor turnover and business continuity

**Status:** Escalated to Product Management, some fixes delivered September 2025, additional enhancements in progress

**Strategic Implication:** Action management is a core workflow - gaps here directly impact user adoption and operational efficiency.

---

### 2. CCV Mobile App Timeout Issues (CRITICAL)
**Impact:** Data loss, user frustration, adoption blocker

**Problem:** Users consistently experience timeout issues where all entered data is lost when the app is put down for a few minutes during verification.

**Request:** Barrick needs clarity on:
- Exact timeout duration (e.g., 5 mins, 10 mins)
- Why data is lost
- Solution or workaround

**Status:** Under investigation by CCV App Team (as of September 2025)

**Strategic Implication:** Mobile app stability is non-negotiable for field operations. This is a fundamental usability issue that must be resolved.

---

### 3. Multi-Language Support (STRATEGIC REQUIREMENT)
**Impact:** Enables global deployment

**Languages Required:**
- English, French, Spanish (available)
- **Swahili** (general) - required for AME region
- **Tok Pidgin** (PNG) - required for Papua New Guinea operations
- **Arabic** (limited scope)

**Timeline:** Production by September 30, 2025 (dedicated portal)

**Strategic Implication:** Multi-language support is essential for global mining operations. This is a competitive requirement, not a nice-to-have.

---

### 4. Content Customization & Risk Framework Alignment
**Impact:** Product-market fit for enterprise clients

**Key Requirements:**
- Align 22 Forwood risks to Barrick's 10 fatal risks framework
- Group risks by Barrick fatal risk (e.g., "Lifting - Lifting Operations")
- Custom questions specific to Barrick for Managers, Supervisors, Operators
- Risk icons - Barrick wants to use their own icons
- Access to Forwood's 55 critical risks for ongoing gap analysis
- **NEW:** Ability to group "non-core" risks into libraries in CCV app
- **NEW:** Rename non-core risks to "Other - [Risk Name]" format
- **NEW:** Different colored icons for non-core risks
- **NEW:** Ability to hide/reorder questions in templates

**Strategic Implication:** Enterprise clients need significant content customization. The product must support flexible risk framework alignment.

---

### 5. Live Work Definition & Workflow
**Impact:** Safety-critical feature

**Requirements:**
- Update definition of "live work" in web portal and mobile app
- Show different checklist for each risk/control IF live work is flagged
- Notification to Supervisor when live work is indicated
- Remove work type dropdown (work type should be derived from user's department)

**Status:** Definition update scheduled for October 28, 2025 release; additional features submitted to ideas portal

**Strategic Implication:** Safety-critical workflows need clear definitions and appropriate system responses.

---

### 6. Geo Editor & Map Overlays (CRITICAL FOR UNDERGROUND)
**Impact:** Essential for underground mining operations

**Problem:** 
- Overlay file upload issues with .tiff and .mbtiles files
- Bug identified in map overlay upload process (MapTiler library issue)
- Workaround: Manual upload required

**Requirements:**
- Support for underground location mapping
- Multiple overlay files per site
- Proper bounding box coordinate handling

**Status:** Workaround in place, root cause investigation ongoing

**Strategic Implication:** Geo/mapping features are critical for mining operations, especially underground. This is a competitive differentiator.

---

### 7. Reporting & Analytics Enhancements
**Impact:** Enables data-driven decision making

**Key Requests:**
- Add "control_type" field to D1 dataset for aggregated reporting
- Consolidated action plan reporting (not split by Manager/Supervisor)
- Better QuickSight filtering capabilities (date ranges)
- Integration with Barrick's internal BI tools
- Leading indicators training and dashboard development

**Strategic Implication:** Enterprise clients need sophisticated reporting and analytics. API integration is essential.

---

### 8. CCV App Usability Improvements
**Impact:** User experience and adoption

**Requests:**
- **Collapse all questions by default** - reduce scrolling, improve visibility
- **PDF standards access** - attach PDF documents to fatal risks for offline viewing
- **Fix validation** - redirect to missing field instead of top of form
- **Capitalization fix** - all capital letters in comments field
- **Photo saving** - pictures taken with camera should save to phone's camera roll
- **Toggle expand/collapse** - independent of "mark all n/a" option

**Strategic Implication:** Mobile UX is critical for field adoption. Small usability issues compound into adoption blockers.

---

## Strategic Product Roadmap Implications

### Phase 1 (Go-Live - September 2025)
**Delivered:**
- Manager & Supervisor checklists
- CCV Mobile App
- Task-based checklists
- Teams Management
- Geo Editor
- Map Report
- SSO
- Reporting API & User API

**Deferred:**
- Risk+ (Phase 2 - Q1 2026)
- Scheduled Verifications (early 2026)
- Leadership Participation (tracked internally)
- Manager checklists (Q1 2026)
- Operator checklists (Q2 2026)

### Phase 2 (Q1 2026)
- Risk+ deployment
- Manager checklist content
- Scheduled verifications (focus on manager verification planning and auditing)

### Phase 3 (Q2 2026)
- Operator checklist content

---

## Infrastructure & Technical Requirements

### Dedicated Portal Transition
**Impact:** Major infrastructure change

**Key Components:**
- New URL: `id.barrick.forwoodsafety.com`
- Staging: September 15, 2025
- Production: September 30, 2025
- Data migration: Users, taxonomy, geo areas, overlays, task-based checklists
- SSO reconfiguration
- API URL and key updates
- Risk+ deployment

**Strategic Implication:** Dedicated portals are a strategic offering for enterprise clients. This requires robust migration processes.

---

## Client Success & Adoption Insights

### Adoption Strategy
- **Quality over quantity:** Focus on coaching and ensuring culture and quality are prioritized
- **Cascading training:** Managers trained first, then train/coach superintendents, foremen, and supervisors
- **Non-compliance rates:** Reflect emphasis on quality verifications (not necessarily a negative indicator)

### Success Metrics
- Global rollout to Managers and Supervisors by September 30, 2025 (achieved)
- CRM embedded as natural part of work
- Field teams demonstrate increased capability and confidence
- Enhanced reporting enables early identification of leading indicator trends

### Success Story Example
**Action Plan 2347952:** Verifier identified fall from height risk that wasn't a "fatal risk" but was correctly identified due to environment. This demonstrates the system enabling better risk identification beyond standard frameworks.

---

## Integration Requirements

### APIs
- **Reporting API:** Confirmed, integrated with Barrick's internal BI tools
- **User API:** Confirmed, supports bulk user management
- **Incident API:** Preliminary discussion on IsoMetrix integration (scoping required)

### External Systems
- Barrick's internal BI tools (for dashboard development)
- IsoMetrix (incident management system)
- Forwood ID (SSO integration)

**Strategic Implication:** Enterprise clients require robust API integrations. This is a competitive requirement.

---

## Configuration & Customization Needs

### Action Plan Fields
- Change solution type to match hierarchy of controls (PPE, Administration, Engineering, Substitution, Elimination)
- Label as "control type"
- Change priority to "high, medium, low" (instead of current system)

### Job Role Category (JRC) Configuration
- TeamsAccess should only be assigned by Site Admins
- IncidentsAccess should only be assigned by Site Admins

### Content Management
- Ability to hide questions in templates
- Ability to update risk names (e.g., "Other - Collapse of Structure")
- Risk icon customization (Barrick-specific icons)
- Risk ordering/weighting for display

**Strategic Implication:** Enterprise clients need significant configuration flexibility. Self-service configuration capabilities reduce support burden.

---

## Security & Compliance

### Multi-Factor Authentication (MFA)
- MFA capability introduced (August 2025)
- Applies to non-SSO, non-managed users only
- Email-based verification codes
- Supported by bulk create/update process
- CCV app - out of scope

### SSO
- Required for enterprise deployment
- Successfully configured and deployed

**Strategic Implication:** Security features are table stakes for enterprise clients.

---

## Product Development Priorities (Based on Barrick Feedback)

### Critical (Blocking Adoption)
1. **CCV App Timeout Fix** - Data loss is unacceptable
2. **Supervisor Actions Enhancements** - Core workflow blocker
3. **Geo Editor Overlay Fix** - Critical for underground operations

### High Priority (Enabling Adoption)
4. **Multi-Language Support** - Required for global deployment
5. **Content Customization** - Essential for enterprise fit
6. **Live Work Workflow** - Safety-critical feature
7. **Action Plan Field Customization** - Workflow efficiency

### Medium Priority (Enhancing Experience)
8. **CCV App Usability Improvements** - UX enhancements
9. **Reporting Enhancements** - Analytics capabilities
10. **PDF Standards Access** - Reference material in app

---

## Strategic Recommendations

### 1. Mobile App Stability
**Action:** Prioritize CCV app timeout investigation and fix. This is a fundamental usability issue that directly impacts adoption.

### 2. Action Management Workflow
**Action:** Complete Supervisor Actions enhancements. This is a core workflow that multiple enterprise clients will need.

### 3. Content Customization Platform
**Action:** Invest in self-service content customization capabilities. Enterprise clients need to align with their own risk frameworks.

### 4. Multi-Language Infrastructure
**Action:** Build robust multi-language support infrastructure. This is a competitive requirement for global operations.

### 5. API & Integration Strategy
**Action:** Continue investing in API capabilities. Enterprise clients require integration with their existing systems.

### 6. Dedicated Portal Offering
**Action:** Standardize dedicated portal migration process. This is a strategic differentiator for enterprise clients.

---

## Key Learnings for Product Strategy

1. **Enterprise clients need customization, not just configuration** - Content alignment with client frameworks is essential
2. **Mobile app stability is non-negotiable** - Data loss issues are adoption blockers
3. **Workflow gaps compound quickly** - Small gaps in core workflows (like action management) become major blockers
4. **Multi-language is a competitive requirement** - Not a nice-to-have for global operations
5. **Quality over quantity in adoption** - Coaching and culture matter more than raw usage metrics
6. **API integration is essential** - Enterprise clients need to integrate with existing systems
7. **Geo/mapping features are differentiators** - Especially for mining and underground operations

---

## Open Questions & Follow-ups

1. **CCV App Timeout:** Exact duration and root cause analysis
2. **Risk+ Import:** Self-service vs. Forwood-managed import process
3. **Control Type Field:** Delivery timeline for D1 dataset enhancement
4. **Non-Core Risk Grouping:** Final implementation approach (icons, ordering, naming)
5. **PDF Standards Access:** Technical feasibility and implementation approach
6. **Supervisor Action Editing:** Final implementation timeline

---

## Related Tickets & References

- FPM-657: Supervisor actions editing/closure
- FPM-665: Client upload materials to chatbot
- FPM-664: Customize action plan dropdown fields
- FPM-803: Update action priority to high/medium/low
- FPM-820: Aggregated reporting by control type
- FPM-844: Allow Supervisors to edit actions
- ES-714: Supervisor actions escalation
- ES-931: CCV app validation redirect
- VOA-2035: Live work definition update
- VOA-2038: Capitalization in comments field
- VOA-2039: Barrick logo in CCV app
- VOA-2063: Risk ordering/weighting
- CM-2081: Content alignment work
- CM-2262: Risk icon customization
- CV4-2661: JRC configuration
- SAP-2554: Risk+ import functionality

---

**Document Status:** Living document - should be updated as new meeting minutes are reviewed

