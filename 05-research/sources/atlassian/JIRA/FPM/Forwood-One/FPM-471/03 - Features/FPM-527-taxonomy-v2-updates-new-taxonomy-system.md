# FPM-527: Taxonomy - V2 Updates (New Taxonomy System)

**Type:** Feature (hierarchyLevel 2)  
**Status:** Discovery (Solution Exploration)  
**Priority:** Medium  
**Created:** 2025-06-09  
**Updated:** 2025-06-09  
**Labels:** FFPP

**Parent Theme:** [FPM-645: Oculus V2 - Safety+ Upgrade Pathway and Expanded ICP](../themes/FPM-645-oculus-v2-safety-plus-upgrade-pathway.md)

**JIRA Link:** [https://forwood.atlassian.net/browse/FPM-527](https://forwood.atlassian.net/browse/FPM-527)

---

## Summary

Taxonomy - V2 Updates (New Taxonomy System)

---

## Description

* Taxonomy: New taxonomy system (inc contractor flows)

===

@Adam Goldin - Just FYI I want to discuss how we link the user dimension to the taxonomy dimensions with this new setup

## Taxonomy System – High-Level Requirements (Consolidated for Estimation)

## 1. Overview

This feature represents a major shift in how taxonomy is managed across the platform. Historically, taxonomy has been maintained exclusively by Forwood, with clients unable to configure or adjust their organisational structures, locations, commercial arrangements, or contractor relationships. This initiative introduces **full client-side configurability**, enabling tenants to manage, govern, and publish their own taxonomy safely within the platform.

A key outcome of this initiative is to enable clients to configure and govern their taxonomy directly within **Settings → Taxonomy**. Authorised users can manage structures, define cross-dimensional relationships, import data, review impact warnings, and publish version-controlled updates.

The Taxonomy settings area includes **five primary views**:

1. **Dimensions View** – manage Company Structure, Site/Physical Location, Commercial Contracts, Contractor Companies, and (optionally) Assets.
2. **Cross-Dimension Relationships View** – create, maintain, and validate relationships between nodes in different dimensions.
3. **Visualisation View** – flowchart-style representation of hierarchies and cross-dimensional relationships.
4. **Import & Sync View** – upload CSV/Excel files for nodes and relationships, validate changes, and preview impacts.
5. **Audit Log View** – full audit trail of dimension, node, and relationship changes.

---

## 1A. Conceptual Overview (Domain-Facing)

The Taxonomy System defines the structural backbone of a tenant's operational world. It ensures users see the right information, responsibilities are correctly assigned, and reporting aligns with real organisational structures.

### Core Concepts

The model is built on three foundational ideas: **Dimensions**, **Nodes**, and **Relationships**.

#### 1. Dimensions (Top-Level Structure Types)

A **dimension** is a category of organisational information. Dimensions define how data is grouped.

System-defined dimensions:

* **Company Structure** – organisational accountability, reporting lines.
* **Site / Physical Location** – physical/geographic areas.
* **Commercial Contracts** – contracts, scopes of work, commercial groupings.
* **Contractor Companies** – contracting and subcontracting organisations.
* **Assets** (reserved; disabled by default) – equipment and infrastructure.

**Dimensions support hierarchies**, enabling parent-child structures (e.g., Region → Site → Area → Building).

#### 2. Nodes (Items Within a Dimension)

A **node** is a single item in a dimension. Examples:

* Company Structure: "Regional Office – East"
* Site: "Processing Plant"
* Contract: "Maintenance Contract #123"
* Contractor Company: "ABC Mining Services"

Nodes inherit characteristics from their parent nodes.

#### 3. Relationships (Cross-Dimension Links)

Relationships link nodes across dimensions.

Examples:

* Company Structure → Site
* Commercial Contract → Site
* Commercial Contract → Asset
* Contractor Company → Site
* User → Node

A relationship consists of:

* Source node
* Destination node
* Relationship type (e.g., "Responsible For", "Covers", "Operates At")
* Optional effective dates

### Why This Matters

Accurate taxonomy ensures:

* Proper visibility of safety records
* Correct assignment of responsibility
* Alignment with reporting and analytics
* Valid contractor and contract scoping
* Accurate risk attribution

---

## 2. System Structure

### 2.1 Core Dimensions

The platform provides **four active system dimensions** and **one reserved dimension**:

1. **Company Structure**
2. **Site / Physical Location**
3. **Commercial Contracts**
4. **Contractor Companies**
5. **Assets** (reserved/disabled by default)

These dimensions:

* Have fixed system identities
* Support metadata and hierarchies
* Cannot be deleted

### 2.2 Custom Dimensions

Tenants may define custom dimensions (hierarchical or catalogue). Constraints:

* Can link only to system dimensions
* Cannot link to other custom dimensions
* Must pass validation before publishing
* Total number is limited (TBD)

---

## 3. Preparation & Setup

Tenant Admins can:

* Create/edit nodes
* Manage hierarchies
* Configure metadata
* Establish cross-dimensional relationships
* Apply or revert draft versions
* Sync via import or API

---

## 4. Configuration Settings

### 4A. Version Control (Draft → Publish → Archive)

Taxonomy follows the same versioning model as the Form Builder and Checklist Library.

* **Draft** – all edits occur here
* **Publish** – becomes the live version; includes full impact analysis
* **Archive** – retained for historical reference

Publishing triggers:

* Warnings for affected records
* Reporting and visibility impact preview
* Validation of structural integrity

### 4B. Permissions & Roles

The **Tenant Administrator** role holds full CRUD (soft-delete) permissions for:

* Dimensions
* Nodes
* Cross-dimensional relationships
* Import/export
* Versioning and publishing

Other roles are read-only unless expanded in future.

---

## 5. Framework & Metrics

Taxonomy includes indicators such as:

* Node counts
* Validation errors
* Pending draft changes
* Relationship totals

---

## 6. Viewing & Interaction Requirements

### 6.1 Dimensions (Hierarchy) View

* Expand/collapse
* Drag/drop (with rules)
* Search and filter
* Metadata panel
* Version history panel

### 6.2 Cross-Dimension Relationships View

* Tabular and visual modes
* Create/update/delete relationships
* Validate conflicts

### 6.3 Visualisation View

* Hierarchical flowchart per dimension
* Off-tree connectors representing relationships
* Hover for relationship details

### 6.4 Import/Export and Audit Logs

---

## 7. Templates / Data Models (Still TBD!)

Shared schema across dimensions:

* Stable internal ID
* Code
* Node Type
* Name
* Metadata fields
* Parent/child links (for hierarchical dimensions)
* External reference keys
* Version metadata

---

## 8. Reporting

Taxonomy structures feed into the reporting layer:

* Dimension tables
* Relationship tables
* Versioned historical structures
* Scope-aware filtering

---

## 9. Additional Notes

* Taxonomy powers access control, dropdown filtering, and reporting logic.
* Must integrate directly with Form Builder (see Section 14).
* Draft changes must not affect live forms until published.
* All changes are audited.

---

## 10. Mobile/Responsive Strategy

* No mobile editing support

---

## 11. Conceptual Examples

### 11.1 Company Structure Example

**Company Structure (Hierarchy)**

* Executive Leadership

    * Regional Operations – North
    
        * Site Management – Alpha Mine
        * Site Management – Bravo Mine
        
    * Regional Operations – South
    
        * Processing Division – South
        
    

**Usage Example:**

* A Verification record completed at _Alpha Mine_ inherits accountability up through _Site Management – Alpha Mine_, _Regional Operations – North_, and ultimately _Executive Leadership_.

### 11.2 Site / Physical Location Example

**Physical Location (Hierarchy)**

* Alpha Mine

    * Processing Plant
    
        * Building 1
        
            * Floor 1
            * Floor 2
            
        
    * Warehouse Compound
    
        * Storage Shed A
        
    

**Usage Example:**

* A Safety Conversation logged in _Building 1 → Floor 2_ is reportable at any higher-level node (Plant, Mine, Region).

### 11.3 Commercial Contracts Example

**Commercial Contracts (Hierarchy or Catalogue)**

* Contract Group A

    * Maintenance Contract #123
    * Electrical Services Contract #221
    
* Contract Group B

    * Specialist Inspections Contract #450
    

**Usage Example:**

* An incident involving _Crane #5_ is linked to _Maintenance Contract #123_, allowing contract owners to track compliance and performance.

### 11.4 Contractor Companies Example

**Contractor Companies (Hierarchy Optional)**

* ABC Mining Services (Parent Vendor)

    * ABC Mining Services – Mechanical Division
    * ABC Mining Services – Electrical Division
    
* Precision Safety Pty Ltd

**Usage Example:**

* A contractor completing a verification is scoped to locations and assets linked to their contractor company.

### 11.5 Cross-Dimensional Relationship Example

**Example Relationships:**

* _Company Structure → Site_: "Regional Operations – North" operates "Alpha Mine".
* _Commercial Contract → Site_: "Maintenance Contract #123" applies to "Processing Plant".
* _Contractor Company → Site_: "ABC Mining Services" performs work in "Warehouse Compound".
* _Commercial Contract → Asset_: "Maintenance Contract #123" covers "Crane #5".
* _User → Company Structure_: A supervisor belongs to "Site Management – Alpha Mine".

**Usage Example:**

* When a user selects a Company Structure node in a form, only Commercial Contracts related to that structure appear, enabling relationship‑aware dropdown filtering.

---

## 12. Terminology Feedback Questions

SME-driven terminology refinement questions.

---

## 13. Open Questions & Unresolved Design Areas

Covers:

* Restrictions on modifying dimensions/nodes
* Dropdown filtering behaviour
* Cross-dimensional filtering rules
* Migration path from current taxonomy
* Relationship constraints
* API design questions
* Performance considerations
* Permission granularity

---

## 14. Form Builder Integration: Taxonomy-Based Answer Sources

Defines how taxonomy dimensions become selectable answer sources.  
Includes:

* Selecting dimensions as answer sources
* User-scope restrictions
* Cross-dimensional filtering
* Multi/single select options
* Validation and draft/publish interaction

---

## Summary

The Taxonomy System provides a governed, configurable, and interoperable foundation for structuring how safety and operational data is organised, accessed, and reported. It introduces client-managed configuration, strong version control, cross-dimensional modelling, import capability, and deep integration with forms and reporting.

---

## Related Information

- **Project:** Forwood Product Management (FPM)
- **Issue Type:** Feature
- **Hierarchy Level:** 2

