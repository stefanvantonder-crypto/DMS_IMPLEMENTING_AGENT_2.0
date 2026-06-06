# Project Governance Sample Session

## Purpose

This sample session helps test whether the Project Governance Agent creates controlled prompts for selected governance outputs only.

Use this sample to check that governance prompts include roles, risks, assumptions, deliverables and sign-off where relevant, without generating proposal, review or workflow outputs.

## Sample Session Metadata

| Field | Sample Value |
|---|---|
| Session Name | Sample Project Governance Session |
| Client Name | [Client Name] |
| Project Name | [Project Name] |
| Contract / Bid Number | [To be confirmed] |
| Prepared By | [Prepared by] |

## Selected Agent

Project Governance Agent

## Source Document Inventory Examples

| Document Name | Classification | Document Type | Available For Upload | Notes |
|---|---|---|---|---|
| [Approved proposal] | Approved proposal | Approved Proposal | Yes | Approved scope and deliverables. |
| [Client TOR] | Client TOR | TOR | Yes | Client requirements and constraints. |
| [DMS system documentation] | DMS system documentation | DMS User Manual | Yes | System/module reference. |
| [DMS architecture documentation] | DMS architecture documentation | DMS Architecture Document | Yes | Architecture and integration reference. |
| [Client implementation requirements] | Client implementation requirements | Business Process Description | Yes | Implementation requirements and dependencies. |
| [Client policies and procedures] | Client policies and procedures | Client Policy | To be confirmed | Policy references must be confirmed from source documents. |

## Example Selected Outputs

- Project Charter
- Risk Management Plan
- Test and Go-Live Plan

## Expected Controlled Prompt Characteristics

The generated controlled prompt should:

- Request selected governance outputs only.
- Exclude Proposal output.
- Exclude review outputs unless selected through Document Review Agent.
- Exclude workflow outputs unless selected through Workflow Agent.
- Include governance, roles, risks, assumptions, deliverables and sign-off where relevant.
- Mark missing information as `To be confirmed`.
- Include template paths and output folders for selected governance outputs.
- Remind the user to upload/provide actual source documents manually in ChatGPT/Codex.

## Manual Test Checklist

- Select Project Governance Agent.
- Add the source document inventory entries listed above.
- Tick the matching document classifications.
- Select Project Charter, Risk Management Plan and Test and Go-Live Plan.
- Generate the controlled prompt.
- Confirm only the selected governance outputs are listed as outputs to generate.
- Confirm Proposal is not included as a generation target.
- Confirm Gap Analysis Report and Improvement Action Plan are not included as generation targets.
- Confirm Workflow Design Document and Workflow Steps are not included as generation targets.
- Confirm roles, risks, assumptions, deliverables and sign-off appear where relevant.
- Confirm missing information is marked `To be confirmed`.
- Repeat with Project Charter only and confirm only Project Charter is requested.
