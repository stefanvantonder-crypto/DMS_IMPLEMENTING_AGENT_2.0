# DMS Implementing Agent V1 Quick Start Guide

## Quick Start

1. Open the app.
   - Local: open `app/index.html` in your browser.
   - GitHub Pages: open `https://stefanvantonder-crypto.github.io/DMS_IMPLEMENTING_AGENT_2.0/`.

2. Complete the session fields.
   - Add the session name, client, project, contract/bid number, prepared by and notes where available.

3. Select one agent.
   - Proposal Preparation Agent.
   - Project Governance Agent.
   - Document Review Agent.
   - Workflow Agent.

4. Add source document inventory entries.
   - Record document name, classification, type, date, reference, availability and notes.
   - Remember: this records metadata only, not the actual source files.

5. Tick document classifications.
   - Select the classifications that match the actual source documents you will provide to ChatGPT/Codex.

6. Select outputs.
   - Tick only the outputs you want.
   - Do not select outputs that should not be generated.

7. Complete the Mini Workflow Brief if using the Workflow Agent.
   - Add process description, rules, roles and expected outcome.

8. Click Generate Controlled Prompt.
   - Review the prompt.
   - Confirm it includes selected outputs only.
   - Confirm missing information is marked as `To be confirmed`.

9. Click Copy Prompt.
   - Paste the prompt into ChatGPT/Codex.

10. Upload or provide the actual source documents to ChatGPT/Codex.
    - The app does not upload, store or parse source documents.

11. Download the Markdown session report.
    - Click Download Session Report (.md).

12. Export the session JSON.
    - Click Export Session JSON.
    - Keep this JSON if you want to restore the session later.

13. Import a previous session when needed.
    - Click Import Session JSON.
    - Select a previously exported JSON file.
    - Click Generate Controlled Prompt again to create a fresh prompt from the restored state.

## V1 Reminder

V1 is a static Markdown-first prompt-control app. It does not use a backend, database, localStorage, Python, DOCX generation, file parsing or automatic document generation.
