# V2.1 Selected Output Compliance Model

## 1. Purpose

Define how future reviewed Markdown outputs should demonstrate selected-output-only compliance without changing the current V1 implementation.

## 2. Why Selected-Output-Only Is Critical

Selected-output-only behaviour is one of the core protections in the current V1 system.

If that control weakens:

- Extra client-facing documents may appear.
- Cross-agent outputs may be mixed incorrectly.
- Review and packaging effort may increase unnecessarily.
- Auditability may be lost.

## 3. Compliance Model

Selected-output-only compliance should be evidenced through:

- Selected output IDs
- Generated output headings
- Template paths
- Output folder references
- Exclusion list of unselected outputs

## 4. Compliance Checklist

- Confirm selected output IDs match the session.
- Confirm generated Markdown headings match selected outputs only.
- Confirm template paths align to selected outputs only.
- Confirm output folder references align to selected outputs only.
- Confirm unselected outputs are listed in the exclusion check where relevant.

## 5. Non-Compliance Examples

- Generating all governance outputs
- Adding Proposal when governance selected
- Adding workflow outputs in governance session
- Adding review outputs without Document Review Agent

## 6. Remediation Process

- Reject output
- Regenerate prompt/output
- Record issue
- Update prompt rules only through approved phase

## 7. Future Automation Idea, Planning Only

- Compare selected output IDs to generated Markdown headings

No code implementation is approved.

