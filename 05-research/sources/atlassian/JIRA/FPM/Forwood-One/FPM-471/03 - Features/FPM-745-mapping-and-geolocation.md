# FPM-745: Mapping and Geolocation

**Type:** Feature (hierarchyLevel 2)  
**Status:** Scoping  
**Priority:** Medium  
**Created:** 2025-08-25  
**Updated:** 2025-08-25  
**Labels:** FFPP

**Parent Theme:** [FPM-723: Oculus V1 - Commercial Soft-Launch - Ready for sales demonstration to ICPs](../themes/FPM-723-oculus-v1-commercial-soft-launch.md)

**JIRA Link:** [https://forwood.atlassian.net/browse/FPM-745](https://forwood.atlassian.net/browse/FPM-745)

---

## Summary

Mapping and Geolocation

---

## Description

* Mapping and Geo-location: Geo Editor Data compatibility

## **Learnings / Insights**

* **Users filling out forms** often struggle to precisely pinpoint their location on a map, especially in large or complex sites.
* Many companies already maintain a structured set of known locations (e.g., work areas, assets, pits, plants) in other parts of the Forwood platform.
* Providing the option for users to either use the inbuild GPS, pick a specific set of co-ordinates or select from these predefined locations reduces friction, improves accuracy, and ensures consistency across forms.

    * Note that the inbuilt GPS and specific co-ordinate picker should already be part of Oculus.
    
* Mobile operators may have limited connectivity, so the process must remain quick, reliable, and GPS-fallback friendly.

---

## **User Journey Summary**

1. The operator or supervisor progresses through a form and reaches the "Geo-Location" section.
2. The location widget is visible, initially showing:

    * A map centred on the device's current GPS coordinates (if permission granted), and
    * A control for selecting a location manually.
    
3. The user is offered two choices:  
  **A. Use My Current Location** – They tap this, and the widget captures the device GPS location automatically.  
  **B. Choose a Preset Location** – They open a list of tenant-defined preset locations (searchable, scrollable, or grouped).
4. When the user selects a preset location, the map updates to that stored coordinate, and the preset's ID is recorded.
5. The user is able to continue completing the rest of the form.

---

## **Acceptance Criteria**

**AC1 – Device Location Option**

* When location permissions are available, the widget must display "Use My Current Location".
* Selecting this option records the device's current latitude/longitude.

**AC2 – Preset Locations List**

* If the tenant has preset locations in the existing database, these appear in a selectable list.
* Users must be able to tap a preset to instantly populate the location field with that preset's coordinates.
* The map automatically centres on the selected preset.

**AC3 – Data Integration**

* The list of preset locations is sourced from the existing shared locations database for that tenant.
* If no preset locations exist, the system gracefully hides the list and only offers GPS/manual map selection.

**AC4 – Data Storage Consistency**

* The submitted form must store coordinates for all location selections.
* When a preset location is selected, store both the coordinates and the preset's location ID.

**AC5 – Usability & Failures**

* If GPS is unavailable or denied, the widget still functions using the map and preset locations.
* The selection process must remain fully functional on both mobile and web.

---

## Related Information

- **Project:** Forwood Product Management (FPM)
- **Issue Type:** Feature
- **Hierarchy Level:** 2

