# RmNgPdfViewerConfig Interfaces

Interface definitions for customization options.

## Definition

```ts
export interface RmNgPdfViewerConfig {
 src?: string;
 theme?: RmNgPdfThemeConfig;
 disabledCategories?: string[];
 [key: string]: unknown; // Allowed parameters pass-through
}

export interface RmNgPdfViewerGlobalConfig extends RmNgPdfViewerConfig {
 height?: string;
 syncTheme?: boolean;
 themeStorageKey?: string; // Key to query localStorage theme overrides
}
```

---

### Navigation
* Prev: [Global Configuration](../services/configuration.md)
* Next: [Theme Config Interface](../interfaces/rm-ng-pdf-theme-config.md)
