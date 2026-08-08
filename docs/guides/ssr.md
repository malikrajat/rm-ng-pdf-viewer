# Server-Side Rendering (SSR) Support

**rm-ng-pdf-viewer** is fully compatible with Angular SSR (formerly Angular Universal).

## SSR Architecture

During server execution:
1. The component initializes and notices that the platform execution is not a browser.
2. It renders a clean placeholder wrapper `<div class="rm-pdf-viewer-wrapper" style="height: ..."></div>` with the specified height.
3. No browser-specific APIs (like `window`, `localStorage`, or `IntersectionObserver`) are invoked, preventing Node build crashes.
4. Once hydrated in the client browser, `IntersectionObserver` or immediate container loading initializes automatically.

---

### Navigation
* Prev: [Optimization](optimization.md)
* Next: [Security](security.md)
