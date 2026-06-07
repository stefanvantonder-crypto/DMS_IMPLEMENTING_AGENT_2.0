# V2.2 Output Naming Versioning Standard

## 1. Purpose

Define a future standard for naming and versioning controlled Markdown outputs so review status, lifecycle stage and evidence linkage stay clear.

## 2. Naming Principles

- Names must be readable and sortable.
- Names must reflect lifecycle state.
- Names must avoid misleading approval language.
- Names must support evidence traceability.
- Names must be consistent across outputs and sessions.

## 3. Required Filename Components

- `session_name`
- `client_short_name`
- `project_short_name`
- `output_label`
- `status`
- `version`
- `date`, optional

## 4. Proposed Filename Pattern

- `{client_short}_{project_short}_{output_label}_{status}_v{major}.{minor}.md`

## 5. Examples

- `FSGLTA_AMS_Project_Charter_Draft_v0.1.md`
- `FSGLTA_AMS_Project_Charter_Reviewed_v0.2.md`
- `FSGLTA_AMS_Project_Charter_ApprovedForPackaging_v1.0.md`

## 6. Version Rules

- `v0.x` for drafts
- `v0.x` reviewed iterations
- `v1.0` for first approved-for-packaging version
- Increment minor for review changes
- Increment major only after approved baseline

## 7. Prohibited Naming

- `final` unless formally approved
- `signed` unless signed evidence exists
- `approved` unless approval evidence exists

## 8. Collision Handling

If a filename collision occurs:

- Increment minor version if the file is the next controlled revision.
- Add optional date suffix if parallel draft branches must be distinguished.
- Move obsolete files to the superseded state instead of overwriting silently.

## 9. Cross-Reference With Source Evidence And Prompt Evidence

Every future naming workflow should support clear linkage to:

- Source evidence records
- Prompt capture reference
- Review evidence reference
- Packaging-readiness evidence

