# Changelog

All notable repository-control changes are recorded here.

## V1.14 - Template and Output Control Hardening Planning

- Started planning stricter Markdown template and output-selection controls for the V1.x static prompt-control baseline.
- Reviewed agent, output, template manifest, prompt generation and session report export control files for V1.14 risk areas.
- No application logic, backend, DOCX generation, database logic or architecture change was introduced in this planning step.

## 2026-06-06

- Added V1.14A documentation-only template output control validation confirming complete manifest coverage, selected-output-only prompt/session-report controls and unchanged static Markdown-first scope.
- Added V1.13A validation-only confirmation note documenting the static Markdown-first baseline, no-backend/no-DOCX scope and controlled prompt/session-report output model.
- Confirmed V1.13A sample-session matrix results, resolving the previous no-backend/no-server prompt-quality note without changing app code.
- Added V1.13 controlled prompt scope wording so generated prompts explicitly state no backend and no server-side generation are used in Version 1.x.
- Recorded V1.12A sample session matrix execution results, including pass/fail outcomes, prompt quality observations and V1.13 prompt-fix recommendation.
- Added V1.12 sample session pack, prompt quality review criteria and sample-session test matrix for all four static V1 agents.
- Added V1.11 GitHub Pages live validation checklist plus full and quick-start user guides for the static V1 prompt-control app.
- Completed V1.10D import/export smoke hardening, confirming export notice and selected output detail metadata in session JSON, recording smoke results, final manual test coverage and static scope-scan cleanup.
- Implemented V1.10C browser-only Session JSON import/restore for schema `1.0`, including safe local JSON parsing, registry-aware restore warnings, session report import notes and manual validation coverage.
- Added V1.10B import/restore planning for validated browser-only session JSON restore, with implementation deferred to V1.10C.
- Removed legacy Python/tooling content from the active V1 scope and updated ignore rules so bundled runtimes and Python tool files are not recommitted.
- Normalized V1.10A session JSON export to remain static-browser only by removing the optional Node-based helper test file and moving export validation coverage into manual/static checks.
- Added V1.10 session JSON planning with V1.10A export-only scope and deferred V1.10B import/restore planning, including architecture plan, ADR, roadmap entry and planned manual tests.

## 2026-06-05

- Added V1.9 Source Document Inventory Panel for browser-memory session source metadata, including inventory-driven validation warnings, controlled prompt and session report inventory sections, and a source document session model architecture note.
- Added V1.8 GitHub Pages deployment preparation with a root static redirect, `.nojekyll`, deployment guide, README instructions, architecture note, post-deployment checklist and static V1 scope confirmation.
- Added V1.7 manual browser polish updates for clearer static shell versioning, fallback warning copy, validation success messaging, Markdown report button labeling, prompt preview readability and the V1.7 manual browser checklist.
- Completed V1.6 static smoke testing and hardening review, documenting repository scope control, JSON validation, agent/output/template coverage, validation warnings, controlled prompt generation, session report export behavior and final manual browser smoke-test steps.
- Added V1.5 browser-based Markdown session report export using built-in Blob download, including session setup, selected agent, selected classifications, selected outputs only, validation warnings, controlled prompt content and V1 scope-control notice.
- Replaced the V1.3 placeholder with V1.4 controlled prompt generation assembled from session fields, selected agent, selected document classifications, selected outputs, active template manifest entries, Mini Workflow Brief data, validation warnings and V1 global rules.
- Added V1.3 static UI shell in `app/` with registry-driven agent and output selection, manifest-based template status display, validation warnings, and non-authoritative fallback configuration for direct local UI testing.
- Established V1.x Markdown-first static prompt-control baseline.
- Added root control files for baseline lock, roadmap, Codex rules, agent rules, manual tests, and ignore rules.
- Added architecture documentation for V1 architecture, field definitions, output selection, and template naming.
- Added prompt-control files for system, generation, review, and workflow prompts.
- Added required Phase 0 folder structure and `.gitkeep` placeholders for empty approved folders.
