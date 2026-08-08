import { Component, OnDestroy, signal } from '@angular/core';
import { RmNgPdfViewer } from 'rm-ng-pdf-viewer';

@Component({
 selector: 'app-mem-opt',
 standalone: true,
 imports: [RmNgPdfViewer],
 template: `<rm-ng-pdf-viewer [src]="fileBlob()" />`
})
export class AppMemoryOptimizationComponent implements OnDestroy {
 fileBlob = signal<Blob | string>('');

 loadNewFile(blob: Blob) {
 this.fileBlob.set(blob);
 }

 ngOnDestroy() {
 // Explicitly cleanup references
 this.fileBlob.set('');
 }
}
