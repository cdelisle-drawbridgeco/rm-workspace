# rm-workspace — Claude Instructions

## Brand & Marketing Reference

Always consult `ext_docs/Drawbridge Brand/` for official brand and marketing materials before writing any client-facing content, training docs, or product descriptions. This folder contains the authoritative source for Drawbridge messaging, positioning, and terminology — use it to stay on message.

## SVR Client One-Pagers

### What these are
Single-page A4 HTML leave-behinds used in Quarterly Program Reviews (SVRs) with Drawbridge clients. Each one-pager summarizes a client's security posture, open findings, business case, and recommended next steps. They are print-ready and designed to be opened in a browser and printed to PDF.

**Design philosophy — why one page:**
The format is intentional. Operational contacts advocate for the product; executive sponsors make the renewal decision. Executives care about business impact — risk reduced, regulatory exposure addressed, capital protected — not delivery metrics. A concise leave-behind gets forwarded through leadership channels and survives budget conversations without the RM in the room. The goal is something a CFO or Managing Partner can absorb in 90 seconds and use to answer "why do we pay for this?" Always write to that reader, not to the day-to-day champion.

### Source data
- **Input:** Excel files dropped in `ext_docs/svr-one-pagers/`
  - Each file is named `2026 Fundamental Priorities Organizer - [Client].xlsx` or `[Month] [Year] Fundamental Priorities Organizer - [Client].xlsx`
  - Two key sheets: **Priorities** (control checklist) and **Export** (full CRA Q&A with findings)
- **PDF supplement:** User may also drop a PDF (e.g. `HLM - Mar 2026.pdf`) containing dashboard screenshots the Excel cannot capture:
  - **Score dashboard** — Current / Remediated / Forecasted panels showing Total Risks and Program Fundamentals Percentile
  - **Phishing & training data** — Users, Tests Sent, Click Rate vs. All Accounts Click Rate benchmark
  - **Vulnerability scan dashboard** — Total vulns, By Severity (High/Medium/Low), By Age (0–29, 30–59, 60–89, 90+ days), trend chart over time
  - Use the `Read` tool on the PDF — it renders visually. Extract all numbers directly from the image.
- **Output:** `exports/svr-[client-slug]-q[quarter]-[year].html`
  - Examples: `svr-kensico-q1-2026.html`, `svr-northlane-q1-2026.html`, `svr-deer-park-q1-2026.html`, `svr-hlm-q1-2026.html`

### How to read the Excel
- **Priorities sheet** columns: A = Pillar, B = Sub-group, C = Control item, D = CRA category, E = SEC (dash `-` = SEC-relevant control), F = PE (`False` = not in place), H = CRA question ID
  - Row 1 is metadata (MSP name in col B, other flags). Row 2 is often File Host. Data starts row 3.
- **Export sheet** columns: CATEGORY, QUESTION ID, Internal Notes, QUESTION, ANSWER, SEVERITY, CONTROL, FINDINGS, RISK, RECOMMENDATION, LAST EDITED DATE, LAST EDITED BY
  - **Headers may have trailing spaces** (e.g. `'SEVERITY '`) — always strip with `.strip()` when building the header dict
  - Cell values may be int/float instead of string — always wrap in `str()` before slicing or comparing
- Findings = rows where SEVERITY is not `None`, `N/A`, `none`, `n/a`, or empty string
- Severity levels: **High**, **Moderate**, **Low** (watch for trailing spaces when parsing)
- Recent edits by a `@drawbridgeco.com` email = Drawbridge-initiated remediations — always call these out as program progress
- Informational rows (CATEGORY = INFORMATIONAL) contain key client facts, but **many profile fields appear outside INFORMATIONAL rows** — search for keywords (employee count, email, file host, remote access, MSP, office address) across all rows regardless of category
- **PE column can be stale** — always cross-check `PE = False` against the Export sheet ANSWER field before describing a control as "not in place." If the answer says "Yes - at least annually," the PE flag is outdated. Trust the Export answer over the PE flag.

### Score handling
- Scores are **not stored in the Excel files** — look for them in the PDF supplement first. If no PDF, ask the user.
- **Two score formats exist across clients — read carefully:**
  - **0–100 numeric score** (e.g. Northlane 79, Deer Park 22) — show raw number in score circles. Higher = better. Delta blocks show +/- points.
  - **Percentile score** (e.g. HLM 80th Percentile) — show the percentile number (e.g. `80`) in score circles. The PDF also shows a **Total Risks** count (e.g. 28 → 27) — lower risk count is better, and this goes in the label block subtitle as supporting context, NOT in the score circles. Delta block shows `−N risk` or `+N pts` depending on format.
- **Do not confuse risk count with the score.** Risks going from 28 → 27 is an improvement (fewer risks). The percentile is the score. Always confirm interpretation with the user if ambiguous.
- **ACV is suppressed** — do not include ACV in any one-pager unless the user explicitly provides it and asks for it. This was decided March 2026.
- Score band color coding:
  - **Red** — score is low or flat with no remediation planned (use `--red` tones throughout score band)
  - **Amber** — score is flat but remediations are in progress or planned (use `--amber` tones)
  - **Aqua/Green** — score is trending up, active remediations confirmed (use `--aqua-dark` tones)
- The "pts planned" label (bottom-right delta block) should say "pts planned" when there's no roadmap, "pts available" when there is. For risk-count format use "risk this period" / "risks planned."

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

### The Six Business Outcomes (source: Business Outcome Framework — Drawbridge.pdf)
Every one-pager maps findings and next steps to one or more of these six outcomes. Use the exact names.

| # | Name | Subtitle | Client says... |
|---|------|----------|----------------|
| 1 | Raise & Retain Capital with Confidence | Investor trust through operational excellence | "Our LPs keep asking about cybersecurity" / "We're raising a new fund" |
| 2 | Navigate Regulatory Complexity | Stay ahead of evolving regulations | "We got an exam notification" / "We just want to stay out of trouble" |
| 3 | Protect the Firm from Disruption | Be ready for the incident that hasn't happened yet | "What happens if we get hit?" / "We're worried about ransomware" |
| 4 | Make Security a Competitive Advantage | Turn a cost center into a differentiator | "We want to look best-in-class" / "We're going after bigger LPs" |
| 5 | Scale Without Adding Headcount | Enterprise security without the enterprise team | "We don't have a CISO and don't want to hire one" |
| 6 | Get AI-Ready, Stay AI-Safe | Adopt AI with confidence — training, assessments & governance | "Our team is using ChatGPT — should we be worried?" / "LPs are asking about our AI policy" |

**Which outcomes to lead with by client type:**
- Hedge Fund (fundraising): Lead 1, Support 2 + 4
- Hedge Fund (steady state): Lead 2, Support 3 + 6
- PE Firm (GP level): Lead 1, Support 5 + 6
- PE Portfolio Company: Lead 3, Support 2 + 6
- Family Office: Lead 3, Support 5
- Firm adopting AI tools: Lead 6, Support 2 + 3

**Evidence metrics to cite per outcome:**
- Outcome 1: DDQ turnaround time, ODD reviews supported, LP-facing reports, allocator retention
- Outcome 2: Policies current, exam readiness score, regulatory changes addressed, open findings count
- Outcome 3: Risk score trend, vulns identified & remediated, IR plan tested (date), phishing test results
- Outcome 4: Peer benchmarking position, new capabilities, LP feedback quality
- Outcome 5: Cost vs. in-house CISO ($300K–$500K+ fully loaded), COO/CCO hours saved
- Outcome 6: AI policy in place, % employees trained, AI tools inventoried, shadow AI tools identified

**The one-pager uses 4 outcome cards:** Always include Active (any outcome showing delivery), At Risk (Outcome 2), Partial (Outcome 3), Opportunity (Outcome 6). Swap in Outcomes 1/4/5 as Active or Partial when the client evidence supports it.

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

### CRA data column interpretation (source: SOP Fundamental Priorities Organizer.pdf)

The CRA data lives in the **Export sheet** and is generated from the Risk DB_av tab of the Drawbridge admin platform. The columns have specific meanings that affect how you present findings:

**Column C — Risk color (severity of the finding):**
- Black = No Risk
- Yellow = Low risk
- Orange = Moderate risk
- Red = High risk
- This is the operational risk rating — use it to prioritize gap items and next steps

**Column E — SEC relevance (benchmark-based, NOT a compliance judgment):**
- Red = fewer than 33% of comparable clients also don't implement this control (rare failure — very notable)
- Orange = 33–50% of comparable clients don't implement it
- Yellow = more than 50% of comparable clients don't implement it (common gap)
- **Critical framing rule:** SEC color reflects how unusual the gap is relative to peers. Do NOT present this as "this control is required by SEC rules" — it is a benchmark-based indicator of exam exposure, not a static compliance requirement.

**Column F — PE overlay (what Drawbridge is contracted to manage):**
- Blue = Drawbridge is contracted to manage this control for the client
- **Critical framing rule:** Blue items in Column F are NOT client failures. Do not present them as gaps the client needs to fix. Drawbridge owns these. If a PE=False item also has a Blue Column F flag, it means Drawbridge is actively working on it — frame as program delivery, not a client deficiency.

**Framing principles from the SOP:**
- Lead with business impact, not raw counts ("you have 2 high-severity findings that expose you to exam risk" not "you have 12 yellow controls")
- Separate regulatory relevance (Column E) from operational risk (Column C) — a Yellow Column E item may still be Orange/Red operationally
- Drawbridge-managed (Column F blue) items = evidence the program is working, not gaps to apologize for
- Keep the client narrative positive where supported by data: phishing rates down, vulns reduced, policies progressing

### Priorities sheet — PE column interpretation
Items with `False` in the PE column are confirmed not in place. Key ones to always call out:
- Training & Phishing — no security awareness program running
- BCP — plan exists but untested
- WISP / IRP — policies need work
- Vendor Assessments — not started
- Cloud Assessment — not started
- **Always cross-check PE=False against the Export sheet ANSWER field before calling a control "not in place."** If the answer confirms it's running, the PE flag is stale — trust the Export answer.

### Workflow
1. User drops Excel (and optionally a PDF) in `ext_docs/svr-one-pagers/`
2. Run `ls` on the directory to confirm filenames before referencing them
3. Use Python (`openpyxl`) to parse the Excel — watch for the `UserWarning` about Conditional Formatting (safe to ignore)
   - Strip all header names: `[str(h).strip() if h else '' for h in raw_headers]`
   - Wrap all cell values in `str()` before string operations — cells may be int, float, or datetime
   - Parse both sheets in one script: profile data, findings by severity, PE=False items, Drawbridge edits
4. If a PDF was dropped, use the `Read` tool on it to extract: score/percentile, risk counts, phishing stats, vuln scan data
5. Confirm score interpretation: percentile vs. 0-100, which direction is "better," what the delta means
6. Do NOT ask for ACV — it is suppressed
7. Build HTML from scratch based on an existing one-pager as reference — read the reference file first, then write fresh. Do not copy-paste a template.
8. Save to `exports/svr-[slug]-q[quarter]-[year].html`

### PDF data — what to look for and how to use it

**Score dashboard (page 1, top):**
- Three panels: Current Annual Assessment / Remediated / Forecasted (Planned & Remediated)
- Each panel shows: Total Risks (a count) and Program Fundamentals (Nth Percentile)
- Percentile = the primary score shown in score circles
- Risk count = supporting context shown in the label block subtitle
- Lower risk count is better. Risk reduction from Current → Remediated = program progress this period.

**Phishing data (page 1):**
- Firm stats: Users, Tests Sent, Click Rate
- Benchmark: All Accounts Users, All Accounts Tests Sent, All Accounts Click Rate
- Lower click rate = better. If firm is below all-accounts rate, that's a positive outcome to call out in the one-pager.
- Individual employee table: name, tests sent, click rate — use to identify high-risk individuals if relevant

**Vulnerability scan (page 2):**
- Total count, split by Internal / External
- By Severity: High / Medium / Low counts
- By Age: 0–29 days, 30–59, 60–89, 90+ — older open vulns indicate remediation lag
- Trend chart: monthly history — a spike that has since reduced is a program progress story

### Feedback & decisions log
- Score band color reflects score health — red for low/no plan, amber for flat-but-active, aqua for trending up. Established during Deer Park Road build (score of 22, nothing planned → full red).
- "pts planned" label used (not "pts available") when there is no remediation roadmap.
- ACV suppressed from all one-pagers as of March 2026.
- Northlane scores: 79 / 79 / 88 projected (+9 pts available). Business case: "2% of the regulatory exposure."
- Deer Park Road score: 22 / 22 / 22 (no plan). Full red score band.
- The January 2026 remediations by jvalle@drawbridgeco.com on Deer Park Road are called out in the CRA strip and in Outcome 1 as evidence the program is working — even though the score is low.
- HLM scores: 80th percentile / 80th / 80th (flat). Risk count 28 → 27 (1 remediated). Amber score band. Risk count shown in label block subtitle, NOT in score circles — percentile goes in circles.
- HLM phishing click rate (3.48%) used as positive ROI stat in business case — it was below the 7.78% all-accounts benchmark.
- PE column in Priorities sheet can be stale — HLM showed Training and Phishing as PE=False but Export answers confirmed both were running. Always verify against Export answers before calling a control "not in place."
