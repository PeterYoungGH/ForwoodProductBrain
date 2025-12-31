# Risk Assessment Prompt

## Use Case

Use this prompt when assessing risks using frameworks like Marty Cagan's Four Risks.

## Context

This prompt guides the assessment of value, usability, feasibility, and business viability risks for product ideas, features, or solutions.

## Prompt Text

Assess risks following Marty Cagan's Four Risks framework:

### 1. Value Risk Assessment

**Question:** Will customers buy this (or choose to use it)?

Assess:
- **Problem validation**: Does it solve a genuine, high-priority problem?
- **Competitive advantage**: Does it outperform current alternatives?
- **Customer willingness**: Will customers pay (with money, time, or attention)?
- **Evidence**: What evidence validates the value hypothesis? (user research, data, feedback)

**Desired Outcome:** The product is **desirable** — users clearly see the value proposition and are motivated to engage.

### 2. Usability Risk Assessment

**Question:** Can users figure out how to use it?

Assess:
- **Task completion**: Can target users intuitively complete key tasks?
- **Mental models**: Does the interface align with their mental models and expectations?
- **Prototype testing**: Have you tested early prototypes with real users?
- **Usability issues**: Are usability issues identified and resolved before delivery?

**Desired Outcome:** The product is **intuitive and pleasant to use**, minimizing friction or confusion.

### 3. Feasibility Risk Assessment

**Question:** Can we build it with the time, skills, and technology available?

Assess:
- **Technical assumptions**: Are the technical assumptions sound?
- **Resources**: Do we have the necessary infrastructure, data, and expertise?
- **Constraints**: Are dependencies, scalability, and performance constraints known?
- **Engineering engagement**: Has engineering been engaged early to identify constraints or trade-offs?

**Desired Outcome:** The product **can be built efficiently and reliably** with existing resources or planned investment.

### 4. Business Viability Risk Assessment

**Question:** Can the solution work for our business?

Assess:
- **Financial sustainability**: Is the idea financially sustainable?
- **Compliance**: Does it comply with legal, privacy, and policy constraints?
- **Strategic alignment**: Is it aligned with brand, operations, and strategy?
- **Stakeholder support**: Will stakeholders (e.g., sales, marketing, finance) support it?

**Desired Outcome:** The product **supports business objectives** and can scale without breaking organizational constraints.

### 5. Risk Summary

For each risk:
- **Risk level**: High, Medium, or Low
- **Evidence**: What evidence reduces or increases the risk?
- **Unknowns**: What unknowns require discovery or testing?
- **Mitigation**: What can be done to reduce the risk?

## Parameters

- `product_idea`: The product idea, feature, or solution to assess
- `target_customers`: Target customer segment (optional)
- `existing_evidence`: Existing evidence or research (optional)

## Expected Output

A structured risk assessment that includes:
- Assessment of all four risks (value, usability, feasibility, business viability)
- Risk levels (High, Medium, Low) for each risk
- Evidence supporting or contradicting each risk
- Unknowns requiring discovery
- Mitigation strategies

## Related Commands

- `apply-decision-framework` - Command for applying decision frameworks
- `identify-opportunities` - May use risk assessment when evaluating solutions
- `process-inbox-todo` - May use risk assessment when processing solution items

## Related Methodology

- [Four Product Risks Framework](../../methodology/four-product-risks-framework.md) - Risk assessment framework
- [Discovery Process](../../methodology/discovery-process.md) - Product discovery methodology

