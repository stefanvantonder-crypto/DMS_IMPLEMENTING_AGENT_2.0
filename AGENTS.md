# AGENTS.md

## Purpose

This repository supports the DMS Implementing Agent: a local, Markdown-first prompt-control system for DMS and CIPMS implementation support.

## Active Version

The active version is V1.x. The system is static, Markdown-first, and repository-controlled.

## Mandatory Rules

- No backend code in V1.
- No Python in V1.
- No server routes in V1.
- No Flask in V1.
- No FastAPI in V1.
- No Express in V1.
- No Node frameworks in V1.
- No DOCX generation in V1.
- No Word template editing in V1.
- No database or storage layers in V1.
- No automatic generation of all outputs.
- No unselected output generation.
- No replacing missing facts with assumptions.
- No hardcoded agent or output lists in UI when they belong in registries.
- No files that are not mapped to an approved V1 requirement.

## Approved V1 Paths

- UI path: `app/`
- Agent path: `knowledge_base/agents/`
- Schemas path: `knowledge_base/schemas/`
- Registry path: `engine/`
- Templates path: `templates/**/*.md`
- Prompts path: `prompts/*.md`
- Markdown output path: `outputs/markdown/`
- Session reports path: `outputs/session_reports/`

## Operating Principles

- Keep everything beginner-friendly.
- Use Markdown templates as the authoritative V1 structure.
- Use static HTML/CSS/JavaScript only when the approved roadmap phase reaches UI work.
- Generate selected outputs only.
- Mark missing required information as `To be confirmed`.
- Explain file locations and implementation steps clearly.

## Startup Prompt

For future sessions, use a short startup prompt:

```text
Read and follow:
- README.md
- PROJECT_BASELINE_LOCK.md
- CODEX_OPERATING_RULES.md
- docs/architecture/V1_ARCHITECTURE.md
- docs/architecture/OUTPUT_SELECTION_RULES.md

Important:
- Keep everything beginner friendly.
- Use HTML/CSS/Vanilla JS/Markdown only in V1.
- No frameworks.
- No backend.
- No DOCX generation.
- Generate selected outputs only.
- Mark missing information as To be confirmed.

Current task:
[INSERT TASK HERE]
```
