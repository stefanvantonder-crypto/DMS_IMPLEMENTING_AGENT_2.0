# V2.2 Controlled Markdown Capture Workflow

## 1. Purpose

Plan how generated Markdown outputs should be captured, stored, reviewed, promoted through statuses and prepared for later packaging without changing the V1 app or approving runtime implementation.

## 2. Current V1/V2 Baseline

Current baseline:

- V1.19C confirmed that V1 can support usable Markdown-first outputs when controlled prompts are used with manually uploaded source documents.
- V2.0 planning confirmed Markdown remains canonical.
- V2.1 planning hardened output schema and review controls.
- Selected-output-only compliance is now treated as a formal quality gate.
- DOCX generation is not approved.
- Backend is not approved.
- V2 coding is not approved.
- V1 static prompt-control behaviour must remain unchanged.

## 3. Problem Statement

The project needs a future controlled way to capture generated Markdown outputs so that draft, reviewed and packaging-ready states are distinguishable and supported by evidence.

Without a defined workflow:

- Drafts may be mistaken for approved material.
- Evidence may become detached from outputs.
- Review status may drift or be unclear.
- Packaging readiness may be claimed too early.

## 4. Definition Of Controlled Markdown Capture

Controlled Markdown capture means:

- Storing generated Markdown outputs in a governed review lifecycle.
- Linking outputs to prompt evidence and source-document evidence.
- Tracking review status and promotion rules.
- Protecting selected-output-only compliance and quality-gate evidence.

## 5. What Controlled Markdown Capture Does Not Mean

- Not automatic document generation
- Not backend processing
- Not DOCX generation
- Not source file parsing
- Not final client approval

## 6. Proposed Future Workflow

- Generate controlled prompt in V1 app.
- Upload actual source documents manually to ChatGPT/Codex.
- Generate selected Markdown outputs only.
- Review generated Markdown against V2.1 quality gates.
- Capture output in draft area.
- Attach prompt/source evidence.
- Review and promote to reviewed area.
- Approve for packaging only after quality gate pass.

## 7. Workflow Statuses

- Draft
- Under Review
- Reviewed
- Accepted with Changes
- Approved for Packaging
- Rejected
- Superseded

## 8. Roles

- Preparer
- Reviewer
- Approver
- Template Controller
- Repository Controller

## 9. Control Points

- Selected-output-only check
- Source evidence check
- Quality gate check
- Version check
- Status check
- Packaging readiness check

## 10. Planning-Only Implementation Boundary

This workflow is a planning model only.

No capture implementation is approved in V2.2.
No actual output folders or generated output files are to be created by this phase.

## 11. Acceptance Criteria For Moving To V2.3

Do not move beyond planning until:

- Folder and status model are agreed.
- Naming and versioning rules are agreed.
- Evidence model is agreed.
- Promotion and rejection rules are clear.
- V1 remains unchanged.
- No implementation is implied by this workflow plan.

