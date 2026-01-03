# Solution: Simplified URL Schema for Forwood One Platform

**Status:** Active  
**Created:** 2026-01-03  
**Last Updated:** 2026-01-03  
**Priority:** High

## Overview

Implement a simplified, client-friendly URL structure using the `{client}.forwood.one` pattern for all production clients, eliminating legacy environment suffixes and creating a clean, modern SaaS-standard URL experience that improves professionalism and reduces cognitive load.

## Related Opportunity

Link to the opportunity this solution addresses:
- [Client Satisfaction and Adoption](../../03-opportunities/02-product-outcomes/client-satisfaction-adoption.md) - Simplified URLs improve platform professionalism and user experience

## Solution Description

Implement a unified URL schema for Forwood One platform that uses the clean `{client}.forwood.one` pattern for all production clients. This solution:

- **Eliminates legacy environment suffixes** (`.saas`, `.macquarie`, `.demo`, etc.) from production URLs
- **Uses wildcard subdomain routing** (`*.forwood.one`) to dynamically route client subdomains to appropriate tenancies
- **Maintains clean separation** between production and non-production environments (non-prod can use `{client}.staging.forwood.one` or separate domains)
- **Supports new customers with clean URLs** (no regional URL differentiation)
- **Provides flexible migration path** for Safety+ clients (legacy URLs where needed, new URLs where possible)
- **Handles data residency at infrastructure level** (not URL level)

The solution requires:
- DNS configuration for wildcard subdomains
- SSL/TLS certificate provisioning for `*.forwood.one`
- Backend routing logic to map subdomains to tenancies
- Infrastructure-level data residency support (EU data routing without regional URLs)

**Product Direction:** While technical complexities exist, this solution is worth pursuing to achieve the simplest possible URL structure. The product team prioritizes URL simplicity as a strategic goal, recognizing that clean URLs are essential for platform professionalism and user experience. We will work collaboratively with engineering to balance technical feasibility with this user experience objective.

## How It Addresses the Opportunity

This solution addresses client satisfaction and adoption by:

- **Improving Platform Professionalism:** Clean, predictable URLs (`rio-tinto.forwood.one`) align with modern SaaS standards and create a more professional brand impression
- **Reducing Cognitive Load:** Eliminating environment suffixes from production URLs makes the platform easier to understand and remember
- **Enhancing User Experience:** Simple, memorable URLs improve user confidence and reduce friction in accessing the platform
- **Supporting Brand Positioning:** The `forwood.one` domain reinforces the unified platform brand and positions Forwood One as a modern, cohesive platform

## Assumptions

- New customers will accept the simplified URL structure (no regional URLs)
- Migrating Safety+ clients can use legacy URLs where needed, but will migrate to new URLs where possible
- Data residency requirements can be met at infrastructure level without regional URL patterns
- Wildcard SSL certificates and DNS configuration are feasible
- Backend routing can be implemented to map subdomains to tenancies without compromising security
- The technical complexity is manageable and worth the effort for improved user experience
- Clean URLs will positively impact client satisfaction and platform perception

## Expected Impact

### On Opportunity

- Improved client satisfaction through professional, modern URL experience
- Reduced cognitive load and improved platform usability
- Enhanced brand perception and platform professionalism
- Better alignment with modern SaaS standards

### On Outcomes

- **Product Outcome:** [Client Satisfaction and Adoption](../../03-opportunities/02-product-outcomes/client-satisfaction-adoption.md) - Expected improvement in client satisfaction scores through professional platform experience
- **Business Outcome:** [Forwood One Platform Launch and New Customer Acquisition](../../01-business-outcomes/oculus-platform-launch-new-deals.md) - Clean URLs support professional platform positioning for new customer acquisition

## Implementation Considerations

- **Effort:** Medium (2-3 days for Option 1 or Option 3: separate ecosystem, ~6 months for Option 2: full legacy integration)
- **Complexity:** High (requires DNS, SSL, routing, and potentially authentication changes)
- **Dependencies:** 
  - DNS configuration for wildcard subdomains
  - SSL/TLS certificate provisioning
  - Backend routing implementation
  - Infrastructure-level data residency support (EU routing without regional URLs)
  - New customer onboarding process updates
- **Risks:** 
  - Technical complexity in routing and authentication
  - Data residency requirements must be handled at infrastructure level (not URL level)
  - Potential security concerns with wildcard routing
  - User authentication challenges across domains (cookies/tokens)

## Product Direction Statement

**From Product Team (Peter Young):** 

"While we recognize the technical complexities involved, I believe we should prioritize achieving the simplest possible URL structure for our clients. The user experience and platform professionalism benefits justify the additional implementation effort required. I'd like to work collaboratively with the engineering team to find the most elegant solution that balances technical feasibility with our goal of clean, simple URLs."

**Rationale:**
- Clean URLs are essential for platform professionalism and user experience
- Modern SaaS platforms use simple, predictable URL patterns
- The user experience benefit outweighs the technical implementation complexity
- This aligns with Forwood One's positioning as a modern, unified platform

## Technical Implementation Options

### Option 1: Separate Ecosystem with Regional URLs
- **Effort:** ~2 days
- **Approach:** Create new MT environments for `forwood.one` (US) and `eu.forwood.one` (EU)
- **Scope:** New customers only, separate from legacy applications
- **Trade-offs:** 
  - Clean URLs for new customers
  - Legacy customers maintain existing URLs
  - Requires maintaining two systems during transition
  - Users may need separate SSO setup for Forwood One

### Option 2: Full Legacy Integration
- **Effort:** ~6 months
- **Approach:** Rewrite authentication across all legacy stacks to use OAuth instead of cookies
- **Scope:** All customers, unified system
- **Trade-offs:**
  - Single unified URL structure for all customers
  - Significant technical complexity and resource requirements
  - Requires changes across multiple teams (muttley, laika, droopy)
  - May not be feasible for all legacy stacks

### Option 3: Unified URL Structure with Legacy Support (Recommended)
- **Effort:** ~2-3 days (similar to Option 1)
- **Approach:** 
  - Create new MT environment for `forwood.one` (single domain, no regional differentiation)
  - New clients: Use clean `{client}.forwood.one` pattern (no regional URLs)
  - Migrating Safety+ clients: Can use legacy-style URLs where needed, but migrate to new URLs where possible
  - Data residency handled at infrastructure level (not URL level)
- **Scope:** New customers get clean URLs; migrating clients have flexible migration path
- **Trade-offs:**
  - Clean, unified URL structure for all new clients (no regional complexity)
  - Flexible migration path for existing Safety+ clients
  - Data residency requirements met through infrastructure, not URL patterns
  - Simpler user experience (no need to remember regional URLs)
  - May require infrastructure-level data routing for EU clients

## Experiments

Link to experiments that test this solution:
- [URL Schema Customer Feedback and Acceptance Experiment](../../05-experiments/planned/url-schema-customer-feedback-experiment.md) - Planned 2026-01-03

## Validation Status

- [x] Hypothesis defined
- [ ] Experiment designed
- [ ] Experiment running
- [ ] Results analyzed
- [x] Decision made (proceed/don't proceed) - Option 3 selected

## Four Product Risks Assessment

### Value Risk
- **Risk Level:** Low
- **Evidence:** 
  - Product direction explicitly states value: "worth the effort of simplifying this despite the technical complexities"
  - Clean URLs align with modern SaaS standards (industry best practice)
  - Improves platform professionalism and brand perception
  - Reduces cognitive load for users
- **Missing Evidence:** Direct customer feedback on URL preferences (though industry standards support this)
- **Rationale:** Strong product direction and alignment with industry standards. Value proposition is clear: professional, modern URLs improve user experience and platform perception.

### Usability Risk
- **Risk Level:** Low
- **Evidence:**
  - Simple URL pattern (`{client}.forwood.one`) is intuitive and easy to remember
  - Eliminates confusion from environment suffixes
  - Aligns with user mental models (subdomain = client)
- **Missing Evidence:** User testing of URL patterns (though pattern is standard)
- **Rationale:** URL pattern is simple and follows industry-standard conventions. Users expect clean, predictable URLs. Low usability risk.

### Feasibility Risk
- **Risk Level:** Medium-High
- **Evidence:**
  - Option 1 (separate ecosystem) is feasible in ~2 days
  - Technical discussion shows clear implementation path
  - DNS, SSL, and routing are standard technologies
- **Missing Evidence:** 
  - Full technical validation of wildcard routing
  - Authentication solution validation
  - Regional deployment (EU) technical validation
- **Rationale:** Technical complexity exists but Option 1 provides achievable path. Development team has identified concerns but also viable implementation options. Medium-high risk due to authentication challenges and regional requirements.

### Business Viability Risk
- **Risk Level:** Low
- **Evidence:**
  - Product team explicitly directs this work: "I want to direct the team towards making the URLs as simple as possible"
  - Aligns with Forwood One platform positioning
  - Supports new customer acquisition and client satisfaction
  - Scope refined to new customers only (reduces complexity)
- **Missing Evidence:** Cost-benefit analysis (though product direction indicates value)
- **Rationale:** Strong product direction and strategic alignment. Supports business outcomes (client satisfaction, new customer acquisition). Low business viability risk.

### Overall Risk Summary
- **High Risk Areas:** None
- **Medium Risk Areas:** Feasibility (technical implementation complexity, authentication challenges)
- **Low Risk Areas:** Value, Usability, Business Viability

### Risk Mitigation Recommendations
1. **Feasibility:** Proceed with Option 3 (unified URL structure with legacy support) to avoid regional URL complexity
2. **Validation:** Validate authentication approach and infrastructure-level data residency early
3. **Phased Approach:** Start with new customers (clean URLs), then support migrating Safety+ clients
4. **Technical Discovery:** Validate wildcard SSL, DNS configuration, and infrastructure-level EU routing early

## Decision

**Status:** Approved - Option 3 Selected

**Decision Date:** 2026-01-03

**Rationale:** Solution selected: Option 3 (Unified URL Structure with Legacy Support). This option provides clean, unified URLs for all new clients without regional complexity, while offering flexible migration path for Safety+ clients. Data residency handled at infrastructure level. Effort estimated at 2-3 days, similar to Option 1 but without regional URL requirements. Ready for implementation planning.

## Decision History

### Decision Log

| Date | Decision ID | Decision | Decision Maker | Status | Rationale |
|------|------------|----------|----------------|--------|-----------|
| 2026-01-03 | DEC-2026-01-03-003 | Select Option 3: Unified URL Structure with Legacy Support | Peter Young | Active | Selected Option 3 to avoid regional URLs for new clients while supporting migrating Safety+ clients with flexible migration path |
| 2026-01-03 | DEC-2026-01-03-002 | Four Product Risks Assessed | Agent (AI) | Active | Risk assessment complete: Low risk in Value, Usability, Business Viability. Medium-High in Feasibility. Option 3 (unified URLs, no regional) recommended |
| 2026-01-03 | DEC-2026-01-03-001 | Solution Created | Agent (AI) | Active | Created solution document to capture product direction on URL simplification |

### Decision Details

#### DEC-2026-01-03-003
- **Decision Date:** 2026-01-03
- **Decision Type:** Solution Selection
- **Decision:** Select Option 3: Unified URL Structure with Legacy Support
- **Decision Maker:** Peter Young
- **Status:** Active
- **Rationale:** Selected Option 3 to achieve clean, unified URLs for all new clients without regional URL complexity. This option provides `{client}.forwood.one` pattern for new clients (no regional differentiation) while offering flexible migration path for Safety+ clients who can use legacy-style URLs where needed but migrate to new URLs where possible. Data residency requirements handled at infrastructure level, not URL level. Effort estimated at 2-3 days, similar to Option 1 but without regional URL requirements. This approach balances URL simplicity with practical migration needs.
- **Supporting Evidence:**
  - Four Product Risks Framework assessment (DEC-2026-01-03-002)
  - Option 3 provides achievable path (~2-3 days effort)
  - Avoids regional URL complexity while maintaining data residency compliance
  - Flexible migration path for Safety+ clients
  - Product direction: "I want to avoid regional urls for new clients. old clients migrating from Safety+ can have legacy style URLs (make use of new URLs where possible)"
- **Previous Decision:** DEC-2026-01-03-002 (Risk Assessment)
- **Decision Context:** Solution exploration stage - solution selection after risk assessment
- **Risk Level:** MEDIUM

#### DEC-2026-01-03-002
- **Decision Date:** 2026-01-03
- **Decision Type:** Risk Assessment
- **Decision:** Four Product Risks Assessed
- **Decision Maker:** Agent (AI)
- **Status:** Active
- **Rationale:** Assessed solution using Four Product Risks Framework. Value Risk: Low (strong product direction, industry standards). Usability Risk: Low (simple, standard pattern). Feasibility Risk: Medium-High (technical complexity but Option 3 provides achievable path). Business Viability Risk: Low (strong product direction, strategic alignment). Overall: Low risk in 3 areas, Medium-High in Feasibility. Recommended proceeding with Option 3 (unified URL structure with legacy support) to avoid regional URL complexity while supporting migrating Safety+ clients.
- **Supporting Evidence:**
  - Four Product Risks Framework assessment
  - Technical discussion in JIRA showing Option 1 feasibility (~2 days)
  - Product direction supporting value and business viability
- **Decision Context:** Solution exploration stage - risk assessment before solution selection
- **Risk Level:** MEDIUM

#### DEC-2026-01-03-001
- **Decision Date:** 2026-01-03
- **Decision Type:** Solution Creation
- **Decision:** Solution Created
- **Decision Maker:** Agent (AI)
- **Status:** Active
- **Rationale:** Solution document created to capture product direction from Peter Young on simplifying URLs despite technical complexity. Product team directs development team to prioritize URL simplicity over technical convenience. Solution addresses client satisfaction through improved platform professionalism and user experience.
- **Supporting Evidence:**
  - [JIRA Ticket FPM-893](https://forwood.atlassian.net/browse/FPM-893) - URL Schema requirements and technical discussion
  - Product direction: "I want to direct the team towards making the URLs as simple as possible. The dev team are resistant but I believe this is worth the effort of simplifying this despite the technical complexities on our side of things."
  - Technical options discussed: Option 1 (2 days, separate ecosystem) vs Option 2 (6 months, full integration)
- **Decision Context:** Solution exploration stage - capturing product direction for URL schema implementation
- **Risk Level:** MEDIUM

## Notes

- **JIRA Reference:** [FPM-893](https://forwood.atlassian.net/browse/FPM-893)
- **Parent Theme:** FPM-645 - Forwood One V2 - Safety+ Upgrade Pathway and Expanded ICP
- **Current Status in JIRA:** Discovery (Stakeholder Alignment)
- **Key Stakeholders:** 
  - Product: Peter Young (directing towards simplicity)
  - Engineering: Andrew Toth (technical implementation lead)
  - Product Management: Sean Brennan-Seymour (refined scope to new customers only)
- **Technical Discussion:** Extensive discussion in JIRA comments about implementation options, authentication challenges, and data residency requirements
- **Product Direction:** Product team prioritizes URL simplicity as a strategic goal, working collaboratively with engineering to balance technical feasibility with user experience objectives
- **Scope Refinement:** Solution scope refined to new customers only (existing customers excluded) to reduce complexity

