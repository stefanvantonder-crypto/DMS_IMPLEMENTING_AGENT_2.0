# V1.16 UAT Results Register

Use this register to record execution results from `docs/uat/V1_16_UAT_TEST_SCRIPTS.md`.

## Severity Levels

| Severity | Meaning |
|---|---|
| Critical | Test cannot continue, V1 scope control is broken, or selected-output-only behavior fails in a way that could generate incorrect deliverables. |
| High | Major user workflow fails, session export/import fails, or a prompt contains materially wrong selected-output behavior. |
| Medium | Prompt/report wording, validation warning, template reference or source inventory behavior is unclear but the main workflow can continue. |
| Low | Minor usability, wording, formatting or documentation issue that does not block UAT. |

## Results Register

| Test ID | Test Area | Tester | Test Date | Result | Defect ID | Severity | Notes | Retest Result |
|---|---|---|---|---|---|---|---|---|
| V1.16-UAT-01 | App Load and Navigation | Codex | 2026-06-06 | Blocked | None | None | Local `file://` browser execution was blocked by Codex in-app browser policy. Static `app/index.html` file and no-server structure were confirmed by repository inspection only. | Not executed |
| V1.16-UAT-02 | App Load and Navigation | Codex | 2026-06-06 | Pass | None | None | GitHub Pages resolved to `/app/index.html`; title was `DMS Implementing Agent 2.0`; interface was visible. | Not required |
| V1.16-UAT-03 | App Load and Navigation | Codex | 2026-06-06 | Pass | None | None | Exact controls displayed for Proposal Preparation Agent, Project Governance Agent, Document Review Agent and Workflow Agent. | Not required |
| V1.16-UAT-04 | Proposal Preparation Agent | Codex | 2026-06-06 | Blocked | None | None | Prompt checks passed: Proposal only, proposal template path visible, unselected governance outputs excluded, missing/unavailable information marked `To be confirmed`. JSON/report download file capture was not completed by browser automation. | Not executed |
| V1.16-UAT-05 | Project Governance Agent | Codex | 2026-06-06 | Pass | None | None | Project Governance Agent displayed 15 enabled output options. | Not required |
| V1.16-UAT-06 | Project Governance Agent | Codex | 2026-06-06 | Pass | None | None | Project Charter only appeared in selected outputs; mapped template path visible; unselected Proposal, Risk Management Plan, Gap Analysis Report and Workflow Design Document excluded as selected outputs. | Not required |
| V1.16-UAT-07 | Project Governance Agent | Codex | 2026-06-06 | Pass | None | None | Project Charter and Risk Management Plan appeared as the only selected outputs; both mapped Markdown template paths were visible. | Not required |
| V1.16-UAT-08 | Project Governance Agent | Codex | 2026-06-06 | Blocked | None | None | Governance setup and export action were exercised, but browser automation did not capture an exported JSON file for import verification. | Not executed |
| V1.16-UAT-09 | Document Review Agent | Codex | 2026-06-06 | Pass | None | None | Gap Analysis Report prompt was review-specific and included gaps, compliance, audit readiness, evidence quality and framework alignment wording. | Not required |
| V1.16-UAT-10 | Workflow Agent | Codex | 2026-06-06 | Blocked | None | None | Workflow prompt checks passed: Mini Workflow Brief appeared, Workflow Design Document only, mapped template path visible. Export/import verification was blocked by download capture limitation. | Not executed |
| V1.16-UAT-11 | Validation Warnings | Codex | 2026-06-06 | Pass | None | None | Warnings appeared for no agent, no output, missing required proposal sources, unavailable required source document and workflow missing process/brief context. | Not required |
| V1.16-UAT-12 | Session Save/Restore | Codex | 2026-06-06 | Blocked | None | None | Save/restore could not be completed because browser automation did not capture the exported JSON file required for import. | Not executed |
| V1.16-UAT-13 | Scope Control | Codex | 2026-06-06 | Pass | None | None | No UI function observed for backend generation, DOCX generation, PDF/DOCX extraction, file parsing or automatic client deliverable generation. Controls remained prompt generation, Session JSON import/export and Markdown session report download. | Not required |

## Result Values

Use these values in the Result and Retest Result columns:

- Pass.
- Fail.
- Blocked.
- Not executed.

## Defect ID Format

Use this format when logging defects:

```text
V1.16-DEF-[number]
```

Example:

```text
V1.16-DEF-001
```
