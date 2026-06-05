\# InTouch Workflow Design Template



\## Document Control



| Field | Detail |

|---|---|

| Workflow Document Title |  |

| Client / Department |  |

| Project Name |  |

| Contract / Bid Number |  |

| Workflow Category | Asset / Maintenance / Finance / Governance / Support / Programme |

| Document Version | Draft v01 |

| Prepared By |  |

| Reviewed By |  |

| Approved By |  |

| Date |  |



\---



\# 1. Workflow Name



\[Insert Workflow Name]



\---



\# 2. Purpose



Describe why this workflow is required.



Example:



This workflow is required to capture, validate, route, approve, monitor and close requests in a controlled and auditable manner through the DMS InTouch module.



\---



\# 3. Workflow Trigger



Describe what starts the workflow.



| Trigger Type | Description |

|---|---|

| Manual Trigger | User manually logs a request or case. |

| Scheduled Trigger | Workflow starts on a predefined daily, weekly, monthly or annual cycle. |

| System Trigger | Workflow starts because of a system event or exception. |

| Compliance Trigger | Workflow starts because of audit, compliance or governance requirement. |

| Integration Trigger | Workflow starts from another system or imported file. |



Selected trigger for this workflow:



```text

\[Insert selected trigger]

```



\---



\# 4. Main Roles



| Role | Responsibility |

|---|---|

| Requestor / Initiator | Captures the workflow request. |

| Reviewer | Checks completeness, correctness and supporting information. |

| Verifier | Confirms factual, technical, financial or compliance details. |

| Approver | Makes the approval or rejection decision. |

| QA Officer | Performs quality assurance where required. |

| Escalation Manager | Handles overdue, disputed or high-risk workflow items. |

| System Administrator | Configures users, roles, statuses and workflow rules. |

| Auditor / Read-Only User | Reviews workflow records and audit trail evidence. |



\---



\# 5. Special Fields



\## Step 1 - Capture Fields



| Field Name | Mandatory? | Field Type | Notes |

|---|---|---|---|

| Request ID | Yes | Auto Number | System-generated unique reference. |

| Request Type | Yes | Dropdown | Defines the workflow category. |

| Requested By | Yes | User | Person submitting the workflow. |

| Request Date | Yes | Date | Date request is created. |

| Department / Unit | Yes | Dropdown | Responsible department or business unit. |

| Description | Yes | Text | Clear description of the request. |

| Priority | Yes | Dropdown | Low / Medium / High / Critical. |



\## Step 2 - Validation Fields



| Field Name | Mandatory? | Field Type | Notes |

|---|---|---|---|

| Mandatory Fields Complete | Yes | Yes/No | Must be Yes before submission. |

| Supporting Documents Present | Yes | Yes/No | Must be checked before review. |

| Duplicate Check Result | Yes | Dropdown | No Duplicate / Possible Duplicate / Duplicate Confirmed. |

| Compliance Check Result | Yes | Dropdown | Passed / Failed / Not Applicable. |

| Data Quality Status | Yes | Dropdown | Complete / Incomplete / Requires Correction. |



\## Step 3 - Review Fields



| Field Name | Mandatory? | Field Type | Notes |

|---|---|---|---|

| Reviewed By | Yes | User | Reviewer responsible for checking the request. |

| Review Date | Yes | Date | Date review was completed. |

| Review Outcome | Yes | Dropdown | Accept / Return for Correction / Escalate. |

| Review Comments | Conditional | Text | Required if returned or escalated. |



\## Step 4 - Decision Fields



| Field Name | Mandatory? | Field Type | Notes |

|---|---|---|---|

| Recommended Outcome | Yes | Dropdown | Approve / Reject / Return / Escalate. |

| Approval Outcome | Yes | Dropdown | Approved / Rejected / Returned for Correction. |

| Approved By | Conditional | User | Required if approved. |

| Approval Date | Conditional | Date | Required if approved. |

| Rejection Reason | Conditional | Text | Required if rejected. |

| Return Reason | Conditional | Text | Required if returned for correction. |



\## Step 5 - Closure Fields



| Field Name | Mandatory? | Field Type | Notes |

|---|---|---|---|

| Final Status | Yes | Dropdown | Closed / Cancelled / Exported / Locked. |

| Closure Notes | Yes | Text | Summary of final outcome. |

| Closed By | Yes | User | Person closing the workflow. |

| Closure Date | Yes | Date | Date workflow was closed. |



\---



\# 6. Workflow Stages



```text

Draft Capture

↓

Submit Request

↓

Completeness Check

↓

Review

↓

Verification

↓

Approval Decision

↓

Update Related DMS Record

↓

Notify Stakeholders

↓

Close

```



\---



\# 7. Workflow Rules



| Rule No. | Rule | Outcome |

|---:|---|---|

| 1 | Mandatory fields must be completed before submission. | Submission blocked until complete. |

| 2 | Missing supporting documents must return the workflow for correction. | Status changes to Returned for Correction. |

| 3 | Duplicate records must be flagged before approval. | Workflow routed to verification. |

| 4 | Rejected requests must include a rejection reason. | Rejection cannot be saved without reason. |

| 5 | Returned requests must include a return reason. | Requestor receives correction notice. |

| 6 | Approved requests must update the relevant DMS record. | Related record updated or flagged for update. |

| 7 | Overdue workflow items must escalate to the responsible manager. | Escalation notification issued. |

| 8 | Locked records cannot be edited without approved override. | Editing restricted. |

| 9 | All approvals must be logged with user, date and time. | Audit trail updated. |



\---



\# 8. Notifications



| Event | Notification Recipient | Message Purpose |

|---|---|---|

| Request submitted | Reviewer | Notify that review is required. |

| Review assigned | Reviewer | Confirm assignment. |

| Returned for correction | Requestor | Notify that corrections are required. |

| Approval required | Approver | Notify that approval decision is required. |

| Approved | Requestor and stakeholders | Confirm approval. |

| Rejected | Requestor | Confirm rejection and reason. |

| Escalated | Escalation Manager | Notify overdue or high-risk item. |

| Closed | Requestor and stakeholders | Confirm closure. |



\---



\# 9. Escalation Rules



| Escalation Event | Timeframe | Escalate To | Action Required |

|---|---|---|---|

| Review overdue | 2 working days after assignment | Supervisor | Follow up with reviewer. |

| Approval overdue | 2 working days after approval request | Manager | Follow up with approver. |

| Correction overdue | 3 working days after return | Supervisor | Follow up with requestor. |

| Critical item unresolved | Immediate | Escalation Manager | Management intervention required. |



\---



\# 10. Status List



Use only approved workflow statuses.



| Status | Meaning |

|---|---|

| Draft | Workflow has been captured but not submitted. |

| Submitted | Workflow has been submitted for processing. |

| In Review | Workflow is being checked. |

| Pending Verification | Workflow requires verification. |

| Pending Approval | Workflow requires approval. |

| Approved | Workflow has been approved. |

| Rejected | Workflow has been rejected. |

| Returned for Correction | Workflow has been sent back for correction. |

| Escalated | Workflow has been escalated. |

| On Hold | Workflow is temporarily paused. |

| Locked | Workflow cannot be edited. |

| Exported | Workflow output has been exported to another process/system. |

| Closed | Workflow is complete. |

| Cancelled | Workflow has been cancelled. |



\---



\# 11. Dashboard Requirements



| Dashboard Item | Purpose |

|---|---|

| Open workflow items | Shows all active workflow records. |

| Overdue workflow items | Shows items exceeding turnaround time. |

| Items pending review | Shows records awaiting reviewer action. |

| Items pending approval | Shows records awaiting approval. |

| Returned items | Shows records requiring correction. |

| Rejected items | Shows rejected requests and reasons. |

| Escalated items | Shows items requiring management intervention. |

| Average turnaround time | Measures workflow efficiency. |

| Workflow volume by department | Shows workload by department or business unit. |



\---



\# 12. Audit Trail Requirements



The system must log the following:



| Audit Event | Required Detail |

|---|---|

| Workflow created | User, date, time and initial status. |

| Workflow submitted | User, date, time and submitted data. |

| Field changed | Previous value, new value, user, date and time. |

| Document uploaded | File name, user, date and time. |

| Review completed | Reviewer, date, time and outcome. |

| Approval decision | Approver, date, time, decision and comments. |

| Rejection decision | Rejecting user, reason, date and time. |

| Return for correction | Returning user, reason, date and time. |

| Escalation | Escalation reason, recipient, date and time. |

| Status change | Previous status, new status, user, date and time. |

| Workflow closed | Closing user, closure notes, date and time. |



\---



\# 13. Exception Handling



| Exception | Required Action |

|---|---|

| Missing mandatory information | Return for correction. |

| Missing supporting document | Return for correction. |

| Duplicate record detected | Route to verification. |

| Failed validation | Escalate or reject depending on severity. |

| Approval overdue | Escalate to manager. |

| System integration failure | Log technical support ticket. |

| Data quality failure | Route to QA Officer. |



\---



\# 14. InTouch Configuration Blueprint



| Configuration Item | Description |

|---|---|

| Workflow Name |  |

| Workflow Category |  |

| Trigger Type |  |

| Form Fields |  |

| Mandatory Fields |  |

| Roles / User Groups |  |

| Routing Rules |  |

| Approval Rules |  |

| Escalation Rules |  |

| Notification Rules |  |

| Status Values |  |

| Dashboard Widgets |  |

| Reports Required |  |

| Audit Trail Events |  |



\---



\# 15. Workflow Test Scripts



| Test Case No. | Scenario | Test Steps | Expected Result | Pass / Fail | Comments |

|---:|---|---|---|---|---|

| 1 | Submit complete workflow | Capture all mandatory fields and submit. | Workflow moves to review stage. |  |  |

| 2 | Submit incomplete workflow | Leave mandatory field blank and submit. | Submission is blocked. |  |  |

| 3 | Return for correction | Reviewer returns workflow with reason. | Status changes to Returned for Correction. |  |  |

| 4 | Approve workflow | Approver approves request. | Status changes to Approved. |  |  |

| 5 | Reject workflow | Approver rejects request with reason. | Status changes to Rejected. |  |  |

| 6 | Escalate overdue item | Leave workflow pending beyond SLA. | Workflow escalates to manager. |  |  |



\---



\# 16. Sign-Off



| Name | Role | Signature | Date |

|---|---|---|---|

|  | Prepared By |  |  |

|  | Reviewed By |  |  |

|  | Approved By |  |  |

