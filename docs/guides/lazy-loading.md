# Lazy Loading

Lazy viewport intersection is enabled by default to save initial client resources.

## Configuration

Set `[lazy]` to control lazy loading behavior:

```html
<!-- Lazy load once scrolled into view (default) -->
<rm-ng-pdf-viewer src="doc.pdf" [lazy]="true" />

<!-- Load immediately on component initialization -->
<rm-ng-pdf-viewer src="doc.pdf" [lazy]="false" />
```

> [!TIP]
> Use lazy loading when building tabbed widgets or long scrolling dashboard grids containing multiple hidden documents.

---

### Navigation
* Prev: [Accessibility](accessibility.md)
* Next: [Optimization](optimization.md)
