# Opportunities

Opportunity Solution Trees (OST) framework for organizing product work.

## Purpose

This section follows the Opportunity Solution Tree framework developed by Teresa Torres. It organizes work hierarchically from business outcomes down to experiments:

**Business Outcomes** → **Product Outcomes** → **Opportunities** → **Solutions** → **Experiments**

## Structure

- `01-business-outcomes/` - High-level business outcomes (e.g., increase revenue, reduce churn)
  - `index.md` - Overview of all business outcomes
  - Individual outcome files
- `02-product-outcomes/` - Product outcomes that support business outcomes (e.g., increase activation rate)
  - `index.md` - Overview of all product outcomes
  - Individual outcome files
- `03-opportunities/` - Customer needs, pain points, desires
  - `active/` - Opportunities being actively pursued
  - `backlog/` - Opportunities not yet prioritized
  - `archive/` - Completed or deprioritized opportunities
- `04-solutions/` - Potential ways to address opportunities
  - `active/` - Solutions in development
  - `proposed/` - Proposed solutions
  - `archive/` - Completed or deprecated solutions
- `05-experiments/` - Tests to validate/invalidate solutions
  - `active/` - Experiments currently running
  - `planned/` - Experiments planned but not started
  - `completed/` - Completed experiments with results
  - `archive/` - Historical experiments

## OST Framework

The Opportunity Solution Tree helps ensure:
1. **Outcomes** are clearly defined and measurable
2. **Opportunities** are customer-focused and linked to outcomes
3. **Solutions** directly address opportunities
4. **Experiments** validate solutions before full implementation

## Navigation

1. Start with `01-business-outcomes/index.md` to see all business outcomes
2. Review `02-product-outcomes/index.md` to see product outcomes
3. Browse `03-opportunities/active/` for current opportunities
4. Check `04-solutions/active/` for solutions in development
5. Review `05-experiments/active/` for running experiments

## Creating OST Documents

1. **Business Outcome**: Create in `01-business-outcomes/` and add to `index.md`
2. **Product Outcome**: Create in `02-product-outcomes/`, link to business outcome, add to `index.md`
3. **Opportunity**: Use template from `06-reference/templates/opportunity-template.md`, link to product outcome
4. **Solution**: Use template from `06-reference/templates/solution-template.md`, link to opportunity
5. **Experiment**: Link to solution, document hypothesis and results

## Best Practices

- Always link documents to their parent in the hierarchy
- Keep outcomes measurable and specific
- Opportunities should be customer-focused, not solution-focused
- Multiple solutions can address one opportunity
- Multiple experiments can test one solution
- Document experiment results and learnings
- Archive completed work but maintain links for traceability

## Methodology

See `06-reference/methodology/opportunity-solution-tree-guide.md` for detailed methodology.

