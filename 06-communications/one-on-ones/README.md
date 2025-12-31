# One-on-Ones

Templates and tools for preparing and conducting one-on-one meetings.

## Purpose

This section contains templates and tools to help prepare for and conduct effective one-on-one meetings with:
- **Manager**: One-on-ones with your manager (Chief Product Officer)
- **Team Members**: One-on-ones with direct reports (Product Managers, Designers, Technical Staff)

## Structure

- `templates/` - One-on-one meeting templates
  - `manager-one-on-one.md` - Template for one-on-ones with your manager
  - `team-member-one-on-one.md` - Template for one-on-ones with team members
- `prepared/` - Prepared one-on-one agendas (generated using the suggest-one-on-one-topics command)

## Using One-on-One Tools

### Suggesting Topics

Use the `suggest-one-on-one-topics` command to automatically generate relevant discussion topics based on:
- Current strategic priorities
- Active initiatives
- Recent discoveries and insights
- Business outcomes and opportunities
- Team member's role and responsibilities

**Command**: `/suggest-one-on-one-topics`

**Parameters**:
- `participant`: Who the one-on-one is with (e.g., "Chief Product Officer", "Product Manager - Sarah", "Design Lead")
- `participant_role`: Role type (manager, team_member, designer, engineer, etc.)
- `focus_areas`: Optional - specific areas to focus on (e.g., "Q1 roadmap", "EDP migration")

### Preparing for One-on-Ones

1. **Run Topic Suggestion Command**
   - Use `/suggest-one-on-one-topics` with participant details
   - Review suggested topics (3-4 key topics will be generated)

2. **Select Template**
   - Manager one-on-ones: Use `templates/manager-one-on-one.md`
   - Team member one-on-ones: Use `templates/team-member-one-on-one.md`

3. **Fill in Template**
   - Add suggested topics to the agenda
   - Add any specific items you want to discuss
   - Include updates, blockers, and action items

4. **Save Prepared Agenda**
   - Save in `prepared/` folder with date and participant name
   - Format: `YYYY-MM-DD-one-on-one-[participant-name].md`

## Best Practices

- **Regular Cadence**: Schedule one-on-ones consistently (weekly or bi-weekly)
- **Prepare in Advance**: Use topic suggestions to prepare meaningful agendas
- **Follow Up**: Document action items and follow up on previous commitments
- **Balance Topics**: Mix strategic, tactical, and personal development topics
- **Be Flexible**: Allow space for unplanned but important discussions

## Related Resources

- [Communications README](../README.md) - Overview of communications section
- [Strategic Roadmap](../../01-strategy/roadmap/) - Current strategic priorities
- [Active Initiatives](../../02-initiatives/active/) - Current work and programs
- [Discovery Insights](../../03-discovery/insights/) - Recent findings and insights

