# V1 Release Checklist

Use this checklist before formal V1 release sign-off.

| Checklist item | Status | Notes |
|---|---|---|
| Repository clean | To be confirmed | Confirm with `git status`. |
| Latest changes pushed | To be confirmed | Confirm main branch and remote status. |
| Release tag created | To be confirmed | Record tag name when created. |
| GitHub Pages status checked | To be confirmed | Confirm live static app loads. |
| User guide available | To be confirmed | See `docs/user_guide/DMS_IMPLEMENTING_AGENT_V1_USER_GUIDE.md`. |
| Quick start guide available | To be confirmed | See `docs/user_guide/QUICK_START_GUIDE.md`. |
| UAT pack available | To be confirmed | See `docs/uat/`. |
| UAT blockers resolved by static harness evidence | To be confirmed | See `docs/uat/V1_16B_BLOCKER_RESOLUTION_REPORT.md`. |
| V1.18 live run confirmation | Completed with limitation | Live URL, app load, four-agent display and Project Charter prompt run passed. Session report download, Session JSON export/import and fresh prompt after import require follow-up in Chrome or Edge because Codex in-app browser downloads are not supported. |
| No forbidden architecture elements introduced | To be confirmed | Confirm no backend, Python, DOCX generation, database, external libraries, file parsing or generated client deliverables. |
| Known limitations documented | To be confirmed | See `docs/release/V1_KNOWN_LIMITATIONS.md`. |
| Release readiness certificate completed | To be confirmed | See `docs/release/V1_17_RELEASE_READINESS_CERTIFICATE.md`. |

## Release Sign-Off Notes

- Release status should remain `Ready for controlled use` only within the V1 static Markdown-first scope.
- Do not use this checklist to approve backend, DOCX generation, file parsing, AI API integration, database persistence or automatic client deliverable generation.
