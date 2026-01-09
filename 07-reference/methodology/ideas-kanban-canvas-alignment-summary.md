# Ideas Kanban Canvas - Portfolio Roadmap Alignment Summary

**Date:** 2026-01-03  
**Status:** ✅ Completed

## Overview

The Ideas Kanban Canvas has been updated to align with the Portfolio Roadmap framework (`01-strategy/roadmap/02-portfolio-roadmap.md`). The canvas now organizes items by portfolio roadmap horizons (Now/Next/Later) while maintaining document type hierarchy and relationships.

## Changes Made

### 1. Canvas Generation Script Updates

**File:** `.cursor/scripts/regenerate_ideas_kanban_canvas.py`

**Key Changes:**
- ✅ Added portfolio roadmap parsing to extract initiatives and their horizons
- ✅ Updated position calculation to organize by portfolio roadmap horizons first
- ✅ Added horizon assignment logic (Now/Next/Later based on initiative links or document status)
- ✅ Updated layout spacing for horizon-based organization
- ✅ Enhanced relationship graph building to inherit horizons from linked initiatives

**New Functions:**
- `parse_portfolio_roadmap()` - Parses portfolio roadmap to extract initiatives and horizons
- `get_item_horizon()` - Determines which horizon an item belongs to
- Updated `calculate_positions()` - Organizes by horizon → document type → alphabetical

### 2. Canvas Rules Documentation

**File:** `07-reference/methodology/ideas-kanban-canvas-rules.md`

**Created comprehensive documentation covering:**
- Alignment with Portfolio Roadmap Framework
- Canvas organization structure (horizons → document types)
- Canvas generation rules and update process
- Integration with portfolio roadmap
- Best practices for maintenance

## Canvas Organization Structure

### Primary Organization: Portfolio Roadmap Horizons

The canvas now organizes items into three horizontal sections:

1. **Now Layer (Top)** - Next 3 Months
   - Initiatives with status: Building
   - Related opportunities, solutions, experiments in active development
   - Supporting research and insights for current work

2. **Next Layer (Middle)** - 3-6 Months
   - Initiatives with status: Validating
   - Opportunities and solutions being validated
   - Experiments in planning or active validation

3. **Later Layer (Bottom)** - 6+ Months
   - Initiatives with status: Exploring
   - Early-stage opportunities and solutions
   - Research and discovery work

### Secondary Organization: Document Type Hierarchy

Within each horizon layer, items are organized by document type:
1. Initiatives (largest nodes)
2. Business Outcomes
3. Product Outcomes
4. Opportunities
5. Solutions
6. Experiments
7. Supporting (Research, Insights - smallest nodes)

## Horizon Assignment Logic

Items are assigned to horizons using this priority:

1. **If item is an initiative:** Use its horizon from portfolio roadmap
2. **If item links to an initiative:** Inherit that initiative's horizon
3. **Fallback:** Use document status:
   - Active/Building → Now
   - Backlog/Validating → Next
   - Proposed/Exploring → Later

## Test Results

**Script Execution:**
```
✓ Canvas regenerated successfully: 26 nodes, 21 edges
  Organized by Portfolio Roadmap horizons: Now (top), Next (middle), Later (bottom)
```

**Portfolio Roadmap Parsing:**
- Found 9 initiatives in portfolio roadmap
- Successfully mapped initiatives to horizons

**Canvas Generation:**
- Created 26 nodes from kanban board items
- Created 21 relationship edges
- Organized by portfolio roadmap horizons

## Usage

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
python3 .cursor/scripts/regenerate_ideas_kanban_canvas.py
```

### Update Frequency

- **Automatic:** After each workflow command execution
- **Manual:** As needed when portfolio roadmap is updated
- **Recommended:** After portfolio roadmap monthly review

## Alignment Verification

### Portfolio Roadmap Structure ✅
- Canvas aligns with Now/Next/Later horizons
- Initiative status (Exploring/Validating/Building/Measuring) is considered
- Items inherit horizons from linked initiatives

### Document Relationships ✅
- Hierarchical relationships maintained (initiatives → outcomes → opportunities → solutions → experiments)
- Supporting documents (research, insights) link to related items
- Edge connections reflect document relationships

### Visual Organization ✅
- Items grouped by portfolio roadmap horizon
- Within each horizon, organized by document type hierarchy
- Clear visual separation between horizons

## Next Steps

### Recommended Enhancements (Future)

1. **Status-Based Positioning Within Horizons**
   - Position items within horizon based on status (Building → left, Validating → center, Exploring → right)

2. **Initiative Status Visualization**
   - Color-code or label initiatives by status (Exploring/Validating/Building/Measuring)

3. **Launch Moments Highlighting**
   - Visually distinguish items that are part of launch moments from portfolio roadmap

4. **Portfolio Roadmap Sync Validation**
   - Add validation to ensure canvas items match portfolio roadmap initiatives

## Related Documents

- [Ideas Kanban Canvas Rules](./ideas-kanban-canvas-rules.md) - Detailed rules and guidelines
- [Portfolio Roadmap](../../01-strategy/roadmap/02-portfolio-roadmap.md) - Portfolio roadmap structure
- [Roadmapping Framework](./roadmapping-framework.md) - Overall roadmapping methodology
- [Canvas Generation Script](../../.cursor/scripts/regenerate_ideas_kanban_canvas.py) - Updated script

## Notes

- The canvas now provides a visual representation that aligns with strategic planning horizons
- Items automatically inherit horizons from linked initiatives, ensuring alignment
- The canvas serves as a bridge between the Ideas Kanban workflow and Portfolio Roadmap planning
- Regular regeneration ensures the canvas stays in sync with portfolio roadmap updates



