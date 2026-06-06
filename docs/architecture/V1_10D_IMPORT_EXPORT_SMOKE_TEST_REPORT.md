# V1.10D Import / Export Smoke Test Report

## 1. Test Date

- Date: 2026-06-06
- Workspace: `C:\DMS_IMPLEMENTING_AGENT_RECOVERY_BASELINE`
- Baseline tested: V1.10D static Markdown-first save/restore hardening

## 2. Scope Tested

This smoke test covered the static browser session JSON export/import loop:

- Project Governance Agent export with Project Charter only.
- Project Governance Agent import restore.
- Fresh controlled prompt generation after import.
- Workflow Agent export/import with Mini Workflow Brief.
- Invalid and unsafe import cases.
- Static V1 scope controls.

The app remains a static HTML/CSS/JavaScript/JSON/Markdown system. No backend, server file, Python, package manager, localStorage, database, file parsing, PDF extraction, DOCX extraction or generated client document workflow was introduced.

## 3. Files Inspected

- `app/index.html`
- `app/script.js`
- `app/style.css`
- `app/config.json`
- `app/session-export-core.js`
- `engine/agent_registry.json`
- `engine/output_registry.json`
- `engine/template_manifest.json`
- `knowledge_base/agents/project_governance_agent.json`
- `knowledge_base/agents/workflow_agent.json`
- `TEST_CASES.md`
- `CHANGELOG.md`

## 4. Pass / Fail Table

| Test Area | Result | Evidence |
|---|---:|---|
| Project Governance export | Pass | Exported schema `1.0`, app version `1.10D`, session, selected agent, source inventory, selected output IDs, selected output details, controlled prompt and export notice. |
| Project Governance import | Pass | Restored Project Governance Agent, Project Charter only, two source inventory entries and imported historical prompt prefix. |
| Fresh prompt after import | Pass | Fresh prompt replaced historical prompt prefix and retained selected-output-only Project Charter selection. |
| Workflow export/import | Pass | Restored Workflow Agent, Mini Workflow Brief fields and Workflow Design Document only. |
| Invalid import validation | Pass | Invalid payload, missing schema and unsupported schema were rejected before state mutation. |
| Registry conflict import | Pass | Unknown agent warned and was not selected; obsolete output, wrong-agent output and invalid classification were ignored with warnings. |
| Security/scope import | Pass | Imported text remained text, source file content was not restored, and the import/restore block contains no storage, network upload or execution markers. |
| In-app browser navigation | Limited | The in-app browser blocked both `file://` and temporary localhost smoke URLs by policy, so DOM/browser interaction was verified through a static script harness instead. |

## 5. Defects Found

One export hardening defect was found:

- The V1.10C export payload did not include `selected_output_details` or `export_notice`, both required by the V1.10D smoke checklist.

No selected-output-only restore defect was found.

## 6. Fixes Made

- Added `export_notice` to the session JSON payload.
- Added `outputs.selected_output_details` to the session JSON payload using existing selected output registry and template manifest metadata.
- Updated static version metadata from V1.10C to V1.10D in the UI/config fallback path.
- Updated V1.10D manual smoke checklist and changelog.

## 7. Remaining Limitations

- The in-app browser could not open `file://` or localhost test URLs because of browser security policy/client blocking in this environment.
- Manual browser testing should still be performed by opening `app/index.html` directly in a normal browser and running the file picker export/import workflow.
- Session JSON still stores prompt text and typed notes if the user chooses to include them. Users should avoid typing confidential source content into notes or prompt text unless they intend it to be saved in the JSON.
- Source document inventory restores metadata only. Actual source documents must still be re-uploaded/provided with the prompt.

## 8. Go / No-Go Recommendation

Recommendation: Go for freezing the V1.10 save/restore baseline after one manual browser file-picker confirmation.

The static script smoke passed for the complete V1.10D export/import loop, selected-output-only behavior remained intact, and the only confirmed defect was fixed within approved V1 files.
