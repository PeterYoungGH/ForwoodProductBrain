# FPM-569: Dashboard - MVP - Quick Actions, Key Metrics, Actions

**Type:** Feature (hierarchyLevel 2)  
**Status:** Launched  
**Priority:** Medium  
**Created:** 2025-06-26  
**Updated:** 2025-06-26  
**Labels:** FFPP

**Parent Theme:** [FPM-472: Phase 1: MVP - Ready for Product Demos and Sales/CS/Support Training - Platform, verification and question config](../themes/FPM-472-phase-1-mvp.md)

**JIRA Link:** [https://forwood.atlassian.net/browse/FPM-569](https://forwood.atlassian.net/browse/FPM-569)

---

## Summary

Dashboard - MVP - Quick Actions, Key Metrics, Actions

---

## Description

**Level 1 Requirements Document: Dashboard Screen**

---

1. **Overview**

The Dashboard Screen serves as the personalised homepage of the Forwood Safety Platform. It provides users with quick access to key safety management functions, real-time metrics, their assigned tasks, and recent safety activity logs. The dashboard is user-centric and role-aware, dynamically adapting to show relevant panels and data based on permissions and customisation preferences.  
  
**Prototype Example Screen Shots**  
[https://cove.ai/s/gtWjr9P?pos=79%2C-101%2C0.500](https://cove.ai/s/gtWjr9P?pos=79%2C-101%2C0.500)

---

2. **Goals**

* Provide a centralised, at-a-glance view of safety-critical information.
* Streamline access to frequent tasks and forms.
* Support proactive safety management through visibility of key metrics and responsibilities.
* Enable per-user customisation of dashboard content and layout.
* Ensure consistent usability across desktop and mobile.

---

3. **Target Users**

The dashboard is accessible to all platform users. Common examples include:

* Operators
* Supervisors
* Managers
* Any other users with access, including audit or read-only roles

All users must have access scoped by their company and permissions.

---

4. **Key Panels and Functionality**

The dashboard is composed of four core panels:

1. **Quick Actions Panel**

    * Shows shortcuts to create or initiate key safety forms or workflows.
    * Users can choose which actions to include.
    * Buttons are filtered by permission and feature availability.
    
2. **Key Metrics Panel**

    * Displays visual summaries of current safety performance (e.g., Open Actions, Verifications Completed).
    * Metrics are filtered by the user's scope within the company taxonomy.
    * Users can select which metrics to display.
    
3. **My Actions Panel**

    * Shows all actions assigned to the user.
    * Includes filters by status (All, In Progress, In Review, Completed).
    * Clicking an action opens the full action view.
    
4. **Recently Completed Activities Panel**

    * Displays a timeline/log of recently completed safety activities.
    * Includes type, title, completed by, date/time, and location.
    

Additional functionality:

* **Customise Dashboard Mode**

    * Allows users to toggle edit mode and customise which Quick Actions and Metrics appear.
    * Changes are persisted to the user profile.
    

---

5. **Scope and Boundaries**

_In Scope:_

* Rendering and layout of dashboard panels.
* Real-time and periodic data refresh.
* Per-user preferences.
* Permission-based filtering.
* Mobile and desktop layout.

_Out of Scope:_

* Detailed reporting or analysis beyond linked drill-down views.
* Admin control over layout (dashboard is user-managed).

---

6. **Architecture & Integration Notes**

_To be completed by a technical architect._

---

7. **Non-Functional Requirements**

* Initial dashboard load must complete within 2 seconds.
* Real-time updates to My Actions within 30s of changes.
* Recently Completed Activities updates within 1 minute of form completion.
* Data refresh cycle every 5 minutes for key metrics.
* Metrics and task panels should always reflect the most current state when the user navigates to the dashboard.
* If the dashboard remains open, periodic refresh should occur (recommended: every 1 minute). The actual refresh interval can be determined by technical architects to balance performance and data currency.
* Where possible, panels should be implemented with lazy loading so that they load independently. This ensures that if one panel (e.g., Key Metrics) is delayed, the rest of the dashboard remains responsive.
* Responsive layout and touch interactions optimised for mobile.
* Button interactions should respond within 200ms.
* Audit logging of user customisation changes.

---

8. **Open Questions**

* \[Removed\] Should admin roles be able to define default dashboards for new users? → Not in scope for this implementation.
* Should the dashboard support layout persistence across multiple devices or just per-user? → Per-user only. Layout should be consistent across desktop and mobile for the individual user.
* Should mobile hide any panels or only change layout? → All panels should remain visible on mobile; layout should adapt responsively.

---

---

## Related Information

- **Project:** Forwood Product Management (FPM)
- **Issue Type:** Feature
- **Hierarchy Level:** 2

