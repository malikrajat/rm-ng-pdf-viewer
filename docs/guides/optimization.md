# Optimization

Optimize document rendering and initialization speeds.

## Optimization Strategies

### 1. Optimize PDF Files
Pre-linearize (Web Optimize) your PDF files on the server. This enables users to stream pages incrementally as they are downloaded, rather than waiting for the entire document buffer to load.

### 2. Custom Loader Skeletons
The default pulsing skeleton layout mimics a generic paper size. If you render a smaller landscape PDF layout (e.g., invoices or presentations), supply a customized loader to match layout outlines:

```html
<rm-ng-pdf-viewer src="invoice.pdf" [loadingTemplate]="invoiceLoader">
 <ng-template #invoiceLoader>
 <div class="custom-pulse-invoice-layout"></div>
 </ng-template>
</rm-ng-pdf-viewer>
```

---

### Navigation
* Prev: [Lazy Loading](lazy-loading.md)
* Next: [SSR Support](ssr.md)
