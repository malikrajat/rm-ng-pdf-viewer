# Introduction

Welcome to the **rm-ng-pdf-viewer** documentation. `rm-ng-pdf-viewer` is a lightweight, SSR-safe, signal-based Angular component for embedding PDF documents. It is powered by `@embedpdf/snippet`.

## Why rm-ng-pdf-viewer?

Traditional Angular PDF viewers often rely on heavy canvas rendering libraries bundled directly into the main application, causing significant bundle bloat. Others use frames that lack responsive event styling, reactive signal feeds, or proper Server-Side Rendering (SSR) safety.

`rm-ng-pdf-viewer` was designed to solve these issues by:
* **Zero Boilerplate**: Simple selector integration with automatic hydration.
* **Modern Signals Architecture**: Every input and output leverages Angular's native signal systems.
* **Smart Lazy Loading**: Uses an internal `IntersectionObserver` to load dependencies and container structures only when the viewer is scrolled into viewport view.
* **Granular Toolbar Disabling**: Restrict capabilities such as printing, zooming, or annotations globally or per-instance.
* **Advanced Theming**: Brand synchronization matching browser color modes or manual design tokens.

---

> [!NOTE]
> This library requires Angular 21.0.0 or higher due to its deep integration with the signals API and modern lifecycle hooks.

---

### Navigation
* Prev: [Home](../../README.md)
* Next: [Installation](installation.md)
