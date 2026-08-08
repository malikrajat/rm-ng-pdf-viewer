# Quick Start

Get up and running with **rm-ng-pdf-viewer** in less than two minutes.

## 1. Import Component
Since the component is standalone, you can import it directly into your Angular component imports.

```ts
import { Component } from '@angular/core';
import { RmNgPdfViewer } from 'rm-ng-pdf-viewer';

@Component({
 selector: 'app-simple-viewer',
 standalone: true,
 imports: [RmNgPdfViewer],
 template: `
 <rm-ng-pdf-viewer 
 [src]="pdfUrl" 
 height="600px" 
 />
 `
})
export class SimpleViewerComponent {
 pdfUrl = 'https://example.com/assets/sample-report.pdf';
}
```

## 2. Dynamic Source Swapping
The `[src]` input is reactively tracked. Swapping URLs instantly loads the new PDF without re-creating the entire viewer container.

```ts
changePdf() {
 this.pdfUrl = 'https://example.com/assets/other-doc.pdf';
}
```

---

### Navigation
* Prev: [Installation](installation.md)
* Next: [First Example](first-example.md)
