# FPM-742: Internationalisation and Localisation - V1 Updates

**Type:** Feature (hierarchyLevel 2)  
**Status:** In Development  
**Priority:** Medium  
**Created:** 2025-08-25  
**Updated:** 2025-08-25  
**Labels:** FFPP

**Parent Theme:** [FPM-723: Oculus V1 - Commercial Soft-Launch - Ready for sales demonstration to ICPs](../themes/FPM-723-oculus-v1-commercial-soft-launch.md)

**JIRA Link:** [https://forwood.atlassian.net/browse/FPM-742](https://forwood.atlassian.net/browse/FPM-742)

---

## Summary

Internationalisation and Localisation - V1 Updates

---

## Description

### **Key Requirements**

#### **1. Translation Triggers**

* **At Content Creation:**  
  When a user creates new content (e.g., questions, checklists, sections, or any text input), automatically trigger a translation job for all supported languages.

    * Store translated versions in the database at creation time.
    
* **On-Demand for New Languages:**  
  When a new language is added to the system, and users request existing content in that language:

    * System should detect missing translations.
    * Spin off a background translation job for the requested content.
    * Display the translated version once ready, while caching the result for future use.
    

---

#### **2. UI/UX Enhancement (Delight Feature)** @Lori Watt 

* Design and implement a small visual "sizzle" or "delight" interaction that notifies users when translation is occurring in real time.

    * Example: A short animation or label such as "Translating in real time…"
    * **Design Ownership:** Lori to prototype or Figma.
    * Goal: Create a "wow" factor showcasing the dynamic translation capability.
    

---

#### **3. Translation Scope**

* **In-Scope:**

    * All UI labels and system text.
    * All user-generated content (questions, checklists, sections, etc.).
    * Form responses (stretch goal):
    
        * Translate free-text input fields such as comments, action descriptions, and other text entered by users during form submission.
        * This is primarily to support multilingual reporting.
        

* **Out-of-Scope (for now):**

    * Non-text content (media, attachments, etc.).
    

---

#### **4. Glossary Testing (within Localize)**

* Conduct a test spike to evaluate glossary functionality within the Localized integration.

    * Technical terms for testing @Adam Goldin. 
    
        * HiPo
        * bowtie
        
    * Validate whether the glossary enforces consistent translation for these terms across content.
    

---

### **Acceptance Criteria**

* ✅ New content is automatically translated into all supported languages on creation.
* ✅ When a new language is added, requesting existing content triggers background translation jobs as needed.
* ✅ UI visually communicates real-time translation delight moment when on-demand translation occurs .
* ✅ Translated content persists in the database and is not re-fetched unnecessarily.
* ✅ Form responses (comments/actions) are translated successfully if included.
* ✅ Glossary test results are documented with sample terms and consistency outcomes.

---

## Related Information

- **Project:** Forwood Product Management (FPM)
- **Issue Type:** Feature
- **Hierarchy Level:** 2

