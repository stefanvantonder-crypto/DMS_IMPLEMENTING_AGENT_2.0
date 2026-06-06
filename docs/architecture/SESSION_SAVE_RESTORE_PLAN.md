# V1.10 Session Save / Restore Plan

## V1.10A Active Scope

V1.10A is export-only. The active implementation must export the current browser session as a downloadable JSON file and must not implement import, restore, localStorage, backend storage, file upload, file parsing, DOCX generation or automatic document generation.

Import and restore remain deferred until a later approved V1.10B task.

## A. Purpose

V1.10 will allow users to save and restore project-specific DMS Implementing Agent sessions without using a backend or database.

Each project can have different session fields, selected agents, document classifications, source document inventory entries, selected outputs, notes, Mini Workflow Brief values and generated prompt state. The planned V1.10 model is to export the current session as a downloadable JSON file and later import that JSON file to restore the static UI state.

The saved JSON is a session control artifact only. It is not a generated client document.

## B. V1.10 Scope

Allowed in V1.10A:

- Export session metadata as JSON.
- Include session fields.
- Include selected agent.
- Include selected document classifications.
- Include source document inventory metadata.
- Include selected outputs.
- Include Mini Workflow Brief.
- Include generated controlled prompt, if available.
- Include validation warnings at time of export.
- Include app version and export timestamp.

Not allowed in V1.10A:

- Importing session JSON.
- Restoring UI state from JSON.
- localStorage persistence.
- Storing actual source files.
- Reading source file contents.
- Uploading files.
- Backend storage.
- Database storage.
- DOCX generation.
- Markdown-to-DOCX conversion.
- Automatic client document generation.

## C. Proposed Session JSON Structure

Draft structure:

```json
{
  "schema_version": "1.0",
  "app_version": "1.10A",
  "exported_at": "2026-06-06T00:00:00.000Z",
  "session": {
    "session_name": "",
    "client_name": "",
    "project_name": "",
    "contract_bid_number": "",
    "prepared_by": "",
    "session_notes": ""
  },
  "agent": {
    "selected_agent_id": "",
    "selected_agent_name": ""
  },
  "document_classifications": {
    "selected": []
  },
  "source_document_inventory": [
    {
      "document_name": "",
      "classification": "",
      "document_type": "",
      "document_date": "",
      "version_reference": "",
      "available_for_upload": true,
      "notes": ""
    }
  ],
  "outputs": {
    "selected_output_ids": []
  },
  "mini_workflow_brief": {
    "workflow_description": "",
    "workflow_rules": "",
    "roles_people": "",
    "expected_outcome": ""
  },
  "controlled_prompt": "",
  "validation_warnings": []
}
```

Field notes:

- `schema_version` controls compatibility of imported session files.
- `app_version` records the app version used at export time.
- `exported_at` should be an ISO 8601 timestamp.
- `source_document_inventory` stores metadata only, not files and not extracted source text.
- `controlled_prompt` stores the text shown in the prompt preview at the time of export, if available.

## D. Export Behaviour

The export action should:

- Build the session JSON object from current UI state.
- Download the file using browser `Blob` and `URL.createObjectURL`.
- Avoid server calls.
- Avoid backend storage.
- Avoid database storage.

Download filename:

```text
{safe_session_name}_DMS_Session_v01.json
```

If no session name is available:

```text
DMS_Session_v01.json
```

The `safe_session_name` should use the same conservative filename sanitising approach used for session report downloads.

## E. Deferred Import Behaviour

Import is not active in V1.10A. When a later V1.10B task is approved, the import action should:

- Let the user select a previously exported JSON file.
- Read the JSON file in the browser.
- Reject invalid JSON.
- Validate `schema_version`.
- Restore session fields, selected agent, selected document classifications, source document inventory, selected outputs and Mini Workflow Brief values.
- Restore the controlled prompt preview only as prior session state.
- Avoid restoring unavailable source files, because source files are not stored in the JSON.
- Avoid auto-generating outputs after restore.

After import, the app should show this warning:

```text
Session restored from JSON. Re-upload/provide actual source documents when using the generated prompt.
```

The user must click `Generate Controlled Prompt` again if they want a fresh prompt based on the restored state.

## F. Validation Rules

V1.10 import/export validation should:

- Reject invalid JSON.
- Warn if `schema_version` is unsupported.
- Warn if restored output IDs no longer exist in `engine/output_registry.json`.
- Warn if restored agent ID no longer exists in `engine/agent_registry.json`.
- Warn if source document inventory contains documents marked unavailable.
- Never auto-generate outputs after restore.
- Require the user to click `Generate Controlled Prompt` again for a fresh prompt.

Additional implementation notes:

- Restored output IDs must still obey selected-output-only generation.
- Unknown restored classifications should remain visible where possible and should not be written into registries.
- Unsupported restored values should be reported in UI warnings rather than silently discarded.

## G. Security And Privacy Note

The V1.10 JSON file stores metadata and prompt text only.

It must not store actual document contents unless the user manually typed those contents into notes or prompt text. Users should be warned not to place confidential source text into session notes, source inventory notes or prompt text unless they intend that text to be saved in the JSON export.

V1.10 must not store source files, parse source files, extract PDF/DOCX content, upload files, send data to a server or update the permanent knowledge base.

## H. Manual Test Plan

Export tests:

- Export a blank session and confirm the filename is `DMS_Session_v01.json`.
- Export a named session and confirm the filename uses `{safe_session_name}_DMS_Session_v01.json`.
- Confirm exported JSON includes schema version, app version, timestamp, session fields, selected agent, selected classifications, source document inventory, selected outputs, Mini Workflow Brief, controlled prompt and validation warnings.
- Confirm exported JSON does not include actual source file content.

Import tests:

- Import a valid V1.10 session JSON file and confirm the UI state is restored.
- Confirm selected outputs are restored but not automatically generated.
- Confirm the restored prompt preview is treated as prior state and a fresh prompt requires the user to click `Generate Controlled Prompt`.
- Confirm the warning appears: `Session restored from JSON. Re-upload/provide actual source documents when using the generated prompt.`

Invalid JSON tests:

- Import a non-JSON file and confirm the app rejects it with a clear warning.
- Import malformed JSON and confirm the app rejects it with a clear warning.

Unsupported schema tests:

- Import JSON with an unsupported `schema_version` and confirm the app warns without applying unsafe state.

Missing registry item tests:

- Import JSON with a missing output ID and confirm the app warns that the output no longer exists in `engine/output_registry.json`.
- Import JSON with a missing agent ID and confirm the app warns that the agent no longer exists in `engine/agent_registry.json`.

Source inventory tests:

- Import a session with source inventory entries and confirm all metadata fields are restored.
- Import a session with a source document marked unavailable and confirm the unavailable-source warning appears.
- Confirm no source files are restored, because source files are not stored.

Scope tests:

- Confirm no backend, database, Python, DOCX generation, package manager, server file, external library, localStorage implementation or generated client document is added.
