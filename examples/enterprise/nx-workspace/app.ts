import { Component } from '@angular/core';
import { RmNgPdfViewer } from '@my-workspace/rm-ng-pdf-viewer';

@Component({
 selector: 'my-org-pdf',
 standalone: true,
 imports: [RmNgPdfViewer],
 template: `<rm-ng-pdf-viewer src="assets/enterprise-doc.pdf" />`
})
export class EnterpriseNxComponent {}
