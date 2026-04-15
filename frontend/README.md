# 🚀 LaunchPad AI

LaunchPad AI is a multi-agent system that transforms a startup idea into a complete business blueprint in seconds.

Instead of relying on a single AI assistant, this system orchestrates multiple specialized AI agents working in parallel to analyze, evaluate, and generate startup insights.

---

## ✨ Features

- 🔍 Market Analysis (target users, competitors, demand)
- 🛠 Product Planning (MVP features, tech stack)
- 💰 Business Model (revenue strategy, risks, growth)
- 📊 Dynamic Scoring System (idea evaluation)
- 🏷 Category Detection (FoodTech, SaaS, HealthTech, etc.)
- 📄 Downloadable PDF Startup Blueprint
- ⚡ Parallel AI Agent Simulation

---

## 🧠 Multi-Agent Parallel Workflow

This project demonstrates parallel AI-assisted development using DevSwarm principles.

We divided the system into independent workstreams:

- Agent 1 (Market Analysis) → `agent-market` branch  
- Agent 2 (Product Planning) → `agent-product` branch  
- Agent 3 (Business Strategy) → `agent-business` branch  

Each agent worked independently on separate branches, ensuring no code conflicts.

After completion, all branches were merged into the final application.

---

## ⚙️ Tech Stack

- React + TypeScript
- Vite
- jsPDF

---

## 🚀 How to Run

```bash
cd frontend
npm install
npm run dev