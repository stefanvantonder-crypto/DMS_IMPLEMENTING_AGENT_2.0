# V2.2 Markdown Output Folder Model

## Purpose

Define the proposed future folder model for controlled Markdown output capture and evidence handling.

This is planning only.

## Folder Model

### `outputs/markdown/draft/`

- Purpose: Hold early captured Markdown drafts pending structured review.
- Allowed file types: `.md`
- Who may place files there: Preparer or repository controller in a future approved workflow
- Review status requirement: Draft only
- Promotion rule: May move only after review is initiated
- Prohibited content: Approved deliverables, DOCX files, unrelated evidence files

### `outputs/markdown/under_review/`

- Purpose: Hold Markdown outputs actively under structured review.
- Allowed file types: `.md`
- Who may place files there: Reviewer or repository controller
- Review status requirement: Under Review
- Promotion rule: May move only after review outcome is recorded
- Prohibited content: Client-approved files, unreviewed drafts masquerading as reviewed

### `outputs/markdown/reviewed/`

- Purpose: Hold reviewed Markdown outputs that passed review but are not yet packaging-approved
- Allowed file types: `.md`
- Who may place files there: Reviewer or repository controller
- Review status requirement: Reviewed or Accepted with Changes
- Promotion rule: May move only after approver/template controller accepts packaging readiness
- Prohibited content: Unreviewed drafts, DOCX files, automatic final deliverables

### `outputs/markdown/approved_for_packaging/`

- Purpose: Hold Markdown outputs approved for later manual Word packaging
- Allowed file types: `.md`
- Who may place files there: Approver, template controller or repository controller
- Review status requirement: Approved for Packaging
- Promotion rule: No further promotion without later approved process
- Prohibited content: Files labeled client approved or signed without evidence

### `outputs/markdown/rejected/`

- Purpose: Hold rejected Markdown outputs for traceability
- Allowed file types: `.md`
- Who may place files there: Reviewer or repository controller
- Review status requirement: Rejected
- Promotion rule: No promotion; regenerate instead
- Prohibited content: Active reviewed baselines

### `outputs/markdown/superseded/`

- Purpose: Hold older reviewed or packaging-ready Markdown replaced by newer versions
- Allowed file types: `.md`
- Who may place files there: Repository controller
- Review status requirement: Superseded
- Promotion rule: No promotion; archive only
- Prohibited content: Current active baseline

### `outputs/session_evidence/`

- Purpose: Hold prompt and session evidence references in a future approved workflow
- Allowed file types: `.md`, `.json`
- Who may place files there: Repository controller
- Review status requirement: Evidence linked to a session
- Promotion rule: Evidence remains linked to session state
- Prohibited content: Generated client deliverables

### `outputs/review_evidence/`

- Purpose: Hold review checklists and reviewer evidence records in a future approved workflow
- Allowed file types: `.md`, `.json`
- Who may place files there: Reviewer or repository controller
- Review status requirement: Must relate to review activity
- Promotion rule: Evidence should follow reviewed output status
- Prohibited content: Unlinked files or client-facing outputs

### `outputs/packaging_evidence/`

- Purpose: Hold packaging-readiness notes and future manual packaging evidence
- Allowed file types: `.md`, `.json`
- Who may place files there: Approver, template controller or repository controller
- Review status requirement: Approved for Packaging
- Promotion rule: Evidence remains attached to approved-for-packaging state
- Prohibited content: Claimed client approval without sign-off evidence

## Explicit Note

No actual output folders or generated output files are to be created in V2.2 unless already existing placeholders exist. This is a planning model only.

