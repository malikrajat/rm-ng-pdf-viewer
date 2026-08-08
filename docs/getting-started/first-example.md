# First Example

This step-by-step example demonstrates how to integrate **rm-ng-pdf-viewer** in a real application component with progress tracking and customizable loaders.

## Implementation Code

```ts
// my-pdf.component.ts
import { Component, signal } from '@angular/core';
import { RmNgPdfViewer } from 'rm-ng-pdf-viewer';
import { CommonModule } from '@angular/common';

@Component({
 selector: 'app-my-pdf',
 standalone: true,
 imports: [RmNgPdfViewer, CommonModule],
 templateUrl: './my-pdf.component.html',
 styleUrls: ['./my-pdf.component.css']
})
export class MyPdfComponent {
 documentSrc = signal<string>('https://example.com/contract.pdf');
 loadingProgress = signal<number>(0);
 isReady = signal<boolean>(false);

 onProgress(percent: number) {
 this.loadingProgress.set(percent);
 }

 onReady(viewer: any) {
 this.isReady.set(true);
 console.log('EmbedPDF Instance:', viewer);
 }

 onError(err: Error) {
 console.error('Failed to load document:', err);
 }
}
```

```html
<!-- my-pdf.component.html -->
<div class="pdf-container">
 <div *ngIf="!isReady()" class="status-overlay">
 <p>Loading document: {{ loadingProgress() }}%</p>
 </div>

 <rm-ng-pdf-viewer 
 [src]="documentSrc()" 
 height="75vh"
 (onProgress)="onProgress($event)"
 (onReady)="onReady($event)"
 (onError)="onError($event)"
 />
</div>
```

---

### Navigation
* Prev: [Quick Start](quick-start.md)
* Next: [Project Structure](project-structure.md)
