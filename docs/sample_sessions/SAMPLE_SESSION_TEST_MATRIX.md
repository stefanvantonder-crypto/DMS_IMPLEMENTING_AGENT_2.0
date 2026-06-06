# V1.12 Sample Session Test Matrix

Use this matrix to test controlled prompt quality across all four V1 agents.

| Test ID | Agent | Source Document Inventory | Selected Outputs | Expected Prompt Contents | Must Not Include | Pass/Fail |
|---|---|---|---|---|---|---|
| V1.12-01 | Proposal Preparation Agent | Client TOR / RFQ / RFP; Bid specification; Previous proposal example; Company profile; DMS user manual; DMS architecture document; Pricing schedule; Reference letters | Proposal only | Proposal instructions; proposal template path; proposal output folder; missing pricing/evidence as `To be confirmed`; no invented references/certifications | Project Charter; Risk Management Plan; Gap Analysis Report; Workflow Design Document; unselected outputs | [Pass/Fail] |
| V1.12-02 | Project Governance Agent | Approved proposal; Client TOR; DMS system documentation; DMS architecture documentation; Client implementation requirements | Project Charter only | Project Charter only; governance context; roles; assumptions; sign-off; template path; output folder | Proposal; Risk Management Plan; Test and Go-Live Plan; review outputs; workflow outputs | [Pass/Fail] |
| V1.12-03 | Project Governance Agent | Approved proposal; Client TOR; Client implementation requirements; Client policies and procedures | Project Charter; Risk Management Plan | Project Charter and Risk Management Plan only; governance risks; assumptions; dependencies; quality controls | Proposal; Test and Go-Live Plan; Gap Analysis Report; Workflow Design Document | [Pass/Fail] |
| V1.12-04 | Project Governance Agent | Approved proposal; Client TOR; DMS system documentation; Client implementation requirements | Test and Go-Live Plan | Test and Go-Live Plan only; test stages; go-live readiness; roles; risks; sign-off | Project Charter; Proposal; review outputs; workflow outputs | [Pass/Fail] |
| V1.12-05 | Document Review Agent | Document to be reviewed; PFMA / MFMA; Client policies and procedures; Ad hoc review requirements | Gap Analysis Report | Gap Analysis Report only; gap, impact, risk, recommendation and required evidence; severity levels | Proposal; Project Charter; Improvement Action Plan; Workflow Design Document | [Pass/Fail] |
| V1.12-06 | Document Review Agent | Document to be reviewed; GRAP standards; ISO 9001; Client policies and procedures | Gap Analysis Report; Improvement Action Plan | Both selected review outputs only; severity levels; improvement actions; required evidence | Proposal; governance outputs; workflow outputs; invented compliance findings | [Pass/Fail] |
| V1.12-07 | Workflow Agent | SOP; Client policy; Compliance requirements | Workflow Design Document | Workflow Design Document only; workflow stages; roles; decisions; statuses; SLA/escalation; notifications; InTouch notes | Workflow Steps; Roles and Responsibilities Matrix; Proposal; governance outputs; review outputs | [Pass/Fail] |
| V1.12-08 | Workflow Agent | Mini Workflow Brief only | Workflow Design Document | Workflow Design Document only; Mini Workflow Brief content; missing process details as `To be confirmed` | SOP assumptions not supplied; extra workflow outputs; proposal/governance/review outputs | [Pass/Fail] |
| V1.12-09 | Workflow Agent | Business process description; User interview notes; Compliance requirements | Workflow Design Document; Workflow Steps; Roles and Responsibilities Matrix | Selected workflow outputs only; steps; roles; decisions; statuses; SLA/escalation; notifications; InTouch notes | SLA / Escalation Rules as separate output unless selected; InTouch Configuration Notes as separate output unless selected | [Pass/Fail] |
| V1.12-10 | Project Governance Agent import restore | Imported governance session JSON with Client TOR and Approved Proposal inventory | Project Charter only after restore | Imported historical prompt prefix first; fresh prompt after Generate Controlled Prompt; Project Charter only | Extra governance outputs; stale historical prefix after fresh generation | [Pass/Fail] |
| V1.12-11 | Workflow Agent export/import restore | Exported workflow session JSON with Mini Workflow Brief | Workflow Design Document | Mini Workflow Brief restored; Workflow Design Document only selected; fresh prompt can be regenerated | Workflow Steps unless selected; missing Mini Workflow Brief after import | [Pass/Fail] |

## Matrix Notes

- Use sample or placeholder document names only.
- Do not use real confidential client content in sample-session tests.
- Actual source documents must still be uploaded/provided manually to ChatGPT/Codex.
- Any prompt wording issue should be recorded in `docs/sample_sessions/V1_12_PROMPT_QUALITY_REVIEW.md` before a separate prompt-fix phase is proposed.
