# Installation

Install **rm-ng-pdf-viewer** using your preferred package manager.

## CLI Commands

```bash
# npm
npm install rm-ng-pdf-viewer

# pnpm
pnpm add rm-ng-pdf-viewer

# yarn
yarn add rm-ng-pdf-viewer
```

## Peer Dependencies

Ensure your project contains these required packages in its `package.json`:

| Dependency | Supported Version | Purpose |
|---|---|---|
| `@angular/core` | `^21.0.0` | `^22.0.0` | Component core lifecycle, signals, and DI |
| `@angular/common` | `^21.0.0` | `^22.0.0` | Platform browser utilities, ngTemplate |
| `@embedpdf/snippet` | `^2.9.1` | Document loading and core iframe communication engine |

> [!WARNING]
> Failing to install `@embedpdf/snippet` will throw resolving errors during compilation.

---

### Navigation
* Prev: [Introduction](introduction.md)
* Next: [Quick Start](quick-start.md)
