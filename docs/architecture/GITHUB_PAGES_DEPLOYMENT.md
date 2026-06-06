# GitHub Pages Deployment

## Repository

Repository name: `DMS_IMPLEMENTING_AGENT_2.0`

## Deployment Model

GitHub Pages serves the repository root. The root `index.html` is a static redirect page that sends users to `app/index.html`.

The V1 app remains static only. It does not require a backend, server routes, Python, Node, DOCX generation, database, build tooling, or external libraries.

## GitHub Pages Setup Steps

1. Go to the repository on GitHub.
2. Open `Settings`.
3. Open `Pages`.
4. Set `Source` to `Deploy from a branch`.
5. Set `Branch` to `main`.
6. Set `Folder` to `/root`.
7. Click `Save`.

## Expected App URL

After GitHub Pages finishes publishing, the expected app URL is:

```text
https://stefanvantonder-crypto.github.io/DMS_IMPLEMENTING_AGENT_2.0/
```

The root URL should redirect to:

```text
https://stefanvantonder-crypto.github.io/DMS_IMPLEMENTING_AGENT_2.0/app/index.html
```

## Static V1 Confirmation

- V1 is static HTML, CSS, JavaScript, JSON and Markdown only.
- No backend is required for GitHub Pages deployment.
- No DOCX output is generated in V1.
- No generated client documents are created by deployment.
- Browser local fallback may appear if repository JSON cannot be loaded by the browser.

## Path Behaviour

The static app is located in `app/`. Its repository data paths are relative to `app/index.html`:

- `../engine/agent_registry.json`
- `../engine/output_registry.json`
- `../engine/template_manifest.json`
- `../knowledge_base/agents/*.json`

These paths are compatible with GitHub Pages when the site is served from:

```text
/DMS_IMPLEMENTING_AGENT_2.0/app/index.html
```

No registry path changes are required for V1.8.

## Manual Post-Deployment Test Checklist

- Confirm the app loads from the expected GitHub Pages URL.
- Confirm four agents display.
- Confirm Project Governance Agent shows 15 outputs.
- Confirm controlled prompt generation works.
- Confirm session report download works.
- Confirm no DOCX output is generated.
- Confirm no generated client documents are created in the repository.

## V1.11 Live Validation Checklist

Use this checklist after GitHub Pages has published the latest `main` branch.

Expected URL:

```text
https://stefanvantonder-crypto.github.io/DMS_IMPLEMENTING_AGENT_2.0/
```

Validation steps:

- Confirm the GitHub Pages URL opens.
- Confirm the root redirect works.
- Confirm `app/index.html` loads.
- Confirm four agents display.
- Confirm Project Governance Agent shows 15 outputs.
- Confirm Project Charter prompt generation works.
- Confirm session report download works.
- Confirm Session JSON exports.
- Confirm Session JSON imports.
- Confirm no DOCX generation appears.
- Confirm no backend or server is required.

Record results:

```text
Validation date:
Validated by:
GitHub Pages URL status:
Root redirect status:
app/index.html status:
Agent registry status:
Project Governance output count:
Project Charter prompt test:
Session report download:
Session JSON export:
Session JSON import:
DOCX generation absent:
Backend/server absent:
Notes:
```

If the GitHub Pages URL returns 404, confirm that Pages is enabled, the source branch is `main`, the folder is `/root`, and the site has finished publishing.

## V1.14 Live Verification Result

Verification date: 2026-06-06

URL tested:

```text
https://stefanvantonder-crypto.github.io/DMS_IMPLEMENTING_AGENT_2.0/
```

Result: Go for live V1 static prompt-control use.

Summary:

- Root URL resolved to `app/index.html`.
- `DMS Implementing Agent 2.0` loaded in the live browser.
- All four V1 agents displayed.
- Output counts matched the approved V1 registries: Proposal 1, Governance 15, Review 3 and Workflow 5.
- Key template paths displayed correctly for Project Charter, Risk Management Plan, Gap Analysis Report and Workflow Design Document.
- Project Governance Agent plus Project Charter only generated a controlled prompt with no-backend/no-server wording, no-DOCX wording, `To be confirmed`, source inventory entries and selected-output-only behavior.
- No backend, server upload, DOCX generation, PDF/DOCX parsing, source file upload, database, `localStorage` or `sessionStorage` workflow was exposed.

See `docs/architecture/V1_14_GITHUB_PAGES_LIVE_VERIFICATION.md` for the detailed pass/fail table and automation limitation notes.
