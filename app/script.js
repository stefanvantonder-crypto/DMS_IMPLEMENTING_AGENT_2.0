const DATA_PATHS = {
  appConfig: "config.json",
  agentRegistry: "../engine/agent_registry.json",
  outputRegistry: "../engine/output_registry.json",
  templateManifest: "../engine/template_manifest.json",
  agentDefinitions: {
    proposal_preparation_agent: "../knowledge_base/agents/proposal_preparation_agent.json",
    project_governance_agent: "../knowledge_base/agents/project_governance_agent.json",
    document_review_agent: "../knowledge_base/agents/document_review_agent.json",
    workflow_agent: "../knowledge_base/agents/workflow_agent.json"
  }
};

const FALLBACK_OUTPUT_ROWS = [
  ["proposal", "Proposal", "proposal_preparation_agent", "proposal", "templates/proposal_templates/PROPOSAL_TEMPLATE.md", "outputs/markdown/proposals"],
  ["audit_report_implementation_review", "Audit Report Implementation Review", "project_governance_agent", "project_governance", "templates/project_governance_templates/AUDIT_REPORT_IMPLEMENTATION_REVIEW_TEMPLATE.md", "outputs/markdown/governance_documents"],
  ["change_management_strategy", "Change Management Strategy", "project_governance_agent", "project_governance", "templates/project_governance_templates/CHANGE_MANAGEMENT_STRATEGY_TEMPLATE.md", "outputs/markdown/governance_documents"],
  ["module_scoping_document", "Module Scoping Document", "project_governance_agent", "project_governance", "templates/project_governance_templates/MODULE_SCOPING_DOCUMENT_TEMPLATE.md", "outputs/markdown/governance_documents"],
  ["needs_analysis", "Needs Analysis", "project_governance_agent", "project_governance", "templates/project_governance_templates/NEEDS_ANALYSIS_TEMPLATE.md", "outputs/markdown/governance_documents"],
  ["network_capacity_assessment_approach", "Network Capacity Assessment Approach", "project_governance_agent", "project_governance", "templates/project_governance_templates/NETWORK_CAPACITY_ASSESSMENT_APPROACH_TEMPLATE.md", "outputs/markdown/governance_documents"],
  ["payment_system_uat_test_scripts", "Payment System - UAT Test Scripts", "project_governance_agent", "project_governance", "templates/project_governance_templates/PAYMENT_SYSTEM_UAT_TEST_SCRIPTS_TEMPLATE.md", "outputs/markdown/governance_documents"],
  ["post_implementation_support_plan", "Post-Implementation Support Plan", "project_governance_agent", "project_governance", "templates/project_governance_templates/POST_IMPLEMENTATION_SUPPORT_PLAN_TEMPLATE.md", "outputs/markdown/governance_documents"],
  ["project_charter", "Project Charter", "project_governance_agent", "project_governance", "templates/project_governance_templates/PROJECT_CHARTER_TEMPLATE.md", "outputs/markdown/governance_documents"],
  ["project_scope", "Project Scope", "project_governance_agent", "project_governance", "templates/project_governance_templates/PROJECT_SCOPE_TEMPLATE.md", "outputs/markdown/governance_documents"],
  ["risk_management_plan", "Risk Management Plan", "project_governance_agent", "project_governance", "templates/project_governance_templates/RISK_MANAGEMENT_PLAN_TEMPLATE.md", "outputs/markdown/governance_documents"],
  ["stakeholder_analysis_matrix", "Stakeholder Analysis Matrix", "project_governance_agent", "project_governance", "templates/project_governance_templates/STAKEHOLDER_ANALYSIS_MATRIX_TEMPLATE.md", "outputs/markdown/governance_documents"],
  ["system_roll_out_plan", "System Roll-out Plan", "project_governance_agent", "project_governance", "templates/project_governance_templates/SYSTEM_ROLLOUT_PLAN_TEMPLATE.md", "outputs/markdown/governance_documents"],
  ["test_and_go_live_plan", "Test and Go-Live Plan", "project_governance_agent", "project_governance", "templates/project_governance_templates/TEST_AND_GO_LIVE_PLAN_TEMPLATE.md", "outputs/markdown/governance_documents"],
  ["tor_technical_committee", "TOR Technical Committee", "project_governance_agent", "project_governance", "templates/project_governance_templates/TOR_TECHNICAL_COMMITTEE_TEMPLATE.md", "outputs/markdown/governance_documents"],
  ["uat_test_scripts", "UAT Test Scripts", "project_governance_agent", "project_governance", "templates/project_governance_templates/UAT_TEST_SCRIPTS_TEMPLATE.md", "outputs/markdown/governance_documents"],
  ["gap_analysis_report", "Gap Analysis Report", "document_review_agent", "document_review", "templates/review_templates/GAP_ANALYSIS_REPORT_TEMPLATE.md", "outputs/markdown/review_reports"],
  ["improvement_action_plan", "Improvement Action Plan", "document_review_agent", "document_review", "templates/review_templates/IMPROVEMENT_ACTION_PLAN_TEMPLATE.md", "outputs/markdown/review_reports"],
  ["executive_review_summary", "Executive Review Summary", "document_review_agent", "document_review", "templates/review_templates/EXECUTIVE_REVIEW_SUMMARY_TEMPLATE.md", "outputs/markdown/review_reports"],
  ["workflow_design_document", "Workflow Design Document", "workflow_agent", "workflow", "templates/workflow_templates/WORKFLOW_DESIGN_DOCUMENT_TEMPLATE.md", "outputs/markdown/workflow_documents"],
  ["workflow_steps", "Workflow Steps", "workflow_agent", "workflow", "templates/workflow_templates/WORKFLOW_STEPS_TEMPLATE.md", "outputs/markdown/workflow_documents"],
  ["roles_and_responsibilities_matrix", "Roles and Responsibilities Matrix", "workflow_agent", "workflow", "templates/workflow_templates/ROLES_AND_RESPONSIBILITIES_MATRIX_TEMPLATE.md", "outputs/markdown/workflow_documents"],
  ["sla_escalation_rules", "SLA / Escalation Rules", "workflow_agent", "workflow", "templates/workflow_templates/SLA_ESCALATION_RULES_TEMPLATE.md", "outputs/markdown/workflow_documents"],
  ["intouch_configuration_notes", "InTouch Configuration Notes", "workflow_agent", "workflow", "templates/workflow_templates/INTOUCH_CONFIGURATION_NOTES_TEMPLATE.md", "outputs/markdown/workflow_documents"]
];

const FALLBACK_AGENT_DEFINITIONS = {
  proposal_preparation_agent: {
    id: "proposal_preparation_agent",
    name: "Proposal Preparation Agent",
    purpose: "Prepares compliant and high-scoring bid proposals based on client TORs, RFQs, RFPs and previous DMS proposal examples.",
    required_inputs: ["Client TOR / RFQ / RFP", "Bid specification", "Previous proposal example", "Company profile"],
    optional_inputs: ["DMS user manual", "DMS architecture document", "Pricing schedule", "Reference letters"],
    allowed_inputs: ["Client TOR / RFQ / RFP", "Bid specification", "Previous proposal example", "DMS user manual", "DMS architecture document", "Pricing schedule", "Reference letters", "Company profile"],
    allowed_outputs: ["Proposal"],
    default_output_folder: "outputs/markdown/proposals",
    prompt_file: "prompts/generation_prompt.md",
    document_classification_guidance: [
      "Classify TOR, RFQ, RFP, invitation to bid and tender requirement documents as Client TOR / RFQ / RFP.",
      "Classify scoring criteria, mandatory requirements and compliance schedules as Bid specification.",
      "Classify previous bid responses and similar proposal examples as Previous proposal example.",
      "Classify organisational credentials, capability statements and company background documents as Company profile."
    ]
  },
  project_governance_agent: {
    id: "project_governance_agent",
    name: "Project Governance Agent",
    purpose: "Creates project governance and implementation documents required to deliver DMS implementation projects in a controlled and auditable manner.",
    required_inputs: ["Approved proposal", "Client TOR", "DMS system documentation", "DMS architecture documentation"],
    optional_inputs: ["Project charter example", "Client implementation requirements", "Client policies and procedures", "Framework / Legislation / Standard"],
    allowed_inputs: ["Approved proposal", "Client TOR", "DMS system documentation", "DMS architecture documentation", "Project charter example", "Client implementation requirements", "Client policies and procedures", "Framework / Legislation / Standard"],
    allowed_outputs: ["Audit Report Implementation Review", "Change Management Strategy", "Module Scoping Document", "Needs Analysis", "Network Capacity Assessment Approach", "Payment System - UAT Test Scripts", "Post-Implementation Support Plan", "Project Charter", "Project Scope", "Risk Management Plan", "Stakeholder Analysis Matrix", "System Roll-out Plan", "Test and Go-Live Plan", "TOR Technical Committee", "UAT Test Scripts"],
    default_output_folder: "outputs/markdown/governance_documents",
    prompt_file: "prompts/generation_prompt.md",
    document_classification_guidance: [
      "Classify signed or final proposal material as Approved proposal.",
      "Classify implementation terms, bid requirements and client project instructions as Client TOR.",
      "Classify manuals, module descriptions and user guidance as DMS system documentation.",
      "Classify system diagrams, architecture packs and technical platform documents as DMS architecture documentation.",
      "Classify policies, SOPs and governance rules as Client policies and procedures."
    ]
  },
  document_review_agent: {
    id: "document_review_agent",
    name: "Document Review Agent",
    purpose: "Reviews documents for compliance, gaps, audit readiness, evidence quality and framework alignment.",
    required_inputs: ["Document to be reviewed"],
    optional_inputs: ["GIAMA Act", "FIDPM / LGFIDPM", "C-AMP guideline", "U-AMP guideline", "GRAP standards", "IFRS standards", "mSCOA requirements", "PFMA / MFMA", "PMBOK 7", "ISO 9001", "TOGAF", "Client policies and procedures", "Ad hoc review requirements", "Other custom review documents"],
    allowed_inputs: ["Document to be reviewed", "GIAMA Act", "FIDPM / LGFIDPM", "C-AMP guideline", "U-AMP guideline", "GRAP standards", "IFRS standards", "mSCOA requirements", "PFMA / MFMA", "PMBOK 7", "ISO 9001", "TOGAF", "Client policies and procedures", "Ad hoc review requirements", "Other custom review documents"],
    allowed_outputs: ["Gap Analysis Report", "Improvement Action Plan", "Executive Review Summary"],
    default_output_folder: "outputs/markdown/review_reports",
    prompt_file: "prompts/review_prompt.md",
    document_classification_guidance: [
      "Classify the main source document selected for assessment as Document to be reviewed.",
      "Classify statutory and regulatory references by their approved names in the allowed inputs list.",
      "Classify client-specific policy documents as Client policies and procedures.",
      "Classify custom review instructions, ad hoc criteria and reviewer notes as Ad hoc review requirements."
    ]
  },
  workflow_agent: {
    id: "workflow_agent",
    name: "Workflow Agent",
    purpose: "Designs structured workflows for implementation in the DMS InTouch module.",
    required_inputs: ["Business process description OR SOP OR Client policy OR Existing workflow example OR User interview notes OR Mini Workflow Brief"],
    optional_inputs: ["Client TOR", "Approved proposal", "Compliance requirements"],
    allowed_inputs: ["Client TOR", "Approved proposal", "Business process description", "SOP", "Client policy", "Existing workflow example", "User interview notes", "Compliance requirements", "Mini Workflow Brief"],
    allowed_outputs: ["Workflow Design Document", "Workflow Steps", "Roles and Responsibilities Matrix", "SLA / Escalation Rules", "InTouch Configuration Notes"],
    default_output_folder: "outputs/markdown/workflow_documents",
    prompt_file: "prompts/workflow_prompt.md",
    document_classification_guidance: [
      "Classify plain process descriptions as Business process description.",
      "Classify formal step-by-step procedures as SOP.",
      "Classify approved organisational process rules as Client policy.",
      "Classify prior workflow designs or configuration examples as Existing workflow example.",
      "Classify workshop notes, interview notes and discovery notes as User interview notes.",
      "Treat Mini Workflow Brief as a first-class input object."
    ]
  }
};

const appState = {
  configSource: "loading",
  appConfig: {
    app_name: "DMS Implementing Agent 2.0",
    version: "1.5"
  },
  data: null,
  selectedAgentId: "",
  selectedInputs: new Set(),
  selectedOutputs: new Set()
};

const elements = {};

document.addEventListener("DOMContentLoaded", init);

async function init() {
  bindElements();
  bindActions();
  appState.data = await loadConfiguration();
  renderApp();
}

function bindElements() {
  [
    "config-banner",
    "agent-list",
    "agent-count",
    "agent-detail",
    "classification-list",
    "output-list",
    "output-count",
    "workflow-brief-panel",
    "template-status-list",
    "warning-list",
    "warning-count",
    "prompt-preview",
    "action-status",
    "generate-prompt",
    "copy-prompt",
    "download-report"
  ].forEach((id) => {
    elements[toCamel(id)] = document.getElementById(id);
  });
}

function bindActions() {
  document.addEventListener("input", (event) => {
    if (event.target.matches("input, textarea")) {
      renderWarnings();
    }
  });

  elements.generatePrompt.addEventListener("click", generateControlledPrompt);
  elements.copyPrompt.addEventListener("click", copyPrompt);
  elements.downloadReport.addEventListener("click", downloadSessionReport);
  elements.downloadReport.disabled = false;
  elements.downloadReport.title = "Download Markdown session report.";
}

async function loadConfiguration() {
  try {
    appState.appConfig = await fetchJson(DATA_PATHS.appConfig);
  } catch (error) {
    appState.appConfig = {
      app_name: "DMS Implementing Agent 2.0",
      version: "1.5"
    };
  }

  try {
    const [agentRegistry, outputRegistry, templateManifest] = await Promise.all([
      fetchJson(DATA_PATHS.agentRegistry),
      fetchJson(DATA_PATHS.outputRegistry),
      fetchJson(DATA_PATHS.templateManifest)
    ]);

    const agentDefinitions = {};
    await Promise.all(Object.entries(DATA_PATHS.agentDefinitions).map(async ([id, path]) => {
      agentDefinitions[id] = await fetchJson(path);
    }));

    appState.configSource = "repository";
    return {
      non_authoritative: false,
      agentRegistry,
      outputRegistry,
      templateManifest,
      agentDefinitions
    };
  } catch (error) {
    console.warn("Repository JSON configuration unavailable. Using fallback configuration.", error);
    appState.configSource = "fallback";
    return buildFallbackConfiguration();
  }
}

async function fetchJson(path) {
  const response = await fetch(path, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Unable to load ${path}`);
  }
  return response.json();
}

function buildFallbackConfiguration() {
  const outputs = FALLBACK_OUTPUT_ROWS.map(([id, label, agentId, category, templateFile, outputFolder]) => ({
    id,
    label,
    agent_id: agentId,
    category,
    description: "Fallback display record for local static UI testing.",
    template_file: templateFile,
    template_type: "markdown",
    output_format: "markdown",
    output_folder: outputFolder,
    enabled_in_v1: true,
    required_inputs: [],
    optional_inputs: [],
    missing_information_placeholder: "To be confirmed",
    suggested_file_name_pattern: "{session_name}_{output_label}_Draft_v01.md",
    selected_output_only_rule: true,
    supports_partial_data: true
  }));

  const agents = Object.values(FALLBACK_AGENT_DEFINITIONS).map((agent, index) => ({
    id: agent.id,
    name: agent.name,
    version: "1.0",
    status: "fallback",
    agent_file: `knowledge_base/agents/${agent.id}.json`,
    prompt_file: agent.prompt_file,
    template_group: getTemplateGroup(agent.id),
    default_output_folder: agent.default_output_folder,
    enabled_in_v1: true,
    ui_order: index + 1,
    description: agent.purpose
  }));

  return {
    non_authoritative: true,
    agentRegistry: {
      version: "1.0",
      status: "fallback",
      purpose: "Non-authoritative fallback agent registry for local static UI testing.",
      agents
    },
    outputRegistry: {
      version: "1.0",
      status: "fallback",
      output_format: "markdown",
      missing_information_placeholder: "To be confirmed",
      generate_only_selected_outputs: true,
      outputs
    },
    templateManifest: {
      version: "1.0",
      status: "fallback",
      template_type: "markdown",
      templates: outputs.map((output) => ({
        template_id: `${output.id}_template`,
        template_name: `${output.label} Template`,
        template_file: output.template_file,
        template_type: "markdown",
        output_id: output.id,
        agent_id: output.agent_id,
        template_group: getTemplateGroup(output.agent_id),
        version: "1.0",
        status: "active",
        missing_information_rule: "To be confirmed"
      }))
    },
    agentDefinitions: FALLBACK_AGENT_DEFINITIONS
  };
}

function renderApp() {
  renderConfigBanner();
  renderAgents();
  renderSelectedAgent();
  renderWarnings();
}

function renderConfigBanner() {
  const banner = elements.configBanner;
  banner.className = "status-banner";
  if (appState.configSource === "repository") {
    banner.classList.add("status-ok");
    banner.textContent = "Repository JSON configuration loaded.";
    return;
  }

  banner.classList.add("status-fallback");
  banner.textContent = "Fallback configuration loaded. Repository JSON not available. Use only for local UI testing.";
}

function renderAgents() {
  const agents = getAgents();
  elements.agentCount.textContent = String(agents.length);
  elements.agentList.innerHTML = agents.map((agent) => `
    <button class="agent-card ${agent.id === appState.selectedAgentId ? "selected" : ""}" type="button" data-agent-id="${escapeAttribute(agent.id)}">
      <span>${escapeHtml(agent.name)}</span>
      <small>${escapeHtml(agent.description || "V1 Markdown-first agent")}</small>
    </button>
  `).join("");

  elements.agentList.querySelectorAll("[data-agent-id]").forEach((button) => {
    button.addEventListener("click", () => selectAgent(button.dataset.agentId));
  });
}

function selectAgent(agentId) {
  appState.selectedAgentId = agentId;
  appState.selectedInputs.clear();
  appState.selectedOutputs.clear();
  renderAgents();
  renderSelectedAgent();
  setActionStatus("");
}

function renderSelectedAgent() {
  const agentDefinition = getSelectedAgentDefinition();
  const agentRegistryRecord = getSelectedAgentRegistryRecord();
  const isWorkflow = appState.selectedAgentId === "workflow_agent";

  elements.workflowBriefPanel.classList.toggle("hidden", !isWorkflow);

  if (!agentDefinition || !agentRegistryRecord) {
    elements.agentDetail.innerHTML = `<div class="detail-empty">Select an agent to view its V1 controls.</div>`;
    elements.classificationList.innerHTML = "Select an agent first.";
    elements.classificationList.classList.add("muted-block");
    elements.outputList.innerHTML = "Select an agent first.";
    elements.outputList.classList.add("muted-block");
    elements.outputCount.textContent = "0";
    elements.templateStatusList.innerHTML = "Select one or more outputs.";
    elements.templateStatusList.classList.add("muted-block");
    renderWarnings();
    return;
  }

  elements.agentDetail.innerHTML = `
    <div class="detail-stack">
      <div>
        <h3>${escapeHtml(agentDefinition.name)}</h3>
        <p>${escapeHtml(agentDefinition.purpose || agentRegistryRecord.description || "")}</p>
      </div>
      ${renderKeyValue("Default output folder", agentRegistryRecord.default_output_folder || agentDefinition.default_output_folder)}
      ${renderKeyValue("Prompt file", agentRegistryRecord.prompt_file || agentDefinition.prompt_file)}
      ${renderList("Required inputs", agentDefinition.required_inputs)}
      ${renderList("Optional inputs", agentDefinition.optional_inputs)}
      ${renderList("Document classification guidance", agentDefinition.document_classification_guidance)}
      ${renderList("Allowed outputs", agentDefinition.allowed_outputs)}
    </div>
  `;

  renderClassifications(agentDefinition);
  renderOutputs();
  renderTemplateStatus();
  renderWarnings();
}

function renderClassifications(agentDefinition) {
  const inputs = agentDefinition.allowed_inputs || [];
  elements.classificationList.classList.remove("muted-block");
  elements.classificationList.innerHTML = inputs.map((input) => `
    <label class="check-row">
      <input type="checkbox" value="${escapeAttribute(input)}" ${appState.selectedInputs.has(input) ? "checked" : ""}>
      <span>${escapeHtml(input)}</span>
    </label>
  `).join("");

  elements.classificationList.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      checkbox.checked ? appState.selectedInputs.add(checkbox.value) : appState.selectedInputs.delete(checkbox.value);
      renderWarnings();
    });
  });
}

function renderOutputs() {
  const outputs = getOutputsForSelectedAgent();
  elements.outputCount.textContent = String(outputs.length);
  elements.outputList.classList.remove("muted-block");

  if (outputs.length === 0) {
    elements.outputList.innerHTML = `<div class="detail-empty">No enabled V1 outputs found for this agent.</div>`;
    return;
  }

  elements.outputList.innerHTML = outputs.map((output) => `
    <label class="output-row">
      <input type="checkbox" value="${escapeAttribute(output.id)}" ${appState.selectedOutputs.has(output.id) ? "checked" : ""}>
      <span class="output-main">
        <strong>${escapeHtml(output.label)}</strong>
        <small>ID: ${escapeHtml(output.id)}</small>
        <small>Template: ${escapeHtml(output.template_file)}</small>
        <small>Folder: ${escapeHtml(output.output_folder)}</small>
        <small>Pattern: ${escapeHtml(output.suggested_file_name_pattern)}</small>
      </span>
    </label>
  `).join("");

  elements.outputList.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      checkbox.checked ? appState.selectedOutputs.add(checkbox.value) : appState.selectedOutputs.delete(checkbox.value);
      renderTemplateStatus();
      renderWarnings();
    });
  });
}

function renderTemplateStatus() {
  const selectedOutputs = getSelectedOutputs();
  if (selectedOutputs.length === 0) {
    elements.templateStatusList.innerHTML = "Select one or more outputs.";
    elements.templateStatusList.classList.add("muted-block");
    return;
  }

  elements.templateStatusList.classList.remove("muted-block");
  elements.templateStatusList.innerHTML = selectedOutputs.map((output) => {
    const manifestEntry = getManifestEntry(output.id);
    const isListed = Boolean(manifestEntry);
    return `
      <div class="template-row ${manifestEntry?.status === "active" ? "template-active" : "template-missing"}">
        <strong>${escapeHtml(output.label)}</strong>
        <span>Template file path: <code>${escapeHtml(manifestEntry?.template_file || output.template_file || "To be confirmed")}</code></span>
        <span>Listed in manifest: ${isListed ? "Yes" : "No"}</span>
        <span>Manifest status: ${escapeHtml(manifestEntry?.status || "To be confirmed")}</span>
        <span>Template type: ${escapeHtml(manifestEntry?.template_type || "To be confirmed")}</span>
      </div>
    `;
  }).join("");
}

function renderWarnings() {
  const warnings = getWarnings();
  elements.warningCount.textContent = String(warnings.length);

  if (warnings.length === 0) {
    elements.warningList.innerHTML = `<div class="success-message">No V1.4 prompt warnings for the current selection.</div>`;
    return;
  }

  elements.warningList.innerHTML = warnings.map((warning) => `
    <div class="warning-row">${escapeHtml(warning)}</div>
  `).join("");
}

function getWarnings() {
  const warnings = [];
  const agentDefinition = getSelectedAgentDefinition();

  if (!appState.selectedAgentId) {
    warnings.push("No agent selected.");
  }

  if (appState.configSource === "fallback") {
    warnings.push("Fallback configuration active.");
  }

  if (appState.selectedAgentId && appState.selectedOutputs.size === 0) {
    warnings.push("No output selected.");
  }

  if (agentDefinition) {
    if (appState.selectedAgentId === "workflow_agent") {
      const hasMiniBrief = getMiniWorkflowBriefValues().some((value) => value.trim().length > 0);
      if (!hasWorkflowProcessSource() && !hasMiniBrief) {
        warnings.push("Workflow Agent selected without process source and without Mini Workflow Brief.");
      }
    } else {
      (agentDefinition.required_inputs || []).forEach((input) => {
        if (!appState.selectedInputs.has(input)) {
          warnings.push(`Missing required document classification: ${input}.`);
        }
      });
    }
  }

  getSelectedOutputs().forEach((output) => {
    const manifestEntry = getManifestEntry(output.id);
    if (!manifestEntry || manifestEntry.status !== "active") {
      warnings.push(`Selected output has no active template manifest entry: ${output.label}.`);
    }
  });

  return warnings;
}

function generateControlledPrompt() {
  const blockingWarnings = getPromptBlockingWarnings();
  renderWarnings();

  if (blockingWarnings.length > 0) {
    setActionStatus(`Controlled prompt not generated. Resolve: ${blockingWarnings.join(" ")}`);
    return null;
  }

  const prompt = buildControlledPrompt();
  elements.promptPreview.value = prompt;
  setActionStatus("Controlled prompt generated for selected outputs only.");
  return prompt;
}

function buildControlledPrompt() {
  const session = getSessionValues();
  const agentDefinition = getSelectedAgentDefinition();
  const agentRegistryRecord = getSelectedAgentRegistryRecord();
  const selectedOutputs = getSelectedOutputs();
  const selectedClassifications = Array.from(appState.selectedInputs);
  const missingRequiredInputs = getMissingRequiredInputs(agentDefinition);
  const selectedOptionalInputs = getSelectedOptionalInputs(agentDefinition);
  const validationWarnings = getWarnings();
  const lines = [];

  lines.push("# DMS Implementing Agent 2.0 — Controlled Prompt");
  lines.push("");
  lines.push("## 1. Prompt Header");
  lines.push(`- Session Name: ${session.sessionName || "To be confirmed"}`);
  lines.push(`- Client Name: ${session.clientName || "To be confirmed"}`);
  lines.push(`- Project Name: ${session.projectName || "To be confirmed"}`);
  lines.push(`- Contract / Bid Number: ${session.contractNumber || "To be confirmed"}`);
  lines.push(`- Prepared By: ${session.preparedBy || "To be confirmed"}`);
  lines.push(`- Date generated: ${new Date().toLocaleString()}`);
  lines.push(`- Configuration mode: ${getConfigurationModeLabel()}`);
  lines.push(`- Session Notes: ${session.sessionNotes || "To be confirmed"}`);
  lines.push("");

  lines.push("## 2. Agent Context");
  lines.push(`- Selected agent ID: ${appState.selectedAgentId || "To be confirmed"}`);
  lines.push(`- Selected agent name: ${agentDefinition?.name || "To be confirmed"}`);
  lines.push(`- Agent purpose: ${agentDefinition?.purpose || agentRegistryRecord?.description || "To be confirmed"}`);
  lines.push(`- Agent prompt file: ${agentRegistryRecord?.prompt_file || agentDefinition?.prompt_file || "To be confirmed"}`);
  lines.push(`- Agent default output folder: ${agentRegistryRecord?.default_output_folder || agentDefinition?.default_output_folder || "To be confirmed"}`);
  lines.push(`- Agent template group: ${agentRegistryRecord?.template_group || getTemplateGroup(appState.selectedAgentId)}`);
  lines.push("");

  lines.push("## 3. Source Document Classification");
  appendBulletList(lines, "Selected document classifications only", selectedClassifications);
  appendBulletList(lines, "Required inputs not selected", missingRequiredInputs);
  appendBulletList(lines, "Optional inputs selected", selectedOptionalInputs);
  lines.push("- The user must upload/provide the actual session documents to ChatGPT/Codex together with this prompt.");
  lines.push("");

  lines.push("## 4. Selected Outputs");
  lines.push("Generate selected outputs only. Do not generate unselected outputs.");
  selectedOutputs.forEach((output, index) => appendSelectedOutput(lines, output, index + 1));

  if (appState.selectedAgentId === "workflow_agent") {
    appendMiniWorkflowBrief(lines);
  }

  lines.push("## 6. Agent-Specific Instructions");
  appendAgentSpecificInstructions(lines, appState.selectedAgentId);

  lines.push("## 7. Global Rules");
  [
    "Use uploaded/session documents only for the current session.",
    "Do not permanently update the knowledge base.",
    "Generate selected outputs only.",
    "Do not generate unselected outputs.",
    "Do not invent facts, names, dates, prices, certifications or reference details.",
    "Mark missing information as \"To be confirmed\".",
    "Use formal public-sector consulting language.",
    "Use Markdown-first output structure.",
    "Use numbered headings.",
    "Use tables for compliance, requirements, roles, risks, findings, deliverables, workflows, action plans and sign-off sections where appropriate.",
    "Do not create DOCX output in Version 1.x.",
    "Do not claim documents are final, approved or signed unless source evidence confirms this."
  ].forEach((rule) => lines.push(`- ${rule}`));
  lines.push("");

  lines.push("## 8. Output Formatting Instructions");
  selectedOutputs.forEach((output, index) => {
    const manifestEntry = getManifestEntry(output.id);
    lines.push(`### 8.${index + 1}. ${output.label}`);
    lines.push("- Start with the document title.");
    lines.push(`- Follow the relevant Markdown template file structure: ${manifestEntry?.template_file || output.template_file || "To be confirmed"}.`);
    lines.push("- Include Document Control where relevant.");
    lines.push("- Include Source Documents Used.");
    lines.push("- Include Assumptions and Items To Be Confirmed.");
    lines.push("- Include Final Review Checklist.");
    lines.push("- Return this selected output separately.");
    lines.push("- Do not include unselected outputs.");
    lines.push("");
  });

  lines.push("## 9. Validation Warnings");
  appendBulletList(lines, "Current UI validation warnings", validationWarnings);

  return lines.join("\n");
}

function appendSelectedOutput(lines, output, number) {
  const manifestEntry = getManifestEntry(output.id);
  lines.push("");
  lines.push(`### 4.${number}. ${output.label}`);
  lines.push(`- Output ID: ${output.id}`);
  lines.push(`- Output label: ${output.label}`);
  lines.push(`- Output category: ${output.category || "To be confirmed"}`);
  lines.push(`- Template file: ${manifestEntry?.template_file || output.template_file || "To be confirmed"}`);
  lines.push(`- Template status from template_manifest: ${manifestEntry?.status || "To be confirmed"}`);
  lines.push(`- Output folder: ${output.output_folder || "To be confirmed"}`);
  lines.push(`- Suggested file name pattern: ${output.suggested_file_name_pattern || "To be confirmed"}`);
  appendIndentedList(lines, "Required inputs", output.required_inputs);
  appendIndentedList(lines, "Optional inputs", output.optional_inputs);
  appendIndentedList(lines, "Quality rules", output.quality_rules);
  lines.push(`- supports_partial_data: ${output.supports_partial_data === true ? "true" : "false"}`);
}

function appendMiniWorkflowBrief(lines) {
  const hasMiniBrief = getMiniWorkflowBriefValues().some((value) => value.trim().length > 0);
  const hasProcessSource = hasWorkflowProcessSource();
  lines.push("");
  lines.push("## 5. Mini Workflow Brief");
  if (hasMiniBrief) {
    lines.push(`- Workflow Description / What must happen: ${getValue("workflow-description") || "To be confirmed"}`);
    lines.push(`- Workflow Rules / Conditions: ${getValue("workflow-rules") || "To be confirmed"}`);
    lines.push(`- Roles / People involved: ${getValue("workflow-roles") || "To be confirmed"}`);
    lines.push(`- Expected outcome: ${getValue("workflow-outcome") || "To be confirmed"}`);
  } else {
    lines.push("- Workflow Description / What must happen: To be confirmed");
    lines.push("- Workflow Rules / Conditions: To be confirmed");
    lines.push("- Roles / People involved: To be confirmed");
    lines.push("- Expected outcome: To be confirmed");
  }
  if (!hasProcessSource && !hasMiniBrief) {
    lines.push("- Warning: Workflow source information is incomplete. Complete the Mini Workflow Brief or provide a process/SOP/policy/workflow source document.");
  }
  lines.push("");
}

function appendAgentSpecificInstructions(lines, agentId) {
  const instructions = {
    proposal_preparation_agent: [
      "Prepare a compliant and high-scoring DMS bid proposal.",
      "Use the TOR/RFQ/RFP, bid specification, previous proposal example and company/DMS documents where provided.",
      "Do not invent pricing, certifications, references, accreditation or compliance evidence.",
      "Mark missing pricing/evidence as \"To be confirmed\".",
      "Generate Proposal only when Proposal is selected."
    ],
    project_governance_agent: [
      "Create controlled, auditable DMS project governance and implementation documentation.",
      "Use approved proposal, client TOR, DMS system documentation, DMS architecture documentation, client requirements and policies where provided.",
      "Include governance, scope, roles, responsibilities, deliverables, milestones, risks, assumptions, dependencies, quality controls, communication/reporting and sign-off where relevant.",
      "Do not copy client-specific details from examples unless they apply to the current session.",
      "Generate selected governance outputs only."
    ],
    document_review_agent: [
      "Review the selected document for compliance, gaps, audit readiness, evidence quality and framework alignment.",
      "Use loaded frameworks, legislation, standards, policies, SOPs, guidelines or previous review examples where provided.",
      "If no supporting review source is loaded, use the core Document Review Agent framework rules.",
      "Findings must include gap, impact, risk, recommendation and required evidence where relevant.",
      "Use severity levels where appropriate: Critical, High, Medium, Low.",
      "Generate selected review outputs only."
    ],
    workflow_agent: [
      "Design structured workflows for implementation in the DMS InTouch module.",
      "Use SOPs, policies, business process descriptions, workflow examples, interview notes and compliance requirements where provided.",
      "If no process document is provided, use the Mini Workflow Brief.",
      "Include workflow steps, roles, decision points, statuses, SLA/escalation rules, notifications, exceptions and InTouch configuration notes where relevant.",
      "Generate selected workflow outputs only."
    ]
  };

  (instructions[agentId] || ["To be confirmed"]).forEach((instruction) => lines.push(`- ${instruction}`));
  lines.push("");
}

function getPromptBlockingWarnings() {
  const blockingWarnings = [];
  if (!appState.selectedAgentId) {
    blockingWarnings.push("No agent selected.");
  }
  if (appState.selectedAgentId && appState.selectedOutputs.size === 0) {
    blockingWarnings.push("No output selected.");
  }
  getSelectedOutputs().forEach((output) => {
    const manifestEntry = getManifestEntry(output.id);
    if (!manifestEntry || manifestEntry.status !== "active") {
      blockingWarnings.push(`Selected output has no active template manifest entry: ${output.label}.`);
    }
  });
  return blockingWarnings;
}

function getConfigurationModeLabel() {
  if (appState.configSource === "repository") {
    return "Repository JSON configuration";
  }
  return "Embedded fallback configuration, non-authoritative";
}

function getMissingRequiredInputs(agentDefinition) {
  if (!agentDefinition) {
    return [];
  }
  if (appState.selectedAgentId === "workflow_agent") {
    const hasMiniBrief = getMiniWorkflowBriefValues().some((value) => value.trim().length > 0);
    return hasWorkflowProcessSource() || hasMiniBrief ? [] : (agentDefinition.required_inputs || []);
  }
  return (agentDefinition.required_inputs || []).filter((input) => !appState.selectedInputs.has(input));
}

function getSelectedRequiredInputs(agentDefinition) {
  if (!agentDefinition) {
    return [];
  }
  if (appState.selectedAgentId === "workflow_agent") {
    const hasMiniBrief = getMiniWorkflowBriefValues().some((value) => value.trim().length > 0);
    return hasWorkflowProcessSource() || hasMiniBrief ? (agentDefinition.required_inputs || []) : [];
  }
  return (agentDefinition.required_inputs || []).filter((input) => appState.selectedInputs.has(input));
}

function getSelectedOptionalInputs(agentDefinition) {
  if (!agentDefinition) {
    return [];
  }
  const optionalInputs = new Set(agentDefinition.optional_inputs || []);
  return Array.from(appState.selectedInputs).filter((input) => optionalInputs.has(input));
}

function getOptionalInputsNotSelected(agentDefinition) {
  if (!agentDefinition) {
    return [];
  }
  return (agentDefinition.optional_inputs || []).filter((input) => !appState.selectedInputs.has(input));
}

function hasWorkflowProcessSource() {
  return ["Business process description", "SOP", "Client policy", "Existing workflow example", "User interview notes", "Mini Workflow Brief"]
    .some((input) => appState.selectedInputs.has(input));
}

function appendBulletList(lines, title, items = []) {
  lines.push(`- ${title}:`);
  if (!items.length) {
    lines.push("  - To be confirmed");
    return;
  }
  items.forEach((item) => lines.push(`  - ${item}`));
}

function appendIndentedList(lines, title, items = []) {
  lines.push(`- ${title}:`);
  if (!items || items.length === 0) {
    lines.push("  - To be confirmed");
    return;
  }
  items.forEach((item) => lines.push(`  - ${item}`));
}

async function copyPrompt() {
  try {
    await navigator.clipboard.writeText(elements.promptPreview.value);
    setActionStatus("Prompt preview copied.");
  } catch (error) {
    elements.promptPreview.select();
    document.execCommand("copy");
    setActionStatus("Prompt preview copied using browser fallback.");
  }
}

function downloadSessionReport() {
  const report = buildSessionReport();
  const filename = getSessionReportFileName();
  triggerMarkdownDownload(report, filename);
  setActionStatus(`Session report prepared for download: ${filename}`);
  return { filename, report };
}

function buildSessionReport() {
  const session = getSessionValues();
  const agentDefinition = getSelectedAgentDefinition();
  const agentRegistryRecord = getSelectedAgentRegistryRecord();
  const selectedOutputs = getSelectedOutputs();
  const validationWarnings = getWarnings();
  const lines = [];

  lines.push("# DMS Implementing Agent 2.0 — Session Report");
  lines.push("");

  lines.push("## 1. Report Metadata");
  lines.push(`- Date generated: ${new Date().toLocaleString()}`);
  lines.push(`- Configuration mode: ${getConfigurationModeLabel()}`);
  lines.push(`- App version: ${appState.appConfig?.version || "To be confirmed"}`);
  lines.push("");

  lines.push("## 2. Session Details");
  lines.push(`- Session Name: ${session.sessionName || "To be confirmed"}`);
  lines.push(`- Client Name: ${session.clientName || "To be confirmed"}`);
  lines.push(`- Project Name: ${session.projectName || "To be confirmed"}`);
  lines.push(`- Contract / Bid Number: ${session.contractNumber || "To be confirmed"}`);
  lines.push(`- Prepared By: ${session.preparedBy || "To be confirmed"}`);
  lines.push(`- Session Notes: ${session.sessionNotes || "To be confirmed"}`);
  lines.push("");

  lines.push("## 3. Selected Agent");
  lines.push(`- Agent ID: ${appState.selectedAgentId || "To be confirmed"}`);
  lines.push(`- Agent Name: ${agentDefinition?.name || "To be confirmed"}`);
  lines.push(`- Agent Purpose: ${agentDefinition?.purpose || agentRegistryRecord?.description || "To be confirmed"}`);
  lines.push(`- Prompt file: ${agentRegistryRecord?.prompt_file || agentDefinition?.prompt_file || "To be confirmed"}`);
  lines.push(`- Template group: ${agentRegistryRecord?.template_group || getTemplateGroup(appState.selectedAgentId)}`);
  lines.push(`- Default output folder: ${agentRegistryRecord?.default_output_folder || agentDefinition?.default_output_folder || "To be confirmed"}`);
  lines.push("");

  lines.push("## 4. Document Classifications");
  appendBulletList(lines, "Selected document classifications", Array.from(appState.selectedInputs));
  appendBulletList(lines, "Required inputs selected", getSelectedRequiredInputs(agentDefinition));
  appendBulletList(lines, "Required inputs missing", getMissingRequiredInputs(agentDefinition));
  appendBulletList(lines, "Optional inputs selected", getSelectedOptionalInputs(agentDefinition));
  appendBulletList(lines, "Optional inputs not selected", getOptionalInputsNotSelected(agentDefinition));
  lines.push("");

  lines.push("## 5. Selected Outputs");
  if (selectedOutputs.length === 0) {
    lines.push("- To be confirmed");
  } else {
    selectedOutputs.forEach((output, index) => appendSessionReportOutput(lines, output, index + 1));
  }
  lines.push("");

  lines.push("## 6. Mini Workflow Brief");
  appendSessionReportMiniWorkflowBrief(lines);

  lines.push("## 7. Validation Warnings");
  if (validationWarnings.length === 0) {
    lines.push("- No validation warnings at time of report generation.");
  } else {
    validationWarnings.forEach((warning) => lines.push(`- ${warning}`));
  }
  lines.push("");

  lines.push("## 8. Controlled Prompt");
  lines.push("```text");
  lines.push(getControlledPromptForReport());
  lines.push("```");
  lines.push("");

  lines.push("## 9. Suggested Output Save Plan");
  if (selectedOutputs.length === 0) {
    lines.push("- To be confirmed");
  } else {
    selectedOutputs.forEach((output) => {
      lines.push(`- ${output.label}`);
      lines.push(`  - Suggested file name: ${getSuggestedOutputFileName(output)}`);
      lines.push(`  - Suggested output folder: ${output.output_folder || "To be confirmed"}`);
      lines.push("  - Output format: Markdown");
      lines.push("  - Status: Draft");
    });
  }
  lines.push("");

  lines.push("## 10. Session Completion Checklist");
  [
    "Confirm the correct agent was selected.",
    "Confirm required source documents were uploaded/provided to ChatGPT/Codex.",
    "Confirm session documents were classified correctly.",
    "Confirm selected outputs only were generated.",
    "Confirm no unselected outputs were generated.",
    "Confirm missing information was marked \"To be confirmed\".",
    "Confirm generated Markdown outputs were reviewed.",
    "Confirm outputs were saved in the suggested output folders.",
    "Confirm session report was saved.",
    "Confirm V1 did not generate DOCX files."
  ].forEach((item) => lines.push(`- [ ] ${item}`));
  lines.push("");

  lines.push("## 11. V1 Scope Control Notice");
  lines.push("This Version 1.x session report is a control artifact only. It does not represent an automatically generated client deliverable. Version 1.x uses Markdown-first prompt control and does not perform DOCX generation.");

  return lines.join("\n");
}

function appendSessionReportOutput(lines, output, number) {
  const manifestEntry = getManifestEntry(output.id);
  lines.push(`### 5.${number}. ${output.label}`);
  lines.push(`- Output ID: ${output.id}`);
  lines.push(`- Output Label: ${output.label}`);
  lines.push(`- Category: ${output.category || "To be confirmed"}`);
  lines.push(`- Template File: ${manifestEntry?.template_file || output.template_file || "To be confirmed"}`);
  lines.push(`- Template Status: ${manifestEntry?.status || "To be confirmed"}`);
  lines.push(`- Output Folder: ${output.output_folder || "To be confirmed"}`);
  lines.push(`- Suggested File Name Pattern: ${output.suggested_file_name_pattern || "To be confirmed"}`);
  lines.push(`- Supports Partial Data: ${output.supports_partial_data === true ? "true" : "false"}`);
  appendIndentedList(lines, "Quality Rules", output.quality_rules);
  lines.push("");
}

function appendSessionReportMiniWorkflowBrief(lines) {
  if (appState.selectedAgentId !== "workflow_agent") {
    lines.push("- Not applicable.");
    lines.push("");
    return;
  }

  lines.push(`- Workflow Description / What must happen: ${getValue("workflow-description") || "To be confirmed"}`);
  lines.push(`- Workflow Rules / Conditions: ${getValue("workflow-rules") || "To be confirmed"}`);
  lines.push(`- Roles / People involved: ${getValue("workflow-roles") || "To be confirmed"}`);
  lines.push(`- Expected outcome: ${getValue("workflow-outcome") || "To be confirmed"}`);
  lines.push("");
}

function getControlledPromptForReport() {
  const currentPrompt = elements.promptPreview?.value || "";
  if (currentPrompt.startsWith("# DMS Implementing Agent 2.0")) {
    return currentPrompt;
  }
  return "Controlled prompt has not yet been generated.";
}

function getSessionReportFileName() {
  const sessionName = getSessionValues().sessionName;
  if (!sessionName) {
    return "DMS_Session_Report_v01.md";
  }
  return `${sanitizeFileComponent(sessionName)}_Session_Report_v01.md`;
}

function getSuggestedOutputFileName(output) {
  const sessionName = sanitizeFileComponent(getSessionValues().sessionName || "DMS_Session");
  const outputLabel = sanitizeFileComponent(output.label || output.id || "Selected_Output");
  const pattern = output.suggested_file_name_pattern || "{session_name}_{output_label}_Draft_v01.md";
  return pattern
    .replaceAll("{session_name}", sessionName)
    .replaceAll("{output_label}", outputLabel);
}

function sanitizeFileComponent(value) {
  const safe = String(value || "")
    .trim()
    .replace(/[^a-zA-Z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
  return safe || "DMS";
}

function triggerMarkdownDownload(markdown, filename) {
  const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function getAgents() {
  return [...(appState.data?.agentRegistry?.agents || [])]
    .filter((agent) => agent.enabled_in_v1)
    .sort((a, b) => (a.ui_order || 99) - (b.ui_order || 99));
}

function getSelectedAgentRegistryRecord() {
  return getAgents().find((agent) => agent.id === appState.selectedAgentId);
}

function getSelectedAgentDefinition() {
  return appState.data?.agentDefinitions?.[appState.selectedAgentId];
}

function getOutputsForSelectedAgent() {
  return (appState.data?.outputRegistry?.outputs || [])
    .filter((output) => output.agent_id === appState.selectedAgentId && output.enabled_in_v1 === true);
}

function getSelectedOutputs() {
  const outputs = appState.data?.outputRegistry?.outputs || [];
  return outputs.filter((output) => output.agent_id === appState.selectedAgentId && appState.selectedOutputs.has(output.id));
}

function getManifestEntry(outputId) {
  return (appState.data?.templateManifest?.templates || []).find((template) => template.output_id === outputId);
}

function getTemplateGroup(agentId) {
  const groups = {
    proposal_preparation_agent: "proposal_templates",
    project_governance_agent: "project_governance_templates",
    document_review_agent: "review_templates",
    workflow_agent: "workflow_templates"
  };
  return groups[agentId] || "To be confirmed";
}

function getSessionValues() {
  return {
    sessionName: getValue("session-name"),
    clientName: getValue("client-name"),
    projectName: getValue("project-name"),
    contractNumber: getValue("contract-number"),
    preparedBy: getValue("prepared-by"),
    sessionNotes: getValue("session-notes")
  };
}

function getMiniWorkflowBriefValues() {
  return [
    getValue("workflow-description"),
    getValue("workflow-rules"),
    getValue("workflow-roles"),
    getValue("workflow-outcome")
  ];
}

function getValue(id) {
  return document.getElementById(id)?.value.trim() || "";
}

function renderKeyValue(label, value) {
  return `
    <div class="key-value">
      <span>${escapeHtml(label)}</span>
      <code>${escapeHtml(value || "To be confirmed")}</code>
    </div>
  `;
}

function renderList(title, items = []) {
  if (!items.length) {
    return "";
  }
  return `
    <div>
      <h4>${escapeHtml(title)}</h4>
      <ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    </div>
  `;
}

function setActionStatus(message) {
  elements.actionStatus.textContent = message;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/`/g, "&#096;");
}

function toCamel(value) {
  return value.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}
