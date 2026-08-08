# Architecture

**rm-ng-pdf-viewer** acts as a reactive Angular bridge over the iframe container rendering engine managed by `@embedpdf/snippet`.

## Flow Diagram

```
 +------------------+
 | Angular App |
 | (Input Signals) |
 +--------+---------+
 |
 v (Signals Effect Trigger)
 +--------+---------+
 | RmNgPdfViewer |
 | Component |
 +--------+---------+
 |
 v (Lazy Import snippet / viewport render)
 +--------+---------+
 | EmbedPDF snippet|
 | Canvas Runner |
 +--------+---------+
 |
 v (Mount inside target DOM)
 +--------+---------+
 | Iframe PDF |
 | Viewer Instance |
 +------------------+
```

## High-Performance Bridge
Rather than parsing PDF binaries directly in JavaScript main-threads (which locks user rendering and degrades performance), this component dynamically loads `@embedpdf/snippet`, boots up a background worker iframe, and isolates canvas renderings. All changes to signals (such as theme color tokens or document changes) are sent via communication lines to the container instance.

---

### Navigation
* Prev: [Getting Started: Project Structure](../getting-started/project-structure.md)
* Next: [Lifecycle](lifecycle.md)
