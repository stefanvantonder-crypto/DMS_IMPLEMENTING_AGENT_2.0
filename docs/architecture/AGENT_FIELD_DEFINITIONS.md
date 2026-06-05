# Agent Field Definitions

This document explains the V1.1A schema fields in plain language. It supports future agent definitions, output definitions, template manifests, and static UI behavior without creating agent JSON files yet.

## Architecture Control Principle

Agent, output, and template fields must live in registries or schema-controlled files later. The future static UI must read approved lists from those files instead of hardcoding agents, inputs, outputs, or template paths.

## Agent Schema Fields

| Field | Mandatory | Meaning | Future UI Use | Drift Prevention |
|---|---|---|---|---|
| `id` | Yes | Stable machine-readable agent identifier. | Used as the value behind an agent selection control. | Prevents renamed labels from breaking links between agents, outputs, and templates. |
| `name` | Yes | Formal name of the agent. | Displayed in agent detail panels and session summaries. | Keeps user-facing agent names consistent across prompts and outputs. |
| `version` | Yes | Version of the agent definition. | Shows which definition controlled a generated session. | Prevents silent changes to agent behavior. |
| `status` | Yes | Lifecycle state such as draft, active, inactive, or archived. | Lets the UI hide inactive agents later. | Prevents old or experimental agents from being treated as active. |
| `ui_label` | Yes | Short label for buttons, dropdowns, and cards. | Used for compact static UI labels. | Separates display text from stable identifiers. |
| `purpose` | Yes | Plain-language description of what the agent does. | Helps the UI explain which agent the user selected. | Prevents unclear or overlapping agent responsibilities. |
| `required_inputs` | Yes | Inputs that must be supplied or marked as `To be confirmed`. | Drives required-input prompts and missing-information checks. | Stops outputs from being generated with hidden missing facts. |
| `optional_inputs` | No | Helpful inputs that improve output quality but are not mandatory. | Can appear as optional upload or checklist items. | Keeps useful inputs visible without making them false requirements. |
| `allowed_inputs` | Yes | Full list of input types the agent may use. | Limits document-classification options in the UI. | Prevents unrelated documents from being attached to the wrong agent flow. |
| `allowed_outputs` | Yes | Output IDs the agent is allowed to generate. | Controls output checkboxes or selection cards. | Enforces selected-output-only generation and prevents cross-agent output drift. |
| `default_output_folder` | Yes | Approved folder where the agent's Markdown outputs belong. | Shows or stores the intended output path. | Prevents old output folders from being reused accidentally. |
| `template_group` | Yes | Approved template folder group for the agent. | Helps the UI or registry resolve templates later. | Keeps templates grouped by purpose instead of scattered across the repo. |
| `prompt_file` | Yes | Prompt-control Markdown file linked to the agent. | Lets the UI identify which prompt controls the session. | Prevents duplicate prompts from silently changing agent behavior. |
| `selection_rules` | Yes | Required rules controlling what the agent may generate and use. | Drives warnings and disabled states before generation. | Blocks automatic generation, unselected outputs, and accidental knowledge-base updates. |
| `input_aliases` | No | Alternate user wording mapped to approved input names. | Helps future UI search or classify common synonyms. | Keeps synonyms controlled instead of creating duplicate input types. |
| `output_definitions` | No | Short local summaries of outputs connected to the agent. | Can preview output labels before full registry lookup. | Keeps output metadata tied to stable output IDs. |
| `constraints` | Yes | Plain-language restrictions for the agent. | Can appear as session guardrails or review reminders. | Prevents V1 from expanding into backend, DOCX, database, or automatic generation work. |
| `validation_rules` | Yes | Manual or static checks needed before accepting output. | Drives future pre-generation or review checklists. | Makes quality checks explicit instead of relying on memory. |
| `document_classification_guidance` | No | Guidance for matching documents to approved input types. | Helps the UI explain classification decisions later. | Reduces inconsistent document classification across agents. |
| `missing_information_rule` | Yes | Rule requiring missing facts to be marked as `To be confirmed`. | Shown when required input is missing. | Prevents assumptions from replacing unknown facts. |

## Agent Output Definition Fields

The `output_definitions` field gives each agent a local, registry-aligned summary of the outputs it is allowed to generate. The canonical output list still belongs in `engine/output_registry.json`.

| Field | Mandatory | Meaning | Future UI Use | Drift Prevention |
|---|---|---|---|---|
| `output_id` | Yes | Stable output ID from `engine/output_registry.json`. | Connects an agent output selection to the registry entry. | Prevents output selections from drifting away from approved registry IDs. |
| `output_name` | Yes | Approved output label from `engine/output_registry.json`. | Displays the selected output name beside the agent. | Prevents renamed or duplicate output labels from appearing locally. |
| `template_file` | Yes | Planned Markdown template path for the output. | Shows the template that will be used when templates are created. | Prevents agents from pointing to unapproved template paths. |
| `output_folder` | Yes | Approved Markdown output folder for the generated file. | Shows where generated Markdown will be stored later. | Prevents old output folders from being reused accidentally. |
| `enabled_in_v1` | Yes | Whether this output is available in V1. | Allows the UI to hide or disable unavailable outputs. | Prevents later-phase outputs from becoming active too early. |
| `required_input_minimum` | Yes | Minimum inputs needed before the output can be generated or marked incomplete. | Drives future validation warnings before generation. | Prevents missing required evidence from being hidden. |
| `supports_partial_data` | Yes | Whether the output can be drafted with missing facts marked as `To be confirmed`. | Helps the UI explain partial draft behavior. | Prevents partial drafts from being mistaken for complete source truth. |
| `missing_data_placeholder` | Yes | Required placeholder text for unavailable facts. | Inserts or displays the approved missing-data wording. | Keeps all missing-information handling consistent. |

## Required Agent Selection Rules

| Rule | Mandatory | Meaning | Future UI Use | Drift Prevention |
|---|---|---|---|---|
| `generate_only_selected_outputs` | Yes | The agent may generate only outputs selected by the user. | Disables generation until at least one output is selected. | Prevents automatic generation of all possible documents. |
| `mark_missing_as_to_be_confirmed` | Yes | Missing facts must use the approved placeholder. | Shows missing-input feedback before generation. | Prevents invented client, workflow, compliance, or project facts. |
| `use_session_documents_only` | Yes | The agent may use only current session documents. | Limits document selection to the current session context. | Prevents hidden or stale documents from shaping outputs. |
| `do_not_update_knowledge_base_from_session_documents` | Yes | Session documents must not automatically update knowledge-base files. | Keeps future save/import actions separate from generation actions. | Prevents accidental mutation of controlled reference files. |

## Output Schema Fields

| Field | Mandatory | Meaning | Future UI Use | Drift Prevention |
|---|---|---|---|---|
| `id` | Yes | Stable machine-readable output identifier. | Used as the value behind output selection controls. | Keeps output selection stable even if labels change. |
| `label` | Yes | Human-readable output name. | Displayed in output cards, checkboxes, and session reports. | Keeps naming consistent across prompts and templates. |
| `agent_id` | Yes | Agent allowed to generate the output. | Filters outputs after the user selects an agent. | Prevents outputs from appearing under the wrong agent. |
| `category` | Yes | Output group such as proposal, governance, review, or workflow. | Groups outputs visually in the future UI. | Prevents output folders and document types from being mixed. |
| `description` | Yes | Plain-language description of the output. | Helps users choose the correct output. | Reduces accidental selection of the wrong document type. |
| `template_file` | Yes | Markdown template path for this output. | Lets the UI show the linked template path later. | Prevents hidden or duplicate template selection. |
| `template_type` | Yes | Template format, locked to Markdown for V1. | Can display the template format. | Prevents DOCX templates from entering V1. |
| `output_format` | Yes | Generated output format, locked to Markdown for V1. | Can display output format before generation. | Prevents DOCX or conversion output from entering V1. |
| `output_folder` | Yes | Approved Markdown folder for the generated output. | Shows where selected output files belong. | Prevents legacy output folders from being reused. |
| `enabled_in_v1` | Yes | Whether this output is available in V1. | Allows the UI to hide or disable unavailable outputs. | Keeps future outputs from becoming active too early. |
| `required_inputs` | Yes | Inputs needed for this specific output. | Drives required-input checklists. | Prevents incomplete outputs from hiding missing facts. |
| `optional_inputs` | No | Helpful inputs for better output quality. | Shows optional input suggestions. | Avoids over-requiring documents that are merely helpful. |
| `quality_rules` | Yes | Checks that the output should satisfy. | Drives future review or confirmation steps. | Keeps quality expectations explicit. |
| `missing_information_placeholder` | Yes | Required placeholder text: `To be confirmed`. | Used in generated Markdown when facts are unavailable. | Prevents inconsistent missing-data wording. |
| `suggested_file_name_pattern` | Yes | Human-readable pattern for output filenames. | Suggests filenames during export. | Keeps generated filenames predictable. |
| `selected_output_only_rule` | Yes | Rule requiring explicit output selection. | Shown beside generation controls. | Prevents unselected output generation. |
| `supports_partial_data` | Yes | Whether output may be generated with missing facts marked. | Helps the UI explain partial-output behavior. | Prevents confusing partial drafts with complete source truth. |

## Template Manifest Schema Fields

| Field | Mandatory | Meaning | Future UI Use | Drift Prevention |
|---|---|---|---|---|
| `template_id` | Yes | Stable machine-readable template identifier. | Links UI output selections to approved templates. | Prevents duplicate templates with unclear identity. |
| `template_name` | Yes | Human-readable template name. | Displays the selected template to users. | Keeps template names consistent. |
| `template_file` | Yes | Approved Markdown template path. | Shows the exact template path before generation. | Prevents templates from being pulled from old or root folders. |
| `template_type` | Yes | Template format, locked to Markdown for V1. | Displays the template format. | Prevents Word templates from entering V1. |
| `output_id` | Yes | Output connected to this template. | Resolves which template belongs to a selected output. | Prevents template/output mismatches. |
| `agent_id` | Yes | Agent connected to this template. | Filters templates after agent selection. | Prevents cross-agent template use. |
| `template_group` | Yes | Approved folder group for the template. | Groups templates in future management screens. | Keeps proposal, governance, review, and workflow templates separated. |
| `version` | Yes | Template manifest version. | Shows which template version controlled an output. | Prevents silent template changes. |
| `status` | Yes | Lifecycle state such as draft, active, inactive, or archived. | Allows inactive templates to be hidden later. | Prevents old templates from being used accidentally. |
| `required_sections` | Yes | Markdown sections that must appear in the template. | Supports future template completeness checks. | Prevents incomplete templates from being treated as official. |
| `required_tables` | No | Markdown tables that must appear when relevant. | Supports future table checks for structured outputs. | Prevents critical tables from being omitted silently. |
| `quality_checks` | Yes | Manual checks for template quality and V1 compliance. | Drives review checklists before activation. | Keeps template approval consistent. |
| `missing_information_rule` | Yes | Rule requiring missing data to use `To be confirmed`. | Helps generation and review screens explain missing fields. | Prevents assumptions from being inserted into templates. |

## Planned Agents

### Proposal Preparation Agent

Supports proposal-related Markdown outputs when selected. It should rely on controlled input classifications such as client TOR/RFQ/RFP, bid specifications, proposal examples, DMS manuals, pricing schedules, reference letters, and company profile material.

### Project Governance Agent

Supports governance Markdown outputs when selected. It should rely on controlled inputs such as approved proposals, client TORs, DMS system documentation, project charter examples, implementation requirements, policies, frameworks, legislation, and standards.

### Document Review Agent

Supports review Markdown outputs when selected. It should rely on controlled review inputs such as the document under review, GIAMA, FIDPM or LGFIDPM, C-AMP and U-AMP guidance, GRAP, IFRS, mSCOA, PFMA or MFMA, PMBOK 7, ISO 9001, TOGAF, client policies, ad hoc review requirements, and other custom review documents.

### Workflow Agent

Supports workflow Markdown outputs when selected. It should rely on controlled inputs such as client TORs, approved proposals, business process descriptions, SOPs, policies, existing workflow examples, interview notes, compliance requirements, and Mini Workflow Brief fields.

## Field Control Rule

Do not hardcode agents, input types, output types, template groups, template paths, or output folders in future UI code when those values belong in schemas, reference lists, registries, or manifests. This keeps the V1 architecture stable and lets non-programmers maintain controlled lists without editing UI code.
