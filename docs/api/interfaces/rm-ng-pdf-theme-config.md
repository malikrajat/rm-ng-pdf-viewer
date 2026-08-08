# RmNgPdfThemeConfig Interfaces

Theme settings and color overrides.

## Definition

```ts
export type RmNgPdfThemePreference = 'light' | 'dark' | 'system';

export interface RmNgPdfThemeConfig {
 preference?: RmNgPdfThemePreference;
 light?: RmNgPdfThemeColors;
 dark?: RmNgPdfThemeColors;
}
```

For details on custom design tokens, see the **[Design Tokens Guide](../../theming/design-tokens.md)**.

---

### Navigation
* Prev: [Viewer Config Interface](../interfaces/rm-ng-pdf-viewer-config.md)
* Next: [Viewer Events](../events/viewer-events.md)
