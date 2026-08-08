import { Component } from '@angular/core';
import { RmNgPdfViewer } from 'rm-ng-pdf-viewer';

@Component({
 selector: 'app-bundle-opt',
 standalone: true,
 imports: [RmNgPdfViewer],
 template: `<rm-ng-pdf-viewer src="assets/large.pdf" [lazy]="true" />`
})
export class AppBundleSizeComponent {}
