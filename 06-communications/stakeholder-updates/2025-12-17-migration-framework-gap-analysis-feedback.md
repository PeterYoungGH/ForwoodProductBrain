# Stakeholder Feedback: Migration Framework - Gap Analysis Section

**Date:** 2025-12-17  
**Audience:** Customer Success Team, Product Team, Leadership  
**Prepared By:** Product Team

## Executive Summary

**Purpose:** Provide product team feedback on the gap analysis section of the Forwood One Migration Experience Framework, specifically addressing concerns about scope management and preventing gap analysis from devolving into change request lists.

**Key Points:**
- Gap analysis is critical but vulnerable to scope creep when clients conflate edge cases and additional use cases as migration blockers
- Current framework guidance needs reinforcement with specific CS team mitigation approaches
- Scope discipline aligns with strategic focus on governing requirements and delivery velocity
- Recommended approaches focus on workflow-first discovery, clear categorization, and structured decision-making

**Context:** As we scale migrations, maintaining scope discipline is essential to deliver migrations on time, within budget, and with production-ready quality. The gap analysis phase is a critical control point where scope can expand if not properly managed.

---

## Product Team's Understanding of the Problem

### Problem Statement

**Core Problem:** The gap analysis process in customer migrations is vulnerable to scope expansion when clients push boundaries by conflating additional use cases, edge cases, or "nice-to-have" features as migration blockers, even when workarounds or alternative approaches exist. This often results in gap analysis devolving into a list of change requests that clients demand before migration, undermining migration timelines, quality, and delivery velocity.

**Why It Matters:** 
- Uncontrolled scope expansion during gap analysis delays migrations, increases risk, and reduces delivery velocity
- Change requests that aren't true blockers can be addressed post-migration, but when treated as blockers, they create unnecessary friction
- This undermines our strategic focus on governing scope, requirements, and commercial agreements
- It impacts our ability to deliver migrations that feel "calm, controlled, production-ready, and confidence-building" as defined in the framework

**Current State:** 
The migration framework (Theme 2: "They clearly understood our business") includes gap analysis guidance:
- Product Management should "Complete gap analysis between previous and new platform"
- "Identify all key workflows and propose workarounds where there are gaps"
- "Push back on replicating broken or unsafe legacy processes"

However, the framework lacks specific, actionable approaches for CS teams to:
1. Distinguish between true migration blockers and change requests
2. Structure gap analysis conversations to prevent scope creep
3. Categorize and prioritize gaps appropriately
4. Navigate client requests that push boundaries

### Evidence and Research

**Research Findings:**
- The migration framework is informed by research from highly rated enterprise SaaS migrations (Salesforce, ServiceNow, Workday, Atlassian, HubSpot, Shopify)
- Theme 3 ("Nothing critical broke on Day 1") emphasizes "Lock Day-1 scope and explicitly de-scope non-essential features" - indicating scope discipline is critical to migration success
- Theme 4 ("They told us what NOT to migrate") reinforces the principle that "Less legacy equals less risk" - suggesting we should actively prevent unnecessary scope expansion

**Customer Insights:**
- Framework research indicates successful migrations focus on "safety-critical and business-critical use cases" (Theme 2)
- The framework emphasizes "workflow-first discovery focused on safety-critical and business-critical use cases"
- Successful migrations prioritize "Day-1 critical workflows" over comprehensive feature parity

**Market Context:**
- Enterprise SaaS migrations consistently show that scope discipline is a key success factor
- Best-in-class migrations balance customer needs with platform constraints and delivery velocity
- Scope creep during gap analysis is a common anti-pattern that delays migrations and reduces customer confidence

**Data and Metrics:**
- Strategic focus emphasizes "delivery velocity, quality and impact of agreed outcomes"
- Migration success criteria require "controlled cut-over" and "production-ready platform at go-live" - both undermined by scope expansion
- Framework success criteria include "zero executive escalations within first 60 days" - scope disputes are a common escalation driver

**Sources:**
- [Forwood One Migration Experience Framework](../../07-reference/methodology/forwood-one-migration-experience-framework.md)
- [Strategic Focus Areas](../../01-strategy/strategic-focus/focus-areas.md)
- [Forwood One Platform Launch Initiative](../../02-initiatives/active/Forwood-One-platform-launch.md)

### Context and Background

**Historical Context:** 
The migration framework was developed to align teams around a shared definition of migration success, informed by best practices from leading enterprise SaaS companies. The framework emphasizes customer experience and working backwards from customer perception to internal behaviors. However, the gap analysis section, while conceptually sound, needs more tactical guidance for CS teams to execute effectively.

**Related Issues:**
- Scope management during implementations (not just migrations)
- Balancing customer requests with platform constraints
- Maintaining delivery velocity while ensuring customer satisfaction
- Distinguishing between product gaps and configuration/customization needs

**Stakeholder Perspectives:**
- **CS Teams:** Need clear, actionable approaches to navigate gap analysis conversations without appearing unhelpful or inflexible
- **Clients:** Naturally want to ensure all their needs are met, may not distinguish between blockers and enhancements
- **Product Team:** Must balance customer needs with platform strategy and delivery velocity
- **Leadership:** Needs migrations delivered on time with quality, requiring scope discipline

### Strategic Alignment

**Strategic Focus:** 
This issue directly relates to our strategic focus on "Focus" - specifically "Drive prioritisation that aligns effort to key results and governs scope, requirements, and commercial agreements. Advocate for the importance of delivery velocity, quality and impact of agreed outcomes."

**Vision Alignment:** 
Our vision emphasizes being the "gold standard in fatality prevention" and delivering "10x more effective" products. Scope discipline during migrations ensures we can deliver value faster and maintain focus on safety-critical outcomes rather than getting distracted by edge cases.

**Business Outcomes Affected:**
- [CRM Upgrade Pathway](../../04-opportunities/01-business-outcomes/crm-upgrade-pathway.md) - Scope expansion delays migrations
- [Safety Plus Upgrade](../../04-opportunities/01-business-outcomes/safety-plus-upgrade.md) - All Safety+ customers must migrate in FY26, scope discipline is critical
- [Forwood One Platform Launch and New Customer Acquisition](../../04-opportunities/01-business-outcomes/oculus-platform-launch-new-deals.md) - Migration success impacts new customer acquisition

**Product Outcomes Affected:**
- Migration velocity and quality
- Customer satisfaction during migrations
- Platform stability and maintainability (scope expansion can introduce technical debt)

---

## Product Team's Recommendations

### Recommended Approach

**Primary Recommendation:** Enhance the migration framework's gap analysis section with specific, actionable approaches for CS teams to structure gap analysis conversations, categorize gaps appropriately, and prevent scope creep while maintaining strong customer relationships.

**Alternative Approaches Considered:**
- **Stricter gatekeeping:** More rigid rules about what constitutes a blocker - **Rejected** because it could damage customer relationships and may miss legitimate blockers
- **Post-migration change request process:** Defer all non-blockers to post-migration - **Partially adopted** as one approach, but we need better upfront categorization
- **Product roadmap alignment:** Route all gaps to product roadmap - **Rejected** because some gaps are legitimate migration blockers that need workarounds

**Rationale:** 
The recommended approach balances customer needs with scope discipline by providing CS teams with structured approaches to navigate conversations effectively. This aligns with the framework's emphasis on "workflow-first discovery" and "context over configuration" while preventing gap analysis from becoming an unfiltered change request list.

### Strategic Rationale

**Strategic Alignment:** 
This recommendation directly supports our strategic focus on governing scope and requirements while maintaining delivery velocity. It enables CS teams to execute the framework's intent more effectively.

**Framework Application:**
- **Migration Framework Theme 2:** "They clearly understood our business" - Structured gap analysis helps demonstrate understanding while maintaining boundaries
- **Migration Framework Theme 3:** "Nothing critical broke on Day 1" - Clear gap categorization ensures Day-1 scope is locked appropriately
- **Discovery Process:** Workflow-first discovery approach informs gap analysis structure
- **Strategic Focus:** Scope governance principles guide gap categorization

**Risk Assessment:**
- **Risk 1:** CS teams may still struggle to apply approaches without training - **Mitigation:** Provide training, examples, and escalation paths
- **Risk 2:** Clients may feel their needs aren't being heard - **Mitigation:** Approaches emphasize listening and understanding while maintaining boundaries
- **Risk 3:** Approaches may be too rigid - **Mitigation:** Approaches are principles-based with flexibility for context

**Expected Outcomes:**
- Gap analysis conversations are more structured and productive
- Clearer distinction between migration blockers and change requests
- Reduced scope expansion during gap analysis phase
- Faster migration timelines with maintained quality
- Stronger customer relationships through better communication
- Fewer executive escalations related to scope disputes

### Implementation Considerations

**Feasibility:** 
Highly feasible - these are process and communication approaches that can be implemented through framework updates, CS team training, and tooling/templates.

**Resources Required:**
- **Product Team:** Framework documentation updates, approach development
- **CS Leadership:** Training development and delivery
- **CS Teams:** Adoption of new approaches in customer conversations
- **Product Management:** Support for gap categorization and workaround identification

**Timeline:**
- **Immediate (Week 1-2):** Framework updates with new approaches
- **Short-term (Month 1):** CS team training and enablement
- **Ongoing:** Refinement based on feedback and results

**Dependencies:**
- CS team buy-in and adoption
- Product Management support for gap categorization
- Alignment with commercial/contractual processes
- Integration with existing migration playbooks

**Success Criteria:**
- **Qualitative:** CS teams report feeling more confident navigating gap analysis conversations
- **Quantitative:** 
  - Reduction in scope expansion during gap analysis phase (measure change request volume pre vs. post-migration)
  - Faster migration timelines (measure time from gap analysis to go-live)
  - Fewer scope-related escalations (track escalation reasons)
  - Maintained or improved customer satisfaction (NPS, migration satisfaction scores)

### Related Opportunities and Solutions

**Opportunities Addressed:**
- Migration velocity and quality improvements
- Customer satisfaction during migrations
- Scope management and delivery discipline

**Solutions or Initiatives:**
- [Forwood One Platform Launch](../../02-initiatives/active/Forwood-One-platform-launch.md) - Migration framework supports this initiative
- Migration playbook development (if exists)

**Experiments or Validation:**
- Pilot new approaches with 2-3 migrations
- Measure outcomes vs. baseline
- Refine based on results

---

## Product Team's Recommendations: Specific CS Team Approaches

### Approach 1: Structured Gap Categorization Framework

**Purpose:** Provide CS teams with a clear framework to categorize gaps during analysis, preventing everything from being treated as a migration blocker.

**Framework Structure:**

1. **Day-1 Critical Blockers** (Must address before migration)
   - **Definition:** Gaps that prevent safety-critical or business-critical workflows from functioning on Day 1
   - **Criteria:** 
     - Blocks a workflow required for Day-1 operations
     - No viable workaround exists
     - Impacts safety or regulatory compliance
   - **Action:** Must be addressed with workaround, configuration, or product change before go-live

2. **Post-Migration Enhancements** (Can address after migration)
   - **Definition:** Gaps that don't block Day-1 operations but represent desired improvements
   - **Criteria:**
     - Workaround exists (even if not ideal)
     - Feature is "nice-to-have" rather than critical
     - Edge case or infrequent use case
   - **Action:** Document for post-migration consideration, route to product roadmap or change request process

3. **Configuration/Customization Needs** (Not product gaps)
   - **Definition:** Needs that can be addressed through configuration, training, or process changes
   - **Criteria:**
     - Platform supports the capability but needs configuration
     - Training or process change can address the need
     - Customization within platform capabilities
   - **Action:** Address through configuration, training, or process design

4. **Legacy Process Gaps** (Should not replicate)
   - **Definition:** Gaps representing legacy processes that should not be replicated
   - **Criteria:**
     - Represents a broken or unsafe legacy process
     - Better approach exists in Forwood One
     - Replication would introduce risk or technical debt
   - **Action:** Push back, explain better approach, support change management

**CS Team Application:**
- Use this framework during gap analysis conversations to categorize each gap in real-time
- Document categorization with rationale
- Present categorized list to client for alignment
- Escalate categorization disputes to Product Management

### Approach 2: Workflow-First Discovery Protocol

**Purpose:** Structure gap analysis around workflows rather than features, focusing on "can they do their job?" rather than "does this feature exist?"

**Protocol Steps:**

1. **Identify Core Workflows First**
   - Before gap analysis, document Day-1 critical workflows
   - Focus on safety-critical and business-critical workflows
   - Get client agreement on workflow priorities

2. **Test Workflows, Not Features**
   - For each workflow, test: "Can this workflow be completed in Forwood One?"
   - If yes, document how (even if different from legacy)
   - If no, identify the specific blocker

3. **Separate Workflow Gaps from Feature Requests**
   - Workflow gap = "I cannot complete this workflow" (potential blocker)
   - Feature request = "I want this feature to work differently" (enhancement)
   - Only workflow gaps are migration blockers

4. **Propose Workarounds Proactively**
   - For each workflow gap, immediately propose workarounds
   - Test workaround viability with client
   - Document workaround as solution if acceptable

**CS Team Application:**
- Start every gap analysis with workflow mapping session
- Use workflow testing as primary gap identification method
- Separate workflow discussions from feature wish-list discussions
- Escalate only true workflow blockers

### Approach 3: "Three Questions" Test for Migration Blockers

**Purpose:** Provide CS teams with a simple test to determine if a gap is truly a migration blocker.

**Three Questions:**

1. **"Can the workflow be completed in Forwood One (even if differently)?"**
   - If YES → Not a blocker, document approach
   - If NO → Continue to question 2

2. **"Is this workflow required for Day-1 operations?"**
   - If NO → Post-migration enhancement
   - If YES → Continue to question 3

3. **"Is there a viable workaround that doesn't compromise safety or compliance?"**
   - If YES → Not a blocker, document workaround
   - If NO → True migration blocker, escalate

**CS Team Application:**
- Apply three questions test to every gap identified
- Document answers and rationale
- Use test results to categorize gaps
- Present test results to client for transparency

### Approach 4: Structured Gap Analysis Conversation Guide

**Purpose:** Provide CS teams with a conversation structure that prevents scope creep while maintaining strong customer relationships.

**Conversation Structure:**

**Phase 1: Discovery (Listen First)**
- "Help me understand how you currently do [workflow]"
- "What makes this workflow critical for your operations?"
- "What would happen if this workflow wasn't available on Day 1?"
- **Goal:** Understand the real need, not just the requested feature

**Phase 2: Exploration (Explore Options)**
- "Let me show you how we can accomplish this in Forwood One"
- "Here's a workaround that might work for you"
- "What if we approached this differently?"
- **Goal:** Find solutions before declaring gaps

**Phase 3: Categorization (Set Boundaries)**
- "Based on our discussion, this is a [category] because..."
- "Here's why this doesn't block migration..."
- "We can address this post-migration through..."
- **Goal:** Categorize gaps with clear rationale

**Phase 4: Alignment (Get Agreement)**
- "Does this categorization make sense?"
- "Are you comfortable proceeding with this approach?"
- "What concerns do you have?"
- **Goal:** Get client buy-in on approach

**CS Team Application:**
- Follow conversation structure in gap analysis meetings
- Use discovery questions to understand real needs
- Explore options before categorizing as blockers
- Get alignment before moving forward

### Approach 5: Escalation and Decision Framework

**Purpose:** Provide clear escalation paths when CS teams and clients disagree on gap categorization.

**Escalation Levels:**

1. **CS Team Decision** (Most gaps)
   - CS team categorizes using framework
   - Client accepts categorization
   - No escalation needed

2. **Product Management Review** (Disagreements)
   - Client disagrees with categorization
   - CS team escalates to Product Management
   - Product Management reviews workflow, tests platform, makes decision
   - Decision communicated to client with rationale

3. **Leadership Decision** (Strategic issues)
   - Gap represents strategic product decision
   - Commercial implications (contract, pricing)
   - Product Management escalates to leadership
   - Leadership makes decision considering strategic context

**Decision Criteria:**
- Safety and compliance impact
- Day-1 operational requirements
- Workaround viability
- Strategic product alignment
- Commercial implications

**CS Team Application:**
- Know when to escalate (don't make strategic decisions alone)
- Document escalation rationale clearly
- Present options, not just problems
- Support Product Management in decision-making

### Approach 6: Change Request Process Integration

**Purpose:** Provide clear process for handling gaps that are categorized as post-migration enhancements.

**Process Steps:**

1. **Document Enhancement Request**
   - Clear description of desired capability
   - Business rationale and use case
   - Current workaround (if any)
   - Priority from client perspective

2. **Route to Appropriate Process**
   - **Product Roadmap:** If aligns with product strategy
   - **Change Request:** If client-specific customization
   - **Professional Services:** If can be delivered as services
   - **Future Migration Phase:** If appropriate for later phase

3. **Communicate Process to Client**
   - "This is a great enhancement idea"
   - "Here's how we'll handle this post-migration"
   - "Here's the timeline/process for consideration"
   - Set expectations clearly

4. **Track and Follow Up**
   - Don't let enhancement requests disappear
   - Provide updates on status
   - Maintain relationship and trust

**CS Team Application:**
- Don't dismiss enhancement requests
- Route appropriately and communicate process
- Set clear expectations
- Follow up to maintain trust

---

## Supporting Evidence

### Research References
- [Forwood One Migration Experience Framework](../../07-reference/methodology/forwood-one-migration-experience-framework.md) - Source framework with gap analysis guidance
- Enterprise SaaS migration best practices (referenced in framework)

### Framework References
- [Forwood One Migration Experience Framework](../../07-reference/methodology/forwood-one-migration-experience-framework.md) - Migration framework
- [Discovery Process](../../07-reference/methodology/discovery-process.md) - Discovery methodology
- [Strategic Focus Areas](../../01-strategy/strategic-focus/focus-areas.md) - Scope governance principles

### Data Sources
- Migration success criteria from framework
- Strategic focus on delivery velocity and scope governance

---

## Strategic Context

**Strategic Focus Areas:** 
This feedback directly supports the "Focus" strategic priority: "Drive prioritisation that aligns effort to key results and governs scope, requirements, and commercial agreements."

**Vision Connection:** 
Maintaining scope discipline during migrations ensures we can deliver on our vision of being "10x more effective" and maintaining "delivery velocity, quality and impact of agreed outcomes."

**Roadmap Alignment:** 
Migration framework supports the Forwood One Platform Launch initiative, which requires successful migrations of Safety+, CRM+, and Risk+ customers.

**Business Outcomes:**
- [CRM Upgrade Pathway](../../04-opportunities/01-business-outcomes/crm-upgrade-pathway.md)
- [Safety Plus Upgrade](../../04-opportunities/01-business-outcomes/safety-plus-upgrade.md)
- [Forwood One Platform Launch and New Customer Acquisition](../../04-opportunities/01-business-outcomes/oculus-platform-launch-new-deals.md)

**Product Outcomes:**
- Migration velocity and quality
- Customer satisfaction during migrations

---

## Related Documents

### Frameworks and Methodologies
- [Forwood One Migration Experience Framework](../../07-reference/methodology/forwood-one-migration-experience-framework.md) - Source framework
- [Discovery Process](../../07-reference/methodology/discovery-process.md) - Discovery methodology
- [Strategic Focus Areas](../../01-strategy/strategic-focus/focus-areas.md) - Scope governance

### Initiatives
- [Forwood One Platform Launch](../../02-initiatives/active/Forwood-One-platform-launch.md) - Migration framework supports this initiative

### Business Outcomes
- [CRM Upgrade Pathway](../../04-opportunities/01-business-outcomes/crm-upgrade-pathway.md)
- [Safety Plus Upgrade](../../04-opportunities/01-business-outcomes/safety-plus-upgrade.md)

---

## Next Steps

**Immediate Actions:**
1. **Update Migration Framework:** Enhance gap analysis section with recommended approaches
2. **Develop CS Training:** Create training materials on new approaches
3. **Create Tools/Templates:** Develop gap categorization templates and conversation guides
4. **Pilot Approaches:** Test with 2-3 upcoming migrations

**Decisions Needed:**
1. **Framework Update Approval:** Product and CS leadership approval for framework updates
2. **Training Approach:** How to deliver training (workshop, documentation, etc.)
3. **Escalation Process:** Finalize escalation paths and decision criteria
4. **Success Metrics:** Agree on metrics to measure approach effectiveness

**Follow-Up:**
1. **Gather Feedback:** Collect CS team feedback after initial implementation
2. **Measure Results:** Track metrics (scope expansion, migration timelines, escalations)
3. **Refine Approaches:** Iterate based on learnings
4. **Share Best Practices:** Document successful applications and share across team

---

## Questions or Discussion Points

1. **Training and Enablement:** How should we deliver training on these approaches? What format would be most effective for CS teams?

2. **Tooling Support:** Should we develop templates, checklists, or tools to support CS teams in applying these approaches?

3. **Escalation Thresholds:** What should trigger escalation to Product Management vs. CS team decision?

4. **Client Communication:** How do we communicate these approaches to clients without appearing inflexible?

5. **Success Measurement:** What specific metrics should we track to measure effectiveness of these approaches?

6. **Integration with Commercial:** How do these approaches integrate with commercial/contractual processes?



