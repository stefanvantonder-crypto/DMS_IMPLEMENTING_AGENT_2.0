# V1.16 User Acceptance Test Plan

## Purpose

This User Acceptance Test plan defines how to execute and record real pass/fail evidence for the V1.x static DMS Implementing Agent app.

The purpose is to confirm that the app remains usable, controlled and aligned with the Markdown-first prompt-control baseline after the V1.15 prompt quality planning and V1.15B findings review.

## Scope

This UAT covers:

- Static app load and navigation.
- Agent selection for all four approved V1 agents.
- Source document inventory metadata entry.
- Selected-output-only controlled prompt generation.
- Markdown session report download.
- Session JSON export and import restore.
- Validation warnings.
- V1 scope-control safeguards.

Approved V1 agents covered:

- Proposal Preparation Agent.
- Project Governance Agent.
- Document Review Agent.
- Workflow Agent.

## Out Of Scope

This UAT does not test or approve:

- Backend generation.
- Python services or scripts.
- DOCX generation.
- DOCX template population.
- Package managers or Node frameworks.
- `package.json`.
- `server.js`.
- Databases.
- localStorage.
- External libraries.
- File upload.
- File parsing.
- PDF extraction.
- DOCX extraction.
- Automatic client deliverable generation.
- Changes to selected-output-only logic.
- New app features.

## Test Environment

Local test environment:

- Workspace: `C:\DMS_IMPLEMENTING_AGENT_RECOVERY_BASELINE`
- Local app path: `app/index.html`
- Browser: To be confirmed by tester.
- Network required for local test: No.

Optional live test environment:

- GitHub Pages URL: `https://stefanvantonder-crypto.github.io/DMS_IMPLEMENTING_AGENT_2.0/`
- Live test dependency: GitHub Pages must be published and reachable.

## Test Roles

| Role | Responsibility | Name |
|---|---|---|
| Tester | Execute scripts and record actual results. | To be confirmed |
| Product owner | Review results and acceptance decision. | To be confirmed |
| Reviewer | Check defects, scope controls and sign-off pack. | To be confirmed |

## Entry Criteria

UAT may start when:

- V1.15B findings review is complete.
- `app/index.html` is available.
- `engine/agent_registry.json` is available.
- `engine/output_registry.json` is available.
- `engine/template_manifest.json` is available.
- `knowledge_base/agents/*.json` files are available.
- Tester has access to a browser.
- Tester has sample non-confidential source document names to enter as metadata.

## Exit Criteria

UAT may be closed when:

- All V1.16 UAT scripts have an actual result.
- Each test has Pass or Fail recorded.
- Defects have severity assigned.
- Any failed test has a defect ID or finding note.
- Retest results are recorded where needed.
- Scope-control checks confirm no prohibited V1 behavior.
- Sign-off decision is recorded in `docs/uat/V1_16_UAT_SIGN_OFF_TEMPLATE.md`.

## Test Data Approach

Use sample or placeholder data only.

Recommended sample values:

- Client name: `[Client Name]`
- Project name: `[Project Name]`
- Contract or bid number: `[Contract Number]`
- Prepared by: `[Tester Name]`
- Missing facts: `To be confirmed`

Source document inventory entries must be metadata only. Actual source documents are not uploaded, parsed or stored by the app. When using the controlled prompt in ChatGPT/Codex, source documents must be uploaded or provided manually with the prompt.

## Defect Logging Approach

Record defects in `docs/uat/V1_16_UAT_RESULTS_REGISTER.md`.

Each defect note should include:

- Test ID.
- Short finding description.
- Expected result.
- Actual result.
- Severity.
- Whether retest is required.
- Whether the issue is documentation, prompt wording, UI behavior or scope-control related.

## Pass/Fail Rules

Pass:

- The expected result is fully met.
- No unselected output is included as a selected output.
- Missing required facts use `To be confirmed`.
- V1 scope-control restrictions remain visible and unchanged.

Fail:

- The app does not load.
- A selected-output-only check fails.
- An unselected output appears as a selected output or generated target.
- A required template path is missing from the prompt or report.
- Session export/import does not restore the expected state.
- Any UI function appears for backend generation, DOCX generation, file parsing or automatic client deliverable generation.

Blocked:

- Tester cannot access the local or live test environment.
- Browser download or import is prevented by local security controls.
- Required test data is not available.

## V1 Scope Controls

UAT must confirm:

- No backend is used.
- No DOCX generation is available.
- No automatic document generation is available.
- No source file parsing is available.
- Source documents are uploaded or provided manually to ChatGPT/Codex with the generated prompt.
- Session reports are Markdown browser downloads only.
- Session JSON is a browser download/import control artifact only.
- The app does not create generated client deliverables in the repository.

## Acceptance Criteria

V1.16 UAT is acceptable when:

- All four agents are visible.
- Selected-output-only behavior passes for Proposal, Governance, Review and Workflow scenarios.
- Session report export works as a Markdown browser download.
- Session JSON export/import restores expected state.
- Validation warnings appear for missing required selections or source context.
- V1 scope controls pass.
- Open defects are accepted by the product owner or resolved before sign-off.
