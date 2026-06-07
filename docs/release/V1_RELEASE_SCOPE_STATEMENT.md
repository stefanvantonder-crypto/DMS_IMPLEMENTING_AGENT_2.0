# V1 Release Scope Statement

## What V1 Does

V1 of the DMS Implementing Agent 2.0 is a static Markdown-first prompt-control app for DMS and CIPMS implementation support.

V1 helps users:

- Select one approved agent.
- Select one or more approved output documents.
- Record source document inventory metadata for the current session.
- Generate controlled prompts for selected outputs only.
- Export Markdown session reports as control artifacts.
- Export and import browser-only Session JSON metadata.
- Keep missing or unknown information visible as `To be confirmed`.

## What V1 Does Not Do

V1 does not:

- Run a backend.
- Use Python.
- Use a database.
- Use server-side document processing.
- Generate DOCX files.
- Populate DOCX templates.
- Upload source documents into the app.
- Parse source documents.
- Extract PDF or DOCX content.
- Call an AI API directly.
- Automatically generate client deliverables.
- Persist session data through `localStorage`.

## How Users Should Use V1

Users should use V1 as a controlled prompt and session-control workspace:

1. Open the static app.
2. Select the correct agent.
3. Record session details.
4. Record source document inventory metadata.
5. Select only the output documents required for the session.
6. Generate the controlled prompt.
7. Provide the actual source documents manually to ChatGPT/Codex with the generated prompt.
8. Review outputs manually before saving them in the appropriate Markdown output folders.
9. Export a Markdown session report and Session JSON where needed for control evidence.

## Source Document Handling

Source documents are session-specific. V1 records only metadata about those documents, such as document name, classification, reference and availability.

Actual source documents must be uploaded or provided manually to ChatGPT/Codex outside the V1 app when the generated prompt is used.

## Control Artifact Position

V1 produces controlled prompts and control artifacts only. It does not produce final, approved, signed or automatically generated client deliverables.
