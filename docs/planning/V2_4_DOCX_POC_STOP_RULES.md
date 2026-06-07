# V2.4 DOCX POC Stop Rules

## Purpose

Define stop rules that must terminate any future DOCX proof-of-concept if risk or scope drift appears.

## Stop Rules

| Stop Rule ID | Trigger | Reason | Required Action | Who Can Authorize Restart |
|---|---|---|---|---|
| V2-STOP-01 | Backend becomes a prerequisite | Backend would push the work beyond the approved planning boundary | Stop and re-evaluate the gate | Project owner |
| V2-STOP-02 | Template fidelity cannot be assessed clearly | Without fidelity assessment, the POC cannot produce a trustworthy result | Stop and clarify template baseline | Template controller |
| V2-STOP-03 | Multiple output types are introduced at once | Scope becomes too broad for a proof-of-concept | Stop and reduce scope to one output type | Project owner |
| V2-STOP-04 | Proposal template with visuals is used as first test | Too complex for the initial safe scope | Stop and move to a safer output type | Project owner |
| V2-STOP-05 | Uncontrolled libraries/runtimes are proposed | Adds runtime risk and implementation drift | Stop and reject uncontrolled tooling | Project owner |
| V2-STOP-06 | V1 app changes are bundled into the POC | Breaks the protected baseline | Stop and separate V1 from POC planning | Project owner |
| V2-STOP-07 | Selected-output-only evidence is missing | Output boundary cannot be trusted | Stop and rebuild evidence first | Reviewer |
| V2-STOP-08 | Review evidence is incomplete | Evaluation cannot be verified | Stop and complete the review pack | Reviewer |
| V2-STOP-09 | Packaging baseline is unclear | No stable comparison target exists | Stop and define the baseline first | Template controller |

