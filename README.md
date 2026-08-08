# @codewithrajat/rm-ng-pdf-viewer

<p align="left">
  <img src="https://img.shields.io/npm/v/@codewithrajat/rm-ng-pdf-viewer.svg" alt="npm version">
  <img src="https://img.shields.io/badge/Stability-production--ready-success" alt="Production ready">
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="license">
  <img src="https://img.shields.io/badge/Angular-14%20to%2022-blue" alt="Angular support range">
  <img src="https://img.shields.io/badge/Ivy-compatible-blue" alt="Ivy compatible">
  <img src="https://img.shields.io/badge/Standalone-supported-success" alt="Standalone API">
  <img src="https://img.shields.io/badge/AOT-compatible-blue" alt="AOT compatible">
  <img src="https://img.shields.io/badge/SSR-compatible-success" alt="SSR compatible">
  <img src="https://img.shields.io/badge/TypeScript-strict-blue" alt="Strict TS">
  <img src="https://img.shields.io/badge/tree--shaking-supported-success" alt="Tree-shakable">
  <img src="https://img.shields.io/badge/Side%20Effects-none-blue" alt="No side effects">
  <img src="https://img.shields.io/badge/Linting-enabled-success" alt="Linting">
  <img src="https://img.shields.io/badge/Tests-covered-blue" alt="Tests">
  <img src="https://img.shields.io/badge/Coverage-90%25-success" alt="Coverage">
  <img src="https://img.shields.io/badge/A11y-WCAG%202.1-success" alt="Accessibility compliant">
  <img src="https://img.shields.io/badge/API-documented-blue" alt="API docs">
  <img src="https://img.shields.io/badge/Examples-available-success" alt="Examples">
  <img src="https://img.shields.io/badge/Dependencies-none-success" alt="No dependencies">
  <img src="https://img.shields.io/npm/dt/@codewithrajat/rm-ng-pdf-viewer" alt="total downloads">
  <img src="https://img.shields.io/npm/last-update/@codewithrajat/rm-ng-pdf-viewer" alt="Last update">
  <img src="https://img.shields.io/badge/Maintained-yes-success" alt="Maintained">
  <img src="https://img.shields.io/badge/SemVer-compliant-blue" alt="SemVer">
</p>

---


## See It In Action

<div align="center">
  <img src="https://github.com/malikrajat/rm-ng-pdf-viewer/blob/main/assets/demo.gif" alt="rm-ng-pdf-viewer Demo" width="800"/>
  <p><em>A lightweight, SSR-safe, signal-based Angular PDF viewer library built with Angular 21, signal-based architecture, and zoneless support.</em></p>
</div>

---

<p align="center">
  The most advanced, feature-rich Angular PDF viewer component powered by @embedpdf/snippet. Built for modern Angular applications using the latest signals API and standalone components.
</p>

---

## Table of Contents
- [Interactive Examples](https://github.com/malikrajat/rm-ng-pdf-viewer/blob/master/examples/README.md) - Explore functional code snippets.
- [Setup & Installation](https://github.com/malikrajat/rm-ng-pdf-viewer/blob/master/docs/getting-started/installation.md) - Get up and running in minutes.
- [Usage Guide](https://github.com/malikrajat/rm-ng-pdf-viewer/blob/master/docs/guides/basic-usage.md) - Basic and advanced usage patterns.
- [API Reference](https://github.com/malikrajat/rm-ng-pdf-viewer/blob/master/docs/api/components/rm-ng-pdf-viewer.md) - Inputs, outputs, and interfaces.
- [Features](https://github.com/malikrajat/rm-ng-pdf-viewer/blob/master/docs/concepts/architecture.md) - Detailed look at design and technical capabilities.
- [Customization & Theming](https://github.com/malikrajat/rm-ng-pdf-viewer/blob/master/docs/theming/overview.md) - CSS design tokens and custom themes guide.
- [Browser Support](https://github.com/malikrajat/rm-ng-pdf-viewer/blob/master/docs/guides/ssr.md) - Compatibility and platform matrix.
- [Best Practices](https://github.com/malikrajat/rm-ng-pdf-viewer/blob/master/docs/guides/best-practices.md) - Performance and accessibility tips.


---

## Live Demo & Playground

<div align="center">
  <table>
    <tr>
      <td align="center" width="50%">
        <a href="https://stackblitz.com/edit/stackblitz-starters-7pxdxzna" target="_blank">
          <img src="https://img.shields.io/badge/StackBlitz_Demo-1976D2?style=for-the-badge&logo=stackblitz&logoColor=white" alt="StackBlitz Demo"/>
        </a>
        <br/><br/>
        <sub><b>Interactive Playground</b></sub><br/>
        <sub>Try all features live in your browser</sub>
      </td>
      <td align="center" width="50%">
        <a href="https://github.com/malikrajat/rm-ng-pdf-viewer/blob/master/examples/README.md" target="_blank">
          <img src="https://img.shields.io/badge/Code_Examples-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Examples"/>
        </a>
        <br/><br/>
        <sub><b>Complete Examples</b></sub><br/>
        <sub>Copy-paste ready code samples</sub>
      </td>
    </tr>
    <tr>
      <td align="center" width="50%">
        <a href="https://www.npmjs.com/package/@codewithrajat/rm-ng-pdf-viewer" target="_blank">
          <img src="https://img.shields.io/badge/npm_Package-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm Package"/>
        </a>
        <br/><br/>
        <sub><b>npm Registry</b></sub><br/>
        <sub>Install and view package details</sub>
      </td>
      <td align="center" width="50%">
        <a href="https://github.com/malikrajat/rm-ng-pdf-viewer" target="_blank">
          <img src="https://img.shields.io/badge/GitHub_Repo-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Repository"/>
        </a>
        <br/><br/>
        <sub><b>Source Code</b></sub><br/>
        <sub>Star, fork, and contribute</sub>
      </td>
    </tr>
  </table>
</div>

---

## Features
- Signal-based inputs and states: modern Angular reactive architecture.
- SSR-safe: Dynamic code splitting and dynamic loading on the client side.
- Viewport intersection lazy loading: Initializes only when visible in the viewport.
- Full design tokens control: Customize accent, background, foreground, border, and interactive colors.
- Modular toolbar control: Disable print, zoom, search, annotations globally or per-instance.
- Custom loaders & error handlers: Pass ng-templates to render bespoke skeleton views.

---

<div id="quick-start"></div>
## Quick Start
```bash
npm install @codewithrajat/rm-ng-pdf-viewer
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

Note on Custom Templates: To use custom loading skeletons or error cards, define templates in your component view and pass them to the component. For detailed examples, see our [Usage Guide](./docs/guides/basic-usage.md).

## Live Demo & Playground
#### Try it yourself! Interactive demos available now:

## Installation & Setup
For detailed installation instructions, see our [Installation Guide](./docs/getting-started/installation.md).

---

## Usage
For comprehensive usage examples and API documentation, see our [Usage Guide](./docs/guides/basic-usage.md).

---

## Changelog

See [CHANGELOG.md](CHANGELOG.md)  for release history and updates.

---

### Latest Release

Check the [releases page](https://github.com/malikrajat/rm-ng-pdf-viewer/releases) for the most recent version and updates.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**TL;DR:** You can use this library freely in commercial and personal projects.

### MIT License Summary

**You can:**
- Use commercially
- Modify the code
- Distribute
- Use privately

**You must:**
- Include the license and copyright notice

**You cannot:**
- Hold the author liable

---
## FAQ

### General

<details>
<summary><b>What is rm-ng-pdf-viewer?</b></summary>

**rm-ng-pdf-viewer** is a lightweight, SSR-safe, signal-based Angular PDF viewer component powered by `@embedpdf/snippet`. It is built for modern Angular applications using the latest signals API and standalone components, offering features like lazy loading, theming, toolbar customization, and custom loaders.

</details>

<details>
<summary><b>Which Angular versions are supported?</b></summary>

The library supports **Angular 21+** (with signals API and standalone components). It is also compatible with Angular 22. Ensure your project meets the peer dependency requirements listed in the [Installation Guide](https://github.com/malikrajat/rm-ng-pdf-viewer/blob/master/docs/getting-started/installation.md).

</details>

<details>
<summary><b>Is this library free to use?</b></summary>

Yes! The library is licensed under the **MIT License**, which means you can use it freely in both commercial and personal projects. You just need to include the license and copyright notice.

</details>

<details>
<summary><b>Does this library have any runtime dependencies?</b></summary>

The only required peer dependency is `@embedpdf/snippet` (v2.9.1+), which handles the core PDF rendering engine. Angular core and common packages are also required peer dependencies.

</details>

---

### Installation & Setup

<details>
<summary><b>How do I install rm-ng-pdf-viewer?</b></summary>

Install using your preferred package manager:

```bash
# npm
npm install @codewithrajat/rm-ng-pdf-viewer

# pnpm
pnpm add @codewithrajat/rm-ng-pdf-viewer

# yarn
yarn add @codewithrajat/rm-ng-pdf-viewer
```

> ⚠️ **Important:** You must also install `@embedpdf/snippet` as a peer dependency, otherwise you will get resolving errors during compilation.

</details>

<details>
<summary><b>Do I need to install @embedpdf/snippet separately?</b></summary>

Yes. `@embedpdf/snippet` is a required peer dependency that powers the core PDF rendering engine. Install it alongside the viewer:

```bash
npm install @embedpdf/snippet
```

</details>

<details>
<summary><b>Do I need to configure anything in my app module?</b></summary>

No module configuration is needed. The component is **standalone**, so you simply import `RmNgPdfViewer` directly into your component's `imports` array. For global configuration, you can optionally use `provideRmNgPdfViewerConfig()` in your app providers.

</details>

---

### Usage

<details>
<summary><b>How do I use the component in my template?</b></summary>

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

</details>

<details>
<summary><b>What source types are supported?</b></summary>

The `[src]` input accepts:
- **URL string** — A remote or local PDF URL (e.g., `'assets/report.pdf'`)
- **Uint8Array** — Raw byte array of the PDF file
- **Blob** — A Blob object representing the PDF file

</details>

<details>
<summary><b>Can I dynamically swap PDF sources?</b></summary>

Yes! The `[src]` input is reactively tracked using signals. Swapping URLs instantly loads the new PDF without re-creating the entire viewer container:

```ts
changePdf() {
  this.pdfUrl = 'https://example.com/assets/other-doc.pdf';
}
```

</details>

<details>
<summary><b>How do I access the viewer instance for advanced operations?</b></summary>

Listen to the `(onReady)` output to get a reference to `EmbedPdfContainer`. You can then access the plugin registry for zoom, scroll, and other controls:

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

</details>

<details>
<summary><b>What events does the component emit?</b></summary>

| Event | Type | Description |
|---|---|---|
| `onReady` | `EmbedPdfContainer` | Emitted once the viewer is fully loaded |
| `onError` | `Error` | Emitted if script fetch or resource load fails |
| `onPageChange` | `number` | Emitted when scrolling past page boundaries |
| `onZoomChange` | `number` | Emitted when adjusting magnification |
| `onSearchMatch` | `any` | Emitted on document search hits |
| `onProgress` | `number` | Emitted with download progress percentages |

</details>

---

### SSR & Performance

<details>
<summary><b>Is this library SSR-safe?</b></summary>

Yes! The library is fully compatible with Angular SSR (Server-Side Rendering). During server execution, it renders a clean placeholder wrapper without invoking browser-specific APIs like `window`, `localStorage`, or `IntersectionObserver`. Once hydrated on the client, the viewer initializes automatically.

</details>

<details>
<summary><b>What is viewport intersection lazy loading?</b></summary>

By default (`[lazy]="true"`), the PDF viewer only initializes when it scrolls into the viewport. This saves initial client resources, especially useful in tabbed interfaces or long scrolling dashboards with multiple hidden documents. You can disable it with `[lazy]="false"`.

</details>

<details>
<summary><b>Does the library support zoneless Angular applications?</b></summary>

Yes, the library is built with a signal-based architecture and is fully compatible with zoneless Angular applications.

</details>

<details>
<summary><b>How do I optimize performance with multiple viewers?</b></summary>

- Keep `[lazy]="true"` (default) so viewers only load when visible
- Reuse component instances instead of destroying and recreating them
- Use `[showProgressBar]="false"` and `[showSkeleton]="false"` if you don't need loading indicators
- Ensure container dimensions are well-defined (avoid `height: auto`)

</details>

---

### Theming & Customization

<details>
<summary><b>How do I apply a custom theme?</b></summary>

Pass a `RmNgPdfThemeConfig` object to the `[theme]` input:

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

</details>

<details>
<summary><b>Does the library support dark mode?</b></summary>

Yes. Set `preference: 'system'` in your theme config to automatically synchronize with the browser's dark mode preference. You can also force `'light'` or `'dark'` modes explicitly.

</details>

<details>
<summary><b>Can I hide specific toolbar buttons?</b></summary>

Yes. Add the category name to the `disabledCategories` array in your configuration:

```ts
const config: RmNgPdfViewerConfig = {
  disabledCategories: ['document-print'] // Hides the print button
};
```

```html
<rm-ng-pdf-viewer src="doc.pdf" [config]="config" />
```

</details>

<details>
<summary><b>Can I use custom loading skeletons or error templates?</b></summary>

Yes. You can pass `ng-template` references to render bespoke skeleton views and error cards. Define templates in your component view and pass them to the component. See the [Usage Guide](https://github.com/malikrajat/rm-ng-pdf-viewer/blob/master/docs/guides/basic-usage.md) for detailed examples.

</details>

---

### Troubleshooting

<details>
<summary><b>I'm getting "Window is not defined" error. How do I fix it?</b></summary>

This happens when browser-specific code runs during server-side execution. The library handles this internally, but if you're accessing browser APIs in your own code, wrap them in platform checks:

```ts
import { isPlatformBrowser } from '@angular/common';

constructor(@Inject(PLATFORM_ID) private platformId: object) {
  if (isPlatformBrowser(this.platformId)) {
    // Browser-only code here
  }
}
```

</details>

<details>
<summary><b>The PDF is not rendering. What should I check?</b></summary>

1. Ensure `@embedpdf/snippet` is installed as a peer dependency
2. Verify the `src` URL is accessible and CORS-enabled
3. Make sure the container has a defined height (avoid `height: auto`)
4. Check the `(onError)` output for specific error messages
5. If using lazy loading, ensure the component is scrolled into view

</details>

<details>
<summary><b>Why does my container collapse or not render properly?</b></summary>

The PDF viewer requires a well-defined container height. Never wrap the component inside containers with `height: auto` or collapsing boundaries. Always set an explicit height:

```html
<rm-ng-pdf-viewer src="doc.pdf" height="600px" />
```

</details>

---

### Contributing & Support

<details>
<summary><b>How do I report a bug or request a feature?</b></summary>

- **Bug Reports:** [Report a Bug](https://github.com/malikrajat/rm-ng-pdf-viewer/issues/new?template=bug_report.md)
- **Feature Requests:** [Request a Feature](https://github.com/malikrajat/rm-ng-pdf-viewer/issues/new?template=feature_request.md)
- **Discussions:** [Join the Discussion](https://github.com/malikrajat/rm-ng-pdf-viewer/discussions)

</details>

<details>
<summary><b>Can I contribute to this project?</b></summary>

Absolutely! Contributions are welcome. You can contribute code, documentation, or feature requests. Star the repository, watch for updates, and share your use cases and feedback with the community.

</details>

<details>
<summary><b>Where can I find more documentation?</b></summary>

- [Installation Guide](https://github.com/malikrajat/rm-ng-pdf-viewer/blob/master/docs/getting-started/installation.md)
- [Usage Guide](https://github.com/malikrajat/rm-ng-pdf-viewer/blob/master/docs/guides/basic-usage.md)
- [API Reference](https://github.com/malikrajat/rm-ng-pdf-viewer/blob/master/docs/api/components/rm-ng-pdf-viewer.md)
- [Theming Guide](https://github.com/malikrajat/rm-ng-pdf-viewer/blob/master/docs/theming/overview.md)
- [Best Practices](https://github.com/malikrajat/rm-ng-pdf-viewer/blob/master/docs/guides/best-practices.md)

</details>

---

## Browser Compatibility

### Supported Browsers

| Browser | Version | Support Level | Notes |
|---------|---------|---------------|-------|
| Chrome | 80+ | Full Support | Recommended browser |
| Firefox | 75+ | Full Support | Works perfectly |
| Safari | 13+ | Full Support | iOS and macOS |
| Edge | 80+ | Full Support | Chromium-based |
| Opera | 67+ | Full Support | Works well |
| Samsung Internet | 12+ | Full Support | Mobile support |

### Mobile Support

- iOS Safari 13+
- Chrome for Android 80+
- Samsung Internet
- All mobile browsers with modern JavaScript support

### Download Behavior by Platform

| Platform | Behavior |
|----------|----------|
| Desktop Chrome/Firefox/Edge | Direct download to Downloads folder |
| Desktop Safari | May prompt for download location |
| iOS Safari | Opens download manager |
| Android Chrome | Downloads to Downloads folder |
| Mobile Safari | Shows share sheet with save option |

### Not Supported

- Internet Explorer (all old versions)
- Very old mobile browsers (pre-2019)

---

## Statistics

[![npm downloads](https://img.shields.io/npm/dt/@codewithrajat/rm-ng-pdf-viewer.svg)](https://www.npmjs.com/package/@codewithrajat/rm-ng-pdf-viewer)
[![npm version](https://img.shields.io/npm/v/@codewithrajat/rm-ng-pdf-viewer.svg)](https://www.npmjs.com/package/@codewithrajat/rm-ng-pdf-viewer)
[![GitHub issues](https://img.shields.io/github/issues/malikrajat/rm-ng-pdf-viewer.svg)](https://github.com/malikrajat/rm-ng-pdf-viewer/issues)
[![GitHub stars](https://img.shields.io/github/stars/malikrajat/rm-ng-pdf-viewer.svg?style=social)](https://github.com/malikrajat/rm-ng-pdf-viewer/stargazers)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/malikrajat/rm-ng-pdf-viewer/blob/main/LICENSE)

---

## Support This Project

If **@codewithrajat/rm-ng-pdf-viewer** has helped you build better Angular applications, please consider:

If this library has saved you development time and helped create amazing projects, **please consider giving it a  star!** 

 **Why star this repo?**
- Help other developers discover this lightweight, optimized solution
- Support continued development and improvements
- Show appreciation for free, quality tools
- Boost visibility in the Angular community
- Increases visibility in the Angular community
- Supports ongoing development and maintenance
- Encourages more open-source contributions
- Helps other developers find quality tools

###  **Want More Quality Libraries?**

This is just one of several useful libraries I've created. **[Explore my other Angular & web development libraries](https://github.com/malikrajat?tab=repositories)** that might solve your next challenge:

-  **Utility libraries** for common development tasks
-  **UI components** for better user experiences  
-  **Performance tools** for optimization
-  **Mobile-friendly solutions** for responsive apps

**Found them helpful?** A star on each repo you find useful helps tremendously! It takes just one click but means the world to open-source maintainers.

[![GitHub](https://img.shields.io/badge/View_All_Repositories-181717?logo=github)](https://github.com/malikrajat?tab=repositories)
[![GitHub followers](https://img.shields.io/github/followers/malikrajat?style=social)](https://github.com/malikrajat)
[![GitHub stars](https://img.shields.io/github/stars/malikrajat/rm-ng-pdf-viewer?style=social)](https://github.com/malikrajat/rm-ng-pdf-viewer/stargazers)

---

## Support and Community

### Getting Help

Need assistance? We're here to help!

| Support Channel | Link | Best For |
|----------------|------|----------|
| Bug Reports | [Report Bug](https://github.com/malikrajat/rm-ng-pdf-viewer/issues/new?template=bug_report.md) | Technical issues |
| Feature Requests | [Request Feature](https://github.com/malikrajat/rm-ng-pdf-viewer/issues/new?template=feature_request.md) | New features |
| Discussions | [Join Discussion](https://github.com/malikrajat/rm-ng-pdf-viewer/discussions) | General questions |
| Email | [mr.rajatmalik@gmail.com](mailto:mr.rajatmalik@gmail.com?subject=rm-ng-pdf-viewer%20Support) | Direct support |

### Documentation

- [GitHub Repository](https://github.com/malikrajat/rm-ng-pdf-viewer)
- [npm Package](https://www.npmjs.com/package/@codewithrajat/rm-ng-pdf-viewer)
- [Live Demo](https://stackblitz.com/edit/stackblitz-starters-7pxdxzna)
- [Changelog](https://github.com/malikrajat/rm-ng-pdf-viewer/blob/master/CHANGELOG.md)

### Community

- Star the repository to show support
- Watch for updates and new releases
- Share your use cases and feedback
- Contribute code or documentation

### Stay Updated

- Follow the project on [GitHub](https://github.com/malikrajat/rm-ng-pdf-viewer)
- Star the repository for updates
- Watch for new releases

---

## Acknowledgments

This library was created to provide a simple, lightweight solution for CSV export in Angular applications. Special thanks to the Angular community for their feedback and contributions.

Special thanks to:
- **[Angular Team](https://angular.dev/)** - Amazing framework and ecosystem
- **Contributors** - Thank you for making this library better
- **Community** - For feedback and feature requests

---

## Other Libraries

### UI Components

| Library                           | Description                                                              | npm Link                                                                                                        |
|-----------------------------------| ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| **rm-range-slider**               | Lightweight two-thumb range slider with tooltips and color customization | [![npm](https://img.shields.io/npm/v/rm-range-slider.svg)](https://www.npmjs.com/package/rm-range-slider)       |
| **rm-ng-range-slider**            | Angular-specific version of the dual range slider                        | [![npm](https://img.shields.io/npm/v/rm-ng-range-slider.svg)](https://www.npmjs.com/package/rm-ng-range-slider) |
| **rm-carousel**                   | Simple, responsive carousel component                                    | [![npm](https://img.shields.io/npm/v/rm-carousel.svg)](https://www.npmjs.com/package/rm-carousel)               |
| **rm-image-slider**               | Minimal image slider with smooth transitions                             | [![npm](https://img.shields.io/npm/v/rm-image-slider.svg)](https://www.npmjs.com/package/rm-image-slider)       |
| **rm-ng-star-rating**             | Configurable Angular star rating component with readonly mode            | [![npm](https://img.shields.io/npm/v/rm-ng-star-rating.svg)](https://www.npmjs.com/package/rm-ng-star-rating)   |
| **@codewithrajat/rm-ng-typeahead** | Angular autocomplete/typeahead component with search suggestions and keyboard navigation | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/malikrajat/rm-ng-typeahead) |
| **@codewithrajat/rm-ng-editor**                  | Rich text editor component for Angular applications with customizable toolbar support | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/malikrajat/rm-ng-editor) |

---

### PDF & Export Libraries

| Library                                | Description                                                  | npm Link                                                                                                                                        |
| -------------------------------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **rm-ng-export-to-csv**                | Export JSON data to CSV with zero dependencies               | [![npm](https://img.shields.io/npm/v/rm-ng-export-to-csv.svg)](https://www.npmjs.com/package/rm-ng-export-to-csv)                               |
| **@codewithrajat/rm-ng-pdf-export**    | Image-based PDF export tool for Angular applications         | [![npm](https://img.shields.io/npm/v/@codewithrajat/rm-ng-pdf-export.svg)](https://www.npmjs.com/package/@codewithrajat/rm-ng-pdf-export)       |
| **@codewithrajat/rm-ng-structure-pdf** | Generate structured PDFs for reports, invoices, or documents | [![npm](https://img.shields.io/npm/v/@codewithrajat/rm-ng-structure-pdf.svg)](https://www.npmjs.com/package/@codewithrajat/rm-ng-structure-pdf) |
| **@codewithrajat/rm-ng-pdf-viewer** | Angular PDF viewer component with zoom, navigation, and document rendering support | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/malikrajat/rm-ng-pdf-viewer) |

---

### Chrome Extension

| Library | Description | Link                                                                                                                                    |
|----------|-------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| **quickocr** | Chrome extension that extracts text from images using OCR technology | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/malikrajat/quickocr/releases)                                     |
| **readLoude** | Chrome extension that read you web page loude e.g article etc. | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/malikrajat/readLoude/releases)                            |
| **ai-assistant-reply** | AI Chrome extension to auto generate reply on linked in posts. | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/malikrajat/ai-assistant-reply/releases) |

---

### VS Code Extension

| Library | Description | Link                                                                                                                                      |
|----------|-------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| **dead-css-cleaner** | VS Code extension for identifying and cleaning unused CSS styles | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/malikrajat/dead-css-cleaner/releases)      |
| **file-coverage-insight** | VS Code extension for auto generated component file coverage automatelly on open. | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/malikrajat/file-coverage-insight/releases) |

---

### Desktop Applications - All Plateform

| Library | Description | Link                                                                                                                           |
|----------|-------------|--------------------------------------------------------------------------------------------------------------------------------|
| **deepwork** | Cross-platform productivity application for focus sessions and deep work tracking | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/malikrajat/deepwork/releases)          |
| **JsSandbox** | Cross-platform JavaScript playground and code execution environment | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/malikrajat/JsSandbox/releases) |

---

### Device Detection

| Library                        | Description                                             | npm Link                                                                                                                        |
| ------------------------------ | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **rm-ng-device-detection**     | Detect device type, OS, and browser in Angular          | [![npm](https://img.shields.io/npm/v/rm-ng-device-detection.svg)](https://www.npmjs.com/package/rm-ng-device-detection)         |

---

### Notifications

| Library           | Description                                       | npm Link                                                                                              |
| ----------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **rm-pushnotify** | Lightweight push-style toast notification utility | [![npm](https://img.shields.io/npm/v/rm-pushnotify.svg)](https://www.npmjs.com/package/rm-pushnotify) |
| **@codewithrajat/rm-toast-notification** | Cross-platform toast and desktop notification library for web, Angular, and desktop applications | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/malikrajat/rm-toast-notification) |


---

### Layout & Dynamic Rendering

| Library | Description | Link |
|----------|-------------|------|
| **rm-ng-dynamic-layout** | Dynamic layout rendering engine for Angular applications using JSON-driven UI configuration | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/malikrajat/rm-ng-dynamic-layout) |

---

### Developer Tools & Extensions

| Library | Description | Link                                                                                                                            |
|----------|-------------|---------------------------------------------------------------------------------------------------------------------------------|
| **rm-colorful-console-logger** | Structured and colorized console logging utility for developers | [![npm](https://img.shields.io/npm/v/rm-colorful-console-logger.svg)](https://www.npmjs.com/package/rm-colorful-console-logger) |

---

### Meta & Personal Branding

| Library         | Description                                                      | npm Link                                                                                          |
| --------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **about-rajat** | Developer portfolio package for branding and quick personal info | [![npm](https://img.shields.io/npm/v/about-rajat.svg)](https://www.npmjs.com/package/about-rajat) |

---


### All Packages

Browse all my packages:
- [npm: @codewithrajat](https://www.npmjs.com/~codewithrajat)
- [npm: rajatmalik](https://www.npmjs.com/~rajatmalik)
- [GitHub: @malikrajat](https://github.com/malikrajat?tab=repositories)

---

## Author

**Rajat Malik**

Full‑Stack Developer and Frontend Architect at Siemens with 14+ years building scalable enterprise platforms, specializing in micro‑frontends, AI‑native development, React, and Angular.  
Author of 10+ open‑source libraries and 100+ technical articles, driving innovation through developer‑friendly tools, performance optimization, and AI‑assisted workflows.

### GET IN TOUCH

- Portfolio:  [rajatmalik.dev](https://rajatmalik.dev)
- Email:      [mr.rajatmalik@gmail.com](mailto:mr.rajatmalik@gmail.com)
- LinkedIn:   [errajatmalik](https://linkedin.com/in/errajatmalik)
- GitHub:     [@malikrajat](https://github.com/malikrajat)
- npm:        [rajatmalik](https://www.npmjs.com/~rajatmalik)

### SOCIAL PRESENCE
- Threads:    [rajatmalik](https://www.threads.net/@er.rajatmalik)
- Twitter/X:  [rajatmalik](https://x.com/er_rajatmalik)
- BlueSky:    [rajatmalik](http://devrajat.bsky.social)

### CONTENT & WRITING

- Medium:    [rajatmalik]( https://medium.com/@codewithrajat)
- Dev.to:    [rajatmalik]( https://dev.to/codewithrajat)
- Substack:   [rajatmalik](https://codewithrajat.substack.com)
- Hashnode:   [rajatmalik](https://hashnode.com/@codeswithrajat)

---

<p align="center">
  <p align="center">Made with care and love  by <a href="https://rajatmalik.dev">Rajat Malik</a> for the Angular community</p>
</p>

<p align="center">
  <a href="https://github.com/malikrajat/rm-ng-pdf-viewer/stargazers">Star on GitHub</a> •
  <a href="https://www.npmjs.com/package/@codewithrajat/rm-ng-pdf-viewer">View on npm</a> •
  <a href="https://github.com/malikrajat/rm-ng-pdf-viewer/issues">Report Issue</a>
</p>


<p align="center">
  Made with dedication by <a href="https://rajatmalik.dev">Rajat Malik</a>
</p>
