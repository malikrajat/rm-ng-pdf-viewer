# RmNgPdfViewer Component

The core standalone component exposed by the library.

## Selector
```html
<rm-ng-pdf-viewer></rm-ng-pdf-viewer>
```

## Component Inputs (Signal Inputs)

| Input | Type | Default | Description |
|---|---|---|---|
| `src` | `string | Uint8Array | Blob` | `''` | Source file stream or URL location. |
| `height` | `string` | `'650px'` | Container height constraint. |
| `theme` | `RmNgPdfThemeConfig` | `undefined` | Custom coloring design tokens. |
| `syncTheme` | `boolean` | `true` | Synchronize color theme reactively. |
| `themeStorageKey` | `string` | `undefined` | Key to retrieve initial theme value from localStorage. |
| `config` | `RmNgPdfViewerConfig` | `undefined` | General instance configurations. |
| `lazy` | `boolean` | `true` | Lazy initialize on viewport overlap. |
| `showSkeleton` | `boolean` | `true` | Display pulse placeholders. |
| `showProgressBar` | `boolean` | `true` | Render download loading indicators. |
| `showThumbnails` | `boolean` | `false` | Show thumbnails drawer panel on ready. |
| `fullscreen` | `boolean` | `false` | Control fullscreen presentation layout. |
| `showFullscreenButton` | `boolean` | `false` | Display floating fullscreen triggers. |

---

### Navigation
* Prev: [Guides: Theme Design](../../guides/theme-design.md)
* Next: [Global Configuration](../services/configuration.md)
