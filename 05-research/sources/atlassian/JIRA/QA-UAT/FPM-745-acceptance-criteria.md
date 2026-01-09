# Acceptance Criteria: FPM-745 - Mapping and Geolocation

**JIRA Issue:** [https://forwood.atlassian.net/browse/FPM-745](https://forwood.atlassian.net/browse/FPM-745)  
**Extracted Date:** 2025-12-17  
**Issue Hierarchy:**
- FPM-745: Mapping and Geolocation
  - EAP-664: Mapping & Geo-location Integration for Forms
    - EAP-648: Integrate geojson boundaries into form location selection widget
    - EAP-646: Lambda-based geojson polygon import

---

## FPM-745: Mapping and Geolocation

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

#### AC1 – Device Location Option

[ ] When location permissions are available, the widget must display "Use My Current Location".

[ ] Selecting this option records the device's current latitude/longitude.

#### AC2 – Preset Locations List

[ ] If the tenant has preset locations in the existing database, these appear in a selectable list.

[ ] Users must be able to tap a preset to instantly populate the location field with that preset's coordinates.

[ ] The map automatically centres on the selected preset.

#### AC3 – Data Integration

[ ] The list of preset locations is sourced from the existing shared locations database for that tenant.

[ ] If no preset locations exist, the system gracefully hides the list and only offers GPS/manual map selection.

#### AC4 – Data Storage Consistency

[ ] The submitted form must store coordinates for all location selections.

[ ] When a preset location is selected, store both the coordinates and the preset's location ID.

#### AC5 – Usability & Failures

[ ] If GPS is unavailable or denied, the widget still functions using the map and preset locations.

[ ] The selection process must remain fully functional on both mobile and web.

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

[ ] Map widget displays correctly and is interactive at all supported resolutions

[ ] Location selection controls (buttons, lists) remain accessible and functional at all resolutions

[ ] Map zoom and pan controls work correctly on touch devices (tablet/iPad)

---

## EAP-664: Mapping & Geo-location Integration for Forms

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

[ ] "Use My Current Location" appears when location permissions are available and records GPS coordinates when selected.

[ ] Preset locations load from the tenant database and are selectable; selecting one populates coordinates and recentres the map.

[ ] If preset locations do not exist, the UI hides that option gracefully.

[ ] All location selections store coordinates; preset selections also store preset location ID.

[ ] Map and selection workflow operate on mobile and web even when GPS is unavailable.

---

## EAP-648: Integrate geojson boundaries into form location selection widget

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

#### Scenario 1: User Selects a Site

##### AC1 – Check for Child Locations with GeoJSON

[ ] When user selects a site in the form, query for child physical locations WHERE `geojson IS NOT NULL`

[ ] If child locations with geojson exist, display them in a list grouped by name

[ ] If no child locations have geojson data, hide the location list and show only "Use My Location" button

##### AC2 – Display Location List

[ ] List shows location name and hierarchical path (e.g., "North Pit → Work Area 1")

[ ] List is searchable/filterable by name

[ ] List is scrollable if more than 5-10 locations exist

[ ] Selecting a location from list populates the form field and centers map on that location

##### AC3 – Map Visualization (Site Level)

[ ] Display all child location polygons on map as colored boundaries

[ ] Clicking a polygon on map auto-selects that location from the list

[ ] Map auto-zooms to fit all displayed location boundaries

#### Scenario 2: User Selects a Specific Location

##### AC4 – Check Location for GeoJSON

[ ] When user selects a specific location (not a site), check if that record has `geojson IS NOT NULL`

[ ] If geojson exists, display option: "Use [Location Name] Boundary"

[ ] If geojson does not exist, hide boundary option and show only "Use My Location" button

##### AC5 – Display Single Location Boundary

[ ] Show polygon boundary for selected location on map

[ ] Display location name and "Use This Location" button

[ ] Clicking button populates form field with location's centroid coordinates and `physicalLocationId`

##### AC6 – Map Visualization (Location Level)

[ ] Display single location polygon on map

[ ] Map auto-zooms to fit the location boundary

[ ] Polygon has distinct visual style (colored fill with border)

#### General UI Requirements

##### AC7 – Fallback to GPS

[ ] "Use My Location" button always available regardless of geojson availability

[ ] Button captures device GPS coordinates when clicked

[ ] Manual map selection (click on map) always available

##### AC8 – Empty States

[ ] If site has no locations with geojson: Show "No predefined locations available. Use GPS or select on map."

[ ] If location has no geojson: Show "Boundary not available for this location. Use GPS or select on map."

##### AC9 – Data Storage

[ ] When user selects location from list: Store `{ lat, lng, physicalLocationId, source: "preset" }`

[ ] When user uses GPS: Store `{ lat, lng, source: "gps" }`

[ ] When user clicks map: Store `{ lat, lng, source: "manual" }`

[ ] Coordinates for preset locations derived from polygon centroid

##### AC10 – Performance

[ ] Location list loads within 2 seconds

[ ] Polygon rendering completes within 3 seconds for up to 50 polygons

[ ] Implement loading indicators while fetching location data

---

## EAP-646: Lambda-based geojson polygon import

**Tester:** [Leave blank]  
**Test Date:** [Leave blank]

### Acceptance Criteria

#### Lambda Function

[ ] Lambda function can be invoked manually via AWS CLI with mapping file S3 path as input

[ ] Lambda fetches GeoJSON boundary data from `https://geoapi.dev.platform.forwoodsafety.com/api/export?apikey=xxx`

[ ] Lambda downloads and parses TID→UUID mapping file from S3

[ ] Lambda validates GeoJSON structure (valid coordinates, closed polygons, coordinate bounds)

[ ] Lambda validates UUID existence in ROOT database before import

[ ] Lambda prevents import if TIDs are missing from mapping file

[ ] Lambda imports data to ROOT database in atomic transaction

[ ] Lambda collects all updated location UUIDs after ROOT import

[ ] Lambda triggers existing tenant sync mechanism to propagate changes

#### Database Schema

[ ] Prisma migration adds `geojson` (JSONB) column to `physical_locations` table in schema

[ ] GIN index created on `geojson` column for efficient JSON queries

[ ] Same schema changes automatically propagate to tenant DBs via existing sync mechanism

#### Multi-Tenant Integration

[ ] Lambda connects to root database only for import

[ ] Lambda triggers existing tenant sync lambda after successful root import

[ ] Changes propagate from root DB to all tenant databases

[ ] No changes required to existing tenant sync workers

#### Testing & Validation

[ ] Dry-run mode validates without importing or triggering sync

[ ] Unit tests cover all Lambda service modules

[ ] Imported polygons render correctly on map (verify in any tenant)

[ ] Can be tested with fixture files: `platform-dev-geojson.json` and `crm-site-uuid-map.json`

---





