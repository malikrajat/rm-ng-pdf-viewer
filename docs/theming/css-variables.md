# CSS Variables Override

Apply custom styles to the viewer component wrapper.

## Override Patterns

You can override styling using CSS variables on the component wrapper class:

```css
/* app.component.css */
.custom-viewer {
 --rm-pdf-viewer-bg: #1e1e1e;
 --rm-pdf-viewer-border: 1px solid #333;
}
```

```html
<rm-ng-pdf-viewer class="custom-viewer" src="doc.pdf" />
```

---

### Navigation
* Prev: [Dark Mode Synchronization](dark-mode.md)
* Next: [Design Tokens map](design-tokens.md)
