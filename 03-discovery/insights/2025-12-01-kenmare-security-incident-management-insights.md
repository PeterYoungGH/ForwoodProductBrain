# Kenmare Security Incident Management Insights

**Topic:** Platform Extension Opportunity - Security Incident Management  
**Date:** 2025-12-01  
**Source Research:**  
- [Kenmare Security Incident Management Requirements Research](../../03-discovery/research/customer-requirements/kenmare-security-incident-management-requirements.md)  
- [Inbox Item: Kenmare Security Incident Management Requirements](../../00-inbox/raw/2025-12-01-kenmare-security-incident-management-requirements-[PROCESSING].md)

---

## Insight Statement

Strategic accounts like Kenmare are actively exploring ways to extend their existing Forwood platform investment to additional operational domains (Security incident management) rather than implementing new systems. This reveals a significant platform extension opportunity that aligns with Forwood One's Event Management capabilities, representing both customer retention and expansion revenue potential. However, technical feasibility depends on platform choice (Forwood One Event Management vs Safety+) and requires product roadmap decisions.

---

## Evidence

### Customer Request Pattern

**What we learned:** Strategic accounts want to maximize value from existing Forwood investments by extending platform capabilities to adjacent operational domains. **Evidence:** Kenmare (strategic account) explicitly requested to extend their existing Forwood EHS platform to support Security incident management and investigations, stating their goal is to "avoid implementing a new system and instead extend what they already have." **Why it matters:** This indicates customers see platform extensibility as a key value driver and prefer system consolidation over system proliferation.

### System Consolidation Preference

**What we learned:** Customers prefer extending existing systems over implementing new ones, indicating platform extensibility is a critical value driver. **Evidence:** Kenmare's explicit objective is to "avoid implementing a new system" and instead extend their existing Forwood platform. They want to reuse the same base data structure (sites, locations, departments, employees) already available for EHS. **Why it matters:** This preference creates opportunities for expansion revenue and customer retention by enabling customers to consolidate operational systems.

### Workflow Similarity

**What we learned:** Security incident management has similar workflows and data structures to EHS incident management, suggesting a natural platform extension opportunity. **Evidence:** Kenmare's requirements include: (1) Configuration capabilities for Security incident categories and workflows, (2) Data separation and permissions for separate Security module, (3) Security-specific dashboards and heat maps similar to EHS, (4) Reuse of existing base data structure. The technical assessment indicates this aligns well if customers are willing to have Security data in the same system as EHS. **Why it matters:** Similar workflows reduce implementation complexity and increase feasibility of platform extension.

### Technical Feasibility Assessment

**What we learned:** Platform extension is technically possible with Forwood One Event Management (future capability), but not feasible with Safety+ without custom development. **Evidence:** Sean Brennan-Seymour (Product Manager) assessed: (1) Configuration is technically possible, (2) Can use same base data structure, (3) Safety+ team is not doing new development and would require custom development (not desired), (4) Forwood One Event Management will enable this "in the future at some point", (5) Timeline dependency - may work for Forwood One depending on timelines. **Why it matters:** This creates a strategic decision point about platform roadmap and prioritization of Forwood One Event Management capabilities.

### Strategic Account Value

**What we learned:** Platform extension requests from strategic accounts represent both retention and expansion revenue opportunities. **Evidence:** Kenmare is a strategic account currently using Forwood for EHS. Their request to extend platform usage to Security incident management represents: (1) Retention opportunity (maximizing value from existing investment), (2) Expansion revenue opportunity (new use case), (3) Reference customer potential (demonstrating platform extensibility). **Why it matters:** Supporting strategic accounts in extending platform usage strengthens relationships and creates expansion revenue while reducing churn risk.

### Platform Architecture Implications

**What we learned:** Platform extension requirements highlight the importance of modular architecture and configurable capabilities in Forwood One. **Evidence:** Kenmare's requirements include: (1) Separate Security module with appropriate access controls, (2) Security-specific dashboards and reporting, (3) Reuse of base data structure, (4) Configuration capabilities for Security workflows. Technical assessment indicates this is feasible with Forwood One Event Management architecture. **Why it matters:** This validates the strategic value of Forwood One's modular, extensible architecture and highlights the importance of Event Management capabilities in the roadmap.

---

## Context

This insight comes from a direct customer request from Kenmare, a strategic account, in October 2025. Kenmare is currently using Forwood for EHS management and wants to extend the platform to support Security incident management. The request was assessed by Sean Brennan-Seymour (Product Manager) in November 2025, who determined technical feasibility depends on platform choice and timeline.

The research reveals a pattern that may apply to other strategic accounts: customers want to maximize value from existing Forwood investments by extending platform capabilities to adjacent operational domains rather than implementing separate systems. This creates both retention and expansion revenue opportunities.

The technical assessment indicates this is feasible with Forwood One Event Management (planned for future), but not feasible with Safety+ without custom development. This creates a strategic decision point about product roadmap prioritization.

---

## Implications

### Product

**High Priority:**
- **Forwood One Event Management capabilities** are critical for enabling platform extension opportunities like Security incident management
- **Modular architecture and configuration capabilities** must support separate modules (EHS, Security) with appropriate access controls
- **Dashboard and reporting extensibility** is required to support domain-specific visualizations (Security dashboards, heat maps) similar to EHS

**Medium Priority:**
- **Base data structure reuse** should be designed to support multiple operational domains (EHS, Security, etc.)
- **Access control and permissions** must support separation between different operational domains while sharing base data
- **Configuration framework** needs to support domain-specific workflows and incident categories

**Lower Priority:**
- **Pilot and testing capabilities** for validating platform extensions before full implementation
- **Licensing model** clarity for platform extensions (additional licensing vs. existing setup)

### Strategy

- **Platform extensibility is a key value driver**: Customers prefer extending existing systems over implementing new ones, making platform extensibility a strategic differentiator
- **Strategic account expansion**: Platform extension requests from strategic accounts represent expansion revenue opportunities that should be prioritized
- **Forwood One roadmap alignment**: Event Management capabilities should be prioritized to enable platform extension opportunities
- **Competitive differentiation**: Offering unified EHS and Security incident management in one platform differentiates Forwood from competitors requiring separate systems

### Market

- **System consolidation trend**: Customers are actively seeking to consolidate operational systems rather than proliferate them
- **Platform value realization**: Customers want to maximize value from existing platform investments by extending to additional use cases
- **Adjacent domain opportunities**: Similar workflows between EHS and Security incident management suggest natural platform extension opportunities
- **Strategic account retention**: Enabling platform extensions strengthens relationships with strategic accounts and reduces churn risk

### Customer

- **Value maximization**: Customers want to maximize value from existing Forwood investments by extending platform capabilities
- **System consolidation preference**: Customers prefer extending existing systems over implementing new ones to reduce complexity and cost
- **Workflow efficiency**: Customers want unified data structures and workflows across operational domains (EHS, Security) to reduce duplication and improve efficiency
- **Domain-specific needs**: Customers need domain-specific capabilities (Security dashboards, access controls) while sharing base infrastructure

---

## Confidence Level

- [x] High - Strong evidence, direct customer request from strategic account
- [ ] Medium - Good evidence, some sources
- [ ] Low - Preliminary, needs more research

**Rationale**: This is a direct customer request from a strategic account (Kenmare) with detailed requirements and technical assessment. The evidence is strong and specific, though additional discovery is needed to understand exact requirements and workflows.

---

## Action Items

- [ ] **High Priority**: Product decision on Forwood One Event Management roadmap prioritization (Product Manager - Peter)
- [ ] **High Priority**: Discovery call with Kenmare to understand specific Security incident management requirements and workflows
- [ ] **High Priority**: Include in debrief for Kenmare meeting with Simon and Warwick
- [ ] **Medium Priority**: Evaluate alignment between Security incident management needs and Forwood One Event Management capabilities
- [ ] **Medium Priority**: Assess if this pattern applies to other strategic accounts (identify similar extension opportunities)
- [ ] **Medium Priority**: Clarify licensing model for platform extensions (additional licensing vs. existing setup)
- [ ] **Lower Priority**: Develop pilot/testing approach for validating platform extensions
- [ ] **Lower Priority**: Discuss with Geetika/Meagan for Safety+ team perspective on platform extension feasibility

---

## Related Insights

- [Link to related insights as they are created]

---

## Related Documents

- [Kenmare Security Incident Management Requirements Research](../../03-discovery/research/customer-requirements/kenmare-security-incident-management-requirements.md)
- [Opportunity: Customers Want to Extend Existing Platform to Support Security Incident Management](../../../04-opportunities/03-opportunities/active/kenmare-extend-platform-security-incident-management.md)
- [Solution: Forwood One Event Management for Security Incidents](../../../04-opportunities/04-solutions/proposed/forwood-one-event-management-security-incidents.md)
- [Inbox Item: Kenmare Security Incident Management Requirements](../../../00-inbox/raw/2025-12-01-kenmare-security-incident-management-requirements-[PROCESSING].md)

---

## Review Date

**Next Review:** After discovery call with Kenmare and product roadmap decision  
**Rationale:** Review after understanding specific requirements and determining roadmap prioritization

