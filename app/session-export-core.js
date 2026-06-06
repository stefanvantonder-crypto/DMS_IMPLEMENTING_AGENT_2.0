(function (root) {
  const SESSION_EXPORT_SCHEMA_VERSION = "1.0";

  function createSessionExportPayload(options) {
    const sessionValues = options.sessionValues || {};
    const miniWorkflowBrief = options.miniWorkflowBrief || {};

    return {
      schema_version: SESSION_EXPORT_SCHEMA_VERSION,
      app_version: options.appVersion || "1.10A",
      exported_at: options.exportedAt || new Date().toISOString(),
      session: {
        session_name: sessionValues.sessionName || "",
        client_name: sessionValues.clientName || "",
        project_name: sessionValues.projectName || "",
        contract_bid_number: sessionValues.contractNumber || "",
        prepared_by: sessionValues.preparedBy || "",
        session_notes: sessionValues.sessionNotes || ""
      },
      agent: {
        selected_agent_id: options.selectedAgentId || "",
        selected_agent_name: options.selectedAgentName || ""
      },
      document_classifications: {
        selected: Array.from(options.selectedClassifications || [])
      },
      source_document_inventory: (options.sourceDocuments || []).map(toExportSourceDocument),
      outputs: {
        selected_output_ids: Array.from(options.selectedOutputIds || [])
      },
      mini_workflow_brief: {
        workflow_description: miniWorkflowBrief.workflowDescription || "",
        workflow_rules: miniWorkflowBrief.workflowRules || "",
        roles_people: miniWorkflowBrief.workflowRoles || "",
        expected_outcome: miniWorkflowBrief.workflowOutcome || ""
      },
      controlled_prompt: options.controlledPrompt || "",
      validation_warnings: Array.from(options.validationWarnings || [])
    };
  }

  function toExportSourceDocument(entry) {
    return {
      document_name: entry.documentName || "",
      classification: entry.classification || "",
      document_type: entry.documentType || "",
      document_date: entry.documentDate || "",
      version_reference: entry.referenceNumber || "",
      available_for_upload: normalizeAvailableForUpload(entry.availableForUpload),
      notes: entry.notes || ""
    };
  }

  function normalizeAvailableForUpload(value) {
    if (value === false) {
      return false;
    }
    return String(value || "Yes").toLowerCase() !== "no";
  }

  function getSessionExportFileName(sessionName) {
    const safeSessionName = sanitizeFileComponent(sessionName);
    if (!safeSessionName) {
      return "DMS_Session_v01.json";
    }
    return `${safeSessionName}_DMS_Session_v01.json`;
  }

  function sanitizeFileComponent(value) {
    return String(value || "")
      .trim()
      .replace(/[^a-zA-Z0-9]+/g, "_")
      .replace(/^_+|_+$/g, "");
  }

  root.DmsSessionExport = {
    SESSION_EXPORT_SCHEMA_VERSION,
    createSessionExportPayload,
    getSessionExportFileName,
    sanitizeFileComponent
  };
}(window));
