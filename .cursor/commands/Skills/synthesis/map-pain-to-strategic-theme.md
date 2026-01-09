# Map Pain to Strategic Theme

**Category:** Synthesis
**Strategic Theme:** All Themes
**Autonomy Level:** Full
**Workflow Stages:** 2, 3, 4 (Insight Extraction, Research Synthesis, Opportunity Validation)

## Purpose

Connect customer pain points to Forwood's strategic themes to ensure work addresses real customer problems and aligns with strategic direction.

## Inputs Required

- **Pain Points:** Customer problems and frustrations
- **Strategic Themes:** Forwood's 5 strategic themes
- **VoC Evidence:** Voice of Customer data supporting themes
- **Context:** Industry and market context

## Process Steps

### Step 1: Articulate Pain Point Clearly

Format each pain point:
- **Who:** Which customer segment experiences this
- **What:** What the specific pain is
- **When:** In what context or situation
- **Impact:** How severe is the impact
- **Quote:** Customer's own words

### Step 2: Review Strategic Themes

Reference Forwood's 5 strategic themes:

**Theme 1: Fatal Risk Visibility & Governance**
- Key signals: Can't see real risk, metrics mask reality, accountability without authority
- VoC: "Green dashboards, red reality", "Delegation is not a defence"

**Theme 2: From Data Collection to Action**
- Key signals: Data overload, reports go nowhere, no follow-through
- VoC: "Drowning in data, starving for action", "Reports go into a black hole"

**Theme 3: Credibility & Trust Through Systems**
- Key signals: Seen as police, workers don't trust, blame culture
- VoC: "Credibility erosion", "Non-blame culture enables truth"

**Theme 4: Controls That Actually Work**
- Key signals: Controls satisfy audits not safety, moral injury, superficial controls
- VoC: "Controls that satisfy audits but don't prevent harm"

**Theme 5: Standardization Without Rigidity**
- Key signals: Inconsistency, context-switching, site-specific dialects
- VoC: "Non-standardisation creates real risk", "Every site is different"

### Step 3: Match Pain to Theme

For each pain point:
1. Identify primary theme alignment
2. Identify secondary theme alignment (if any)
3. Rate alignment strength
4. Document mapping rationale

### Step 4: Identify Unmapped Pain

For pain points that don't map:
- Is this a gap in strategic themes?
- Is this out of scope for current strategy?
- Should this inform theme evolution?

### Step 5: Validate Mapping

Check mapping quality:
- Does the pain directly relate to theme's core problem?
- Would solving this pain advance the theme?
- Is there VoC evidence linking pain to theme?

## Output Format

```markdown
# Pain-to-Theme Mapping: [Source/Topic]

**Date:** YYYY-MM-DD
**Pain Points Mapped:** [Count]
**Unmapped Pain Points:** [Count]

## Mapping Summary

| Pain Point | Primary Theme | Secondary | Strength |
|------------|---------------|-----------|----------|
| [Pain 1] | Theme X | Theme Y | Strong |
| [Pain 2] | Theme Y | None | Moderate |
| [Pain 3] | None | None | Unmapped |

## Detailed Mappings

### Pain Point 1: [Pain Statement]

**Who:** [Customer segment]
**What:** [Specific pain]
**When:** [Context/situation]
**Impact:** [Severity: Critical/High/Medium/Low]

**Customer Quote:**
> "[Verbatim quote]" - [Source]

**Primary Theme:** Theme X: [Theme Name]
**Alignment Strength:** [Strong | Moderate | Weak]

**Mapping Rationale:**
[Why this pain connects to this theme]

**VoC Evidence:**
- [Related VoC signal]
- [Related VoC signal]

**Secondary Theme:** Theme Y: [Theme Name] (if applicable)

### Pain Point 2: [Pain Statement]
[Same structure]

## Theme Coverage

### Theme 1: Fatal Risk Visibility & Governance
**Mapped Pain Points:** [Count]
- [Pain 1]
- [Pain 2]

**Coverage Assessment:** [Strong | Moderate | Weak | Gap]

### Theme 2: From Data Collection to Action
[Same structure for each theme]

## Unmapped Pain Points

### Pain Point X: [Statement]
**Why Unmapped:**
- [ ] Not strategic priority
- [ ] New theme candidate
- [ ] Out of scope
- [ ] Needs more research

**Recommendation:** [What to do with this pain]

## Strategic Implications

### Well-Covered Themes
- [Theme X]: Strong evidence of customer pain alignment

### Under-Covered Themes
- [Theme Y]: Limited pain points mapped; may need more research

### New Theme Candidates
- [Potential theme]: Multiple unmapped pains suggest this area

## Recommendations

1. **Prioritize:** Pain points with strong theme alignment
2. **Investigate:** Themes with weak coverage
3. **Consider:** Unmapped pains for strategy evolution

## Related Documents

- [[Strategic Roadmap]]
- [[Voice of Customer Insights]]
- [[Opportunities]]
```

## Confidence Scoring

- **High:** Clear pain-theme connection, strong VoC evidence
- **Medium:** Reasonable connection, moderate evidence
- **Low:** Tenuous connection, limited evidence

## Example

**Input:** Pain point: "Safety managers spend 60% of their time on paperwork that nobody reads."

**Output:** Mapping to Theme 2 (Data to Action) as primary - directly addresses "reports go into a black hole" VoC signal. Secondary mapping to Theme 3 (Credibility) - paperwork overhead erodes their ability to be seen as strategic partners.

## Related Skills

- [[extract-voc-themes]] - Provides VoC context
- [[consolidate-themes]] - Groups mapped pains
- [[validate-strategic-alignment]] - Validates alignment

## Used By Commands

- `agentflow.identify-opportunities` - Maps opportunity pain to themes
- `agentflow.orchestrate` - Stage 4 strategic validation


