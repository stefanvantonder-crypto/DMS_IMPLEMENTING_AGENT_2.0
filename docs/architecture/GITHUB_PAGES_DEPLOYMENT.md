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
