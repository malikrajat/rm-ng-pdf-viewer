import { Component } from '@angular/core';
import { RmNgPdfViewer } from 'rm-ng-pdf-viewer';

@Component({
 selector: 'app-virtualized',
 standalone: true,
 imports: [RmNgPdfViewer],
 template: `
 <rm-ng-pdf-viewer 
 src="assets/humongous-textbook.pdf" 
 [config]="{ renderMode: 'canvas', virtualization: true }" 
 />
 `
})
export class AppVirtualizedComponent {}
