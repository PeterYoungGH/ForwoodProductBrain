# Assess Solutions (Skills-Based)

Evaluate solutions using the Four Risks framework via the skills library.

## Skills Used

This command uses skills from `.cursor/commands/Skills/`:
- `solution/generate-solution-options.md`
- `solution/assess-four-risks.md`
- `solution/compare-solutions.md`
- `solution/create-user-stories.md`
- `solution/define-acceptance-criteria.md`
- `solution/write-prd-section.md`
- `opportunity/validate-strategic-alignment.md`
- `validation/design-experiment.md`

## Inputs Required

Provide one of:
- An opportunity document path
- A solution document to assess
- "active-opportunities" to find opportunities needing solutions

## Execution Flow

### Step 1: Identify Solutions to Assess
Find opportunities in Active without assessed solutions, or use provided input.

### Step 2: Generate Solution Options (if needed)

If no solutions exist:
```
1. generate-solution-options → Brainstorm 3-5 options
```

### Step 3: For Each Solution, Apply Skills

```
2. assess-four-risks → Evaluate Value, Usability, Feasibility, Viability
3. validate-strategic-alignment → Check theme alignment
```

### Step 4: Compare and Select

If multiple solutions:
```
4. compare-solutions → Trade-off analysis
```

### Step 5: Design Validation

For selected solution(s):
```
5. design-experiment → Create validation experiment
```

### Step 6: Generate Specifications (optional)

If solution is selected:
```
6. create-user-stories → Generate user stories
7. define-acceptance-criteria → Create AC for stories
8. write-prd-section → Generate PRD sections
```

### Step 7: 🔴 Human Decision

Present assessment for human decision:
- Which solution(s) to pursue
- Whether to experiment first
- Whether to proceed to build

## Output Format

Updates solution documents with:
- Four Risks assessment
- Strategic alignment
- Comparison (if multiple)
- Experiment design
- Specification artifacts

## Comparison to pm.apply-decision-framework

| Aspect | pm.apply-decision-framework | agentflow.assess-solutions |
|--------|----------------------------|---------------------------|
| Approach | Prompt-based | Skills-based |
| Options | Apply any framework | Four Risks focused |
| Specs | Not included | Optional story/AC generation |
| Experiments | Manual | Built-in design |

## Example

```
@agentflow.assess-solutions 04-opportunities/03-opportunities/active/mobile-ux.md
```

Assesses or generates solutions for the mobile UX opportunity.


