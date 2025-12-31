# Forwood One Migration Experience Framework

**Last Updated:** 2025-12-17  
**Source:** [Forwood One Migration Experience Framework](../../00-inbox/raw/2025-12-17-forwood-one-migration-experience-framework-[TO-DO].md)

## Overview

This document outlines a high-level framework to guide Forwood teams as we design, plan, and execute customer migrations to Forwood One. It is intended to:

- Align Sales, Customer Success, Product, Engineering, Support, Marketing, Academy, and Partner Enablement around a shared definition of migration success
- Act as a common reference point when building detailed migration plans and delivery playbooks, not as a detailed step-by-step plan
- Ensure migrations are delivered in a way that feels calm, controlled, production-ready, and confidence-building for customers

This framework is informed by research and patterns observed across highly rated enterprise SaaS migrations from companies such as Salesforce, ServiceNow, Workday, Atlassian, HubSpot, and Shopify.

## Purpose

At its core, this framework is designed to answer one simple question:

**"What does a great migration feel like from the customer's perspective — and how do we deliberately design for that experience and achieve our success criteria?"**

Rather than starting with internal process, tooling, or technical steps, this framework starts with customer perception and works backwards to the behaviours, decisions, and ownership required inside Forwood.

The sections that follow reflect the most common themes customers use when describing migrations they rate highly, recommend to peers, and reference as best-in-class. Each theme is paired with clear goals and concrete actions so that Forwood teams can consistently turn intent into execution.

## Migration Success Criteria

### Controlled Cut-Over & Service Levels

Every migration finishes within the agreed cut-over window, meets all contractual SLAs, and does not stop safety-critical work; rollback happens only if the pre-agreed rollback conditions are met.

### Production-Ready Platform at Go-Live

Forwood One goes live with zero known P1 defects, and zero known P2 defects unless the customer explicitly accepts them with a documented workaround, a committed fix date, and clear customer communication.

### Readiness, Adoption & Confidence

Sales, CS, Support, Academy, and Partner Enablement (and participating partners) use the standard onboarding playbook, and customers can complete core workflows on day one, with satisfaction validated (NPS survey or equivalent) and zero executive escalations within first 60 days.

## 8 Customer Migration Experience Themes

### 1. "I always knew what was happening"

**Theme:** Radical clarity  
**Key discipline:** No surprises means no uncontrolled cut-over.

**Our Goal:** Make the migration feel calm, controlled, and predictable by removing uncertainty, ambiguity, and last-minute surprises. This directly supports controlled cut-over, SLA adherence, and zero safety disruption.

**What the customer feels:** Clear timeline. Clear milestones. No surprises. No panic.

**What Forwood must do:**

#### Customer Success
- Publish a clear migration plan with phases, milestones, owners, and dates
- Nominate one Forwood owner and one customer owner with decision authority
- Run a fixed cadence of status check-ins and decision checkpoints
- Proactively communicate risks, dependencies, and changes before they become issues
- Confirm cut-over window, service-level expectations, and rollback conditions in writing

#### Sales
- Ensure migration expectations sold align with delivery reality
- Reinforce timelines, scope, and constraints during handover

#### Marketing
- Provide clear customer-facing "what to expect" migration communications
- Build necessary messaging and assets to support customer communication

#### Leadership
- Enforce clarity, readiness, and decision ownership as a delivery standard

---

### 2. "They clearly understood our business"

**Theme:** Context over configuration  
**Key discipline:** If it doesn't support the customer's real work, it doesn't ship.

**Our Goal:** Design the migration around real operational workflows so safety-critical work is never interrupted. This supports zero safety stoppage and day-one operational confidence.

**What the customer feels:**
- "They got us."
- "They asked the right questions."
- "They challenged bad ideas."

**What Forwood must do:**

#### Customer Success
- Run workflow-first discovery focused on safety-critical and business-critical use cases
- Document and validate core workflows required on Day 1

#### Product Management
- Complete gap analysis between previous and new platform
- Identify all key workflows and propose workarounds where there are gaps
- Push back on replicating broken or unsafe legacy processes

#### Sales
- Transfer full operational and stakeholder context at handover

#### Engineering
- Identify and flag technical constraints that could impact safety, continuity, or SLAs

---

### 3. "Nothing critical broke on Day 1"

**Theme:** Day-One confidence  
**Key discipline:** Go-live is a quality gate, not a deadline.

**Our Goal:** Ensure Forwood One is production-ready at go-live with no known P1 defects and no unaccepted P2 defects. This directly enforces production-readiness, SLA compliance, and cut-over control.

**What the customer feels:**
- I can log in.
- I can do my job.
- My data is there.

**What Forwood must do:**

#### Customer Success
- Define and agree Day-1 critical workflows with the customer
- Validate customer sign-off on go-live readiness

#### Product Management
- Lock Day-1 scope and explicitly de-scope non-essential features
- Approve any P2 defects only with customer acceptance, workaround, and fix date

#### Engineering
- Ensure zero known P1 defects at go-live
- Validate data integrity, performance, and system stability
- Support parallel run or phased cut-over if required

#### Support
- Be fully briefed on customer context, risks, and known limitations before go-live

#### Leadership
- Approve go-live only when readiness criteria are met, not based on calendar pressure

---

### 4. "They told us what NOT to migrate"

**Theme:** Trusted guidance  
**Key discipline:** Less legacy equals less risk.

**Our Goal:** Reduce risk and complexity by preventing unnecessary data and process carry-over into Forwood One. This supports platform stability, SLA performance, and safer operations.

**What the customer feels:**
- "They protected us."
- "This feels cleaner."
- "This is better than before."

**What Forwood must do:**

#### Customer Success
- Recommend which data should be archived or excluded
- Document and confirm migration boundaries

#### Product Management
- Explain long-term performance, risk, and maintainability implications

#### Sales
- Reinforce the value of a lighter, safer future state

#### Engineering
- Validate technical risk of unnecessary historical data

---

### 5. "We weren't left alone after go-live"

**Theme:** Strong hypercare  
**Key discipline:** Trust is built after launch, not before it.

**Our Goal:** Provide structured, visible support so customers feel safe, supported, and confident post cut-over. This underpins zero executive escalations and SLA adherence.

**What the customer feels:**
- "They're with us."
- "We're supported."
- "This is safe."

**What Forwood must do:**

#### Customer Success
- Define and communicate the hypercare period upfront
- Assign named post-go-live contacts
- Run proactive check-ins during hypercare

#### Support
- Prioritise migration customers and meet SLA response times
- Escalate risks early, not reactively

#### Engineering
- Fast-track fixes impacting safety, adoption, or confidence

#### Leadership
- Ensure hypercare is properly resourced and protected

---

### 6. "Training was short, relevant, and respectful"

**Theme:** Practical enablement  
**Key discipline:** Enablement proves readiness.

**Our Goal:** Ensure customers, partners, and internal teams can confidently execute core workflows on Day 1. This directly supports readiness, adoption, and confidence.

**What the customer feels:**
- "I know what to do."
- "This is easy."
- "This respects my time."

**What Forwood must do:**

#### Customer Success
- Deliver role-based, task-focused training
- Validate customer ability to complete core workflows independently

#### Product Management
- Define and document simple 'happy path' workflows

#### Marketing / Academy
- Provide short recordings, guides, and reference materials

#### Sales & Partner Enablement
- Use the standard onboarding playbook consistently

---

### 7. "They owned the outcome, not just the tasks"

**Theme:** Accountability  
**Key discipline:** Accountability prevents escalation.

**Our Goal:** Own customer success end-to-end and prevent escalation through proactive ownership. This enforces zero executive escalations within 60 days.

**What the customer feels:**
- "They took responsibility."
- "They didn't disappear."
- "They fixed it."

**What Forwood must do:**

#### Customer Success
- Own migration success, not just milestone completion

#### Engineering
- Resolve issues without blame or defensiveness

#### Product Management
- Prioritise customer impact over roadmap convenience during migrations

#### Leadership
- Reinforce a culture of ownership and escalation prevention

---

### 8. "It feels 10x better than the old system"

**Theme:** Visible improvement  
**Key discipline:** Value must be felt, not explained.

**Our Goal:** Make the value of Forwood One obvious early and validate adoption and satisfaction. This directly supports NPS validation and long-term confidence.

**What the customer feels:**
- "This is way easier."
- "This is way better."
- "Why didn't we do this earlier?"

**What Forwood must do:**

#### Customer Success
- Highlight quick wins immediately after go-live
- Tie improvements back to original success criteria
- Trigger post-migration satisfaction validation (NPS or equivalent)

#### Product Management
- Ensure the product experience of all key customer workflows are exceptional
- Deliver an improved experience for as many key complaints from previous platform
- Ensure value is delivered timely and operationally meaningful

#### Marketing
- Reinforce early wins through success messaging

#### Sales
- Reinforce value in renewal and expansion conversations

## Related Documents

- [Business Outcome: CRM Upgrade Pathway](../../04-opportunities/01-business-outcomes/crm-upgrade-pathway.md)
- [Business Outcome: Safety Plus Upgrade](../../04-opportunities/01-business-outcomes/safety-plus-upgrade.md)



