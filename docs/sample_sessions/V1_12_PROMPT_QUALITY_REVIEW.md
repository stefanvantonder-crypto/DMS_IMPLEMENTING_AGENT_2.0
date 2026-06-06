# V1.12 Prompt Quality Review

## Purpose

This review supports V1.12 prompt-quality testing for the static DMS Implementing Agent V1 app.

The goal is to confirm that controlled prompts are clear, complete, selected-output-only and suitable for use in ChatGPT/Codex with manually uploaded project/session documents.

This review does not approve backend work, DOCX generation, file parsing, template changes, agent JSON changes or prompt-file changes. Any prompt-fix work must be approved as a separate phase.

## Review Criteria

Use the criteria below for each generated controlled prompt.

| Criterion | What To Check |
|---|---|
| Selected-output-only enforcement | The prompt requests only the outputs selected in the UI. |
| Agent context accuracy | The selected agent ID, name, purpose, prompt file and template group match the selected agent. |
| Source document session specificity | The prompt uses the current session source inventory and reminds the user to upload/provide actual documents manually. |
| Missing information handling | Unknown facts are marked `To be confirmed`. |
| No invented facts | The prompt tells ChatGPT/Codex not to invent dates, prices, certifications, references, approvals or compliance evidence. |
| Template path inclusion | Each selected output includes its relevant Markdown template path where available. |
| Output folder inclusion | Each selected output includes its suggested output folder. |
| Quality rules inclusion | Output-specific quality rules appear where available. |
| Fallback configuration warning | If fallback mode is active, the prompt/report warns that repository JSON was not loaded. |
| Source document inventory inclusion | The prompt includes the session source document inventory or the empty-inventory notice. |
| Import/export session handling | Imported historical prompt state is replaced only when the user clicks Generate Controlled Prompt. |
| V1 scope notice | The prompt keeps V1 no-DOCX, no-backend and Markdown-first scope clear. |

## Prompt Quality Scoring Table

| Rating | Meaning | Action |
|---|---|---|
| Pass | The prompt satisfies the criterion clearly. | No change needed. |
| Minor issue | The prompt is usable but could be clearer. | Record for a later prompt-polish phase. |
| Major issue | The prompt may cause wrong or extra output. | Do not freeze the prompt quality baseline until reviewed. |
| Fail | The prompt violates V1 scope or selected-output-only rules. | Stop and raise a separate approved fix task. |

## Agent Review Checklist

### Proposal Preparation Agent

- Confirm Proposal only is generated when Proposal only is selected.
- Confirm no governance, review or workflow outputs are requested.
- Confirm missing pricing/evidence is marked `To be confirmed`.
- Confirm no invented references, certifications, prices or accreditations are allowed.
- Confirm formal public-sector consulting language is requested.
- Confirm actual source documents must be manually uploaded/provided.

### Project Governance Agent

- Confirm selected governance outputs only are requested.
- Confirm Proposal is not requested.
- Confirm review outputs are not requested unless selected under Document Review Agent.
- Confirm workflow outputs are not requested unless selected under Workflow Agent.
- Confirm roles, responsibilities, risks, assumptions, dependencies, deliverables and sign-off are included where relevant.
- Confirm missing governance facts are marked `To be confirmed`.

### Document Review Agent

- Confirm selected review outputs only are requested.
- Confirm findings include gap, impact, risk, recommendation and required evidence where relevant.
- Confirm severity levels are requested where appropriate.
- Confirm unsupported compliance findings are not invented.
- Confirm missing review basis is handled through core review rules and `To be confirmed`.
- Confirm non-review outputs are not requested.

### Workflow Agent

- Confirm selected workflow outputs only are requested.
- Confirm workflow steps, roles, decision points, statuses, SLA/escalation rules, notifications and InTouch notes are requested where relevant.
- Confirm the Mini Workflow Brief is used when no SOP/process source is loaded.
- Confirm missing workflow rules are marked `To be confirmed`.
- Confirm non-workflow outputs are not requested.

## Known V1 Limitations

- Actual project/source documents are uploaded manually to ChatGPT/Codex.
- The app does not upload, parse, extract or store source files.
- The app does not parse PDF or DOCX files.
- The app does not generate DOCX files.
- The app does not create final client deliverables.
- The app does not use a backend, server, database, localStorage or external libraries.
- Session JSON stores metadata and prompt text only.

## Recommendations For Future Prompt Improvement

- Add a later approved prompt-polish phase if manual tests identify repeated unclear wording.
- Keep selected-output-only language near every output list.
- Keep source document upload reminders visible in prompt and session report text.
- Keep template path and output folder references in generated prompts.
- Add examples only as documentation samples, not as hidden assumptions in prompts.
- Do not edit prompt files, agent JSON, registries or templates without a separate approved fix phase.
