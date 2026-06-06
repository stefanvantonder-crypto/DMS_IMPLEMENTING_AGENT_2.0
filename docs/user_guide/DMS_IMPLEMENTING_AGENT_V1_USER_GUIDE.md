# DMS Implementing Agent V1 User Guide

## 1. What The App Does

The DMS Implementing Agent V1 app is a static, Markdown-first prompt-control tool for DMS and CIPMS implementation support.

It helps you prepare a controlled prompt for ChatGPT/Codex by recording:

- Session and project details.
- The selected agent.
- Project/session-specific source document inventory metadata.
- Selected document classifications.
- Selected outputs.
- Mini Workflow Brief details where workflow design is required.
- A controlled prompt that tells ChatGPT/Codex what to generate.
- A Markdown session report.
- A session JSON file that can restore the app state later.

V1 is prompt-control only. It helps you control what you ask ChatGPT/Codex to do. It does not generate final client documents inside the app.

## 2. What The App Does Not Do

V1 does not:

- Generate DOCX files.
- Generate final client documents automatically.
- Generate unselected outputs.
- Read or parse PDF files.
- Read or parse DOCX files.
- Upload source documents.
- Store source files.
- Use a backend, server, database or localStorage.
- Replace missing facts with assumptions.
- Update the permanent knowledge base from project/session documents.

If information is missing, the app and the generated prompt must treat it as `To be confirmed`.

## 3. V1 Scope Notice

V1 is static and Markdown-first. It uses HTML, CSS, JavaScript, JSON and Markdown only.

The app creates control artifacts:

- Controlled prompt text.
- Markdown session report download.
- Session JSON export.

The actual writing work still happens in ChatGPT/Codex after you copy the controlled prompt and provide the real source documents.

## 4. Source Document Rule

Source documents are project/session-specific.

The Source Document Inventory records metadata only, such as:

- Document name.
- Classification.
- Document type.
- Date.
- Version or reference number.
- Whether the document is available for upload.
- Notes.

The app does not store the source documents themselves. You must still upload or provide the actual source documents manually to ChatGPT/Codex together with the generated prompt.

## 5. Create A Session

1. Open the app locally or through GitHub Pages.
2. Complete the session fields:
   - Session Name.
   - Client Name.
   - Project Name.
   - Contract / Bid Number.
   - Prepared By.
   - Session Notes.
3. Use clear names so downloaded session reports and JSON exports are easy to identify later.

If a field is unknown, leave it blank or write `To be confirmed`.

## 6. Select An Agent

Choose one agent for the session:

- Proposal Preparation Agent.
- Project Governance Agent.
- Document Review Agent.
- Workflow Agent.

The selected agent controls which document classifications and outputs are available.

## 7. Add Source Document Inventory Entries

Use the Source Document Inventory panel to list documents that support the session.

For each source document:

1. Enter the Document Name.
2. Select the Document Classification.
3. Select the Document Type.
4. Add the Document Date if known.
5. Add the Version / Reference Number if known.
6. Set Available for upload to `Yes` or `No`.
7. Add short notes if helpful.
8. Click Add Source Document.

Use inventory entries to help ChatGPT/Codex understand which source documents belong to the current session. Do not paste full confidential source content into notes unless you intend that text to be saved in the session JSON export.

## 8. Select Document Classifications

Tick the classifications that match the documents you will provide to ChatGPT/Codex.

Examples:

- Client TOR.
- Approved proposal.
- DMS system documentation.
- Business process description.
- Mini Workflow Brief.

The app uses these selections for validation warnings and for the generated controlled prompt.

## 9. Select Outputs

Tick only the outputs you want ChatGPT/Codex to generate.

Important:

- Select only the required outputs.
- Do not tick outputs you do not want.
- The controlled prompt tells ChatGPT/Codex to generate selected outputs only.
- Unselected outputs must not be generated.

Example: If you only need a Project Charter, select Project Charter only.

## 10. Complete The Mini Workflow Brief

When using the Workflow Agent, complete the Mini Workflow Brief if you do not already have a full process source document.

Add:

- What must happen.
- Workflow rules or conditions.
- Roles / people involved.
- Expected outcome.

The Workflow Agent can use this brief as the session process source.

## 11. Generate A Controlled Prompt

After selecting the agent, source classifications and outputs:

1. Click Generate Controlled Prompt.
2. Review the prompt preview.
3. Confirm the prompt includes only the selected outputs.
4. Confirm missing facts are shown as `To be confirmed`.
5. Confirm the prompt reminds ChatGPT/Codex to use uploaded/session documents only.

If warnings appear, review them before using the prompt.

## 12. Copy The Prompt

Click Copy Prompt.

Then paste the prompt into ChatGPT/Codex.

Upload or provide the actual source documents manually in the same ChatGPT/Codex session. The app does not upload those documents for you.

## 13. Download The Markdown Session Report

Click Download Session Report (.md).

The Markdown session report records the session setup, selected agent, selected classifications, source document inventory, selected outputs, validation warnings and prompt state.

The session report is a control artifact. It is not a generated client deliverable.

## 14. Export Session JSON

Click Export Session JSON.

Use the JSON export to save the current app state for later restore.

The JSON stores metadata and prompt text only. It does not store source document files or parsed source document contents.

## 15. Import Session JSON

Click Import Session JSON and select a previously exported session JSON file.

After import, the app restores supported session state:

- Session fields.
- Selected agent if still available.
- Valid document classifications.
- Source document inventory metadata.
- Valid selected outputs.
- Mini Workflow Brief.
- Historical controlled prompt text if present.

The app will warn you that source documents must still be re-uploaded or provided manually to ChatGPT/Codex.

## 16. Regenerate A Fresh Prompt After Import

Imported prompt text is historical.

After importing a session:

1. Review the restored fields and selections.
2. Confirm the actual source documents are still available.
3. Click Generate Controlled Prompt.
4. Use the fresh prompt for new ChatGPT/Codex work.

The fresh prompt replaces the imported historical prompt.

## 17. Avoid Generating Unselected Outputs

Before copying the prompt:

- Check the selected outputs list.
- Confirm the prompt says selected outputs only.
- Confirm unselected output names are not included as generation targets.

In ChatGPT/Codex, if the assistant starts generating extra outputs, stop it and repeat that only selected outputs must be generated.

## 18. Missing Information

Do not guess missing information.

Use `To be confirmed` for:

- Unknown dates.
- Unknown names.
- Unknown contract numbers.
- Unknown document references.
- Missing approval/sign-off information.
- Missing pricing or compliance evidence.

## 19. What Not To Do In V1

Do not use V1 to:

- Build a backend.
- Add a database.
- Add Python or Node tooling.
- Add package managers or external libraries.
- Generate DOCX files.
- Parse PDFs or DOCX files.
- Store source files in the app.
- Store sessions in localStorage.
- Generate all outputs automatically.
- Generate outputs that were not selected.
- Treat the session report as a final client document.

V1 should remain simple, static, controlled and easy to maintain.
