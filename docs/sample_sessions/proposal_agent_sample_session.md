# Proposal Agent Sample Session

## Purpose

This sample session helps test whether the Proposal Preparation Agent creates a controlled prompt for Proposal only, without pulling in governance, review or workflow outputs.

Use this sample with manually uploaded proposal source documents in ChatGPT/Codex. The app records source document metadata only.

## Sample Session Metadata

| Field | Sample Value |
|---|---|
| Session Name | Sample Proposal Session |
| Client Name | [Client Name] |
| Project Name | [Project Name] |
| Contract / Bid Number | [To be confirmed] |
| Prepared By | [Prepared by] |

## Selected Agent

Proposal Preparation Agent

## Source Document Inventory Examples

| Document Name | Classification | Document Type | Available For Upload | Notes |
|---|---|---|---|---|
| [Client TOR / RFQ / RFP] | Client TOR / RFQ / RFP | TOR / RFQ / RFP | Yes | Primary bid requirements document. |
| [Bid specification] | Bid specification | Bid Specification | Yes | Technical and submission requirements. |
| [Previous proposal example] | Previous proposal example | Previous Proposal Example | Yes | Use structure only; do not copy client-specific facts unless applicable. |
| [Company profile] | Company profile | Other | Yes | Company background and capability evidence. |
| [DMS user manual] | DMS user manual | DMS User Manual | Yes | Product/module details. |
| [DMS architecture document] | DMS architecture document | DMS Architecture Document | Yes | Architecture and integration details. |
| [Pricing schedule] | Pricing schedule | Pricing Schedule | To be confirmed | Pricing must not be invented. |
| [Reference letters] | Reference letters | Reference Letter | To be confirmed | References and certifications must be evidence-based. |

## Selected Output

- Proposal only

## Expected Controlled Prompt Characteristics

The generated controlled prompt should:

- Request Proposal only.
- Exclude governance outputs.
- Exclude review outputs.
- Exclude workflow outputs.
- Mark missing pricing/evidence as `To be confirmed`.
- Avoid invented references, certifications, pricing, dates or evidence.
- Use formal public-sector consulting language.
- Include the relevant proposal template path and output folder.
- Remind the user to upload/provide actual source documents manually in ChatGPT/Codex.

## Manual Test Checklist

- Select Proposal Preparation Agent.
- Add the source document inventory entries listed above.
- Tick the matching document classifications.
- Select Proposal only.
- Generate the controlled prompt.
- Confirm the prompt says selected outputs only.
- Confirm the prompt includes Proposal only.
- Confirm it does not include Project Charter, Risk Management Plan, Gap Analysis Report, Workflow Design Document or other unselected outputs as generation targets.
- Confirm missing pricing or evidence is marked `To be confirmed`.
- Confirm the prompt does not invent references, certifications or pricing.
- Copy the prompt and test it in ChatGPT/Codex with manually uploaded source documents.
