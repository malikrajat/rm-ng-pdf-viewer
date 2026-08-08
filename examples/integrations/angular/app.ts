import { Component } from '@angular/core';
import { RmNgPdfViewer } from 'rm-ng-pdf-viewer';

@Component({
 selector: 'app-angular-integration',
 standalone: true,
 imports: [RmNgPdfViewer],
 template: `<rm-ng-pdf-viewer src="assets/manual.pdf" />`
})
export class AppAngularIntegrationComponent {}
