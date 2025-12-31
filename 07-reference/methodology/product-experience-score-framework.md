# Product Experience Score Framework

A unified method for measuring product experience across features, modules, and releases using four core questions grounded in two core pillars: Functional Needs and Emotional Needs & Confidence Drivers.

---

## 1. Overview

This framework provides a consistent, repeatable way to understand how well a feature or product area performs for users. It evaluates two essential dimensions:

- **Functional Needs** — the extent to which users can effectively complete their tasks.
- **Emotional Needs & Confidence Drivers** — the extent to which users feel confident, assured, supported, and clear while completing their tasks.

These pillars anchor all four questions in the framework and ensure we measure both functional performance and emotional assurance.

---

## 2. Core Questions (1–10 Scale)

Each question uses a 1–10 scale to allow consistent numeric tracking.

### A. Expectations Alignment (Functional Needs)

**Question:** "Did your experience with the product/feature meet, exceed, or fall short of your expectations?"

**Scale:** 1 = Far below expectations → 10 = Far above expectations

### B. Ease of Task Completion (Functional Needs)

**Question:** "How easy was it for you to complete your most important task using this product/feature?"

**Scale:** 1 = Very difficult → 10 = Very easy

### C. Outcome Confidence (Emotional Needs & Confidence Drivers)

**Question:** "How confident were you that this product/feature helped you achieve your key outcome?"

**Scale:** 1 = Not confident at all → 10 = Extremely confident

### D. Disruption if Removed (Value & Reliance) (Emotional Needs & Confidence Drivers)

**Question:** "If this product/feature was removed tomorrow, how disruptive would this be to your work?"

**Scale:** 1 = Not disruptive at all → 10 = Extremely disruptive

---

## 3. Pillar Mapping Summary

The four questions map to the two core pillars as follows:

### Functional Needs

- **Expectations Alignment** — "Did your experience with the product/feature meet, exceed, or fall short of your expectations?"
- **Ease of Task Completion** — "How easy was it for you to complete your most important task using this product/feature?"

### Emotional Needs & Confidence Drivers

- **Outcome Confidence** — "How confident were you that this product/feature helped you achieve your key outcome?"
- **Disruption if Removed** — "If this product/feature was removed tomorrow, how disruptive would this be to your work?"

---

## 4. Scoring Model

Each feature or product area receives four numeric scores.

### Step 1 — Capture Scores

- **Expectations Score (X)**
- **Ease Score (E)**
- **Confidence Score (C)**
- **Disruption Score (D)**

### Step 2 — Calculate the Product Experience Score (PXS)

**Formula:**

```
PXS = (C + E + X + D) / 4

Functional Needs = (X + E) / 2

Emotional Needs & Confidence Drivers = (C + D) / 2
```

**Result:**

- A single number between 1 and 10 representing the overall product experience.
- Two sub scores representing Functional Needs and Emotional Needs & Confidence Drivers are also available to help drill into the context of the feedback further.

---

## 5. Usage Guidance

- Apply consistently across UAT cycles, discovery sessions, and release evaluations.
- Track scores per feature, per module, and over time.
- Identify features needing improvement when a specific axis falls below target.
- Use PXS trends to monitor long-term product health, adoption, and user confidence.

---

## 6. Visual 2×2 Diagram

```
PRODUCT EXPERIENCE MODEL

                     Emotional Needs &
                    Confidence Drivers
                           (High)
                           ↑
                           │
                 (D) Disruption if Removed
                           │
                           │
      (Low) ───────────────┼──────────────── (High)
                           │
                           │
                  (C) Outcome Confidence
                           │
                           ↓
                     Emotional Needs &
                    Confidence Drivers
                           (Low)
                           Functional Needs (Low → High)
```

**Where:**
- **C** = Confidence
- **E** = Ease (Functional)
- **X** = Expectations (Functional)
- **D** = Disruption (Confidence/Value)

---

## 7. Next Steps

### Set Up UAT and Surveying Processes

**Manual question process for UAT (Lori)** – Implement a consistent, lightweight process for capturing PXS responses during live testing.

**Automation** – Investigate PostHog surveys – Explore embedding the four core questions directly into the platform via PostHog's in-app survey tools.

### Reporting & Dashboards

- Create automated dashboards to visualise the Product Experience Score over time, per feature, and per release.
- Ensure results can be filtered by user type, module, release version, and environment.
- Monitor trends to support early detection of UX, quality, or adoption issues.



