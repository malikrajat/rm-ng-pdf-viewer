import { Component } from '@angular/core';
import { RmNgPdfViewer } from 'rm-ng-pdf-viewer';

@Component({
 selector: 'app-lazy',
 standalone: true,
 imports: [RmNgPdfViewer],
 template: `
 <div style="height: 1500px; padding: 20px;">Scroll down to load the PDF viewer...</div>
 <rm-ng-pdf-viewer src="assets/sample.pdf" [lazy]="true" />
 `
})
export class AppLazyComponent {}
