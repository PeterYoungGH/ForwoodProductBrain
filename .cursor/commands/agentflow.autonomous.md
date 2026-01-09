# Autonomous Workflow (Minimal Oversight)

Run items through the full workflow with confidence-based auto-decisions, minimizing human intervention.

## Skills Used

All orchestration skills plus decision automation:
- `orchestration/detect-workflow-stage.md`
- `orchestration/select-next-skill.md`
- `orchestration/chain-skills-for-stage.md`
- `orchestration/calculate-decision-confidence.md`
- `orchestration/apply-decision-policy.md`
- `orchestration/batch-decisions.md`
- `orchestration/escalate-to-human.md`
- `orchestration/suggest-workflow-acceleration.md`

## Autonomy Levels

### Level 1: Supervised (Default)
- Auto-executes LOW risk, high confidence decisions
- Batches routine decisions for approval
- Escalates MEDIUM/HIGH risk decisions

### Level 2: Trusted
- Auto-executes LOW and MEDIUM risk decisions at high confidence
- Escalates only HIGH risk decisions
- Logs all auto-decisions

### Level 3: Full Autonomous
- Auto-executes all decisions meeting confidence thresholds
- Escalates only when confidence is low
- Requires explicit activation

## Decision Automation Flow

For each decision point:
```
1. calculate-decision-confidence → Score confidence (0-100)
2. apply-decision-policy → Check against policy rules
3. If auto-approve → Execute and log
4. If batch → Add to batch for later approval
5. If escalate → Prepare context for human
```

## Confidence Thresholds

| Risk Level | Auto-Approve | Batch | Escalate |
|------------|--------------|-------|----------|
| LOW | ≥85% | 70-84% | <70% |
| MEDIUM | ≥95% | 85-94% | <85% |
| HIGH | Never | Never | Always |

## Batch Processing

LOW risk routine decisions are batched:
```
batch-decisions → Group similar decisions
Present batch at end of run
Single approval for entire batch
```

## Workflow Acceleration

```
suggest-workflow-acceleration → Find stalled items
Auto-process items ready to move
Flag items needing attention
```

## Safety Controls

### Always Escalate
- HIGH risk items (strategy, initiatives, roadmap)
- Low confidence (<70%)
- Novel situations (no historical pattern)
- Conflicting evidence

### Audit Trail
- Every auto-decision logged with rationale
- Confidence scores recorded
- Can review and reverse decisions

### Kill Switch
- User can pause at any time
- User can revert to supervised mode
- User can reject batch decisions

## Output

After each run:
1. Summary of actions taken
2. Decisions auto-approved (with rationale)
3. Batch awaiting approval
4. Items requiring human decision
5. Stalled items flagged

## Example

```
@agentflow.autonomous level:1
```

Runs autonomous workflow at supervised level.

```
@agentflow.autonomous level:2 items:inbox
```

Runs trusted-level autonomy on inbox items only.

```
@agentflow.autonomous level:3 dry-run:true
```

Simulates full autonomous mode without making changes.

## Comparison

| Feature | pm.orchestrate-workflow | agentflow.orchestrate | agentflow.autonomous |
|---------|------------------------|----------------------|---------------------|
| Decision Mode | All manual | Skills-based, manual decisions | Auto where possible |
| Human Stops | Fixed stages | Decision points | Confidence-based |
| Batch Approval | No | No | Yes |
| Oversight | Full | Full | Minimal |


