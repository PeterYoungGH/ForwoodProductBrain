# Ideas Kanban Canvas Rules

**Last Updated:** 2026-01-03  
**Purpose:** Define how the Ideas Kanban Canvas is generated and updated to align with the Portfolio Roadmap framework

## Overview

The Ideas Kanban Canvas visualizes all items from the Ideas Kanban board in a way that aligns with Forwood's [Portfolio Roadmap Framework](../roadmapping-framework.md). The canvas organizes items by portfolio roadmap horizons (Now/Next/Later) and initiative status (Exploring/Validating/Building/Measuring), while maintaining document relationships and hierarchy.

## Alignment with Portfolio Roadmap Framework

The canvas aligns with the Portfolio Roadmap's structure:

### Portfolio Roadmap Structure
- **Now (Next 3 Months)** - Foundation and MVP Launch
- **Next (3-6 Months)** - Platform Enhancement and Customer Migration  
- **Later (6+ Months)** - Scale and Innovation

### Initiative Status
- **Exploring** - Early discovery, problem validation
- **Validating** - Solution validation, experiment design
- **Building** - Active development, execution
- **Measuring** - Post-launch, measuring outcomes

## Canvas Organization

### Primary Organization: Portfolio Roadmap Horizons

The canvas organizes items into three horizontal sections (layers) based on portfolio roadmap horizons:

1. **Now Layer (Top)** - Items in "Now" horizon (next 3 months)
   - Initiatives with status: Building
   - Related opportunities, solutions, experiments in active development
   - Supporting research and insights for current work

2. **Next Layer (Middle)** - Items in "Next" horizon (3-6 months)
   - Initiatives with status: Validating
   - Opportunities and solutions being validated
   - Experiments in planning or active validation

3. **Later Layer (Bottom)** - Items in "Later" horizon (6+ months)
   - Initiatives with status: Exploring
   - Early-stage opportunities and solutions
   - Research and discovery work

### Secondary Organization: Document Type Hierarchy

Within each horizon layer, items are organized by document type hierarchy:

1. **Initiatives** (largest nodes) - Strategic initiatives from portfolio roadmap
2. **Business Outcomes** - Business outcomes linked to initiatives
3. **Product Outcomes** - Product outcomes linked to initiatives
4. **Opportunities** - Customer opportunities
5. **Solutions** - Solutions addressing opportunities
6. **Experiments** - Validation experiments
7. **Supporting** (smallest nodes) - Research, insights, inbox items

### Status-Based Positioning

Items are positioned within their horizon layer based on status:

- **Building** - Left side (active work)
- **Validating** - Center (validation work)
- **Exploring** - Right side (discovery work)
- **Measuring** - Far right (post-launch measurement)

## Canvas Generation Rules

### 1. Horizon Assignment

Items are assigned to horizons based on:

**Primary Method:**
- Check if item is linked to an initiative in portfolio roadmap
- Use initiative's horizon (Now/Next/Later) from `01-strategy/roadmap/02-portfolio-roadmap.md`

**Fallback Method:**
- If no initiative link, use document status:
  - **Active** → Now layer
  - **Backlog** → Next layer
  - **Proposed** → Later layer
  - **Archive** → Not shown (or separate archive layer)

### 2. Status Extraction

Status is extracted from document metadata:
- Look for `**Status:**` field in document
- Check frontmatter for `status:` field
- Default to "default" if not found

### 3. Node Sizing

Node sizes reflect document type hierarchy:
- **Initiatives:** 500x500 (largest)
- **Business/Product Outcomes:** 450x450
- **Opportunities:** 400x400
- **Solutions:** 400x400
- **Experiments:** 350x350
- **Research/Insights:** 350x350 (smallest)

### 4. Node Colors

Colors are based on document type (not status):
- **Initiatives:** Purple/Blue (4)
- **Business Outcomes:** Yellow/Orange (3)
- **Product Outcomes:** Green (2)
- **Opportunities:** Blue (1)
- **Solutions:** Gray (5)
- **Experiments:** Gray (5)
- **Research/Insights:** Light Blue (1) / Light Green (2)

### 5. Relationship Edges

Edges connect related documents:
- **Hierarchical connections:** From higher to lower layers (initiatives → outcomes → opportunities → solutions → experiments)
- **Same-layer connections:** Horizontal connections between related items
- **Supporting connections:** Research/insights connect to opportunities/solutions they inform

Edge direction:
- Higher layer → Lower layer: Top to bottom
- Lower layer → Higher layer: Bottom to top
- Same layer: Left to right

### 6. Position Calculation

Positions are calculated to:
- Group items by horizon (Now/Next/Later)
- Within each horizon, organize by document type
- Within each type, sort by title alphabetically
- Space items evenly with consistent spacing

## Canvas Update Process

### Automatic Updates

The canvas is automatically regenerated when:
- Inbox items are processed (`pm.process-inbox-todo`)
- Insights are extracted (`pm.extract-insights`)
- Research is synthesized (`pm.synthesize-research`)
- Opportunities are identified (`pm.identify-opportunities`)
- Solutions are assessed (`pm.apply-decision-framework`)
- Workflow is orchestrated (`pm.orchestrate-workflow`)

### Manual Updates

To manually regenerate the canvas:
```bash
python .cursor/scripts/regenerate_ideas_kanban_canvas.py
```

### Update Frequency

- **Automatic:** After each workflow command execution
- **Manual:** As needed when portfolio roadmap is updated
- **Recommended:** After portfolio roadmap monthly review

## Integration with Portfolio Roadmap

### Reading Portfolio Roadmap

The canvas generation script reads `01-strategy/roadmap/02-portfolio-roadmap.md` to:
- Identify initiatives and their horizons (Now/Next/Later)
- Extract initiative status (Exploring/Validating/Building/Measuring)
- Map initiatives to related opportunities, solutions, and outcomes

### Linking to Portfolio Roadmap

Canvas items link to portfolio roadmap through:
- Initiative documents in `02-initiatives/active/` or `02-initiatives/planned/`
- Initiative links in opportunity/solution documents
- Portfolio roadmap references in document metadata

## Canvas Structure Example

```
┌─────────────────────────────────────────────────────────┐
│                    NOW (Next 3 Months)                  │
│  [Initiative] Forwood One Platform Launch (Building)   │
│         ↓                                                │
│  [Business Outcome] Oculus Platform Launch              │
│         ↓                                                │
│  [Opportunity] Enterprise Compliance Features (Active) │
│         ↓                                                │
│  [Solution] CRM+ Platform Features                      │
│         ↓                                                │
│  [Experiment] Platform Feature Validation               │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                  NEXT (3-6 Months)                      │
│  [Initiative] Customer Migration Program (Validating)  │
│         ↓                                                │
│  [Opportunity] Migration Success (Backlog)             │
│         ↓                                                │
│  [Solution] Migration Tools                             │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                  LATER (6+ Months)                      │
│  [Initiative] AI Features (Exploring)                   │
│         ↓                                                │
│  [Opportunity] AI-Driven Discovery (Proposed)          │
│         ↓                                                │
│  [Solution] AI Safety Coach                             │
└─────────────────────────────────────────────────────────┘
```

## Best Practices

### For Canvas Maintenance

1. **Keep Portfolio Roadmap Updated**
   - Update `02-portfolio-roadmap.md` monthly
   - Ensure initiatives have correct horizons and status
   - Link initiatives to related opportunities/solutions

2. **Maintain Document Links**
   - Ensure opportunities link to initiatives
   - Ensure solutions link to opportunities
   - Ensure experiments link to solutions

3. **Update Status Consistently**
   - Use standard status values: Active, Backlog, Proposed, Archive
   - Update status when items move between horizons
   - Keep status in sync with portfolio roadmap

### For Canvas Usage

1. **View by Horizon**
   - Focus on "Now" layer for current work
   - Review "Next" layer for upcoming priorities
   - Explore "Later" layer for strategic planning

2. **Follow Relationships**
   - Trace from initiatives down to experiments
   - Identify gaps in opportunity/solution coverage
   - Find supporting research and insights

3. **Use for Planning**
   - Align new opportunities with portfolio roadmap horizons
   - Ensure solutions support strategic initiatives
   - Validate experiments align with initiative goals

## Related Documents

- [Portfolio Roadmap](../../01-strategy/roadmap/02-portfolio-roadmap.md) - Portfolio roadmap structure and initiatives
- [Roadmapping Framework](./roadmapping-framework.md) - Overall roadmapping methodology
- [Ideas Kanban Guide](./idea-kanban-guide.md) - Kanban board workflow
- [Canvas Generation Script](../../.cursor/scripts/regenerate_ideas_kanban_canvas.py) - Script that generates the canvas

## Technical Details

### Canvas File Format

The canvas is stored as JSON in `Ideas Kanban Canvas.canvas`:
- **Nodes:** Document references with position, size, color
- **Edges:** Relationships between documents
- **Format:** Obsidian canvas format

### Script Location

Canvas generation script: `.cursor/scripts/regenerate_ideas_kanban_canvas.py`

### Dependencies

- Python 3.6+
- Access to workspace files
- Read access to kanban board and documents

## Change Log

- **2026-01-03:** Created canvas rules document aligned with portfolio roadmap framework
- **2026-01-03:** Updated canvas generation to align with Now/Next/Later horizons and initiative status



