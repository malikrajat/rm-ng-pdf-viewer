import { Component } from '@angular/core';
import { RmNgPdfViewer } from 'rm-ng-pdf-viewer';

@Component({
 selector: 'app-dashboard',
 standalone: true,
 imports: [RmNgPdfViewer],
 template: `
 <div class="dashboard-grid" style="display: grid; grid-template-columns: 1fr 2fr; gap: 20px;">
 <div class="stats-panel">General Statistics</div>
 <div class="viewer-panel">
 <rm-ng-pdf-viewer src="assets/weekly-report.pdf" height="80vh" />
 </div>
 </div>
 `
})
export class AppDashboardIntegrationComponent {}
