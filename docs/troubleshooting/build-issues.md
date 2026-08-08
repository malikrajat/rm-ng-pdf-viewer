# Build Issues

Resolve issues related to build compilation and asset bundles.

## Typical Issues

### Vite / Webpack Resolving Error
* **Problem**: Bundlers can fail to resolve the dynamic import paths of `@embedpdf/snippet`.
* **Fix**: Ensure your project includes `@embedpdf/snippet` as a direct dependency in `package.json`, rather than a devDependency.

---

### Navigation
* Prev: [Common Errors](common-errors.md)
* Next: [SSR Issues](ssr-issues.md)
