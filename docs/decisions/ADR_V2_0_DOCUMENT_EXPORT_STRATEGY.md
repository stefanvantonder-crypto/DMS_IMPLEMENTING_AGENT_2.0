# ADR V2.0: Document Export Strategy

## 1. Status

Proposed

## 2. Context

V1.19C confirmed that the current static Markdown-first prompt-control workflow can produce usable Markdown outputs when actual source documents are manually uploaded to ChatGPT/Codex. The next pressure point is client-usable export, especially DOCX.

Earlier attempts introduced backend thinking, DOCX generation, multiple UI paths and template complexity too early. V2 must not repeat that failure mode.

## 3. Decision

V2.0 approves planning only.

Markdown remains the canonical source format.

DOCX generation is not approved yet.

Backend is not approved yet.

Next work should focus on structured Markdown output capture/review and a manual Word packaging guide before any automated DOCX generation is considered.

## 4. Options Considered

1. Keep V1 static and use manual DOCX packaging.
2. Strengthen static Markdown output capture/review only.
3. Attempt browser-side DOCX generation.
4. Introduce backend DOCX generation.
5. Use an external controlled conversion workflow.

## 5. Decision Outcome

Selected direction:

- Near term: keep V1 stable, keep Markdown canonical, strengthen output capture/review and define manual packaging guidance.

Deferred:

- External controlled conversion workflow.
- Browser-side DOCX proof of concept.
- Backend evaluation gate.

Not approved now:

- Automated DOCX generation.
- Backend implementation.

## 6. Consequences

Positive consequences:

- Protects the working V1 baseline.
- Keeps content quality and output control ahead of export automation.
- Reduces the chance of another premature architecture detour.
- Keeps template fidelity concerns visible.

Tradeoffs:

- Client-facing Word packaging remains manual in the near term.
- DOCX automation is delayed until governance and review are ready.
- Some operational effort remains outside the app.

## 7. What Is Explicitly Not Approved

- Backend code.
- Python code.
- DOCX generation code.
- Markdown-to-DOCX conversion code.
- `package.json`.
- `server.js`.
- External libraries.
- localStorage workflows.
- File upload or parsing features.
- Alternate app folders.
- V2 implementation work implied by planning docs alone.

## 8. Review Trigger For Changing Decision

Revisit this ADR only when all of the following are true:

- Markdown output schema is hardened.
- Markdown output capture/review workflow is approved.
- Manual Word packaging guide exists.
- Template control model is approved.
- Fidelity review gate exists.
- Selected-output-only controls remain protected.
- A narrow export proof-of-concept scope is proposed explicitly.

