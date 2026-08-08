# Global Configuration Service

Provide global configurations to minimize repeated template property declarations.

## Tokens & Utilities

### 1. `RM_NG_PDF_VIEWER_CONFIG`
An `InjectionToken` containing default configuration parameters.

### 2. `provideRmNgPdfViewerConfig()`
A helper function to declare provider mappings inside `app.config.ts`:

```ts
import { provideRmNgPdfViewerConfig } from 'rm-ng-pdf-viewer';

export const appConfig: ApplicationConfig = {
 providers: [
 provideRmNgPdfViewerConfig({
 height: '700px',
 syncTheme: true,
 theme: { preference: 'dark' }
 })
 ]
};
```

---

### Navigation
* Prev: [Component API](../components/rm-ng-pdf-viewer.md)
* Next: [Viewer Config Interface](../interfaces/rm-ng-pdf-viewer-config.md)
