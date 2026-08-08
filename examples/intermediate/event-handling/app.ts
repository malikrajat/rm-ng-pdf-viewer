import { Component } from '@angular/core';
import { RmNgPdfViewer } from 'rm-ng-pdf-viewer';

@Component({
 selector: 'app-event-handling',
 standalone: true,
 imports: [RmNgPdfViewer],
 template: `
 <rm-ng-pdf-viewer 
 src="assets/report.pdf" 
 (onPageChange)="pageSelected($event)"
 (onZoomChange)="zoomAdjusted($event)"
 />
 `
})
export class AppEventHandlingComponent {
 pageSelected(page: number) {
 console.log('User scrolled to page:', page);
 }

 zoomAdjusted(level: number) {
 console.log('Zoom set to:', level);
 }
}
