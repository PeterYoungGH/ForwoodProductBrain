# Roadmap Hierarchy

**Last Updated:** 2026-01-09  
**Purpose:** Visual hierarchy of strategic themes, portfolio initiatives, and delivery releases

---

## Overview

This document provides a single-view hierarchy showing how delivery releases ladder up to portfolio initiatives, which in turn support our strategic themes. Each level answers a different question:

- **Strategic Themes:** What industry problems are we solving?
- **Portfolio Initiatives:** What are we building to address them?
- **Delivery Releases:** What are we shipping to make it real?

---

## Theme 1: Fatal Risk Visibility & Governance

*Make fatal risk as visible and actionable as production metrics*

### Portfolio Initiatives

- **Fatal Risk Visibility & Governance Initiative** (Q3 FY26 - Exploring)
  - **Executive Fatal Risk Dashboard:** Role-based configurable dashboard (operator, executive, board member) with highly pared-back executive version focusing on HIPO events, incident learnings, and maturity model recommendations. Includes organisational communication mechanism for two-way executive-to-organisation messaging (e.g., stop-work events, near misses, fatalities). Includes governance tools for board-level oversight of critical controls with focus on critical control effectiveness, erosion levels, and erosion rates.
  - **Real-time SIF Risk Visibility:** Clear visualizations with global operations view, site-level deep dive, hotspot visualization, and filtering/segmentation (contractors vs employees). Supports both executive-level strategic oversight and on-the-ground supervisors/site managers coordinating work around emerging risks as controls erode.
  - **Proactive SIF Potential:**
    - Automated Proactive Alerts (predictive models analyzing verification data for risk exposure changes)
    - Predictive insights for rising SIF potential
  - **Integration with Business Systems:** Exploratory integration of safety risk data with high-level production metrics and contextual factors (weather, commodity pricing, market volatility) from existing business systems. Focus on visualizing relationships and correlations rather than managing production data. Framed as exploratory and tentative, requiring further research on feasibility and value. Goal: Generate insights that create awareness of competing pressures faced by frontline staff and help executives understand how production pressures, external conditions, and safety risks influence one another.

### Delivery Releases

- Executive dashboard MVP *(planned)*
- Fatal risk signal quality improvements *(planned)*
- Business system integration APIs *(planned)*

---

## Theme 2: From Data Collection to Action

*Transform reporting into systems that drive visible action*

### Portfolio Initiatives

- **Forwood One Platform Launch** (Q3 FY26 - Building)
  - Foundation for action-oriented data systems
  - Core platform capabilities
  
- **From Data Collection to Action Initiative** (Q1 FY27 - Exploring)
  - **Role-Based Action Dashboards:** Configurable dashboards with different views for operator, supervisor, EHS professional, and executive roles
  - **Real-Time Action Visibility:** Visualizations of action status across operations, sites, and teams with global view, site-level deep dive, and hotspot identification
  - **Proactive Action Alerts:** Automated alerts for action items at risk of delay or when completion rates drop
  - AI-powered action recommendation engine
  - Automated control gap detection and closure workflows
  - Visible action tracking and follow-through
  - Data-to-action connection in dashboards
  - Integration with business systems for contextual overlays showing production pressure correlations

### Delivery Releases

- EDP reporting uplift (QuickSight) *(in progress)*
- Dashboard actionability improvements *(planned)*
- Action recommendation engine MVP *(planned)*

---

## Theme 3: Credibility & Trust Through Systems

*Position safety professionals as enabling partners, not compliance cops*

### Portfolio Initiatives

- **Design System and UX Foundation** (Q3 FY26 - Building)
  - Best-in-class UI/UX design system
  - Trust-building user experiences
  - Role-specific experiences
  
- **Native App Launch** (Q4 FY26 - Exploring)
  - Mobile experience that positions safety professionals as partners
  - Enhanced offline capability for field workers
  
- **Credibility & Trust Through Systems Initiative** (Q2 FY27+ - Exploring)
  - **Role-Based Trust Dashboards:** Configurable dashboards with different experiences for worker, safety professional, supervisor, and executive roles
  - **Real-Time Trust Visibility:** Visualizations of trust and credibility indicators across operations, sites, and teams with global view, site-level deep dive, and hotspot identification
  - **Organisational Communication Mechanism:** Two-way communication between leadership and organisation for trust-building, recognition, and consistent messaging
  - Non-blame reporting interfaces
  - Learning systems that celebrate issues
  - Leadership engagement tools
  - Systems that reward speaking up

### Delivery Releases

- Forwood One V1 with design system *(in progress)*
- Forwood One V2 with enhanced UX *(planned)*
- Native app MVP *(planned)*
- Non-blame reporting features *(planned)*

---

## Theme 4: Controls That Actually Work

*Controls that prevent harm in real conditions, not just satisfy audits*

### Portfolio Initiatives

- **Native App Launch** (Q4 FY26 - Exploring)
  - Mobile verification in real field conditions
  
- **Controls That Actually Work Initiative** (Q2 FY27+ - Proposed)
  - **Control Effectiveness Monitoring & Erosion Tracking:** Real-time monitoring of control effectiveness, erosion levels, and erosion rates with board-level visibility
  - **Real-Time Control Visibility:** Visualizations of control health across operations, sites, and contractors with global view, site-level deep dive, and hotspot identification
  - **Proactive Control Alerts:** Automated alerts for control degradation, accelerated erosion rates, and overdue verifications
  - Control effectiveness verification tools
  - Engineering and design-focused risk elimination
  - Control verification in real field conditions
  - Evidence-based control selection
  - Front-end planning and design-out tools

### Delivery Releases

- Field verification workflows *(planned)*
- Control effectiveness verification MVP *(planned)*
- Front-end planning tools *(planned)*

---

## Theme 5: Standardization Without Rigidity

*Consistent understanding of critical risks without bureaucratic rigidity*

### Portfolio Initiatives

- **Forwood One Platform Launch** (Q3 FY26 - Building)
  - Platform unification enabling consistent frameworks
  - CRM+, Risk+, Safety+, and Compliance+ integration
  
- **Customer Migration Program** (Q4 FY26 - Validating)
  - Migration enables consistent frameworks across customers
  - Migration playbooks and support processes
  
- **Native App Launch** (Q4 FY26 - Exploring)
  - Consistent mobile experience reduces context-switching
  
- **Standardization Without Rigidity Initiative** (Q2 FY27+ - Proposed)
  - **Role-Based Standardization Dashboards:** Configurable dashboards with different views for site manager, contractor, mobile worker, and executive roles
  - **Real-Time Standardization Visibility:** Visualizations of standardization and consistency across operations, sites, and contractors with global view, site-level deep dive, and consistency gap identification
  - **Proactive Standardization Alerts:** Automated alerts for standardization gaps, consistency drops, and non-standard approaches in critical risk areas
  - Shared critical risk frameworks across sites and contractors
  - Consistent language and control expectations
  - Tools that reduce context-switching
  - Automated translation for global standards

### Delivery Releases

- Forwood One MVP platform *(in progress)*
- Risk+ iframe integration *(planned)*
- Migration tooling *(planned)*
- Cross-site consistency features *(planned)*

---

## Foundation Layer

*Capabilities that support all strategic themes*

### Scalable, Future-Proof Platform

- **Forwood One Platform Launch** (Q3 FY26 - Building)
  - Cloud-native, modular architecture
  - Platform stability and performance
  - Core infrastructure for scale

### Current Delivery Focus

- Safety+ stabilisation (EDP priority)
  - Fix: records not appearing in "recent verifications"
  - Fix: offline verifications upload behaviour
  - Fix: contractor company mismatch (web vs mobile)
  - Improvement: usernames displayed alphabetically

---

## Launch Moments

Major release events that bundle multiple deliverables:

| Launch Moment | Target | Themes Supported |
|---------------|--------|------------------|
| **Forwood One Platform Launch** | Q3 FY26 (Jan-Mar 2026) | Themes 2, 3, 5 + Foundation |
| **EDP Migration** | Q3-Q4 FY26 (Jan-Jun 2026) | Themes 3, 5 |
| **Native App & Enhanced Platform** | Q4 FY26 (Apr-Jun 2026) | Themes 3, 4, 5 |
| **Fatal Risk Visibility & Governance** | Q1 FY27 (Jul-Sep 2026) | Theme 1 |
| **From Data Collection to Action** | Q1 FY27 (Jul-Sep 2026) | Theme 2 |
| **Credibility & Trust Through Systems** | Q2 FY27+ (Oct 2026+) | Theme 3 |
| **Controls That Actually Work** | Q2 FY27+ (Oct 2026+) | Theme 4 |
| **Standardization Without Rigidity** | Q2 FY27+ (Oct 2026+) | Theme 5 |

---

## Related Documents

- [Strategic Roadmap](./01-strategic-roadmap.md) - Strategic themes and long-term vision
- [Portfolio Roadmap](./02-portfolio-roadmap.md) - Initiatives and outcomes
- [Delivery Roadmap](./03-delivery-roadmap.md) - Release-level execution
- [Public Roadmap](./04-public-roadmap.md) - External communication

