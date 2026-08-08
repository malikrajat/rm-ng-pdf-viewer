# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-08-10

### Initial Release

This is the first stable release of **@codewithrajat/rm-ng-pdf-viewer** — a high-performance, lightweight, SSR-safe, signal-based Angular PDF viewer component powered by `@embedpdf/snippet`. Built for modern Angular applications using the latest signals API and standalone components.

---

### Features

#### Core Component
- **Standalone `RmNgPdfViewer` component** — No module configuration required; simply import the component directly into your component's `imports` array.
- **Signal-based architecture** — All inputs and internal states are built with Angular signals for modern reactive programming and zoneless compatibility.
- **Multiple source types** — Accepts `string` (URL), `Uint8Array` (raw bytes), or `Blob` as the PDF source.
- **Dynamic source swapping** — Reactively track and swap PDF sources at runtime without re-creating the viewer container.
- **Configurable container height** — Set explicit height constraints via the `height` input (default: `650px`).

#### Performance & SSR
- **SSR-safe** — Fully compatible with Angular Server-Side Rendering. Renders a clean placeholder on the server without invoking browser-specific APIs (`window`, `localStorage`, `IntersectionObserver`). Initializes automatically on client hydration.
- **Viewport intersection lazy loading** — By default (`[lazy]="true"`), the viewer only initializes when scrolled into the viewport, saving initial client resources — ideal for tabbed interfaces and long-scrolling dashboards.
- **Dynamic code splitting** — The `@embedpdf/snippet` engine is dynamically imported on the client side, keeping the initial bundle lean.
- **Angular `PendingTasks` integration** — Properly tracks async initialization for SSR hydration stability.
- **Tree-shakable & side-effect free** — Only the code you use is included in your bundle.
- **Object URL lifecycle management** — Automatically creates and revokes `Blob`/`Uint8Array` object URLs to prevent memory leaks.

#### Theming & Customization
- **Full design tokens control** — Customize accent, background, foreground, border, interactive, and state colors through `RmNgPdfThemeColors`.
- **Light / Dark / System theme preference** — Set `preference: 'system'` to automatically synchronize with the browser's color scheme, or force `'light'` / `'dark'` explicitly.
- **Automatic theme synchronization** — `syncTheme` (default: `true`) reactively updates the viewer when the system or document theme changes via `MutationObserver` and `matchMedia`.
- **Theme persistence** — Use `themeStorageKey` to read an initial theme preference from `localStorage`.
- **Global theme configuration** — Provide default themes application-wide via `provideRmNgPdfViewerConfig()`.

#### Toolbar & UI Controls
- **Modular toolbar control** — Disable print, zoom, search, annotations, and other categories globally or per-instance via `disabledCategories` in the config.
- **Thumbnails sidebar** — Toggle the thumbnails drawer panel with the `showThumbnails` input or programmatically via `toggleThumbnails()`.
- **Fullscreen mode** — Control fullscreen presentation with the `fullscreen` input, `showFullscreenButton` floating trigger, or `toggleFullscreen()` method.
- **Loading skeleton** — Built-in pulse placeholder skeleton (`showSkeleton`, default: `true`) that mimics the viewer layout including toolbar and thumbnails.
- **Progress bar** — Download progress indicator (`showProgressBar`, default: `true`) with smooth width transitions.
- **Custom loaders & error handlers** — Pass `ng-template` references via `loadingTemplate` and `errorTemplate` to render bespoke skeleton views and error cards.

#### Events & Outputs
- **`onReady`** — Emits the `EmbedPdfContainer` instance once the viewer is fully loaded, giving access to the plugin registry for advanced operations (zoom, scroll, search, etc.).
- **`onError`** — Emits an `Error` object if script fetch or resource load fails.
- **`onPageChange`** — Emits the current page number when scrolling past page boundaries.
- **`onZoomChange`** — Emits the current zoom level when adjusting magnification.
- **`onSearchMatch`** — Emits search result events on document search hits.
- **`onProgress`** — Emits download progress percentages (0–100).

#### Accessibility
- **WCAG 2.1 compliant** — Built with accessibility in mind.
- **Keyboard navigation** — Full keyboard support for viewer controls.
- **Screen reader support** — Proper ARIA attributes and semantic markup.
- **Focus management** — Visible focus states for interactive elements.

#### Global Configuration
- **`RM_NG_PDF_VIEWER_CONFIG`** — `InjectionToken` for application-wide default configuration.
- **`provideRmNgPdfViewerConfig()`** — Provider function to declare global defaults (height, theme, syncTheme, themeStorageKey, disabledCategories, etc.) in `app.config.ts`.

---

### Package Details

- **Package name:** `@codewithrajat/rm-ng-pdf-viewer`
- **Version:** `1.0.0`
- **License:** MIT
- **Angular peer dependency range:** `>=16.0.0 <=26.0.0`
- **Required peer dependency:** `@embedpdf/snippet` `^2.9.1`
- **Node.js requirement:** `>=20.19.0`
- **TypeScript:** Strict mode
- **AOT compatible:** Yes
- **Ivy compatible:** Yes
- **Standalone API:** Yes
- **Zoneless support:** Yes
- **Side effects:** None (`sideEffects: false`)
- **Tree-shakable:** Yes
- **Supported platforms:** macOS, Linux, Windows (x64, arm64)

---

### Getting Started

```bash
npm install @codewithrajat/rm-ng-pdf-viewer @embedpdf/snippet
```

```ts
import { Component } from '@angular/core';
import { RmNgPdfViewer } from '@codewithrajat/rm-ng-pdf-viewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RmNgPdfViewer],
  template: `
    <rm-ng-pdf-viewer
      [src]="pdfSrc"
      height="80vh"
      [lazy]="true"
      [showSkeleton]="true"
      [showProgressBar]="true"
      (onReady)="onPdfReady($event)"
      (onProgress)="onLoadProgress($event)"
    />
  `
})
export class AppComponent {
  pdfSrc = 'https://example.com/sample.pdf';

  onPdfReady(container: any) {
    console.log('PDF Viewer ready:', container);
  }

  onLoadProgress(progress: number) {
    console.log(`Loading progress: ${progress}%`);
  }
}
```

---

### Documentation

- [Installation Guide](https://github.com/malikrajat/rm-ng-pdf-viewer/blob/master/docs/getting-started/installation.md)
- [Usage Guide](https://github.com/malikrajat/rm-ng-pdf-viewer/blob/master/docs/guides/basic-usage.md)
- [API Reference](https://github.com/malikrajat/rm-ng-pdf-viewer/blob/master/docs/api/components/rm-ng-pdf-viewer.md)
- [Theming Guide](https://github.com/malikrajat/rm-ng-pdf-viewer/blob/master/docs/theming/overview.md)
- [SSR Guide](https://github.com/malikrajat/rm-ng-pdf-viewer/blob/master/docs/guides/ssr.md)
- [Best Practices](https://github.com/malikrajat/rm-ng-pdf-viewer/blob/master/docs/guides/best-practices.md)
- [Live Demo](https://stackblitz.com/edit/stackblitz-starters-7pxdxzna)

---

### Browser Support

| Browser | Version | Support Level |
|---------|---------|---------------|
| Chrome | 80+ | Full Support |
| Firefox | 75+ | Full Support |
| Safari | 13+ | Full Support |
| Edge | 80+ | Full Support |
| Opera | 67+ | Full Support |
| Samsung Internet | 12+ | Full Support |

---

### Acknowledgments

Special thanks to the Angular community, the `@embedpdf/snippet` team, and all contributors who helped make this library possible.