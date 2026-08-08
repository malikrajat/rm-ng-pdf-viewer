# Dark Mode Synchronization

Synchronize the PDF viewer theme with your application's theme.

## Options

### 1. Automatic OS Sync (Default)
The component watches for changes in media preferences:
```html
<rm-ng-pdf-viewer [syncTheme]="true" />
```

### 2. Local Storage Sync
Synchronize the theme with a specific localStorage key (e.g. `app-theme`):
```html
<rm-ng-pdf-viewer themeStorageKey="app-theme" />
```
If the localStorage value contains the string "dark" (case-insensitive), the viewer initiates in dark mode.

---

### Navigation
* Prev: [Theming Overview](overview.md)
* Next: [CSS Variables Override](css-variables.md)
