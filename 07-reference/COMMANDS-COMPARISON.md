# Commands Comparison: pm.xxx vs agentflow.xxx

This document compares the legacy `pm.xxx` commands with the new skills-based `agentflow.xxx` commands to help you choose the right approach for your workflow.

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                     PARALLEL SYSTEMS                            │
├────────────────────────────┬────────────────────────────────────┤
│ Legacy (pm.xxx)            │ New (agentflow.xxx)                │
├────────────────────────────┼────────────────────────────────────┤
│ Commands → Prompts         │ Commands → Skills → Prompts       │
│ Monolithic execution       │ Composable skill chains           │
│ Fixed workflow             │ Dynamic skill selection           │
│ Manual decisions           │ Confidence-based auto-decisions   │
└────────────────────────────┴────────────────────────────────────┘
```

## Quick Comparison

| Aspect | pm.xxx | agentflow.xxx |
|--------|--------|---------------|
| **Approach** | Prompt-based | Skills-based |
| **Modularity** | Low | High |
| **Customization** | Limited | Swap/modify skills |
| **Decision Mode** | All manual | Confidence-based |
| **Batch Processing** | No | Yes |
| **Learning Curve** | Lower | Moderate |
| **Stability** | Proven | Experimental |

## Command-by-Command Comparison

### Inbox Processing

| Feature | `pm.process-inbox-todo` | `agentflow.process-inbox` |
|---------|------------------------|---------------------------|
| Classification | Single pass | Multi-skill chain |
| Risk Assessment | Basic | Skill with policy |
| Routing | Rule-based | Skill with duplicates check |
| Action Items | Included | Separate skill |
| Batch Approval | No | Yes (LOW risk) |
| Customization | Prompt edit | Skill swap/modify |

**When to use pm.xxx:** Simple inbox with few items, want predictable behavior.
**When to use agentflow.xxx:** Large inbox, want batch processing, need customization.

---

### Insight Extraction

| Feature | `pm.extract-insights` | `agentflow.extract-insights` |
|---------|----------------------|------------------------------|
| Pattern Detection | Basic | Dedicated skill |
| Theme Mapping | Manual | Built-in skill |
| Cross-Reference | Not included | Automatic for multiple |
| VoC Themes | Separate | Integrated |
| Output | Single format | Skill chain output |

**When to use pm.xxx:** Single document, straightforward extraction.
**When to use agentflow.xxx:** Multiple sources, need theme mapping, VoC analysis.

---

### Research Synthesis

| Feature | `pm.synthesize-research` | `agentflow.extract-insights` (multi) |
|---------|-------------------------|--------------------------------------|
| Source Handling | Sequential | Skill chain |
| Cross-Reference | Basic | Dedicated skill |
| Evidence Chains | Not included | Built-in skill |
| Theme Consolidation | Manual | Skill-based |

**When to use pm.xxx:** Straightforward synthesis of 2-3 sources.
**When to use agentflow.xxx:** Complex synthesis, need evidence chains.

---

### Opportunity Identification

| Feature | `pm.identify-opportunities` | `agentflow.identify-opportunities` |
|---------|----------------------------|-----------------------------------|
| Framing | Prompt-guided | Dedicated skill |
| JTBD Scoring | Manual | Skill-calculated |
| OST Generation | Not included | Built-in skill |
| Prioritization | Manual | Skill + policy |
| Validation | Basic | Multi-skill validation |

**When to use pm.xxx:** Quick opportunity capture, informal process.
**When to use agentflow.xxx:** Formal process, need scoring, OST structure.

---

### Solution Assessment

| Feature | `pm.apply-decision-framework` | `agentflow.assess-solutions` |
|---------|------------------------------|------------------------------|
| Framework | Any (flexible) | Four Risks (focused) |
| Option Generation | Not included | Built-in skill |
| Comparison | Manual | Skill-powered |
| Experiment Design | Separate | Integrated |
| Specifications | Not included | Optional story/AC generation |

**When to use pm.xxx:** Applying any framework flexibly.
**When to use agentflow.xxx:** Four Risks focused, want full solution flow.

---

### Workflow Orchestration

| Feature | `pm.orchestrate-workflow` | `agentflow.orchestrate` | `agentflow.autonomous` |
|---------|--------------------------|------------------------|------------------------|
| Stage Detection | Fixed commands | Skill-based | Skill-based |
| Skill Selection | N/A | Dynamic | Dynamic |
| Human Stops | Fixed stages | Decision points | Confidence-based |
| Batch Decisions | No | No | Yes |
| State Management | Basic | Skill-powered | Skill-powered |
| Reconciliation | Manual | Built-in skill | Built-in skill |

**When to use pm.xxx:** Known workflow, want predictable steps.
**When to use agentflow.orchestrate:** Skills-based but full human control.
**When to use agentflow.autonomous:** Minimal oversight, trust auto-decisions.

---

## Decision Matrix

### Use pm.xxx when:
- ✅ You want proven, stable behavior
- ✅ You have a simple, single-step task
- ✅ You prefer direct control over each step
- ✅ You're learning the system
- ✅ You need to run a specific framework (not Four Risks)

### Use agentflow.xxx when:
- ✅ You want skills-based modularity
- ✅ You're processing multiple items
- ✅ You want batch approval for routine decisions
- ✅ You need theme mapping and VoC integration
- ✅ You want confidence-based auto-decisions

### Use agentflow.autonomous when:
- ✅ You trust the system for LOW risk decisions
- ✅ You're processing large volumes
- ✅ You want minimal interruption
- ✅ You've validated the system behavior
- ✅ You review auto-decisions periodically

---

## Migration Path

Both systems coexist indefinitely. If you want to migrate:

### Phase 1: Parallel Use
- Use `pm.xxx` for critical work
- Use `agentflow.xxx` for experimental/learning
- Compare outputs

### Phase 2: Gradual Shift
- Start using `agentflow.xxx` for routine work
- Keep `pm.xxx` for edge cases
- Build confidence in skill system

### Phase 3: Primary Agentflow
- Use `agentflow.xxx` as default
- Fall back to `pm.xxx` when needed
- Consider `agentflow.autonomous` for volume

### Phase 4: Optional Consolidation
- If agentflow proves superior, consider updating pm.xxx to use skills internally
- Or maintain both systems for flexibility

---

## Skill Customization

The key advantage of `agentflow.xxx` is skill customization:

### Modify a Skill
Edit the skill file in `.cursor/commands/Skills/[category]/[skill].md`

### Swap a Skill
Point commands to different skills by editing the command file

### Add a Skill
Create new skill following the template, add to command chain

### Disable a Skill
Remove from command chain or skip in execution

---

## Autonomy Levels Reference

For `agentflow.autonomous`:

| Level | Name | Behavior |
|-------|------|----------|
| 1 | Supervised | Auto LOW risk at high confidence, batch routine, escalate MEDIUM/HIGH |
| 2 | Trusted | Auto LOW+MEDIUM at high confidence, escalate HIGH only |
| 3 | Full Autonomous | Auto all at confidence threshold, escalate only low confidence |

---

## Related Documents

- [[SKILLS.md]] - Complete skills reference
- [[COMMANDS.md]] - All commands reference
- [[07-reference/methodology/decision-framework.md]] - Decision framework


