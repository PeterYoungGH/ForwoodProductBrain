# FPM-736: Safety+ Data integration/migration - Feasbility Spike

**Type:** Feature (hierarchyLevel 2)  
**Status:** In Development  
**Priority:** Highest  
**Created:** 2025-08-20  
**Updated:** 2025-08-20  
**Labels:** FFPP

**Parent Theme:** [FPM-645: Oculus V2 - Safety+ Upgrade Pathway and Expanded ICP](../themes/FPM-645-oculus-v2-safety-plus-upgrade-pathway.md)

**JIRA Link:** [https://forwood.atlassian.net/browse/FPM-736](https://forwood.atlassian.net/browse/FPM-736)

---

## Summary

Safety+ Data integration/migration - Feasbility Spike

---

## Description

**Goals** 10/23/2025 **:**

* Get a form from Safety+ into Oculus

===

### **Purpose**

This spike is to validate the approach for **migrating client data from Safety+ to Oculus**, focusing on establishing a one-way migration pattern via the **EHS Mobile Proxy API**.  
The spike will also determine how Safety+ and Oculus data can coexist in reporting and how transformation logic should be applied.

---

### **Key Objectives**

* Establish a working connection between the **EHS Mobile Proxy API** and the **Oculus backend database**.
* Implement data **transformers** for both **Safety+** and **Oculus** data structures to enable ingestion via the Proxy API.
* Deploy several **test tenants** (e.g. Hedno, EDP, Rossing?) containing real client data to validate the migration process end-to-end.
* Validate that:

    * Safety+ **checklists can be transformed into Oculus checklists** and correctly associated with corresponding **forms**.
    * **Forms can be generated consistently** from the migrated data without loss or corruption.
    * **Reporting services can consume** both:
    
        * Legacy data from the Safety+ and Apps Platform APIs, and
        * Newly generated Oculus data.
        

---

### **Desired Outcomes**

* Confirm technical feasibility of one-way migration through the Proxy API.
* Define a clear transformation process and identify data fields that require mapping or conversion.
* Produce a short technical summary outlining **migration limitations, assumptions, and next steps** for future development.
* Identify any blockers or dependencies (e.g., Form Builder readiness) impacting timing or feasibility.

---

### **Undesired Outcomes / Risks to Avoid**

* Attempting or re-introducing **two-way migration logic** between Safety+ and Oculus.
* Proceeding without clear agreement on what **data fidelity or feature parity** will (and won't) be achieved.
* Partial migration that appears functional but **breaks downstream reporting or form generation**.
* Over-investing in temporary solutions that **won't scale** to full client migrations.

  
====  
Notes from meeting on  9/3/2025   
EHS Mobile Proxy API <> Oculus BE DB  
\- There would be a transformer for both Oculus and Safety+ off of the EHS Mobile Proxy API

---

## Related Information

- **Project:** Forwood Product Management (FPM)
- **Issue Type:** Feature
- **Hierarchy Level:** 2

