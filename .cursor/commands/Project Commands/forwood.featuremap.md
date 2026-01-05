# Product Feature Map Command

## Description

Generate a comprehensive Product Feature Map + User Flows document by scanning the codebase for routes, navigation, modules, permissions, domain entities, and user flows. Produces a single Markdown file that maps the product's features and key user flows.

## User Input

`$ARGUMENTS`

**Important:** You MUST consider the user input before proceeding (if not empty).

## Process Outline

### Setup

1. Generate timestamp: `YYYY-MM-DD-HHMMSS` format (e.g., `2025-01-15-143022`)
2. Set output file path: `.specify/product-feature-map-{timestamp}.md`
3. **Check if file already exists** - If it does, read it to determine what's already been generated and resume from there
4. **Create/initialise output file immediately** with header and initial structure:

   ```markdown
   # Product Feature Map

   **Generated**: {timestamp}
   **Codebase**: Forwood Safety Platform
   **Status**: In Progress

   > **Note**: This file is being generated incrementally. If the process was interrupted, it may be incomplete.

   ## A. Overview

   [To be populated...]

   ## B. Feature Catalogue

   [To be populated...]

   ## C. Cross-cutting Capabilities

   [To be populated...]

   ## D. Key User Flows

   [To be populated...]

   ## E. Indexes

   [To be populated...]
   ```

5. Initialise data structures for collecting features, routes, entities, flows

## Scanning Phase

**Save Strategy**:

- Track approximate line count as you generate content
- **Save the file after every ~100 lines of content generated** (in addition to section checkpoints)
- After completing each discovery step (1-6), update the file with a progress marker
- After all scanning is complete, save the collected data summary

### 1. Route Discovery

**Primary Source**: `web/app/routes/` directory structure

- List all directories in `web/app/routes/`
- Identify feature group folders:
  - `admin+/` → Admin domain
  - `app+/` → Main application domain
  - `settings+/` → Settings domain
  - `auth+/` → Authentication domain
- Scan for specific feature routes:
  - `verifications+/` → Verifications feature
  - `actions+/` → Actions feature
  - `event-management+/` → Event Management feature
- Identify dynamic routes:
  - `$featureSetKey+/` → Generic module framework routes
  - `$formId.tsx`, `$responseId.edit.tsx` → Dynamic form routes
- Map route files to URL patterns using `remix-flat-routes` conventions:
  - `app+/verifications+/_index.tsx` → `/app/verifications`
  - `app+/$featureSetKey+/fill+/$formId.tsx` → `/app/{featureSetKey}/fill/{formId}`
  - `app+/actions+/$actionId.review.tsx` → `/app/actions/{actionId}/review`

**Navigation Config**:

- Read `web/app/components/layout/AppSidebar.tsx` to extract navigation structure
- Read `web/app/locales/en/navigation.json` for nav labels and descriptions
- Map navigation items to routes and feature sets

### 2. Feature Set Discovery

**Database Models**: `packages/ehs-core/prisma/schema/core/features.prisma`

- Read the Prisma schema file
- Extract `FeatureSet` model properties:
  - `key` (e.g., "verifications", "inspections")
  - `name` (display name)
  - `baseRoute` (route prefix)
  - `enableForms` (boolean flag)
  - `moduleSettings` (JSON configuration)
  - `order` (display order)
- Extract `Feature` model properties:
  - `key`, `name`, `description`
  - `route`, `routePattern`
  - `featureSetId` (parent relationship)
- Extract `TenantFeatureSet` and `TenantFeature` for feature flag information

**Feature Registry**:

- Read `packages/ehs-core/src/feature-registry.ts` if available
- Extract feature definitions and metadata

**API Module**:

- Check `api/src/modules/featureset/` for feature set management endpoints

### 3. Domain Entity Discovery

**Prisma Schema Scan**: `packages/ehs-core/prisma/schema/`

- List all `.prisma` files in `schema/core/` and `schema/tenant/`
- Extract model names and relationships:
  - Core entities: `User`, `Tenant`, `Form`, `FormResponse`, `Action`, `Checklist`, `Event`, `Incident`, `Risk`, `Control`, `PhysicalLocation`, `Tag`, `AttachmentUpload`, `Notification`, etc.
  - Tenant entities: Models specific to tenant database
- For each model, identify:
  - Primary key and unique fields
  - Relationships (one-to-many, many-to-many)
  - Key fields that indicate purpose

**Type Exports**:

- Read `packages/ehs-core/src/types.ts` to see exported types
- Map Prisma models to TypeScript types

### 4. API Module Discovery

**Module Structure**: `api/src/modules/` directory

- List all module directories
- For each module, identify:
  - Module name (directory name)
  - Controllers (HTTP endpoints)
  - Services (business logic)
  - Repositories (data access)
  - DTOs (data transfer objects)
  - Exceptions (domain exceptions)
- Infer operations from module structure:
  - CRUD operations from controller/service patterns
  - Domain-specific operations from service methods

**Key Modules to Scan**:

- `action/` → Action management
- `form/` → Form builder and management
- `checklist/` → Checklist library
- `risk/` → Risk register
- `control/` → Control management
- `event/` → Event management
- `notification/` → Notifications
- `attachment/` → File attachments
- `export/` → Data export
- `abac/`, `casl/` → Permissions

### 5. Permission/RBAC Discovery

**ABAC System**:

- Read `api/src/modules/abac/services/impl/abac-feature-access.service.impl.ts`
- Understand feature access logic and CASL integration

**CASL System**:

- Read `api/src/modules/casl/casl-ability.factory.ts`
- Extract permission evaluation patterns

**Permission Models**:

- Read `packages/ehs-core/prisma/schema/core/abac-permissions.prisma`
- Extract:
  - `Role` model (role definitions)
  - `Permission` model (permission definitions)
  - `PermissionAbility` model (CASL ability definitions)
  - `RolePermission` model (role-permission mappings)

**Frontend Auth**:

- Read `web/app/services/auth/authorization.service.ts`
- Extract access check patterns and role requirements

**Documentation**:

- Read `docs/specs/ABAC/` for ABAC implementation details
- Extract permission patterns and scope levels

### 6. User Flow Discovery

**E2E Tests**: `playwright-tests/tests/` directory

- List all `.spec.ts` files
- For each test file, extract:
  - Test name/description (reveals user journey)
  - Test steps (user actions)
  - Routes accessed
  - Features exercised
- Identify common flow patterns:
  - Login → Tenant Selection → Dashboard
  - Create Form → Fill Form → Submit Response
  - Create Action → Review Action → Complete Action
  - Create Checklist → Assign Checklist → Complete Checklist

**Route Sequences**:

- Infer flows from route dependencies:
  - Forms require Form creation before filling
  - Actions require FormResponse or Event
  - Reviews require items to review
- Map navigation patterns from AppSidebar

**Key Flows to Document**:

1. User Login & Tenant Selection
2. Create Verification Form
3. Fill & Submit Verification Form
4. Create Action from Verification Response
5. Review & Complete Action
6. Create Checklist
7. Manage Risk Register
8. Create & Assign Control
9. Event Management (HIPO)
10. Admin: Manage Tenant Features
11. Admin: User Management
12. Settings: Configure Module Settings
13. Export Verification Responses
14. Manage Action Templates
15. Content Management: Checklist Library

## Analysis Phase

**Save Strategy**:

- Track approximate line count as you generate content
- **Save the file after every ~100 lines of content generated**
- After organising features and mapping entities, save the analysis results to the file before starting generation

### Organise Features Hierarchically

Group features by domain/module:

- **Safety Management**: Verifications, Inspections, Pre-Start Assessments
- **Risk Management**: Risk Register, Risk Assessments, Bowtie Visualisation
- **Action Management**: Actions, Action Templates
- **Event Management**: Events, HIPO, Incidents
- **Content Management**: Checklists, Forms, Action Templates, Risk & Control Library
- **Administration**: Tenant Management, User Management, Feature Management, Company Management
- **Settings**: Module Settings, API Keys, SSO, Integrations
- **Platform**: Authentication, Notifications, Reporting, Export

### Map Entities to Features

For each feature, identify:

- Which domain entities it creates/edits/views
- Which API modules it uses
- Which routes it exposes

### Identify Cross-cutting Capabilities

Extract platform-level capabilities:

- Authentication/session management
- Roles & permissions (ABAC/CASL)
- Search/filtering patterns
- Notifications
- Attachments/media handling
- Internationalisation
- Reporting/exporting
- Auditing/history
- Multi-tenancy

## Generation Phase

**IMPORTANT: Incremental Saving**

To prevent data loss if the process times out, **save the file frequently**. Use the following pattern:

1. **Track line count**: As you generate content, keep a rough count of lines added. Every ~100 lines, save the file.
2. After completing each section (Overview, Feature Catalogue section, Cross-cutting section, Flow, Index), **immediately write/update the file**
3. Use `write` or `search_replace` to append or update the file content
4. After each save, output a brief status message (e.g., "✓ Saved Overview section" or "✓ Saved ~100 lines")
5. Continue building the document incrementally rather than building it all in memory

**Line Count Tracking**:

- Count markdown lines (headers, bullets, table rows, code blocks, etc.)
- When you've generated approximately 100 lines since last save, save immediately
- Don't wait for section completion if you've hit ~100 lines
- Reset counter after each save

**Save Checkpoints (in order):**

**PRIMARY RULE: Save after every ~100 lines of content generated, regardless of section boundaries.**

Additional section-based checkpoints:

1. **After Overview section** → Replace `[To be populated...]` with actual content, save file
2. **During Feature Catalogue** → Save frequently:
   - Track line count as you generate each domain
   - Save after ~100 lines (may be mid-domain)
   - Also save after completing each domain:
     - After Safety Management domain → Save
     - After Risk Management domain → Save
     - After Action Management domain → Save
     - After Event Management domain → Save
     - After Content Management domain → Save
     - After Administration domain → Save
     - After Settings domain → Save
     - After Platform domain → Save
3. **During Cross-cutting Capabilities** → Save after ~100 lines, then final save when complete
4. **During User Flows** → Save after every 1-2 flows (each flow is ~30-50 lines, so 2 flows ≈ ~100 lines)
5. **During Indexes** → Save after each index completes:
   - After Feature Index → Save
   - After Route Index → Save
   - After Domain Object Index → Save
6. **Final save** → Update status from "In Progress" to "Complete", save file

**Implementation Pattern:**

- Use `search_replace` to replace placeholder text like `[To be populated...]` with actual content
- Or use `read_file` to get current content, append new sections, then `write` the complete updated content
- **Track line count**: As you generate content, estimate lines added. When you reach ~100 lines since last save, save immediately
- After each save operation, output: `✓ Saved [Section Name] section` or `✓ Saved ~100 lines of content`
- **Don't batch too much**: If generating a large section (like a feature with many sub-features), save periodically within that section

**Example Save Pattern:**

1. Generate Overview section (~50 lines) → Save → "✓ Saved Overview section"
2. Start Feature Catalogue, generate Safety Management header + Verifications feature (~80 lines) → Continue
3. Generate Inspections feature (~40 lines, total ~120 lines) → **Save now** (hit ~100 line threshold) → "✓ Saved ~100 lines of Feature Catalogue"
4. Continue with next feature...

### Document Structure

Generate Markdown with the following structure:

```markdown
# Product Feature Map

**Generated**: {timestamp}
**Codebase**: Forwood Safety Platform

## A. Overview

### Codebase Scanned

- **Web Routes**: {count} route files in `web/app/routes/`
- **API Modules**: {count} modules in `api/src/modules/`
- **Domain Entities**: {count} Prisma models
- **Feature Sets**: {count} feature sets
- **User Flows**: {count} documented flows

### Assumptions / Limitations

- Routes are inferred from file structure using `remix-flat-routes` conventions
- Permissions are runtime-evaluated via CASL; documented patterns may not reflect all runtime conditions
- Feature flags are tenant-specific; access may vary by tenant configuration
- Generic routes (`$featureSetKey`) are handled by the Generic Module Framework
- Some features may be marked as `(Assumption)` if evidence is indirect

### How to Read This Map

- **Feature Catalogue**: Organised hierarchically as Domain → Feature Set → Feature → Sub-features
- **Flow Notation**: `Feature A → Feature B → Feature C` indicates user journey progression
- **Code References**: File paths in backticks reference actual code locations
- **Indexes**: Use the indexes at the end to quickly find features, routes, or domain objects

## B. Feature Catalogue

### Safety Management

#### Verifications (Feature Set)

- **What**: Conduct and manage critical control verification activities. Users fill verification forms, submit responses, and create actions from non-compliant findings.
- **Entry points**:
  - Route: `/app/verifications`
  - Nav label: "Critical Control Verifications"
  - Deep link: `/app/verifications/responses/{responseId}`
- **Core objects**: `Form`, `FormResponse`, `Action`, `ActionTemplate`
- **Key screens/components**:
  - `web/app/routes/app+/verifications+/_index.tsx` (list view)
  - `web/app/routes/app+/$featureSetKey+/fill+/$formId.tsx` (form filling)
  - `web/app/routes/app+/$featureSetKey+/responses+/$responseId.edit.tsx` (response editing)
- **Primary operations**:
  - Create form (via Form Builder)
  - Fill form (initiate and complete)
  - Submit response
  - View responses (list and detail)
  - Export responses
  - Create action from response
- **Permissions/roles**:
  - Requires `access` permission on `Verifications` FeatureSet
  - CASL ability: `can('access', 'Verifications')`
  - May require specific role scopes for create/edit operations
- **Feature flags**:
  - Controlled by `TenantFeatureSet.isEnabled` for feature set
  - Controlled by `TenantFeature.isEnabled` for individual features
- **Related features**:
  - Actions (creates actions from responses)
  - Forms (uses form builder)
  - Action Templates (assigns templates to feature sets)

[... continue for all features ...]

## C. Cross-cutting Capabilities

### Authentication/Session

- **Routes**: `web/app/routes/auth+/` (login, logout, callback, token)
- **Services**: `web/app/services/auth/`
- **Session storage**: `web/app/services/auth/secure-session-storage.server.ts`
- **Multi-tenant**: Subdomain-based tenant routing
- **Evidence**: `web/app/routes/auth+/login._index.tsx`, `web/app/routes/auth+/callback._index.tsx`

### Roles & Permissions

- **System**: ABAC (Attribute-Based Access Control) with CASL
- **Backend**: `api/src/modules/abac/`, `api/src/modules/casl/`
- **Models**: `Role`, `Permission`, `PermissionAbility`, `RolePermission`
- **Frontend**: `web/app/services/auth/authorization.service.ts`
- **Scopes**: `own` → `organisation` → `all` hierarchy
- **Evidence**: `packages/ehs-core/prisma/schema/core/abac-permissions.prisma`

[... continue for all cross-cutting capabilities ...]

## D. Key User Flows

### Flow 1: User Login & Tenant Selection

**Persona**: Any user (Field Operator, Supervisor, Admin)

**Trigger**: User needs to access the application

**Steps**:

1. Navigate to login page (`/auth/login`)
2. Authenticate via AWS Cognito
3. If super admin: Select tenant from dropdown (`/app` with tenant selection)
4. If single tenant: Auto-redirect to tenant context
5. Load dashboard or first available feature (`/app/{featureSetKey}`)

**Flow path**: Authentication → Tenant Selection → Dashboard → Feature Access

**Systems/actions**:

- Session created with JWT token
- Tenant context established
- Feature access evaluated via ABAC
- User preferences loaded

**Entry/exit points**:

- Entry: `/auth/login`
- Exit: `/app/{featureSetKey}` or `/app` (dashboard)

**Dependencies**:

- Valid AWS Cognito credentials
- Tenant membership (for non-super-admin users)
- Feature access permissions

**Failure points**:

- Invalid credentials → Login error
- No tenant access → Tenant selection required
- No feature access → "No features available" message

**Evidence**: `playwright-tests/tests/auth/login.spec.ts`, `web/app/routes/auth+/login._index.tsx`

[... continue for all flows ...]

## E. Indexes

### Feature Index (A-Z)

- **Actions** → [Actions Feature](#actions-feature-set)
- **Administration** → [Administration Domain](#administration)
- **Checklists** → [Checklist Library](#checklist-library)
- **Controls** → [Control Management](#control-management)
- **Event Management** → [Event Management](#event-management-feature-set)
- **Forms** → [Form Builder](#form-builder)
- **Inspections** → [Inspections Feature Set](#inspections-feature-set)
- **Risk Register** → [Risk Register](#risk-register)
- **Verifications** → [Verifications Feature Set](#verifications-feature-set)
  [... continue alphabetically ...]

### Route Index

| Route                              | Feature                      | Evidence                                                |
| ---------------------------------- | ---------------------------- | ------------------------------------------------------- |
| `/app/verifications`               | Verifications Feature Set    | `web/app/routes/app+/verifications+/_index.tsx`         |
| `/app/verifications/fill/{formId}` | Verifications - Form Filling | `web/app/routes/app+/$featureSetKey+/fill+/$formId.tsx` |
| `/app/actions`                     | Actions Feature Set          | `web/app/routes/app+/actions+/index.tsx`                |
| `/app/actions/{actionId}/review`   | Actions - Review             | `web/app/routes/app+/actions+/$actionId.review.tsx`     |
| `/admin/tenants`                   | Admin - Tenant Management    | `web/app/routes/admin+/tenants+/_index.tsx`             |

[... continue for all routes ...]

### Domain Object Index

| Domain Object  | Created In                                                           | Edited In                                                             | Viewed In                                                          | Evidence                                                                      |
| -------------- | -------------------------------------------------------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| `Action`       | Verifications/Inspections (from responses), Events, Action Templates | Actions module (`/app/actions/{id}/update-status`)                    | Actions list (`/app/actions`), Action detail (`/app/actions/{id}`) | `api/src/modules/action/`, `web/app/routes/app+/actions+/`                    |
| `Form`         | Form Builder (`/app/settings/content-management/forms`)              | Form Builder                                                          | Form list, Form detail                                             | `api/src/modules/form/`, `web/app/routes/app+/settings+/content-management+/` |
| `FormResponse` | Form Filling (`/app/{featureSetKey}/fill/{formId}`)                  | Response editing (`/app/{featureSetKey}/responses/{responseId}/edit`) | Response list, Response detail                                     | `api/src/modules/form/`, `web/app/routes/app+/$featureSetKey+/responses+/`    |

[... continue for all domain objects ...]
```

### Quality Checks

Before finalising, verify:

- ✅ Every feature has at least one code evidence anchor (route/file/module reference)
- ✅ Features are grouped logically (not just a flat list)
- ✅ Flows traverse multiple features and reference entry points
- ✅ Cross-cutting capabilities are separated from domain features
- ✅ All three indexes are present (Feature, Route, Domain Object)
- ✅ Australian English spelling throughout
- ✅ Internal links use proper anchor format
- ✅ Code references use backticks for file paths

## Completion

1. **Final save**: Ensure all content has been written to `.specify/product-feature-map-{timestamp}.md`
2. Output the file path to the user
3. Provide a brief summary:
   - Number of features documented
   - Number of user flows documented
   - Number of routes indexed
   - Number of domain objects indexed

**Note**: Since the file is saved incrementally throughout the process, if the command times out, the partially completed file will still be available. You can resume by reading the existing file and continuing from where it left off.

## Rules

1. **Incremental Saving**: **CRITICAL** - Save the file frequently:
   - Save after every ~100 lines of content generated
   - Save after completing each major section
   - Do not wait until the end or batch too much content
   - This prevents data loss if the process times out
2. **Be Evidence-Based**: Every feature must cite at least one code reference (route, file, or module)
3. **Mark Uncertainties**: If evidence is indirect, mark as `(Assumption)` and cite the evidence
4. **Use Australian English**: "organise" not "organize", "colour" not "color", etc.
5. **Keep It Scannable**: Use short paragraphs, bullets, and tables
6. **Don't Invent Features**: Only document features with code evidence
7. **Hierarchical Organisation**: Group features by domain, then feature set, then feature
8. **Flow Completeness**: Each flow should show complete user journey from trigger to completion
9. **Index Usability**: Indexes should enable quick lookup of features, routes, and objects
10. **Resume Capability**: If resuming from a partial file, read the existing content first and continue from where it left off
