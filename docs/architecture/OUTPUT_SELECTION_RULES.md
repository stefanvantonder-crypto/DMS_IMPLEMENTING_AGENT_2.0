# Output Selection Rules

V1.x must enforce selected-output-only Markdown generation. The registry authority for available outputs is `engine/output_registry.json`.

## Registry Authority

- The UI may only display outputs defined in `engine/output_registry.json`.
- Output IDs must remain stable after they are introduced.
- Output labels may be updated for readability, but IDs should not change unless a deliberate migration is approved.
- Output folders, template paths, and output formats must come from the registry instead of being hardcoded in UI logic.

## Mandatory Selection Rules

- The user must explicitly select one or more outputs.
- The app must never generate all outputs by default.
- The generated prompt must include selected outputs only.
- If no output is selected, the app must show a validation warning.
- Unselected outputs must not be generated, previewed as generated files, or included in session reports as generated outputs.
- Missing information must be marked `To be confirmed`.

## Missing Information

When required facts are unavailable, write `To be confirmed`. Do not invent:

- Client names.
- Project names.
- Approval roles.
- Dates.
- Legal references.
- Workflow stages.
- Routing decisions.
- Governance responsibilities.
- Compliance findings.

## Output Categories

Approved V1 Markdown output folders are:

- `outputs/markdown/proposals`
- `outputs/markdown/governance_documents`
- `outputs/markdown/review_reports`
- `outputs/markdown/workflow_documents`

Session reports belong in:

- `outputs/session_reports`

## Enforcement Checklist

Before generating any output:

1. Read the selected agent from `engine/agent_registry.json`.
2. Read available outputs from `engine/output_registry.json`.
3. Confirm the user selected at least one output.
4. Filter the generation prompt to selected output IDs only.
5. Confirm the selected output template paths from `engine/template_manifest.json`.
6. Confirm required inputs.
7. Mark missing inputs as `To be confirmed`.
8. Generate only the selected Markdown output files.
