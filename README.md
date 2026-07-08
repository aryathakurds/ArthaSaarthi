# ArthaSaarthi AI

[Live Demo](https://artha-saarthi-psi.vercel.app/) 

ArthaSaarthi AI is an AI-powered digital wealth management prototype for banks. It brings personalized wealth advisory, financial behavior analysis, loan and investment simulations, funding account benefits, unusual payment verification, and Trust Layer AI into one customer-friendly digital experience.

## Problem Statement

Wealth management and advisory services remain fragmented and inaccessible for many banking customers. Banks often lack a complete view of customer investment behavior, spending habits, goals, and risk comfort, which limits their ability to provide timely, personalized, and data-driven financial guidance.

Another important challenge is unusual payment verification. Today, if a customer makes a transaction that looks different from their regular behavior, banks may need manual confirmation. If this happens after working hours, the verification can be delayed, causing inconvenience and failed customer experience.

## Proposed Solution

ArthaSaarthi AI is a bank-integrated AI assistant that acts as a digital wealth companion inside the bank’s mobile application. It uses customer banking behavior, spending patterns, financial goals, product rules, and secure authentication to provide safer and more personalized financial guidance.

The assistant helps customers understand what they can invest, whether they should take a loan, how they can improve idle balance returns, and whether an unusual payment should be confirmed or blocked.

## Key Features

- AI Advisor Chat for personalized financial guidance
- Financial Twin to understand customer income, spending, goals, and risk behavior
- What-if Simulator for loan and investment decisions
- Funding Benefits module for sweep deposits and better account usage
- Payment Guardian for unusual transaction confirmation
- Trust Layer AI for suitability, policy, authentication, and audit checks
- RAG-based grounding using bank policies, product rules, and financial documents
- Secure MPIN, OTP, biometric, and JWT-based verification flow

## Prototype Modules

### AI Advisor Chat

A conversational assistant that answers customer questions about investments, loans, funding benefits, payment alerts, and financial risk in simple language.

### Financial Twin

Creates a living financial profile of the customer using banking behavior such as income, spending, idle balance, savings capacity, goals, and emergency buffer.

### What-if Simulator

Allows customers to test financial decisions before taking action. It can simulate EMI pressure, future investment corpus, monthly cashflow, and risk suitability.

### Funding Benefits

Suggests smarter use of idle bank balance through options like auto sweep deposits, savings upgrades, and liquidity-safe recommendations.

### Payment Guardian

Detects unusual payments and asks the customer for instant verification using MPIN, OTP, biometric approval, or JWT-verified session. This helps customers confirm transactions even outside bank working hours.

### Trust Layer AI

Checks every recommendation before showing it to the customer. It verifies suitability, customer risk profile, bank policy, product rules, authentication requirements, and audit logging.

## AI and RAG Architecture

ArthaSaarthi AI can use an LLM for natural language conversations and explanation generation. RAG can be used to ground the assistant’s answers in trusted bank documents, product policies, interest rate rules, loan eligibility criteria, fraud monitoring rules, and regulatory guidance.

The Trust Layer ensures that the AI does not give unsafe or unsuitable advice. It acts as a safety filter between the AI response and the customer.

## Tech Stack

- HTML
- CSS
- JavaScript
- Vercel for deployment
- GitHub for version control

## Demo Credentials

Demo MPIN:

```text
1234