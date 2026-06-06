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
| V1.16-UAT-01 | App Load and Navigation | To be confirmed | To be confirmed | To be confirmed | To be confirmed | To be confirmed | Local static app load. | To be confirmed |
| V1.16-UAT-02 | App Load and Navigation | To be confirmed | To be confirmed | To be confirmed | To be confirmed | To be confirmed | GitHub Pages app load if available. | To be confirmed |
| V1.16-UAT-03 | App Load and Navigation | To be confirmed | To be confirmed | To be confirmed | To be confirmed | To be confirmed | Four approved agents display. | To be confirmed |
| V1.16-UAT-04 | Proposal Preparation Agent | To be confirmed | To be confirmed | To be confirmed | To be confirmed | To be confirmed | Proposal only, session JSON export and session report. | To be confirmed |
| V1.16-UAT-05 | Project Governance Agent | To be confirmed | To be confirmed | To be confirmed | To be confirmed | To be confirmed | Confirm 15 governance outputs. | To be confirmed |
| V1.16-UAT-06 | Project Governance Agent | To be confirmed | To be confirmed | To be confirmed | To be confirmed | To be confirmed | Project Charter only. | To be confirmed |
| V1.16-UAT-07 | Project Governance Agent | To be confirmed | To be confirmed | To be confirmed | To be confirmed | To be confirmed | Project Charter plus Risk Management Plan only. | To be confirmed |
| V1.16-UAT-08 | Project Governance Agent | To be confirmed | To be confirmed | To be confirmed | To be confirmed | To be confirmed | Governance session JSON export/import. | To be confirmed |
| V1.16-UAT-09 | Document Review Agent | To be confirmed | To be confirmed | To be confirmed | To be confirmed | To be confirmed | Gap Analysis Report review-specific prompt. | To be confirmed |
| V1.16-UAT-10 | Workflow Agent | To be confirmed | To be confirmed | To be confirmed | To be confirmed | To be confirmed | Mini Workflow Brief, Workflow Design Document and export/import. | To be confirmed |
| V1.16-UAT-11 | Validation Warnings | To be confirmed | To be confirmed | To be confirmed | To be confirmed | To be confirmed | Missing agent, output, sources and workflow context. | To be confirmed |
| V1.16-UAT-12 | Session Save/Restore | To be confirmed | To be confirmed | To be confirmed | To be confirmed | To be confirmed | Session JSON restore and manual fresh prompt generation. | To be confirmed |
| V1.16-UAT-13 | Scope Control | To be confirmed | To be confirmed | To be confirmed | To be confirmed | To be confirmed | No backend, DOCX, upload, parsing or automatic deliverable functions. | To be confirmed |

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
