# CodeForge Landing Page

> A modern command-line interface that helps developers automate tasks, manage projects, and boost productivity.

## ✨ Features

- **🚀 Turbo**  
  Monorepo powered by Turbo for lightning-fast builds and task orchestration.

- **🗄️ Knex.js & Objection.js**  
  SQL query building and modeling with a clean, expressive API.

- **⚙️ Express.js**  
  Minimalist, flexible backend for handling HTTP requests and middleware.

- **🧬 GraphQL**  
  Efficient, typed API querying with flexible schema design.

- **🛰️ Apollo Server & Pothos**  
  Scalable GraphQL server with schema-first development using Pothos.

- **📂 Modular Structure**  
  Organized as separate apps:  
  - `apps/api` – backend services  
  - `apps/web` – frontend interface

## 📦 Installation

```bash
npm create-codeforge
```

Or if you prefer yarn:

```bash
yarn create codeforge
```

Or if you prefer pnpm:

```bash
pnpm create codeforge
```

## 📖 Usage

### Basic Commands

| Command | Description |
|---------|-------------|
| `npm build` | Build your project |
| `npm start` | Start development server |
| `npm test:ci` | Run tests |

## 📊 Project Structure

When initializing a new project, YourCLI creates the following structure:

```
my-project/ ├── apps/ │ ├── api/ # Backend services (Express.js, GraphQL, Apollo Server, Pothos) │ └── web/ # Frontend app (Next.js or other) ├── packages/ │ └── ui/ # Shared UI components or utilities (optional) ├── turbo.json # TurboRepo configuration for tasks and caching ├── package.json # Root-level dependencies and scripts └── tsconfig.json # Root TypeScript configuration (if using TypeScript)
```
