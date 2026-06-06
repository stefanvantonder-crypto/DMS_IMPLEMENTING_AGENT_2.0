# V1 Architecture

V1 is a Markdown-first static prompt-control system. It is designed to stay local, readable, and maintainable without a backend, database, DOCX generation, or framework dependency.

## Core Principle

The repository controls prompts, future registries, future schemas, future Markdown templates, and selected Markdown outputs. Markdown is the authoritative document structure for V1.

## Main Areas

```text
app/
knowledge_base/
engine/
templates/
prompts/
outputs/
docs/
```

## Area Responsibilities

`app/` contains the approved V1 static UI shell.

`knowledge_base/agents/` is reserved for future agent definitions.

`knowledge_base/schemas/` is reserved for future input and output schema definitions.

`knowledge_base/reference_lists/` is reserved for future controlled lists such as document types, sectors, output types, and workflow categories.

`engine/` is reserved for future static registries and manifest files. It must not contain backend routes or executable server logic in V1.

`templates/` is reserved for Markdown templates only.

`prompts/` stores Markdown prompt-control files.

`outputs/markdown/` stores selected generated Markdown outputs.

`outputs/session_reports/` stores session reports when that phase is approved.

`docs/architecture/` stores system architecture and standards.

`docs/decisions/` stores future architecture decision records.

## V1 Execution Model

The V1 workflow is controlled by prompts and future static registry files:

1. Select an agent.
2. Classify the work request.
3. Select one or more outputs.
4. Confirm required inputs.
5. Mark missing facts as `To be confirmed`.
6. Generate selected Markdown outputs only.
7. Export a session report when V1.5 is approved.

## GitHub Pages Deployment

V1.8 may be served by GitHub Pages from the repository root. The root `index.html` is a static redirect only and points to `app/index.html`.

The app remains static. It loads repository JSON using paths relative to `app/index.html`, including `../engine/agent_registry.json`, `../engine/output_registry.json`, `../engine/template_manifest.json`, and `../knowledge_base/agents/*.json`.

No backend, Python, Node, package manager, server route, DOCX generation or build tooling is part of the V1 GitHub Pages architecture.

## Source Document Session Inventory

V1.9 includes a static Source Document Inventory Panel. It records source document metadata for the current browser session only and supplements the document classification checklist.

The inventory does not upload, parse, extract, store or process source files. Session source documents must be uploaded manually with the generated prompt and must not permanently update the knowledge base, registries, schemas, templates or system rules.

## Explicit Non-Architecture

V1 has no backend, no API, no server routes, no database, no DOCX generation, no document conversion pipeline, and no automatic generation of all possible outputs.
