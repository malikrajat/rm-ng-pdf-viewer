import { Component, signal } from '@angular/core';
import { RmNgPdfViewer } from 'rm-ng-pdf-viewer';
import { CommonModule } from '@angular/common';

@Component({
 selector: 'app-simple',
 standalone: true,
 imports: [RmNgPdfViewer, CommonModule],
 template: `
 <rm-ng-pdf-viewer 
 [src]="pdfSrc" 
 [loadingTemplate]="myLoader"
 (onReady)="onReady($event)"
 />
 <ng-template #myLoader>
 <div class="custom-loader-spin">Generating document display...</div>
 </ng-template>
 `
})
export class AppSimpleComponent {
 pdfSrc = 'assets/annual-report.pdf';

 onReady(viewer: any) {
 console.log('PDF container is ready:', viewer);
 }
}
