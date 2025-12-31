# Inbox Processing Rules

Standard processing rules for inbox items in the Product Brain knowledge base. These rules are designed for Cursor's AI agent to follow, ensuring consistent, human-approved processing with mandatory human-in-the-loop for all integrations.

## Purpose

This document defines how the AI assistant (Cursor agent) should process inbox items, from initial analysis through integration and archiving. The rules ensure that:

- All integrations require explicit user approval
- Risk-based approval levels are respected
- Processing is consistent and traceable
- Human judgment is applied to consequential decisions

## Critical Principles

1. **Human-in-the-Loop is Mandatory**: The AI must NEVER automatically create, modify, or link documents without explicit user approval
2. **Always Present Choices**: The AI must present ALL potential integrations as choices for the user to select
3. **Risk-Based Approval**: Different document types have different risk levels that determine approval requirements
4. **Traceability**: All processed documents must link back to their source inbox item
5. **Consistency**: Follow established templates and formats from existing RULES.md files

## Processing Workflow Stages

### Stage 1: Raw
- Item is in `00-inbox/raw/` directory
- Item appears in Inbox kanban column
- Status: Raw
- **AI Action**: None - item is waiting for processing

### Stage 2: Processing
- User moves item to Processing kanban column
- **AI Action**: Analyze content and generate integration suggestions
- **AI Action**: Present structured choices to user for approval
- Status: Processing

### Stage 3: Integration (Optional)
- User selects which integrations to execute
- **AI Action**: Execute only selected integrations
- **AI Action**: Create/update documents and links as approved
- **AI Action**: Update index files as needed
- Status: Processing (until complete)

### Stage 4: Archive
- After integration complete OR user selects "Archive only"
- **AI Action**: Move item to `00-inbox/archive/`
- **AI Action**: Update item with processed document links
- **AI Action**: Update kanban board status
- Status: Archived

## File Naming Conventions

### Raw Items
All files added to `00-inbox/raw/` must follow this naming convention:

**Format**: `YYYY-MM-DD-descriptive-name.md`

**Rules**:
- **Date prefix**: Use the current date in `YYYY-MM-DD` format (e.g., `2025-11-28`)
- **Descriptive name**: Use kebab-case (lowercase with hyphens) for the descriptive portion
- **File extension**: Always use `.md` extension
- **Examples**:
  - `2025-11-28-steves-pitch-deck.md`
  - `2025-01-27-strategy-product-one-page-fy25-26.md`
  - `2025-11-28-client-meeting-notes.md`

**When adding raw items**:
- The AI must automatically apply the date prefix using the current date
- The descriptive name should be clear and indicate the content source or topic
- If the user provides a name, use it as the descriptive portion after the date

## Content Analysis Rules

When processing an inbox item, the AI must analyze the content to identify:

### What to Look For

1. **Objectives and Goals**
   - High-level objectives
   - Strategic goals
   - Business targets

2. **Key Results and Metrics**
   - Measurable outcomes
   - Success criteria
   - Target metrics

3. **Timelines and Roadmaps**
   - Dates and milestones
   - Quarterly plans
   - Project timelines

4. **Strategic Elements**
   - Strategic principles
   - Focus areas
   - Vision statements

5. **Outcomes**
   - Business outcomes
   - Product outcomes
   - Customer outcomes

6. **Opportunities**
   - Customer needs
   - Pain points
   - Market opportunities

7. **Solutions and Features**
   - Proposed solutions
   - Feature ideas
   - Technical approaches

8. **Research and Discovery**
   - Research findings
   - User insights
   - Data analysis

9. **Initiatives**
   - Strategic initiatives
   - Programs of work
   - Cross-functional projects

10. **Communications**
    - Presentation needs
    - Stakeholder updates
    - Documentation requirements

### Mapping to Product Brain Structure

Map identified content to the appropriate sections with risk levels:

#### HIGH RISK (Always require explicit approval)
- **Strategy** (`01-strategy/`)
  - Roadmap updates (`roadmap/current-roadmap.md`)
  - Strategic focus areas (`strategic-focus/focus-areas.md`)
  - Vision statements (`vision/vision-statements.md`)
- **Initiatives** (`02-initiatives/`)
  - New initiatives (`active/`, `planned/`)
  - Initiative updates

#### MEDIUM RISK (Always require explicit approval)
- **Business Outcomes** (`04-opportunities/01-business-outcomes/`)
  - New business outcomes
  - Updates to existing business outcomes
- **Product Outcomes** (`04-opportunities/02-product-outcomes/`)
  - New product outcomes
  - Updates to existing product outcomes
- **Opportunities** (`04-opportunities/03-opportunities/`)
  - New opportunities
  - Updates to existing opportunities
- **Research/Discovery** (`03-discovery/`)
  - Research documents
  - Insights
  - Experiments documentation

#### LOW RISK (Present choices, but can be streamlined)
- **Solutions** (`04-opportunities/04-solutions/`)
  - New solutions
  - Solution updates
- **Experiments** (`04-opportunities/05-experiments/`)
  - New experiments
  - Experiment updates
- **Communications** (`05-communications/`)
  - Presentations
  - Stakeholder updates

## Risk-Based Approval Requirements

### HIGH RISK Items
**Categories**: Strategy, Initiatives

**Requirements**:
- MUST present as choices for user approval
- MUST clearly indicate risk level (HIGH)
- MUST provide detailed description of what will be created/modified
- MUST show impact on existing documents
- User must explicitly select each action

**Rationale**: Strategy and initiatives are consequential decisions that affect product direction and resource allocation.

### MEDIUM RISK Items
**Categories**: Business Outcomes, Product Outcomes, Opportunities, Research/Discovery

**Requirements**:
- MUST present as choices for user approval
- MUST clearly indicate risk level (MEDIUM)
- MUST provide description of what will be created/modified
- MUST show links to related documents
- User must explicitly select each action

**Rationale**: Outcomes and opportunities drive product decisions and require alignment with strategic goals.

### LOW RISK Items
**Categories**: Solutions, Experiments, Communications

**Requirements**:
- Present as choices for user approval
- Clearly indicate risk level (LOW)
- Provide description of what will be created/modified
- Can be presented in a more streamlined format
- User must explicitly select each action

**Rationale**: Solutions and experiments are more tactical and can be adjusted more easily.

### Risk Level Configuration

Risk levels are defined in this section and may be updated over time. To change risk levels:

1. Update the "Mapping to Product Brain Structure" section
2. Update the "Risk-Based Approval Requirements" section
3. Document the change and rationale

## Integration Suggestion Framework

### How to Identify Integration Points

1. **Read the inbox item content thoroughly**
   - Understand the full context
   - Identify all potential integration points
   - Note relationships between different elements

2. **Scan existing Product Brain structure**
   - Check for existing documents that might be updated
   - Identify where new documents should be created
   - Look for related documents that should be linked

3. **Map content to document types**
   - Determine which templates to use
   - Identify required vs. optional sections
   - Note any special formatting requirements

4. **Identify link opportunities**
   - Link new documents to existing outcomes
   - Link outcomes to opportunities
   - Link opportunities to solutions
   - Link all documents back to source inbox item

### Types of Integration Actions

1. **Create New Document**
   - Use appropriate template from `06-reference/templates/`
   - Place in correct directory based on document type
   - Follow format rules from relevant RULES.md file

2. **Update Existing Document**
   - Identify what needs to be updated
   - Preserve existing content
   - Add new content in appropriate sections
   - Update "Last Updated" date

3. **Create Link**
   - Add link in "Related Documents" or appropriate section
   - Use relative paths
   - Update both documents (bidirectional links where appropriate)

4. **Update Index File**
   - Add entry to relevant index.md file
   - Follow existing index format
   - Include required metadata

### Suggestion Format

Present each integration suggestion with:

- **Risk Level**: HIGH / MEDIUM / LOW
- **Action Type**: Create new / Update existing / Create link / Update index
- **Document Type**: Strategy / Initiative / Business Outcome / etc.
- **Target Location**: Full path to file
- **Description**: What will be done (2-3 sentences)
- **Impact**: What existing documents/links will be affected
- **Template**: Which template will be used (if creating new)
- **Decision Criteria**: Relevant decision criteria from decision framework (if applicable)

## User Choice Presentation Format

### Required Structure

Present integration suggestions in the following format, organized by risk level:

```markdown
## Integration Suggestions

### HIGH RISK Items

- [ ] **[HIGH RISK] Create new**: Strategy Document
  - **Location**: `01-strategy/roadmap/current-roadmap.md`
  - **Action**: Create new roadmap document with Q1-Q4 milestones from inbox item
  - **Impact**: Will become the active roadmap, may need to archive existing roadmap
  - **Template**: Use roadmap format from strategy section

- [ ] **[HIGH RISK] Update existing**: Strategic Focus Areas
  - **Location**: `01-strategy/strategic-focus/focus-areas.md`
  - **Action**: Add new strategic pillars (Focus, Team Capability, Customer Connection, etc.)
  - **Impact**: Updates strategic focus document
  - **Template**: N/A (updating existing)

### MEDIUM RISK Items

- [ ] **[MEDIUM RISK] Create new**: Business Outcome
  - **Location**: `04-opportunities/01-business-outcomes/oculus-platform-launch.md`
  - **Action**: Create business outcome for "Launch Forwood One and win 5 new deals"
  - **Impact**: New business outcome, will need to link to product outcomes
  - **Template**: `06-reference/templates/` (use business outcome format from RULES.md)

### LOW RISK Items

- [ ] **[LOW RISK] Create new**: Solution Document
  - **Location**: `04-opportunities/04-solutions/active/oculus-mvp.md`
  - **Action**: Document Forwood One MVP solution
  - **Impact**: New solution document
  - **Template**: Solution template

### Archive Only

- [ ] **Archive only (no integration)**: Keep raw data for reference but don't integrate at this time
```

### Presentation Guidelines

1. **Group by Risk Level**: Present HIGH RISK first, then MEDIUM, then LOW
2. **Use Checkboxes**: Each option must be a checkbox the user can select
3. **Clear Descriptions**: Each option must clearly describe what will happen
4. **Show Impact**: Indicate what existing documents will be affected
5. **Include Archive Option**: Always include "Archive only" as an option
6. **Number of Options**: Present ALL potential integrations - don't filter or prioritize

### Handling User Selections

1. **Partial Selection**: Only execute the options the user has checked
2. **No Selection**: If user selects nothing, ask for clarification or offer to archive only
3. **Archive Only**: If user selects only "Archive only", skip integration and move to archive
4. **Confirmation**: Before executing, confirm what will be done based on selections

## Integration Execution Rules

### Pre-Execution Checklist

Before executing any integration:

- [ ] User has explicitly selected options
- [ ] All selected options are clearly understood
- [ ] Templates are identified and available
- [ ] Target locations are valid
- [ ] Risk levels have been respected

### Creating New Documents

1. **Use Appropriate Template**
   - Reference templates in `06-reference/templates/`
   - Follow format rules from relevant RULES.md file
   - Include all required sections

2. **Set Metadata**
   - Created date: Current date (YYYY-MM-DD)
   - Last Updated: Current date (YYYY-MM-DD)
   - Status: Appropriate status (Active/Planned/etc.)

3. **Extract Content from Inbox Item**
   - Pull relevant content from "Original Content" section
   - Transform content to match template format
   - Preserve original meaning and context

4. **Create Links**
   - Link to related documents (outcomes, opportunities, etc.)
   - Link back to source inbox item
   - Use relative paths

5. **Place in Correct Location**
   - Use correct directory based on document type
   - Follow naming conventions (kebab-case, descriptive names)

6. **Update Index Files**
   - Add entry to relevant index.md file
   - Follow existing index format
   - Include required metadata

### Updating Existing Documents

1. **Read Existing Document First**
   - Understand current content
   - Identify what needs to be updated
   - Preserve existing structure

2. **Make Updates**
   - Add new content in appropriate sections
   - Update relevant metadata
   - Update "Last Updated" date

3. **Maintain Links**
   - Add new links as needed
   - Preserve existing links
   - Update bidirectional links

4. **Preserve History**
   - Don't delete existing content unless explicitly replacing it
   - Add new content alongside existing content
   - Note what was added/updated

### Creating Links

1. **Identify Link Locations**
   - Source document (where link will be added)
   - Target document (what is being linked to)
   - Appropriate section in source document

2. **Add Link**
   - Use relative path from source to target
   - Use descriptive link text (document name)
   - Place in appropriate section (Related Documents, Related Outcomes, etc.)

3. **Bidirectional Links** (where appropriate)
   - Add link in both documents
   - Ensure both links work correctly

### Traceability Requirements

Every processed document MUST:

1. **Link Back to Source**
   - Add link to source inbox item in "Related Documents" or "Source" section
   - Format: `[Inbox Item: Title](../00-inbox/archive/YYYY-MM-DD-source-topic.md)`

2. **Document Processing Date**
   - Note when document was created/updated from inbox item
   - Include in metadata or notes section

3. **Preserve Context**
   - Include relevant context from inbox item
   - Note any assumptions or interpretations made

### Execution Confirmation

After executing integrations:

1. **List What Was Done**
   - Document each action taken
   - Show file paths of created/updated documents
   - Note any links created

2. **Update Inbox Item**
   - Add processed documents to "Processed Documents" section
   - Include links to all created/updated documents
   - Update processing notes

3. **Verify Completeness**
   - Check that all selected options were executed
   - Verify links are working
   - Confirm documents follow templates and rules

## Archive Process

### When to Archive

Archive an inbox item when:

1. **Integration Complete**: All selected integrations have been executed
2. **Archive Only Selected**: User selected "Archive only" option
3. **User Requests Archive**: User explicitly requests archiving

### Archive Steps

1. **Update Inbox Item**
   - Add "Archive Date" with current date (YYYY-MM-DD)
   - Ensure "Processed Documents" section is complete with all links
   - Add any final processing notes

2. **Move to Archive**
   - Move file from `00-inbox/raw/` to `00-inbox/archive/`
   - Preserve original filename
   - Maintain file structure

3. **Update Kanban Board**
   - Remove item from Processing column
   - Move to Archived/No Action column (or remove from board)
   - Update status in item metadata if applicable

4. **Verify Links**
   - Ensure all processed documents link back to archived item
   - Verify archived item links to all processed documents
   - Test that links work correctly

### Archive Naming

- Preserve original filename when moving to archive
- Original naming convention: `YYYY-MM-DD-source-topic.md`
- Archive location: `00-inbox/archive/YYYY-MM-DD-source-topic.md`

### What to Preserve

In the archived item, preserve:

1. **Original Content**: Complete "Original Content" section
2. **Context**: All context and observations
3. **Processing Notes**: All notes from processing
4. **Processed Documents**: Complete list with links
5. **Archive Date**: When it was archived

## Templates and Format Rules

### Reference Existing Rules

When creating/updating documents, follow format rules from:

- Business Outcomes: `04-opportunities/01-business-outcomes/RULES.md`
- Product Outcomes: `04-opportunities/02-product-outcomes/RULES.md`
- Opportunities: `04-opportunities/03-opportunities/RULES.md`
- Solutions: `04-opportunities/04-solutions/RULES.md` (if exists)
- Experiments: `04-opportunities/05-experiments/RULES.md` (if exists)

### Use Templates

Reference templates from:

- `06-reference/templates/initiative-template.md`
- `06-reference/templates/opportunity-template.md`
- `06-reference/templates/solution-template.md`
- `06-reference/templates/research-template.md`

### Link Patterns

Use relative paths for all links:

- From `04-opportunities/01-business-outcomes/` to `02-product-outcomes/`: `../02-product-outcomes/outcome-name.md`
- From `04-opportunities/03-opportunities/` to `01-business-outcomes/`: `../01-business-outcomes/outcome-name.md`
- From any document to inbox archive: `../../00-inbox/archive/YYYY-MM-DD-source-topic.md`

## Validation Checklist

Before considering processing complete, verify:

- [ ] All user-selected options have been executed
- [ ] All new documents follow appropriate templates and RULES.md
- [ ] All documents have required metadata (Status, Created, Last Updated)
- [ ] All links use correct relative paths
- [ ] All processed documents link back to source inbox item
- [ ] All index files have been updated
- [ ] Inbox item has been updated with processed document links
- [ ] Archive process has been completed
- [ ] Kanban board has been updated
- [ ] No automatic actions were taken without user approval

## Example Processing Workflow

### Step 1: User Moves Item to Processing
User moves inbox item from "Inbox" to "Processing" column in kanban board.

### Step 2: AI Analyzes Content
AI reads inbox item, analyzes content, scans existing Product Brain structure, identifies integration points.

### Step 3: AI Presents Choices
AI presents structured integration suggestions organized by risk level with checkboxes.

### Step 4: User Selects Options
User reviews suggestions and checks boxes for options they want to execute.

### Step 5: AI Executes Selected Options
AI creates/updates documents, creates links, updates index files - only for selected options.

### Step 6: AI Confirms Completion
AI lists what was done, updates inbox item with processed document links.

### Step 7: User Approves Archive
User confirms processing is complete.

### Step 8: AI Archives Item
AI moves item to archive, updates kanban board, verifies links.

## Common Scenarios

### Scenario 1: Strategy Document
- **Risk Level**: HIGH
- **Actions**: Likely create/update roadmap, strategic focus, possibly initiatives
- **Approval**: Required for all actions
- **Templates**: Roadmap format, strategic focus format

### Scenario 2: Customer Feedback
- **Risk Level**: MEDIUM (if creating opportunities) or LOW (if just documenting)
- **Actions**: May create opportunities, research documents, or just archive
- **Approval**: Required for opportunities, optional for simple documentation

### Scenario 3: Feature Request
- **Risk Level**: LOW to MEDIUM
- **Actions**: May create solution, opportunity, or experiment
- **Approval**: Required, but can be streamlined for solutions

### Scenario 4: Research Findings
- **Risk Level**: MEDIUM
- **Actions**: Create research document, possibly link to opportunities
- **Approval**: Required for research documents and links

## Notes

- These rules are designed to be followed by Cursor's AI agent
- Risk levels may be updated over time based on organizational needs
- Always err on the side of presenting choices rather than making assumptions
- When in doubt, ask the user for clarification
- Consistency is key - follow templates and existing patterns

## Related Documents

- [Inbox README](./README.md) - Workflow overview
- [Business Outcomes RULES](../04-opportunities/01-business-outcomes/RULES.md) - Format rules
- [Product Outcomes RULES](../04-opportunities/02-product-outcomes/RULES.md) - Format rules
- [Opportunities RULES](../04-opportunities/03-opportunities/RULES.md) - Format rules
- [OST Methodology Guide](../06-reference/methodology/opportunity-solution-tree-guide.md) - Framework overview

