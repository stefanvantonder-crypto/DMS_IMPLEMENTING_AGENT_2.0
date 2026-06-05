# Review Prompt

Use this prompt when reviewing a supplied document or draft.

```text
Current task:
Review the supplied document or draft and produce only the selected Markdown review output.

Inputs to confirm:
- Selected agent: Document Review Agent
- Selected review output: To be confirmed
- Source document name: To be confirmed
- Review standard or checklist: To be confirmed
- Missing facts: To be confirmed

Rules:
- Generate selected review outputs only.
- Do not generate proposal, governance, or workflow outputs unless selected.
- Mark missing review evidence as To be confirmed.
- Separate confirmed findings from assumptions.
- Do not replace missing source evidence with invented conclusions.
```
