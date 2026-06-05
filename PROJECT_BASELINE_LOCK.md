# Project Baseline Lock

This file defines the active baseline for the repository. It must be read before any implementation work.

## Active Baseline

- Active version: V1.x Markdown-first static prompt-control system.
- Active UI path: `app/`
- Active agent path: `knowledge_base/agents/`
- Active schemas path: `knowledge_base/schemas/`
- Active registry path: `engine/`
- Active templates path: `templates/**/*.md`
- Active prompts path: `prompts/*.md`
- Active output path: `outputs/markdown/`
- No backend is active.
- No DOCX generation is active.
- Markdown templates are the authoritative V1 structure.

## V1 Scope Lock

V1 is limited to static repository control, Markdown prompt control, selected-output-only rules, and session report export planning. Any missing information must be marked as `To be confirmed`.

## Out Of Scope For V1

- Backend applications.
- Python services.
- Flask.
- FastAPI.
- Express.
- Node frameworks.
- Databases or persistent storage layers.
- DOCX generation.
- Word template editing.
- Automatic document conversion.
- Automatic generation of all outputs.
- Generation of unselected outputs.
- Client-ready document production beyond selected Markdown drafts.

## Change Control

Any new file must map to an approved V1 requirement, roadmap item, architecture rule, prompt-control rule, or manual test category. If a file does not map to an approved requirement, do not create it.
