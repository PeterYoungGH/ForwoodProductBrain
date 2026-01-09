# Delivery Roadmap

**Last Updated:** 2026-01-09  
**Roadmap Period:** Ongoing (Weekly Releases)  
**Type:** Delivery Roadmap (Release-Oriented Execution)  
**Framework Layer:** Delivery Roadmap  
**Update Frequency:** Weekly or as releases are prepared  
**Responsible:** Engineering Manager or Delivery Manager

## Overview

This delivery roadmap moves work into production through rapid, frequent releases while maintaining clarity on upcoming deployable increments. It focuses on **release planning**, not sprints, and aims to support a rapid, continuous delivery model.

**Note:** This roadmap is the **Delivery Roadmap** layer in Forwood's [4-layer roadmapping framework](../../07-reference/methodology/roadmapping-framework.md). It executes on initiatives from the [Portfolio Roadmap](./02-portfolio-roadmap.md) through frequent, small releases with occasional bundled launch moments.

## Release Pipeline

### Ready to Release

*Items ready for immediate release*

- **FPM-895**: Verify all Safety+ SR reports are linked to Forwood One data (Ready for Implementation)
- **FPM-896**: Verify all Safety+ app data links to Forwood One (ie Lists and custom fields) (Ready for Implementation)

### In Progress

*Items currently being developed*

- **FPM-772**: Inspections Module (In Development, High Priority) - Barrick client requirement
- **FPM-864**: V1 Tenant and Client onboarding (In Development) - Core platform capability

### In QA

*Items in quality assurance*

- *[To be updated weekly by delivery team]*

### Needs Clarification

*Items requiring additional information before proceeding*

**Discovery Phase - Problem Exploration (12 items):**
- **FPM-724**: Audit Logging - Component for the whole Forwood One Platform
- **FPM-736**: Safety+ App and Data integration/migration
- **FPM-759**: Onboarding - V2 Updates
- **FPM-763**: Connectivity - V2 Updates (Offline Capability, Sync, Retry Queue, Conflict Resolution)
- **FPM-765**: Internationalisation & Localisation - V2 Updates
- **FPM-768**: API - V2 Updates (Content and Transactional Data Read/Write)
- **FPM-773**: Event Management Module (complex multi-party workflows)
- **FPM-780**: Lists - V2 Updates (Multi-dimensional lists framework)
- **FPM-858**: Tech Debt actioned as part of V2
- **FPM-865**: Form Builder - Reusable form questions
- **FPM-872**: Export - V2 Updates (PDF, CSV/Excel, JSON exports)
- **FPM-879**: Legacy response view rendered - for Safety+ historic responses
- **FPM-880**: Risk and Control Library - Risk and Control Icon
- **FPM-881**: Form Builder - End user checklist selector component
- **FPM-883**: Form Builder - Conditional logic - Form Questions
- **FPM-884**: Form Builder - Conditional logic - Answer sources
- **FPM-885**: Form Builder - Section and Declaration Audience/Permissions
- **FPM-886**: Event Management - Key Metrics (Status and workflow tracking)
- **FPM-887**: Event Management Notifications
- **FPM-889**: Form Builder - Form Questions - Date and Time Answer type
- **FPM-890**: Roles and Access Provisioning and Management (Oculus<>ForwoodID)
- **FPM-891**: Form Builder - Extended lists functionality

**Discovery Phase - Solution Exploration (2 items):**
- **FPM-527**: Taxonomy - V2 Updates (New Taxonomy System) - Major platform capability
- **FPM-755**: Tenant Setup and Client Onboarding flows and processes

**Discovery Phase - Stakeholder Alignment (2 items):**
- **FPM-893**: URL Schema - Forwood.one (clean domain structure)
- **FPM-894**: Reporting - Verify all EDP SR reports are linked to Forwood One Data Structures

**Scoping Phase (1 item):**
- **FPM-774**: Safety Interactions Module

**New / To Do (5 items):**
- **FPM-475**: AI Risk Verification
- **FPM-478**: AI Risk Identification
- **FPM-756**: Platform Capability - Full Multi-tenant Management
- **FPM-764**: OLD - Platform Configuration - V2 Updates (mostly handled by other features)
- **FPM-767**: Mapping and Geo-location - V2 Updates
- **FPM-770**: OLD - Review, Oversight and Approval
- **FPM-897**: Platform Hardening and Production Readiness
- **FPM-901**: Primary and Secondary Nav amalgamation

### Blocked

*Items blocked by dependencies or technical issues*

- *[No items currently blocked - all dependencies identified in discovery phase]*

## Current Release Goals

### Next Release (This Week / This Month)

**Release Goal:** *[To be updated weekly]*  
**Target Release Window:** *[ASAP / This Week / This Month]*  
**Launch Alignment:** *[Whether this contributes to an upcoming launch event]*

**Release Candidate Items:**
- *[Features, enhancements, fixes to be included]*

**Risks & Assumptions:**
- *[Technical risks, assumptions, dependencies]*

**Technical Improvements / Platform Work:**
- *[Infrastructure, technical debt, platform improvements]*

## Release Readiness Status

| Item | Status | Target Release | Launch Alignment |
|------|--------|----------------|------------------|
| FPM-772: Inspections Module | In Development | Q3 FY26 (Jan-Mar 2026) | Yes - V2 Launch |
| FPM-864: V1 Tenant and Client onboarding | In Development | Q3 FY26 (Jan-Mar 2026) | Yes - V2 Launch |
| FPM-527: Taxonomy V2 Updates | Discovery (Solution Exploration) | Q3 FY26 (Jan-Mar 2026) | Yes - V2 Launch |
| FPM-773: Event Management Module | Discovery (Problem Exploration) | Q3 FY26 (Jan-Mar 2026) | Yes - V2 Launch |
| FPM-774: Safety Interactions Module | Scoping | Q3 FY26 (Jan-Mar 2026) | Yes - V2 Launch |
| FPM-755: Tenant Setup and Client Onboarding | Discovery (Solution Exploration) | Q3 FY26 (Jan-Mar 2026) | Yes - V2 Launch |
| FPM-736: Safety+ App and Data integration/migration | Discovery (Problem Exploration) | Q3 FY26 (Jan-Mar 2026) | Yes - V2 Launch |
| FPM-895: Verify Safety+ SR reports linked | Ready for Implementation | Q3 FY26 (Jan 2026) | Yes - EDP Migration |
| FPM-896: Verify Safety+ app data links | Ready for Implementation | Q3 FY26 (Jan 2026) | Yes - EDP Migration |

## Upcoming Releases

### Release Window: This Month (Q3 FY26 / January 2026)

**Release Goal:** Safety+ data verification and V2 foundation work  
**Key Items:**
- **Safety+ Data Verification** (EDP migration readiness):
  - FPM-895: Verify all Safety+ SR reports are linked to Forwood One data structures
  - FPM-896: Verify all Safety+ app data links to Forwood One (Lists and custom fields)
- **V2 Foundation Work**:
  - Continue development on Inspections Module (FPM-772) - Barrick requirement
  - Continue V1 Tenant and Client onboarding (FPM-864) - Core platform capability
- **Discovery Progress**:
  - Advance Event Management Module (FPM-773) from discovery to solution exploration
  - Complete Taxonomy V2 solution exploration (FPM-527)

### Release Window: Next Month (Q3 FY26 / February 2026)

**Release Goal:** V2 module development and platform capabilities  
**Key Items:**
- **Module Development**:
  - Inspections Module (FPM-772) - Complete development, begin QA
  - Event Management Module (FPM-773) - Begin development if discovery complete
  - Safety Interactions Module (FPM-774) - Complete scoping, begin discovery
- **Platform Capabilities**:
  - Taxonomy V2 (FPM-527) - Begin implementation
  - Tenant Setup and Client Onboarding (FPM-755) - Complete solution exploration
  - V1 Tenant and Client onboarding (FPM-864) - Complete development
- **Form Builder Enhancements**:
  - Reusable form questions (FPM-865) - Advance from discovery
  - Date and Time Answer type (FPM-889) - EDP/HEDNO requirement for work start/stop times
- **EDP Migration Support**:
  - EDP reporting uplift (QuickSight): requirements capture + dashboard improvements
  - EDP Product Management roadmap session: map desired outcomes to Forwood One capabilities

## Launch Moments

*Releases that contribute to major launch events*

### Q3 FY26: Forwood One V2 Launch (Safety+ Upgrade Pathway)
- **Target Date:** Q3 FY26 (Jan-Mar 2026) (Milestone: 2025-12-19 per FPM-645)
- **JIRA Theme:** [FPM-645](https://forwood.atlassian.net/browse/FPM-645) - Forwood One V2 - Safety+ Upgrade Pathway and Expanded ICP
- **Status:** In Progress
- **Contributing Releases:**
  - **Core Modules:**
    - Inspections Module (FPM-772) - Barrick requirement, In Development
    - Event Management Module (FPM-773) - Discovery phase
    - Safety Interactions Module (FPM-774) - Scoping phase
  - **Platform Capabilities:**
    - Taxonomy V2 (FPM-527) - New taxonomy system with client-side configurability
    - Tenant Setup and Client Onboarding (FPM-755, FPM-864) - Multi-tenant management
    - Safety+ App and Data integration/migration (FPM-736) - Critical for upgrade pathway
  - **Form Builder Enhancements:**
    - Reusable form questions (FPM-865)
    - Conditional logic for questions and answer sources (FPM-883, FPM-884)
    - Section and Declaration Audience/Permissions (FPM-885)
    - Date and Time Answer types (FPM-889) - EDP/HEDNO requirement
    - End user checklist selector component (FPM-881)
    - Extended lists functionality (FPM-891)
  - **Platform Infrastructure:**
    - Audit Logging component (FPM-724)
    - API V2 Updates (FPM-768)
    - Export V2 Updates (FPM-872)
    - Legacy response view rendering (FPM-879)
    - Roles and Access Provisioning (FPM-890)
    - URL Schema - Forwood.one (FPM-893)
  - **Reporting & Data:**
    - EDP SR reports verification (FPM-894)
    - Safety+ SR reports verification (FPM-895)
    - Safety+ app data links verification (FPM-896)
- **Target Clients:**
  - Barrick - Inspections (New client, not currently in Safety+)
  - EDP (Utilities/Energy) - MAM Portal
  - HEDNO (Utilities/Energy) - MAM Portal
  - Kenmare (Mining) - SaaS Portal
  - Rossing (Mining) - Dedicated Portal

### Q3–Q4 FY26: EDP Migration Preparation (indicative)
- **Q3 FY26 (Jan 2026):** Roadmap + reporting sessions (outcomes mapping; dashboard uplift)
- **Q3 FY26 (Feb 2026):** Transition workshops (scope, SSO, cutover approach, readiness, change impacts)
- **Q3 FY26 (Mar 2026):** Migration execution prep (validation, UAT planning)
- **Early Q4 FY26 (Apr 2026) (target):** EDP cutover to Forwood One (possible short blackout window)

### Q4 FY26: Native App and Enhanced Platform
- **Target Date:** Q4 FY26 (Apr-Jun 2026)
- **Status:** Planning
- **Contributing Releases:**
  - Connectivity V2 Updates (FPM-763) - Offline capability, sync, retry queue, conflict resolution
  - Onboarding V2 Updates (FPM-759) - CS-driven onboarding, role-based onboarding, self-service device provisioning
  - Internationalisation & Localisation V2 (FPM-765) - Multi-language content support
  - Mapping and Geo-location V2 (FPM-767) - Ensure all Safety+ geo locations available in Forwood One tenants
  - Platform Hardening and Production Readiness (FPM-897)
  - Primary and Secondary Nav amalgamation (FPM-901)

### Q1 FY27: AI and Predictive Safety
- **Target Date:** Q1 FY27 (Jul-Sep 2026)
- **Status:** Planning
- **Contributing Releases:**
  - AI Risk Verification (FPM-475) - AI Verification Filling
  - AI Risk Identification (FPM-478) - AI Visual Risk ID
  - Additional AI capabilities (to be defined)

### Q1 FY27: Fatal Risk Visibility & Governance
- **Target Date:** Q1 FY27 (Jul-Sep 2026)
- **Status:** Planning
- **Components:**
  - Executive fatal risk dashboards
  - Real-time SIF risk visibility
  - Predictive insights
  - Governance tools
- **Target Audience:** Executives, board members, EHS leaders
- **Key Message:** Make fatal risk as visible as production metrics
- **Strategic Theme Alignment:** Theme 1 - Fatal Risk Visibility & Governance

### Q1 FY27: Risk+ and Compliance+ Upgrade Pathway
- **Target Date:** Q1 FY27 (Jul-Sep 2026)
- **Status:** Planning
- **Components:**
  - Risk+ and Compliance+ upgrade pathway and tools
  - Risk+ iframe validation and integration
  - Data migration and validation tools
  - Upgrade playbooks and support processes
- **Target Audience:** Risk+ and Compliance+ customers
- **Key Message:** Seamless upgrade pathway to Forwood One
- **Strategic Theme Alignment:** Themes 2, 3, 5 - Standardization, Credibility & Trust, Data to Action

### Q2 FY27+: From Data Collection to Action
- **Target Date:** Q2 FY27+ (Oct 2026+)
- **Status:** Planning
- **Components:**
  - AI-powered action recommendation engine
  - Visible action tracking and follow-through
  - Automated control gap detection
  - Data-to-action workflows
- **Target Audience:** EHS professionals, operations teams
- **Key Message:** Transform reporting into visible action
- **Strategic Theme Alignment:** Theme 2 - From Data Collection to Action

### Q2 FY27+: Credibility & Trust Through Systems
- **Target Date:** Q2 FY27+ (Oct 2026+)
- **Status:** Planning
- **Components:**
  - Non-blame reporting systems
  - Trust-building features
  - Leadership engagement tools
  - Learning systems that celebrate issues
- **Target Audience:** Safety professionals, workers, leadership
- **Key Message:** Systems that build credibility and trust
- **Strategic Theme Alignment:** Theme 3 - Credibility & Trust Through Systems

### Q2 FY27+: Controls That Actually Work
- **Target Date:** Q2 FY27+ (Oct 2026+)
- **Status:** Planning
- **Components:**
  - Control effectiveness verification
  - Field-verified controls
  - Front-end planning tools
  - Evidence-based control selection
- **Target Audience:** EHS professionals, operations teams
- **Key Message:** Controls that prevent harm in real conditions, not just satisfy audits
- **Strategic Theme Alignment:** Theme 4 - Controls That Actually Work

### Q2 FY27+: Standardization Without Rigidity
- **Target Date:** Q2 FY27+ (Oct 2026+)
- **Status:** Planning
- **Components:**
  - Shared critical risk frameworks
  - Consistent language tools
  - Contractor integration
  - Context-switching reduction tools
- **Target Audience:** Multi-site operations, contractors, mobile workers
- **Key Message:** Consistent understanding of critical risks without bureaucratic rigidity
- **Strategic Theme Alignment:** Theme 5 - Standardization Without Rigidity

### Q2 FY27+: CRM+ Upgrade Pathway
- **Target Date:** Q2 FY27+ (Oct 2026+)
- **Status:** Planning
- **Components:**
  - CRM+ upgrade pathway and tools
  - CRM+ data migration and validation tools
  - Upgrade playbooks and support processes
  - Forwood One platform readiness for CRM+ client upgrade
- **Target Audience:** CRM+ customers
- **Key Message:** Seamless upgrade pathway to Forwood One
- **Strategic Theme Alignment:** Themes 2, 3, 5 - Standardization, Credibility & Trust, Data to Action

## Delivery Principles

- **Ship small, frequent releases** - Aim for weekly or bi-weekly releases
- **Bundle for launch moments** - Occasionally bundle releases into coherent market-facing launches
- **Focus on value** - Each release should deliver measurable value
- **Maintain quality** - No release without quality gates and testing
- **Support outcomes** - All releases should support outcomes defined in portfolio roadmap

## Release Rituals

### Weekly Release Readiness Check
- **When:** Weekly (typically Monday or Friday)
- **Purpose:** Determine "What ships next?"
- **Participants:** Engineering Manager, Product Manager, QA Lead
- **Output:** Release plan for next 1-2 weeks

### Continuous Backlog Refinement
- **When:** Ongoing
- **Purpose:** Align backlog with release opportunities
- **Participants:** Product Manager, Engineering Leads
- **Output:** Prioritized backlog ready for release planning

### Release Packaging Sessions
- **When:** Before each release
- **Purpose:** Determine what is included in the next deployable increment
- **Participants:** Product Manager, Engineering Manager, QA Lead
- **Output:** Release scope and timeline

### Technical Risk Review
- **When:** Before releases with significant technical changes
- **Purpose:** Identify and mitigate technical risks
- **Participants:** Engineering Manager, Technical Leads, QA Lead
- **Output:** Risk assessment and mitigation plan

### Regular Demos
- **When:** After each release
- **Purpose:** Close the loop on completed increments
- **Participants:** Product, Engineering, Design, Stakeholders
- **Output:** Feedback and learnings for next release

## Related Documents

- [Roadmapping Framework](../../07-reference/methodology/roadmapping-framework.md) - 4-layer roadmap structure and methodology
- [Portfolio Roadmap (3-6 Months)](./02-portfolio-roadmap.md) - Initiatives and outcomes
- [Strategic Roadmap](./01-strategic-roadmap.md) - Long-term vision (2+ years) and strategic themes/bets (6-12 months)
- [Public Roadmap](./04-public-roadmap.md) - External communication
- [Forwood One Platform Launch Initiative](../../02-initiatives/active/Forwood-One-platform-launch.md)

