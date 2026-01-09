# Write PRD Section

**Category:** Solution
**Strategic Theme:** N/A
**Autonomy Level:** Supervised
**Workflow Stages:** 5 (Solution Exploration)

## Purpose

Generate Product Requirements Document sections from requirements, ensuring clear communication of what needs to be built.

## Inputs Required

- **Solution:** The solution being specified
- **Requirements:** User requirements and constraints
- **Context:** Opportunity, user research, constraints
- **PRD Template:** Standard PRD format

## Process Steps

### Step 1: Identify PRD Section

Determine which section to write:
- Problem Statement
- Goals & Success Metrics
- User Stories
- Functional Requirements
- Non-Functional Requirements
- User Experience
- Technical Considerations
- Dependencies
- Risks & Mitigations
- Timeline & Milestones

### Step 2: Gather Section-Specific Inputs

For each section type:

**Problem Statement:**
- Opportunity document
- User research
- Pain point evidence

**Goals & Success Metrics:**
- Product outcomes
- Business outcomes
- OKRs

**Functional Requirements:**
- User stories
- Acceptance criteria
- Feature list

**Non-Functional Requirements:**
- Performance requirements
- Security requirements
- Accessibility requirements

### Step 3: Write Section Content

Follow PRD writing best practices:
- Be specific and unambiguous
- Use measurable criteria
- Avoid implementation details (unless technical spec)
- Focus on "what" not "how"
- Include acceptance criteria

### Step 4: Validate Section

Check the section:
- Is it complete for the section type?
- Is it consistent with other sections?
- Is it testable/measurable?
- Is it clear to all readers?

### Step 5: Add Cross-References

Link to:
- Related PRD sections
- Source requirements
- Design documents
- Technical specs

## Output Format

### Problem Statement Section

```markdown
## Problem Statement

### Background
[Context about the current situation]

### Problem
[Clear statement of the problem]

### Impact
[What happens if we don't solve this]

### Opportunity
[Link to opportunity: [[opportunity]]]

### Evidence
[Key evidence supporting this problem]
```

### Goals & Success Metrics Section

```markdown
## Goals & Success Metrics

### Primary Goal
[What we're trying to achieve]

### Success Metrics

| Metric | Current | Target | Timeline |
|--------|---------|--------|----------|
| [Metric 1] | [Baseline] | [Target] | [When] |
| [Metric 2] | [Baseline] | [Target] | [When] |

### Leading Indicators
- [Indicator 1]
- [Indicator 2]

### Anti-Goals (Out of Scope)
- [What we're NOT trying to do]
```

### Functional Requirements Section

```markdown
## Functional Requirements

### Feature: [Feature Name]

#### Description
[What this feature does]

#### User Stories
- As a [user], I want to [action] so that [benefit]

#### Requirements

| ID | Requirement | Priority | Status |
|----|-------------|----------|--------|
| FR-001 | [Requirement] | [Must/Should/Could] | [New] |
| FR-002 | [Requirement] | [Must/Should/Could] | [New] |

#### Acceptance Criteria
- [ ] [Criterion 1]
- [ ] [Criterion 2]

#### Dependencies
- [Dependency 1]
```

### Non-Functional Requirements Section

```markdown
## Non-Functional Requirements

### Performance
| Requirement | Target | Measurement |
|-------------|--------|-------------|
| [Req] | [Target] | [How measured] |

### Security
- [Security requirement 1]
- [Security requirement 2]

### Accessibility
- [Accessibility requirement 1]

### Scalability
- [Scalability requirement]

### Reliability
- [Uptime/reliability target]
```

### User Experience Section

```markdown
## User Experience

### User Flows
[Description or link to user flow diagrams]

### Key Screens/Interactions
[Description of main interactions]

### Design Principles
- [Principle 1]
- [Principle 2]

### Accessibility Considerations
- [Consideration 1]

### Related Designs
- [[Wireframes]]
- [[Mockups]]
```

## Confidence Scoring

- **High:** Complete section, clear requirements, validated
- **Medium:** Mostly complete, some gaps
- **Low:** Partial section, needs more input

## Example

**Input:** Solution for fatal risk visibility dashboard, need to write Goals section.

**Output:** Complete Goals & Success Metrics section with primary goal of "Enable executives to identify top 5 fatal risk areas in under 30 seconds", with metrics for dashboard adoption, time-to-insight, and action rate.

## Related Skills

- [[define-acceptance-criteria]] - Creates acceptance criteria
- [[create-user-stories]] - Creates user stories
- [[describe-wireframe]] - Creates UX specifications

## Used By Commands

- `agentflow.assess-solutions` - Specification support
- `agentflow.orchestrate` - Stage 5 PRD generation


