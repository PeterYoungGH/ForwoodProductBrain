# Classify Content Type

**Category:** Triage
**Strategic Theme:** N/A
**Autonomy Level:** Full
**Workflow Stages:** 1 (Inbox Processing)

## Purpose

Identify the type of content in an inbox item to determine appropriate processing path. This skill analyzes unstructured input and classifies it into one of the standard content types used in the Product Brain knowledge base.

## Inputs Required

- **Content:** The raw text or document to classify
- **Context:** Any metadata about the source (email, meeting notes, Jira, etc.)
- **Existing Categories:** List of valid content types in the system

## Process Steps

### Step 1: Analyze Content Structure

Examine the content for structural indicators:
- Does it contain research data, quotes, or findings?
- Does it describe a problem or customer pain point?
- Does it propose a solution or feature?
- Does it contain strategic direction or goals?
- Does it contain feedback or complaints?
- Is it a request for action or decision?

### Step 2: Identify Key Signals

Look for classification signals:

| Signal | Indicates |
|--------|-----------|
| Customer quotes, interview data | Research |
| Problem statements, pain points | Opportunity |
| Feature descriptions, specifications | Solution |
| Goals, OKRs, strategic themes | Strategy |
| Complaints, suggestions, praise | Feedback |
| Meeting notes, decisions | Communication |
| Data, metrics, analytics | Data Analysis |
| Market trends, competitors | Market Research |

### Step 3: Assign Primary Classification

Classify into one of these primary types:
- **Research:** User research, market research, data analysis
- **Opportunity:** Customer problems, needs, pain points
- **Solution:** Features, designs, technical specifications
- **Strategy:** Vision, roadmap, initiatives, OKRs
- **Feedback:** Customer feedback, internal feedback, reviews
- **Communication:** Meeting notes, updates, presentations
- **Idea:** Raw ideas without structure
- **Request:** Action items, decisions needed

### Step 4: Assign Secondary Classification (if applicable)

Some content may span multiple types. Identify:
- Primary type (main classification)
- Secondary type (if significant overlap)
- Confidence level (High/Medium/Low)

## Output Format

```markdown
## Content Classification

**Primary Type:** [Type]
**Secondary Type:** [Type or None]
**Confidence:** [High | Medium | Low]

### Classification Rationale
[Brief explanation of why this classification was chosen]

### Key Signals Detected
- Signal 1
- Signal 2
- Signal 3

### Suggested Destination
[Recommended location in knowledge base]
```

## Confidence Scoring

- **High (80-100%):** Clear structural indicators, single dominant type
- **Medium (50-79%):** Multiple types present, one clearly dominant
- **Low (<50%):** Ambiguous content, multiple equally valid classifications

## Example

**Input:** Email from customer describing difficulty finding features in the mobile app, with specific examples and screenshots.

**Output:**
```markdown
## Content Classification

**Primary Type:** Feedback
**Secondary Type:** Opportunity
**Confidence:** High

### Classification Rationale
Content is direct customer feedback about usability issues, which also reveals an underlying opportunity around feature discoverability.

### Key Signals Detected
- Customer-sourced content (direct email)
- Problem description with specific examples
- Usability issues mentioned
- Screenshots showing friction points

### Suggested Destination
- Primary: `03-discovery/research/user-research/` (as feedback document)
- Extract opportunity to: `04-opportunities/03-opportunities/`
```

## Related Skills

- [[assess-risk-level]] - Determine risk level after classification
- [[route-to-destination]] - Route to appropriate location
- [[extract-action-items]] - Pull actions if content is a request

## Used By Commands

- `agentflow.process-inbox` - First skill in inbox processing chain
- `agentflow.orchestrate` - Stage 1 skill


