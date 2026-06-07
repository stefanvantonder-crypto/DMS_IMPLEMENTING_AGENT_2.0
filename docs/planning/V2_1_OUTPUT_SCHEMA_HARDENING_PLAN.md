# V2.1 Output Schema Hardening Plan

## 1. Purpose

Plan how generated Markdown outputs should be structured, validated, reviewed and prepared for later controlled packaging without changing the V1 app or approving V2 implementation work.

## 2. Current V1/V2 Baseline

Current baseline:

- V1.19C confirmed that V1 can support usable Markdown-first outputs when the captured prompt is used with manually uploaded source documents.
- V2.0 planning confirmed that Markdown remains the canonical source format.
- DOCX generation is not approved.
- Backend is not approved.
- V2 coding is not approved.
- V1 static prompt-control behaviour must remain protected.

## 3. Problem Statement

The current workflow can produce strong Markdown outputs, but there is not yet a hardened schema for determining when a generated Markdown output is valid, review-ready and safe for later manual Word packaging or future export evaluation.

Without a stronger schema:

- Output metadata may be inconsistent.
- Review status may be unclear.
- Selected-output-only compliance may be hard to prove.
- Missing-information handling may drift.
- Reuse for packaging may become informal and unsafe.

## 4. Definition Of A Valid Markdown Output

A valid Markdown output should:

- Match the selected output type.
- Match the selected agent context.
- Contain required metadata.
- Follow the approved Markdown template structure.
- Include only selected outputs.
- Exclude unselected outputs.
- Distinguish evidence from assumptions.
- Mark missing information as `To be confirmed`.
- Avoid final approval claims.
- Avoid backend, DOCX or parsing claims.

## 5. Required Output Metadata

Every future controlled Markdown output should include:

- Output title
- Output type
- Output ID
- Agent ID
- Session name
- Client name
- Project name
- Bid / contract reference
- Source documents used
- Template path
- Output folder
- Version
- Status
- Prepared by
- Review status

## 6. Required Sections

Every future controlled Markdown output should include:

- Document Control
- Source Documents Used
- Main Body
- Assumptions
- Items To Be Confirmed
- Review Checklist
- Sign-off / Approval placeholders where relevant

## 7. Required Rules

- Markdown-first
- Selected outputs only
- No unselected outputs
- No invented facts
- No final approval claims
- No DOCX/backend claims
- `To be confirmed` for missing information

## 8. Output-Type Specific Hardening Considerations

### Proposal

- Keep proposal scope aligned to the selected proposal output only.
- Separate commercial facts from assumptions clearly.
- Preserve formal bid structure and source references.

### Project Charter

- Require project background, scope, governance, roles, milestones and assumptions.
- Preserve approval placeholders without implying sign-off.

### Risk Management Plan

- Require risk logic, ownership, mitigation structure and ratings model.
- Do not state unsupported risks as confirmed facts.

### Test And Go-Live Plan

- Require testing phases, entry/exit criteria, go/no-go conditions, rollback and support considerations.
- Keep dates, approvers and dependencies controlled with `To be confirmed` where needed.

### Gap Analysis Report

- Require explicit distinction between confirmed gaps, missing evidence and recommendations.
- Do not invent compliance or maturity findings.

### Workflow Design Document

- Require workflow objective, roles, routing, statuses, rules, exceptions and outputs.
- Do not drift into software logic or backend workflow implementation.

## 9. Recommended Next Steps

- Define the future capture and review model in V2.2.
- Define formal quality gates for draft, reviewed and packaging-ready states.
- Align future schema fields with template-control and packaging needs.
- Preserve selected-output-only controls through every later planning step.

## 10. Acceptance Criteria For Moving To V2.2

Do not move to V2.2 beyond planning until:

- The required metadata model is agreed.
- Required sections are agreed.
- Required rules are agreed.
- Output-type hardening notes are documented.
- V1 remains unchanged.
- No implementation is inferred from this planning document.

