# Basic Setup Example

A basic example demonstrating how to integrate the viewer.

* **Code Sample**: [examples/basic/minimal-setup/app.ts](../../examples/basic/minimal-setup/app.ts)

## Integration Code

```ts
import { Component } from '@angular/core';
import { RmNgPdfViewer } from 'rm-ng-pdf-viewer';

@Component({
 selector: 'app-root',
 standalone: true,
 imports: [RmNgPdfViewer],
 template: `<rm-ng-pdf-viewer src="sample.pdf" />`
})
export class AppComponent {}
```

---

### Navigation
* Prev: [Theming: Styling Best Practices](../theming/styling-best-practices.md)
* Next: [Advanced Configuration](advanced.md)
