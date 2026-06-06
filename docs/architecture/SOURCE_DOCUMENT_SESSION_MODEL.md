# Source Document Session Model

## Purpose

V1.9 adds a Source Document Inventory Panel for recording project-specific source document metadata during a browser session.

Every project can have different source documents, such as a TOR, RFQ, RFP, approved proposal, client policy, DMS manual, SOP, framework document or interview notes. These documents are session-specific and must be uploaded manually with the generated prompt in ChatGPT/Codex.

## V1.9 Scope

- The app records source document metadata only.
- Source document inventory entries are kept in browser memory for the current page session.
- Reloading the page may clear the inventory.
- No file upload is implemented.
- No file parsing is implemented.
- No PDF extraction is implemented.
- No DOCX extraction is implemented.
- No source document content is stored by the app.
- No session source document permanently updates the knowledge base.

## Inventory Fields

Each inventory entry records:

- Document Name
- Document Classification
- Document Type
- Document Date
- Version / Reference Number
- Notes
- Available for upload: Yes / No

## Classification Model

The Document Classification field is populated from the selected agent's `allowed_inputs` where possible. The general option `Other session source document` is also available.

Inventory classifications supplement the existing document classification checklist. They do not replace the checklist and do not change agent definitions, schemas, registries, templates or prompts.

## Validation Model

When an agent requires an input classification, V1.9 treats that requirement as present if either:

- The classification checkbox is selected, or
- A source inventory entry uses that classification.

If a required source document is listed but marked `Available for upload: No`, the app shows a warning so the generated prompt treats related information as `To be confirmed` unless provided elsewhere.

## Prompt And Report Model

Controlled prompts and session reports include a `Session Source Document Inventory` section.

If no inventory entries are recorded, the prompt and report state:

`No source document inventory entries were recorded. Use the selected document classifications as the session document checklist.`

Generated prompts instruct ChatGPT/Codex to use only the session inventory and manually uploaded documents, and not to permanently update the knowledge base from session documents.
