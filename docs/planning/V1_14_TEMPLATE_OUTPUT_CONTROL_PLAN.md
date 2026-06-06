# V1.14 Template and Output Control Hardening Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Prepare the next safe V1.x hardening step so selected Markdown outputs can only be prompted when their agent, output registry record, template manifest record and Markdown template file are aligned.

**Architecture:** V1.14 must preserve the existing static Markdown-first prompt-control architecture. Hardening should use only browser-side HTML, CSS, vanilla JavaScript and repository JSON; it must not add backend routes, Python, Node frameworks, databases, DOCX generation or automatic document generation.

**Tech Stack:** Static HTML, CSS, vanilla JavaScript, JSON registries and Markdown templates only.

---

## Current Baseline Summary

The current V1.x baseline is a static Markdown-first prompt-control app. The app loads repository JSON from `engine/`, agent definitions from `knowledge_base/agents/`, Markdown prompt-control files from `prompts/`, Markdown templates from `templates/`, and produces controlled prompts, Markdown session reports and session JSON save/restore artifacts only.

Current registry consistency checks performed during planning found:

- `engine/output_registry.json` contains 24 enabled V1 Markdown outputs.
- `engine/template_manifest.json` contains 24 template manifest entries.
- Every output ID currently has one matching template manifest entry.
- Every active manifest template path currently points to an existing `.md` file under `templates/`.
- No duplicate output IDs were found.
- No duplicate manifest output IDs were found.
- No manifest entries point to an unknown output ID.
- No output/manifest agent ID mismatches were found.
- All output registry entries currently use `template_type: "markdown"`, `output_format: "markdown"`, `selected_output_only_rule: true` and `missing_information_placeholder: "To be confirmed"`.
- All manifest entries currently use Markdown template paths and `missing_information_rule: "To be confirmed"`.

V1.14 should therefore be a hardening step, not an architecture change. Its purpose is to prevent future registry or template drift from silently weakening selected-output-only prompt control.

## Configuration Files Reviewed

The following files were reviewed for V1.14 planning:

- `AGENTS.md`
- `PROJECT_BASELINE_LOCK.md`
- `CODEX_OPERATING_RULES.md`
- `README.md`
- `docs/architecture/V1_ARCHITECTURE.md`
- `docs/architecture/OUTPUT_SELECTION_RULES.md`
- `docs/architecture/TEMPLATE_NAMING_STANDARD.md`
- `engine/agent_registry.json`
- `engine/output_registry.json`
- `engine/template_manifest.json`
- `knowledge_base/agents/proposal_preparation_agent.json`
- `knowledge_base/agents/project_governance_agent.json`
- `knowledge_base/agents/document_review_agent.json`
- `knowledge_base/agents/workflow_agent.json`
- `prompts/generation_prompt.md`
- `prompts/review_prompt.md`
- `prompts/workflow_prompt.md`
- `app/config.json`
- `app/session-export-core.js`
- `app/script.js`

The main static app paths reviewed were:

- Repository configuration loading and fallback configuration.
- Agent rendering and agent-specific output filtering.
- Selected output tracking.
- Template status rendering.
- Controlled prompt generation.
- Session JSON export output details.
- Session JSON import/restore selected output validation.
- Markdown session report export.

## Identified Risks

### Risk 1: Manifest fallback may hide missing mappings

Current prompt and session report generation use `getManifestEntry(output.id)` but fall back to `output.template_file` when no manifest entry is found. This keeps the UI readable, but it means an output could still appear in a controlled prompt even if the template manifest mapping is missing.

Current status: no missing manifest entries were found.

V1.14 hardening target: treat a missing manifest entry as a validation warning and prevent controlled prompt generation until the mapping is corrected.

### Risk 2: Template file existence is not a visible control

Current manifest paths all point to existing Markdown files, but the app currently displays manifest metadata rather than proving that each active template file can be fetched by the static browser app.

Current status: no missing Markdown template files were found in repository checks.

V1.14 hardening target: add a static browser validation step that checks selected manifest template paths with the same static fetch approach already used for JSON configuration.

### Risk 3: Agent definition `allowed_outputs` values mix labels and IDs

The output registry uses stable machine IDs such as `project_charter`, while several agent definition files list `allowed_outputs` as human-readable labels such as `Project Charter`. The `output_definitions` arrays are aligned with registry IDs, and the app currently uses the output registry for selection. However, mixed label/ID conventions can confuse future maintenance.

Current status: `output_definitions[].output_id` aligns with `engine/output_registry.json` for all four agents.

V1.14 hardening target: standardize documentation and validation around output IDs as the authoritative machine values. If `allowed_outputs` remains label-based for readability, explicitly document it as display text and do not use it for machine validation.

### Risk 4: Import restore validates agent ownership but not template readiness

Imported output IDs are ignored if they are unknown, disabled or do not belong to the restored agent. That is good. The restore path does not currently check whether each restored output still has a valid manifest entry and Markdown template path before it can be used in a fresh prompt.

Current status: restored output filtering is agent-safe and V1-enabled-safe.

V1.14 hardening target: add template readiness warnings after import restore so restored sessions cannot quietly continue with broken mappings.

### Risk 5: Fallback configuration can mask registry problems during local file testing

The static app has a non-authoritative fallback configuration for local testing when repository JSON cannot be loaded. This is useful for beginner-friendly static testing, but it may hide registry or manifest fetch problems if the user does not notice the fallback mode.

Current status: fallback mode is labeled non-authoritative.

V1.14 hardening target: make fallback mode clearly fail validation for template/output control checks and require repository mode for V1.14 validation sign-off.

### Risk 6: Unselected output protection depends on filtering discipline

The current app filters selected outputs by selected agent and selected output IDs before prompt and session report assembly. This passed the V1.13A matrix checks. Future edits could accidentally add output lists from the full registry into prompts, reports or export details.

Current status: selected-output-only behavior is present in `buildControlledPrompt()`, `getSelectedOutputs()`, `buildSessionReportMarkdown()` and session export output details.

V1.14 hardening target: add explicit validation checks that generated controlled prompts and session reports include selected output IDs only and exclude known unselected IDs for the same agent.

### Risk 7: Missing-information rules are distributed across several files

The required phrase `To be confirmed` appears in baseline rules, output registry records, manifest records, agent definitions, prompt files, controlled prompt generation and session report generation. This is correct, but distributed rules can drift.

Current status: current output and manifest records use the required missing-information phrase.

V1.14 hardening target: add a simple consistency checklist for `To be confirmed` across output registry records, manifest records, agent definition output definitions, prompt rules and generated prompt/report text.

## Proposed Hardening Controls

### Control 1: Add a static template/output readiness validator

Add a small browser-side validation helper in the existing static app code path. It should read already-loaded repository JSON and produce validation warnings for:

- Enabled output without a matching `template_manifest` entry.
- Manifest entry without a matching enabled output.
- Output and manifest agent ID mismatch.
- Manifest template path not ending in `.md`.
- Manifest template type not equal to `markdown`.
- Output format not equal to `markdown`.
- Missing `To be confirmed` placeholder or missing-information rule.
- Duplicate output IDs.
- Duplicate manifest output IDs.

This control must use vanilla JavaScript only and must not create generated documents.

### Control 2: Require template readiness before prompt generation

Before `buildControlledPrompt()` returns a prompt, validate selected outputs. If any selected output has no matching manifest entry or has an invalid Markdown template mapping, show a validation warning and keep the prompt in control mode rather than allowing a weak prompt to be used.

The prompt must continue to include selected outputs only.

### Control 3: Strengthen template status display

The selected template status panel should show a clear state for each selected output:

- Ready: output, manifest and Markdown template mapping are aligned.
- Warning: manifest exists but status or metadata is incomplete.
- Blocked: no manifest entry, non-Markdown type, agent mismatch or missing template path.

This is a UI control only. It must not generate documents.

### Control 4: Add import restore template warnings

After session JSON import restore, run the same selected output readiness checks against restored output IDs. Any restored output with a missing or invalid template mapping should remain visible as a warning so the user can correct the registry or choose a different output before generating a fresh prompt.

### Control 5: Keep output ID authority explicit

Use output IDs from `engine/output_registry.json` as the machine authority for selection, import restore, export details and manifest lookup. Treat agent definition `output_definitions[].output_id` as the agent-level cross-check. Treat agent definition `allowed_outputs` as display/reference text unless it is later normalized to IDs in a separately approved data cleanup.

### Control 6: Add a V1.14 manual validation checklist

Add or update manual test coverage so a maintainer can check:

- Each enabled output has a manifest entry.
- Each manifest entry has a matching enabled output.
- Each selected output has a Markdown template path.
- Prompts include selected outputs only.
- Session reports include selected outputs only.
- Missing information remains `To be confirmed`.
- Fallback mode is not accepted as a final validation mode.

## Validation Checklist

Use these checks during the V1.14 implementation step.

- [ ] Confirm repository mode loads from `../engine/agent_registry.json`, `../engine/output_registry.json`, `../engine/template_manifest.json` and `../knowledge_base/agents/*.json`.
- [ ] Confirm there are 24 enabled V1 outputs in `engine/output_registry.json`.
- [ ] Confirm every enabled output has exactly one matching template manifest entry.
- [ ] Confirm every template manifest entry points to a known output ID.
- [ ] Confirm every manifest template path ends in `.md`.
- [ ] Confirm every selected output template path belongs under `templates/`.
- [ ] Confirm active selected templates can be fetched by the static app in repository mode.
- [ ] Confirm selected Proposal output produces prompt sections for Proposal only.
- [ ] Confirm selected Project Charter output does not include Risk Management Plan, Proposal, Gap Analysis Report or Workflow Design Document as selected outputs.
- [ ] Confirm selected Gap Analysis Report output does not include governance, proposal or workflow outputs.
- [ ] Confirm selected Workflow Design Document output does not include Workflow Steps, Roles and Responsibilities Matrix, SLA / Escalation Rules or InTouch Configuration Notes unless separately selected.
- [ ] Confirm session report selected output sections match the selected output IDs only.
- [ ] Confirm session JSON export details match selected output IDs only.
- [ ] Confirm imported output IDs outside the restored agent are ignored with warnings.
- [ ] Confirm imported selected output IDs with broken template readiness produce warnings before fresh prompt generation.
- [ ] Confirm every generated prompt includes `Mark missing information as "To be confirmed".`
- [ ] Confirm every session report checklist includes missing-information confirmation.
- [ ] Confirm no backend, Python, Flask, FastAPI, Node framework, database, DOCX generation or automatic document generation is introduced.

Suggested static repository checks for maintainers:

```powershell
$outputs = (Get-Content -Raw engine\output_registry.json | ConvertFrom-Json).outputs
$manifest = (Get-Content -Raw engine\template_manifest.json | ConvertFrom-Json).templates
$templateFiles = Get-ChildItem -Recurse -File templates -Filter *.md | ForEach-Object { (Resolve-Path -Relative $_.FullName).TrimStart('.\') -replace '\\','/' }
"outputs=$($outputs.Count) manifest_entries=$($manifest.Count) markdown_templates=$($templateFiles.Count)"
```

```powershell
$outputs = (Get-Content -Raw engine\output_registry.json | ConvertFrom-Json).outputs
$manifest = (Get-Content -Raw engine\template_manifest.json | ConvertFrom-Json).templates
$missingManifest = foreach ($output in $outputs) {
  if (-not ($manifest | Where-Object { $_.output_id -eq $output.id })) { $output.id }
}
"outputs_without_manifest=$(@($missingManifest).Count)"
$missingManifest
```

```powershell
$manifest = (Get-Content -Raw engine\template_manifest.json | ConvertFrom-Json).templates
$templateFiles = Get-ChildItem -Recurse -File templates -Filter *.md | ForEach-Object { (Resolve-Path -Relative $_.FullName).TrimStart('.\') -replace '\\','/' }
$missingFiles = foreach ($entry in $manifest) {
  if ($templateFiles -notcontains ($entry.template_file -replace '\\','/')) { $entry.template_file }
}
"manifest_templates_missing_files=$(@($missingFiles).Count)"
$missingFiles
```

## Proposed Implementation Tasks

### Task 1: Add Static Registry Readiness Checks

**Files:**

- Modify: `app/script.js`
- Modify: `TEST_CASES.md`

- [ ] Add a vanilla JavaScript helper that validates enabled output records against template manifest records.
- [ ] Add warnings for missing manifest entries, duplicate IDs, agent mismatches, non-Markdown mappings and missing `To be confirmed` controls.
- [ ] Add manual test cases for clean registry readiness and intentionally broken local copies.
- [ ] Confirm the app still loads in repository mode without backend services.

### Task 2: Gate Controlled Prompt Generation On Selected Template Readiness

**Files:**

- Modify: `app/script.js`
- Modify: `docs/architecture/OUTPUT_SELECTION_RULES.md`
- Modify: `TEST_CASES.md`

- [ ] Before controlled prompt generation, check selected output template readiness.
- [ ] Keep selected-output-only prompt generation unchanged when all selected outputs are ready.
- [ ] Show clear validation warnings when a selected output has an invalid template mapping.
- [ ] Confirm prompts still use Markdown-only scope wording and `To be confirmed` for missing information.

### Task 3: Add Import Restore Template Readiness Warnings

**Files:**

- Modify: `app/script.js`
- Modify: `docs/architecture/SESSION_IMPORT_RESTORE_PLAN.md`
- Modify: `TEST_CASES.md`

- [ ] After import restore, run selected output readiness checks.
- [ ] Keep imported output ownership checks by selected agent.
- [ ] Warn when restored outputs have missing or invalid manifest/template mappings.
- [ ] Confirm import restore does not automatically generate prompts or documents.

### Task 4: Document Output ID Authority

**Files:**

- Modify: `docs/architecture/OUTPUT_SELECTION_RULES.md`
- Modify: `docs/architecture/TEMPLATE_NAMING_STANDARD.md`
- Modify: `docs/architecture/AGENT_FIELD_DEFINITIONS.md`

- [ ] Document that `engine/output_registry.json` output IDs are the machine authority.
- [ ] Document that `engine/template_manifest.json` maps one template record to one output ID.
- [ ] Document that agent definition `output_definitions[].output_id` should match registry IDs.
- [ ] Document that label-based `allowed_outputs` values are display/reference text unless separately normalized.

### Task 5: Record V1.14 Validation Results

**Files:**

- Create: `docs/architecture/V1_14_TEMPLATE_OUTPUT_CONTROL_VALIDATION.md`
- Modify: `CHANGELOG.md`

- [ ] Record registry, manifest and template file check results.
- [ ] Record manual prompt and session report selected-output-only checks.
- [ ] Record import restore template readiness checks.
- [ ] Record final V1 scope confirmation: no backend, no Python, no Node framework, no database, no DOCX generation and no automatic document generation.

## Out-of-Scope Items

V1.14 must not include:

- Backend logic.
- Python scripts or services.
- Flask.
- FastAPI.
- Node frameworks.
- Databases or persistent storage layers.
- DOCX generation.
- Word template editing.
- Markdown-to-DOCX conversion.
- Automatic generation of client documents.
- Automatic generation of all possible outputs.
- Unselected output generation.
- File upload, file parsing or source document extraction.
- Template folder scanning as an authority source.
- Architecture changes outside the existing static V1.x baseline.

## Planning Status

This document is planning-only. It prepares the next implementation step and does not implement application logic.
