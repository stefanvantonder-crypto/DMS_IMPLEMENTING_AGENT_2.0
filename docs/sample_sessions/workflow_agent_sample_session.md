# Workflow Agent Sample Session

## Purpose

This sample session helps test whether the Workflow Agent creates controlled prompts for selected workflow outputs only.

Use this sample to check that workflow prompts can use either uploaded process/SOP documents or the Mini Workflow Brief.

## Sample Session Metadata

| Field | Sample Value |
|---|---|
| Session Name | Sample Workflow Session |
| Client Name | [Client Name] |
| Project Name | [Project Name] |
| Contract / Bid Number | [To be confirmed] |
| Prepared By | [Prepared by] |

## Selected Agent

Workflow Agent

## Source Document Inventory Examples

| Document Name | Classification | Document Type | Available For Upload | Notes |
|---|---|---|---|---|
| [Business process description] | Business process description | Business Process Description | Yes | Primary process source if available. |
| [SOP] | SOP | SOP | To be confirmed | Use if supplied. |
| [Client policy] | Client policy | Client Policy | To be confirmed | Policy constraints if supplied. |
| [Existing workflow example] | Existing workflow example | Other | To be confirmed | Use structure only where relevant. |
| [User interview notes] | User interview notes | User Interview Notes | Yes | Practical process detail. |
| [Compliance requirements] | Compliance requirements | Framework / Legislation / Standard | To be confirmed | Required compliance conditions. |

## Mini Workflow Brief Example

Workflow Description / What must happen:

A user requests tea. The request is checked, water is boiled, tea is prepared, quality is checked, tea is served, and the request is closed.

Workflow Rules / Conditions:

Milk and sugar preference must be captured. If ingredients are unavailable, return the request for correction or mark as unavailable.

Roles / People involved:

Requestor, preparer, reviewer, approver, service assistant.

Expected outcome:

The request is fulfilled, recorded, quality-checked and closed.

## Example Selected Outputs

- Workflow Design Document
- Workflow Steps
- Roles and Responsibilities Matrix

## Expected Controlled Prompt Characteristics

The generated controlled prompt should:

- Request selected workflow outputs only.
- Include workflow steps, roles, decisions, statuses, SLA/escalation, notifications and InTouch notes where relevant.
- Use the Mini Workflow Brief if no SOP/process document is loaded.
- Mark missing workflow rules as `To be confirmed`.
- Include template paths and output folders for selected workflow outputs.
- Remind the user to upload/provide actual source documents manually in ChatGPT/Codex.

## Manual Test Checklist

- Select Workflow Agent.
- Add the source document inventory entries listed above.
- Tick the matching document classifications.
- Complete the Mini Workflow Brief with the tea-request example.
- Select Workflow Design Document, Workflow Steps and Roles and Responsibilities Matrix.
- Generate the controlled prompt.
- Confirm selected workflow outputs only are requested.
- Confirm workflow steps, roles, decisions, statuses, SLA/escalation, notifications and InTouch notes are included where relevant.
- Confirm the Mini Workflow Brief appears in the controlled prompt.
- Confirm missing workflow rules are marked `To be confirmed`.
- Confirm proposal, governance and review outputs are not included as generation targets.
