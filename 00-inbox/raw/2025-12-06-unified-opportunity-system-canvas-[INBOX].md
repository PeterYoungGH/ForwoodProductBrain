# Unified Opportunity System Canvas - Inbox

# Unified Opportunity System Canvas

## 1. Purpose of This Canvas

This canvas captures the full set of concepts, decisions, ideas, and proposed structures developed during the workshop on creating a unified opportunity intake, scoring, prioritisation, and roadmap system. This is intended for inclusion in a broader organisational knowledge base and serves as a foundational reference for designing Forwood's integrated ideation, insights, and innovation operating system.

It consolidates:

* All input sources across the business

* The unified pipeline structure

* Scoring framework and how AI can generate first‑draft prioritisation

* Human‑in‑the‑loop governance

* How innovation and routine work merge into a single opportunity workflow

* High‑level process and system recommendations

---

# 2. Problem We Are Solving

Forwood currently operates with **multiple, disconnected input sources**, each feeding into separate backlogs or strategic discussions. This creates competing roadmaps, duplicated work, ambiguity in prioritisation, and difficulty maintaining balance between:

* Routine client‑driven improvements

* Strategic roadmap initiatives

* Innovation and moonshot opportunities

The organisation needs a unified, transparent, scalable system that:

* Consolidates all input types into one structured pipeline

* Applies a consistent scoring and evaluation framework

* Uses AI to produce first‑draft prioritisation

* Enables human oversight, correction, and governance

* Generates a single, balanced, multi‑lane roadmap

---

# 3. Input Ecosystem (All Sources of Opportunities)

This section outlines every input channel that must feed into the unified opportunity system.

## 3.1 Customer Discovery Calls (Marvin)

Marvin contains:

* Interview transcripts

* Tagged insights and themes

* Customer pain points

* Evidence of recurring problems

* Qualitative signals on desirability and urgency

This is a high‑value input source, surfacing real‑world workflow constraints, behavioural drivers, and adoption challenges.

## 3.2 Intercom (Support + Feature Requests)

Inputs include:

* Support tickets highlighting UX gaps, bugs, and workflow issues

* Feature requests submitted directly by users

* Metadata: customer segment, severity, frequency, sentiment

This is useful for understanding reach, friction, and usability issues.

## 3.3 FeatureBase (Public Ideas Board)

A public platform where clients:

* Submit ideas

* Upvote existing opportunities

* Comment with additional context

Provides strong signals of customer demand and perceived value.

## 3.4 Innovation Workshops (Leadership Inputs)

Executives and senior leaders contribute:

* AI concepts

* Hardware and edge‑device opportunities

* Data commercialisation ideas

* Workflow innovation thoughts

* Market‑shaping strategies

These inputs often have high strategic value but low initial evidence.

## 3.5 Customer Success Meetings

Weekly or fortnightly conversations with existing clients provide:

* Workflow requests

* Adoption obstacles

* Niche requirements

* Insights into organisational maturity and readiness

These insights are rich but often unstructured.

## 3.6 Internal Engineering / Design / PM Insights

Includes:

* Technical debt

* UX improvements

* Operational workflow optimisations

* Architectural constraints and opportunities

## 3.7 Sales Pipeline (B2B Commercial Input)

Critical addition to the input ecosystem, containing:

* ACV and revenue potential

* Prospect requirements and blockers

* Industry segment insights

* Probability‑weighted revenue forecasts

* Competitor comparisons

* Urgency indicators (e.g., RFP deadlines)

Sales pipeline data is essential for accurately evaluating revenue potential and feasibility.

---

# 4. Unified Opportunity Pipeline (High‑Level Structure)

The goal is to convert all input types into a single, structured workflow.

## 4.1 Intake

All data sources flow into one repository. Each input becomes an **Opportunity** using a consistent template.

## 4.2 Framing

AI generates a structured opportunity card and proposed categorisation.

Humans refine the framing as needed.

## 4.3 AI‑Generated First‑Draft Scoring

The system evaluates each opportunity using universal scoring criteria.

## 4.4 Human Review & Adjustment

PMs, design, engineering, and/or leadership:

* Approve or override scoring

* Provide reasoning

  This feedback trains the AI model over time.

## 4.5 Prioritisation & Portfolio Mapping

Opportunities are visualised using:

* Impact vs effort

* Time‑to‑value

* Moonshot vs small bet classification

* Strategic pillar alignment

## 4.6 Roadmap Integration

A single roadmap with four lanes:

1. Maintenance & Quality

2. Enhancements & Continuous Improvement

3. Strategic Initiatives

4. Innovation & Moonshots

## 4.7 Governance

* Monthly triage of incoming opportunities

* Quarterly portfolio review and sequencing

* Kill/pivot/reassess loops for active initiatives

---

# 5. The Opportunity Template (Standardised Structure)

Every opportunity—routine or innovative—must follow the same structure so the AI can evaluate them consistently.

Fields include:

* Name / title

* Problem statement

* Who is affected

* Evidence strength score (auto‑derived)

* Customer reach indicators

* ACV / revenue potential (if applicable)

* Strategic pillar alignment

* Type classification (Routine → Enhancement → Strategic → Innovation → Moonshot)

* Feasibility / complexity indicators

* Supporting notes, quotes, or references

This unifies the evaluation of small customer requests and large strategic opportunities.

---

# 6. Unified Scoring Framework (AI‑Calculated First Draft)

The scoring model uses four universal criteria.

## 6.1 Impact / Value (1–5)

Signals include:

* SIF prevention contribution

* Customer outcome value

* Potential revenue or retention impact

* Workflow efficiency gains

* Qualitative sentiment from interviews or support

## 6.2 Reach (1–5)

Derived from:

* Number of clients affected

* Distribution across industries

* ACV weighting

* Frequency in support and discovery channels

* Prospect recurrence in sales pipeline

## 6.3 Strategic Alignment (1–5)

LLM compares the opportunity to Forwood's pillars:

* Ease of Use

* SIF Prevention

* Adoption & Engagement

* Data & Insights

Semantic similarity and rule‑based mappings determine this score.

## 6.4 Effort / Feasibility (1–5)

AI estimates difficulty based on:

* Past similar initiatives

* Architectural impact

* Engineering notes or tags

* Uncertainty indicators

* Type of work (UI‑only vs deep workflow vs cross‑platform)

---

# 7. How AI Computes Scores (Process Flow)

A transparent scoring architecture improves trust and auditability.

## 7.1 Normalisation Layer

AI converts all inputs (tickets, notes, ideas, sales data) into standard opportunity objects.

## 7.2 Signal Extraction

AI identifies key signals:

* Frequency

* ACV impact

* Sentiment

* Industry spread

* Recurring phrasing

* Thematic clustering

## 7.3 Scoring Engine

Combines:

* Explicit rules

* Weighted heuristics

* ML‑derived patterns

Scores are always explainable and reproducible.

## 7.4 Rationale Generation

AI produces clear reasoning, e.g.:

"This opportunity scores 4 for Reach because 12 customers, including 2 enterprise accounts, have raised this issue across support, CSM meetings, and sales calls."

## 7.5 Human Override Loop

* Humans can adjust scores

* Must provide a reason

* Overrides are stored to train future model weighting

This ensures the model becomes increasingly aligned with Forwood's decision philosophy.

---

# 8. Unified Roadmap Structure

Instead of separate tactical and innovation roadmaps, the system produces a single prioritised plan with four lanes:

1. **Maintenance & Quality** – small fixes, tech debt, minor UX improvements

2. **Enhancements & Continuous Improvement** – moderate feature updates driven by customer value

3. **Strategic Initiatives** – large, planned product development streams

4. **Innovation & Moonshots** – AI, data, hardware, new workflows, new models

Teams can apply quarterly capacity allocations to maintain balance.

---

# 9. Governance Model

## 9.1 Monthly Triage

* Rapid scoring review

* Deduplication

* Categorisation adjustments

* Assignment for further framing

## 9.2 Quarterly Portfolio Planning

* Score validation

* Strategic balancing

* Roadmap selection and sequencing

* Resourcing and capability alignment

## 9.3 Experiment & Pilot Review Cadence

* Moonshots tracked with POC → pilot → MVP → scale progression

* Small bets measured for fast learning outcomes

* Kill/pivot decisions based on evidence

---

# 10. How This System Solves the Current Problems

* Eliminates competing roadmaps by merging innovation and routine work

* Ensures data‑driven prioritisation using a shared, explainable scoring model

* Provides AI‑accelerated triage of large volumes of insights

* Creates transparency across teams and leadership

* Aligns efforts to strategic pillars without manual recalibration

* Maintains both short‑term customer focus and long‑term innovation

* Reduces noise by detecting duplicates and clustering related ideas

* Ensures sales, customer success, and support insights contribute equally alongside product and engineering thinking

---

# 11. Next Steps for Development

Potential next activities include:

* Designing the detailed data model for Opportunity objects

* Establishing weighting for the scoring criteria

* Creating the workflow diagram for intake → scoring → prioritisation → roadmap

* Selecting tooling (e.g., Jira Product Discovery, Airtable, Notion, or a custom system)

* Defining connectors for Marvin, Intercom, FeatureBase, CRM, and CSM notes

* Drafting governance rituals for triage and portfolio reviews

This canvas forms the foundational reference for all subsequent design and implementation work.










