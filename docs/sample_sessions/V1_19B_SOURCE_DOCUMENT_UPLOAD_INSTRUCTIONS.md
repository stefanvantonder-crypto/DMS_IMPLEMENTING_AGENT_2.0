# V1.19B Source Document Upload Instructions

## 1. Purpose

Provide a controlled procedure for testing the V1.19A captured prompt with actual uploaded source documents in ChatGPT/Codex.

This document is instruction-only. It does not mean the repository generated documents automatically, and it does not create official output documents inside the repository.

## 2. Required Source Documents

The following actual source documents are expected for this execution review:

1. TOR Invitation for Proposal - Automated Asset Management System
2. Approved Proposal - Automated Asset Management System
3. DMS System Documentation
4. DMS Architecture Documentation

## 3. Recommended Upload Order

1. Client TOR / RFQ / RFP
2. Approved Proposal
3. DMS System Documentation
4. DMS Architecture Documentation

## 4. Upload And Prompt Use Instructions

1. Open ChatGPT/Codex in the environment where actual source documents can be uploaded manually.
2. Upload the actual source documents manually in the recommended order listed above.
3. Do not upload unrelated documents.
4. After the documents are uploaded, open the captured prompt evidence file:
   `docs/sample_sessions/V1_19_REAL_SAMPLE_PROJECT_PROMPT_CAPTURE.md`
5. Copy the captured V1.19A controlled prompt from the `Actual Generated Controlled Prompt` section.
6. Paste the captured prompt into ChatGPT/Codex after the source documents have been uploaded.
7. Submit the prompt for execution review.

## 5. Review Instructions

During review of the ChatGPT/Codex response, verify that:

- Only the selected outputs are generated.
- Project Charter is included.
- Risk Management Plan is included.
- Test and Go-Live Plan is included.
- Missing information is marked `To be confirmed`.
- No unrelated outputs are generated.
- No claim is made that the DMS app itself read, parsed or stored the uploaded documents.

## 6. Scope Reminder

- The DMS app itself does not read, parse or store the documents.
- The DMS app remains a static Markdown-first prompt-control tool only.
- The actual source documents must be uploaded manually to ChatGPT/Codex.
- This review step must not be treated as repository-based automatic document generation.

