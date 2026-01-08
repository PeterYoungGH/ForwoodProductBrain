# Executive Summary Generation Prompt

## Use Case

Use this prompt when creating executive summaries for ideas, opportunities, solutions, research documents, or other product documents. The summary should be one page or less and focused on explaining the content to an executive audience using the frameworks outlined in this project.

## Context

This prompt guides the creation of concise, executive-focused summaries that distill complex product documents into clear, actionable information suitable for executive decision-making. The summaries apply relevant frameworks (Innovation Decision Framework, Four Product Risks, Jobs to Be Done, Strategic Pillars) to provide structured, consistent analysis.

## Prompt Text

Generate an executive summary following this structure. The summary must be **one page or less** (approximately 500-800 words) and written for an executive audience.

### 1. Document Header

Include:
- **Title**: Executive Summary: [Document Name]
- **Date**: Date of summary creation (YYYY-MM-DD)
- **Source Document**: Link to the original document
- **Document Type**: Opportunity, Solution, Idea, Research, Outcome, etc.
- **Status**: Current status of the source document

### 2. Executive Overview (2-3 sentences)

Provide a concise, high-level summary:
- **What**: What is this about? (one sentence)
- **Why**: Why does it matter? (one sentence)
- **Impact**: What's the potential impact? (one sentence)

### 3. Strategic Alignment

Explain how this aligns with Forwood's strategy:

- **Mission Alignment**: How does this support Forwood's mission to become the global gold standard in fatality prevention?
- **Strategic Pillars**: Which strategic pillars does this reinforce?
  - Ease of Use
  - SIF Prevention
  - Adoption & Engagement
  - Data & Insights
- **Innovation Domains** (if applicable): Which innovation domain(s) does this belong to?
  - AI & ML Innovation
  - Data Innovation
  - Hardware Innovation
  - Platform & Product Innovation
  - Process & Industry Model Innovation
- **Business/Product Outcomes**: Which business or product outcomes does this support?

### 4. The Opportunity/Problem/Solution

**For Opportunities:**
- **Customer Problem**: What customer problem or need does this address?
- **Jobs to Be Done**: What job are customers trying to accomplish?
- **Opportunity Score**: Include Importance and Satisfaction scores (if available)
- **Evidence Quality**: Strength of evidence supporting this opportunity

**For Solutions:**
- **Solution Description**: What is the proposed solution?
- **Related Opportunity**: Which opportunity does this address?
- **How It Works**: Brief explanation of how the solution addresses the opportunity

**For Ideas/Innovation:**
- **Idea Description**: What is the innovation idea?
- **Problem/Opportunity**: What problem or opportunity does this address?
- **Moonshot vs Small Bet**: Categorize as transformational moonshot or incremental small bet

**For Research/Insights:**
- **Key Findings**: What are the most important findings?
- **Implications**: What are the strategic implications?
- **Confidence Level**: How confident are we in these findings?

### 5. Business Impact

Quantify and qualify the expected impact:

- **Revenue Impact**: Potential impact on ARR, retention, or expansion (if applicable)
- **Customer Impact**: Number of customers affected, magnitude of impact
- **Strategic Impact**: How does this advance strategic goals?
- **Competitive Impact**: How does this affect competitive position?
- **Risk Mitigation**: What risks does this address or mitigate?

**For Opportunities:**
- Expected impact on business and product outcomes
- Procurement enablement, competitive advantage, market access, etc.

**For Solutions:**
- Expected impact on the related opportunity
- Expected impact on outcomes

**For Innovation Ideas:**
- Use Innovation Decision Framework dimensions:
  - Revenue Potential (1-5 scale)
  - Reach & Impact (1-5 scale)
  - Buy-In & Feasibility (1-5 scale)
  - Execution Difficulty (1-5 scale)

### 6. Key Risks and Considerations

**For Solutions:**
Apply Four Product Risks Framework:
- **Value Risk**: Will customers buy/use this? (Low/Medium/High)
- **Usability Risk**: Can users figure out how to use it? (Low/Medium/High)
- **Feasibility Risk**: Can we build it? (Low/Medium/High)
- **Business Viability Risk**: Does it work for our business? (Low/Medium/High)

**For All Document Types:**
- **Key Risks**: What are the primary risks or concerns?
- **Dependencies**: What dependencies exist?
- **Resource Requirements**: What resources are needed? (effort, skills, time)
- **Assumptions**: What assumptions are we making?

### 7. Recommendation

Provide a clear recommendation:

- **Recommended Action**: What should we do? (Proceed, Investigate Further, Defer, Archive)
- **Priority**: High, Medium, or Low priority
- **Timeline**: Suggested timeline or urgency
- **Next Steps**: What are the immediate next steps?
- **Decision Required**: What decision is needed from executives?

### 8. Supporting Information

Include:
- **Related Documents**: Links to related opportunities, solutions, outcomes, research
- **Evidence**: Key evidence supporting this (research, data, customer feedback)
- **Metrics**: Key metrics to track (if applicable)

## Framework Application Guidelines

### For Opportunities
- Apply **Jobs to Be Done Framework**: Include Importance and Satisfaction scores
- Reference **Opportunity Solution Tree**: Link to related solutions and outcomes
- Highlight **Strategic Alignment**: Connect to business and product outcomes

### For Solutions
- Apply **Four Product Risks Framework**: Assess Value, Usability, Feasibility, Business Viability
- Reference **Opportunity Solution Tree**: Link to related opportunity and experiments
- Include **Validation Status**: Current state of validation (hypothesis, experiment, results)

### For Ideas/Innovation Opportunities
- Apply **Innovation Decision Framework**: Score on Revenue Potential, Reach & Impact, Buy-In & Feasibility, Execution Difficulty
- Categorize as **Moonshot vs Small Bet**
- Highlight **Strategic Alignment**: Innovation domains and strategic pillars
- Include **Portfolio Positioning**: How this fits in the innovation portfolio

### For Research/Insights
- Focus on **Key Findings** and **Strategic Implications**
- Link to **Opportunities Created**: Which opportunities were identified from this research
- Include **Evidence Quality**: Confidence level and source quality
- Reference **Discovery Process**: How this fits in the discovery workflow

### For Business/Product Outcomes
- Focus on **Target Metrics** and **Current State**
- Highlight **Strategic Importance**: Why this outcome matters
- Link to **Related Opportunities**: Which opportunities support this outcome
- Include **Progress Indicators**: How are we tracking toward this outcome

## Parameters

- `source_document`: The document to summarize (path to file)
- `document_type`: Type of document (Opportunity, Solution, Idea, Research, Outcome, etc.)
- `related_documents`: Related documents to reference (optional)
- `frameworks_to_apply`: Which frameworks to apply (based on document type)
- `target_length`: Target length (default: one page, 500-800 words)

## Expected Output

A complete executive summary document that:
- Is one page or less (approximately 500-800 words)
- Follows the structure above
- Uses appropriate frameworks based on document type
- Is written for an executive audience (clear, concise, decision-focused)
- Links to source document and related documents
- Provides clear recommendation and next steps
- Uses proper markdown formatting

## Writing Guidelines

### Executive Audience Considerations

- **Be Concise**: One page or less, no unnecessary detail
- **Be Clear**: Use plain language, avoid jargon where possible
- **Be Decision-Focused**: Emphasize what executives need to know to make decisions
- **Be Structured**: Use clear headings and bullet points
- **Be Actionable**: Include clear recommendations and next steps

### Framework Integration

- **Apply frameworks naturally**: Don't force frameworks, use them where they add value
- **Be consistent**: Use the same framework language and scoring as the source document
- **Highlight key scores**: Include framework scores prominently (e.g., Opportunity Score, Risk levels)
- **Explain framework context**: Briefly explain what the framework scores mean

### Strategic Context

- **Always include strategic alignment**: Connect to mission, pillars, outcomes
- **Show business impact**: Quantify impact where possible
- **Highlight risks**: Be transparent about risks and considerations
- **Provide recommendation**: Always include a clear recommendation

## Related Commands

- `pm.create-executive-summary` - Command dedicated to executive summary generation
- `pm.apply-decision-framework` - May use executive summaries when presenting framework assessments
- `pm.identify-opportunities` - May generate executive summaries for opportunities

## Related Methodology

- [Innovation Decision Framework](../../methodology/innovation-decision-framework.md) - For innovation opportunities
- [Four Product Risks Framework](../../methodology/four-product-risks-framework.md) - For solution assessments
- [Jobs to Be Done Framework](../../methodology/jobs-to-be-done-framework.md) - For opportunity scoring
- [Decision Framework](../../methodology/decision-framework.md) - Overall decision framework
- [Opportunity Solution Tree Guide](../../methodology/opportunity-solution-tree-guide.md) - OST framework



