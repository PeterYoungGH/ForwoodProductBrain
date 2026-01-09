# Unified Opportunity System Framework

**Last Updated:** 2025-12-06  
**Purpose:** Strategic framework for unified opportunity intake, scoring, prioritisation, and roadmap system

## Overview

The Unified Opportunity System is a strategic capability that consolidates all input sources (customer discovery, support, feature requests, innovation workshops, sales pipeline, etc.) into a single, structured pipeline with consistent scoring, AI-assisted prioritisation, and human governance. This framework enables Forwood to balance routine client-driven improvements, strategic roadmap initiatives, and innovation opportunities in a transparent, scalable way.

## Strategic Context

### Current State Problem
Forwood currently operates with multiple, disconnected input sources, each feeding into separate backlogs or strategic discussions. This creates:
- Competing roadmaps
- Duplicated work
- Ambiguity in prioritisation
- Difficulty maintaining balance between routine work, strategic initiatives, and innovation

### Desired State
A unified, transparent, scalable system that:
- Consolidates all input types into one structured pipeline
- Applies a consistent scoring and evaluation framework
- Uses AI to produce first‑draft prioritisation
- Enables human oversight, correction, and governance
- Generates a single, balanced, multi‑lane roadmap

## Framework Components

### 1. Unified Input Ecosystem
All opportunity sources flow into one system:
- Customer Discovery Calls (Marvin)
- Intercom (Support + Feature Requests)
- FeatureBase (Public Ideas Board)
- Innovation Workshops (Leadership Inputs)
- Customer Success Meetings
- Internal Engineering / Design / PM Insights
- Sales Pipeline (B2B Commercial Input)

### 2. Standardised Opportunity Template
Every opportunity—routine or innovative—follows the same structure:
- Name / title
- Problem statement
- Who is affected
- Evidence strength score (auto‑derived)
- Customer reach indicators
- ACV / revenue potential
- Strategic pillar alignment
- Type classification (Routine → Enhancement → Strategic → Innovation → Moonshot)
- Feasibility / complexity indicators
- Supporting notes, quotes, or references

### 3. AI-Assisted Scoring Framework
Four universal criteria for scoring:
- **Impact / Value (1–5):** SIF prevention, customer outcome value, revenue potential, workflow efficiency
- **Reach (1–5):** Number of clients affected, industry distribution, ACV weighting, frequency
- **Strategic Alignment (1–5):** Alignment with Forwood's pillars (Ease of Use, SIF Prevention, Adoption & Engagement, Data & Insights)
- **Effort / Feasibility (1–5):** Past similar initiatives, architectural impact, engineering complexity, uncertainty

### 4. Human-in-the-Loop Governance
- AI generates first‑draft scoring
- Humans review, adjust, and provide reasoning
- Human feedback trains the AI model over time
- Monthly triage of incoming opportunities
- Quarterly portfolio review and sequencing

### 5. Unified Roadmap Structure
Single prioritised plan with four lanes:
1. **Maintenance & Quality** – small fixes, tech debt, minor UX improvements
2. **Enhancements & Continuous Improvement** – moderate feature updates driven by customer value
3. **Strategic Initiatives** – large, planned product development streams
4. **Innovation & Moonshots** – AI, data, hardware, new workflows, new models

## Strategic Benefits

### Eliminates Competing Roadmaps
By merging innovation and routine work into a single system, we eliminate competing priorities and create alignment.

### Data-Driven Prioritisation
A shared, explainable scoring model ensures prioritisation is data-driven and transparent.

### AI-Accelerated Triage
AI can process large volumes of insights quickly, generating first‑draft prioritisation that humans can refine.

### Transparency Across Teams
All teams and leadership can see how opportunities are evaluated and prioritised.

### Strategic Alignment
Efforts automatically align to strategic pillars without manual recalibration.

### Balanced Portfolio
Maintains both short‑term customer focus and long‑term innovation in a balanced way.

### Reduced Noise
Detects duplicates and clusters related ideas automatically.

### Equal Contribution
Ensures sales, customer success, and support insights contribute equally alongside product and engineering thinking.

## Implementation Considerations

### Data Model Design
- Design detailed data model for Opportunity objects
- Establish relationships between opportunities, outcomes, and solutions

### Scoring Weighting
- Establish weighting for the four scoring criteria
- Calibrate based on Forwood's decision philosophy

### Tooling Selection
- Consider Jira Product Discovery, Airtable, Notion, or custom system
- Define connectors for all input sources (Marvin, Intercom, FeatureBase, CRM, CSM notes)

### Governance Rituals
- Monthly triage process
- Quarterly portfolio planning
- Experiment and pilot review cadence

### AI Model Training
- Collect human override data
- Train model on Forwood's decision patterns
- Improve scoring accuracy over time

## Related Documents

- [Unified Opportunity System Canvas Methodology](../../07-reference/methodology/unified-opportunity-system-canvas.md)
- [Inbox Item: Unified Opportunity System Canvas](../../../00-inbox/raw/2025-12-06-unified-opportunity-system-canvas-[INBOX].md)




