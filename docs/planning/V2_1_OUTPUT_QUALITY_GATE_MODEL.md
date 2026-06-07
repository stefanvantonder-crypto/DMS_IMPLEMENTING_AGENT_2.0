# V2.1 Output Quality Gate Model

## Purpose

Define planning-stage quality gates for reviewed Markdown outputs before those outputs can be considered ready for manual Word packaging or later export evaluation.

## Gate 1: Selected-Output-Only Validation

| Field | Detail |
|---|---|
| Gate ID | V2-G01 |
| Purpose | Confirm that only selected outputs are present |
| Checks | Output titles, headings, output IDs and exclusion logic align with the selected session outputs |
| Pass criteria | Only selected outputs appear |
| Fail criteria | Unselected outputs appear or outputs from other agents appear |
| Evidence required | Prompt evidence, output headings, selected-output review notes |
| Owner | Reviewer |
| Status options | Pass / Pass with issues / Fail / Not reviewed |

## Gate 2: Source Evidence Check

| Field | Detail |
|---|---|
| Gate ID | V2-G02 |
| Purpose | Confirm that the output is grounded in supplied source evidence |
| Checks | Source document references, evidence usage, unsupported areas flagged |
| Pass criteria | Output uses supplied evidence or marks unsupported items clearly |
| Fail criteria | Unsupported material presented as confirmed fact |
| Evidence required | Source document list, output references, reviewer notes |
| Owner | Reviewer |
| Status options | Pass / Pass with issues / Fail / Not reviewed |

## Gate 3: Structure / Template Alignment Check

| Field | Detail |
|---|---|
| Gate ID | V2-G03 |
| Purpose | Confirm that the output follows the intended Markdown structure |
| Checks | Required sections, template alignment, section order, document control presence |
| Pass criteria | Structure aligns with the selected output type |
| Fail criteria | Required sections missing or structure materially misaligned |
| Evidence required | Output document, template path reference, review checklist |
| Owner | Reviewer |
| Status options | Pass / Pass with issues / Fail / Not reviewed |

## Gate 4: Missing Information Check

| Field | Detail |
|---|---|
| Gate ID | V2-G04 |
| Purpose | Confirm consistent treatment of missing information |
| Checks | Missing facts, dates, approvals, prices, owners and references marked `To be confirmed` |
| Pass criteria | Missing information handled consistently |
| Fail criteria | Missing facts hidden, blanked or replaced with assumptions |
| Evidence required | Output document, reviewer notes |
| Owner | Reviewer |
| Status options | Pass / Pass with issues / Fail / Not reviewed |

## Gate 5: Hallucination / Unsupported Claim Check

| Field | Detail |
|---|---|
| Gate ID | V2-G05 |
| Purpose | Detect invented or unsupported claims |
| Checks | Facts, dates, signatories, prices, approvals, compliance and risks tested against source evidence |
| Pass criteria | No unsupported claims presented as fact |
| Fail criteria | Hallucinated details or unsupported claims present |
| Evidence required | Source list, output text, reviewer comments |
| Owner | Reviewer |
| Status options | Pass / Pass with issues / Fail / Not reviewed |

## Gate 6: Public-Sector Consulting Language Check

| Field | Detail |
|---|---|
| Gate ID | V2-G06 |
| Purpose | Confirm suitable tone and style |
| Checks | Formal language, neutral phrasing, professional structure, no casual filler |
| Pass criteria | Language is suitable for controlled public-sector documentation |
| Fail criteria | Tone is weak, casual, vague or inconsistent |
| Evidence required | Output review comments |
| Owner | Reviewer |
| Status options | Pass / Pass with issues / Fail / Not reviewed |

## Gate 7: Review Checklist Completion

| Field | Detail |
|---|---|
| Gate ID | V2-G07 |
| Purpose | Confirm that review has been completed and recorded |
| Checks | Review checklist, notes, reviewer status, issues log |
| Pass criteria | Review record is complete enough for controlled reuse |
| Fail criteria | Review evidence is incomplete or missing |
| Evidence required | Review checklist, reviewer comments |
| Owner | Reviewer |
| Status options | Pass / Pass with issues / Fail / Not reviewed |

## Gate 8: Packaging Readiness Check

| Field | Detail |
|---|---|
| Gate ID | V2-G08 |
| Purpose | Confirm readiness for later manual Word packaging |
| Checks | Structure stable, review complete, placeholders clear, visuals/tables noted, no unresolved critical issues |
| Pass criteria | Output is approved for packaging preparation |
| Fail criteria | Output still needs structural or evidence correction |
| Evidence required | Reviewed output, checklist, packaging notes |
| Owner | Approver / template controller |
| Status options | Pass / Pass with issues / Fail / Not reviewed |

