# ADR V1.10B: Session JSON Import / Restore With Validation

## Context

The DMS Implementing Agent V1 app is a static Markdown-first prompt-control system. V1.10A exports session metadata and UI state as a downloadable JSON file. Users need a later V1 step to import that JSON and restore the browser UI state without changing the static architecture.

V1 cannot use a backend, database, Python service, package manager, external library, DOCX generation, localStorage persistence, file extraction or generated client document workflow.

## Decision

Use JSON import with validation for V1.10B planning. The implementation phase is deferred to V1.10C.

The planned import will read a user-selected `.json` file locally in the browser, validate the expected V1 session shape, support `schema_version` `"1.0"`, restore safe metadata and selections, and show a clear result summary.

## Options Considered

### 1. No Import Support

The app could keep export-only session files. This avoids import complexity, but users would have no approved way to continue a saved V1 session.

Result: Not selected for V1.10B.

### 2. JSON Import With Validation

The app can import the V1.10A JSON file, validate the schema, restore metadata and selections, and reject unsupported or unsafe values. This keeps V1 static and user-controlled.

Result: Selected for V1.10B.

### 3. localStorage Restore

localStorage could persist session state in one browser profile, but it hides stored data from the user, creates privacy concerns and was explicitly excluded from V1.10A.

Result: Excluded.

### 4. Backend / Database Restore

A backend or database could support richer persistence, but it violates the V1 static baseline and adds operational complexity.

Result: Excluded.

## Rationale

JSON import with validation matches V1 constraints:

- Static browser-only operation.
- No backend or database.
- No localStorage.
- No package manager or external library.
- User-controlled session files.
- Clear validation before restoring state.
- No source-file restoration or parsing.

## Consequences

Positive consequences:

- Users can resume prior V1 sessions from exported JSON.
- Import remains transparent and portable.
- Stale agents, outputs and classifications can be reported instead of silently restored.
- The app remains compatible with local file use and GitHub Pages.

Tradeoffs:

- Users must manage JSON files manually.
- Imported sessions may contain obsolete IDs after registries change.
- Source files still need to be re-provided manually when using prompts.
- Confidential text typed into notes or prompt fields can reappear after import.

## Explicit Exclusions

V1.10B planning excludes:

- Import implementation.
- Backend storage.
- Database storage.
- Python services.
- Node, Express or server routes.
- `package.json` or build tooling.
- External libraries.
- localStorage persistence.
- Source file upload.
- Source file parsing.
- PDF extraction.
- DOCX extraction.
- DOCX generation.
- Markdown-to-DOCX conversion.
- Automatic prompt generation on import.
- Automatic client document generation.
- Permanent updates to agents, registries, templates or knowledge-base files.

## Rollback Considerations

If V1.10B planning is rolled back, remove this ADR, remove `docs/architecture/SESSION_IMPORT_RESTORE_PLAN.md`, and revert related roadmap, changelog, test-case and save/restore planning references. The V1.10A export-only implementation can remain unaffected because import/restore code is not introduced in this planning phase.
