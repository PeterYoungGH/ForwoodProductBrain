# FPM-531: Communication and Support: Intercom / Support Chat Integration

**Type:** Feature (hierarchyLevel 2)  
**Status:** Launched  
**Priority:** Medium  
**Created:** 2025-06-09  
**Updated:** 2025-06-09  
**Labels:** FFPP

**Parent Theme:** [FPM-472: Phase 1: MVP - Ready for Product Demos and Sales/CS/Support Training - Platform, verification and question config](../themes/FPM-472-phase-1-mvp.md)

**JIRA Link:** [https://forwood.atlassian.net/browse/FPM-531](https://forwood.atlassian.net/browse/FPM-531)

---

## Summary

Communication and Support: Intercom / Support Chat Integration

---

## Description

Summary: Implement Intercom Integration for Contextual Customer Support

Description:

Overview  
Introduce Intercom integration to the Forwood Safety Platform, providing contextual customer support and communication capabilities. The integration will include a floating chat widget that can be selectively enabled or disabled across different areas of the application based on development team configuration.

User Stories & Acceptance Criteria  
Story 1: User Access to Contextual Help As a platform user, I want to access contextual help and support through an integrated chat widget, so that I can get assistance without leaving my current workflow.

Acceptance Criteria:

WHEN a user is on a page where Intercom is enabled THEN the Intercom floating chat button SHALL be visible in the bottom-right corner  
WHEN a user clicks the Intercom chat button THEN the chat interface SHALL open with appropriate user context  
WHEN a user is authenticated THEN their user information SHALL be passed to Intercom for personalized support  
WHEN a user is on mobile resolution THEN the chat interface SHALL be optimized for touch interactions  
WHEN a user navigates between pages THEN the chat state SHALL persist appropriately  
Story 2: Developer Control of Widget Placement As a developer, I want to control where the Intercom widget appears in the application, so that I can provide contextual support only where it's most valuable and avoid interference with critical workflows.

Acceptance Criteria:

WHEN configuring Intercom for a route or component THEN the system SHALL support feature flag-based enablement  
WHEN Intercom is disabled for a specific area THEN the widget SHALL not render or load Intercom scripts  
WHEN enabling Intercom for a new area THEN the configuration SHALL be manageable through feature flags without code deployment  
WHEN multiple areas have different Intercom settings THEN the system SHALL respect the most specific configuration  
IF Intercom is globally disabled THEN no Intercom functionality SHALL be available regardless of area-specific settings  
Story 3: Role and Context Awareness As a safety manager, I want the chat support to understand my role and company context, so that I receive relevant assistance for my specific safety management needs.

Acceptance Criteria:

WHEN a user initiates chat THEN their role (COMPANY_ADMIN, COMPANY_USER, etc.) SHALL be passed to Intercom  
WHEN a user starts a conversation THEN their company information SHALL be available to support agents  
WHEN a user is viewing a specific safety module THEN the current context SHALL be included in the chat metadata  
WHEN a user has an active incident or form THEN relevant identifiers SHALL be passed for context  
IF user data is sensitive THEN only necessary, non-PII information SHALL be shared with Intercom  
Story 4: Central Management As a system administrator, I want to manage Intercom integration settings centrally, so that I can control the support experience across the entire platform.

Acceptance Criteria:

WHEN configuring Intercom settings THEN the system SHALL support environment-specific configurations (dev, staging, prod)  
WHEN updating Intercom settings THEN changes SHALL take effect without requiring application restart  
WHEN Intercom is unavailable THEN the application SHALL gracefully degrade without affecting core functionality  
WHEN monitoring Intercom usage THEN appropriate analytics SHALL be captured for support effectiveness  
IF Intercom service fails THEN users SHALL receive appropriate fallback support options  
Story 5: Mobile Optimization As a mobile user, I want the chat interface to work seamlessly on my device, so that I can get support while working in the field or on smaller screens.

Acceptance Criteria:

WHEN using the platform on mobile devices THEN the Intercom widget SHALL be appropriately sized and positioned  
WHEN the chat interface opens on mobile THEN it SHALL not obstruct critical UI elements  
WHEN typing in the chat on mobile THEN the interface SHALL handle keyboard appearance gracefully  
WHEN switching between portrait and landscape THEN the chat interface SHALL adapt appropriately  
WHEN using touch gestures THEN all chat interactions SHALL be responsive and intuitive  
Story 6: Compliance and Data Protection As a compliance officer, I want to ensure that chat communications comply with data protection requirements, so that we maintain regulatory compliance while providing support.

Acceptance Criteria:

WHEN user data is transmitted to Intercom THEN it SHALL comply with GDPR and privacy regulations  
WHEN chat conversations contain sensitive information THEN appropriate data handling policies SHALL be enforced  
WHEN users request data deletion THEN Intercom data SHALL be included in the deletion process  
WHEN audit trails are required THEN chat interactions SHALL be logged appropriately  
IF data residency requirements exist THEN Intercom configuration SHALL respect geographic constraints  
Technical Considerations  
Must work seamlessly across web and mobile app resolutions  
Maintain platform security and user experience standards  
Feature flag-based configuration system  
Environment-specific settings support

---

## Related Information

- **Project:** Forwood Product Management (FPM)
- **Issue Type:** Feature
- **Hierarchy Level:** 2

