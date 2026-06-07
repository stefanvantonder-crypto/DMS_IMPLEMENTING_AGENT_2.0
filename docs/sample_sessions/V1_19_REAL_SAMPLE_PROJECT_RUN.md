# V1.19 Real Sample Project Run

## 1. Purpose

Document a realistic, non-confidential sample project session through the released V1 static app and record prompt-control evidence.

This is validation documentation only. No app functionality, agent logic, registry logic, template files, prompts, backend behavior or selected-output-only logic was changed. No final client deliverables were generated.

## 2. Scenario Metadata

| Field | Value |
|---|---|
| Session name | FSGLTA Automated Asset Management System Sample Run |
| Client name | Free State Gambling, Liquor and Tourism Authority |
| Project name | Automated Asset Management System |
| Contract / Bid number | Bid No. 2603/05 |
| Prepared by | [Prepared by] |
| Scenario type | Sample-session validation context only |
| Date tested | 2026-06-07 |
| Environment | Live GitHub Pages static app in Codex in-app browser |
| Live URL | `https://stefanvantonder-crypto.github.io/DMS_IMPLEMENTING_AGENT_2.0/app/index.html` |

## 3. Selected Agent

- Selected agent: Project Governance Agent.
- Agent ID observed in generated prompt: `project_governance_agent`.
- Agent prompt file observed in generated prompt: `prompts/generation_prompt.md`.
- Agent default output folder observed in generated prompt: `outputs/markdown/governance_documents`.

## 4. Source Document Inventory

These records were entered as session-specific source document inventory examples only. The app did not parse, read or process the actual source documents.

| # | Document name | Classification | Type | Available for upload | Notes |
|---|---|---|---|---|---|
| 1 | TOR Invitation for Proposal - Automated Asset Management System | Client TOR | TOR | Yes | Main client request / specification document. |
| 2 | Approved Proposal - Automated Asset Management System | Approved proposal | Approved Proposal | Yes | Approved implementation and commercial response. |
| 3 | DMS System Documentation | DMS system documentation | DMS User Manual | Yes | Used to describe DMS capabilities and modules. |
| 4 | DMS Architecture Documentation | DMS architecture documentation | DMS Architecture Document | Yes | Used to support implementation, integration and technical planning. |

## 5. Selected Outputs

The following Project Governance Agent outputs were selected:

- Project Charter.
- Risk Management Plan.
- Test and Go-Live Plan.

The generated prompt was checked for selected-output-only behavior. It did not include the other unselected governance outputs.

## 6. Test Execution Steps

1. Opened the live static app at `https://stefanvantonder-crypto.github.io/DMS_IMPLEMENTING_AGENT_2.0/app/index.html`.
2. Confirmed browser title displayed `DMS Implementing Agent 2.0`.
3. Entered session metadata for the FSGLTA Automated Asset Management System sample run.
4. Selected Project Governance Agent.
5. Added the four source document inventory examples listed above.
6. Selected the source document classifications: Approved proposal, Client TOR, DMS system documentation and DMS architecture documentation.
7. Selected Project Charter, Risk Management Plan and Test and Go-Live Plan.
8. Generated the controlled prompt.
9. Checked the prompt body for selected-output-only behavior, template paths, output folders, V1 scope-control wording and source inventory wording.

## 7. Expected Behaviour

- Prompt includes selected outputs only.
- Prompt does not include all 15 governance outputs.
- Prompt includes source document inventory.
- Prompt includes template paths for selected outputs.
- Prompt includes output folders.
- Prompt includes no-backend/no-server wording.
- Prompt includes no-DOCX wording.
- Prompt includes missing information rule: `To be confirmed`.
- Prompt instructs the user to upload actual source documents manually to ChatGPT/Codex.
- Prompt does not claim the app has processed the source documents.
- Prompt does not generate final client deliverables inside the app.

## 8. Actual Observed Behaviour

- Live app loaded at `https://stefanvantonder-crypto.github.io/DMS_IMPLEMENTING_AGENT_2.0/app/index.html`.
- Browser title was `DMS Implementing Agent 2.0`.
- Generated prompt length observed: 8701 characters.
- Generated prompt included session details for the sample project.
- Generated prompt included selected agent name and ID.
- Generated prompt included the four source document inventory entries.
- Generated prompt included only the selected outputs:
  - Project Charter.
  - Risk Management Plan.
  - Test and Go-Live Plan.
- Generated prompt included selected template paths:
  - `templates/project_governance_templates/PROJECT_CHARTER_TEMPLATE.md`.
  - `templates/project_governance_templates/RISK_MANAGEMENT_PLAN_TEMPLATE.md`.
  - `templates/project_governance_templates/TEST_AND_GO_LIVE_PLAN_TEMPLATE.md`.
- Generated prompt included output folder `outputs/markdown/governance_documents`.
- Generated prompt included no-backend/no-server wording.
- Generated prompt included no-DOCX wording.
- Generated prompt included `To be confirmed` for missing dates, references and session notes.
- Generated prompt instructed the user to upload/provide actual session documents manually to ChatGPT/Codex.
- Generated prompt did not claim the app had processed the source documents.
- Generated prompt did not include unselected governance output names during the observed check.

## 9. Pass/Fail Table

| Check ID | Area | Expected Result | Actual Result | Status | Notes |
|---|---|---|---|---|---|
| V1.19-RUN-01 | App load | Static app loads from live GitHub Pages URL. | Live app loaded at `/app/index.html`. | Pass | Browser title was `DMS Implementing Agent 2.0`. |
| V1.19-RUN-02 | Scenario metadata | Sample session metadata can be entered. | Session name, client, project, bid number and prepared-by fields were entered. | Pass | Prepared-by remained `[Prepared by]`. |
| V1.19-RUN-03 | Agent selection | Project Governance Agent can be selected. | Project Governance Agent selected and visible in generated prompt. | Pass | Agent ID: `project_governance_agent`. |
| V1.19-RUN-04 | Source inventory | Four source inventory records can be added. | Source inventory count showed 4 and prompt included the records. | Pass | Records are metadata only; no parsing occurred. |
| V1.19-RUN-05 | Output selection | Three selected outputs can be selected. | Project Charter, Risk Management Plan and Test and Go-Live Plan were selected. | Pass | No other governance outputs selected. |
| V1.19-RUN-06 | Selected-output-only prompt | Prompt includes selected outputs only. | Prompt included the three selected outputs and no unselected governance output names in the observed check. | Pass | Checked against the remaining 12 governance output names. |
| V1.19-RUN-07 | Template paths | Prompt includes selected template paths. | All three selected template paths were present. | Pass | Paths listed in Section 8. |
| V1.19-RUN-08 | Output folders | Prompt includes output folder. | `outputs/markdown/governance_documents` was present. | Pass | Static Markdown output folder only. |
| V1.19-RUN-09 | Scope wording | Prompt includes no-backend/no-server and no-DOCX wording. | Both scope-control checks passed. | Pass | No backend or DOCX capability was claimed. |
| V1.19-RUN-10 | Missing information | Missing information is marked `To be confirmed`. | Prompt used `To be confirmed` for missing dates, references and session notes. | Pass | No assumptions substituted. |
| V1.19-RUN-11 | Manual upload instruction | Prompt instructs manual upload/provision of source documents. | Prompt stated that the user must upload/provide actual session documents to ChatGPT/Codex. | Pass | Confirms the app does not process files. |
| V1.19-RUN-12 | No client deliverables | App does not generate final client deliverables. | Generated a controlled prompt only. | Pass | No final client document was created. |

## 10. Issues Found

No issues recorded.

Observation: As in V1.18, browser download/import checks were not part of this V1.19 sample prompt run. The purpose of this run was prompt-control evidence for a realistic sample project, not download/import evidence.

## 11. Scope Confirmation

This V1.19 sample run did not introduce or claim:

- Backend generation.
- Server-side generation.
- Python.
- Node framework.
- DOCX generation.
- DOCX template population.
- Database persistence.
- `localStorage` persistence.
- External libraries.
- File upload/parsing.
- PDF/DOCX extraction.
- Automatic client deliverable generation.
- Final client deliverables inside the app.

The source document details are sample-session context only and do not indicate that the app read, parsed or processed actual source files.

## 12. Conclusion

V1.19 passed for the realistic sample Project Governance Agent prompt run.

The generated prompt is ready to be used as a controlled prompt with manually uploaded/provided source documents in ChatGPT/Codex, subject to normal human review and confirmation of project facts.

