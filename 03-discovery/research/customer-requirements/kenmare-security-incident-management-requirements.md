# Kenmare Security Incident Management Requirements Research

**Date:** 2025-12-01  
**Source:** [Inbox Item: Kenmare Security Incident Management Requirements](../../../00-inbox/raw/2025-12-01-kenmare-security-incident-management-requirements-[TO-DO].md)  
**Customer:** Kenmare (Strategic Account)  
**Contact:** Anwar Gani (IT Superintendent, Kenmare) - agani@kenmaremoz.com

---

## Research Overview

This research document captures Kenmare's detailed requirements for extending their existing Forwood platform to support Security incident management and investigations in addition to their current EHS use. Kenmare is exploring opportunities to maximize value from their existing Forwood investment and avoid implementing a new system.

---

## Customer Context

**Customer:** Kenmare  
**Current Usage:** Forwood platform for EHS (Environmental, Health, and Safety) management  
**Request Date:** October 29, 2025  
**Objective:** Extend existing Forwood platform to support Security incident management and investigations

**Key Stakeholders:**
- Anwar Gani (IT Superintendent, Kenmare) - Primary contact
- Pauline Simamane, Igor Cheveia, Francisco Gimo, Edgar Feldman, David Seiuane (Kenmare team)

**Internal Forwood Contacts:**
- Meagan Hirning (Head of Solutions - Forwood)
- Serina Sands (Global Lead - Strategic Key Accounts - Forwood)
- Sean Brennan-Seymour (Product Manager - Forwood)
- Warwick McIntosh (Forwood)
- Simon (Forwood) - Meeting scheduled

---

## Customer Requirements

Kenmare has outlined four key requirement categories:

### 1. Configuration Capabilities

**Customer Questions:**
- Can Forwood be configured to include Security-related incident categories, workflows, and evidence tracking?
- Is it possible to use the same base data structure (e.g., site, location, department, employee details) already available under EHS for consistency?

**Customer Need:**
- Extend platform to support Security incident categories and workflows
- Reuse existing data structure for consistency and efficiency
- Maintain unified data model across EHS and Security domains

**Technical Assessment (Sean Brennan-Seymour):**
- Technically yes, configuration is possible
- Yes, can use the same base data structure
- Would depend on how different their security incident approach is and timelines
- May align well and potentially could involve some new incident categories only (if they're willing to have the data in the same system as EHS)
- May not align at all depending on their requirements

### 2. Data Separation & Permissions

**Customer Questions:**
- Can Security incidents be managed as a separate module or area while maintaining appropriate access controls between EHS and Security teams?

**Customer Need:**
- Separate Security incident management module/area
- Appropriate access controls to maintain separation between EHS and Security teams
- Ability to manage Security incidents independently while sharing base data structure

**Technical Assessment (Sean Brennan-Seymour):**
- Probably not if in Safety+
- Would depend on implementation approach (Safety+ vs Forwood One Event Management)

### 3. Reporting & Visualization

**Customer Questions:**
- Can we develop Security-specific dashboards and heat maps (similar to EHS) to analyze trends, hotspots, and recurring issues?

**Customer Need:**
- Security-specific dashboards similar to EHS dashboards
- Heat maps for Security incident analysis
- Trend analysis and hotspot identification for Security incidents
- Ability to analyze recurring Security issues

**Technical Assessment (Sean Brennan-Seymour):**
- Would require custom development (if in Safety+)
- Forwood One Event Management will enable this in the future at some point

### 4. Implementation Approach

**Customer Questions:**
- Would this require additional licensing or can it be achieved within the existing setup?
- What would be the recommended approach to pilot or test this configuration?

**Customer Need:**
- Understand licensing implications
- Pilot/testing approach to validate configuration
- Implementation pathway that minimizes risk

**Technical Assessment (Sean Brennan-Seymour):**
- Not sure about licensing
- Probably not feasible for pilot/testing in Safety+ (depending on timelines, may work for Forwood One)
- Sounds like it would require another round of custom development (which isn't something we are wanting to do for Safety+)

---

## Internal Assessment Summary

**Assessed By:** Sean Brennan-Seymour (Product Manager - Forwood)  
**Assessment Date:** November 19, 2025

### Overall Feasibility

- **Technically possible:** Yes, configurations could support this
- **Safety+ Team:** Not doing new development; would likely require custom development (not desired)
- **Forwood One Event Management:** Will enable this in the future at some point
- **Timeline dependency:** May work for Forwood One depending on timelines

### Key Considerations

- Depends on how different their security incident approach is and timelines
- May align well if they're willing to have Security data in the same system as EHS
- May not align at all depending on their specific requirements
- Would need discussion with Geetika/Meagan for Safety+ team perspective

### Recommendation

- This would be a decision for Product Manager (Peter) to determine if it should be part of the roadmap
- Might need a discovery call with the client to understand requirements better
- Suggested to form part of the debrief for the Kenmare meeting with Simon and Warwick next week

---

## Key Insights

1. **Platform Extension Opportunity**: Strategic accounts are actively exploring ways to extend their Forwood investment to additional operational domains
2. **System Consolidation Preference**: Customers prefer extending existing systems over implementing new ones
3. **Similar Workflows**: Security incident management has similar workflows and data structures to EHS, suggesting natural platform extension
4. **Technical Feasibility**: Technically possible with Forwood One Event Management (future capability), but not feasible with Safety+ without custom development
5. **Strategic Account Value**: This represents both retention and expansion revenue opportunity

---

## Next Steps

1. **Discovery Call:** Understand Kenmare's specific Security incident management requirements and workflows
2. **Product Decision:** Determine if this should be part of the Forwood One roadmap (Product Manager - Peter)
3. **Meeting Discussion:** Include in debrief for Kenmare meeting with Simon and Warwick next week
4. **Technical Assessment:** Further evaluation of alignment between Security incident management needs and Forwood One Event Management capabilities

---

## Related Documents

- [Opportunity: Customers Want to Extend Existing Platform to Support Security Incident Management](../../../04-opportunities/03-opportunities/active/kenmare-extend-platform-security-incident-management.md)
- [Solution: Forwood One Event Management for Security Incidents](../../../04-opportunities/04-solutions/proposed/forwood-one-event-management-security-incidents.md)
- [Inbox Item: Kenmare Security Incident Management Requirements](../../../00-inbox/raw/2025-12-01-kenmare-security-incident-management-requirements-[PROCESSING].md)

---

## Research Status

**Status:** Active  
**Last Updated:** 2025-12-01  
**Next Review:** After discovery call with Kenmare

