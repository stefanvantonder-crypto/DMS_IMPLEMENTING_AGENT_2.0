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
- Confirm fallback mode displays: `Fallback configuration loaded. Repository JSON not available. Non-authoritative; use only for local UI testing.`
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

## V1.7 Manual Browser Polish Checklist

- Open `app/index.html` directly in a browser and confirm the page loads cleanly without a server.
- Confirm the header identifies the static Markdown prompt-control shell and the configuration banner is readable.
- Confirm fallback mode, if shown, is clearly marked non-authoritative.
- Select Proposal Preparation Agent and confirm the purpose, input guidance and Proposal output display clearly.
- Select Proposal only, generate a controlled prompt and confirm Proposal is the only selected output in the prompt.
- Download a session report and confirm the report contains Proposal only.
- Select Project Governance Agent and confirm exactly 15 governance outputs appear.
- Select Project Charter only, generate a controlled prompt and confirm only Project Charter appears.
- Add Risk Management Plan, generate again and confirm only Project Charter and Risk Management Plan appear.
- Download a session report and confirm it records only the selected governance outputs.
- Select Document Review Agent and confirm exactly 3 review outputs appear.
- Select Gap Analysis Report and confirm the prompt includes compliance, gaps, audit readiness, evidence quality and severity levels.
- Select Workflow Agent and confirm exactly 5 workflow outputs appear and the Mini Workflow Brief panel appears.
- Complete the Mini Workflow Brief fields, select Workflow Design Document and confirm the prompt includes the brief content.
- Confirm validation warnings appear for no agent selected, agent selected with no output selected, and Workflow Agent selected without a process source or Mini Workflow Brief.
- Confirm the selected-output-only rule still prevents unselected outputs from appearing in prompts and session reports.
- Confirm prompt preview text wraps cleanly and remains readable.
- Confirm Download Session Report creates a Markdown browser download only and does not create generated client documents inside the repository.
- Confirm no backend, Python, DOCX generation, root `package.json`, `server.js`, external libraries or generated client documents are added.

## V1.8 GitHub Pages Post-Deployment Checklist

- Confirm GitHub Pages is configured with Source `Deploy from a branch`, Branch `main`, and Folder `/root`.
- Open `https://stefanvantonder-crypto.github.io/DMS_IMPLEMENTING_AGENT_2.0/`.
- Confirm the root page redirects to `app/index.html`.
- Confirm the app loads without a backend.
- Confirm four agents display.
- Confirm Project Governance Agent shows exactly 15 outputs.
- Confirm Proposal Preparation Agent plus Proposal selected generates a controlled prompt containing Proposal only.
- Confirm Project Governance Agent plus Project Charter selected generates a controlled prompt containing Project Charter only.
- Confirm session report download works as a Markdown browser download.
- Confirm repository JSON loads from `../engine/` and `../knowledge_base/agents/` where the browser allows it.
- If fallback mode appears, confirm it is clearly marked non-authoritative.
- Confirm no DOCX output is generated.
- Confirm no backend, Python, package manager, `package.json`, `server.js`, external libraries or generated client documents are added.

## V1.9 Source Document Inventory Panel

- Confirm the Source Document Inventory panel appears in `app/index.html`.
- Confirm the panel explains that source documents are not stored or processed by the app and must be uploaded manually with the generated prompt.
- Confirm Document Classification options are populated from the selected agent's allowed inputs plus `Other session source document`.
- Confirm Document Type options include TOR, RFQ, RFP, Approved Proposal, Previous Proposal Example, Bid Specification, DMS User Manual, DMS Architecture Document, Client Policy, Client Procedure, Framework / Legislation / Standard, SOP, Business Process Description, User Interview Notes, Pricing Schedule, Reference Letter and Other.
- Confirm Add Source Document adds an entry to the inventory table.
- Confirm Clear Source Document Inventory clears the browser-memory inventory.
- Confirm Remove removes one inventory row.
- Confirm source inventory entries clear on page reload or remain browser-memory only.
- Confirm existing classification checkboxes still work.
- Confirm source inventory entries supplement classification checkboxes for required input warnings.
- Confirm a required source document marked Available for upload `No` shows `Required source document is listed but not available for upload.`
- Confirm Generate Controlled Prompt includes `Session Source Document Inventory`.
- Confirm prompt entries include Document Name, Classification, Type, Date, Version / Reference Number, Available for upload and Notes.
- Confirm a source document marked Available for upload `No` adds the related `To be confirmed` instruction.
- Confirm empty inventory prompts and reports say `No source document inventory entries were recorded. Use the selected document classifications as the session document checklist.`
- Confirm Session Report includes the Source Document Inventory section.
- Confirm selected-output-only generation still works.
- Confirm no file upload, file parsing, PDF extraction, DOCX extraction, backend, Python, DOCX generation, `package.json`, `server.js`, external libraries or generated client documents are added.

## V1.10 Session Save / Restore Planned Tests

- Confirm session export downloads `{safe_session_name}_DMS_Session_v01.json`.
- Confirm blank session export downloads `DMS_Session_v01.json`.
- Confirm exported JSON includes `schema_version`, `app_version`, `exported_at`, session fields, selected agent, selected document classifications, source document inventory metadata, selected outputs, Mini Workflow Brief, controlled prompt and validation warnings.
- Confirm exported JSON stores metadata and prompt text only, not actual source document files.
- Confirm exported JSON does not include parsed PDF, DOCX or source file content.
- Confirm importing a valid session JSON restores session fields.
- Confirm importing a valid session JSON restores the selected agent.
- Confirm importing a valid session JSON restores selected document classifications.
- Confirm importing a valid session JSON restores source document inventory metadata.
- Confirm importing a valid session JSON restores selected outputs without generating outputs automatically.
- Confirm importing a valid session JSON restores Mini Workflow Brief values.
- Confirm importing a valid session JSON restores controlled prompt text as previous session state, if available.
- Confirm the app shows `Session restored from JSON. Re-upload/provide actual source documents when using the generated prompt.`
- Confirm the user must click `Generate Controlled Prompt` again to create a fresh prompt after restore.
- Confirm invalid JSON is rejected with a clear warning.
- Confirm unsupported `schema_version` is rejected or warned without unsafe restore.
- Confirm restored output IDs missing from `engine/output_registry.json` produce a warning.
- Confirm restored agent IDs missing from `engine/agent_registry.json` produce a warning.
- Confirm restored source inventory entries marked unavailable produce a warning.
- Confirm no backend, database, Python, DOCX generation, Markdown-to-DOCX conversion, `package.json`, `server.js`, external libraries, localStorage implementation, generated client documents or permanent knowledge base updates are added.
