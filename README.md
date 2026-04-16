
# DevSwarm: Parallel AI Development Showcase

## Project Overview
DevSwarm is a full-stack task management application built using a parallel development approach. It features a Node.js Express backend and a React TypeScript frontend, demonstrating how multiple AI agents can collaborate simultaneously on different parts of a codebase to accelerate development cycles.

## 3-Agent Parallel Workflow
This project was developed using three specialized AI agents operating in parallel:

1.  **Frontend Agent:** Focused on building the user interface, styling, and client-side logic using React and TypeScript.
2.  **Backend Agent:** Responsible for designing the RESTful API, managing in-memory state, and handling server-side logic.
3.  **Test Agent:** Dedicated to ensuring quality and reliability by writing comprehensive test suites for both frontend and backend components.

By decoupling these concerns and allowing agents to work concurrently, the total development time was significantly reduced while maintaining high code quality across all layers.

## Branch Structure
The repository follows a branch-per-service strategy to facilitate independent development and testing:

-   `backend`: Contains all server-side code, including the Express application and API definitions.
-   `frontend`: Houses the client-side application, including components, assets, and styling.
-   `test`: Dedicated to end-to-end and integration tests that verify the interaction between the frontend and backend.

## How DevSwarm Was Used
DevSwarm acted as the orchestration layer, managing the lifecycle of the AI agents. It provided:

-   **Parallel Execution:** Enabled agents to work on separate tasks (UI, API, Tests) without blocking each other.
-   **Context Management:** Ensured each agent had the necessary local context to perform its specific task while remaining aware of the overall project goals.
-   **Verification:** Automatically triggered tests and linting to validate changes before they were merged into the main codebase.

## Benefits of Parallel AI Development
-   **Speed:** Drastically reduced "time to prototype" by executing traditionally sequential tasks in parallel.
-   **Specialization:** Allowed agents to focus on their domain of expertise (e.g., a "Test Agent" is more rigorous than a generalist).
-   **Scalability:** Demonstrated how AI can scale development teams without the overhead of human coordination for routine boilerplate and standard patterns.
-   **Continuous Quality:** Since testing is a parallel first-class citizen, bugs are caught earlier in the development lifecycle.

---

### Getting Started

#### Backend
```bash
cd backend
npm install
npm start
```

#### Frontend
```bash
cd frontend
npm install
npm run dev
```

#### Running Tests
From the root directory:
```bash
npm install
npm test
```

# LaunchPad AI
A multi-agent AI system that generates startup blueprints using parallel DevSwarm workflows.

