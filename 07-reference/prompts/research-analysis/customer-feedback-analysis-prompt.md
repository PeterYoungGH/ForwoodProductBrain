# Customer Feedback Analysis Prompt

## Use Case

Use this prompt when analyzing customer interviews, surveys, support tickets, or other customer feedback sources.

## Context

This prompt guides the analysis of customer feedback to identify jobs to be done, pain points, feature requests, and satisfaction drivers.

## Prompt Text

Analyze customer feedback following this structure:

### 1. Jobs to Be Done (JTBD)

Identify:
- **Functional jobs**: What functional tasks are customers trying to accomplish?
- **Emotional jobs**: What emotional outcomes are customers seeking?
- **Social jobs**: What social outcomes are customers seeking?
- **Job statements**: Format as "When [situation], I want to [motivation], so I can [expected outcome]"

### 2. Pain Points and Friction

Identify:
- **Current pain points**: What problems are customers experiencing?
- **Friction points**: Where do customers experience difficulty or frustration?
- **Workarounds**: What workarounds are customers using?
- **Impact**: How severe is each pain point? (High, Medium, Low)

### 3. Feature Requests and Needs

Extract:
- **Explicit requests**: What features or capabilities did customers explicitly request?
- **Implicit needs**: What needs are implied but not explicitly stated?
- **Use cases**: What use cases are customers describing?
- **Priority signals**: What indicates priority? (frequency, emotion, impact)

### 4. Satisfaction Drivers

Identify:
- **What customers love**: What features or aspects generate positive feedback?
- **Value drivers**: What creates value for customers?
- **Delight factors**: What creates delight or exceeds expectations?
- **Retention factors**: What keeps customers using the product?

### 5. Customer Segments

If applicable, identify:
- **Customer segments**: Different types of customers with different needs
- **Segment-specific insights**: Insights that apply to specific segments
- **Segment priorities**: Which segments are most important?

### 6. Actionable Insights

Synthesize:
- **Opportunities**: What opportunities emerge from this feedback?
- **Quick wins**: What can be addressed quickly?
- **Strategic initiatives**: What requires longer-term work?
- **Research gaps**: What questions remain unanswered?

## Parameters

- `feedback_source`: The customer feedback to analyze (interview notes, survey results, support tickets, etc.)
- `feedback_type`: Type of feedback (interview, survey, support, user testing, etc.)
- `customer_segment`: Customer segment if known (optional)

## Expected Output

A structured analysis that includes:
- Jobs to be done statements
- Pain points with severity ratings
- Feature requests and needs
- Satisfaction drivers
- Customer segments (if applicable)
- Actionable insights and opportunities
- Links to related opportunities or research

## Related Commands

- `extract-insights` - Command dedicated to insight extraction
- `process-inbox-todo` - Uses this prompt when processing customer feedback items

## Related Methodology

- [Jobs to Be Done Framework](../../methodology/jobs-to-be-done-framework.md) - JTBD framework
- [Research Template](../../templates/research-template.md) - Research document structure
- [Discovery Process](../../methodology/discovery-process.md) - Product discovery methodology

