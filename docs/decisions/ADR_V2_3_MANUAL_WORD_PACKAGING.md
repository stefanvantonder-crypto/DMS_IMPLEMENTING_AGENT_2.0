# ADR V2.3: Manual Word Packaging

## 1. Status

Proposed

## 2. Context

V2.2 planning defined a controlled Markdown capture/storage workflow and evidence chain. The next planning need is a safe manual Word packaging guide that preserves template integrity, style controls, visuals and packaging evidence.

DOCX generation remains unapproved. Backend remains unapproved. V1 must stay stable.

## 3. Decision

V2.3 approves planning for manual Word packaging only.

Automated DOCX generation remains not approved.

Backend remains not approved.

Packaging may only begin from reviewed Markdown outputs that achieved Approved for Packaging status.

Next phase should be V2.4 DOCX proof-of-concept decision gate planning, not implementation.

## 4. Options Considered

1. Leave Word packaging informal.
2. Plan a controlled manual packaging guide.
3. Implement DOCX automation immediately.
4. Introduce backend packaging tooling now.

## 5. Decision Outcome

Selected:

- Plan manual packaging controls without implementation.

Deferred:

- DOCX automation.
- Backend packaging tooling.

Rejected for now:

- Immediate packaging automation.
- Any V2 implementation implied by this guide alone.

## 6. Consequences

Positive consequences:

- Protects V1.
- Preserves template integrity.
- Makes packaging evidence explicit.
- Keeps packaging separate from client approval.

Tradeoffs:

- Packaging remains manual for now.
- No automation is gained in this phase.
- Future work still needs a separate approval gate.

## 7. What Is Explicitly Not Approved

- Automated DOCX generation
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

- Manual packaging guide is accepted.
- Template application model is accepted.
- Visual/table/annexure handling model is accepted.
- Packaging evidence/sign-off model is accepted.
- A future DOCX proof-of-concept is explicitly proposed.

