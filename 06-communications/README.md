# Communications

Stakeholder communications, templates, and presentations.

## Purpose

This section contains templates and generated communications for stakeholders. Use this to create consistent, well-structured updates and presentations.

## Structure

- `templates/` - Reusable communication templates
  - `status-update.md` - Template for status updates
  - `initiative-brief.md` - Template for initiative briefings
  - `roadmap-presentation.md` - Template for roadmap presentations
- `one-on-ones/` - One-on-one meeting tools and templates
  - `templates/` - One-on-one meeting templates
  - `prepared/` - Prepared one-on-one agendas
  - Use `/suggest-one-on-one-topics` command to generate discussion topics
- `stakeholder-updates/` - Generated communications
  - Files named `[date]-[audience].md` (e.g., `2024-01-15-executive-team.md`)
- `presentations/` - Presentation materials

## Creating Communications

1. Start with a template from `templates/`
2. Pull information from:
   - Current roadmap in `01-strategy/roadmap/`
   - Active initiatives in `02-initiatives/active/`
   - Business outcomes in `04-opportunities/01-business-outcomes/`
   - Recent experiments in `04-opportunities/05-experiments/completed/`
3. Save in `stakeholder-updates/` with descriptive filename

## Preparing One-on-Ones

1. Use `/suggest-one-on-one-topics` command to generate relevant discussion topics
2. Select appropriate template from `one-on-ones/templates/`
3. Fill in template with suggested topics and any additional items
4. Save prepared agenda in `one-on-ones/prepared/` with date and participant name

## Navigation

- Use `templates/` when creating new communications
- Use `one-on-ones/` for preparing one-on-one meetings
- Browse `stakeholder-updates/` for historical communications
- Check `presentations/` for presentation materials

## Best Practices

- Use templates to maintain consistency
- Include links to source documents for traceability
- Tailor content to audience (executive, engineering, design, etc.)
- Include metrics and outcomes when available
- Archive old communications but keep for reference

