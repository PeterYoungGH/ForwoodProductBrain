# One-on-One Topic Suggestion Prompt

## Use Case

Use this prompt when generating relevant discussion topics for one-on-one meetings by analyzing the Product Brain knowledge base.

## Context

This prompt guides the analysis of the Product Brain to identify 3-4 key discussion topics that are relevant for a specific one-on-one participant based on their role, current priorities, and the state of product work.

## Prompt Text

Analyze the Product Brain knowledge base and suggest 3-4 key discussion topics for a one-on-one meeting with [PARTICIPANT_NAME] ([PARTICIPANT_ROLE]).

### Analysis Scope

Scan the following areas of the Product Brain:

1. **Strategic Priorities** (`01-strategy/`)
   - Current roadmap items
   - Strategic focus areas
   - Vision statements
   - Look for: priorities that need alignment, strategic decisions, vision updates

2. **Active Initiatives** (`02-initiatives/active/`)
   - Current programs and projects
   - Initiative status and blockers
   - Look for: initiatives the participant is involved in, status updates needed, resource needs

3. **Discovery & Insights** (`03-discovery/`)
   - Recent research findings
   - Customer insights
   - Market intelligence
   - Look for: insights relevant to participant's work, research that needs discussion

4. **Opportunities & Outcomes** (`04-opportunities/`)
   - Business outcomes
   - Product outcomes
   - Active opportunities
   - Solutions in development
   - Look for: outcomes the participant is responsible for, opportunities they're working on

5. **Recent Communications** (`06-communications/`)
   - Recent stakeholder updates
   - Presentation materials
   - Look for: topics that need follow-up, decisions that need discussion

6. **Inbox Items** (`00-inbox/`)
   - Items in Processing or To Do status
   - Recent insights or feedback
   - Look for: urgent items needing discussion, new information to share

### Topic Selection Criteria

For each suggested topic, consider:

1. **Relevance to Participant**
   - Does this relate to their role and responsibilities?
   - Is this something they need to know or decide on?
   - Does this impact their work or priorities?

2. **Urgency & Importance**
   - Is this time-sensitive?
   - Does this require their input or decision?
   - Is this blocking or enabling important work?

3. **Strategic Value**
   - Does this align with current strategic priorities?
   - Is this a key decision point?
   - Does this need their perspective or approval?

4. **Role-Specific Considerations**

   **For Manager (Chief Product Officer):**
   - Strategic alignment and priorities
   - Resource allocation and trade-offs
   - Cross-functional dependencies
   - High-level outcomes and metrics
   - Major decisions or blockers

   **For Product Managers:**
   - Initiative status and progress
   - Customer insights and feedback
   - Opportunity prioritization
   - Solution development progress
   - Cross-team coordination

   **For Designers:**
   - Design system updates
   - User research findings
   - Design decisions and trade-offs
   - User experience improvements
   - Design process and tools

   **For Technical Staff (Engineers, Architects):**
   - Technical decisions and architecture
   - Implementation progress and blockers
   - Technical debt and priorities
   - Platform capabilities and constraints
   - Integration and dependencies

### Output Format

For each of the 3-4 suggested topics, provide:

1. **Topic Title**: Clear, concise topic name
2. **Context**: Why this topic is relevant (1-2 sentences)
3. **Key Points**: 2-3 bullet points of what to discuss
4. **Source References**: Links to relevant Product Brain documents
5. **Suggested Discussion Questions**: 2-3 questions to guide the conversation

### Example Output Structure

```markdown
## Suggested Topics

### 1. [Topic Title]
**Context**: [Why this is relevant]
**Key Points**:
- [Point 1]
- [Point 2]
- [Point 3]
**Sources**: 
- [Link to document 1]
- [Link to document 2]
**Discussion Questions**:
- [Question 1]
- [Question 2]

### 2. [Topic Title]
...
```

## Parameters

- `participant_name`: Name of the one-on-one participant
- `participant_role`: Role type (manager, product_manager, designer, engineer, etc.)
- `focus_areas`: Optional - specific areas to focus on (e.g., "Q1 roadmap", "EDP migration", "Forwood One launch")
- `recent_timeframe`: Optional - how far back to look (default: last 30 days)

## Expected Output

A structured list of 3-4 discussion topics, each with:
- Clear title and context
- Key discussion points
- Source document references
- Suggested discussion questions
- Relevance explanation

## Related Commands

- `suggest-one-on-one-topics` - Command that uses this prompt

## Related Resources

- [One-on-One Templates](../../../06-communications/one-on-ones/templates/) - Templates for preparing one-on-one agendas
- [Strategic Roadmap](../../../01-strategy/roadmap/) - Current strategic priorities
- [Active Initiatives](../../../02-initiatives/active/) - Current work and programs

