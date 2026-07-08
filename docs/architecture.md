# ArthaSaarthi AI Architecture

## 1. Project Summary

ArthaSaarthi AI is a bank-owned, customer-facing digital wealth and safety assistant integrated into a bank mobile application.

It helps customers receive personalized wealth guidance, make safer financial decisions, optimize idle money, and verify unusual transactions in real time.

The solution combines AI avatar interaction, customer financial profiling, RAG-based trusted knowledge, Trust Layer AI, JWT authentication, MPIN verification, and real-time transaction protection.

## 2. Problem Statement Understanding

Wealth management and advisory services are fragmented and inaccessible to many customers.

Most customers do not receive timely, personalized, data-driven financial guidance even though banks already have useful data such as salary, spending, savings, EMIs, balances, and transaction behavior.

Customers face problems such as:

- Not knowing how much they can safely invest
- Not understanding where to keep idle money
- Not knowing whether to take a loan or invest
- Falling for risky or unverified platforms
- Receiving delayed support during unusual payment verification
- Not getting personalized guidance at the right financial moment

ArthaSaarthi AI solves this by becoming a trusted avatar-based financial companion inside the bank mobile app.

## 3. Separate Customer Pain Point: Delayed Unusual Payment Verification

Apart from wealth advisory, customers also face a serious problem during unusual transaction verification.

Banks monitor transactions to protect customers from fraud. If a payment looks unusual, the bank may pause it and confirm whether the customer is really making the payment.

A transaction may be flagged when:

- The amount is much higher than usual
- The beneficiary is new
- The transaction happens late evening or night
- The device or location is different
- The transaction does not match the customer’s normal behavior

This fraud protection is important, but the current manual confirmation process can create problems for genuine customers.

Example:

A customer tries to transfer ₹85,000 at 8:30 PM for an urgent medical bill, education fee, travel booking, or family emergency. The bank flags the payment because the amount is high, the beneficiary is new, and the timing is unusual.

If the bank verification team is unavailable after working hours, the customer may receive a confirmation call only the next working day.

This creates customer pain:

- Urgent genuine payments get delayed
- The customer may not know why the payment is stuck
- Emergency needs may be affected
- The customer feels helpless when support is unavailable
- Digital banking feels unreliable during urgent moments
- The customer may lose trust in the bank experience

The challenge is:

How can the bank protect customers from fraud without delaying genuine unusual payments?

## 4. Proposed Solution: AI Transaction Guardian

ArthaSaarthi AI solves this through an AI Transaction Guardian inside the bank app.

When an unusual payment is detected, the assistant immediately alerts the customer instead of waiting for a manual bank call.

Example message:

“Riya, we noticed an unusual payment of ₹85,000 to a new beneficiary at 8:30 PM. Was this initiated by you?”

The customer can choose:

- Yes, this is me
- No, block this payment
- I need help

If the customer confirms, the app asks for MPIN, biometric verification, or OTP.

If verification succeeds, the bank backend can process the transaction according to bank-defined rules.

If the customer denies the payment, the transaction is blocked and the fraud team is alerted.

This helps customers because:

- Genuine urgent payments can be verified instantly
- Verification works 24/7
- Customers do not have to wait for next-day confirmation calls
- Customers understand why the payment was flagged
- Fraudulent payments can be stopped quickly
- The bank feels safer and more transparent

Important: The AI does not independently approve risky transactions. It only performs real-time customer interaction and step-up verification. The final action is controlled by bank backend rules.

## 5. Product Positioning

ArthaSaarthi AI follows a B2B2C model.

The bank owns and integrates the solution into its mobile banking app.

The customer experiences it as an AI wealth and safety companion.

Bank benefits:

- Scalable digital wealth advisory
- Better customer engagement
- Responsible product adoption
- Reduced manual advisory workload
- Reduced after-hours payment verification delays
- Faster fraud response
- Better audit and compliance trail

Customer benefits:

- Personalized financial guidance
- Goal-based planning
- Safe-to-invest recommendations
- Loan and investment decision support
- Funding account suggestions
- Risky platform warnings
- Instant unusual payment verification

## 6. High-Level System Flow

1. Customer opens the bank mobile app.
2. Bank verifies login and issues a JWT session.
3. Customer interacts with ArthaSaarthi AI avatar.
4. Customer Financial Twin provides income, spending, goals, risk profile, and transaction behavior.
5. RAG engine retrieves verified bank product and policy knowledge.
6. Trust Layer AI checks suitability, risk, fraud signals, and compliance rules.
7. AI avatar gives an explainable recommendation.
8. Sensitive actions require MPIN, biometric, or OTP step-up verification.
9. Bank backend approves, blocks, holds, or escalates the action.
10. Audit log is generated for compliance.

## 7. Customer Financial Twin

The Customer Financial Twin is a dynamic profile of the customer’s financial behavior.

It uses:

- Monthly income
- Spending pattern
- Savings rate
- Current EMI
- Idle balance
- Existing goals
- Investment behavior
- Risk profile
- Transaction history

It generates:

- Financial health score
- Safe-to-invest amount
- Idle balance opportunity
- Goal progress
- Loan affordability estimate
- Unusual transaction signals
- Personalized next best action

Example:

If Riya earns ₹82,000 per month and has ₹18,500 idle balance, ArthaSaarthi may recommend keeping part of it liquid and moving part of it to a sweep-in FD.

## 8. AI Avatar Advisor

The AI Avatar Advisor is the customer-facing interface.

Customers can ask:

- “Can I invest ₹6,000 this month?”
- “Should I take a ₹2 lakh loan?”
- “Is this investment platform safe?”
- “Where should I keep my idle balance?”
- “Why was my payment flagged?”
- “How can I improve my financial health score?”

The avatar explains answers in simple language and shows why a recommendation was made.

## 9. RAG Knowledge Engine

The RAG engine retrieves trusted information from bank-approved documents.

Knowledge sources may include:

- Bank product notes
- Savings account details
- Sweep-in FD rules
- Fixed deposit rules
- SIP explainers
- Tax-saving product notes
- Risk suitability policy
- Fraud detection policy
- Compliance disclaimers

RAG is important because it:

- Reduces hallucination
- Grounds answers in verified bank knowledge
- Allows source-based explanation
- Improves trust and compliance
- Makes the assistant safer than a generic chatbot

## 10. Trust Layer AI

Trust Layer AI validates recommendations before they reach the customer.

It checks:

- Is the recommendation suitable for the customer’s risk profile?
- Is emergency liquidity protected?
- Is the product verified by the bank?
- Is the loan affordable?
- Is the investment platform suspicious?
- Is the transaction unusual?
- Is human advisor escalation needed?
- Is MPIN or biometric verification required?

Trust Layer AI can:

- Allow recommendation
- Modify recommendation
- Show warning
- Ask for step-up authentication
- Hold transaction
- Block transaction
- Escalate to advisor or fraud team

## 11. Goal Planning Engine

The goal planning engine helps customers plan and track financial goals.

Example goals:

- Emergency fund
- Home down payment
- Tax saving
- Retirement
- Child education
- Travel
- Medical reserve

It shows target amount, current amount, progress percentage, recommended monthly contribution, and timeline impact.

Example:

Riya’s emergency fund target is ₹1,80,000 and she has saved ₹1,08,000. The assistant recommends ₹3,000 this month toward the emergency fund before increasing risky investments.

## 12. What-If Wealth Simulator

The What-If Wealth Simulator helps customers compare financial decisions before acting.

It answers:

- Should I take this loan?
- Can I afford this EMI?
- Should I invest or repay debt?
- What if I increase my SIP?
- Will this decision delay my goals?

Inputs:

- Loan amount
- Interest rate
- Tenure
- Current EMI
- Income
- Savings
- Goal timeline

Outputs:

- Estimated EMI
- EMI-to-income ratio
- Cash flow impact
- Goal delay
- Decision recommendation

## 13. Smart Funding Account Recommender

This module helps customers decide where idle money should sit.

It compares:

- Savings account
- Sweep-in fixed deposit
- Fixed deposit
- Recurring deposit
- Goal-based savings account

Decision factors:

- Interest rate
- Liquidity
- Lock-in period
- Risk level
- Goal timeline
- Emergency need
- Minimum balance

Example:

Keep ₹10,000 liquid, move ₹5,000 to sweep-in FD, and add ₹3,500 to the emergency fund goal.

## 14. Platform Safety Checker

This module protects customers from risky or unverified investment platforms.

It checks:

- Is the platform verified by the bank?
- Is the return claim unrealistic?
- Is the investment regulated?
- Is the product suitable for the customer’s risk profile?
- Is the customer putting too much money into one place?
- Is the platform using pressure tactics?

Example:

If a platform promises 30% return, the assistant flags it as suspicious and recommends avoiding it until verified.

## 15. Authentication And Security

ArthaSaarthi AI is embedded inside the bank’s existing mobile application.

Security design:

- Customer logs into bank app
- Bank verifies identity
- Bank issues JWT session token
- ArthaSaarthi accesses only authorized customer context
- Sensitive actions require MPIN, biometric, or OTP
- Bank backend validates both JWT and step-up authentication
- Every sensitive action is logged

JWT is used for:

- Session validation
- API authorization
- Customer identity mapping
- Permission control
- Expiry and refresh management

MPIN, biometric, or OTP is used for:

- Confirming unusual transaction
- Approving payment
- Moving money to FD or sweep account
- Starting investment workflow
- Adding new beneficiary
- Confirming high-impact financial action

## 16. Human Advisor Handoff

Some cases should be escalated to a human advisor.

Escalation happens when:

- Customer asks for complex investment planning
- Product requires certified advisor approval
- Customer risk profile is unclear
- Transaction appears highly suspicious
- Customer repeatedly fails verification
- Customer requests human support

This makes the solution practical for real banking deployment.

## 17. Prototype Scope

The current prototype demonstrates:

- Customer wealth dashboard
- Financial health score
- Safe-to-invest recommendation
- AI avatar advisor
- RAG-style source-based responses
- Goal planning
- What-if loan simulator
- Funding account recommender
- Platform safety warning
- AI transaction guardian
- MPIN verification demo
- Trust Layer AI explanation
- Bank-verified JWT session badge

## 18. What Is Mocked In Prototype

For hackathon demonstration, the following are mocked:

- Customer banking data
- Transaction history
- JWT session status
- MPIN verification
- RAG retrieval
- AI responses
- Interest rates
- Risk rules

In production, these would connect to:

- Bank core systems
- Mobile banking authentication
- Real product APIs
- Vector database
- LLM API
- Fraud detection engine
- Advisor CRM
- Audit and compliance systems

## 19. Future Scope

Future improvements:

- Real LLM integration
- Real vector database for RAG
- Multilingual voice assistant
- Biometric authentication
- Real bank API integration
- Advisor dashboard
- Fraud model integration
- Customer segmentation engine
- Regulatory compliance reporting
- Personalized product recommendation engine
- Family wealth planning
- Insurance gap analysis
- Tax planning assistant

## 20. Final Architecture Value

ArthaSaarthi AI is not only a wealth chatbot.

It is a complete bank-integrated AI layer for:

- Wealth guidance
- Customer financial intelligence
- Safer decision-making
- Funding optimization
- Scam protection
- Real-time unusual transaction verification
- Trustworthy and compliant AI advisory

This makes it valuable for both customers and banks.