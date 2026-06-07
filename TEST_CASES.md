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

## V2.0 Export Strategy Planning

- Confirm `docs/planning/V2_0_MARKDOWN_TO_DOCX_EXPORT_STRATEGY.md` exists.
- Confirm `docs/planning/V2_0_ARCHITECTURE_OPTIONS_ANALYSIS.md` exists.
- Confirm `docs/planning/V2_0_DOCX_TEMPLATE_CONTROL_MODEL.md` exists.
- Confirm `docs/planning/V2_0_RISK_AND_GUARDRAIL_REGISTER.md` exists.
- Confirm `docs/decisions/ADR_V2_0_DOCUMENT_EXPORT_STRATEGY.md` exists.
- Confirm the ADR status is `Proposed`.
- Confirm the planning docs keep Markdown as the recommended canonical source format.
- Confirm the planning docs do not approve backend or DOCX generation yet.
- Confirm `VERSION_ROADMAP.md` includes the staged V2.0 through V2.5 roadmap.
- Confirm no app files changed.
- Confirm no backend was added.
- Confirm no DOCX generation was added.
- Confirm no `package.json`, `server.js` or Python implementation was added.
- Confirm no generated deliverables were created.

## V2.1 Output Schema And Review Planning

- Confirm `docs/planning/V2_1_OUTPUT_SCHEMA_HARDENING_PLAN.md` exists.
- Confirm `docs/planning/V2_1_MARKDOWN_OUTPUT_CAPTURE_REVIEW_MODEL.md` exists.
- Confirm `docs/planning/V2_1_OUTPUT_QUALITY_GATE_MODEL.md` exists.
- Confirm `docs/planning/V2_1_SELECTED_OUTPUT_COMPLIANCE_MODEL.md` exists.
- Confirm `docs/decisions/ADR_V2_1_MARKDOWN_OUTPUT_CAPTURE_REVIEW.md` exists.
- Confirm V2.1 planning docs define output validity, metadata, required sections and required rules.
- Confirm the capture/review model states clearly that capture implementation is not approved.
- Confirm the quality gate model defines eight gates with pass/fail and evidence requirements.
- Confirm the selected-output compliance model protects selected-output-only behaviour.
- Confirm no app files changed.
- Confirm no runtime files were added.
- Confirm no backend was added.
- Confirm no DOCX generation was added.
- Confirm no `package.json`, `server.js` or Python implementation was added.
- Confirm no generated deliverables were created.
- Confirm ADR status remains `Proposed`.

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

## V1.13 Prompt Scope Wording Fix

- Confirm Proposal Agent plus Proposal only generates a prompt that explicitly says no backend is used in Version 1.x.
- Confirm Proposal Agent plus Proposal only generates a prompt that explicitly says no server-side generation is used in Version 1.x.
- Confirm Proposal Agent plus Proposal only still includes Proposal only.
- Confirm Project Governance Agent plus Project Charter only includes no-backend/no-server wording.
- Confirm Project Governance Agent plus Project Charter only does not include other governance outputs as generation targets.
- Confirm Workflow Agent plus Mini Workflow Brief includes no-backend/no-server wording.
- Confirm Workflow Agent plus Mini Workflow Brief includes the Mini Workflow Brief.
- Confirm Workflow Agent plus Mini Workflow Brief still obeys selected-output-only behavior.
- Confirm an imported governance session followed by Generate Controlled Prompt includes no-backend/no-server wording.
- Confirm selected-output-only behavior is unchanged after import and fresh prompt generation.
- Confirm no backend, database, Python, DOCX generation, Markdown-to-DOCX conversion, `package.json`, `server.js`, external libraries, localStorage implementation, file upload, file parsing, PDF extraction, DOCX extraction, generated client documents or alternate app folders are added.

## V1.13A Prompt Matrix Confirmation

- Confirm V1.13A rechecked the affected sample-session matrix rows.
- Confirm Proposal Agent plus Proposal only now passes without prompt-quality note.
- Confirm Governance Agent plus Project Charter only now passes without prompt-quality note.
- Confirm Governance Agent plus Project Charter and Risk Management Plan now passes without prompt-quality note.
- Confirm Review Agent plus Gap Analysis Report now passes without prompt-quality note.
- Confirm Workflow Agent plus Workflow Design Document using Mini Workflow Brief now passes without prompt-quality note.
- Confirm imported governance session plus fresh prompt generation now passes without prompt-quality note.
- Confirm generated prompts include no-backend/no-server wording.
- Confirm generated prompts include no Python, FastAPI, Flask, Node framework, database, DOCX generation or automatic document generation wording.
- Confirm generated prompts still say source documents are session-specific and must be uploaded/provided manually.
- Confirm selected-output-only behavior still passes.
- Confirm no unselected outputs are included.
- Confirm no app defects were found.
- Confirm no app files, agent JSON files, registry JSON files, templates or prompts were changed in V1.13A.
- Confirm no backend, database, Python, DOCX generation, Markdown-to-DOCX conversion, `package.json`, `server.js`, external libraries, localStorage implementation, file upload, file parsing, PDF extraction, DOCX extraction, generated client documents or alternate app folders are added.

## V1.14 GitHub Pages Live Verification

- Confirm `docs/architecture/V1_14_GITHUB_PAGES_LIVE_VERIFICATION.md` exists.
- Open `https://stefanvantonder-crypto.github.io/DMS_IMPLEMENTING_AGENT_2.0/`.
- Confirm the root URL resolves to `app/index.html`.
- Confirm the live app title and heading display `DMS Implementing Agent 2.0`.
- Confirm all four V1 agents display.
- Confirm Proposal Agent shows 1 output.
- Confirm Project Governance Agent shows 15 outputs.
- Confirm Document Review Agent shows 3 outputs.
- Confirm Workflow Agent shows 5 outputs.
- Confirm Project Charter maps to `PROJECT_CHARTER_TEMPLATE.md`.
- Confirm Risk Management Plan maps to `RISK_MANAGEMENT_PLAN_TEMPLATE.md`.
- Confirm Gap Analysis Report maps to `GAP_ANALYSIS_REPORT_TEMPLATE.md`.
- Confirm Workflow Design Document maps to `WORKFLOW_DESIGN_DOCUMENT_TEMPLATE.md`.
- Confirm Project Governance Agent plus Project Charter only generates a controlled prompt.
- Confirm the live prompt includes no-backend/no-server wording.
- Confirm the live prompt includes no-DOCX wording.
- Confirm the live prompt includes `To be confirmed`.
- Confirm the live prompt includes source inventory entries for Client TOR and Approved Proposal.
- Confirm the live prompt excludes unselected governance outputs.
- Confirm the Markdown session report download control is available.
- Confirm Session JSON export and import controls are available.
- Confirm any browser automation limitation for download capture or native file-picker import is recorded in the V1.14 verification report.
- Confirm the live app exposes no backend, server upload, DOCX generation, PDF/DOCX parsing, source file upload, database, `localStorage` or `sessionStorage` workflow.
- Confirm no app files, agent JSON files, registry JSON files, templates or prompts were changed in V1.14 live verification.
- Confirm no backend, database, Python, DOCX generation, Markdown-to-DOCX conversion, `package.json`, `server.js`, external libraries, localStorage implementation, file upload, file parsing, PDF extraction, DOCX extraction, generated client documents or alternate app folders are added.

## V1.15B Validation Findings Review

- Confirm `docs/sample_sessions/V1_15B_VALIDATION_FINDINGS_REVIEW.md` exists.
- Confirm the review references `docs/sample_sessions/V1_15A_CONTROLLED_PROMPT_QUALITY_VALIDATION.md` as the validation source reviewed.
- Confirm selected-output-only control, source document inventory treatment, no-backend/no-server wording, no-DOCX wording, missing information rule, template path inclusion, output folder inclusion, agent-specific instruction quality, sample session usefulness and remaining prompt-quality risks are reviewed.
- Confirm the findings table includes Finding ID, Area, Observation, Risk, Recommendation, Requires code change, Requires prompt wording change and Priority.
- Confirm the decision records whether no action, V1.15C prompt wording fix or V1.16 user acceptance test pack is recommended.
- Confirm no implementation changes were made in V1.15B.
- Confirm no app files, agent JSON files, registry JSON files, templates or prompts were changed in V1.15B.
- Confirm no backend, database, Python, DOCX generation, Markdown-to-DOCX conversion, `package.json`, `server.js`, external libraries, localStorage implementation, file upload, file parsing, generated client documents or alternate app folders are added.

## V1.16 User Acceptance Test Pack

- Confirm `docs/uat/V1_16_USER_ACCEPTANCE_TEST_PLAN.md` exists.
- Confirm `docs/uat/V1_16_UAT_TEST_SCRIPTS.md` exists.
- Confirm `docs/uat/V1_16_UAT_RESULTS_REGISTER.md` exists.
- Confirm `docs/uat/V1_16_UAT_SIGN_OFF_TEMPLATE.md` exists.
- Confirm the UAT plan includes purpose, scope, out of scope, test environment, test roles, entry criteria, exit criteria, test data approach, defect logging approach, pass/fail rules, V1 scope controls and acceptance criteria.
- Confirm the UAT scripts cover App Load and Navigation, Proposal Preparation Agent, Project Governance Agent, Document Review Agent, Workflow Agent, Validation Warnings, Session Save/Restore and Scope Control.
- Confirm UAT scripts cover all four approved V1 agents.
- Confirm UAT scripts cover selected-output-only behavior.
- Confirm UAT scripts cover session JSON export/import.
- Confirm UAT scripts cover Markdown session report download.
- Confirm UAT scripts cover no-backend, no-DOCX, no file upload/parsing and no automatic client deliverable generation scope controls.
- Confirm the results register includes severity levels: Critical, High, Medium and Low.
- Confirm the sign-off template includes Accepted, Accepted with minor issues and Not accepted decisions.
- Confirm no app files, agent JSON files, registry JSON files, templates or prompts were changed in V1.16 UAT pack creation.
- Confirm no backend, database, Python, DOCX generation, Markdown-to-DOCX conversion, `package.json`, `server.js`, external libraries, localStorage implementation, file upload, file parsing, generated client documents or alternate app folders are added.

## V1.16A UAT Execution

- Confirm `docs/uat/V1_16A_UAT_EXECUTION_REPORT.md` exists.
- Confirm the V1.16A report records test date, tester, environment, local app result, GitHub Pages result, summary counts, defect summary, UAT conclusion and recommendation.
- Confirm the V1.16 UAT results register records executed results for V1.16-UAT-01 through V1.16-UAT-13.
- Confirm passed tests include GitHub Pages load, four approved agents, 15 governance outputs, selected-output-only prompt checks, review prompt quality, validation warnings and scope-control checks.
- Confirm blocked tests are clearly marked where local `file://` execution or browser download/import capture could not be completed.
- Confirm blocked execution-tool limitations are not recorded as app defects.
- Confirm no app files, agent JSON files, registry JSON files, templates or prompts were changed in V1.16A.
- Confirm no backend, database, Python, DOCX generation, Markdown-to-DOCX conversion, `package.json`, `server.js`, external libraries, localStorage implementation, file upload, file parsing, generated client documents or alternate app folders are added.

## V1.16B Blocker Resolution

- Confirm `docs/uat/V1_16B_BLOCKER_RESOLUTION_REPORT.md` exists.
- Confirm the V1.16B report states that manual browser testing was not performed.
- Confirm the five V1.16A blocked items are resolved only through deterministic static harness evidence.
- Confirm the static harness evidence covers local static file readiness, `app/script.js` syntax validation, `app/config.json` parsing, static shell markers and registry-rendered agent labels.
- Confirm the static harness evidence covers real session report generation, filename sanitisation, Project Charter-only selected-output report content and browser Blob/download mechanism.
- Confirm the static harness evidence covers real Session JSON export structure, `selected_output_ids` containing `project_charter` only, selected output detail for `PROJECT_CHARTER_TEMPLATE.md` and export notice.
- Confirm the static harness evidence covers real Session JSON import/restore behavior, including Project Governance Agent, Project Charter only, source inventory metadata, historical prompt prefix and no automatic fresh prompt generation.
- Confirm the static harness evidence covers fresh prompt generation after import, including Project Charter only, no-backend/no-server wording, no-DOCX wording, `To be confirmed` and Project Charter template path.
- Confirm the V1.16 results register changes the five formerly blocked rows to `Passed by static harness evidence` only where evidence exists.
- Confirm the V1.16A execution report records 8 originally passed, 5 resolved by static harness evidence, 0 failed and 0 remaining blocked.
- Confirm no manual browser pass is claimed.
- Confirm no app files, agent JSON files, registry JSON files, templates or prompts were changed in V1.16B.
- Confirm no backend, database, Python, DOCX generation, Markdown-to-DOCX conversion, `package.json`, `server.js`, external libraries, localStorage implementation, file upload, file parsing, generated client documents, permanent test harness files or alternate app folders are added.

## V1.17 Release Readiness Documentation

- Confirm `docs/release/V1_17_RELEASE_READINESS_CERTIFICATE.md` exists.
- Confirm `docs/release/V1_RELEASE_SCOPE_STATEMENT.md` exists.
- Confirm `docs/release/V1_KNOWN_LIMITATIONS.md` exists.
- Confirm `docs/release/V1_RELEASE_CHECKLIST.md` exists.
- Confirm the release readiness certificate states release status as ready for controlled use.
- Confirm the release scope statement explains what V1 does, what V1 does not do and how users should use V1.
- Confirm the known limitations document lists no backend, no DOCX generation, no PDF/DOCX extraction, no source document upload, no permanent storage, no `localStorage`, no AI API integration and no automatic client deliverables.
- Confirm the release checklist includes repository clean, latest changes pushed, release tag created, GitHub Pages status checked, user guide, quick start guide, UAT pack, UAT blocker resolution, no forbidden architecture, known limitations and release certificate completion checks.
- Confirm README links to all four release documents.
- Confirm the release documentation does not claim backend, DOCX generation, file parsing, AI API integration, database persistence or automatic client deliverable capability.
- Confirm no app files, agent JSON files, registry JSON files, templates or prompts were changed in V1.17.
- Confirm no backend, database, Python, DOCX generation, Markdown-to-DOCX conversion, `package.json`, `server.js`, external libraries, localStorage implementation, file upload, file parsing, generated client documents or alternate app folders are added.

## V1.18 Live GitHub Pages Run Confirmation

- Confirm `docs/release/V1_18_LIVE_RUN_CONFIRMATION.md` exists.
- Confirm the V1.18 report records repository URL, expected GitHub Pages URL, browser/environment, date tested and tester field.
- Confirm the live URL check records the opened URL, final URL, result and notes.
- Confirm the app load check covers root redirect, `app/index.html`, title and four-agent display.
- Confirm the practical run uses Project Governance Agent and Project Charter only.
- Confirm the generated prompt checks include Project Charter only, `PROJECT_CHARTER_TEMPLATE.md`, selected-output-only rule, no-backend/no-server rule, no-DOCX rule, `To be confirmed` and source document inventory.
- Confirm session report download, Session JSON export, Session JSON import and fresh prompt after import are not falsely marked complete if the browser environment blocks downloads.
- Confirm the V1.18 result table records pass, blocked or fail status for each live run check.
- Confirm the GitHub Pages deployment document includes a V1.18 live run status note.
- Confirm the release checklist includes V1.18 live run confirmation status.
- Confirm no app files, agent JSON files, registry JSON files, templates or prompts were changed in V1.18.
- Confirm no backend, database, Python, DOCX generation, Markdown-to-DOCX conversion, `package.json`, `server.js`, external libraries, localStorage implementation, file upload, file parsing, generated client documents or alternate app folders are added.

## V1.19 Real Sample Project Run

- Confirm `docs/sample_sessions/V1_19_REAL_SAMPLE_PROJECT_RUN.md` exists.
- Confirm `docs/sample_sessions/V1_19_REAL_SAMPLE_PROJECT_PROMPT_CAPTURE.md` exists.
- Confirm `docs/sample_sessions/V1_19_REAL_SAMPLE_PROJECT_OBSERVATIONS.md` exists.
- Confirm the sample scenario uses FSGLTA Automated Asset Management System Sample Run as validation context only.
- Confirm the selected agent is Project Governance Agent.
- Confirm selected outputs are Project Charter, Risk Management Plan and Test and Go-Live Plan.
- Confirm the source inventory examples include Client TOR, Approved proposal, DMS system documentation and DMS architecture documentation.
- Confirm the run records selected-output-only behavior and excludes unselected governance outputs.
- Confirm template paths and output folders are recorded for the selected outputs.
- Confirm no-backend/no-server wording, no-DOCX wording and the `To be confirmed` missing-information rule are checked.
- Confirm the documents state actual source documents must be uploaded/provided manually to ChatGPT/Codex.
- Confirm the documents do not claim source documents were parsed or processed by the app.
- Confirm the documents do not claim final client deliverables were generated.
- Confirm no app files, agent JSON files, registry JSON files, templates or prompts were changed in V1.19.
- Confirm no backend, database, Python, DOCX generation, Markdown-to-DOCX conversion, `package.json`, `server.js`, external libraries, localStorage implementation, file upload, file parsing, generated client documents or alternate app folders are added.

## V1.19A Actual Generated Prompt Evidence Capture

- Confirm `docs/sample_sessions/V1_19_REAL_SAMPLE_PROJECT_PROMPT_CAPTURE.md` records evidence status as either `Captured` or `Pending actual prompt paste`.
- Confirm the V1.19A prompt capture document does not fabricate prompt text.
- Confirm actual prompt text is included only if it was captured from the app or provided by the user.
- Confirm the evidence review checklist covers session details, selected agent, source inventory, selected outputs only, selected template paths, output folder, no-backend/no-server wording, no-DOCX wording, manual upload instruction, `To be confirmed`, Markdown-first rule, no source-document processing claim and no final client-deliverable claim.
- Confirm the V1.19 run document includes a short V1.19A evidence cross-reference note.
- Confirm the V1.19 observations document states whether actual prompt evidence is captured or pending.
- Confirm no app files, agent JSON files, registry JSON files, templates or prompts were changed in V1.19A.
- Confirm no backend, database, Python, DOCX generation, Markdown-to-DOCX conversion, `package.json`, `server.js`, external libraries, localStorage implementation, file upload, file parsing, generated client documents or alternate app folders are added.

## V1.19B Actual Source Document Execution Review

- Confirm `docs/sample_sessions/V1_19B_SOURCE_DOCUMENT_UPLOAD_INSTRUCTIONS.md` exists.
- Confirm `docs/sample_sessions/V1_19B_OUTPUT_REVIEW_CHECKLIST.md` exists.
- Confirm `docs/sample_sessions/V1_19B_ACTUAL_SOURCE_DOCUMENT_EXECUTION_REVIEW.md` exists.
- Confirm the upload instructions list the four expected source documents and the recommended upload order.
- Confirm the upload instructions require manual document upload to ChatGPT/Codex and use of the captured V1.19A prompt afterward.
- Confirm the upload instructions warn against uploading unrelated documents.
- Confirm the output review checklist covers general output checks, Project Charter checks, Risk Management Plan checks, Test and Go-Live Plan checks, evidence quality checks and a result section.
- Confirm the execution review document references `docs/sample_sessions/V1_19_REAL_SAMPLE_PROJECT_PROMPT_CAPTURE.md`.
- Confirm the execution review document keeps execution status pending unless actual results are supplied.
- Confirm the V1.19 observations document includes the V1.19B preparation note.
- Confirm no official output documents were created in `outputs/`.
- Confirm no app files, agent JSON files, registry JSON files, templates or prompts were changed in V1.19B.
- Confirm no backend, database, Python, DOCX generation, Markdown-to-DOCX conversion, `package.json`, `server.js`, external libraries, localStorage implementation, file upload, file parsing, generated client documents or alternate app folders are added.

## V1.19C Actual Source Document Execution Results

- Confirm `docs/sample_sessions/V1_19C_EXECUTION_RESULTS_SUMMARY.md` exists.
- Confirm the V1.19B execution review document records `Execution status: Executed`.
- Confirm the V1.19B execution review document records a pass result and notes that the result is based on user review, not formal client approval.
- Confirm the V1.19B output review checklist records pass results and notes that user-reviewed output quality was excellent with no major issues recorded.
- Confirm the V1.19C summary records manual source upload, captured prompt use and Markdown-first output generation.
- Confirm the V1.19C summary records the user review statement: `The Markdown files look excellent.`
- Confirm the V1.19C summary records no issues found and `V1.19C passed`.
- Confirm the V1.19 observations document includes the V1.19C outcome note.
- Confirm no app files, agent JSON files, registry JSON files, templates or prompts were changed in V1.19C.
- Confirm no backend, database, Python, DOCX generation, Markdown-to-DOCX conversion, `package.json`, `server.js`, external libraries, localStorage implementation, file upload, file parsing, generated client documents or alternate app folders were added.
- Confirm no formal client approval is claimed.
