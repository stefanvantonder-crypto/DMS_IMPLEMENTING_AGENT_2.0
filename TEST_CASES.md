# Manual Test Cases

These are manual test categories only. They define what must be checked as V1 features are approved and implemented.

## Agent Selection

- Confirm the user can select one of the four approved agents.
- Confirm unavailable agents are not shown as active options.
- Confirm agent lists come from the approved registry when the registry phase is implemented.

## Document Classification

- Confirm the selected document type maps to an approved output category.
- Confirm unknown document types are marked as `To be confirmed`.
- Confirm no unsupported classification triggers automatic output generation.

## Output Selection

- Confirm the user can select specific outputs.
- Confirm selected outputs are clearly listed before generation.
- Confirm no hidden or default outputs are generated without selection.

## Missing Required Inputs

- Confirm missing client, project, source, date, approver, or workflow facts are marked as `To be confirmed`.
- Confirm missing facts are not replaced with assumptions.
- Confirm generated Markdown remains readable when facts are missing.

## Selected-Output-Only Enforcement

- Confirm only selected outputs are generated.
- Confirm unselected proposal, governance, review, or workflow outputs are not created.
- Confirm session reports record selected outputs accurately.

## Mini Workflow Brief

- Confirm workflow stage names are captured.
- Confirm routing logic is captured when supplied.
- Confirm missing routing details are marked as `To be confirmed`.

## Session Report Export

- Confirm session reports include selected agent, selected outputs, missing information, and generated file paths.
- Confirm session reports do not include unselected outputs as generated files.

## Registry/Template Missing Path Handling

- Confirm missing registry paths are reported clearly.
- Confirm missing template paths are reported clearly.
- Confirm missing paths do not trigger fallback assumptions or unapproved output generation.

## V1.3 Static UI Shell

- Confirm `app/index.html` opens directly in a browser.
- Confirm the configuration banner reports repository JSON configuration or embedded fallback configuration.
- Confirm fallback mode displays: `Fallback configuration loaded. Repository JSON not available. Use only for local UI testing.`
- Confirm all four approved agents are visible.
- Confirm Proposal Preparation Agent displays exactly 1 enabled V1 output.
- Confirm Project Governance Agent displays exactly 15 enabled V1 outputs.
- Confirm Document Review Agent displays exactly 3 enabled V1 outputs.
- Confirm Workflow Agent displays exactly 5 enabled V1 outputs.
- Confirm Mini Workflow Brief appears only when Workflow Agent is selected.
- Confirm selecting Project Charter displays `PROJECT_CHARTER_TEMPLATE.md` with manifest status `active`.
- Confirm validation warnings appear when no agent is selected, no output is selected, required classifications are missing, fallback configuration is active, or a selected output has no active manifest entry.
- Confirm Generate Controlled Prompt creates V1.3 placeholder preview text only.
- Confirm Copy Prompt copies the preview text.
- Confirm Download Session Report is not implemented as a full export in V1.3.
- Confirm the UI does not scan the templates folder directly and uses registry/manifest data only.

## V1.4 Controlled Prompt Generation

- Confirm no agent selected prevents prompt generation and shows a validation warning.
- Confirm agent selected with no output selected prevents prompt generation and shows a validation warning.
- Confirm Proposal Preparation Agent plus Proposal selected generates a prompt containing Proposal only.
- Confirm Proposal prompt does not include Project Charter or other unselected outputs.
- Confirm Project Governance Agent plus Project Charter selected generates a prompt containing Project Charter only.
- Confirm Project Charter prompt includes `PROJECT_CHARTER_TEMPLATE.md`.
- Confirm Project Charter prompt does not include other governance outputs.
- Confirm Project Governance Agent plus Project Charter and Risk Management Plan selected generates a prompt containing only those two outputs.
- Confirm Document Review Agent plus Gap Analysis Report selected includes review-specific instructions and severity levels: Critical, High, Medium, Low.
- Confirm Workflow Agent plus completed Mini Workflow Brief and Workflow Design Document selected includes the Mini Workflow Brief and workflow-specific instructions.
- Confirm Workflow Agent without a process source document and with incomplete Mini Workflow Brief shows a workflow source warning.
- Confirm fallback configuration mode allows prompt generation and includes fallback/non-authoritative warning text.
- Confirm generated prompt lists missing required inputs separately.
- Confirm generated prompt includes `To be confirmed`.
- Confirm generated prompt includes selected template paths, manifest status, output folders and suggested file name patterns.
- Confirm generated prompt does not include unselected outputs and does not auto-select all outputs.
- Confirm Copy Prompt copies only the current preview text.
- Confirm Download Session Report remains a V1.5 placeholder and does not export full reports in V1.4.
- Confirm no backend, Python, DOCX generation, root `package.json`, `server.js`, external libraries or generated client documents are added.

## V1.5 Session Report Export

- Confirm blank Session Name downloads `DMS_Session_Report_v01.md`.
- Confirm Session Name with spaces or special characters is safely sanitised in the downloaded Markdown filename.
- Confirm Project Governance Agent plus Project Charter selected creates a report containing Project Charter only.
- Confirm Project Charter report includes `PROJECT_CHARTER_TEMPLATE.md`.
- Confirm Project Charter report does not list all 15 governance outputs as selected.
- Confirm Project Governance Agent plus Project Charter and Risk Management Plan selected creates a report containing only those two selected outputs.
- Confirm Workflow Agent plus Mini Workflow Brief includes the Mini Workflow Brief section in the report.
- Confirm report generated before controlled prompt generation says `Controlled prompt has not yet been generated.`
- Confirm report generated after controlled prompt generation includes the controlled prompt exactly as displayed in the preview textarea.
- Confirm fallback configuration mode is included as embedded fallback, non-authoritative, and appears in report warnings.
- Confirm the report includes validation warnings when no agent or no output is selected.
- Confirm the suggested output save plan lists selected outputs only, with Markdown format and Draft status.
- Confirm the report states that it is a V1 control artifact only and not an automatically generated client deliverable.
- Confirm no backend, Python, DOCX generation, root `package.json`, `server.js`, external libraries or generated client documents are added.

## V1.6 Final Manual Browser Smoke Test

- Open `app/index.html` directly in a browser.
- Confirm the page loads without a server.
- Confirm the configuration banner shows either repository JSON configuration or embedded fallback configuration.
- If fallback mode appears, confirm the fallback warning is visible and clearly marked non-authoritative.
- Confirm all four agents are visible: Proposal Preparation Agent, Project Governance Agent, Document Review Agent and Workflow Agent.
- Select Proposal Preparation Agent and confirm the agent detail panel updates with purpose, inputs, classification guidance, default output folder and Proposal output.
- Select Project Governance Agent and confirm 15 enabled governance outputs appear.
- Select Document Review Agent and confirm 3 enabled review outputs appear.
- Select Workflow Agent and confirm 5 enabled workflow outputs appear and the Mini Workflow Brief panel is visible.
- Select Proposal Preparation Agent and Proposal only, then generate a controlled prompt.
- Confirm the prompt includes Proposal only and does not include Project Charter or other unselected outputs.
- Select Project Governance Agent and Project Charter only, then generate a controlled prompt.
- Confirm the prompt includes `PROJECT_CHARTER_TEMPLATE.md` and does not include all governance outputs.
- Select Project Governance Agent plus Project Charter and Risk Management Plan, then generate a controlled prompt.
- Confirm the prompt includes only those two selected outputs.
- Select Document Review Agent and Gap Analysis Report, then confirm the prompt includes review instructions and severity levels.
- Select Workflow Agent, complete the Mini Workflow Brief, select Workflow Design Document and generate a prompt.
- Confirm the prompt includes the Mini Workflow Brief and workflow-specific instructions.
- Select Workflow Agent without process source and without Mini Workflow Brief, then confirm the workflow source warning appears.
- Confirm Copy Prompt copies the current prompt preview content.
- Download a session report with a blank Session Name and confirm the filename is `DMS_Session_Report_v01.md`.
- Download a session report with spaces or special characters in Session Name and confirm the filename is safely sanitised.
- Confirm the session report includes selected outputs only.
- Confirm the session report includes the controlled prompt if one was generated.
- Confirm the session report says `Controlled prompt has not yet been generated.` when no prompt was generated.
- Confirm the session report includes the V1 scope-control notice and does not describe itself as a generated client deliverable.
- Confirm no files are created automatically under `outputs/` except browser downloads chosen by the user.
- Confirm no DOCX files are generated.
