# Suggest One-on-One Topics

Command to analyze the Product Brain and suggest 3-4 relevant discussion topics for one-on-one meetings.

## Command Purpose

This command scans the entire Product Brain knowledge base to identify and suggest 3-4 key discussion topics for a one-on-one meeting. The topics are tailored based on:
- The participant's role (manager, team member, designer, engineer, etc.)
- Current strategic priorities and active initiatives
- Recent discoveries, insights, and opportunities
- Urgent items or blockers requiring discussion

## Execution Steps

### Step 1: Gather Input Parameters

1. **Get Participant Information**
   - Ask user for participant name (e.g., "Chief Product Officer", "Sarah", "Design Lead")
   - Ask user for participant role type:
     - `manager` - For one-on-ones with your manager
     - `product_manager` - For one-on-ones with product managers
     - `designer` - For one-on-ones with designers
     - `engineer` - For one-on-ones with engineers/technical staff
     - `other` - For other roles (specify)
   - Ask user for optional focus areas (e.g., "Q1 roadmap", "EDP migration", "Forwood One launch")
   - Ask user for optional recent timeframe (default: last 30 days)

2. **Validate Input**
   - Ensure participant name is provided
   - Ensure participant role is provided and valid
   - Set defaults for optional parameters if not provided

### Step 2: Read Topic Suggestion Prompt

1. **Load the Prompt**
   - File: `07-reference/prompts/one-on-ones/one-on-one-topic-suggestion-prompt.md`
   - Purpose: Understand the analysis framework and output format
   - Action: Read and understand the prompt structure

### Step 3: Scan Product Brain Knowledge Base

Scan the following sections to gather relevant information:

1. **Strategic Priorities** (`01-strategy/`)
   - Read `01-strategy/roadmap/` - Current roadmap items
   - Read `01-strategy/strategic-focus/focus-areas.md` - Strategic focus areas
   - Read `01-strategy/vision/vision-statements.md` - Vision statements
   - Look for: Priorities needing alignment, strategic decisions, vision updates

2. **Active Initiatives** (`02-initiatives/active/`)
   - List and read all files in `02-initiatives/active/`
   - Extract: Initiative status, blockers, resource needs, key decisions
   - Look for: Initiatives the participant is involved in or should know about

3. **Discovery & Insights** (`03-discovery/`)
   - Read recent files in `03-discovery/insights/` (within timeframe)
   - Read recent files in `03-discovery/research/` (within timeframe)
   - Extract: Recent findings, customer insights, market intelligence
   - Look for: Insights relevant to participant's work

4. **Opportunities & Outcomes** (`04-opportunities/`)
   - Read `04-opportunities/01-business-outcomes/` - Active business outcomes
   - Read `04-opportunities/02-product-outcomes/` - Active product outcomes
   - Read `04-opportunities/03-opportunities/active/` - Active opportunities
   - Read `04-opportunities/04-solutions/active/` - Solutions in development
   - Extract: Outcomes participant is responsible for, opportunities they're working on

5. **Recent Communications** (`06-communications/`)
   - Check `06-communications/stakeholder-updates/` for recent updates
   - Check `06-communications/presentations/` for recent presentations
   - Look for: Topics needing follow-up, decisions needing discussion

6. **Inbox Items** (`00-inbox/`)
   - Check `00-inbox/raw/` for items in Processing or To Do status
   - Read recent inbox items (within timeframe)
   - Look for: Urgent items needing discussion, new information to share

### Step 4: Apply Topic Suggestion Prompt

1. **Apply the Prompt**
   - Use the loaded prompt from Step 2
   - Apply participant information and role-specific considerations
   - Analyze gathered information from Step 3
   - Filter and prioritize topics based on:
     - Relevance to participant's role
     - Urgency and importance
     - Strategic value
     - Role-specific considerations (see prompt)

2. **Generate Topic Suggestions**
   - Identify 3-4 key discussion topics
   - For each topic, provide:
     - Clear topic title
     - Context (why it's relevant)
     - 2-3 key discussion points
     - Source document references (links to Product Brain files)
     - 2-3 suggested discussion questions

### Step 5: Format and Present Results

1. **Format Output**
   - Structure as markdown with clear sections
   - Include participant information at the top
   - List each topic with all required elements
   - Include links to source documents
   - Add a summary section if helpful

2. **Present to User**
   - Display the formatted topic suggestions
   - Highlight the most important/urgent topics
   - Provide context for why each topic was selected
   - Offer to create a one-on-one agenda using the suggestions

### Step 6: Optional - Create One-on-One Agenda

If user requests, create a prepared one-on-one agenda:

1. **Select Appropriate Template**
   - Manager one-on-ones: `06-communications/one-on-ones/templates/manager-one-on-one.md`
   - Team member one-on-ones: `06-communications/one-on-ones/templates/team-member-one-on-one.md`

2. **Populate Template**
   - Add suggested topics to the agenda section
   - Include participant name and date
   - Add any additional items user wants to discuss
   - Save in `06-communications/one-on-ones/prepared/`
   - Filename: `YYYY-MM-DD-one-on-one-[participant-name].md`

## Parameters

- `participant_name` (required): Name of the one-on-one participant
- `participant_role` (required): Role type (manager, product_manager, designer, engineer, other)
- `focus_areas` (optional): Specific areas to focus on (e.g., "Q1 roadmap", "EDP migration")
- `recent_timeframe` (optional): How far back to look (default: 30 days)

## Expected Output

A structured markdown document with:
- Participant information
- 3-4 suggested discussion topics, each with:
  - Topic title
  - Context and relevance
  - Key discussion points
  - Source document references
  - Suggested discussion questions
- Optional: Prepared one-on-one agenda template

## Example Usage

```
/suggest-one-on-one-topics

Participant: Chief Product Officer
Role: manager
Focus Areas: Q1 roadmap, Forwood One launch
```

## Related Resources

- [One-on-One Topic Suggestion Prompt](../../07-reference/prompts/one-on-ones/one-on-one-topic-suggestion-prompt.md) - Analysis framework
- [One-on-One Templates](../../06-communications/one-on-ones/templates/) - Templates for preparing agendas
- [Strategic Roadmap](../../01-strategy/roadmap/) - Current strategic priorities
- [Active Initiatives](../../02-initiatives/active/) - Current work and programs

