import { Component } from '@angular/core';
import { RmNgPdfViewer } from 'rm-ng-pdf-viewer';

@Component({
 selector: 'app-custom-render',
 standalone: true,
 imports: [RmNgPdfViewer],
 template: `
 <rm-ng-pdf-viewer src="assets/sample.pdf" />
 `
})
export class AppCustomRenderersComponent {}
