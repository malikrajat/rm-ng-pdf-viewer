# Best Practices

Ensure your application maintains a lightweight foot-print when rendering documents.

## Guidelines

### 1. Revoke Created Sources
If you pass array buffers or raw files to the `[src]` input, ensure you reuse the component instance instead of destroying it and mounting new components. Dynamic swapping inside the signal is automatically garbage collected.

### 2. Guard Container Dimensions
Never wrap the component inside containers that have height set to auto or collapse. The PDF reader cannot calibrate scroll views if wrapper boundaries are undefined.

### 3. Setup Global Options
For consistent styling, declare theming and options globally inside `provideRmNgPdfViewerConfig()` rather than repeating properties across components.

---

### Navigation
* Prev: [Advanced Usage](advanced-usage.md)
* Next: [Accessibility](accessibility.md)
