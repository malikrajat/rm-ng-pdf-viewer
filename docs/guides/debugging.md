# Debugging

Follow these steps to debug loading errors and initialization issues.

## Diagnostic Steps

### 1. Monitor (onError) Output
Ensure you subscribe to the `(onError)` event listener to catch dynamic import faults:
```html
<rm-ng-pdf-viewer src="file.pdf" (onError)="logError($event)" />
```

### 2. Check Console Output
If the iframe fails to render, check the console for CORS exceptions, network timeout flags, or resource resolution failures.

### 3. Check Angular Signal Updates
Ensure the source parameter passed to the component contains a valid URL string or a resolved Blob structure. Empty strings will reset the viewer state.

---

### Navigation
* Prev: [Security](security.md)
* Next: [Theme Design Selection](theme-design.md)
