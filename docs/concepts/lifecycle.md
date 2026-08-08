# Lifecycle

The lifecycle of the **RmNgPdfViewer** component is designed to minimize server workload and optimize browser paint performance.

## Step-by-Step Lifecycle

1. **Instantiation**: The component mounts. If `lazy()` is enabled (default `true`), the component sets up an `IntersectionObserver` on its native host wrapper.
2. **Intersection**: Once the component is scrolled into viewport view (at least 10% overlap threshold), the observer fires, disconnects itself, and triggers `initViewer()`.
3. **Dynamic Import**: The browser dynamically imports the large `@embedpdf/snippet` package chunk asynchronously, preventing main-bundle bloating.
4. **Initialization**: The snippet initiates, injecting an iframe container with selected default inputs (global defaults + local overrides).
5. **Progress & Load**: The document begins downloading. The progress engine emits percentages to `(onProgress)`.
6. **Ready**: The `(onReady)` output fires with an `EmbedPdfContainer` reference handle once the first page is successfully drawn.
7. **Reactive Switch**: If the `[src]` signal shifts, the component does NOT tear down. It triggers the internal `document-manager` plugin directly to load the new binary.
8. **Teardown**: On component destruction, the wrapper releases observers, revokes active Blobs or object URLs, and cleans memory states.

---

### Navigation
* Prev: [Architecture](architecture.md)
* Next: [Rendering](rendering.md)
