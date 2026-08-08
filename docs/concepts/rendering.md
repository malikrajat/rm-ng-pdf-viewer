# Rendering

**rm-ng-pdf-viewer** manages container layouts and loading frames gracefully to prevent cumulative layout shifts (CLS).

## Loading Overlays & Skeletons

While the background engine loads the PDF script and downloads the document, the component renders a placeholder:

* **Skeletons**: If `[showSkeleton]="true"` (default), the component displays a CSS pulse animation simulating a toolbar, left thumbnails sidebar, and primary document page.
* **Custom templates**: If you supply `[loadingTemplate]`, the component suspends skeletons and displays your custom HTML directly.

## DOM Isolations
The viewer target container element is wrapped inside a scoped relative `div` that matches the given `[height]` input (default `650px`). Once ready, the skeleton hidden classes toggle, showing the loaded viewer iframe inside the block.

---

### Navigation
* Prev: [Lifecycle](lifecycle.md)
* Next: [State Management](state-management.md)
