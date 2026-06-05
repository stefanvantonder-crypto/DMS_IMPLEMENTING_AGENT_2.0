# Existing File Inventory

Date: 2026-06-05

Scope: Phase 0A existing file inventory and classification only.

This document records files and folders that existed in the local project folder after the Phase 0 repository-control files were created. No files were deleted, moved, or edited as part of this inventory except this document.

## 1. Current Folder Tree Summary

```text
.
├── app/
├── docs/
│   ├── architecture/
│   └── decisions/
├── engine/
├── knowledge_base/
│   ├── agents/
│   ├── reference_lists/
│   └── schemas/
├── outputs/
│   ├── governance_documents/
│   ├── markdown/
│   │   ├── governance_documents/
│   │   ├── proposals/
│   │   ├── review_reports/
│   │   └── workflow_documents/
│   ├── proposals/
│   ├── review_reports/
│   ├── session_reports/
│   └── workflow_designs/
├── prompts/
├── source_documents/
│   ├── DMS/
│   ├── examples/
│   ├── frameworks/
│   ├── legislation/
│   ├── proposals/
│   ├── TORs/
│   └── workflow_examples/
├── templates/
│   ├── project_governance_templates/
│   ├── proposal_templates/
│   ├── review_templates/
│   └── workflow_templates/
└── workflow_templates/
```

Notable root files currently present:

- `README.md`
- `PROJECT_BASELINE_LOCK.md`
- `VERSION_ROADMAP.md`
- `CODEX_OPERATING_RULES.md`
- `AGENTS.md`
- `CHANGELOG.md`
- `TEST_CASES.md`
- `.gitignore`
- `00_START_HERE.html`
- `PFMA.pdf`

## 2. Pre-Existing Files Detected

The following files appear to have existed before Phase 0 or are outside the newly locked Phase 0 control set.

### Starter UI

- `app/index.html`
- `app/script.js`
- `app/style.css`
- `app/config.json`

These files appear to be an earlier local starter UI. They were not modified during Phase 0A.

### Old Agent JSON Files

- `knowledge_base/01_DMS_PROPOSAL_AGENT_CORE.json`
- `knowledge_base/02_DMS_PROJECT_GOVERNANCE_AGENT_CORE.json`
- `knowledge_base/03_DMS_DOCUMENT_REVIEW_AGENT_CORE.json`
- `knowledge_base/04_DMS_WORKFLOW_AGENT_CORE.json`
- `knowledge_base/DMS_MASTER_INDEX.json`

These files sit at the root of `knowledge_base/`, not in the Phase 0 locked path `knowledge_base/agents/`. They may be useful later, but they should not be treated as approved V1.1 schemas until reviewed.

### Old Templates

- `templates/project_governance_templates/PROJECT_CHARTER_TEMPLATE.md`
- `templates/proposal_templates/PROPOSAL_COMPLIANCE_MATRIX_TEMPLATE.md`
- `templates/review_templates/DOCUMENT_GAP_ANALYSIS_TEMPLATE.md`
- `templates/workflow_templates/INTOUCH_WORKFLOW_DESIGN_TEMPLATE.md`

These files are Markdown and are in approved template folders, but they predate the V1.2 template manifest phase. They should be reviewed later before being treated as official V1 templates.

### Old Prompts

- `prompts/01_proposal_agent_prompts.md`
- `prompts/02_project_governance_agent_prompts.md`
- `prompts/03_document_review_agent_prompts.md`
- `prompts/04_workflow_agent_prompts.md`
- `prompts/master_prompt_library.md`
- `prompts/TEST_01_WORKFLOW_AGENT_PROMPT.md`

These may be useful references, but they are not the Phase 0 prompt-control files created for the baseline.

### Phase 0 Prompt-Control Files

- `prompts/system_rules.md`
- `prompts/generation_prompt.md`
- `prompts/review_prompt.md`
- `prompts/workflow_prompt.md`

These are approved Phase 0 prompt-control files.

### Old Output Folders

- `outputs/governance_documents/`
- `outputs/proposals/`
- `outputs/review_reports/`
- `outputs/workflow_designs/`

These appear to be older output paths. No generated output files were detected in them during this inventory.

### Approved V1 Output Folders

- `outputs/markdown/proposals/`
- `outputs/markdown/governance_documents/`
- `outputs/markdown/review_reports/`
- `outputs/markdown/workflow_documents/`
- `outputs/session_reports/`

These are approved Phase 0 folders and currently contain only `.gitkeep` placeholders.

### Source Documents

Notable source-document files currently present include:

- `PFMA.pdf`
- `source_documents/DMS/DMS - System Architecture.docx`
- `source_documents/DMS/DMS Architecture.pptm`
- `source_documents/DMS/User Manual DMS Asset Management System.pdf`
- `source_documents/DMS/User Manual InTouch Communications Platform.pdf`
- `source_documents/DMS/User Manual Velocity Project Management System.pdf`
- `source_documents/examples/project_governance_examples/C-AMP review.doc`
- `source_documents/examples/project_governance_examples/Change Management example.docx`
- `source_documents/examples/project_governance_examples/Project Charter Example.docx`
- `source_documents/examples/project_governance_examples/Risk Plan example.docx`
- `source_documents/examples/project_governance_examples/Test and Go-Live example.docx`
- `source_documents/examples/project_governance_examples/Workflow design example.docx`
- `source_documents/examples/proposal_examples/FREE STATE GAMBLING, LIQUOR AND TOURISM AUTHORITY AUTOMATED ASSET MANAGEMENT SYSTEM.pptx`
- `source_documents/frameworks/4.-NIAMM-Maintenance-Planning-Guidelines (1).pdf`
- `source_documents/frameworks/Asset management framework for national and provincial departments.pdf`
- `source_documents/frameworks/Condition-Assessment-Guidelines-August-2024.pdf`
- `source_documents/frameworks/fidpm manual.pdf`
- `source_documents/frameworks/Guideline for C-AMP (2008-10-20) Version 1 for distribution.pdf`
- `source_documents/frameworks/Review Guideline for U-AMP (Feb 2016) Version 2 2017-02-06(3).doc`
- `source_documents/frameworks/Service Delivery Standards.doc`
- `source_documents/frameworks/TOGAF.pdf`
- `source_documents/legislation/GIAMA Act 2007.pdf`
- `source_documents/legislation/GRAP-1-Presentation-of-Financial-Statements-1-April-2025.pdf`
- `source_documents/legislation/GRAP-103-Heritage-Assets-1-April-2025.pdf`
- `source_documents/legislation/GRAP-13-Leases-1-April-2025.pdf`
- `source_documents/legislation/GRAP-16-Investment-Property-1-April-2025.pdf`
- `source_documents/legislation/GRAP-17-Property-Plant-Equipment-1-April-2025.pdf`
- `source_documents/legislation/GRAP-18-Segment-Reporting-1-April-2025.pdf`
- `source_documents/legislation/GRAP-26-Impairment-of-Cash-generating-assets-1-April-2025.pdf`
- `source_documents/legislation/GRAP-31-Intangible-Assets-1-April-2025.pdf`
- `source_documents/legislation/MFMA.pdf`
- `source_documents/legislation/Modified Cash Standard.pdf`
- `source_documents/legislation/Module-2_GRAP-and-MSCOA_Manual.pdf`
- `source_documents/proposals/FREE STATE GAMBLING, LIQUOR AND TOURISM AUTHORITY AUTOMATED ASSET MANAGEMENT SYSTEM.pptx`
- `source_documents/TORs/INVITATION FOR PROPOSAL-AUTOMATED ASSET MANAGEMENT SYSTEM-APRIL 2026-UPDATED.doc`
- `source_documents/workflow_examples/CBP -Workflow design DMS -  InTouch logic (004).docx`

These are source and reference materials. They must not be treated as V1 templates or generated outputs.

### Backend-Like, Python, DOCX Generation, ZIP, Or Generated Output Files

- Backend-like files detected: none.
- Python files detected: none.
- ZIP files detected: none.
- DOCX files detected: source/reference DOCX files only, under `source_documents/`.
- DOC files detected: source/reference DOC files only, under `source_documents/`.
- Generated output files detected: none in the old output folders or approved V1 output folders.

## 3. Classification Table

| Path | Classification | Reason |
|---|---|---|
| `README.md` | DO NOT TOUCH | Approved Phase 0 root control file. |
| `PROJECT_BASELINE_LOCK.md` | DO NOT TOUCH | Approved Phase 0 baseline lock. |
| `VERSION_ROADMAP.md` | DO NOT TOUCH | Approved Phase 0 roadmap. |
| `CODEX_OPERATING_RULES.md` | DO NOT TOUCH | Approved Phase 0 operating rules. |
| `AGENTS.md` | DO NOT TOUCH | Approved Phase 0 agent instructions. |
| `CHANGELOG.md` | DO NOT TOUCH | Approved Phase 0 control file. |
| `TEST_CASES.md` | DO NOT TOUCH | Approved Phase 0 manual test categories. |
| `.gitignore` | DO NOT TOUCH | Approved Phase 0 ignore rules. |
| `docs/architecture/` | DO NOT TOUCH | Required locked architecture folder. |
| `docs/decisions/` | DO NOT TOUCH | Required locked decision-record folder. |
| `engine/` | DO NOT TOUCH | Required locked future registry path. |
| `knowledge_base/agents/` | DO NOT TOUCH | Required locked future agent path. |
| `knowledge_base/schemas/` | DO NOT TOUCH | Required locked future schema path. |
| `knowledge_base/reference_lists/` | DO NOT TOUCH | Required locked future reference-list path. |
| `outputs/markdown/` | DO NOT TOUCH | Required locked V1 Markdown output path. |
| `outputs/session_reports/` | DO NOT TOUCH | Required locked future session-report path. |
| `prompts/system_rules.md` | DO NOT TOUCH | Approved Phase 0 prompt-control file. |
| `prompts/generation_prompt.md` | DO NOT TOUCH | Approved Phase 0 prompt-control file. |
| `prompts/review_prompt.md` | DO NOT TOUCH | Approved Phase 0 prompt-control file. |
| `prompts/workflow_prompt.md` | DO NOT TOUCH | Approved Phase 0 prompt-control file. |
| `app/` | REVIEW LATER | Active V1 UI path, but current files are old starter UI and should not guide V1.1. |
| `app/index.html` | REVIEW LATER | Pre-existing UI file; do not use until approved V1.3 UI phase. |
| `app/script.js` | REVIEW LATER | Pre-existing UI logic; do not use or modify before V1.3. |
| `app/style.css` | REVIEW LATER | Pre-existing styling; do not use or modify before V1.3. |
| `app/config.json` | REVIEW LATER | Pre-existing UI configuration; may conflict with future registries. |
| `00_START_HERE.html` | ARCHIVE | Legacy root starter page outside locked V1 UI path. |
| `PFMA.pdf` | REVIEW LATER | Useful reference document, but should be moved or referenced only under a later source-document control decision. |
| `knowledge_base/*.json` | REVIEW LATER | Old agent JSON files are outside `knowledge_base/agents/` and may not match the V1.1 schema. |
| `templates/**/*.md` | REVIEW LATER | Markdown files are in approved folders but predate V1.2 manifest and naming review. |
| `prompts/01_*_agent_prompts.md` | REVIEW LATER | Old prompt files may cause prompt drift if mixed with Phase 0 prompt-control files. |
| `prompts/master_prompt_library.md` | REVIEW LATER | Old prompt library may be useful but should be consolidated later. |
| `prompts/TEST_01_WORKFLOW_AGENT_PROMPT.md` | REVIEW LATER | Test prompt may be useful as evidence, but it is not a baseline control prompt. |
| `source_documents/` | REVIEW LATER | Source/reference materials are useful but not part of V1 template authority. |
| `source_documents/**/*.doc` | REVIEW LATER | Reference documents only; not V1 templates. |
| `source_documents/**/*.docx` | REVIEW LATER | Reference documents only; not DOCX generation templates. |
| `source_documents/**/*.pdf` | REVIEW LATER | Reference documents only; may inform future selected outputs. |
| `source_documents/**/*.pptx` | REVIEW LATER | Reference examples only; not generated outputs. |
| `source_documents/**/*.pptm` | REVIEW LATER | Reference material only; not runtime or generation logic. |
| `outputs/governance_documents/` | ARCHIVE | Legacy output path outside approved `outputs/markdown/` structure. |
| `outputs/proposals/` | ARCHIVE | Legacy output path outside approved `outputs/markdown/` structure. |
| `outputs/review_reports/` | ARCHIVE | Legacy output path outside approved `outputs/markdown/` structure. |
| `outputs/workflow_designs/` | ARCHIVE | Legacy output path outside approved `outputs/markdown/` structure. |
| `workflow_templates/` | ARCHIVE | Legacy duplicate root folder outside approved `templates/workflow_templates/` path. |
| `.vscode/` | REVIEW LATER | Local editor folder; not part of V1 architecture. |
| `desktop.ini` files | ARCHIVE | OS metadata files; not project source. |

## 4. Risk Assessment

### Old UI Conflicting With Planned V1 UI

The current `app/` files are a pre-existing starter UI. Because `app/` is the approved future UI path, these files could be mistaken for the V1.3 UI baseline. They should not be modified during V1.1 or V1.2.

### Old Agent JSON Not Matching New Schema

The existing agent JSON files are located at the root of `knowledge_base/`, while the locked V1 path is `knowledge_base/agents/`. They may contain useful agent content, but they should not be treated as approved V1.1 definitions until mapped to the new field model.

### Old Templates Not Fully Controlled

The existing templates are Markdown and live in approved folders, but they predate the V1.2 template manifest and naming standard. They should be reviewed before use to avoid duplicate, incomplete, or non-standard templates.

### Old Outputs Being Mistaken For Source Files

Legacy output folders exist directly under `outputs/`. Even though no generated output files were detected, these folders could confuse future generation paths. The approved path is `outputs/markdown/`.

### Old DOCX Files Being Treated As Templates

Several DOC/DOCX files exist under `source_documents/`. They are reference files only. They must not be treated as DOCX templates or used to justify DOCX generation in V1.

### Duplicate Prompts Causing Prompt Drift

Old agent prompt files and a master prompt library exist beside the new Phase 0 prompt-control files. If mixed without review, they could cause inconsistent agent behavior and output rules.

### Root Reference Files Outside Source Folder

`PFMA.pdf` is at the repository root. It may be useful, but root-level source documents can blur the boundary between control files and reference material.

## 5. Recommendation

Recommended action: C. replace old app files only during the approved V1.3 UI phase.

Do not perform this recommendation yet.

Before V1.1, keep the old `app/` files untouched and ignore them for agent-definition work. V1.1 should focus on agent definitions and the input/output model under the approved V1 paths. During V1.3, decide whether to refactor, archive, or replace the old starter UI based on the approved registry and schema structure.

Recommended pre-V1.1 handling:

1. Treat Phase 0 control files and locked folders as the current authority.
2. Treat old `knowledge_base/*.json` files as reference material only.
3. Do not use old UI files to drive V1.1 decisions.
4. Do not use old templates until V1.2 template manifest review.
5. Do not treat DOC/DOCX source documents as templates.

It is safe to proceed to V1.1 agent definitions if the old agent JSON files are treated as reference-only inputs and are not copied into the new schema without review.
