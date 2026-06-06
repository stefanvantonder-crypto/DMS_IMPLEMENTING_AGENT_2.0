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

## V1.10A Session JSON Export

- Confirm session export downloads `{safe_session_name}_DMS_Session_v01.json`.
- Confirm blank session export downloads `DMS_Session_v01.json`.
- Confirm exported JSON includes `schema_version`, `app_version`, `exported_at`, session fields, selected agent, selected document classifications, source document inventory metadata, selected outputs, Mini Workflow Brief, controlled prompt and validation warnings.
- Confirm exported JSON stores metadata and prompt text only, not actual source document files.
- Confirm exported JSON does not include parsed PDF, DOCX or source file content.
- Confirm `app/session-export-core.js` is loaded by `app/index.html` as a normal browser script before `app/script.js`.
- Confirm `app/session-export-core.js` exposes `window.DmsSessionExport` and contains no `require`, `module.exports`, package imports, server calls or build-tool dependency.
- Confirm the app can be opened from `app/index.html` or GitHub Pages using static HTML/CSS/JavaScript/JSON only, with no Node runtime required.
- Confirm Export Session JSON does not import, restore, upload, parse files, use localStorage, call a backend or generate client documents.
- Confirm no app runtime test file is required for V1.10A export and no Node-based test file is needed to operate the static app.
- Confirm `tools/template_migration.py` is absent from the active V1 repository.
- Confirm `tools/python/` is absent from the active V1 repository and no bundled Python runtime is required by the app.
- Confirm no Python files remain in active V1 paths.
- Confirm no backend, database, Python, DOCX generation, Markdown-to-DOCX conversion, `package.json`, `server.js`, external libraries, localStorage implementation, generated client documents or permanent knowledge base updates are added.

## V1.10B Session JSON Import / Restore Planned Tests

- Import/restore is not active in V1.10A. Run these tests only after V1.10B is separately approved.
- Confirm the V1.10B planning documents exist: `docs/architecture/SESSION_IMPORT_RESTORE_PLAN.md` and `docs/decisions/ADR_V1_10B_SESSION_IMPORT_RESTORE.md`.
- Confirm importing a valid session JSON restores session fields.
- Confirm importing a valid session JSON restores the selected agent.
- Confirm importing a valid session JSON restores selected document classifications.
- Confirm importing a valid session JSON restores source document inventory metadata.
- Confirm importing a valid session JSON restores selected outputs without generating outputs automatically.
- Confirm importing a valid session JSON restores Mini Workflow Brief values.
- Confirm importing a valid session JSON restores controlled prompt text as previous session state, if available.
- Confirm the app shows `Session restored from JSON. Re-upload/provide the actual source documents in ChatGPT/Codex when using the prompt. The JSON file stores metadata only.`
- Confirm the user must click `Generate Controlled Prompt` again to create a fresh prompt after restore.
- Confirm invalid JSON is rejected with a clear warning.
- Confirm missing `schema_version` shows `Imported session is missing schema_version and cannot be safely restored.`
- Confirm unsupported `schema_version` is rejected or warned without unsafe restore.
- Confirm unsupported `schema_version` shows `Unsupported session schema version. Import was not restored.`
- Confirm restored output IDs missing from `engine/output_registry.json` produce a warning.
- Confirm restored agent IDs missing from `engine/agent_registry.json` produce a warning.
- Confirm restored output IDs belonging to a different agent are ignored and listed in the import summary.
- Confirm restored classifications not valid for the restored agent are ignored or marked unknown.
- Confirm restored source document inventory does not treat source files as uploaded.
- Confirm restored source inventory entries marked unavailable produce a warning.
- Confirm fallback configuration active is reported in import warnings.
- Confirm selected-output-only behaviour still works after restore.
- Confirm no backend, database, Python, DOCX generation, Markdown-to-DOCX conversion, `package.json`, `server.js`, external libraries, localStorage implementation, file parsing, PDF extraction, DOCX extraction, generated client documents or permanent knowledge base updates are added.

## V1.10C Session JSON Import / Restore

- Confirm `Import Session JSON` appears in the static `app/index.html` UI.
- Confirm clicking `Import Session JSON` opens a local `.json` file picker and does not upload the file.
- Confirm importing a valid schema `1.0` session restores session fields: Session Name, Client Name, Project Name, Contract / Bid Number, Prepared By and Session Notes.
- Confirm importing a valid session restores the selected agent only when the imported agent ID still exists in the current agent registry.
- Confirm an unavailable imported agent shows `Imported agent ID is no longer available: [id].` and does not restore document classifications or outputs for that agent.
- Confirm imported document classifications restore only when valid for the restored agent.
- Confirm invalid or obsolete imported document classifications are ignored and listed in the import summary.
- Confirm imported source document inventory restores metadata only: document name, classification, document type, document date, version/reference, available-for-upload flag and notes.
- Confirm restored source document inventory does not contain file contents and does not treat source documents as uploaded.
- Confirm restored source inventory entries marked unavailable produce an import warning.
- Confirm imported selected outputs restore only when the output exists, belongs to the restored agent and is enabled in V1.
- Confirm missing, disabled or wrong-agent output IDs are ignored and listed in the import summary.
- Confirm Mini Workflow Brief fields restore from imported JSON.
- Confirm imported historical controlled prompt text is restored with the prefix `[Imported historical controlled prompt. Click Generate Controlled Prompt to create a fresh prompt from the restored session.]`
- Confirm import does not auto-generate a fresh controlled prompt or download any output.
- Confirm after successful import the app shows `Session restored from JSON. Re-upload/provide the actual source documents in ChatGPT/Codex when using the prompt. The JSON file stores metadata only.`
- Confirm valid import with no ignored items shows `Session restored successfully`.
- Confirm partial import with ignored outputs, ignored classifications or obsolete agent data shows `Session restored with warnings`.
- Confirm invalid JSON shows `Import failed: invalid JSON file.` and does not alter the current UI state.
- Confirm missing `schema_version` shows `Import failed: imported session is missing schema_version and cannot be safely restored.` and does not alter the current UI state.
- Confirm unsupported schema versions show `Import failed: unsupported session schema version.` and do not alter the current UI state.
- Confirm missing required top-level fields show `Import failed: missing required field(s): ...` and list the missing fields.
- Confirm imported text is rendered as text only and is not executed as HTML or script.
- Confirm Export Session JSON after import reflects the restored current state.
- Confirm Download Session Report after import states whether the session was restored from JSON, lists import warnings and includes the source document re-upload reminder.
- Confirm selected-output-only behaviour still works after restore and fresh prompt generation.
- Confirm no backend, database, Python, DOCX generation, Markdown-to-DOCX conversion, `package.json`, `server.js`, external libraries, localStorage implementation, file parsing, PDF extraction, DOCX extraction, generated client documents or permanent knowledge base updates are added.

## V1.10D Import / Export Smoke Test

- Export a Project Governance Agent session with Client TOR and Approved Proposal source inventory entries.
- Select Project Charter only, generate a controlled prompt and export Session JSON.
- Confirm exported JSON includes `schema_version`, `app_version`, `exported_at`, `session`, selected agent, `source_document_inventory`, `outputs.selected_output_ids`, `outputs.selected_output_details`, `controlled_prompt`, `validation_warnings` and `export_notice`.
- Import the exported Project Governance JSON.
- Confirm Project Governance Agent is selected after import.
- Confirm Project Charter only is selected after import.
- Confirm no extra governance outputs are selected after import.
- Confirm source inventory metadata restores after import.
- Confirm imported historical controlled prompt appears with the approved historical prompt prefix.
- Click Generate Controlled Prompt after import.
- Confirm the fresh prompt replaces the imported historical prompt.
- Confirm selected-output-only still applies after fresh prompt generation.
- Export a Workflow Agent session with Mini Workflow Brief populated and Workflow Design Document selected.
- Import the Workflow Agent JSON and confirm Mini Workflow Brief fields restore.
- Confirm Workflow Design Document only is selected after workflow import.
- Confirm invalid JSON fails with `Import failed: invalid JSON file.` and does not mutate current UI state.
- Confirm missing `schema_version` fails with `Import failed: imported session is missing schema_version and cannot be safely restored.` and does not mutate current UI state.
- Confirm unsupported `schema_version` fails with `Import failed: unsupported session schema version.` and does not mutate current UI state.
- Confirm unknown agent IDs warn and do not select invalid agents.
- Confirm obsolete output IDs are ignored with warnings.
- Confirm wrong-agent output IDs are ignored with warnings.
- Confirm invalid classifications are ignored with warnings.
- Confirm imported text is rendered as text only and is not executed as HTML or script.
- Confirm imported JSON is not stored in localStorage or sessionStorage.
- Confirm imported JSON is not uploaded over the network.
- Confirm no source file contents are restored.
- Confirm no backend, server file, database, Python, DOCX generation, Markdown-to-DOCX conversion, `package.json`, `server.js`, external libraries, localStorage implementation, file parsing, PDF extraction, DOCX extraction, generated client documents or permanent knowledge base updates are added.

## V1.11 GitHub Pages Live Validation And User Guides

- Confirm `docs/user_guide/DMS_IMPLEMENTING_AGENT_V1_USER_GUIDE.md` exists.
- Confirm `docs/user_guide/QUICK_START_GUIDE.md` exists.
- Confirm README links to the user guide and quick start guide.
- Confirm `docs/architecture/GITHUB_PAGES_DEPLOYMENT.md` includes the V1.11 live validation checklist.
- Open `https://stefanvantonder-crypto.github.io/DMS_IMPLEMENTING_AGENT_2.0/`.
- Confirm the GitHub Pages URL opens after Pages has finished publishing.
- Confirm the root redirect works.
- Confirm `app/index.html` loads.
- Confirm four agents display.
- Confirm Project Governance Agent shows 15 outputs.
- Confirm Project Charter prompt generation works.
- Confirm session report download works.
- Confirm Session JSON exports.
- Confirm Session JSON imports.
- Confirm no DOCX generation appears.
- Confirm no backend or server is required.
- Confirm the user guide explains that source document inventory stores metadata only.
- Confirm the user guide explains that actual source documents must still be uploaded/provided manually to ChatGPT/Codex.
- Confirm the user guide explains selected-output-only behavior.
- Confirm the user guide explains missing information must be treated as `To be confirmed`.
- Confirm no app logic, agents, registries or templates were changed for V1.11.
- Confirm no backend, database, Python, DOCX generation, Markdown-to-DOCX conversion, `package.json`, `server.js`, external libraries, localStorage implementation, file upload, file parsing, PDF extraction, DOCX extraction, generated client documents or alternate app folders are added.

## V1.12 Prompt Quality Review And Sample Session Pack

- Confirm `docs/sample_sessions/proposal_agent_sample_session.md` exists.
- Confirm `docs/sample_sessions/project_governance_sample_session.md` exists.
- Confirm `docs/sample_sessions/document_review_sample_session.md` exists.
- Confirm `docs/sample_sessions/workflow_agent_sample_session.md` exists.
- Confirm `docs/sample_sessions/V1_12_PROMPT_QUALITY_REVIEW.md` exists.
- Confirm `docs/sample_sessions/SAMPLE_SESSION_TEST_MATRIX.md` exists.
- Confirm Proposal Agent sample selects Proposal only.
- Confirm Proposal Agent sample expects no governance, review or workflow outputs.
- Confirm Project Governance sample includes Project Charter, Risk Management Plan and Test and Go-Live Plan examples.
- Confirm Project Governance sample expects selected governance outputs only.
- Confirm Document Review sample includes Gap Analysis Report and Improvement Action Plan examples.
- Confirm Document Review sample expects gap, impact, risk, recommendation, required evidence and severity levels.
- Confirm Workflow Agent sample includes the tea-request Mini Workflow Brief example.
- Confirm Workflow Agent sample expects selected workflow outputs only.
- Confirm the sample session test matrix includes import restored governance session and workflow export/import restore rows.
- Confirm prompt quality review includes selected-output-only enforcement, source document session specificity, missing information handling and V1 no-DOCX/no-backend scope.
- Confirm all sample session files use placeholders such as `[Client Name]` and `[To be confirmed]`.
- Confirm sample sessions do not contain real client confidential information.
- Confirm no app files, agent JSON files, registry JSON files, templates or prompts were changed.
- Confirm no backend, database, Python, DOCX generation, Markdown-to-DOCX conversion, `package.json`, `server.js`, external libraries, localStorage implementation, file upload, file parsing, PDF extraction, DOCX extraction, generated client documents or alternate app folders are added.

## V1.12A Sample Session Matrix Execution Results

- Confirm `docs/sample_sessions/V1_12A_SAMPLE_SESSION_RESULTS.md` exists.
- Confirm `docs/sample_sessions/SAMPLE_SESSION_TEST_MATRIX.md` includes a V1.12A recorded results section.
- Confirm all 11 sample-session matrix rows have a recorded result.
- Confirm Proposal Agent plus Proposal only was tested.
- Confirm Project Governance Agent Project Charter-only and multi-output cases were tested.
- Confirm Document Review Agent single-output and multi-output cases were tested.
- Confirm Workflow Agent SOP, Mini Workflow Brief and multi-output cases were tested.
- Confirm import restored governance session plus fresh prompt regeneration was tested.
- Confirm workflow export/import plus Mini Workflow Brief restore was tested.
- Confirm prompt quality issues are recorded as observations only.
- Confirm app defects, if any, are documented but not fixed in V1.12A.
- Confirm no app files, agent JSON files, registry JSON files, templates or prompts were changed.
- Confirm no backend, database, Python, DOCX generation, Markdown-to-DOCX conversion, `package.json`, `server.js`, external libraries, localStorage implementation, file upload, file parsing, PDF extraction, DOCX extraction, generated client documents or alternate app folders are added.
