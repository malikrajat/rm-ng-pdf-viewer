# Advanced Usage

Access the full capabilities of the underlying viewer engine.

## Extracting the Viewer Instance

By listening to `(onReady)`, you get a reference to `EmbedPdfContainer`. You can use this handle to access the plugins registry:

```ts
import { EmbedPdfContainer } from '@embedpdf/snippet';

onReady(viewer: EmbedPdfContainer) {
 // Access registry and capabilities
 viewer.registry.then(registry => {
 // Zoom control
 const zoom = registry.getPlugin('zoom') as any;
 if (zoom && zoom.provides) {
 zoom.provides().setZoom(1.5); // Set 150% zoom
 }

 // Scroll control (Page selection)
 const scroll = registry.getPlugin('scroll') as any;
 if (scroll && scroll.provides) {
 scroll.provides().goToPage(3); // Navigate to Page 3
 }
 });
}
```

## Component Actions helper

We export utility helper methods on the class instance, which can be invoked using standard Angular `viewChild`:

```ts
// app.component.ts
import { Component, viewChild } from '@angular/core';
import { RmNgPdfViewer } from 'rm-ng-pdf-viewer';

@Component({
 selector: 'app-parent',
 template: `<rm-ng-pdf-viewer #viewerRef src="contract.pdf" />`
})
export class ParentComponent {
 viewer = viewChild.required<RmNgPdfViewer>('viewerRef');

 goFullscreen() {
 this.viewer().toggleFullscreen();
 }

 toggleThumbnails(show: boolean) {
 this.viewer().toggleThumbnails(show);
 }
}
```

---

### Navigation
* Prev: [Basic Usage](basic-usage.md)
* Next: [Best Practices](best-practices.md)
