# V2.2 Capture Evidence Model

## 1. Purpose

Define the evidence chain that should support future controlled Markdown capture, review and packaging-readiness decisions.

## 2. Evidence Types

- Prompt evidence
- Source document inventory
- Generated Markdown output
- Selected-output-only compliance evidence
- Quality gate checklist
- Reviewer notes
- Approval / packaging readiness note

## 3. Evidence Metadata

- `evidence_id`
- `session_name`
- `source_file_reference`
- `prompt_capture_reference`
- `output_file_reference`
- `reviewer`
- `date`
- `status`

## 4. Evidence Chain

- Source documents
- Controlled prompt
- Generated output
- Review checklist
- Approved-for-packaging record

## 5. How To Avoid False Claims

- App did not parse source documents
- App did not generate final deliverables
- Repository did not approve client deliverables
- Approval means packaging readiness only unless client sign-off exists

## 6. Evidence Retention Recommendation

Future controlled workflow should retain:

- Prompt evidence for traceability
- Source-document inventory for session context
- Review evidence for auditability
- Superseded evidence references for change tracking

Retention should favor text-first evidence where possible and avoid unnecessary binary growth.

## 7. Planning-Only Boundary

This evidence model is planning only.

No evidence storage implementation is approved in V2.2.

