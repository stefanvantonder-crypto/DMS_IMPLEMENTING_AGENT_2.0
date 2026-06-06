# V1.15A Controlled Prompt Quality Validation

## Validation Date

- Date: 2026-06-06
- Repository: `stefanvantonder-crypto/DMS_IMPLEMENTING_AGENT_2.0`
- Workspace: `C:\DMS_IMPLEMENTING_AGENT_RECOVERY_BASELINE`
- Validation type: Documentation-only sample-session validation pack

## Purpose

This validation pack confirms that the V1.15 controlled prompt quality hardening plan can be tested against the current Markdown-first static V1.x DMS Implementing Agent baseline without changing the architecture.

## 1. Validation Objective

V1.15A validates whether the planned prompt-quality hardening checks can be applied to the existing static prompt-control baseline.

Validation focus:

- Confirm prompt boundaries are testable by selected agent and selected output.
- Confirm selected outputs can be checked against mapped Markdown templates.
- Confirm source-document inventory discipline can be checked in generated prompts.
- Confirm missing information handling can be checked with the required phrase `To be confirmed`.
- Confirm prohibited architecture wording remains visible.
- Confirm validation can be performed without app code changes or generated client documents.

## 2. Static V1.x Baseline Confirmation

V1.15A confirms the current baseline remains:

- Static HTML, CSS and vanilla JavaScript only.
- Browser-only controlled prompt generation.
- Browser-only Markdown session report export.
- Markdown templates only.
- No backend or server-side generation.
- No DOCX generation.
- No automatic document generation.
- No database persistence.
- No Python.
- No Node framework.
- No server-side logic.
- No template-population engine.
- Missing information must be marked `To be confirmed`.

## 3. Validation Scenarios

### A. Proposal Preparation Agent

Selected output:

- Proposal

Expected validation:

- Confirm only Proposal appears in the generated prompt selected-output section.
- Confirm unselected governance outputs are excluded, including Project Charter, Risk Management Plan and Test and Go-Live Plan.
- Confirm the Proposal Markdown template reference is visible: `templates/proposal_templates/PROPOSAL_TEMPLATE.md`.
- Confirm missing TOR, pricing and reference-letter data is marked `To be confirmed`.
- Confirm proposal evidence is limited to supplied TOR/RFQ/RFP, bid specification, previous proposal example, company profile, pricing schedule and reference letters.

### B. Project Governance Agent

Selected outputs:

- Project Charter
- Risk Management Plan
- Go-Live Plan, using the current registry label `Test and Go-Live Plan`

Expected validation:

- Confirm only Project Charter, Risk Management Plan and Test and Go-Live Plan appear in the generated prompt selected-output section.
- Confirm unselected outputs are excluded, including Proposal, Gap Analysis Report, Workflow Design Document, Project Scope and UAT Test Scripts.
- Confirm each selected output references its mapped Markdown template:
  - `templates/project_governance_templates/PROJECT_CHARTER_TEMPLATE.md`
  - `templates/project_governance_templates/RISK_MANAGEMENT_PLAN_TEMPLATE.md`
  - `templates/project_governance_templates/TEST_AND_GO_LIVE_PLAN_TEMPLATE.md`
- Confirm missing governance inputs, owners, approvals, dates, risks and go-live readiness details are marked `To be confirmed`.
- Confirm governance outputs remain controlled Markdown drafts, not automatically generated client deliverables.

### C. Document Review Agent

Selected action:

- Review Document

Expected validation:

- Confirm the review prompt asks for gaps, compliance, audit readiness, evidence strength and framework alignment.
- Confirm the review prompt remains review-focused and does not generate a replacement document unless explicitly requested.
- Confirm the review prompt preserves source-document discipline by requiring the reviewed document and review basis to be supplied manually.
- Confirm unsupported findings, missing evidence, missing framework basis and unverified compliance conclusions are marked `To be confirmed`.
- Confirm review outputs do not drift into proposal, governance or workflow deliverables unless those outputs are explicitly selected.

### D. Workflow Agent

Selected output:

- Workflow Design Document

Expected validation:

- Confirm the workflow prompt asks for the specific workflow required.
- Confirm where no SOP, policy or existing workflow exists, the Mini Workflow Brief is used as the structured source.
- Confirm the agent does not invent unrelated workflows from sample documents.
- Confirm the Workflow Design Document Markdown template reference is visible: `templates/workflow_templates/WORKFLOW_DESIGN_DOCUMENT_TEMPLATE.md`.
- Confirm missing workflow stages, routing rules, approval roles, statuses, SLA values, escalation paths and exceptions are marked `To be confirmed`.
- Confirm workflow output remains Markdown workflow design guidance and does not create backend workflow logic, InTouch automation code, database design or template-population logic.

## 4. Prompt Quality Checks

Each V1.15A validation scenario should check:

- Clear session context is visible.
- Selected agent is clearly named.
- Selected outputs are explicitly listed.
- Unselected outputs are explicitly excluded.
- Source document inventory is included.
- Template references are visible.
- Missing-information instruction is visible.
- Evidence and assumption control is visible.
- Static V1.x scope-control notice is visible.
- Final instruction block is clear.

## 5. Pass/Fail Matrix

| Test ID | Agent | Scenario | Expected result | Status |
|---|---|---|---|---|
| V1.15A-01 | Proposal Preparation Agent | Proposal selected only | Proposal appears as the only selected output; unselected governance outputs are excluded; Proposal template path is visible; missing TOR, pricing and reference-letter data is marked `To be confirmed`. | Not executed |
| V1.15A-02 | Project Governance Agent | Project Charter, Risk Management Plan and Test and Go-Live Plan selected | Only the three selected governance outputs appear; unselected proposal, review, workflow and other governance outputs are excluded; each selected output shows its mapped Markdown template; missing governance inputs are marked `To be confirmed`. | Not executed |
| V1.15A-03 | Document Review Agent | Review Document action | Review prompt asks for gaps, compliance, audit readiness, evidence strength and framework alignment; does not generate a replacement document unless explicitly requested; preserves source-document discipline. | Not executed |
| V1.15A-04 | Workflow Agent | Workflow Design Document selected | Workflow prompt asks for the specific workflow required; uses Mini Workflow Brief when no SOP/policy exists; does not invent unrelated workflows from sample documents; Workflow Design Document template path is visible. | Not executed |
| V1.15A-05 | All agents | Prompt quality structure check | Session context, selected agent, selected outputs, unselected-output exclusion, source inventory, template references, missing-information instruction, evidence control, V1 scope notice and final instruction block are visible. | Not executed |
| V1.15A-06 | All agents | Prohibited architecture check | Prompt and validation wording do not introduce backend logic, DOCX generation, automatic document generation, Python, Node framework, database, server-side logic, AI API integration or template-population logic. | Not executed |

## 6. Acceptance Criteria

V1.15A passes only if:

- Prompt content is clearer and more structured.
- Output boundaries are explicit.
- Template references are visible.
- Missing information handling is explicit.
- Review prompt remains review-focused.
- Workflow prompt remains workflow-specific.
- Static V1.x scope restrictions remain visible.
- No prohibited architecture is introduced.

## 7. Failure Handling

If validation fails, record:

| Finding | Impact | Required V1.15B correction | App code change required? |
|---|---|---|---|
| To be confirmed | To be confirmed | To be confirmed | To be confirmed |

Failure handling rules:

- Record the exact prompt section or session report section where the issue appears.
- Record whether the issue is wording-only, registry-related, template-related or application behavior-related.
- Record whether the correction can be made through documentation/prompt wording or requires a separately approved app code change.
- Do not implement V1.15B corrections inside this V1.15A validation file.

## 8. Out-of-Scope Confirmation

V1.15A does not introduce:

- Backend generation.
- DOCX generation.
- DOCX template population.
- Database persistence.
- AI API integration.
- Server-side validation.
- Automatic document assembly.
- Template-population logic.
- Python.
- Node framework.
- Server-side routes.
- Any change to app files.

## Final Validation Note

V1.15A is a documentation and sample-session validation pack only. It prepares controlled prompt quality testing for Proposal Preparation, Project Governance, Document Review and Workflow Agent prompts while preserving the static Markdown-first V1.x architecture.
