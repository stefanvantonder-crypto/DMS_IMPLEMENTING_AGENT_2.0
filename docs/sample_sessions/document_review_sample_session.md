# Document Review Sample Session

## Purpose

This sample session helps test whether the Document Review Agent creates controlled prompts for selected review outputs only.

Use this sample to check that review prompts focus on gaps, impacts, risks, recommendations and evidence without inventing compliance findings.

## Sample Session Metadata

| Field | Sample Value |
|---|---|
| Session Name | Sample Document Review Session |
| Client Name | [Client Name] |
| Project Name | [Project Name] |
| Contract / Bid Number | [To be confirmed] |
| Prepared By | [Prepared by] |

## Selected Agent

Document Review Agent

## Source Document Inventory Examples

| Document Name | Classification | Document Type | Available For Upload | Notes |
|---|---|---|---|---|
| [Document to be reviewed] | Document to be reviewed | Other | Yes | Primary document under review. |
| [PFMA / MFMA] | PFMA / MFMA | Framework / Legislation / Standard | To be confirmed | Applicable framework must be confirmed. |
| [GRAP standards] | GRAP standards | Framework / Legislation / Standard | To be confirmed | Applicable standard set must be confirmed. |
| [PMBOK 7] | PMBOK 7 | Framework / Legislation / Standard | To be confirmed | Use only if relevant to the review. |
| [ISO 9001] | ISO 9001 | Framework / Legislation / Standard | To be confirmed | Quality management basis if supplied. |
| [Client policies and procedures] | Client policies and procedures | Client Policy | Yes | Client-specific review basis. |
| [Ad hoc review requirements] | Ad hoc review requirements | Other | Yes | Session-specific review criteria. |

## Example Selected Outputs

- Gap Analysis Report
- Improvement Action Plan

## Expected Controlled Prompt Characteristics

The generated controlled prompt should:

- Request selected review outputs only.
- Include findings with gap, impact, risk, recommendation and required evidence.
- Include severity levels where appropriate.
- Avoid invented compliance findings.
- Use core review rules and mark gaps `To be confirmed` if the review basis is missing.
- Include template paths and output folders for selected review outputs.
- Remind the user to upload/provide actual source documents manually in ChatGPT/Codex.

## Manual Test Checklist

- Select Document Review Agent.
- Add the source document inventory entries listed above.
- Tick the matching document classifications.
- Select Gap Analysis Report and Improvement Action Plan.
- Generate the controlled prompt.
- Confirm only selected review outputs are requested.
- Confirm the prompt asks for gap, impact, risk, recommendation and required evidence.
- Confirm severity levels are included where appropriate.
- Confirm no unsupported compliance findings are invented.
- Confirm unavailable frameworks or standards are marked `To be confirmed`.
- Confirm governance, proposal and workflow outputs are not included as generation targets.
