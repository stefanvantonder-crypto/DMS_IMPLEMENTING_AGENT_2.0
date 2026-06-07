# ADR V2.1: Markdown Output Capture And Review

## 1. Status

Proposed

## 2. Context

V2.0 planning confirmed that Markdown remains the canonical source format and that DOCX generation and backend work are not approved. The next planning need is a stronger model for output schema, capture, review and packaging readiness.

The current V1 workflow can produce usable Markdown outputs, but there is not yet a formal planning model for validating and governing those outputs before they move toward packaging or future export decisions.

## 3. Decision

V2.1 approves planning for Markdown output schema hardening and review controls only.

Markdown output capture implementation is not approved yet.

DOCX export remains not approved.

Backend remains not approved.

Next phase should be V2.2 planning for controlled Markdown output storage/capture workflow, or V2.2 implementation only if explicitly approved later.

## 4. Options Considered

1. Keep Markdown outputs informal and rely on manual judgment only.
2. Plan a structured Markdown schema and review model without implementation.
3. Implement capture/storage immediately.
4. Jump directly to DOCX/export automation.

## 5. Decision Outcome

Selected:

- Plan schema hardening, capture model and review gates without coding.

Deferred:

- Capture/storage implementation.
- DOCX/export implementation.

Rejected for now:

- Immediate runtime implementation.
- Backend or DOCX automation.

## 6. Consequences

Positive consequences:

- Keeps V1 protected.
- Clarifies what a valid Markdown output should contain.
- Creates a safer path toward later packaging/export decisions.
- Preserves selected-output-only control as a core quality gate.

Tradeoffs:

- No capture functionality is added yet.
- Users still rely on manual controlled handling.
- Implementation speed is traded for stability and governance.

## 7. What Is Explicitly Not Approved

- Capture implementation
- Runtime code
- Backend
- Python
- DOCX generation
- Markdown-to-DOCX conversion code
- `package.json`
- `server.js`
- External libraries
- localStorage
- File upload/parsing
- V2 coding implied by planning alone

## 8. Review Trigger For Changing Decision

Revisit this ADR only when:

- Output schema hardening is accepted.
- Review gate model is accepted.
- Selected-output compliance model is accepted.
- Controlled storage/capture approach is planned clearly.
- A later phase is explicitly approved for implementation.

