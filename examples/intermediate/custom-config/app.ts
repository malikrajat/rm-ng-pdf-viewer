import { Component } from '@angular/core';
import { RmNgPdfViewer } from 'rm-ng-pdf-viewer';

@Component({
 selector: 'app-custom-config',
 standalone: true,
 imports: [RmNgPdfViewer],
 template: `
 <rm-ng-pdf-viewer 
 src="assets/report.pdf" 
 [config]="{ disabledCategories: ['annotation', 'zoom'] }" 
 />
 `
})
export class AppCustomConfigComponent {}
