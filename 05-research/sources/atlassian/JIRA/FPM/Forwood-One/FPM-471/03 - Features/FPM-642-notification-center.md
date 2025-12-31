# FPM-642: Notification Center

**Type:** Feature (hierarchyLevel 2)  
**Status:** In Development  
**Priority:** Medium  
**Created:** 2025-07-16  
**Updated:** 2025-07-16  
**Labels:** FFPP

**Parent Theme:** [FPM-472: Phase 1: MVP - Ready for Product Demos and Sales/CS/Support Training - Platform, verification and question config](../themes/FPM-472-phase-1-mvp.md)

**JIRA Link:** [https://forwood.atlassian.net/browse/FPM-642](https://forwood.atlassian.net/browse/FPM-642)

---

## Summary

Notification Center

---

## Description

## **Prototype Explanation -** [**Notifications Prototype Explainer **](https://www.loom.com/share/7b379f97d85a4a5d844cd31c9f70ad1c?sid=dcefa5c8-d1cb-4a5d-a849-253f745c2f9d)  
**Prototype -** [**Notifications Prototype - COVE**](https://cove.ai/s/cXOCY6d?pos=-1264%2C-1340%2C0.500)

# Notifications - Oculus (PRD)

---

## Executive Summary

The Notifications System is a comprehensive notification management platform integrated into Oculus. It provides real-time alerts, centralized inbox management, configurable notification settings, and deep linking capabilities to keep users informed about critical workplace safety activities, actions, and events.

---

## Objectives

* Deliver real-time, relevant alerts to users without disrupting workflow.
* Provide a centralized, searchable inbox for managing notifications.
* Enable configurable notification settings for push and email delivery.
* Support deep linking for direct navigation to relevant content.
* Routing through auth to specific context (ie a specific action)
* Ensure compliance with data protection, security, and audit requirements.
* Provide traceability by showing the **parent context** of each notification (e.g., which inspection, incident, or task triggered it).
* Device/app detection

---

## Core Components

### 1. Notifications Popup Overlay

**Purpose:** Provide quick access to recent notifications without navigating away from current workflow.

**Key Features:**

* Bell icon with unread count badge on home screen.
* Overlay popup showing recent notifications.
* Progressive loading: first 10 notifications initially, infinite scroll for more.
* "See all" button linking to full inbox.
* Individual notification actions (mark as read, view details).
* Quick preview of notification content.
* **Parent Reference:** Each notification should display where it originated from (e.g., "Action created in Inspection #123" or "Verification linked to Incident #456").

---

### 2. Notifications Inbox

**Purpose:** Centralized management interface for all notifications with advanced filtering and organization.

**Key Features:**

* Complete notification history.
* Advanced filtering:

    * Type dropdown (Actions, Events, Inspections, Verifications, All).
    * Date range filter.
    * Search functionality.
    
* Bulk operations (mark as read, delete).
* Detailed notification view with context and action buttons.
* Read/unread status management.
* **Parent Reference:** All notifications must show their parent context (e.g., the inspection, verification, or incident that triggered the notification).

**Notification Categories:**

| Category | Notification Types | Purpose |
| --- | --- | --- |
| Actions | Assigned, Updated, Completed, Approval request, Approved, Rejected, Due soon, Overdue | Track corrective action lifecycle and assignments. |
| Events | HiPo reported, New Incident, Incident complete | Alert users to critical safety events and incidents. |
| Inspections | Assigned, Due soon, Overdue | Manage inspection scheduling and compliance. |
| Verifications | Assigned, Due soon, Overdue | Track verification tasks and deadlines. |

---

### 3. Notification Settings

**Purpose:** User-configurable notification preferences and delivery management.

**Key Features:**

* Global toggles: All Push, All Email.
* Granular notification type configuration.
* Dual-channel delivery (Push + Email).
* Individual enable/disable controls.
* Template-based notification integration.

**Settings Organization:**

* "What notifications you receive" container with master toggles.
* Groupings by Actions, Events, Inspections, Verifications.
* Per-type Push and Email toggles.
* Clean UI (no priority/status indicators).

---

### 4. Deep Linking Requirements

**Purpose:** Enable direct navigation from notifications to specific app sections and content.

**Key Requirements:**

* All notifications must include deep links.
* Deep links should work from both push and email notifications.
* Links must take users directly to the relevant screen inside the app, maintaining context.
* Should support both authenticated (logged in) and unauthenticated (login required) scenarios.

**Examples of Deep Linking in Action:**

* A user receives a notification about a new **Action Assignment**. Tapping the notification opens the **Action Details** screen for that specific action.
* A notification about an **Inspection Due** takes the user straight into the inspection form, ready to complete.
* A notification about a **Verification Task** opens the verification interface, showing the correct task to complete.
* An **Incident Alert** notification directs the user immediately to the incident report details.
* A reminder about **Overdue Notifications** opens the Notifications Inbox, pre-filtered to show only overdue items.

**Implementation Notes:**

* Universal link support for seamless app integration.
* Fallback handling (e.g., redirect to login if app not open).
* Secure parameter validation.
* Analytics tracking to measure deep link engagement.

---

## Technical Architecture

* **Delivery:** Real-time push + email, in-app queue with persistence.
* **Data:** Read/unread tracking, user preference storage, template-based generation, automated triggers.
* **Performance:** Lazy loading, efficient search, optimized mobile rendering, background sync.

---

## User Experience Design

* **Mobile-First:** Touch-optimized, responsive overlays.
* **Gestures:** Swipe actions for notifications.
* **Low Disruption:** Quick overlay access.
* **Accessibility:** Clear indicators, consistent icons, readable typography, screen reader compatibility.

---

## Integration Points

* Workplace Inspection Manager: inspections, actions, verifications, incidents.
* External Systems: email service, push service, audit trail, user management system.

---

## Security and Compliance

* Access controls, encrypted delivery.
* User privacy controls.
* Audit logging.
* Retention policies, compliance reporting, data sovereignty.

---

## Acceptance Criteria

### Notifications Popup Overlay

* Bell icon with unread count is visible on the home screen.
* Clicking the icon opens an overlay/pop up showing the last 10 notifications.
* Overlay loads 10 notifications initially, then progressively loads more on scroll.
* Each notification displays: type, timestamp, sender, preview, read/unread state, **parent reference**.
* "See all" button redirects to the full inbox.
* Users can mark a notification as read or open its details directly.
* Users can click the "x" to remove a notification from the list (the next most recent notification should move into the screen)

### Notifications Inbox

* Inbox displays the full history of notifications.
* Users can filter by type (Actions, Events, Inspections, Verifications, All).
* Users can perform bulk actions (mark multiple as read, delete).
* Each notification displays complete context, including **parent reference**.
* Clicking notifications take you to the context with associated actions.
* Read/unread status is updated consistently across overlay and inbox.

### Notification Settings

* Global toggles exist for enabling/disabling all Push and Email notifications.
* Users can enable/disable individual notification types, with separate toggles for Push and Email.
* Settings are saved per user and persist across sessions.

### Deep Linking Requirements

* Every notification includes a deep link.
* Tapping a notification from push/email opens the correct app screen.
* Links maintain context (e.g., open the exact action, inspection, verification, or incident)..
* If the app is not open/authenticated, links redirect to login, then proceed to the intended screen.

---

## Out of Scope

* **Configurable notification templates** beyond the pre-defined system templates (advanced user customization of templates is not included in this release).
* **SMS, WhatsApp, or other messaging services** for notification delivery (only Push + Email supported).
* **Other types of notifications** such as system health, downtime alerts, release notes, or marketing messages. This feature focuses exclusively on safety-related and workflow-related notifications.

---

## Related Information

- **Project:** Forwood Product Management (FPM)
- **Issue Type:** Feature
- **Hierarchy Level:** 2

