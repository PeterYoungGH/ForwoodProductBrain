# Content Analysis Prompt

## Use Case

Use this prompt when analyzing inbox item content to identify what it contains and how it should be integrated into the Product Brain knowledge base.

## Context

This prompt guides the analysis of raw inbox items to identify content elements that map to different sections of the Product Brain structure. The analysis must be thorough and identify all potential integration points.

## Prompt Text

Analyze the inbox item content and identify all of the following elements:

1. **Objectives and Goals**
   - High-level objectives
   - Strategic goals
   - Business targets
   - Look for: mission statements, vision, strategic priorities

2. **Key Results and Metrics**
   - Measurable outcomes
   - Success criteria
   - Target metrics
   - Look for: KPIs, OKRs, performance indicators

3. **Timelines and Roadmaps**
   - Dates and milestones
   - Quarterly plans
   - Project timelines
   - Look for: dates, quarters, phases, milestones

4. **Strategic Elements**
   - Strategic principles
   - Focus areas
   - Vision statements
   - Look for: strategic themes, pillars, principles

5. **Outcomes**
   - Business outcomes (e.g., revenue, market share, customer satisfaction)
   - Product outcomes (e.g., user engagement, feature adoption)
   - Customer outcomes (e.g., time saved, risk reduced)
   - Look for: outcome statements, success metrics, impact descriptions

6. **Opportunities**
   - Customer needs
   - Pain points
   - Market opportunities
   - Look for: problems to solve, unmet needs, market gaps

7. **Solutions and Features**
   - Proposed solutions
   - Feature ideas
   - Technical approaches
   - Look for: product ideas, feature descriptions, solution concepts

8. **Research and Discovery**
   - Research findings
   - User insights
   - Data analysis
   - Market intelligence
   - Look for: research reports, customer feedback, market data, competitive analysis

9. **Initiatives**
   - Strategic initiatives
   - Programs of work
   - Cross-functional projects
   - Look for: program descriptions, initiative plans, project outlines

10. **Communications**
    - Presentation needs
    - Stakeholder updates
    - Documentation requirements
    - Look for: presentation requests, update needs, documentation requests

For each identified element:
- Note the specific content or quote
- Identify the risk level (HIGH, MEDIUM, LOW) based on Product Brain structure mapping
- Suggest potential integration locations
- Note any relationships to existing documents

## Parameters

- `content`: The inbox item content to analyze
- `existing_documents`: List of related existing documents (optional)
- `risk_levels`: Risk level mapping from RULES.md (HIGH, MEDIUM, LOW)

## Expected Output

A structured analysis that includes:
- List of identified content elements by category
- Risk level for each element
- Suggested integration locations
- Relationships to existing documents
- Any conflicts or contradictions with existing content

## Related Commands

- `process-inbox-todo` - Uses this prompt in Step 2.1
- `analyze-inbox-content` - Command dedicated to content analysis

## Related Methodology

- [Inbox Processing Rules](../../../00-inbox/RULES.md) - Full processing workflow and risk levels
- [Content Analysis Rules](../../../00-inbox/RULES.md#content-analysis-rules) - Detailed content analysis guidelines

