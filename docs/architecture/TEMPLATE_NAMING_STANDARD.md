# Template Naming Standard

Markdown templates are authoritative in V1.x. DOCX templates are not active in V1.x.

## Folder Standard

Templates must live under:

```text
templates/proposal_templates/
templates/project_governance_templates/
templates/review_templates/
templates/workflow_templates/
```

## File Naming Standard

Template files use uppercase descriptive names ending in `_TEMPLATE.md`.

Examples:

```text
PROPOSAL_TEMPLATE.md
PROJECT_CHARTER_TEMPLATE.md
GAP_ANALYSIS_REPORT_TEMPLATE.md
WORKFLOW_DESIGN_DOCUMENT_TEMPLATE.md
```

## Manifest Path Rule

- Template paths must match `engine/template_manifest.json`.
- Each output in `engine/output_registry.json` must have a matching template manifest entry.
- Template entries may be marked `planned` before the actual Markdown template files are created and `active` only after the file exists and passes V1 template audit.
- Use one planned template per output type.
- Keep template IDs and paths stable once referenced by the manifest.
- Only templates listed in `engine/template_manifest.json` are active in V1.
- Unlisted templates are treated as reference-only or review-later.
- The UI must not scan the `templates/` folder and use unlisted templates.
- The UI must render and select templates through `engine/output_registry.json` and `engine/template_manifest.json` only.

## V1.x Rules

- Use Markdown templates only.
- Do not create Word templates in V1.x.
- Do not create DOCX templates in V1.x.
- Do not create generated client documents in template folders.
- Missing values in templates must use `To be confirmed`.

## Future Versions

- V2 may later introduce Markdown-to-DOCX conversion after Markdown generation is stable.
- V3 may later introduce strict DOCX template population after V2 has been approved and tested.
