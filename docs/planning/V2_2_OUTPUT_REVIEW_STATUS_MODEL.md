# V2.2 Output Review Status Model

## 1. Purpose

Define future review statuses for controlled Markdown outputs so draft, reviewed and packaging-ready states are distinct and auditable.

## 2. Status Definitions

### Draft

- Early generated Markdown output not yet formally reviewed

### Under Review

- Markdown output being checked against evidence and quality gates

### Reviewed

- Markdown output reviewed and found usable, possibly with minor follow-up notes

### Accepted With Changes

- Output acceptable in principle but requires recorded changes before packaging readiness

### Approved For Packaging

- Output approved for later manual Word packaging only

### Rejected

- Output fails review or evidence expectations and must not proceed

### Superseded

- Output replaced by a newer controlled version

## 3. Entry Criteria For Each Status

- Draft: Output generated and captured
- Under Review: Reviewer assigned and review started
- Reviewed: Quality gates passed sufficiently for reviewed state
- Accepted With Changes: Review found manageable issues requiring update
- Approved For Packaging: Review complete and packaging-ready decision recorded
- Rejected: Critical issues or non-compliance found
- Superseded: Newer controlled version replaces the current file

## 4. Exit Criteria For Each Status

- Draft: Move only to Under Review or Rejected
- Under Review: Move to Reviewed, Accepted With Changes or Rejected
- Reviewed: Move to Approved For Packaging, Accepted With Changes or Superseded
- Accepted With Changes: Move back to Under Review after revisions
- Approved For Packaging: Move only to Superseded if replaced later
- Rejected: Exit only through regeneration of a new version
- Superseded: No further lifecycle promotion

## 5. Required Evidence Per Status

- Draft: Prompt reference and source-document list
- Under Review: Reviewer assignment and checklist start
- Reviewed: Review notes and gate results
- Accepted With Changes: Change notes and outstanding items
- Approved For Packaging: Final review evidence and packaging-readiness note
- Rejected: Rejection reason and issue record
- Superseded: Reference to replacement version

## 6. Who Can Move An Output Between Statuses

- Preparer may create Draft
- Reviewer may move Draft to Under Review and then to Reviewed or Rejected
- Approver or template controller may move Reviewed to Approved For Packaging
- Repository controller may mark files Superseded under approved control

## 7. Rules Preventing Unreviewed Output From Being Treated As Approved

- Draft must never be labeled approved
- Under Review must never be used for packaging
- Reviewed does not equal client approved
- Approved For Packaging does not equal signed or client approved
- Rejected and Superseded outputs must not be reused as active baselines

## 8. How "Approved For Packaging" Differs From "Client Approved"

Approved For Packaging means:

- Internally reviewed enough for manual Word packaging preparation

It does not mean:

- Client approved
- Signed off
- Formally accepted by an external party

## 9. Status Metadata Fields

- `status`
- `status_date`
- `reviewer`
- `approver`
- `review_notes`
- `quality_gate_result`
- `selected_output_compliance_result`

## 10. Planning-Only Implementation Boundary

This model is planning only.

No status-tracking implementation is approved in V2.2.

