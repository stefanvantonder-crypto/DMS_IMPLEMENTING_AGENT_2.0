# ADR V2.4: DOCX POC Gate

## 1. Status

Proposed

## 2. Context

V2.0 through V2.3 planning established a controlled Markdown-first baseline, output schema hardening, capture/storage concepts and manual Word packaging guidance. The next question is not how to build a DOCX POC, but whether a DOCX POC should ever be attempted and under what gate.

DOCX generation remains unapproved. Backend remains unapproved. V1 must stay protected.

## 3. Decision

V2.4 approves planning for a DOCX proof-of-concept decision gate only.

No DOCX proof-of-concept is approved yet.

No implementation is approved.

No backend is approved.

Only after all gate conditions are satisfied may a separate POC approval decision be requested.

## 4. Options Considered

1. Approve a DOCX POC now.
2. Define a gate first and defer any POC approval.
3. Move directly to backend implementation.
4. Continue manual packaging only with no decision gate.

## 5. Decision Outcome

Selected:

- Plan the decision gate only.

Deferred:

- POC approval.
- Implementation.

Rejected for now:

- Immediate DOCX proof-of-concept.
- Backend or automation.

## 6. Consequences

Positive consequences:

- Protects V1.
- Prevents premature automation.
- Forces evidence-based entry criteria.
- Makes stop rules explicit before testing begins.

Tradeoffs:

- No DOCX test is allowed yet.
- The team must still prove readiness before any POC request.
- More planning is required before experimentation.

## 7. What Is Explicitly Not Approved

- DOCX proof-of-concept implementation
- Backend
- Python
- Markdown-to-DOCX conversion code
- `package.json`
- `server.js`
- External libraries
- localStorage
- File upload/parsing
- Generated client deliverables
- V2 implementation implied by planning alone

## 8. Review Trigger For Changing Decision

Revisit this ADR only when:

- Entry criteria are satisfied.
- Scope and constraints are accepted.
- Fidelity evaluation model is accepted.
- Stop rules are accepted.
- A separate POC approval request is formally proposed.

