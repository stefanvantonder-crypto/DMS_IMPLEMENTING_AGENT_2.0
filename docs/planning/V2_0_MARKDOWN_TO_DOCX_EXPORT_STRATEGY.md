# V2.0 Markdown-To-DOCX / Document Export Strategy

## 1. Purpose

Plan a controlled V2.0 export strategy for turning Markdown-first outputs into client-usable document formats, especially DOCX, without breaking the protected V1 static baseline.

This is planning only. No export functionality, DOCX generation, backend service, conversion code or alternate UI path is approved in V2.0.

## 2. Current V1 Baseline Summary

V1.19C confirmed that the current V1 app is usable as a static Markdown-first prompt-control system.

Current baseline:

- V1 is static HTML, CSS and vanilla JavaScript only.
- V1 generates controlled prompts, session reports and session JSON artifacts only.
- Actual source documents are manually uploaded to ChatGPT/Codex outside the app.
- Selected-output-only behaviour is enforced.
- Markdown templates remain the authoritative structure model.
- The user reviewed the sample Markdown-first outputs as excellent.
- No backend, database, Python, Node framework, DOCX generation, file parsing or automatic client deliverable generation is active in V1.

## 3. V2 Export Problem Statement

The current V1 workflow produces strong Markdown-first outputs, but client delivery often requires Word-compatible formats, especially DOCX, with strict layout, heading, style, numbering, header/footer, table and visual fidelity requirements.

Earlier attempts failed because backend ideas, DOCX generation, multiple UI paths and template handling were introduced before the Markdown-first control model was stable enough.

V2 planning must avoid repeating that mistake.

## 4. Core Decision Principles

- Protect V1 stability first.
- Keep Markdown as the working source until a better canonical model is explicitly approved.
- Do not approve DOCX generation before output structure, review controls and template governance are stronger.
- Keep selected-output-only behaviour protected across every future export path.
- Treat Word styling fidelity as a first-class control problem, not an afterthought.
- Separate planning, review, capture, packaging and export into gated phases.
- Do not add backend or binary-heavy workflows until the need is proven and governance is ready.

## 5. Recommended Export Strategy

Recommended strategy:

- Keep Markdown as the canonical authored output format in the near term.
- Strengthen structured Markdown output capture and review before any automated DOCX path is approved.
- Use a manual or externally controlled packaging step first.
- Defer browser-side DOCX generation and backend DOCX generation until clear gates are passed.

This preserves the current working V1 quality while reducing the risk of another premature DOCX architecture detour.

## 6. Markdown As Canonical Source Recommendation

Recommendation: Markdown should remain the canonical source format for early V2 planning.

Reasoning:

- It already works in the current prompt-control model.
- It is transparent, reviewable and version-friendly.
- It supports selected-output-only auditing.
- It is easier to compare, review and correct before formatting/export.
- It gives V2 a stable content layer before introducing Word-format complexity.

Markdown should remain canonical until a later phase proves that template-aware export can preserve client fidelity without damaging V1 controls.

## 7. DOCX Export Options

### Option A: Manual Copy From Markdown To Word Template

Description:

- Final content stays Markdown-first.
- A user or document controller copies approved content into the official Word template manually.

Assessment:

- Safest near-term option.
- Lowest technical risk to V1.
- Highest manual effort.
- Best immediate control of client formatting fidelity.

### Option B: Browser-Side Markdown Export Only

Description:

- App remains static and captures approved Markdown outputs for controlled download/review.

Assessment:

- Strengthens content capture without solving DOCX yet.
- Supports audit, review and packaging preparation.
- Good intermediate V2 step.

### Option C: Browser-Side DOCX Generation

Description:

- Static app attempts DOCX generation directly in the browser.

Assessment:

- Avoids backend initially.
- High formatting-fidelity risk.
- Hard to manage advanced Word styles, headers/footers, numbering and embedded assets.
- Should not be approved before stricter template control and proof-of-concept validation.

### Option D: Backend DOCX Generation

Description:

- A later backend service handles DOCX generation or template population.

Assessment:

- Could support stronger document automation later.
- Highest architectural risk if introduced too early.
- Adds operational, security, deployment and maintenance complexity.
- Must remain blocked until explicit gates are passed.

### Option E: External Controlled Conversion Tool

Description:

- Markdown outputs are passed through a controlled external conversion or packaging workflow outside the V1 app.

Assessment:

- Keeps V1 protected.
- Allows later experimentation without forcing architecture changes into the app.
- Requires strong process controls and visual review.

## 8. Recommended Phased Approach

### V2.0 Planning Only

- Approve planning documents only.
- Do not approve implementation.

### V2.1 Output Quality Schema

- Define stricter Markdown output structure, section controls, table expectations and review rules.

### V2.2 Markdown Output Storage / Capture Strategy

- Define how reviewed Markdown outputs are captured, named, reviewed and approved without breaking V1.

### V2.3 Manual Word Template Packaging Guide

- Create a controlled manual packaging workflow from approved Markdown into client Word templates.

### V2.4 Proof-Of-Concept DOCX Export, If Approved

- Test one narrow export path only after template governance and review gates are ready.

### V2.5 Backend Evaluation Gate, If Still Required

- Evaluate backend only if static/manual/external options still fail to meet justified requirements.

## 9. Explicit Recommendation

- Do not introduce backend or DOCX generation immediately.
- First strengthen Markdown output structure and review controls.
- Keep Markdown canonical for now.
- Use planning and process hardening before any export automation.

## 10. Acceptance Criteria For Moving Beyond Planning

Do not move beyond planning until all of the following are true:

- V1 remains stable and unchanged.
- Markdown output structure is hardened and reviewable.
- Selected-output-only behaviour remains demonstrably protected.
- A template control model exists for future DOCX work.
- Review gates exist for fidelity, visuals, tables and placeholders.
- A manual packaging guide is defined.
- Export proof-of-concept scope is narrow and approved explicitly.
- Backend need is justified by evidence, not preference.

