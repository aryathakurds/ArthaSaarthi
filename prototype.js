const sidebar = document.getElementById("sidebar");
const resizeHandle = document.getElementById("resizeHandle");
const collapseBtn = document.getElementById("collapseBtn");
const navItems = document.querySelectorAll(".nav-item");
const pages = document.querySelectorAll(".page");

const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatWindow = document.getElementById("chatWindow");
const quickPrompts = document.querySelectorAll(".quick-prompts button");

const simulateBtn = document.getElementById("simulateBtn");
const loanAmount = document.getElementById("loanAmount");
const interestRate = document.getElementById("interestRate");
const tenureMonths = document.getElementById("tenureMonths");
const investmentAmount = document.getElementById("investmentAmount");
const investmentReturn = document.getElementById("investmentReturn");
const investmentYears = document.getElementById("investmentYears");

const simulationOutput = document.getElementById("simulationOutput");
const emiOutput = document.getElementById("emiOutput");
const interestOutput = document.getElementById("interestOutput");
const corpusOutput = document.getElementById("corpusOutput");
const cashflowOutput = document.getElementById("cashflowOutput");
const riskMeterFill = document.getElementById("riskMeterFill");
const pressureLabel = document.getElementById("pressureLabel");
const decisionStatus = document.getElementById("decisionStatus");
const decisionSubtext = document.getElementById("decisionSubtext");
const decisionList = document.getElementById("decisionList");

const idleBalanceInput = document.getElementById("idleBalanceInput");
const liquidReserveInput = document.getElementById("liquidReserveInput");
const savingsRateInput = document.getElementById("savingsRateInput");
const sweepRateInput = document.getElementById("sweepRateInput");
const optimizeFundingBtn = document.getElementById("optimizeFundingBtn");
const fundingGain = document.getElementById("fundingGain");
const currentInterest = document.getElementById("currentInterest");
const optimizedInterest = document.getElementById("optimizedInterest");
const fundingSafety = document.getElementById("fundingSafety");
const fundingSafetyText = document.getElementById("fundingSafetyText");
const allocationRing = document.getElementById("allocationRing");
const sweepPercent = document.getElementById("sweepPercent");
const sweepAmount = document.getElementById("sweepAmount");
const liquidAmount = document.getElementById("liquidAmount");
const productSweepAmount = document.getElementById("productSweepAmount");
const productSweepRate = document.getElementById("productSweepRate");
const fundingActionText = document.getElementById("fundingActionText");

const verifyMethods = document.querySelectorAll(".verify-method");
const confirmPayment = document.getElementById("confirmPayment");
const blockPayment = document.getElementById("blockPayment");
const mpinInput = document.getElementById("mpinInput");
const paymentStatus = document.getElementById("paymentStatus");

const trustActions = document.querySelectorAll(".trust-action");
const trustDecisionState = document.getElementById("trustDecisionState");
const trustDecisionText = document.getElementById("trustDecisionText");
const trustScore = document.getElementById("trustScore");
const trustMeter = document.getElementById("trustMeter");
const trustAuditFeed = document.getElementById("trustAuditFeed");

let isResizing = false;
let selectedVerifyMethod = "MPIN";

function formatMoney(value) {
  return "Rs " + Math.round(value).toLocaleString("en-IN");
}

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    const targetPage = item.dataset.page;

    navItems.forEach((nav) => nav.classList.remove("active"));
    pages.forEach((page) => page.classList.remove("active"));

    item.classList.add("active");
    document.getElementById(targetPage).classList.add("active");
  });
});

collapseBtn.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
  collapseBtn.textContent = sidebar.classList.contains("collapsed") ? "›" : "‹";
});

resizeHandle.addEventListener("mousedown", () => {
  if (sidebar.classList.contains("collapsed")) return;
  isResizing = true;
  document.body.style.cursor = "col-resize";
});

document.addEventListener("mousemove", (event) => {
  if (!isResizing) return;
  const newWidth = Math.min(Math.max(event.clientX, 190), 330);
  sidebar.style.width = `${newWidth}px`;
});

document.addEventListener("mouseup", () => {
  isResizing = false;
  document.body.style.cursor = "default";
});

function addMessage(type, text) {
  const message = document.createElement("div");
  message.className = `chat-message ${type}`;

  const sender = document.createElement("span");
  sender.textContent = type === "user" ? "You" : "ArthaSaarthi";

  const body = document.createElement("p");
  body.textContent = text;

  message.appendChild(sender);
  message.appendChild(body);
  chatWindow.appendChild(message);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function getAIResponse(input) {
  const text = input.toLowerCase();

  if (text.includes("invest")) {
    return "Based on your idle balance, spending pattern, and emergency buffer, you can invest around Rs 10000 this month. Trust Layer AI marks this as suitable for a moderate-risk profile.";
  }

  if (text.includes("loan")) {
    return "Before taking a loan, ArthaSaarthi checks your EMI load, monthly savings, and future goals. A smaller loan or longer tenure may be safer if EMI crosses your comfort limit.";
  }

  if (text.includes("payment") || text.includes("flagged")) {
    return "This payment was flagged because Rs 85000 is higher than your usual transaction behavior. You can confirm it instantly using MPIN, OTP, biometric, or JWT-verified session.";
  }

  if (text.includes("fund") || text.includes("interest") || text.includes("balance")) {
    return "Your idle balance can be split into emergency cash and sweep deposit. This may improve interest without blocking everyday liquidity.";
  }

  return "I can help with investment decisions, loan what-if analysis, funding account benefits, unusual payment confirmation, and Trust Layer safety checks.";
}

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const question = chatInput.value.trim();
  if (!question) return;

  addMessage("user", question);
  chatInput.value = "";

  setTimeout(() => {
    addMessage("ai", getAIResponse(question));
  }, 400);
});

quickPrompts.forEach((button) => {
  button.addEventListener("click", () => {
    chatInput.value = button.dataset.prompt;
    chatForm.requestSubmit();
  });
});

function runSimulation() {
  const income = 82000;
  const spending = 51200;

  const principal = Number(loanAmount.value);
  const annualRate = Number(interestRate.value);
  const months = Number(tenureMonths.value);
  const monthlyInvestment = Number(investmentAmount.value);
  const annualReturn = Number(investmentReturn.value);
  const years = Number(investmentYears.value);

  const monthlyRate = annualRate / 12 / 100;
  const emi =
    principal * monthlyRate * Math.pow(1 + monthlyRate, months) /
    (Math.pow(1 + monthlyRate, months) - 1);

  const totalInterest = emi * months - principal;
  const investmentMonths = years * 12;
  const investmentRate = annualReturn / 12 / 100;
  const corpus =
    monthlyInvestment *
    ((Math.pow(1 + investmentRate, investmentMonths) - 1) / investmentRate) *
    (1 + investmentRate);

  const buffer = income - spending - emi - monthlyInvestment;
  const pressure = ((spending + emi + monthlyInvestment) / income) * 100;

  emiOutput.textContent = formatMoney(emi);
  interestOutput.textContent = formatMoney(totalInterest);
  corpusOutput.textContent = formatMoney(corpus);
  cashflowOutput.textContent = formatMoney(buffer);

  riskMeterFill.style.width = `${Math.min(Math.max(pressure, 10), 100)}%`;

  if (pressure < 78 && buffer > 9000) {
    pressureLabel.textContent = "Healthy";
    decisionStatus.textContent = "Suitable";
    decisionSubtext.textContent = "Plan is safe for current income.";
    riskMeterFill.style.background = "linear-gradient(90deg, #18a767, #24b8c5)";
    simulationOutput.textContent =
      `This plan is suitable. EMI is ${formatMoney(emi)}, and monthly buffer remains ${formatMoney(buffer)}.`;
    decisionList.innerHTML = `
      <li>EMI stays within a manageable range.</li>
      <li>Investment does not disturb emergency balance.</li>
      <li>Trust Layer allows this recommendation.</li>
    `;
  } else if (pressure < 88 && buffer > 3000) {
    pressureLabel.textContent = "Medium";
    decisionStatus.textContent = "Adjust";
    decisionSubtext.textContent = "Plan works, but reduce pressure.";
    riskMeterFill.style.background = "linear-gradient(90deg, #f1a44c, #24b8c5)";
    simulationOutput.textContent =
      `This plan is possible but tight. EMI is ${formatMoney(emi)}, and buffer becomes ${formatMoney(buffer)}.`;
    decisionList.innerHTML = `
      <li>Cashflow is positive but narrow.</li>
      <li>Reduce loan amount or lower investment slightly.</li>
      <li>Trust Layer marks this as caution.</li>
    `;
  } else {
    pressureLabel.textContent = "High";
    decisionStatus.textContent = "Risky";
    decisionSubtext.textContent = "Plan may hurt monthly cashflow.";
    riskMeterFill.style.background = "linear-gradient(90deg, #e5534b, #f1a44c)";
    simulationOutput.textContent =
      `This plan is risky. EMI is ${formatMoney(emi)}, and monthly buffer may fall to ${formatMoney(buffer)}.`;
    decisionList.innerHTML = `
      <li>EMI and investment create high cashflow pressure.</li>
      <li>Emergency buffer may become unsafe.</li>
      <li>Trust Layer blocks this recommendation.</li>
    `;
  }
}

function updateFundingBenefits() {
  const idleBalance = Number(idleBalanceInput.value);
  const liquidReserve = Number(liquidReserveInput.value);
  const savingsRate = Number(savingsRateInput.value);
  const sweepRate = Number(sweepRateInput.value);

  const safeLiquid = Math.min(Math.max(liquidReserve, 0), idleBalance);
  const sweep = Math.max(idleBalance - safeLiquid, 0);
  const current = idleBalance * (savingsRate / 100);
  const optimized = safeLiquid * (savingsRate / 100) + sweep * (sweepRate / 100);
  const gain = optimized - current;
  const percent = idleBalance > 0 ? Math.round((sweep / idleBalance) * 100) : 0;

  fundingGain.textContent = formatMoney(gain);
  currentInterest.textContent = formatMoney(current);
  optimizedInterest.textContent = formatMoney(optimized);
  sweepAmount.textContent = formatMoney(sweep);
  liquidAmount.textContent = formatMoney(safeLiquid);
  productSweepAmount.textContent = formatMoney(sweep);
  productSweepRate.textContent = `${sweepRate}%`;
  sweepPercent.textContent = `${percent}%`;

  allocationRing.style.background =
    `radial-gradient(circle at center, #ffffff 58%, transparent 59%), conic-gradient(#24b8c5 0 ${percent}%, #d8eef6 ${percent}% 100%)`;

  if (safeLiquid < 12000) {
    fundingSafety.textContent = "Review";
    fundingSafetyText.textContent = "Liquidity buffer is low. Keep more money available before moving funds.";
    fundingActionText.textContent = `Keep at least ${formatMoney(12000)} liquid before using sweep deposits.`;
  } else if (sweep <= 0) {
    fundingSafety.textContent = "Hold";
    fundingSafetyText.textContent = "No safe surplus is available after protecting liquidity.";
    fundingActionText.textContent = "Do not move funds yet. Maintain liquidity until balance improves.";
  } else {
    fundingSafety.textContent = "Approved";
    fundingSafetyText.textContent = "Liquidity buffer is safe for this recommendation.";
    fundingActionText.textContent =
      `Move ${formatMoney(sweep)} into auto sweep deposit and keep ${formatMoney(safeLiquid)} available.`;
  }
}

verifyMethods.forEach((method) => {
  method.addEventListener("click", () => {
    verifyMethods.forEach((item) => item.classList.remove("active"));
    method.classList.add("active");
    selectedVerifyMethod = method.dataset.method;

    if (selectedVerifyMethod === "MPIN") {
      mpinInput.placeholder = "Enter MPIN: 1234";
      mpinInput.type = "password";
      mpinInput.maxLength = 4;
    } else if (selectedVerifyMethod === "OTP") {
      mpinInput.placeholder = "Enter OTP: 7890";
      mpinInput.type = "text";
      mpinInput.maxLength = 4;
    } else if (selectedVerifyMethod === "Biometric") {
      mpinInput.placeholder = "Type YES to simulate biometric approval";
      mpinInput.type = "text";
      mpinInput.maxLength = 10;
    } else {
      mpinInput.placeholder = "Type JWT to verify session";
      mpinInput.type = "text";
      mpinInput.maxLength = 10;
    }

    paymentStatus.textContent = `${selectedVerifyMethod} verification selected. Payment remains paused.`;
  });
});

confirmPayment.addEventListener("click", () => {
  const value = mpinInput.value.trim();

  const isVerified =
    (selectedVerifyMethod === "MPIN" && value === "1234") ||
    (selectedVerifyMethod === "OTP" && value === "7890") ||
    (selectedVerifyMethod === "Biometric" && value.toLowerCase() === "yes") ||
    (selectedVerifyMethod === "JWT" && value.toLowerCase() === "jwt");

  paymentStatus.textContent = isVerified
    ? `Payment verified using ${selectedVerifyMethod}. Transaction can proceed with audit log.`
    : `${selectedVerifyMethod} verification failed. Payment remains on hold.`;
});

blockPayment.addEventListener("click", () => {
  paymentStatus.textContent =
    "Payment blocked. Customer and bank fraud monitoring team will be notified immediately.";
});

const trustModes = {
  approved: {
    score: 94,
    state: "Approved with guardrails",
    text: "Recommendation can be shown because it matches the customer's risk profile, has verified source evidence, and includes a clear safety explanation.",
    color: "linear-gradient(90deg, #18a767, #19b6c6)",
    audit: "Advice approved after suitability, RAG, and policy checks."
  },
  review: {
    score: 68,
    state: "Needs human review",
    text: "The advice is useful, but the customer's cashflow or product fit needs bank review before it is shown as a final recommendation.",
    color: "linear-gradient(90deg, #f1a44c, #19b6c6)",
    audit: "Recommendation moved to review queue for advisor validation."
  },
  blocked: {
    score: 32,
    state: "Unsafe advice blocked",
    text: "The Trust Layer stopped this recommendation because it may increase financial stress, mismatch risk appetite, or violate bank policy.",
    color: "linear-gradient(90deg, #e5534b, #f1a44c)",
    audit: "Unsafe recommendation blocked before customer display."
  }
};

trustActions.forEach((button) => {
  button.addEventListener("click", () => {
    const mode = trustModes[button.dataset.trustMode];

    trustActions.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    trustScore.textContent = `${mode.score}%`;
    trustMeter.style.width = `${mode.score}%`;
    trustMeter.style.background = mode.color;
    trustDecisionState.textContent = mode.state;
    trustDecisionText.textContent = mode.text;

    const auditItem = document.createElement("div");
    auditItem.innerHTML = `
      <span>Now</span>
      <strong>${mode.state}</strong>
      <p>${mode.audit}</p>
    `;

    trustAuditFeed.prepend(auditItem);
  });
});

simulateBtn.addEventListener("click", runSimulation);
runSimulation();

optimizeFundingBtn.addEventListener("click", updateFundingBenefits);
[idleBalanceInput, liquidReserveInput, savingsRateInput, sweepRateInput].forEach((input) => {
  input.addEventListener("input", updateFundingBenefits);
});
updateFundingBenefits();