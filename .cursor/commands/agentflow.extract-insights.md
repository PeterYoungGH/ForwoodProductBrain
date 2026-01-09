# Extract Insights (Skills-Based)

Extract insights from research documents using the skills library for finding, pattern detection, and synthesis.

## Skills Used

This command uses skills from `.cursor/commands/Skills/`:
- `synthesis/extract-key-findings.md`
- `synthesis/identify-patterns.md`
- `synthesis/cross-reference-sources.md`
- `synthesis/create-insight-summary.md`
- `synthesis/consolidate-themes.md`
- `synthesis/map-pain-to-strategic-theme.md`
- `research/extract-voc-themes.md`

## Inputs Required

Provide one of:
- A research document path
- A directory to scan for research documents
- "all" to process all unprocessed research

## Execution Flow

### Step 1: Identify Research to Process
Scan `03-discovery/research/` for documents without corresponding insights.

### Step 2: For Each Document, Apply Skills

```
1. extract-key-findings → Pull key findings with evidence
2. identify-patterns → Find patterns across findings
3. map-pain-to-strategic-theme → Connect to strategic themes
4. extract-voc-themes → Extract VoC themes if customer data
5. create-insight-summary → Synthesize into insight document
```

### Step 3: Cross-Reference (if multiple sources)

If processing multiple documents:
```
6. cross-reference-sources → Validate across sources
7. consolidate-themes → Group into coherent themes
```

### Step 4: Create Insight Documents

Generate insight documents in `03-discovery/insights/` with:
- Extracted findings
- Pattern analysis
- Theme alignment
- Strategic implications
- Suggested next steps

## Output Format

Creates insight documents following the standard template with:
- Frontmatter with metadata
- Key findings with evidence
- Pattern analysis
- Strategic theme mapping
- Recommended actions

## Comparison to pm.extract-insights

| Aspect | pm.extract-insights | agentflow.extract-insights |
|--------|---------------------|---------------------------|
| Approach | Prompt-based | Skills-based |
| Theme Mapping | Optional | Built-in |
| Cross-Reference | Manual | Automatic for multiple |
| Pattern Detection | Basic | Skill-powered |

## Example

```
@agentflow.extract-insights 03-discovery/research/user-research/
```

Extracts insights from all user research documents.


