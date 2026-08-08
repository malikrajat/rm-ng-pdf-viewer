# FAQ (Frequently Asked Questions)

Answering common questions from the developer community.

---

## General

### Q: What is rm-ng-pdf-viewer?
**A**: **rm-ng-pdf-viewer** is a lightweight, SSR-safe, signal-based Angular PDF viewer component powered by `@embedpdf/snippet`. It is built for modern Angular applications using the latest signals API and standalone components, offering features like lazy loading, theming, toolbar customization, and custom loaders.

### Q: Which Angular versions are supported?
**A**: The library supports **Angular 21+** (with signals API and standalone components). It is also compatible with Angular 22. Ensure your project meets the peer dependency requirements listed in the [Installation Guide](../getting-started/installation.md).

### Q: Is this library free to use?
**A**: Yes! The library is licensed under the **MIT License**, which means you can use it freely in both commercial and personal projects. You just need to include the license and copyright notice.

### Q: Does this library have any runtime dependencies?
**A**: The only required peer dependency is `@embedpdf/snippet` (v2.9.1+), which handles the core PDF rendering engine. Angular core and common packages are also required peer dependencies.

---

## Installation & Setup

### Q: How do I install rm-ng-pdf-viewer?
**A**: Install using your preferred package manager:

```bash
# npm
npm install @codewithrajat/rm-ng-pdf-viewer

# pnpm
pnpm add @codewithrajat/rm-ng-pdf-viewer

# yarn
yarn add @codewithrajat/rm-ng-pdf-viewer
```

> ⚠️ **Important:** You must also install `@embedpdf/snippet` as a peer dependency, otherwise you will get resolving errors during compilation.

### Q: Do I need to install @embedpdf/snippet separately?
**A**: Yes. `@embedpdf/snippet` is a required peer dependency that powers the core PDF rendering engine. Install it alongside the viewer:

```bash
npm install @embedpdf/snippet
```

### Q: Do I need to configure anything in my app module?
**A**: No module configuration is needed. The component is **standalone**, so you simply import `RmNgPdfViewer` directly into your component's `imports` array. For global configuration, you can optionally use `provideRmNgPdfViewerConfig()` in your app providers.

---

## Usage

### Q: How do I use the component in my template?
**A**:

```ts
import { Component } from '@angular/core';
import { RmNgPdfViewer } from '@codewithrajat/rm-ng-pdf-viewer';

@Component({
  selector: 'app-root',
  imports: [RmNgPdfViewer],
  template: `
    <rm-ng-pdf-viewer 
      [src]="pdfSrc" 
      height="600px" 
      (onReady)="onReady($event)"
    />
  `
})
export class AppComponent {
  pdfSrc = 'https://example.com/sample.pdf';

  onReady(container: any) {
    console.log('PDF Viewer ready:', container);
  }
}
```

### Q: What source types are supported?
**A**: The `[src]` input accepts:
- **URL string** — A remote or local PDF URL (e.g., `'assets/report.pdf'`)
- **Uint8Array** — Raw byte array of the PDF file
- **Blob** — A Blob object representing the PDF file

### Q: Can I dynamically swap PDF sources?
**A**: Yes! The `[src]` input is reactively tracked using signals. Swapping URLs instantly loads the new PDF without re-creating the entire viewer container:

```ts
changePdf() {
  this.pdfUrl = 'https://example.com/assets/other-doc.pdf';
}
```

### Q: How do I access the viewer instance for advanced operations?
**A**: Listen to the `(onReady)` output to get a reference to `EmbedPdfContainer`. You can then access the plugin registry for zoom, scroll, and other controls:

```ts
onReady(viewer: EmbedPdfContainer) {
  viewer.registry.then(registry => {
    const zoom = registry.getPlugin('zoom');
    zoom.provides().setZoom(1.5); // Set 150% zoom

    const scroll = registry.getPlugin('scroll');
    scroll.provides().goToPage(3); // Navigate to Page 3
  });
}
```

### Q: What events does the component emit?
**A**:

| Event | Type | Description |
|---|---|---|
| `onReady` | `EmbedPdfContainer` | Emitted once the viewer is fully loaded |
| `onError` | `Error` | Emitted if script fetch or resource load fails |
| `onPageChange` | `number` | Emitted when scrolling past page boundaries |
| `onZoomChange` | `number` | Emitted when adjusting magnification |
| `onSearchMatch` | `any` | Emitted on document search hits |
| `onProgress` | `number` | Emitted with download progress percentages |

---

## SSR & Performance

### Q: Is this library SSR-safe?
**A**: Yes! The library is fully compatible with Angular SSR (Server-Side Rendering). During server execution, it renders a clean placeholder wrapper without invoking browser-specific APIs like `window`, `localStorage`, or `IntersectionObserver`. Once hydrated on the client, the viewer initializes automatically.

### Q: What is viewport intersection lazy loading?
**A**: By default (`[lazy]="true"`), the PDF viewer only initializes when it scrolls into the viewport. This saves initial client resources, especially useful in tabbed interfaces or long scrolling dashboards with multiple hidden documents. You can disable it with `[lazy]="false"`.

### Q: Does the library support zoneless Angular applications?
**A**: Yes, the library is built with a signal-based architecture and is fully compatible with zoneless Angular applications.

### Q: How do I optimize performance with multiple viewers?
**A**:
- Keep `[lazy]="true"` (default) so viewers only load when visible
- Reuse component instances instead of destroying and recreating them
- Use `[showProgressBar]="false"` and `[showSkeleton]="false"` if you don't need loading indicators
- Ensure container dimensions are well-defined (avoid `height: auto`)

### Q: Does this component support offline rendering?
**A**: Yes, once the core `@embedpdf/snippet` package is cached by the browser, you can load local documents offline using Blob URL inputs.

---

## Theming & Customization

### Q: How do I apply a custom theme?
**A**: Pass a `RmNgPdfThemeConfig` object to the `[theme]` input:

```ts
import { RmNgPdfThemeConfig } from '@codewithrajat/rm-ng-pdf-viewer';

const emeraldTheme: RmNgPdfThemeConfig = {
  preference: 'system',
  light: {
    accent: { primary: '#059669', primaryHover: '#047857', primaryForeground: '#ffffff' },
    background: { app: '#f0fdf4', surface: '#ffffff' }
  },
  dark: {
    accent: { primary: '#10b981', primaryHover: '#059669', primaryForeground: '#ffffff' },
    background: { app: '#064e3b', surface: '#022c22' }
  }
};
```

```html
<rm-ng-pdf-viewer src="doc.pdf" [theme]="emeraldTheme" />
```

### Q: Does the library support dark mode?
**A**: Yes. Set `preference: 'system'` in your theme config to automatically synchronize with the browser's dark mode preference. You can also force `'light'` or `'dark'` modes explicitly.

### Q: Can I hide specific toolbar buttons?
**A**: Yes. Add the category name to the `disabledCategories` array in your configuration:

```ts
const config: RmNgPdfViewerConfig = {
  disabledCategories: ['document-print'] // Hides the print button
};
```

```html
<rm-ng-pdf-viewer src="doc.pdf" [config]="config" />
```

### Q: Can I use custom loading skeletons or error templates?
**A**: Yes. You can pass `ng-template` references to render bespoke skeleton views and error cards. Define templates in your component view and pass them to the component. See the [Usage Guide](../guides/basic-usage.md) for detailed examples.

---

## Browser Support

### Q: Which browsers are supported?
**A**:

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 80+ |  Full |
| Firefox | 75+ |  Full |
| Safari | 13+ | Full |
| Edge | 80+ |  Full |
| Opera | 67+ |  Full |
| Samsung Internet | 12+ |  Full |

**Not supported:** Internet Explorer (all versions) and very old mobile browsers (pre-2019).

### Q: Does it work on mobile devices?
**A**: Yes. The library supports iOS Safari 13+, Chrome for Android 80+, Samsung Internet, and all modern mobile browsers with modern JavaScript support.

---

## Troubleshooting

### Q: I'm getting "Window is not defined" error. How do I fix it?
**A**: This happens when browser-specific code runs during server-side execution. The library handles this internally, but if you're accessing browser APIs in your own code, wrap them in platform checks:

```ts
import { isPlatformBrowser } from '@angular/common';

constructor(@Inject(PLATFORM_ID) private platformId: object) {
  if (isPlatformBrowser(this.platformId)) {
    // Browser-only code here
  }
}
```

### Q: The PDF is not rendering. What should I check?
**A**:
1. Ensure `@embedpdf/snippet` is installed as a peer dependency
2. Verify the `src` URL is accessible and CORS-enabled
3. Make sure the container has a defined height (avoid `height: auto`)
4. Check the `(onError)` output for specific error messages
5. If using lazy loading, ensure the component is scrolled into view

### Q: Why does my container collapse or not render properly?
**A**: The PDF viewer requires a well-defined container height. Never wrap the component inside containers with `height: auto` or collapsing boundaries. Always set an explicit height:

```html
<rm-ng-pdf-viewer src="doc.pdf" height="600px" />
```

---

## Contributing & Support

### Q: How do I report a bug or request a feature?
**A**:
- **Bug Reports:** [Report a Bug](https://github.com/malikrajat/rm-ng-pdf-viewer/issues/new?template=bug_report.md)
- **Feature Requests:** [Request a Feature](https://github.com/malikrajat/rm-ng-pdf-viewer/issues/new?template=feature_request.md)
- **Discussions:** [Join the Discussion](https://github.com/malikrajat/rm-ng-pdf-viewer/discussions)

### Q: Can I contribute to this project?
**A**: Absolutely! Contributions are welcome. You can contribute code, documentation, or feature requests. Star the repository, watch for updates, and share your use cases and feedback with the community.

### Q: Where can I find more documentation?
**A**:
- [Installation Guide](../getting-started/installation.md)
- [Usage Guide](../guides/basic-usage.md)
- [API Reference](../api/components/rm-ng-pdf-viewer.md)
- [Theming Guide](../theming/overview.md)
- [Best Practices](../guides/best-practices.md)

---

### Navigation
* Prev: [Troubleshooting: Performance Issues](../troubleshooting/performance-issues.md)
* Next: [Home](../../README.md)
