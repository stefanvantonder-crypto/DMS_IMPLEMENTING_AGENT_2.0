# V2.0 DOCX Template Control Model

## 1. Why DOCX Template Control Is Difficult

DOCX export is not only a file-generation problem. It is also a template-governance, formatting-fidelity, numbering, table, image, header/footer and review problem.

Client Word templates often contain:

- Strict heading numbering.
- Complex paragraph and table styles.
- Header and footer rules.
- Section breaks.
- Mixed fonts and complex-script settings.
- Embedded images, diagrams, models and annexures.
- Placeholder rules that are not obvious from plain text alone.

## 2. Why DOCX Generation Failed Earlier

Earlier DOCX direction failed because automation ideas were introduced before the system had:

- Stable Markdown output capture.
- Stable review controls.
- Stable selected-output-only protections.
- A governed template model.
- Agreed backend gates.
- Visual fidelity review checkpoints.

The result was premature architecture growth and loss of control.

## 3. Required Template Control Principles

- Keep Markdown content control separate from Word styling control.
- Treat the client Word template as a governed artifact.
- Do not assume text conversion preserves Word fidelity.
- Review every future DOCX path visually before claiming success.
- Do not drop images, diagrams, models, annexures or formatting rules silently.
- Keep selected-output-only behaviour protected at every layer.

## 4. Template Governance Model

### Template Owner

- Named business or document-control owner responsible for the approved template.

### Template Version

- Every template must have an explicit version and change history.

### Approved Styles

- Approved paragraph, heading, table, caption and list styles must be documented.

### Required Placeholders

- Required placeholders must be listed explicitly for controlled population later.

### Required Sections

- Mandatory sections must be defined per output type.

### Optional Sections

- Optional sections must be documented so they are not invented or omitted casually.

### Visual Asset Handling

- Images, diagrams, models and branded visuals must have documented handling rules.

### Table Handling

- Tables must preserve structure, headings, column logic and styling expectations where possible.

### Review Checklist

- Every template must have a review checklist covering structure, styles, numbering, header/footer, tables, visuals and placeholders.

## 5. Proposed Template Manifest Extension For Future V2 Planning

Possible future manifest fields for planning only:

- `template_owner`
- `template_version`
- `word_template_path`
- `required_styles`
- `required_sections`
- `optional_sections`
- `placeholder_map`
- `table_rules`
- `visual_asset_rules`
- `review_gate_required`
- `fidelity_status`

These fields are planning placeholders only. No manifest implementation is approved in V2.0.

## 6. DOCX Formatting Rules

- Keep Word template as source of styling.
- Do not rebuild styles from scratch unless approved.
- Do not simplify client templates.
- Do not drop visuals/graphics/models.
- Do not claim DOCX fidelity without visual review.

Mandatory formatting-control note:

The user has mandatory Word style and formatting requirements for DMS templates, including Calibri/Arial/Times New Roman complex script settings, dark blue numbered heading styles, Title/Subtitle settings and Header/Footer tab settings. V2 planning must treat these as strict controls for any future DOCX generation or template population, but no style implementation is allowed in V2.0.

## 7. Placeholder Strategy

### Section-Level Placeholders

- Map placeholders to controlled sections rather than free text only.

### Output-Specific Content Blocks

- Define content blocks per selected output type.

### Tables And Annexures

- Treat structured tables and annexures as governed export elements, not plain text afterthoughts.

### Images And Diagrams

- Define placement, caption, source and review rules before any automated export is approved.

## 8. Review Gates Before DOCX Generation Is Allowed

- Markdown output schema is hardened.
- Review and approval controls exist for Markdown outputs.
- Template governance is documented.
- A visual fidelity checklist exists.
- Selected-output-only behaviour is protected through the proposed export path.
- Binary file handling rules are documented.
- A small proof-of-concept scope is approved explicitly.
- V1 stability risk is accepted consciously before any automation trial.

