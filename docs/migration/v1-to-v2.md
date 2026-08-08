# Migration Guide: v1 to v2

Upgrading to version 2 includes migrations to signal-based APIs.

## Key Changes

1. **Decorator to Signal Inputs**: Custom inputs have migrated to Angular signals:
 * v1: `@Input() src: string;`
 * v2: `readonly src = input<string>();`
2. **Dynamic Imports**: `@embedpdf/snippet` is now lazily imported at runtime, reducing bundle size.

---

### Navigation
* Prev: [Examples: Edge Cases](../examples/edge-cases.md)
* Next: [Breaking Changes](breaking-changes.md)
