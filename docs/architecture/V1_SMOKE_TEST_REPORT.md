# V1 Smoke Test Report

## 1. Test Date

2026-06-05

## 2. Scope Tested

This smoke test covered the static Version 1.x Markdown-first prompt-control system only.

Tested scope:
- Repository scope control.
- JSON configuration loading and fallback readiness.
- Agent rendering data.
- Output rendering data.
- Template manifest mapping.
- Validation warning logic.
- Controlled prompt generation.
- Browser-based Markdown session report export logic.
- Manual browser check guidance.
- V1 hardening boundaries.

Out of scope:
- Backend services.
- Server routes.
- Python code.
- DOCX generation.
- Database or persistent storage.
- Automatic client document generation.

## 3. Files Inspected

- `app/index.html`
- `app/script.js`
- `app/style.css`
- `app/config.json`
- `engine/agent_registry.json`
- `engine/output_registry.json`
- `engine/template_manifest.json`
- `knowledge_base/agents/proposal_preparation_agent.json`
- `knowledge_base/agents/project_governance_agent.json`
- `knowledge_base/agents/document_review_agent.json`
- `knowledge_base/agents/workflow_agent.json`
- `knowledge_base/*.json`
- `templates/**/*.md`
- `outputs/**`
- `TEST_CASES.md`
- `CHANGELOG.md`

## 4. Pass/Fail Table

| Test Area | Result | Evidence |
| --- | --- | --- |
| Repository Scope Control | PASS | No backend folder, root `package.json`, root `server.js`, Python files, DOCX generation files, or generated output files were found in V1-controlled paths. |
| Configuration Loading | PASS | `app/config.json`, registries, manifest, and 4 agent JSON files all passed JSON parsing. App script contains repository JSON paths and non-authoritative fallback configuration. |
| Agent Rendering | PASS | Controller-level checks confirmed all 4 agents are available with purpose, inputs, classification guidance, output list and default output folder data. |
| Output Rendering | PASS | Output counts passed: Proposal 1, Governance 15, Review 3, Workflow 5, total 24. |
| Old Template Isolation | PASS | The 3 REVIEW LATER templates are not referenced in the output registry or template manifest and are not selectable outputs. |
| Template Mapping | PASS | Tested mappings are active Markdown manifest entries: Proposal, Project Charter, Risk Management Plan, Gap Analysis Report and Workflow Design Document. |
| Validation Warnings | PASS | Confirmed no-agent, no-output, missing-required-input, workflow-source, fallback and simulated missing-active-template warnings. |
| Controlled Prompt Generation | PASS | Prompt blocks when no agent or output is selected, generates selected outputs only, includes template paths, output folders, quality rules, `To be confirmed` and the V1 no-DOCX rule. |
| Session Report Export | PASS | Report builder exists, filename defaults/sanitises correctly, includes selected outputs only, prompt generated/not-generated states, Mini Workflow Brief, fallback warning and V1 scope notice. |
| Manual Browser Check Guidance | PASS | Final V1 manual browser smoke-test steps are documented in `TEST_CASES.md`. |
| Hardening | PASS | No defects requiring app code fixes were found during this V1.6 pass. |

## 5. Fixes Made

No app defect fixes were required.

Files changed for V1.6 were limited to:
- `docs/architecture/V1_SMOKE_TEST_REPORT.md`
- `TEST_CASES.md`
- `CHANGELOG.md`

## 6. Remaining Limitations

- Automated browser click-through was not performed in this environment. Controller-level smoke tests were used for deterministic validation of app state, prompt generation and report export logic.
- Manual browser verification is still required before treating the UI as user-accepted.
- Repository JSON loading requires the browser context to permit local JSON fetches; direct file opening may use the embedded non-authoritative fallback depending on browser security behavior.
- V1 remains prompt-control only. It does not generate client deliverables automatically.

## 7. V1 Go/No-Go Recommendation

GO for V1 static baseline completion.

The V1 Markdown-first static prompt-control system passed smoke testing at controller level, with no scope-control violations and no required app defect fixes.

Recommended next step:
- Perform the documented manual browser smoke test.
- After manual acceptance, preserve V1 as the stable static baseline before any V2 planning.

## 8. Explicit Scope Confirmation

- No backend was added.
- No Python was added.
- No DOCX generation was added.
- No server files were added.
- No automatic document generation was added.
- No generated client documents were created.
- No registry, agent or template files were changed during V1.6.
