# State Management

This library uses Angular **signals** to coordinate states reactively.

## Signal Hooks inside RmNgPdfViewer

Inside [rm-ng-pdf-viewer.ts](../../projects/rm-ng-pdf-viewer/src/lib/rm-ng-pdf-viewer.ts), multiple signals control state updates:

```ts
readonly src = input<string | Uint8Array | Blob>('');
readonly height = input<string>('650px');
readonly theme = input<RmNgPdfThemeConfig | undefined>();
readonly syncTheme = input<boolean>(true);

// Internals
readonly pdfContainer = signal<EmbedPdfContainer | undefined>(undefined);
readonly isLoading = signal<boolean>(false);
readonly error = signal<Error | null>(null);
readonly loadingProgress = signal<number>(0);
```

## Reactivity Effects

The component sets up dynamic Angular `effect` tracking scopes inside the constructor. When inputs change:

* Swapping `src()` triggers `loadNewSrc(newSrc)` immediately.
* Changing `showThumbnails()` executes a sidebarSlot toggle action on the active instance.
* Mutating `fullscreen()` tells the full-screen capability of the running widget to toggle.

---

### Navigation
* Prev: [Rendering](rendering.md)
* Next: [Performance Model](performance-model.md)
