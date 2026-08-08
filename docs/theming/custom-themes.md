# Custom Themes Setup

Apply a custom color theme to match your brand style guidelines.

## Custom Emerald Theme Example

```ts
import { RmNgPdfThemeConfig } from 'rm-ng-pdf-viewer';

export const EmeraldThemeConfig: RmNgPdfThemeConfig = {
 preference: 'system',
 light: {
 accent: {
 primary: '#059669', // Emerald 600
 primaryHover: '#047857',
 primaryForeground: '#ffffff'
 },
 background: {
 app: '#f0fdf4', // Emerald 50
 surface: '#ffffff'
 }
 },
 dark: {
 accent: {
 primary: '#10b981', // Emerald 500
 primaryHover: '#059669',
 primaryForeground: '#ffffff'
 },
 background: {
 app: '#064e3b',
 surface: '#022c22'
 }
 }
};
```

```html
<rm-ng-pdf-viewer src="doc.pdf" [theme]="EmeraldThemeConfig" />
```

---

### Navigation
* Prev: [Design Tokens map](design-tokens.md)
* Next: [Responsive Design](responsive-design.md)
