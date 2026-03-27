# rm-workspace — Claude Instructions

## SVR Client One-Pagers

### What these are
Single-page A4 HTML leave-behinds used in Quarterly Program Reviews (SVRs) with Drawbridge clients. Each one-pager summarizes a client's security posture, open findings, business case, and recommended next steps. They are print-ready and designed to be opened in a browser and printed to PDF.

### Source data
- **Input:** Excel files dropped in `ext_docs/svr-one-pagers/`
  - Each file is named `2026 Fundamental Priorities Organizer - [Client].xlsx`
  - Two key sheets: **Priorities** (control checklist) and **Export** (full CRA Q&A with findings)
- **Output:** `exports/svr-[client-slug]-q[quarter]-[year].html`
  - Examples: `svr-kensico-q1-2026.html`, `svr-northlane-q1-2026.html`, `svr-deer-park-q1-2026.html`

### How to read the Excel
- **Priorities sheet** columns: A = Pillar, B = Sub-group, C = Control item, D = CRA category, E = SEC (dash `-` = SEC-relevant control), F = PE (`False` = not in place), H = CRA question ID
- **Export sheet** columns: CATEGORY, QUESTION ID, Internal Notes, QUESTION, ANSWER, SEVERITY, CONTROL, FINDINGS, RISK, RECOMMENDATION, LAST EDITED DATE, LAST EDITED BY
- Findings = rows where SEVERITY is not `None` and not `N/A`
- Severity levels: **High**, **Moderate**, **Low** (watch for trailing spaces when parsing)
- Recent edits by a `@drawbridgeco.com` email = Drawbridge-initiated remediations — always call these out as program progress
- Informational rows (CATEGORY = INFORMATIONAL) contain key client facts: employee count, email platform, file host, remote access method, MSP name, office address

### Score handling
- Scores are **not stored in the Excel files** — always ask the user for: Baseline, Today, Projected scores + points this period + points available/planned
- If ACV (annual contract value) is not in the file, ask the user
- Score band color coding:
  - **Red** — score is low or flat with no remediation planned (use `--red` tones throughout score band)
  - **Amber** — score is flat but remediations are in progress or planned (use `--amber` tones)
  - **Aqua/Green** — score is trending up, active remediations confirmed (use `--aqua-dark` tones)
- The "pts planned" label (bottom-right delta block) should say "pts planned" when there's no roadmap, "pts available" when there is

### Design system
All one-pagers share the same CSS design system. Do not deviate from it unless the user asks.

**Fonts:** Archivo (headings/labels), DM Serif Display (numbers), Inter (body)
**Colors:**
```
--dark: #111821        --aqua: #86C8BC         --aqua-dark: #489E8E
--orange: #FF6900      --amber: #d97706         --red: #dc2626
--green: #15803d       --purple: #7c3aed        (+ pale/border variants for each)
```
**Layout:** A4 portrait (210mm wide), dark header → score band → CRA strip → 2×2 body grid → dark footer
**Body quadrants:**
- TL: Outcomes in Delivery (4 outcome cards: Active / At Risk / Partial / Opportunity)
- TR: The Business Case (2 ROI stats + narrative statement + 3 sub-stats)
- BL: Open Outcome Gaps (Critical + Overdue gap items)
- BR: Recommended Next Steps (numbered, with owner tags + outcome refs)

### Content patterns
**Outcomes always map to these 4:**
1. Active — what the program is delivering today
2. At Risk — Navigate Regulatory Complexity (open HIGH findings, SEC exam exposure)
3. Partial — Protect the Firm from Disruption (partial controls, missing awareness layer)
6. Opportunity — Get AI-Ready, Stay AI-Safe (AI governance, LP DDQ exposure)

**Business case stats (consistent across all one-pagers):**
- `$1.5M–$7M` — avg SEC enforcement action cost
- `$5.9M` — avg breach cost, financial services (IBM 2024)
- `45%` — of SEC exams cite incident response gaps
- `72 hrs` — Reg S-P breach notification deadline

**Owner tags on next steps:** `owner-client` (blue), `owner-drawbridge` (aqua), `owner-ai` (purple)
**AI opportunity step** always uses `ns-num-ai` (purple circle) and includes the GenAI Assessment / AI Policy Development callout

### CRA timeline strip
- Pull last CRA date from most recent LAST EDITED DATE in the Export sheet
- Cadence is annual unless otherwise noted
- Next CRA due = ~1 year after last closed
- Badge style: amber = "Recommend initiating Q2/Q3 [year]"

### Priorities sheet — PE column interpretation
Items with `False` in the PE column are confirmed not in place. Key ones to always call out:
- Training & Phishing — no security awareness program running
- BCP — plan exists but untested
- WISP / IRP — policies need work
- Vendor Assessments — not started
- Cloud Assessment — not started

### Workflow
1. User drops Excel in `ext_docs/svr-one-pagers/`
2. Use Python (`openpyxl`) to parse — watch for the `UserWarning` about Conditional Formatting (safe to ignore)
3. Extract: client name, MSP, employee count, email/file host, remote access, office, all findings by severity, Priorities sheet PE flags, recent edit dates and who made them
4. Ask user for: scores (baseline/today/projected), delta pts, ACV
5. Build HTML from scratch based on the existing one-pagers as reference — do not copy-paste from a template file, regenerate fully so content is always client-specific
6. Save to `exports/svr-[slug]-q[quarter]-[year].html`

### Feedback & decisions log
- Score band color reflects score health — red for low/no plan, amber for flat-but-active, aqua for trending up. Established during Deer Park Road build (score of 22, nothing planned → full red).
- "pts planned" label used (not "pts available") when there is no remediation roadmap.
- Northlane scores: 79 / 79 / 88 projected (+9 pts available). ACV: $30K. Business case framing: "2% of the regulatory exposure."
- Deer Park Road score: 22 / 22 / 22 (no plan). ACV: TBD. Full red score band.
- The January 2026 remediations by jvalle@drawbridgeco.com on Deer Park Road are called out in the CRA strip and in Outcome 1 as evidence the program is working — even though the score is low.
