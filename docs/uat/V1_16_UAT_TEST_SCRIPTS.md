# V1.16 UAT Test Scripts

Use these scripts to execute and record manual user acceptance testing for the V1.x static DMS Implementing Agent app.

For each test, complete:

- Actual Result.
- Pass/Fail.
- Tester.
- Date.
- Notes.

## A. App Load And Navigation

### Test ID: V1.16-UAT-01

**Objective:** Confirm the local static app loads without a backend.

**Preconditions:**

- Workspace is available at `C:\DMS_IMPLEMENTING_AGENT_RECOVERY_BASELINE`.
- Browser is available.

**Steps:**

1. Open `app/index.html` directly in a browser.
2. Confirm the page loads.
3. Confirm no server command is required.
4. Confirm the app header and main interface are visible.

**Expected Result:**

- The app loads locally as a static page.
- No backend, server route, package manager or command-line server is required.

**Actual Result:** To be completed during UAT.

**Pass/Fail:** To be completed during UAT.

**Tester:** To be confirmed.

**Date:** To be confirmed.

**Notes:** To be confirmed.

### Test ID: V1.16-UAT-02

**Objective:** Confirm the GitHub Pages app loads if available.

**Preconditions:**

- Network access is available.
- GitHub Pages has been published.

**Steps:**

1. Open `https://stefanvantonder-crypto.github.io/DMS_IMPLEMENTING_AGENT_2.0/`.
2. Confirm the root page redirects or opens the app.
3. Confirm the app interface is visible.
4. If the page is unavailable, record the access issue.

**Expected Result:**

- The GitHub Pages app loads when available.
- If unavailable, the result is recorded as blocked rather than treated as an app defect.

**Actual Result:** To be completed during UAT.

**Pass/Fail:** To be completed during UAT.

**Tester:** To be confirmed.

**Date:** To be confirmed.

**Notes:** To be confirmed.

### Test ID: V1.16-UAT-03

**Objective:** Confirm all four approved agents display.

**Preconditions:**

- App is loaded.

**Steps:**

1. View the agent selection area.
2. Confirm Proposal Preparation Agent is visible.
3. Confirm Project Governance Agent is visible.
4. Confirm Document Review Agent is visible.
5. Confirm Workflow Agent is visible.

**Expected Result:**

- Exactly the four approved V1 agent areas are visible.

**Actual Result:** To be completed during UAT.

**Pass/Fail:** To be completed during UAT.

**Tester:** To be confirmed.

**Date:** To be confirmed.

**Notes:** To be confirmed.

## B. Proposal Preparation Agent

### Test ID: V1.16-UAT-04

**Objective:** Confirm Proposal Preparation Agent generates a controlled prompt for Proposal only.

**Preconditions:**

- App is loaded.
- Proposal Preparation Agent is available.

**Steps:**

1. Select Proposal Preparation Agent.
2. Enter session details using placeholder values.
3. Add source document inventory entries for Client TOR, Bid specification, Company profile, Pricing schedule and Reference letters.
4. Mark unavailable or missing source documents as unavailable where applicable.
5. Select Proposal output only.
6. Click Generate Controlled Prompt.
7. Confirm the controlled prompt lists Proposal only as the selected output.
8. Confirm Project Charter, Risk Management Plan and Test and Go-Live Plan do not appear as selected outputs.
9. Confirm `templates/proposal_templates/PROPOSAL_TEMPLATE.md` is visible.
10. Confirm missing TOR, pricing or reference-letter data is marked `To be confirmed`.
11. Export session JSON.
12. Download the Markdown session report.

**Expected Result:**

- Proposal Preparation Agent prompt includes Proposal only.
- Unselected governance outputs are excluded.
- Proposal template path is visible.
- Missing proposal evidence is marked `To be confirmed`.
- Session JSON exports as a browser download.
- Markdown session report downloads as a browser download.

**Actual Result:** To be completed during UAT.

**Pass/Fail:** To be completed during UAT.

**Tester:** To be confirmed.

**Date:** To be confirmed.

**Notes:** To be confirmed.

## C. Project Governance Agent

### Test ID: V1.16-UAT-05

**Objective:** Confirm Project Governance Agent displays 15 enabled outputs.

**Preconditions:**

- App is loaded.

**Steps:**

1. Select Project Governance Agent.
2. Count the enabled output options displayed.
3. Confirm the count is 15.

**Expected Result:**

- Project Governance Agent displays 15 enabled V1 outputs.

**Actual Result:** To be completed during UAT.

**Pass/Fail:** To be completed during UAT.

**Tester:** To be confirmed.

**Date:** To be confirmed.

**Notes:** To be confirmed.

### Test ID: V1.16-UAT-06

**Objective:** Confirm Project Charter only remains selected-output-only.

**Preconditions:**

- App is loaded.
- Project Governance Agent is selected.

**Steps:**

1. Add source inventory entries:
   - Client TOR.
   - Approved Proposal.
   - DMS system documentation.
   - DMS architecture documentation.
2. Select Project Charter only.
3. Click Generate Controlled Prompt.
4. Confirm Project Charter appears as the only selected output.
5. Confirm Proposal, Risk Management Plan, Gap Analysis Report and Workflow Design Document are excluded as selected outputs.
6. Confirm `templates/project_governance_templates/PROJECT_CHARTER_TEMPLATE.md` is visible.
7. Confirm missing governance inputs are marked `To be confirmed`.

**Expected Result:**

- Project Charter only is included.
- Unselected outputs are excluded.
- Project Charter template path is visible.
- Missing governance facts use `To be confirmed`.

**Actual Result:** To be completed during UAT.

**Pass/Fail:** To be completed during UAT.

**Tester:** To be confirmed.

**Date:** To be confirmed.

**Notes:** To be confirmed.

### Test ID: V1.16-UAT-07

**Objective:** Confirm adding Risk Management Plan produces exactly two selected outputs.

**Preconditions:**

- Project Governance Agent is selected.
- Project Charter is already selected.

**Steps:**

1. Add Risk Management Plan.
2. Click Generate Controlled Prompt.
3. Confirm Project Charter appears.
4. Confirm Risk Management Plan appears.
5. Confirm no other governance, proposal, review or workflow output appears as selected.
6. Confirm both mapped Markdown template paths are visible.

**Expected Result:**

- Only Project Charter and Risk Management Plan are selected outputs.
- Both template paths are visible.
- Unselected outputs remain excluded.

**Actual Result:** To be completed during UAT.

**Pass/Fail:** To be completed during UAT.

**Tester:** To be confirmed.

**Date:** To be confirmed.

**Notes:** To be confirmed.

### Test ID: V1.16-UAT-08

**Objective:** Confirm governance session JSON export/import restores expected state.

**Preconditions:**

- Project Governance Agent is selected.
- Project Charter and Risk Management Plan are selected.
- Source inventory entries are populated.

**Steps:**

1. Export session JSON.
2. Refresh the page.
3. Import the exported session JSON.
4. Confirm Project Governance Agent is restored.
5. Confirm Project Charter and Risk Management Plan selections are restored.
6. Confirm source inventory metadata is restored.
7. Confirm fresh prompt generation must be manually triggered.

**Expected Result:**

- Session JSON restores expected state.
- No fresh controlled prompt is automatically generated.
- User must click Generate Controlled Prompt manually.

**Actual Result:** To be completed during UAT.

**Pass/Fail:** To be completed during UAT.

**Tester:** To be confirmed.

**Date:** To be confirmed.

**Notes:** To be confirmed.

## D. Document Review Agent

### Test ID: V1.16-UAT-09

**Objective:** Confirm Document Review Agent prompt remains review-specific.

**Preconditions:**

- App is loaded.

**Steps:**

1. Select Document Review Agent.
2. Add source inventory entry for Document to be Reviewed.
3. Add source inventory entry for a review framework example.
4. Select Gap Analysis Report.
5. Click Generate Controlled Prompt.
6. Confirm the prompt includes review-specific instructions.
7. Confirm the prompt asks for gaps, compliance, audit readiness, evidence strength and framework alignment.
8. Confirm the prompt does not ask for a replacement document unless explicitly requested.
9. Confirm missing review evidence is marked `To be confirmed`.

**Expected Result:**

- Gap Analysis Report prompt is review-focused.
- Review source discipline is preserved.
- Missing evidence uses `To be confirmed`.
- Proposal, governance and workflow deliverables are not generated unless selected.

**Actual Result:** To be completed during UAT.

**Pass/Fail:** To be completed during UAT.

**Tester:** To be confirmed.

**Date:** To be confirmed.

**Notes:** To be confirmed.

## E. Workflow Agent

### Test ID: V1.16-UAT-10

**Objective:** Confirm Workflow Agent uses the Mini Workflow Brief for Workflow Design Document.

**Preconditions:**

- App is loaded.

**Steps:**

1. Select Workflow Agent.
2. Complete the Mini Workflow Brief fields:
   - Workflow Description / What must happen.
   - Workflow Rules / Conditions.
   - Roles / People involved.
   - Expected outcome.
3. Select Workflow Design Document.
4. Click Generate Controlled Prompt.
5. Confirm the Mini Workflow Brief appears in the prompt.
6. Confirm Workflow Design Document is the only selected output.
7. Confirm the prompt does not invent unrelated workflows from sample documents.
8. Confirm `templates/workflow_templates/WORKFLOW_DESIGN_DOCUMENT_TEMPLATE.md` is visible.
9. Export session JSON.
10. Refresh the page.
11. Import session JSON.
12. Confirm Mini Workflow Brief fields restore.
13. Confirm fresh prompt generation must be manually triggered.

**Expected Result:**

- Workflow prompt includes Mini Workflow Brief content.
- Workflow Design Document is the only selected output.
- Workflow template path is visible.
- Session JSON export/import restores workflow state.
- No fresh prompt is generated automatically after import.

**Actual Result:** To be completed during UAT.

**Pass/Fail:** To be completed during UAT.

**Tester:** To be confirmed.

**Date:** To be confirmed.

**Notes:** To be confirmed.

## F. Validation Warnings

### Test ID: V1.16-UAT-11

**Objective:** Confirm validation warnings appear for missing selections and missing source context.

**Preconditions:**

- App is loaded.

**Steps:**

1. Attempt to generate a prompt with no agent selected.
2. Select an agent and attempt to generate with no output selected.
3. Select Proposal Preparation Agent and Proposal, but leave required source documents unselected or unavailable.
4. Add a required source document entry and mark it unavailable.
5. Select Workflow Agent without SOP, process source or Mini Workflow Brief.
6. Observe validation warnings after each condition.

**Expected Result:**

- Warning appears when no agent is selected.
- Warning appears when no output is selected.
- Warning appears for missing required source documents.
- Warning or prompt instruction marks unavailable required source documents as `To be confirmed`.
- Workflow warning appears when SOP/process/Mini Workflow Brief context is missing.

**Actual Result:** To be completed during UAT.

**Pass/Fail:** To be completed during UAT.

**Tester:** To be confirmed.

**Date:** To be confirmed.

**Notes:** To be confirmed.

## G. Session Save/Restore

### Test ID: V1.16-UAT-12

**Objective:** Confirm session JSON save/restore works without automatic generation.

**Preconditions:**

- App is loaded.
- Any valid agent, source inventory and selected output combination is prepared.

**Steps:**

1. Generate a controlled prompt.
2. Export session JSON.
3. Refresh the page.
4. Import the exported session JSON.
5. Confirm session details restore.
6. Confirm selected agent restores.
7. Confirm selected outputs restore.
8. Confirm source document inventory metadata restores.
9. Confirm imported historical prompt is marked as historical.
10. Confirm fresh prompt generation requires a manual click.

**Expected Result:**

- Session state restores.
- Source document metadata restores.
- Source document file contents are not restored.
- Fresh prompt generation is manual.
- No localStorage, backend call or generated client document is created.

**Actual Result:** To be completed during UAT.

**Pass/Fail:** To be completed during UAT.

**Tester:** To be confirmed.

**Date:** To be confirmed.

**Notes:** To be confirmed.

## H. Scope Control

### Test ID: V1.16-UAT-13

**Objective:** Confirm no prohibited V1 functions exist in the UI.

**Preconditions:**

- App is loaded.

**Steps:**

1. Inspect the UI for backend generation actions.
2. Inspect the UI for DOCX generation actions.
3. Inspect the UI for file upload or file parsing actions.
4. Inspect the UI for PDF extraction or DOCX extraction actions.
5. Inspect the UI for automatic client deliverable generation actions.
6. Confirm available downloads are limited to Markdown session report and Session JSON where applicable.

**Expected Result:**

- No UI function exists for backend generation.
- No UI function exists for DOCX generation.
- No UI function exists for file upload or parsing.
- No UI function exists for PDF or DOCX extraction.
- No UI function exists for automatic client deliverable generation.
- Available browser downloads remain V1 control artifacts only.

**Actual Result:** To be completed during UAT.

**Pass/Fail:** To be completed during UAT.

**Tester:** To be confirmed.

**Date:** To be confirmed.

**Notes:** To be confirmed.
