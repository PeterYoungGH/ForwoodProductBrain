# Acceptance Criteria: FPM-642 - Notification Center

**JIRA Issue:** [FPM-642](https://forwood.atlassian.net/browse/FPM-642)  
**Extracted Date:** 2025-12-10  
**Issue Hierarchy:**
- FPM-642: Notification Center
  - EAP-349: Notifications Popup Overlay
  - EAP-357: Notifications Inbox
  - EAP-361: Notifications Foundational Setup
  - EAP-368: Notification Settings

---

## FPM-642: Notification Center

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

#### Notifications Popup Overlay

[ ] Bell icon with unread count is visible on the home screen.
[ ] Clicking the icon opens an overlay/pop up showing the last 10 notifications.
[ ] Overlay loads 10 notifications initially, then progressively loads more on scroll.
[ ] Each notification displays: type, timestamp, sender, preview, read/unread state, **parent reference**.
[ ] "See all" button redirects to the full inbox.
[ ] Users can mark a notification as read or open its details directly.
[ ] Users can click the "x" to remove a notification from the list (the next most recent notification should move into the screen)

#### Notifications Inbox

[ ] Inbox displays the full history of notifications.
[ ] Users can filter by type (Actions, Events, Inspections, Verifications, All).
[ ] Users can perform bulk actions (mark multiple as read, delete).
[ ] Each notification displays complete context, including **parent reference**.
[ ] Clicking notifications take you to the context with associated actions.
[ ] Read/unread status is updated consistently across overlay and inbox.

#### Notification Settings

[ ] Global toggles exist for enabling/disabling all Push and Email notifications.
[ ] Users can enable/disable individual notification types, with separate toggles for Push and Email.
[ ] Settings are saved per user and persist across sessions.

#### Deep Linking Requirements

[ ] Every notification includes a deep link.
[ ] Tapping a notification from push/email opens the correct app screen.
[ ] Links maintain context (e.g., open the exact action, inspection, verification, or incident).
[ ] If the app is not open/authenticated, links redirect to login, then proceed to the intended screen.

### General Usability & Responsive Design

[ ] Layout is responsive and adapts to different screen sizes (desktop, tablet/iPad)
[ ] All UI elements resize appropriately when browser window is resized
[ ] Form/interface maintains usable layout at minimum supported resolution (tablet/iPad)
[ ] Modals and dialogs are properly sized and centered on all supported resolutions
[ ] Text remains readable and doesn't overflow containers at any supported resolution
[ ] Buttons and interactive elements maintain minimum touch target sizes (44x44px) on tablet
[ ] Navigation elements (menus, toolbars) remain accessible and functional at all resolutions
[ ] No horizontal scrolling required at supported resolutions
[ ] Vertical scrolling works smoothly when content exceeds viewport height
[ ] Loading states and progress indicators display correctly at all resolutions
[ ] Error messages and validation feedback remain visible and readable
[ ] Icons and images scale appropriately without pixelation or distortion
[ ] Test layout at common desktop resolutions (1920x1080, 1366x768, 1280x720)
[ ] Test layout at tablet resolutions (iPad: 1024x768, 2048x1536; iPad Pro: 2732x2048)
[ ] Test browser window resizing from maximum to minimum supported size
[ ] Test all modals and dialogs at different resolutions
[ ] Test with browser zoom levels (100%, 125%, 150%, 75%)
[ ] Test that no content is hidden or cut off at any supported resolution
[ ] Test that all interactive elements remain clickable/tappable at minimum sizes
[ ] Test layout consistency across different browsers at same resolution

---

## EAP-349: Notifications Popup Overlay

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] All overlay behaviours listed above work as designed and match the PRD and mockups.
[ ] Read/unread state is consistent between Overlay and Inbox.
[ ] "See all" routes to Inbox.
[ ] Performance: initial set renders quickly; additional items load on scroll.

---

## EAP-357: Notifications Inbox

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] Dedicated Notifications Inbox page accessible via "See All" button in overlay or direct navigation.
[ ] Displays all notifications with consistent design and layout per prototype.
[ ] Supports filtering, sorting, and pagination.
[ ] Syncs state with overlay and header badge in real time.
[ ] Fully responsive and accessible across devices/browsers.

---

## EAP-361: Notifications Foundational Setup

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

*No acceptance criteria specified in the issue description.*

---

## EAP-368: Notification Settings

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] Dedicated Notification Settings page accessible from the user profile/settings menu.
[ ] Users can toggle on/off notification types (e.g., Actions, Events, Inspections, Verifications).
[ ] Users can choose delivery method(s):
  - In-app only
  - Email + in-app
[ ] All settings persist for the user and sync across sessions/devices.
[ ] UI design matches prototypes.

---

## Child Stories and Tasks

### EAP-350: Add Notifications Bell with Unread Count

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] Bell icon is visible in the header/home screen as per the mockups.
[ ] An unread count badge is displayed on the bell, reflecting the user's current unread notifications total.
[ ] Badge updates when notifications are marked read/unread (source of truth aligned with Inbox).
[ ] Clicking/tapping the bell invokes the overlay entry point (overlay content built in subsequent stories).

---

### EAP-351: Implement Notifications Overlay Panel

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] Overlay opens when the bell icon is clicked/tapped.
[ ] Overlay displays a list of recent notifications, showing:
  - Notification type (e.g., risk, task, etc.)
  - Timestamp
  - Sender
  - Message preview
  - Parent reference (if applicable)
  - Read/unread state (visual distinction).
[ ] Initial load shows the 10 most recent notifications.
[ ] Scrolling loads additional notifications progressively.
[ ] Overlay includes a "See All" button that links to the Notifications Inbox.
[ ] Layout and design match the prototype mockups (COVE).
[ ] Responsive behaviour validated across supported browsers.

---

### EAP-352: Enable Mark as Read/Unread in Notifications Overlay

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] Each notification item in the overlay has a control (e.g., checkbox, menu option, or icon per prototype) to toggle read/unread.
[ ] Read/unread status updates instantly in the overlay UI.
[ ] Changes sync correctly with:
  - Notifications Inbox (reflects updated state).
  - Header unread count (badge updates accordingly).
[ ] Visual distinction between read vs unread notifications matches the prototype (e.g., bold vs normal text).
[ ] State persists after page refresh/reopen.

---

### EAP-353: Quick View Notification Details

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] Each notification item includes an action (e.g., "View details" link or expand icon as per prototype).
[ ] Clicking opens a quick preview panel within the overlay.
[ ] Preview includes:
  - Full message content
  - Sender
  - Timestamp
  - Parent reference
[ ] User can dismiss/close preview to return to the list.
[ ] Read/unread status updates automatically when a notification is opened.
[ ] Visuals and layout align with the prototype mockups.

---

### EAP-354: Add "See All" Button Linking to Inbox

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] "See All" button is displayed at the bottom of the overlay (placement matches prototype).
[ ] Clicking the button opens the Notifications Inbox screen.
[ ] Inbox view shows the full list of notifications beyond the initial 10.
[ ] Navigation works consistently across supported browsers.
[ ] Visual styling and placement follow the prototype mockups.

---

### EAP-355: Sync Read/Unread State Across Overlay, Inbox, and Header Badge

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] When a notification is marked as read/unread in the overlay, the change is reflected:
  - In the Inbox immediately.
  - In the header badge count (number updates).
[ ] When a notification is marked as read/unread in the Inbox, the change is reflected:
  - In the overlay immediately.
  - In the header badge count.
[ ] When a notification is opened in the overlay (quick view), it automatically changes to read and updates everywhere.
[ ] State persists after page reload.
[ ] No duplication or mismatches of read/unread state.

---

### EAP-356: Responsive Design and Cross-Browser Validation for Notifications Overlay

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] Overlay layout adapts correctly on desktop, tablet, and mobile screen sizes.
[ ] No overlap, truncation, or broken styling at any viewport size.
[ ] Tested and validated on all supported browsers (Chrome, Edge, Firefox, Safari).
[ ] Scroll and progressive loading function correctly on both desktop and mobile.
[ ] Visual design matches prototype mockups across breakpoints.

---

### EAP-358: Build Notifications Inbox Page with List View of Notifications

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] Inbox page is accessible via the "See All" button in the overlay and via direct navigation URL.
[ ] Notifications are displayed in a list format showing:
  - Type (e.g., Risk, Action Plan, etc.)
  - Sender
  - Timestamp
  - Message preview
  - Read/unread state (with visual distinction).
[ ] Inbox loads the most recent 20 notifications by default.
[ ] Pagination (or infinite scroll, depending on prototype) loads additional notifications.
[ ] Layout matches prototype mockups.
[ ] Fully responsive and cross-browser validated.

---

### EAP-359: Implement Filtering and Search in Notifications Inbox

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] The Inbox includes a Type filter dropdown with options: Actions, Events, Inspections, Verifications, All.
[ ] The Inbox includes a Date range filter (from/to).
[ ] The Inbox includes a Search input that matches notification text and metadata shown in the list (e.g., message preview, sender).
[ ] Filters and search can be used together and update results without a full page reload.
[ ] Clear visual indicators show which filters are active and provide a one-click Clear filters action.
[ ] The list updates immediately when filters/search change and preserves read/unread styling.
[ ] Filter/search state persists when navigating back from a notification detail and when returning from the overlay's See All link (same session).
[ ] Works across supported browsers and common viewports.

---

### EAP-360: Enable Bulk Actions in Notifications Inbox

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] Each notification in the Inbox list includes a checkbox for selection.
[ ] Users can:
  - Select individual notifications.
  - Select all notifications on the current page (via a header checkbox).
[ ] Available bulk actions include:
  - Mark as read.
  - Mark as unread.
[ ] Bulk actions apply instantly to selected notifications with visual confirmation.
[ ] Read/unread state updates sync with the overlay and header badge count.
[ ] Selection state clears after an action is completed.

---

### EAP-362: Core Notification Data Models & Schema

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] Notification Type Management:
  - Create `NotificationType` model with fields: `id`, `name`, `category`, `description`, `defaultEnabled`, `createdAt`, `updatedAt`
  - Support notification categories: `ACTIONS`, `EVENTS`, `INSPECTIONS`, `VERIFICATIONS`
[ ] Core Notification Storage:
  - Create `Notification` model with fields: `id`, `typeId`, `userId`, `title`, `message`, `metadata` (JSON), `isRead`, `readAt`, `createdAt`
  - Add relevant indexes for efficient inbox queries
  - Support JSON metadata for flexible notification context data
[ ] User Notification Preferences:
  - Extend existing `UserPreferences` JSON structure to include notification settings
  - Add notification preferences schema: `{ notifications: { [typeId]: { email: boolean, push: boolean, enabled: boolean } } }`
  - Maintain backward compatibility with existing preference structure
[ ] Delivery Tracking (optional, TBC):
  - Create `NotificationDelivery` model with fields: `id`, `notificationId`, `channel` (EMAIL/PUSH), `status` (PENDING/SENT/FAILED), `deliveredAt`, `failureReason`, `metadata` (JSON)
  - Support multiple delivery channels per notification

---

### EAP-363: Notification API Layer & Business Logic

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] Notification CRUD API Operations:
  - `GET /api/notifications` - List user notifications with filtering (read/unread, type, date range)
  - `GET /api/notifications/:id` - Get specific notification details
  - `PATCH /api/notifications/:id/read` - Mark notification as read
  - `PATCH /api/notifications/mark-all-read` - Mark all user notifications as read
  - `DELETE /api/notifications/:id` - (soft delete)
[ ] Notification Type Management:
  - `GET /api/notification-types` - List available notification types for tenant
  - `PATCH /api/notification-types/:id` - Update notification type settings
[ ] User Preference Management:
  - `GET /api/user/notification-preferences` - Get current user's notification preferences
  - `PATCH /api/user/notification-preferences` - Update notification preferences
  - Support granular control per notification type and delivery channel
[ ] Real-time Delivery Support (Optional, TBC):
  - `GET /api/notifications/sse` - Server-Sent Events endpoint for real-time notifications
  - Connection management with JWT authentication
  - Automatic cleanup of inactive connections

---

### EAP-364: Implement Pagination / Infinite Scroll in Notifications Inbox

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] Inbox loads the 20 most recent notifications by default.
[ ] Additional notifications are loaded via:
  - Infinite scroll (auto-load when user reaches bottom), or
  - Pagination controls (Next/Previous), depending on prototype.
[ ] Loading indicator (spinner or placeholder) displays while fetching additional notifications.
[ ] Newly loaded notifications append seamlessly without refreshing the page.
[ ] Read/unread state is preserved across pages/batches.
[ ] Filters and search work consistently with pagination/infinite scroll applied.
[ ] Performance validated to ensure smooth scrolling/loading.

---

### EAP-366: Sync Read/Unread State Between Inbox, Overlay, and Header Badge

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] When a notification is marked as read/unread in the Inbox, the change is immediately reflected:
  - In the overlay list.
  - In the header unread count badge.
[ ] When a notification is opened from the Inbox (detail view), it automatically updates to "read."
[ ] State persists after page reload or navigation.
[ ] No mismatch or duplication of read/unread status across components.

---

### EAP-367: Notification Detail View in Inbox

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] Clicking a notification in the Inbox opens a detail view (inline panel or dedicated screen, per prototype).
[ ] Detail view displays:
  - Notification type, timestamp, sender
  - Full message/content (not truncated)
  - Parent reference (e.g., the inspection/incident/action/verification that triggered it)
  - Relevant action button to go to the item's context (consistent with prototype).
[ ] Opening the detail view sets the notification to read and this state is reflected in:
  - The Inbox list (styling updates)
  - The overlay
  - The header unread count
[ ] Closing the detail view returns to the same position in the list, preserving filters/search/pagination state.
[ ] Layout and styling match the prototype mockups.

---

### EAP-369: Build Notification Settings Page (Base Layout & Navigation)

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] A Notification Settings page exists and is accessible from the user profile/settings menu.
[ ] Page includes a top-level container: "What notifications you receive."
[ ] Page shows two master channel toggles: All Push and All Email (on/off).
[ ] Below the master toggles, display grouped sections for: Actions, Events, Inspections, Verifications (placeholders only in this story).
[ ] Layout and labels match the PRD/prototype (clean UI, no priority/status indicators).
[ ] State changes for master toggles persist for the signed-in user and survive page refresh.
[ ] Page is responsive and renders correctly on supported browsers.

---

### EAP-370: Implement Per-Type Notification Toggles

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] Each notification category (Actions, Events, Inspections, Verifications) displays two toggles:
  - Push (in-app) on/off.
  - Email on/off.
[ ] Toggling a category's switch only affects that specific category.
[ ] State changes persist for the signed-in user and survive page refresh.
[ ] Changes update immediately without requiring page reload.
[ ] Layout and labels match the PRD/prototype design.
[ ] Responsive and cross-browser validated.

---

### EAP-371: Persist and Sync Notification Preferences Across Devices/Sessions

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] All notification preferences are saved to the backend immediately when updated.
[ ] On login, user preferences are retrieved and applied to the UI (master toggles, per-type toggles, frequency selections).
[ ] Changes made on one device are reflected when the user logs in from another device.
[ ] Preferences persist across browser sessions and page refreshes.
[ ] Error handling: if saving preferences fails, user is notified and prior state is retained.

---

### EAP-376: Notification System EventBridge Integration

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] Add `notification` detail-type to existing event routing strategy
[ ] Create dedicated `notification-events.fifo` SQS queue following established patterns
[ ] Configure EventBridge rule to route notification events to new queue
[ ] Maintain consistency with existing queue configurations (14-day retention, 3 retries, shared DLQ)

---

### EAP-377: Notification Producer/Consumer Architecture

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] Business Logic Integration (Producer Side):
  - Implement `NotificationProducerService` responsible for:
    - Creating the notification (calls the already defined `NotificationService` to insert the record to the DB)
    - Invoking the `NotificationDispatchService` to deliver the message
  - Modify `ActionServiceImpl` to call the `NotificationProducerService` within transaction when action owner is assigned or changed.
  - Call existing `NotificationDispatchService` after successful notification creation
  - Integrate with user notification preferences to determine delivery channels
  - Handle notification creation for action assignment and update scenarios
[ ] Lambda Consumer (NotificationHandler):
  - Create `notification-handler.ts` Lambda function in `lambda/` directory
  - Process messages from `notification-events.fifo` SQS queue with batch processing
  - Fetch notification details from database using `notificationId` from event payload
  - Implement delivery logic for email and push notifications
  - Update `NotificationDelivery` table with delivery status and attempts
[ ] Email Delivery Integration:
  - Integrate with existing AWS SES infrastructure
  - Create notification email templates for different event types
  - Support HTML and text email formats with unsubscribe links
  - Handle SES delivery failures and bounce notifications
[ ] Push Notification Support (Optional, TBC):
  - Mark notifications as available for real-time delivery in database
  - Support notification read/unread state management
  - Prepare foundation for future SSE/WebSocket integration

---

**Note:** General Usability & Responsive Design section appears only once at the parent feature level, not for each child issue.
