# Project Structure

Understanding the workspace organization makes contribution and debugging much easier.

## File Hierarchy

Here is a breakdown of the codebase directory structure:

```
rm-ng-pdf-viewer-main/
├── .github/ # GitHub issues, PRs, and CI workflows
├── docs/ # Central documentation ecosystem (Markdown files)
├── examples/ # Structured API usage examples for copy-pasting
├── projects/
│ ├── rm-ng-pdf-viewer/ # The core library package
│ │ ├── src/
│ │ │ ├── lib/
│ │ │ │ ├── rm-ng-pdf-viewer.ts # Angular component implementation
│ │ │ │ ├── rm-ng-pdf-viewer.config.ts # Interfaces, DI Tokens, and theme configurations
│ │ │ │ └── rm-ng-pdf-viewer.spec.ts # Component test specs
│ │ │ └── public-api.ts # Package exports entrypoint
│ │ └── package.json # Library package settings (peer dependencies)
│ └── test-app/ # Local test application running during development
├── package.json # Root monorepo workspaces and dependencies file
└── pnpm-lock.yaml # pnpm dependency lockfile
```

---

### Navigation
* Prev: [First Example](first-example.md)
* Next: [Concepts: Architecture](../concepts/architecture.md)
