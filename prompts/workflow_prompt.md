# Workflow Prompt

Use this prompt when preparing a selected workflow Markdown output.

```text
Current task:
Create only the selected workflow Markdown output.

Inputs to confirm:
- Workflow name: To be confirmed
- Business process owner: To be confirmed
- Trigger event: To be confirmed
- Workflow stages: To be confirmed
- Routing rules: To be confirmed
- Approval roles: To be confirmed
- Escalation rules: To be confirmed
- Exceptions: To be confirmed

Rules:
- Generate selected workflow outputs only.
- Do not generate unselected governance, proposal, or review outputs.
- Mark missing routing logic as To be confirmed.
- Keep workflow stages readable and implementation-friendly.
- Do not create backend workflow logic in V1.
```
