# Basic Usage

This guide covers basic integration features and properties.

## Basic Layout

By default, the component requires a height parameter because the PDF container needs an absolute limit to size its toolbars and pagination controls.

```html
<rm-ng-pdf-viewer 
 src="assets/report.pdf" 
 height="500px" 
/>
```

## Configuring Basic Options

You can toggle indicators like the progress bar or loading skeletons:

```html
<rm-ng-pdf-viewer 
 src="assets/report.pdf" 
 [showProgressBar]="false"
 [showSkeleton]="false"
/>
```

---

### Navigation
* Prev: [Concepts: Performance Model](../concepts/performance-model.md)
* Next: [Advanced Usage](advanced-usage.md)
