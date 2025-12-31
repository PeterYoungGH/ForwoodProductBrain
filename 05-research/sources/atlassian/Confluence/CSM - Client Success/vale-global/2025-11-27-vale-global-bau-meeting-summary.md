# Vale Global BAU Meeting Notes - Summary

**Date:** 2025-11-28  
**Source:** [Confluence Page: 21: 27 November 2025 - Vale Global BAU Meeting Note](https://forwood.atlassian.net/wiki/spaces/CSM/pages/3320250369/21+27+November+2025+-+Vale+Global+BAU+Meeting+Note)  
**Page ID:** 3320250369  
**Meeting Date:** November 27, 2025  
**Next Meeting:** December 11, 2025

---

## Executive Summary

This BAU (Business As Usual) meeting with Vale Global covered ongoing topics including Health Check methodology alignment, report combinations, app translations, contractor management, invoice processes, and various product enhancement requests. Multiple support tickets were resolved (DONE), and several product ideas were implemented or are in progress. Vale is actively using Manager, Supervisor, and Operator Verifications, Energised Work, Reporting API, Business API, and Tailings+.

---

## Meeting Participants

**Forwood:** Fabiana, Marco, and Reynaldo  
**Vale/Deloitte:** Giovanna, Luis, Gabriela, and Manuela

---

## Ongoing Topics & Action Items

### 1. Alignment on New Health Check Methodology (In Progress)

**Date Raised:** November 27, 2025  
**Status:** In Progress

**Forwood's Update:**
- Currently in internal alignment phase
- Will re-present the model to Vale team and Franze
- Evaluating how to implement for next Health Check cycle
- Will share more information as soon as possible

**Strategic Implication:** Health Check methodology is important for Vale's CRM program evaluation. Internal alignment suggests Forwood is refining the approach before presenting to client.

---

### 2. Confirmation – Combination of Reports from Mina do Pico and Mina Vargem Grande (In Progress)

**Date Raised:** November 27, 2025  
**Status:** In Progress

**Latest Update (November 27, 2025):**
- Giovanna and Lomasso confirmed data should be combined into single report
- **Report to be delivered by December 2nd**

**Strategic Implication:** Report consolidation simplifies data analysis and provides unified view across multiple mine sites.

---

### 3. App Translation into Arabic and Bahasa (In Progress)

**Date Raised:** May 26, 2025  
**Status:** In Progress

**Latest Update (November 27, 2025):**

**Forwood's Side:**
- Awaiting response from Vale to understand if any contractual action is pending
- Internally confirmed this will begin in next sprint starting December 10th
- Final date for production availability still to be confirmed

**Next Steps – Vale:**
- Confirm whether there is any pending action regarding contractual matters

**Strategic Implication:** Multi-language support (Arabic and Bahasa) indicates Vale's global operations and need for localized user experience. This is a long-standing request (6+ months) suggesting complexity or priority shifts.

---

### 4. Contractor Company Responsible SOW (In Progress)

**Date Raised:** May 22, 2025  
**Status:** In Progress

**Latest Update (November 27, 2025):**

**Forwood's Side:**
- Awaiting response from Vale to understand if any contractual action is pending
- Internally confirmed this will begin in next sprint starting December 10th
- Final date for production availability still to be confirmed

**Next Steps – Vale:**
- Confirm whether there is any pending action regarding contractual matters

**Strategic Implication:** Contractor management is important for Vale's operations. Like the translation request, this is a long-standing item (6+ months) suggesting it may require contractual agreement or SOW approval.

---

### 5. Remove RITM Value from Phone Field (In Progress)

**Date Raised:** August 21, 2025  
**Status:** In Progress

**Context:**
- Vale doesn't use phone field (was free field)
- Used it to track requests for load creation and user creation
- RITM is an IT standard code used by Vale
- Currently using middle name field to accommodate this information

**Latest Update (November 28, 2025):**
- Gabriela asked how other companies handle this
- Clarified: No other companies in same situation
- Gabriela asked about developing field specifically for Vale
- Explained: This would have contractual impacts

**Next Steps:**
- Awaiting Vale's response to understand if they're open to investing in this solution
- Depending on response, will proceed with development

**Strategic Implication:** This highlights a customization need that may require additional investment. Vale is currently using a workaround (middle name field) which is not ideal. This could be an upsell opportunity if Vale is willing to invest.

---

### 6. Bench Material for Vale CRM Event (In Progress)

**Date Raised:** November 10, 2025  
**Status:** In Progress

**Request:**
- Vale requested update of Bench material with average non-compliance data
- Data for Vale and other Forwood companies
- By group: Managers, Supervisors, Operators

**Latest Update:**
- Awaiting Vale's response on when they need this material
- Most likely timeframe: End of December (per Giovanna, November 27 meeting)
- **Note:** They want absolute number of non-compliances divided by total verifications (not percentage)
- Currently evaluating feasibility of this request

**Strategic Implication:** Benchmarking data is valuable for Vale to understand their performance relative to other companies. The specific format request (absolute numbers) may require data processing or reporting changes.

---

### 7. API for User Provisioning Automation (In Progress)

**Date Raised:** October 2, 2025  
**Status:** In Progress

**Update:**
- Materials on API sent to Vale
- **Next Steps – Vale:** Awaiting feedback from Vale

**Links Provided:**
- [Reporting API](https://help.forwoodsafety.com/en/articles/12494731-reporting-api)
- [Core Services API](https://help.forwoodsafety.com/en/articles/12440738-core-services-api)

**Strategic Implication:** API automation for user provisioning would significantly reduce manual work for Vale's IT team. This is a valuable capability that could be leveraged by other enterprise clients.

---

### 8. Invoice Submission Process (FYI)

**Date Raised:** October 29, 2025  
**Status:** FYI

**Requirements:**
- Franze and Gabriela emphasized need for invoices to be sent in advance
- **For this year:** Invoices covering up to last day of first week of December (December 5) should be submitted by December 10, processed on December 15
- Requested reviews to ensure invoices don't contain errors (e.g., charges that cannot be processed like pharmacy expenses)
- Requested review of travel policy to prevent errors

**Schedule (Updated November 13, 2025):**
- **1st to 5th:** Nova Lima and Brucutu - Expenses up to Dec 5th, Submit by Dec 10th
- **8th to 12th:** EFVM
- **15th to 19th:** Serra Sul trip - Can be submitted by early January (Jan 10th)

**Strategic Implication:** Invoice process improvements are important for client satisfaction and operational efficiency. The detailed schedule shows Vale's need for structured financial processes.

---

### 9. Pending Invoices Review (DONE)

**Date Raised:** October 2, 2025  
**Status:** DONE

**Latest Update (November 28, 2025):**
- Corrections to Invoice 1485 and 1495
- Some expenses (Junior and Pedro) sent to Forwood for review
- Vale requested expenses be submitted by 18th or 19th of each month to avoid delays
- **Gabriela confirmed both invoices are correct and payment is being processed**

**Strategic Implication:** Invoice accuracy is critical. This resolution shows good collaboration and attention to detail.

---

## Support Tickets

| Ticket # | Description | Status | Update |
|----------|-------------|--------|--------|
| #38251572 | Adjustment of Vale ID in physical locations | DONE | Adjustment completed |
| #45110495 | Location hierarchy adjustment | DONE | Adjustments completed in production environment |

**Strategic Implication:** Both tickets resolved quickly, demonstrating effective technical support and system configuration capabilities.

---

## Product Ideas & Enhancements

### Completed (DONE)

1. **Idea #780:** Changing colors to make "YES" for Live and Unplanned WORK stand out as DANGEROUS
   - Change now available in Vale environment

2. **Idea #780:** Update translations for 'Energized Work' in Forwood platform (portal, app verification, settings page)
   - Change now available in Vale environment

3. **Idea #16124080:** ID field filter on list search pages
   - Luis mentioned they decided to simplify registrations and will use username field to store CPF
   - DONE

4. **Idea #1204:** App allows inspector to place verification with future time
   - Change now available in Vale environment

5. **Idea #29119086:** New Risk Icon for CR: Hot Work Fire (RAC 12)
   - Risk icon uploaded in both mobile app and portal

### In Progress / Scoping

6. **Idea #20453371:** Add new option under "Work Type"
   - Checking if this is standard component that development team can configure for Vale's dedicated portal
   - Status: Scoping

7. **Idea #9688271:** Need to identify assessed company for each verification
   - SOW submitted to Vale
   - Pending feedback
   - Status: In Progress

### Rejected / Backlog

8. **Idea #1604:** Remove "Priority of the action plan" field
   - **REJECTED:** Not within defined scope for how action plans operate in CRM

9. **Idea #6149719:** Improvement to "Recent Verifications" field
   - Currently under review by team
   - Status: Backlog to be analyzed

**Strategic Implication:** Vale is actively engaged in product improvement with multiple ideas submitted and implemented. The mix of DONE, In Progress, and Rejected items shows a healthy product feedback loop.

---

## Functionality Roadmap

### Currently In Use

- **Manager Verifications** ✓
- **Supervisor Verifications** ✓
- **Operator Verifications** ✓
- **Energised Work** ✓
- **Reporting API** ✓
- **Business API (Actions, Incidents, User, Mobile)** ✓ - User and Taxonomy APIs
- **Tailings+** ✓

### Not Currently In Use

- **Supervisor Task Based Checklists** - Franze mentioned it's not a priority at the moment
- **Operator Task Based Checklists**
- **Scheduled Verifications**
- **Leadership Participation**
- **Incident Management**
- **Teams** - Will not be used
- **Contractor Teams**
- **Daily Notifications**
- **Managed User**
- **FAST** - Not planned

**Strategic Implication:** Vale is using core CRM functionality (three-tier verifications) plus specialized features (Energised Work, APIs, Tailings+). They're not using some advanced features like Task Based Checklists, suggesting they're focused on core verification workflows.

---

## Coming Events

- **Staging Release:** November 5, 2025
- **Production Release:** November 19, 2025

---

## Commercials

- **Contract Renewal Date:** September 5, 2027 (approximately 1.75 years remaining)
- **Purchase Order Renewal Status:**
  - 2024 Services invoice - Done
  - 2024 Reimbursement invoice - In progress
  - 2025 Services invoice - TBC

---

## Key Findings

### Finding 1: Active Product Enhancement Engagement
Vale has submitted multiple product ideas with several successfully implemented (DONE status). This demonstrates:
- Strong engagement with the product
- Clear communication of needs
- Effective collaboration between Vale and Forwood
- Quick implementation of approved enhancements

### Finding 2: Long-Standing Requests Require Contractual Clarity
Several requests (App Translation, Contractor Company Responsible SOW) have been in progress for 6+ months, with Forwood awaiting contractual confirmation from Vale. This suggests:
- Some enhancements may require additional investment or SOW approval
- Clear contractual processes are needed for custom development
- Both parties need to align on scope and investment

### Finding 3: Workarounds Indicate Product Gaps
The RITM/Phone Field situation shows Vale using a workaround (middle name field) for functionality not currently supported. This indicates:
- Product gaps that could be addressed through customization (with investment)
- Need for better understanding of client-specific requirements during implementation
- Potential upsell opportunities for custom development

### Finding 4: Strong API Adoption
Vale is using both Reporting API and Business API (User and Taxonomy APIs), showing:
- Technical sophistication
- Need for automation and integration
- Interest in programmatic access to CRM data
- Potential for further API expansion

### Finding 5: Focused Feature Usage
Vale is not using several available features (Task Based Checklists, Scheduled Verifications, Leadership Participation, Incident Management, Teams). This suggests:
- They're focused on core verification workflows
- Not all features are relevant to their use case
- Opportunity to understand why certain features aren't adopted (could inform product strategy)

### Finding 6: Invoice Process Improvements
The detailed invoice submission schedule and error prevention focus shows:
- Importance of operational excellence in client relationships
- Need for structured financial processes
- Client satisfaction depends on both product and operational quality

---

## Implications

### For Product
- **Custom Development Process:** Need clear process for handling custom development requests that require investment (e.g., RITM field, Contractor Company Responsible)
- **Multi-Language Support:** Arabic and Bahasa translation is important for global clients - should be prioritized or have clear roadmap
- **API Capabilities:** Strong API adoption suggests opportunity to expand API offerings and create API-first features
- **Benchmarking Data:** Need capability to provide benchmarking data in various formats (percentages, absolute numbers, by role)
- **Workaround Prevention:** Better discovery during implementation could identify needs like RITM field before workarounds are needed

### For Strategy
- **Client Engagement Model:** Vale's active product idea submission shows value of structured feedback mechanisms
- **Contractual Clarity:** Need clear processes for handling enhancement requests that require additional investment
- **Feature Adoption:** Understanding why certain features aren't used could inform product roadmap and training
- **Global Operations:** Multi-language support (Arabic, Bahasa) is strategic for global mining clients
- **API Strategy:** Strong API usage suggests API-first approach could be valuable for enterprise clients

### For Market
- **Enterprise Requirements:** Vale's needs (custom fields, API automation, multi-language) represent typical enterprise requirements
- **Long-Term Relationship:** Contract renewal through 2027 shows strong client relationship
- **Product Maturity:** Mix of implemented ideas and rejected requests shows mature product management process
- **Operational Excellence:** Invoice process improvements show importance of operational quality alongside product quality

---

## Action Items

- [ ] **URGENT:** Deliver combined report (Mina do Pico and Mina Vargem Grande) by December 2nd
- [ ] Complete internal alignment on Health Check methodology and re-present to Vale team and Franze
- [ ] Begin work on App Translation (Arabic and Bahasa) in sprint starting December 10th
- [ ] Begin work on Contractor Company Responsible SOW in sprint starting December 10th
- [ ] Await Vale's response on RITM field investment decision
- [ ] Provide Bench material with non-compliance data by end of December (awaiting Vale confirmation on exact date)
- [ ] Follow up on API materials feedback from Vale
- [ ] Follow up on SOW for "assessed company" identification feature
- [ ] Continue invoice submission according to agreed schedule
- [ ] Review travel policy to prevent invoice errors

---

## Notes

- **Next Meeting:** December 11, 2025
- **Contract Renewal:** September 5, 2027 (approximately 1.75 years remaining)
- Vale is actively engaged with regular BAU meetings and detailed tracking
- Multiple product enhancements successfully implemented
- Strong API adoption indicates technical sophistication
- Some long-standing requests (6+ months) suggest need for clearer contractual processes
- Invoice process improvements show focus on operational excellence
- Vale is focused on core verification workflows rather than advanced features

---

## Related Documents

- [CoMinVi Meeting Summary](../cominvi/cominvi-meeting-summary.md) - For comparison with another client deployment
- [Barrick Meeting Minutes - Product & Strategy Summary](../barrick/product-strategy-summary.md) - For comparison with another major enterprise client

