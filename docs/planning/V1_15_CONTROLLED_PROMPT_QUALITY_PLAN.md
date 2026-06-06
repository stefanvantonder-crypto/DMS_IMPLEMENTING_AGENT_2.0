# V1.15 Controlled Prompt Quality Hardening Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Plan a safe V1.15 hardening step that improves generated controlled prompt quality, structure and control strength while preserving the static Markdown-first V1.x architecture.

**Architecture:** V1.15 must remain documentation-led until a later implementation step is separately approved. Any future implementation must stay inside the existing static HTML, CSS, vanilla JavaScript, JSON registry and Markdown template model, with no backend, server-side logic, database, Python, Node framework, DOCX generation, automatic document generation or template-population engine.

**Tech Stack:** Static HTML, CSS, vanilla JavaScript, JSON registries, Markdown prompts, Markdown templates and Markdown session reports only.

---

## Current Baseline

V1.x is a static Markdown-first prompt-control system. It is designed to support DMS and CIPMS implementation work through controlled prompts, selected Markdown template references, source document inventory metadata and browser-only session report export.

Current baseline controls:

- V1.x uses static HTML, CSS and vanilla JavaScript only.
- The system generates controlled prompts and session reports only.
- Markdown templates remain the only approved template format.
- Selected outputs only must be included in controlled prompts.
- Selected outputs only must be included in session reports.
- Unselected outputs must be excluded from generated prompt output sections.
- Unselected outputs must be excluded from session report selected-output sections.
- Missing information must be marked `To be confirmed`.
- Source documents remain session-specific and must be provided manually with the generated controlled prompt.
- Session JSON export remains a browser download control artifact.
- No backend, DOCX generation, database, Python, Node framework, server-side logic, automatic document generation or template-population engine is active in V1.x.

Current prompt-control files and code paths reviewed for planning:

- `prompts/generation_prompt.md`
- `prompts/review_prompt.md`
- `prompts/workflow_prompt.md`
- `app/script.js` controlled prompt generation path
- `app/script.js` session report generation path
- `engine/output_registry.json`
- `engine/template_manifest.json`
- `knowledge_base/agents/*.json`
- `docs/architecture/OUTPUT_SELECTION_RULES.md`
- `docs/sample_sessions/V1_14A_TEMPLATE_OUTPUT_CONTROL_VALIDATION.md`

## V1.15 Objective

V1.15 should improve the clarity, completeness and control strength of generated controlled prompts without changing the architecture.

The main outcome should be stronger prompts that:

- Tell the receiving AI exactly which selected outputs to create.
- Tell the receiving AI exactly which unselected outputs to avoid.
- Tie each selected output to its Markdown template path and quality rules.
- Use the source document inventory as session context without treating metadata as file content.
- Separate confirmed evidence from assumptions and missing facts.
- Keep agent-specific boundaries clear.
- Keep session reports aligned with the controlled prompt.
- Keep review and workflow prompts stricter and easier to audit.
- Repeat prohibited architecture wording clearly enough that downstream generation cannot drift into backend, DOCX, database or template-population behavior.

## Prompt Quality Hardening Areas

### Selected-Output Boundary Enforcement

Plan:

- Keep selected output IDs as the only machine authority for prompt output sections.
- Include a dedicated selected-output section listing each selected output ID, label, category, template path and output folder.
- Include a dedicated exclusion instruction that says unselected outputs must not be created, summarized, scaffolded or listed as deliverables.
- Include selected-output-only wording in both the global rules and each selected output instruction block.
- Keep selected outputs agent-scoped so outputs from other agents cannot appear as target deliverables.

Quality target:

- A prompt for `project_charter` must not ask for `risk_management_plan`, `proposal`, `gap_analysis_report` or `workflow_design_document`.

### Template-Use Instruction Clarity

Plan:

- For each selected output, state the exact Markdown template path from `engine/template_manifest.json`.
- Tell the receiving AI to follow the selected Markdown template structure.
- Tell the receiving AI not to invent template sections that conflict with the approved template.
- Tell the receiving AI to use Markdown only.
- Tell the receiving AI that template references are structure controls, not automatic document-generation instructions.

Quality target:

- Each selected output block should make the template path visible and make Markdown-only structure non-negotiable.

### Source-Document Inventory Use

Plan:

- Keep source document inventory as session metadata.
- Explain that listed source documents must be manually provided with the prompt before their contents can be used as evidence.
- Require the receiving AI to distinguish between document metadata and actual supplied document content.
- Require unavailable source documents to be treated as missing evidence.
- Require missing source content to be marked `To be confirmed`.

Quality target:

- A prompt may reference that a source document is listed, but must not imply its contents were read unless the document is manually supplied with the prompt.

### Missing-Information Handling

Plan:

- Keep `To be confirmed` as the single required missing-information phrase.
- Repeat the phrase in global rules, output-specific rules and source-document rules.
- Require missing dates, owners, approvals, routing logic, pricing, evidence, compliance basis and client facts to be marked `To be confirmed`.
- Avoid alternative phrases such as `unknown`, `not supplied`, `pending`, `N/A` or blank cells for required missing information.

Quality target:

- The generated prompt should make `To be confirmed` the default treatment for every required fact that lacks source evidence.

### Evidence and Assumption Control

Plan:

- Add stronger wording that confirmed facts must be tied to supplied session information or uploaded source documents.
- Require assumptions to be listed separately from confirmed evidence.
- Require unsupported findings, recommendations, compliance claims, pricing, certifications and approval statements to be marked `To be confirmed`.
- Tell the receiving AI not to replace missing facts with confident-sounding assumptions.

Quality target:

- The receiving AI should be pushed toward evidence-based drafting and away from invented implementation details.

### Agent-Specific Output Discipline

Plan:

- Keep proposal, governance, review and workflow agent instructions separate.
- In each prompt, include only the selected agent context.
- Make cross-agent exclusions explicit, such as review prompts not creating proposal or workflow outputs unless those outputs are selected in the current session.
- Keep workflow-specific implementation guidance as Markdown planning content only, not executable logic.

Quality target:

- A workflow prompt may produce workflow design notes, but must not produce backend workflow logic or InTouch automation code.

### Session Report Consistency

Plan:

- Keep session reports as control artifacts, not generated client deliverables.
- Ensure the session report selected-output section mirrors the controlled prompt selected-output section.
- Include the controlled prompt in the session report only as a record of the session.
- Keep the session report completion checklist aligned with selected-output-only, no-unselected-output and `To be confirmed` rules.

Quality target:

- A session report should help audit what was selected, what was excluded and what still needs confirmation.

### Review Prompt Quality

Plan:

- Strengthen review prompts so findings must be based on supplied documents, standards, policies, legislation or review instructions.
- Require review outputs to separate confirmed gaps, evidence, risk, impact, recommendation and missing evidence.
- Require unsupported review conclusions to be marked `To be confirmed`.
- Explicitly prohibit invented compliance findings.

Quality target:

- A document review prompt should not produce compliance findings unless a review basis and source evidence are supplied.

### Workflow Prompt Quality

Plan:

- Strengthen workflow prompts so stages, roles, routing rules, statuses, SLA values, escalation paths and exceptions are evidence-based.
- Require missing workflow routing details to be marked `To be confirmed`.
- Keep InTouch notes implementation-oriented but non-executable.
- Explicitly prohibit backend workflow logic, server routes, database design and template-population logic.

Quality target:

- A workflow prompt should create Markdown workflow design guidance only, not software logic.

### Prohibited Architecture Wording

Plan:

- Keep prohibited architecture wording visible in the global rules section.
- Repeat that V1.x has no backend, Python, Flask, FastAPI, Node framework, database, server-side logic, DOCX generation, automatic document generation or template-population engine.
- State that the app generates controlled prompts and browser-only control artifacts only.
- State that Markdown templates provide structure only and are not populated automatically.

Quality target:

- A receiving AI should not interpret a V1.x prompt as permission to create backend code, DOCX files, databases, generated client documents or template-population workflows.

## Controlled Prompt Structure

V1.15 should plan an improved controlled prompt structure with clear, repeated control boundaries.

Recommended structure:

1. **Prompt Header**
   - Session name.
   - Client name.
   - Project name.
   - Contract or bid number.
   - Prepared by.
   - Date generated.
   - Configuration mode.

2. **Session Context**
   - Session notes.
   - Current task summary.
   - V1.x scope statement.
   - Confirmation that the prompt is a control artifact.

3. **Selected Agent**
   - Selected agent ID.
   - Selected agent name.
   - Agent purpose.
   - Agent prompt file.
   - Agent template group.
   - Agent default output folder.

4. **Selected Output Documents**
   - Selected output IDs only.
   - Selected output labels.
   - Output categories.
   - Output folders.
   - Suggested Markdown file name patterns.
   - Explicit instruction to generate selected outputs only.

5. **Unselected Output Boundary**
   - Statement that unselected outputs must not be generated.
   - Statement that outputs from other agents must not be generated.
   - Statement that unselected outputs must not appear as deliverables, appendices or bonus sections.

6. **Source Document Inventory**
   - Listed source document metadata.
   - Available-for-upload status.
   - Source document notes.
   - Reminder that actual source documents must be manually provided with the prompt.
   - Reminder that metadata alone is not evidence of document content.

7. **Applicable Markdown Templates**
   - One template path per selected output.
   - Template manifest status where available.
   - Template type.
   - Required structure instruction.
   - Markdown-only instruction.

8. **Applicable Evidence and Assumptions**
   - Confirmed evidence supplied in the current session.
   - Missing evidence.
   - Assumptions that must be marked separately.
   - Instruction not to invent facts.

9. **Missing Information Rules**
   - Required phrase: `To be confirmed`.
   - Required missing-information categories.
   - Instruction not to use blank cells for missing required facts.

10. **Agent-Specific Instructions**
    - Proposal instructions only for proposal sessions.
    - Governance instructions only for governance sessions.
    - Review instructions only for review sessions.
    - Workflow instructions only for workflow sessions.

11. **Output-Specific Instructions**
    - One subsection per selected output.
    - Template path.
    - Required inputs.
    - Optional inputs.
    - Quality rules.
    - Expected Markdown output shape.

12. **Global V1.x Rules**
    - Static Markdown-first scope.
    - No backend.
    - No Python.
    - No Flask.
    - No FastAPI.
    - No Node framework.
    - No database.
    - No server-side logic.
    - No DOCX generation.
    - No automatic document generation.
    - No template-population engine.

13. **Validation Warnings**
    - Current UI validation warnings.
    - Missing required inputs.
    - Missing source document availability warnings.
    - Template readiness warnings from V1.14 controls when available.

14. **Final Instruction**
    - Generate only the selected Markdown outputs.
    - Do not generate unselected outputs.
    - Use only supplied evidence.
    - Mark missing information as `To be confirmed`.

## Proposed V1.15 Documentation and Validation Work

### Task 1: Define Controlled Prompt Quality Criteria

**Files:**

- Create: `docs/architecture/V1_15_CONTROLLED_PROMPT_QUALITY_CRITERIA.md`
- Modify: `TEST_CASES.md`

- [ ] Create a criteria document that defines a passing controlled prompt.
- [ ] Include selected-output-only criteria.
- [ ] Include unselected-output exclusion criteria.
- [ ] Include Markdown template path criteria.
- [ ] Include source-document inventory criteria.
- [ ] Include evidence and assumption criteria.
- [ ] Include `To be confirmed` criteria.
- [ ] Include prohibited architecture criteria.
- [ ] Add manual test references to `TEST_CASES.md`.

### Task 2: Plan Prompt Structure Copy Improvements

**Files:**

- Modify: `docs/architecture/OUTPUT_SELECTION_RULES.md`
- Modify: `docs/architecture/V1_ARCHITECTURE.md`
- Modify: `docs/planning/V1_15_CONTROLLED_PROMPT_QUALITY_PLAN.md`

- [ ] Document the recommended V1.15 controlled prompt structure.
- [ ] Document where selected output IDs, template paths and source inventory belong.
- [ ] Document where architecture prohibitions belong.
- [ ] Document that implementation requires separate approval.

### Task 3: Prepare Future Static App Prompt Hardening

**Files:**

- Future modify: `app/script.js`
- Future modify: `app/config.json`
- Future modify: `docs/sample_sessions/SAMPLE_SESSION_TEST_MATRIX.md`

- [ ] Preserve `buildControlledPrompt()` as the static browser prompt assembly path.
- [ ] Keep `getSelectedOutputs()` as the selected-output filter.
- [ ] Strengthen prompt wording inside existing static JavaScript only after approval.
- [ ] Do not add external packages, server routes or generated document workflows.
- [ ] Update sample-session checks after any approved prompt wording change.

### Task 4: Validate Review Prompt Quality

**Files:**

- Future modify: `prompts/review_prompt.md`
- Future modify: `docs/sample_sessions/V1_15_CONTROLLED_PROMPT_QUALITY_VALIDATION.md`

- [ ] Check that review prompts require supplied evidence.
- [ ] Check that unsupported findings are marked `To be confirmed`.
- [ ] Check that review prompts do not generate proposal, governance or workflow outputs unless selected.
- [ ] Record validation results in a V1.15 validation note.

### Task 5: Validate Workflow Prompt Quality

**Files:**

- Future modify: `prompts/workflow_prompt.md`
- Future modify: `docs/sample_sessions/V1_15_CONTROLLED_PROMPT_QUALITY_VALIDATION.md`

- [ ] Check that workflow prompts keep stages, routing, roles, statuses and SLA values evidence-based.
- [ ] Check that missing routing logic is marked `To be confirmed`.
- [ ] Check that InTouch notes remain Markdown planning notes.
- [ ] Check that workflow prompts do not request backend workflow logic.

### Task 6: Record V1.15 Validation Results

**Files:**

- Create: `docs/sample_sessions/V1_15_CONTROLLED_PROMPT_QUALITY_VALIDATION.md`
- Modify: `CHANGELOG.md`

- [ ] Record selected-output-only prompt checks.
- [ ] Record unselected-output exclusion checks.
- [ ] Record template-path clarity checks.
- [ ] Record source-document inventory wording checks.
- [ ] Record missing-information checks.
- [ ] Record prohibited architecture wording checks.
- [ ] Confirm no backend, DOCX generation, automatic document generation, Python, Node framework, database, server-side logic or template-population engine was introduced.

## Validation Checklist

Use this checklist when V1.15 implementation is separately approved.

- [ ] Prompt includes session context.
- [ ] Prompt includes selected agent details.
- [ ] Prompt includes selected output documents only.
- [ ] Prompt excludes unselected output documents.
- [ ] Prompt includes one Markdown template path per selected output.
- [ ] Prompt explains source document inventory correctly.
- [ ] Prompt says actual source documents must be manually supplied.
- [ ] Prompt separates evidence from assumptions.
- [ ] Prompt requires missing information to be marked `To be confirmed`.
- [ ] Prompt includes agent-specific instructions for the selected agent only.
- [ ] Prompt includes review-specific evidence controls when the Document Review Agent is selected.
- [ ] Prompt includes workflow-specific routing and SLA controls when the Workflow Agent is selected.
- [ ] Prompt includes prohibited architecture wording.
- [ ] Session report selected-output section matches the controlled prompt selected-output section.
- [ ] Session report remains a browser-only control artifact.
- [ ] No backend code is added.
- [ ] No DOCX generation is added.
- [ ] No automatic document generation is added.
- [ ] No Python is added.
- [ ] No Node framework is added.
- [ ] No database is added.
- [ ] No server-side logic is added.
- [ ] No template-population engine is added.

## Out-of-Scope Items

V1.15 planning does not approve:

- App code changes.
- Backend logic.
- Python scripts or services.
- Flask.
- FastAPI.
- Node frameworks.
- Databases or persistent storage layers.
- Server-side logic.
- DOCX generation.
- Word template editing.
- Markdown-to-DOCX conversion.
- Automatic document generation.
- Template-population engines.
- File upload, file parsing or source document extraction.
- Architecture changes outside the existing static V1.x baseline.

## Planning Status

This document is documentation/planning only. It prepares a future controlled prompt quality hardening step and does not implement application logic, change the architecture or create generated client documents.
