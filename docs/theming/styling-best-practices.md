# Styling Best Practices

Avoid page layout shifts when rendering the viewer component.

## Styling Guidelines

* **Do not use height auto**: The inner layout engine requires defined boundaries to structure page canvases. Always supply a static or relative height value.
* **Avoid overlay overrides**: Do not override inner iframe layouts using strict global CSS classes, as this can break target layout logic. Use design tokens for style customization.

---

### Navigation
* Prev: [Responsive Design](responsive-design.md)
* Next: [Examples: Basic Setup](../examples/basic.md)
