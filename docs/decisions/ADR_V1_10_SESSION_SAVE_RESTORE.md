# ADR V1.10: Session Save / Restore Using Downloadable JSON

## Context

The DMS Implementing Agent V1 app is a static Markdown-first prompt-control system. Users need a way to save and restore project-specific sessions that include metadata, selections, source document inventory entries, notes and generated prompt state.

V1 cannot use a backend, database, Python service, package manager, external library, DOCX generation or generated client document workflow. Source document files must not be stored, uploaded, parsed or treated as permanent knowledge base content.

## Decision

Use downloadable/importable JSON files for V1.10 session save / restore.

The app will export session metadata and UI state to a JSON file that the user downloads manually. Later, the user can import that JSON file to restore the UI state. The import must not restore actual source files and must remind the user to re-upload/provide source documents when using the generated prompt.

## Options Considered

### 1. Browser Memory Only

Browser memory is already used for current-session state. It is simple and private, but it is lost when the page reloads or the browser session ends.

Result: Not enough for project handover or returning to a session later.

### 2. localStorage

`localStorage` could persist state in the browser without a backend. It is convenient, but it is tied to one browser/profile, can create privacy concerns, and can hide stored session data from the user.

Result: Not selected for V1.10. It may be reconsidered later only if explicitly approved.

### 3. Downloadable/Importable JSON

JSON export/import keeps V1 static, transparent and portable. The user controls where the file is saved, can back it up manually, and can restore it later without backend storage.

Result: Selected for V1.10.

### 4. Backend/Database

A backend or database could support multi-user persistence and richer workflows, but it violates the V1 static scope and adds operational complexity.

Result: Explicitly excluded from V1.

## Rationale

Downloadable/importable JSON is the simplest persistence model that matches V1 constraints:

- Static browser-only operation.
- No backend or database.
- No package manager or external library.
- User-controlled save/restore.
- Portable session files.
- Clear separation between temporary session state and permanent knowledge base content.

## Consequences

Positive consequences:

- Users can save and restore sessions later.
- The app remains static and GitHub Pages compatible.
- Session state can be backed up manually.
- No server-side privacy or storage responsibilities are introduced.

Tradeoffs:

- Users must manage JSON files manually.
- Imported sessions can become stale if registries or outputs change.
- Source files are not restored and must be re-uploaded/provided manually.
- Confidential text typed into notes or prompt fields can be included in the JSON export.

## Explicit Exclusions

V1.10 must not implement:

- Backend storage.
- Database storage.
- Python services.
- Node/Express or any server routes.
- `package.json` or build tooling.
- External libraries.
- `localStorage` persistence.
- Source file upload.
- Source file parsing.
- PDF extraction.
- DOCX extraction.
- DOCX generation.
- Markdown-to-DOCX conversion.
- Automatic client document generation.
- Permanent updates to agent definitions, registries, schemas, templates or knowledge base files.
