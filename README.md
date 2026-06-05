# DMS Implementing Agent

The DMS Implementing Agent is a local, Markdown-first prompt-control system for supporting DMS and CIPMS implementation work. It helps structure controlled prompts, reference knowledge, selected Markdown outputs, workflow briefs, governance documents, proposal support material, review reports, and session reports.

Version 1.x is intentionally static and simple. It uses only folders, Markdown files, static HTML/CSS/JavaScript when the UI shell is later approved, and lightweight registries when those registries are later approved. No backend, database, Python service, DOCX generation, or automatic document generation is active in V1.

## Four Agents

The repository is organized around four planned agent areas:

1. Proposal Preparation Agent
2. Project Governance Agent
3. Document Review Agent
4. Workflow Agent

In V1, these agents are controlled by Markdown prompts, future registry files, and future Markdown templates. Missing facts must be marked as `To be confirmed`.

## Markdown-First Direction

Markdown templates are the authoritative V1 structure. The system must generate only the outputs selected by the user, and it must not generate unselected documents automatically.

V1 focuses on:

- Repository control and scope locking.
- Markdown prompt control.
- Selected-output-only generation rules.
- Session report export planning.
- Beginner-friendly static files.
- Clear separation between agents, schemas, registries, templates, prompts, and outputs.

## Repository Structure

```text
app/
knowledge_base/agents/
knowledge_base/schemas/
knowledge_base/reference_lists/
engine/
templates/proposal_templates/
templates/project_governance_templates/
templates/review_templates/
templates/workflow_templates/
prompts/
outputs/markdown/proposals/
outputs/markdown/governance_documents/
outputs/markdown/review_reports/
outputs/markdown/workflow_documents/
outputs/session_reports/
docs/architecture/
docs/decisions/
```

## How To Use In V1

1. Read `PROJECT_BASELINE_LOCK.md` before making changes.
2. Read `CODEX_OPERATING_RULES.md` and `AGENTS.md` before asking Codex to edit files.
3. Use files in `prompts/` to control prompt generation.
4. Save generated Markdown outputs only in the approved output folders.
5. Mark unknown or missing information as `To be confirmed`.

## Development Control

Future development is controlled by:

- `PROJECT_BASELINE_LOCK.md` for active paths and prohibited scope.
- `VERSION_ROADMAP.md` for staged release boundaries.
- `CODEX_OPERATING_RULES.md` and `AGENTS.md` for implementation behavior.
- `docs/architecture/` for architecture and output-selection rules.
- `TEST_CASES.md` for manual validation categories.

Do not advance to backend, DOCX, database, or automatic document-generation work until the relevant roadmap phase is explicitly approved.
