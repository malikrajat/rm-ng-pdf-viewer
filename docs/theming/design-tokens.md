# Theme Design Tokens

A comprehensive reference of customization properties.

## Token Reference

```ts
export interface RmNgPdfThemeColors {
 accent?: {
 primary?: string; // Main brand color
 primaryHover?: string; // Hover state color
 primaryActive?: string; // Active state color
 primaryLight?: string; // Selection highlights
 primaryForeground?: string; // Text color on primary background
 };
 background?: {
 app?: string; // Canvas container backdrop
 surface?: string; // Toolbar background color
 surfaceAlt?: string; // Sidebar backdrop
 elevated?: string; // Popups and dropdowns
 overlay?: string; // Modal overlays
 input?: string; // Form input fields
 };
 foreground?: {
 primary?: string; // Main text color
 secondary?: string; // Secondary text labels
 muted?: string; // Disabled placeholders
 disabled?: string; // Disabled element color
 onAccent?: string; // Text on accent backgrounds
 };
 interactive?: {
 hover?: string; // Hover background color
 active?: string; // Active selection color
 selected?: string; // Selected element background
 focus?: string; // Focus outline ring
 };
}
```

---

### Navigation
* Prev: [CSS Variables Override](css-variables.md)
* Next: [Custom Theme Guides](custom-themes.md)
