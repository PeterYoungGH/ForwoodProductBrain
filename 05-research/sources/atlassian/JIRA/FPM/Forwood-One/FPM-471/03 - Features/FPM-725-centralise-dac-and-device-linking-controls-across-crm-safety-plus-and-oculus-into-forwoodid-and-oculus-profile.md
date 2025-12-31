# FPM-725: Centralise DAC and device linking controls across CRM, Safety+ and Oculus into ForwoodID and Oculus Profile

**Type:** Feature (hierarchyLevel 2)  
**Status:** New  
**Priority:** Medium  
**Created:** 2025-08-13  
**Updated:** 2025-08-13  
**Labels:** FFPP

**Parent Theme:** [FPM-655: Oculus V3 - Enterprise Rigour and CRM+, Risk+ Migration](../themes/FPM-655-oculus-v3-enterprise-rigour.md)

**JIRA Link:** [https://forwood.atlassian.net/browse/FPM-725](https://forwood.atlassian.net/browse/FPM-725)

---

## Summary

Centralise DAC and device linking controls across CRM, Safety+ and Oculus into ForwoodID and Oculus Profile

---

## Description

## **High-Level Requirements – Centralised Device Access Control (DAC)**

### **Background & Objective**

Currently, mobile device linking to our platform is handled at the individual product level. Users download the app from the App Store/Google Play and link their device via a QR code generated in the relevant product's web portal.  
This process is inconsistent across CRM+, Safety+, and Oculus, and is not integrated with fully in **ForwardID** (our central identity platform).  
The goal of this initiative is to **centralise device linking and management** into ForwardID, enabling unified administration, consistent user experience, and cross-product device authorisation.

---

### **Scope**

**In Scope:**

* Consolidation of device linking and management into ForwardID and Oculus Settings
* ForwardID to become the master source for DAC records across CRM+, Safety+

    * Oculus to be a mirror master source for DAC records and administration in the Oculus project
    
* Web-based **Admin Panel** in ForwardID for DAC management.
* End-user capability to manage linked devices via product-specific settings (e.g., Oculus Settings screen).
* Support for:

    * QR code–based linking (current process)
    * Device record viewing and revocation
    * Audit/log of linking/unlinking events
    

**Out of Scope:**

* Replacement of existing mobile login flows with password-based login (still QR-based linking).
* Changes to mobile app core authentication logic beyond what is required to integrate with ForwardID's DAC API.

---

### **Key Features & Requirements**

#### **1. Centralised Device Linking in ForwardID**

* **DAC Service in ForwardID**:

    * Stores and manages device-to-user associations.
    * Provides APIs for:
    
        * Generating QR codes for linking.
        * Validating device link requests.
        * Returning linked devices per user.
        * Unlinking devices.
        
    * Supports multiple products under the same ForwardID account.
    
* **Single QR Code Generation Point**:

    * QR codes generated in ForwardID, not per-product.
    * QR code can be scanned by any supported product's mobile app.
    

---

#### **2. ForwardID Admin Panel – DAC Management**

* Available to users with the appropriate **ForwardID admin roles**.
* Functions:

    * Search for a user and view linked devices.
    * Revoke device access.
    * Generate QR codes for manual distribution.
    * View linking/unlinking history (audit trail).
    
* Filters by product, date linked, and device type (iOS/Android).
* Supports bulk unlinking (e.g., for offboarding).

---

#### **3. Product-Level Integration**

* **CRM+ & Safety+ Web Portals**:

    * Replace existing DAC pages with ForwardID-hosted or embedded module for QR generation.
    * Provide link to ForwardID device management page.
    
* **Oculus Web Portal (Admin)**:

    * Integrate ForwardID DAC functions directly in the **Settings** area for admins.
    * Provide ability for **all users** to:
    
        * Generate their own DAC QR code from their profile settings.
        * View and unlink their own devices.
        
    
* **Mobile Apps (CRM+, Safety+, Oculus)**:

    * Update authentication logic to:
    
        * Request QR validation from ForwardID DAC service.
        * Store ForwardID-issued device token.
        

---

#### **4. User Roles & Permissions**

* **ForwardID Admin**:

    * Can view/manage all DAC records for their organisation.
    
* **Product Admin**:

    * Can manage DACs for users within their assigned product scope.
    
* **Standard User**:

    * Can view and unlink their own devices.
    * Can generate QR code for self-linking.
    

---

#### **5. Security & Compliance**

* QR codes must be short-lived (e.g., 5 min expiry) and single-use.
* All linking/unlinking events recorded in ForwardID audit logs.
* Device tokens encrypted at rest and in transit.
* Admin DAC actions must be permission-gated.

---

#### **6. Migration Approach**

* Stepwise integration:

    1. Build ForwardID DAC service & admin panel.
    2. Integrate CRM+, Safety+ portals with ForwardID DAC.
    3. Integrate Oculus settings and profile DAC functions.
    4. Update mobile apps to validate via ForwardID.
    

---

### **Success Measures**

* Reduction in duplicate DAC implementations across products.
* Admins can manage all device links from a single interface.
* End users have consistent DAC experience across products.
* Device linking time reduced by X% compared to current baseline.

---

## Related Information

- **Project:** Forwood Product Management (FPM)
- **Issue Type:** Feature
- **Hierarchy Level:** 2

