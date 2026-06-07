# ADR V2.2: Markdown Capture Storage Workflow

## 1. Status

Proposed

## 2. Context

V2.1 planning defined output schema, review expectations, quality gates and selected-output-only compliance as formal controls. The next planning need is a controlled workflow for how Markdown outputs could later be captured, stored, versioned and promoted without breaking V1.

The project still does not approve backend, DOCX generation, runtime capture implementation or repository-generated deliverables.

## 3. Decision

V2.2 approves planning for controlled Markdown capture/storage workflow only.

Actual capture implementation is not approved yet.

Actual output folders/files are not created by this phase.

DOCX export remains not approved.

Backend remains not approved.

Next phase should be V2.3 manual Word packaging guide planning.

## 4. Options Considered

1. Keep all Markdown handling informal and ad hoc.
2. Plan a structured capture/storage lifecycle without implementation.
3. Implement runtime storage/capture immediately.
4. Skip directly to packaging or DOCX automation.

## 5. Decision Outcome

Selected:

- Plan folder model, naming, statuses and evidence chain without coding.

Deferred:

- Actual capture implementation.
- Storage workflow implementation.
- DOCX/export implementation.

Rejected for now:

- Immediate runtime capture/storage.
- Backend or DOCX automation.

## 6. Consequences

Positive consequences:

- Keeps V1 protected.
- Makes future review and packaging traceable.
- Reduces the chance that drafts are mistaken for approved material.
- Creates a stronger control boundary before any export automation is discussed.

Tradeoffs:

- No storage feature is added yet.
- Manual governance remains necessary.
- Future implementation must still be approved separately.

## 7. What Is Explicitly Not Approved

- Capture implementation
- Runtime storage implementation
- Output folder creation beyond existing placeholders
- Generated output file creation
- Backend
- Python
- DOCX generation
- Markdown-to-DOCX conversion code
- `package.json`
- `server.js`
- External libraries
- localStorage
- File upload/parsing
- V2 coding implied by planning alone

## 8. Review Trigger For Changing Decision

Revisit this ADR only when:

- Capture workflow planning is accepted.
- Folder model is accepted.
- Naming/versioning standard is accepted.
- Review status model is accepted.
- Evidence model is accepted.
- V2.3 planning is ready to connect packaging controls to this workflow.

