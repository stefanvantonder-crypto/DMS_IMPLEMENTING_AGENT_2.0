# V2.0 Risk And Guardrail Register

## Purpose

Record the key V2 export-planning risks and the guardrails that must be in place before any later implementation step is approved.

| Risk ID | Risk | Cause | Impact | Mitigation | Gate Before Proceeding | Owner | Status |
|---|---|---|---|---|---|---|---|
| V2-R01 | Reintroducing backend too early | Pressure to automate DOCX before content and review layers are stable | V1 destabilization and scope expansion | Block backend until explicit decision gate | Backend evaluation gate passed | Project owner | Open |
| V2-R02 | Reintroducing DOCX generation too early | Desire for quick export automation | Poor fidelity, rework and loss of control | Keep DOCX generation unapproved in V2.0 | DOCX proof-of-concept gate approved | Project owner | Open |
| V2-R03 | Breaking V1 static app | Planning drifts into implementation or mixed runtime paths | Loss of working baseline | Keep V2 planning docs separate from app changes | No app changes allowed in V2.0 | Project owner | Open |
| V2-R04 | Losing selected-output-only control | Export path ignores output boundaries | Extra or wrong client documents produced | Preserve selected-output-only requirements in every future design | Selected-output-only validation gate defined | Project owner | Open |
| V2-R05 | Poor DOCX formatting fidelity | Template styles and Word behavior are more complex than raw export tools expect | Client-facing quality failure | Treat Word template as style authority and require visual review | Template governance and fidelity checklist approved | Project owner | Open |
| V2-R06 | Dropping visuals/graphics/models | Export flow handles text only | Incomplete deliverables | Define visual asset handling before automation | Visual asset rules documented | Project owner | Open |
| V2-R07 | Template mismatch | Markdown structure and Word template sections diverge | Manual rework and inconsistent outputs | Define controlled template model and review checklist | Template control model approved | Project owner | Open |
| V2-R08 | Source document hallucination | Automation or drafting overstates evidence | Incorrect client content | Keep review controls and `To be confirmed` rules strict | Output review gates approved | Project owner | Open |
| V2-R09 | Unreviewed generated deliverables | Export happens before human review | Low-quality or unsafe outputs reach clients | Require human review before export packaging | Review workflow approved | Project owner | Open |
| V2-R10 | Git/repository confusion | Planning, runtime files and generated artifacts mix together | Dirty repo and accidental commits | Keep planning, runtime and deliverables separated | Repository hygiene rules confirmed | Project owner | Open |
| V2-R11 | Large binary files committed accidentally | Future template or export work introduces DOCX/media files casually | Repository bloat and merge pain | Define binary file control rules early | Binary handling rules approved | Project owner | Open |
| V2-R12 | Tool/runtime files committed accidentally | Export experiments pull in runtime dependencies | Scope breach and repo pollution | Keep packages and runtimes blocked in planning phase | No package/runtime gate breached | Project owner | Open |
| V2-R13 | Scope creep into V2 coding before plan approval | Planning doc interpreted as implementation approval | Premature architecture changes | ADR must state planning only | ADR remains Proposed | Project owner | Open |

