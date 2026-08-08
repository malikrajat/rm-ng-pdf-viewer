import { ApplicationConfig } from '@angular/core';
import { provideRmNgPdfViewerConfig } from 'rm-ng-pdf-viewer';

export const appConfig: ApplicationConfig = {
 providers: [
 provideRmNgPdfViewerConfig({
 height: '750px',
 theme: { preference: 'dark' },
 syncTheme: true
 })
 ]
};
