# User Guide Generation Command

## Description

Create a complete User Guide + Technical Reference for the feature/module in the current workspace.

Output a single Markdown document with:

- Header block: Title, Version, Last Updated (today), Audience
- Table of Contents
- Part 1: User Guide (external-facing)
- Part 2: Technical Reference (internal-facing)

## User Input

`$ARGUMENTS`

**Important:** You MUST consider the user input before proceeding (if not empty).

The `$ARGUMENTS` can be:

1. **Feature identifier**: Name like "verifications", "actions", "checklists"
2. **Feature path**: Path to feature directory (e.g., `specs/feature/EAP-541__checklist_sections`)
3. **Feature list file**: Path to MD file containing a list of features to document

## Process Outline

### Setup & Target Resolution

1. **Parse `$ARGUMENTS`** to determine target:
   - If path to MD file exists: Read and extract feature list (see "Feature List Processing" below)
   - If feature name provided: Resolve to feature directory or module by searching all sources
   - If feature path provided: Use directly

2. **Feature Resolution Strategy** (when feature name provided):
   - Search `web/app/routes/app+/` for routes matching feature name (e.g., `verifications+/`, `actions+/`)
   - Search `web/app/modules/` for module directories
   - Search `specs/feature/` and `specs/` for feature directories
   - Search `docs/features/` for existing documentation
   - Use the first match found, or combine information from multiple sources

3. **Determine Output Location**:
   - Default: `docs/user-guides/[feature-name]-user-guide.md`
   - Create directory if it doesn't exist
   - For feature lists: Generate individual guides plus index document

4. **Version Detection**:
   - Attempt to infer version from git tags: `git describe --tags --abbrev=0` (fallback to latest tag)
   - If no tags found, try: `git log -1 --format=%h` for commit hash
   - Default to "1.0.0" if git unavailable
   - Format: Use semantic versioning (e.g., "1.2.3" or "1.2.3-abc1234")

### Workspace Scanning

Scan the workspace for feature-related information across all sources:

#### Routes & Navigation

- Search `web/app/routes/app+/` for feature-specific routes:
  - Specific routes (e.g., `verifications+/_index.tsx`, `actions+/_index.tsx`)
  - Generic routes (e.g., `$featureSetKey+/_index.tsx`)
  - Child routes (e.g., `responses/_index.tsx`, `fill/$formId.tsx`)
- Extract:
  - Route patterns and parameters
  - Query parameters from loaders
  - Deep link URLs
  - Navigation paths (e.g., `/app/verifications`, `/app/verifications/responses`)

#### UI Components

- Search `web/app/components/feature/` for feature-specific components
- Search `web/components/` for shared components used by the feature
- Search `web/app/modules/[feature]/components/` for module-specific components
- Extract:
  - Component names and purposes
  - Props interfaces
  - UI labels and button text
  - Form fields and their labels
  - Filter options and controls
  - Modal/dialog components

#### Types & Contracts

- Search `packages/ehs-contracts/src/` for feature contracts:
  - DTOs (e.g., `IVerificationFormDto`, `IActionDto`)
  - Request/Response interfaces
  - Route definitions
- Search `web/app/types/` for TypeScript interfaces
- Search `api/src/modules/[feature]/` for service interfaces
- Extract:
  - Data models and their fields
  - Request/response shapes
  - Type definitions

#### Permissions & Guards

- Search route files for `authenticatedLoader` and `authenticatedAction` usage
- Search for `requiredFeatureSet` configurations
- Search `api/src/modules/` for RBAC guards and permission decorators
- Extract:
  - Required permissions
  - Feature set requirements
  - Role-based access rules
  - Visibility conditions

#### Tests & Mock Data

- Search for `*.test.ts` and `*.spec.tsx` files related to the feature
- Search for mock data fixtures (e.g., `__mocks__/`, `fixtures/`)
- Search test files for scenarios and edge cases
- Extract:
  - Test scenarios
  - Edge cases
  - Error handling patterns
  - Mock data structures

#### Existing Documentation

- Check `docs/features/` for existing feature documentation
- Check `specs/` directories for:
  - `spec.md` (requirements and acceptance criteria)
  - `tasks.md` (implementation details)
  - `plan.md` (technical design)
- Extract:
  - Functional requirements
  - Acceptance criteria
  - User stories
  - Technical architecture notes

### Document Generation

Generate markdown following the exact structure specified below.

#### Header Block

```markdown
# [Feature Name] – User Guide & Technical Reference

**Version**: [X.Y.Z or commit hash]
**Last Updated**: [Current Date - DD Month YYYY format, e.g., "15 January 2024"]
**Audience**: End Users, Internal Team Members
```

#### Table of Contents

Generate a complete table of contents with links to all sections in both Part 1 and Part 2.

#### Part 1: User Guide (External-Facing)

Generate all sections below. Omit sections marked "(if applicable)" if the feature doesn't have that functionality.

**1. Overview & Purpose**

- 2-3 sentence description of what the feature does and its value
- "Who should use this:" list of user roles
- "What you can do:" action-oriented bullet points
- Focus on outcomes, not features

**2. Getting Started**

- "Accessing the [Feature]:" step-by-step navigation
- Include exact route (e.g., `/app/verifications`)
- "What you'll see immediately:" list of initial UI elements
- Note any important context about permissions or scope

**3. Understanding the Layout**

- Describe the main page structure
- Identify key sections/panels
- Explain navigation elements
- Include UI labels and component names where relevant

**4. Key Concepts**

- Define primary terminology
- Explain core concepts unique to this feature
- Define aliases once if multiple terms are used
- Use consistent terminology throughout

**5. Filtering & Searching**

- List all available filters
- Explain filter options and their effects
- Describe search functionality
- Include filter combinations and their results
- Use tables for structured filter information

**6. View Modes** (omit if not applicable)

- Describe different view options (list, grid, table, etc.)
- Explain when to use each view
- Include navigation to switch views

**7. Working with [Primary Object]**

- Replace [Primary Object] with the main entity (e.g., "Verifications", "Actions", "Records")
- Step-by-step instructions for common tasks:
  - Creating new items
  - Editing existing items
  - Viewing details
  - Deleting/archiving
- Include UI labels and button names
- Provide concrete examples

**8. Review & Approval Workflow** (omit if not applicable)

- Describe the workflow stages
- Explain who can perform each action
- Include status transitions
- Use tables for workflow states and transitions

**9. Completion Requirements**

- List what must be completed for an item to be considered "done"
- Explain validation rules
- Describe required fields
- Include any business rules

**10. Best Practices**

- Provide recommendations for effective use
- Include tips for common scenarios
- Warn about common pitfalls
- Suggest efficient workflows

**11. Troubleshooting**

- List common issues and solutions
- Include error messages and their meanings
- Provide workarounds where applicable
- Reference technical details in Part 2 if needed

**12. Need More Help?**

- Point to additional resources
- Include links to related documentation
- Provide contact information if applicable

#### Part 2: Technical Reference (Internal-Facing)

Generate all sections below with technical implementation details.

**1. Component Architecture**

- High-level architecture diagram (text description or mermaid)
- Component hierarchy
- Data flow
- Key architectural decisions

**2. Key Components**

- List all major components with their purposes
- Component file paths
- Props interfaces
- Usage examples
- Use tables for component comparison

**3. State Management**

- Describe how state is managed (React state, Remix loaders, etc.)
- Identify state stores or contexts
- Explain data flow between components
- Document state update patterns

**4. Data Contracts**

- List all DTOs and interfaces
- Document request/response shapes
- Include field descriptions
- Reference contract package locations
- Use tables for structured data

**5. Mock Data**

- Document mock data structure
- List fixture files
- Explain test data patterns
- Include examples of mock responses

**6. Routes & Navigation**

- Complete route mapping:
  - Route paths and their handlers
  - Route parameters
  - Query parameters
  - Deep link URLs
- Use tables for route reference
- Include loader/action functions

**7. Permissions & Visibility Rules**

- Document all permission checks
- List required feature sets
- Explain role-based access
- Document visibility conditions
- Use tables for permission matrix

**8. Known Limitations**

- List current limitations
- Document workarounds
- Explain why limitations exist
- Reference related issues if applicable

**9. Future Enhancements**

- Document planned improvements
- Reference related tickets or specs
- Explain enhancement rationale

**10. Testing Scenarios**

- List all test files
- Document test scenarios
- Include edge cases
- Reference test data
- Use tables for test coverage

### Content Guidelines

**Language & Style:**

- Use Australian English spelling:
  - "organise" not "organize"
  - "colour" not "color"
  - "centre" not "center"
  - "analyse" not "analyze"
  - "licence" (noun) / "license" (verb)
- Be clear and instructional, not marketing
- Use active voice where possible
- Be concise but complete

**Terminology:**

- Choose one primary term for each concept
- Define aliases once at the beginning if needed
- Use consistent terminology throughout
- Avoid jargon unless defined

**Formatting:**

- Use tables for structured information:
  - Metrics and KPIs
  - Filter options
  - Permissions matrix
  - Route reference
  - Component comparison
  - Test scenarios
- Include concrete UI labels in quotes (e.g., "Save", "Cancel", "Filter by Status")
- Include navigation paths as code blocks (e.g., `/app/verifications`)
- Include deep links where applicable

**Assumptions:**

- If you must infer anything, mark it clearly:
  - "Note (Assumption): [description of assumption]"
- Keep assumptions minimal
- Prefer scanning codebase over making assumptions

### Feature List Processing

If `$ARGUMENTS` points to an MD file:

1. **Parse the file** to extract feature names/paths:
   - Detect common formats:
     - Bullet lists (`- feature-name`, `* feature-name`)
     - Markdown links (`[Feature Name](./path)`)
     - Table rows (extract feature names from columns)
     - Numbered lists
   - Extract feature identifiers from each line

2. **For each feature**:
   - Resolve feature using the same resolution strategy
   - Generate individual user guide: `docs/user-guides/[feature-name]-user-guide.md`
   - Track generated guides

3. **Create index document**:
   - Location: `docs/user-guides/index.md` or `docs/user-guides/README.md`
   - Structure:
     - Overview of all guides
     - Table listing all features with links
     - Last updated date for each guide
   - Update `docs/user-guides/README.md` with link to index (or create if it doesn't exist)

### Module-Specific Handling

If feature is a module (detected by presence in `web/app/modules/` or module plugin architecture):

1. **Scan module plugin registration**:
   - Read `web/app/modules/[feature]/plugin.ts`
   - Extract module capabilities
   - Document module settings schema

2. **Include module-specific sections**:
   - Module capabilities (hasForms, hasSettings, etc.)
   - Settings configuration
   - Module registration details

3. **Document module architecture**:
   - Reference `docs/development/Module-Plugin-Architecture.md`
   - Explain module-specific patterns

### Output & Completion

1. **Save the document**:
   - Location: `docs/user-guides/[feature-name]-user-guide.md`
   - Create directory if it doesn't exist
   - Overwrite if file exists (user will be notified)

2. **Update documentation index**:
   - Update `docs/user-guides/README.md` (or create if it doesn't exist):
     - Add entry for new guide
     - Include brief description
     - Link to the guide

3. **Output confirmation**:
   - Display the file path
   - Show a summary of sections generated
   - For feature lists: Show count of guides generated and index location

4. **Quality check reminder**:
   - Remind user to review assumptions marked in the document
   - Suggest verifying UI labels and routes against running application
   - Recommend updating version if needed

## Rules

1. **Be Grounded in Code**: All information must be extracted from the codebase. Only mark inferences as assumptions.

2. **Use Australian English**: Consistently use Australian spelling throughout the document.

3. **Be Specific**: Include exact UI labels, routes, and component names. Don't use placeholders.

4. **Use Tables**: Prefer tables for structured information (filters, permissions, routes, components).

5. **Mark Assumptions**: Clearly mark any assumptions with "Note (Assumption): ..."

6. **Complete All Sections**: Generate all required sections. Omit only sections explicitly marked "(if applicable)" when the feature doesn't have that functionality.

7. **Consistent Terminology**: Use one primary term per concept. Define aliases once.

8. **Include Deep Links**: Where applicable, include deep link URLs for direct navigation.

9. **Reference Code**: When documenting technical details, include file paths and function names.

10. **Update Indexes**: Always update `docs/user-guides/README.md` when creating new guides.

## Completion

1. Output the path to the generated user guide(s).
2. Display a summary of what was generated.
3. For feature lists, also output the index document path.
4. Remind user to review assumptions and verify against running application.
