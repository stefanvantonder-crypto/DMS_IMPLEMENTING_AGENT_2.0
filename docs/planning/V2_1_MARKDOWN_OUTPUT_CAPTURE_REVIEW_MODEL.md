# V2.1 Markdown Output Capture Review Model

## 1. Purpose

Plan how reviewed Markdown outputs could be captured, stored and governed later without changing the V1 app or implying that the repository generates final deliverables automatically.

## 2. What "Capture" Means In V2 Planning

In V2 planning, "capture" means:

- Recording generated Markdown output in a controlled review workflow.
- Preserving prompt evidence, source-document references and review results.
- Managing output status as draft, reviewed or packaging-ready.

It does not mean automatic repository generation.

## 3. What Capture Does Not Mean

- Not app-generated final deliverables
- Not repository-generated official outputs
- Not DOCX generation
- Not file parsing

## 4. Proposed Future Capture Process

- User generates controlled prompt in V1 app.
- User uploads actual source documents to ChatGPT/Codex.
- User receives Markdown output.
- User pastes or stores reviewed Markdown output in a controlled review area.
- Output is reviewed before reuse.

## 5. Proposed Future Folder Model, Planning Only

- `outputs/markdown/draft/`
- `outputs/markdown/reviewed/`
- `outputs/markdown/approved/`
- `outputs/session_evidence/`

These folders are planning references only. No folder implementation is approved in V2.1.

## 6. Naming Convention Proposal

- `{session_name}_{output_label}_Draft_v01.md`
- `{session_name}_{output_label}_Reviewed_v01.md`

Possible later extension:

- `{session_name}_{output_label}_Approved_v01.md`

## 7. Review Roles

- Preparer
- Reviewer
- Approver
- Template controller

## 8. Review Workflow

- Draft
- Reviewed
- Accepted with changes
- Approved for packaging

## 9. Evidence Capture Model

- Prompt evidence
- Source document list
- Output review checklist
- Reviewer comments

## 10. Explicit Note

No capture implementation is approved in V2.1.

