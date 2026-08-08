# Viewer Events

The component outputs notify the application of viewer events.

## Output Definitions

| Event | Type | Description |
|---|---|---|
| `onReady` | `EmbedPdfContainer` | Emitted once fully loaded. |
| `onError` | `Error` | Emitted if script fetch or resource load fails. |
| `onPageChange` | `number` | Emitted when scrolling past page boundaries. |
| `onZoomChange` | `number` | Emitted when adjusting magnification. |
| `onSearchMatch` | `any` | Emitted on document search hits. |
| `onProgress` | `number` | Emitted with download progress percentages. |

---

### Navigation
* Prev: [Theme Config Interface](../interfaces/rm-ng-pdf-theme-config.md)
* Next: [Theming: Overview](../../theming/overview.md)
