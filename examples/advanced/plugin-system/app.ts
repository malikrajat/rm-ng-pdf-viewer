import { Component } from '@angular/core';
import { RmNgPdfViewer } from 'rm-ng-pdf-viewer';
import { EmbedPdfContainer } from '@embedpdf/snippet';

@Component({
 selector: 'app-plugin',
 standalone: true,
 imports: [RmNgPdfViewer],
 template: `
 <rm-ng-pdf-viewer src="assets/sample.pdf" (onReady)="hookViewer($event)" />
 `
})
export class AppPluginSystemComponent {
 hookViewer(viewer: EmbedPdfContainer) {
 viewer.registry.then(registry => {
 const docManager = registry.getPlugin('document-manager') as any;
 if (docManager) {
 console.log('Document metadata:', docManager.provides().getDocumentMetadata());
 }
 });
 }
}
