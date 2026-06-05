# V1 Alignment Validation Report

## 1. Validation Date

2026-06-05

## 2. Files Checked

### Schemas

- `knowledge_base/schemas/agent.schema.json`
- `knowledge_base/schemas/output.schema.json`
- `knowledge_base/schemas/template_manifest.schema.json`

### Registries

- `engine/agent_registry.json`
- `engine/output_registry.json`
- `engine/template_manifest.json`

### Agent Definitions

- `knowledge_base/agents/proposal_preparation_agent.json`
- `knowledge_base/agents/project_governance_agent.json`
- `knowledge_base/agents/document_review_agent.json`
- `knowledge_base/agents/workflow_agent.json`

### Protected Areas Checked

- `app/`
- old root `knowledge_base/*.json`
- `templates/`
- backend/server/package/Python paths in project-controlled folders

## 3. Pass/Fail Table

| Area | Result | Evidence |
|---|---|---|
| A. Agent registry alignment | PASS | All four registry agents have matching files under `knowledge_base/agents/`. Agent IDs, `default_output_folder`, `template_group`, and `prompt_file` match the registry. Registry `enabled_in_v1: true` is not contradicted by any inactive or archived agent file. |
| B. Output registry alignment | PASS | All outputs belong to one of the four approved agents. Output IDs are unique. Output labels are unique within each agent. Every output uses `output_format: markdown`, `template_type: markdown`, `selected_output_only_rule: true`, `missing_information_placeholder: To be confirmed`, and a `.md` filename pattern. |
| C. Agent output alignment | PASS | Every `allowed_outputs` entry matches an output label in `engine/output_registry.json` for the same agent. Every `output_definitions.output_id` matches an output ID in `engine/output_registry.json`. Counts match: proposal 1, governance 15, review 3, workflow 5. |
| D. Template manifest alignment | PASS | Every output has exactly one matching template manifest entry. Every manifest entry points to a planned `.md` template path, uses `status: planned`, and uses `template_type: markdown`. No DOCX template is active in V1. |
| E. Schema clarity check | PASS AFTER CLARIFICATION | `agent.schema.json` was updated so `output_definitions` explicitly supports the richer V1.1C fields: `output_id`, `output_name`, `template_file`, `output_folder`, `enabled_in_v1`, `required_input_minimum`, `supports_partial_data`, and `missing_data_placeholder`. |
| F. V1 prohibition check | PASS | No backend folder, root `package.json`, `server.js`, or Python files exist in project-controlled paths. No app files were changed in this task. No templates or generated client documents were created. |

## 4. Schema Clarification Made

`knowledge_base/schemas/agent.schema.json` was minimally updated in the `output_definitions` section only.

Before this clarification, the schema described the older narrow shape:

- `id`
- `label`
- `category`

The V1.1C agent definition files use a richer registry-aligned shape:

- `output_id`
- `output_name`
- `template_file`
- `output_folder`
- `enabled_in_v1`
- `required_input_minimum`
- `supports_partial_data`
- `missing_data_placeholder`

`docs/architecture/AGENT_FIELD_DEFINITIONS.md` was also updated with a small explanatory section for these fields.

No broader schema changes were made.

## 5. Remaining Risks

The alignment checks passed for the V1.1D requirements. Two non-blocking schema-normalization risks remain for future strict JSON Schema validation:

1. `agent.schema.json` currently describes `allowed_outputs` as output references using a snake_case ID pattern, while V1.1C intentionally stores approved output labels in `allowed_outputs` and stores output IDs in `output_definitions.output_id`.
2. `agent.schema.json` currently describes `default_output_folder` with a trailing slash pattern, while the registries and agent definitions consistently use folder paths without trailing slashes.

These risks do not block V1.2 template creation because registry and agent alignment passed. They should be clarified before any strict automated schema-validation engine is introduced.

## 6. Go/No-Go Recommendation

GO for creating minimum Markdown templates in V1.2A.

Conditions for proceeding:

- Continue treating Markdown templates as the authoritative V1 structure.
- Do not introduce backend code, Python project code, DOCX generation, server routes, databases, or generated client documents.
- Create only templates listed in `engine/template_manifest.json`.
- Keep existing old starter UI files untouched until V1.3.
- Do not use old root `knowledge_base/*.json` files as active agent definitions.

Recommended follow-up after V1.2A:

- Add a small V1.1E or V1.2 hardening task to normalize strict schema wording for `allowed_outputs` and `default_output_folder` before introducing automated schema validation.
