# Generate Stakeholder Feedback

Command to generate a product team viewpoint document for stakeholders on a specific topic, synthesizing research, frameworks, and strategic context from the Product Brain.

## Command Purpose

This command generates a stakeholder feedback document that presents the product team's understanding and recommendations on a specific topic. The document synthesizes information from:
- Research and insights
- Strategic frameworks and methodologies
- Business and product outcomes
- Opportunities and solutions
- Strategic focus areas and vision

## Execution Steps

### Step 1: Gather Input Parameters

1. **Get Topic**
   - Ask user for the topic or issue to address
   - Validate that topic is provided
   - Note: Topic should be specific enough to generate meaningful analysis

2. **Get Optional Parameters**
   - Ask user for target audience (optional, default: "Stakeholders")
   - Ask user for any specific context or constraints (optional)

### Step 2: Read Stakeholder Feedback Prompt

1. **Load the Prompt**
   - File: `07-reference/prompts/document-generation/stakeholder-feedback-prompt.md`
   - Purpose: Understand the analysis framework and output format
   - Action: Read and understand the prompt structure

### Step 3: Scan Product Brain Knowledge Base

Scan the following sections to gather relevant information for the topic:

1. **Strategic Context** (`01-strategy/`)
   - Read `01-strategy/strategic-focus/focus-areas.md` - Strategic focus areas
   - Read `01-strategy/vision/vision-statements.md` - Vision statements
   - Read `01-strategy/roadmap/` - Current roadmap items
   - Look for: Strategic alignment, priorities, vision context

2. **Research & Insights** (`03-discovery/`)
   - Read all files in `03-discovery/insights/` - Product insights
   - Read recent files in `03-discovery/research/` - Research documents
   - Look for: Relevant findings, customer insights, market intelligence related to the topic

3. **Opportunities & Outcomes** (`04-opportunities/`)
   - Read `04-opportunities/01-business-outcomes/` - Business outcomes
   - Read `04-opportunities/02-product-outcomes/` - Product outcomes
   - Read `04-opportunities/03-opportunities/active/` - Active opportunities
   - Read `04-opportunities/04-solutions/active/` - Solutions in development
   - Look for: Related outcomes, opportunities, and solutions

4. **Methodologies & Frameworks** (`07-reference/methodology/`)
   - Read relevant methodology files based on topic
   - Common frameworks to check:
     - `opportunity-solution-tree-guide.md` - OST framework
     - `innovation-decision-framework.md` - Innovation framework
     - `four-product-risks-framework.md` - Risk assessment
     - `discovery-process.md` - Discovery methodology
   - Look for: Relevant frameworks, decision criteria, evaluation methods

5. **Active Initiatives** (`02-initiatives/active/`)
   - Read all files in `02-initiatives/active/`
   - Look for: Related initiatives, current work, context

6. **Recent Communications** (`06-communications/`)
   - Check `06-communications/presentations/` for related presentations
   - Check `06-communications/stakeholder-updates/` for previous feedback
   - Look for: Previous viewpoints, related communications

7. **Inbox Items** (`00-inbox/`)
   - Check `00-inbox/raw/` for recent items related to the topic
   - Look for: Recent inputs, new information

### Step 4: Apply Stakeholder Feedback Prompt

1. **Apply the Prompt**
   - Use the loaded prompt from Step 2
   - Apply the topic and gathered information from Step 3
   - Synthesize information to form a coherent product team viewpoint
   - Ensure consistency with:
     - Strategic focus and vision
     - Research findings and insights
     - Frameworks and methodologies
     - Business and product outcomes

2. **Generate Viewpoint**
   - **Product Team's Understanding of the Problem:**
     - Synthesize research, insights, and context
     - Present clear problem statement
     - Include evidence and supporting information
     - Link to relevant research and insights
   - **Product Team's Recommendations:**
     - Provide clear, actionable recommendations
     - Align recommendations with strategic focus
     - Reference frameworks and methodologies
     - Link to related opportunities and solutions
     - Include rationale and expected outcomes

### Step 5: Generate Document

1. **Create Document Structure**
   - Use template: `06-communications/templates/stakeholder-feedback.md`
   - Include all required sections:
     - Document header (topic, date, audience)
     - Executive summary
     - Product team's understanding of the problem
     - Product team's recommendations
     - Strategic context
     - Supporting evidence and research
     - Related documents and links

2. **Format Document**
   - Use proper markdown formatting
   - Include links to source documents
   - Use relative paths for internal links
   - Ensure clear, stakeholder-friendly language
   - Maintain professional tone

### Step 6: Save Document

1. **Determine Filename**
   - Format: `YYYY-MM-DD-[topic-kebab-case].md`
   - Use current date in `YYYY-MM-DD` format
   - Convert topic to kebab-case for filename
   - Example: `2025-12-15-crm-platform-integration-strategy.md`

2. **Save Document**
   - Location: `06-communications/stakeholder-updates/`
   - Save the generated document
   - Verify file was created successfully

3. **Present to User**
   - Display the generated document
   - Highlight key sections
   - Offer to make edits or adjustments

## Parameters

- `topic` (required): The topic or issue to address in the stakeholder feedback
- `audience` (optional): Target audience for the feedback (default: "Stakeholders")
- `context` (optional): Additional context or constraints to consider

## Expected Output

A structured markdown document in `06-communications/stakeholder-updates/` with:
- Document header (topic, date, audience)
- Executive summary
- Product team's understanding of the problem (with evidence and research links)
- Product team's recommendations (with rationale and strategic alignment)
- Strategic context and alignment
- Supporting evidence and research references
- Related documents and links

## Example Usage

```
/generate-stakeholder-feedback

Topic: CRM platform integration strategy
Audience: Executive Team
Context: Need to address concerns about integration complexity
```

## Related Resources

- [Stakeholder Feedback Prompt](../../07-reference/prompts/document-generation/stakeholder-feedback-prompt.md) - Analysis framework
- [Stakeholder Feedback Template](../../06-communications/templates/stakeholder-feedback.md) - Document template
- [Strategic Focus Areas](../../01-strategy/strategic-focus/focus-areas.md) - Current strategic priorities
- [Research & Insights](../../03-discovery/insights/) - Product insights and research



