# Common Errors

Diagnostic guides for common issues.

## Common Errors

### "Window is not defined"
* **Cause**: Running browser-specific code during server-side execution.
* **Solution**: Wrap browser APIs in platform checks:
 ```ts
 if (isPlatformBrowser(platformId)) { ... }
 ```

---

### Navigation
* Prev: [Migration: Deprecated APIs](../migration/deprecated-apis.md)
* Next: [Build Issues](build-issues.md)
