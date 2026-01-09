# Identify Opportunities (Skills-Based)

Create and validate opportunities from insights using the skills library.

## Skills Used

This command uses skills from `.cursor/commands/Skills/`:
- `opportunity/frame-opportunity.md`
- `opportunity/calculate-jtbd-score.md`
- `opportunity/link-to-outcomes.md`
- `opportunity/validate-opportunity-format.md`
- `opportunity/prioritize-opportunities.md`
- `opportunity/generate-ost-branch.md`
- `opportunity/validate-strategic-alignment.md`

## Inputs Required

Provide one of:
- An insight document path
- A theme or pain point to explore
- "from-insights" to process unlinked insights

## Execution Flow

### Step 1: Identify Opportunity Sources
Scan insights without linked opportunities or use provided input.

### Step 2: For Each Potential Opportunity, Apply Skills

```
1. frame-opportunity → Structure as opportunity statement
2. validate-strategic-alignment → Check theme alignment
3. link-to-outcomes → Connect to product/business outcomes
4. calculate-jtbd-score → Score importance and satisfaction gap
5. validate-opportunity-format → Ensure template compliance
6. generate-ost-branch → Create OST structure with solutions
```

### Step 3: Prioritize Opportunities

```
7. prioritize-opportunities → Rank all opportunities
```

Present prioritization for human decision.

### Step 4: Create Opportunity Documents

Generate opportunity documents in `04-opportunities/03-opportunities/backlog/` with:
- Properly framed opportunity statement
- JTBD score
- Outcome links
- Strategic alignment
- Initial solution ideas

### Step 5: 🔴 Human Decision

Present prioritization for human approval:
- Which opportunities to Active
- Which to keep in Backlog
- Which to Archive

## Output Format

Creates opportunity documents following the standard template and updates kanban.

## Comparison to pm.identify-opportunities

| Aspect | pm.identify-opportunities | agentflow.identify-opportunities |
|--------|--------------------------|----------------------------------|
| Approach | Prompt-based | Skills-based |
| Scoring | Manual | calculate-jtbd-score skill |
| OST Generation | Optional | Built-in |
| Validation | Basic | Multi-skill validation |

## Example

```
@agentflow.identify-opportunities from-insights
```

Creates opportunities from all unlinked insights.


