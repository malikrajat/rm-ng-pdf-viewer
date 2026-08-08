import { Component, signal } from '@angular/core';
import { RmNgPdfViewer } from 'rm-ng-pdf-viewer';

@Component({
 selector: 'app-dynamic-data',
 standalone: true,
 imports: [RmNgPdfViewer],
 template: `
 <button (click)="togglePdf()">Swap PDF</button>
 <rm-ng-pdf-viewer [src]="activeSource()" />
 `
})
export class AppDynamicDataComponent {
 activeSource = signal<string>('assets/document-a.pdf');

 togglePdf() {
 this.activeSource.set(
 this.activeSource() === 'assets/document-a.pdf' 
 ? 'assets/document-b.pdf' 
 : 'assets/document-a.pdf'
 );
 }
}
