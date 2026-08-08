import { Component } from '@angular/core';
import { RmNgPdfViewer } from 'rm-ng-pdf-viewer';

@Component({
 selector: 'app-opt-rendering',
 standalone: true,
 imports: [RmNgPdfViewer],
 template: `
 <rm-ng-pdf-viewer 
 src="assets/sample.pdf" 
 [config]="{ renderMode: 'canvas', incrementalLoading: true }" 
 />
 `
})
export class AppOptimizedRenderingComponent {}
