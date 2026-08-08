# Performance Model

**rm-ng-pdf-viewer** is tuned for maximum performance and low bundle foot-prints.

## Key Performance Vectors

### 1. Lazy Script Parsing
`@embedpdf/snippet` is NOT loaded as part of the core vendors chunk. Instead, it is dynamically imported:
```ts
const { default: EmbedPDF } = await import('@embedpdf/snippet');
```
This occurs only inside the client-side hydration phase, reducing initial payload sizes.

### 2. Viewport Intersection Observer
If you have multiple viewers on a page (e.g., inside accordion widgets or scroll feeds), they do not compile until they appear in the viewport.

### 3. Memory Cleanup
If you supply a `Blob` or `Uint8Array` source stream, the component generates object URLs internally. On document change or component destruction, `URL.revokeObjectURL()` executes, preventing major browser memory leaks.

---

### Navigation
* Prev: [State Management](state-management.md)
* Next: [Guides: Basic Usage](../guides/basic-usage.md)
