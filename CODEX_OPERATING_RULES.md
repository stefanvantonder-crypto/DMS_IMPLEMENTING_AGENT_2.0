# Codex Operating Rules

These rules govern all Codex work in this repository.

## Active Scope

The active scope is V1.x: a Markdown-first static prompt-control system. Keep all implementation beginner-friendly and maintainable for non-programmers.

## Prohibited In V1

Codex must not add:

- Backend code in V1.
- Python in V1.
- Server routes in V1.
- DOCX generation in V1.
- Word template editing in V1.
- Database or storage layers in V1.
- Automatic generation of all outputs.
- Unselected output generation.
- Assumptions in place of missing facts.
- Hardcoded agent or output lists in UI when they belong in registries.
- Files not mapped to an approved V1 requirement.

## Required Behavior

- Read `PROJECT_BASELINE_LOCK.md` before making structural changes.
- Keep output generation selected-output-only.
- Mark missing information as `To be confirmed`.
- Use Markdown as the authoritative V1 template format.
- Keep files readable and editable.
- Keep static UI work out of scope until V1.3 is explicitly approved.
- Keep prompt generation out of scope until V1.4 is explicitly approved.

## File Creation Rule

Before creating a file, confirm that it belongs to the V1 baseline, roadmap, architecture documentation, prompt-control files, or manual test files requested by the project owner.
