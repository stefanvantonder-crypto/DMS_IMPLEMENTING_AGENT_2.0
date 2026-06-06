# V1.10B Session JSON Import / Restore Plan

## A. Purpose

V1.10B will allow the user to import a previously exported V1 session JSON file and restore static UI state without using a backend, database, localStorage or bundled runtime.

The imported JSON is a session control artifact only. It restores metadata and selections so the user can continue prompt-control work. It must not restore source files, parse documents, generate client deliverables or automatically create a fresh prompt.

## B. Scope

Allowed in V1.10B:

- Import a JSON file exported by V1.10A.
- Validate JSON structure.
- Validate `schema_version`.
- Restore session metadata fields.
- Restore selected agent.
- Restore selected document classifications.
- Restore source document inventory metadata.
- Restore selected output IDs if still valid.
- Restore Mini Workflow Brief.
- Restore controlled prompt text if present.
- Restore validation warnings as historical warnings or regenerate current warnings.
- Show an import status message.

Not allowed in V1.10B:

- Restoring actual source documents.
- Reading actual source document contents.
- Uploading files as source documents.
- Parsing PDFs or DOCX files.
- Backend storage.
- Database storage.
- localStorage.
- DOCX generation.
- Markdown-to-DOCX conversion.
- Automatic client document generation.
- Auto-generating a new prompt on import.
- Auto-selecting outputs that are not in the imported file.
- Importing unsupported arbitrary JSON.

## C. Import File Handling

The import control should use a browser file input that accepts `.json` files only. The selected file should be read locally in the browser with `FileReader`, parsed with `JSON.parse`, and rejected with a clear message if it is not valid JSON.

The file must not be sent anywhere, uploaded, stored permanently, cached in localStorage, written to the repository, or treated as a source document.

## D. Schema Validation

Minimum required fields:

- `schema_version`
- `session`
- `agent`
- `document_classifications`
- `source_document_inventory`
- `outputs`
- `mini_workflow_brief`

Supported `schema_version`:

- `"1.0"`

If `schema_version` is missing, show:

```text
Imported session is missing schema_version and cannot be safely restored.
```

If `schema_version` is unsupported, show:

```text
Unsupported session schema version. Import was not restored.
```

## E. Restore Rules

- Restore session fields only if present.
- Restore `selected_agent_id` only if it exists in `engine/agent_registry.json`.
- Restore selected document classifications only if they are valid for the restored agent.
- Treat invalid or obsolete classifications as ignored/unknown and show them in the import summary.
- Restore source document inventory metadata without treating source files as uploaded.
- Restore `selected_output_ids` only if they exist in `engine/output_registry.json` and belong to the selected agent.
- Ignore invalid, obsolete or wrong-agent output IDs and show warnings.
- Restore Mini Workflow Brief fields if present.
- Restore `controlled_prompt` if present, but mark it as imported/historical.
- Do not auto-generate a fresh prompt after restore.
- Require the user to click `Generate Controlled Prompt` to create a fresh prompt from restored state.

## F. Source Document Warning

After import, always show:

```text
Session restored from JSON. Re-upload/provide the actual source documents in ChatGPT/Codex when using the prompt. The JSON file stores metadata only.
```

## G. Conflict Handling

The import result must handle and report:

- Agent ID no longer exists.
- Output ID no longer exists.
- Output belongs to a different agent.
- Classification no longer valid.
- Template mapping missing.
- Imported prompt exists but selected outputs changed.
- Source documents marked unavailable.
- Fallback configuration active.

These conflicts should not update registries, agents, templates or permanent knowledge-base files.

## H. Import Result Summary

After import, show one of these outcomes:

- Session restored successfully.
- Session restored with warnings.
- Import failed.

The summary should list:

- Restored session name.
- Restored agent.
- Restored output count.
- Ignored output IDs.
- Ignored classifications.
- Warnings.

## I. Security And Privacy

- Import happens locally in the browser.
- JSON is not uploaded to a server.
- V1.10B does not restore source files.
- Users must avoid storing confidential source text in notes unless that text is intended to be saved in the session JSON.
- The app must not execute content from imported JSON as code.
- Imported text must be treated as text only.

## J. Manual Test Plan

1. Valid V1.10A JSON import restores supported session state.
2. Invalid JSON is rejected with a clear warning.
3. Missing `schema_version` shows the approved missing-schema warning.
4. Unsupported `schema_version` shows the approved unsupported-schema warning.
5. Missing selected agent is reported and not restored unsafely.
6. Obsolete output ID is ignored and listed in warnings.
7. Output ID for the wrong agent is ignored and listed in warnings.
8. Source document inventory metadata is restored without source files.
9. Mini Workflow Brief values are restored.
10. Controlled prompt is restored as imported/historical text.
11. User can click `Generate Controlled Prompt` after restore to create a fresh prompt.
12. Selected-output-only behaviour still works after restore.
13. No source files are restored.
14. No backend, server, storage, localStorage, Python, DOCX generation, file parsing, PDF extraction, DOCX extraction or generated client document workflow is introduced.
