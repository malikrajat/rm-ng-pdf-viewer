import * as i0 from '@angular/core';
import { InjectionToken, inject, PLATFORM_ID, DOCUMENT, ElementRef, DestroyRef, PendingTasks, signal, input, output, viewChild, afterNextRender, effect, ChangeDetectionStrategy, Component } from '@angular/core';
import { isPlatformBrowser, NgTemplateOutlet } from '@angular/common';

const RM_NG_PDF_VIEWER_CONFIG = new InjectionToken('RM_NG_PDF_VIEWER_CONFIG');
const provideRmNgPdfViewerConfig = (config) => ({
    provide: RM_NG_PDF_VIEWER_CONFIG,
    useValue: config ?? {},
});

class RmNgPdfViewer {
    globalConfig = inject(RM_NG_PDF_VIEWER_CONFIG, { optional: true });
    platformId = inject(PLATFORM_ID);
    doc = inject(DOCUMENT);
    elementRef = inject(ElementRef);
    destroyRef = inject(DestroyRef);
    pendingTasks = inject(PendingTasks);
    observer = null;
    destroyed = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "destroyed" }] : /* istanbul ignore next */ []));
    currentObjectUrl = null;
    src = input(this.globalConfig?.src || '', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "src" }] : /* istanbul ignore next */ []));
    height = input(this.globalConfig?.height || '650px', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "height" }] : /* istanbul ignore next */ []));
    theme = input(this.globalConfig?.theme, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "theme" }] : /* istanbul ignore next */ []));
    syncTheme = input(this.globalConfig?.syncTheme ?? true, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "syncTheme" }] : /* istanbul ignore next */ []));
    themeStorageKey = input(this.globalConfig?.themeStorageKey, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "themeStorageKey" }] : /* istanbul ignore next */ []));
    config = input(/* @ts-ignore */
    ...(ngDevMode ? [undefined, { debugName: "config" }] : /* istanbul ignore next */ []));
    lazy = input(true, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "lazy" }] : /* istanbul ignore next */ [])); // Lazy load by default when in viewport
    loadingTemplate = input(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "loadingTemplate" }] : /* istanbul ignore next */ []));
    errorTemplate = input(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "errorTemplate" }] : /* istanbul ignore next */ []));
    showSkeleton = input(true, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "showSkeleton" }] : /* istanbul ignore next */ []));
    showProgressBar = input(true, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "showProgressBar" }] : /* istanbul ignore next */ []));
    showThumbnails = input(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "showThumbnails" }] : /* istanbul ignore next */ []));
    fullscreen = input(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "fullscreen" }] : /* istanbul ignore next */ []));
    showFullscreenButton = input(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "showFullscreenButton" }] : /* istanbul ignore next */ []));
    onReady = output();
    onError = output();
    onPageChange = output();
    onZoomChange = output();
    onSearchMatch = output();
    onProgress = output();
    pdfContainer = signal(undefined, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "pdfContainer" }] : /* istanbul ignore next */ []));
    containerElement = viewChild('container', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "containerElement" }] : /* istanbul ignore next */ []));
    isLoading = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "isLoading" }] : /* istanbul ignore next */ []));
    error = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    loadingProgress = signal(0, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "loadingProgress" }] : /* istanbul ignore next */ []));
    constructor() {
        this.destroyRef.onDestroy(() => {
            this.observer?.disconnect();
            this.observer = null;
            this.destroyed.set(true);
            this.revokeCurrentUrl();
        });
        afterNextRender(() => {
            if (!isPlatformBrowser(this.platformId)) {
                return;
            }
            if (this.lazy()) {
                this.setupIntersectionObserver();
            }
            else {
                this.initViewer();
            }
        });
        effect(() => {
            const newSrc = this.src();
            const container = this.pdfContainer();
            if (container && newSrc) {
                this.loadNewSrc(newSrc);
            }
        });
        effect(() => {
            const thumbnails = this.showThumbnails();
            const container = this.pdfContainer();
            if (container) {
                this.updateThumbnailsVisibility(container, thumbnails);
            }
        });
        effect(() => {
            const isFullscreen = this.fullscreen();
            const container = this.pdfContainer();
            if (container) {
                this.updateFullscreenState(container, isFullscreen);
            }
        });
    }
    async loadNewSrc(src) {
        const container = this.pdfContainer();
        if (!container)
            return;
        this.isLoading.set(true);
        this.loadingProgress.set(0);
        this.error.set(null);
        const registry = await container.registry;
        const docManager = registry.getPlugin('document-manager');
        if (docManager && docManager.provides) {
            const capability = docManager.provides();
            let task;
            if (typeof src === 'string') {
                task = capability.openDocumentUrl({ url: src });
            }
            else if (src instanceof Blob) {
                const buffer = await src.arrayBuffer();
                task = capability.openDocumentBuffer({ buffer, name: 'document.pdf' });
            }
            else if (src instanceof Uint8Array) {
                task = capability.openDocumentBuffer({ buffer: src.buffer, name: 'document.pdf' });
            }
            if (task) {
                task.onProgress((p) => {
                    const percent = Math.round((p.loaded / p.total) * 100);
                    this.loadingProgress.set(percent);
                    this.onProgress.emit(percent);
                });
                try {
                    await task.toPromise();
                }
                catch (err) {
                    // Error handled by onDocumentError
                }
            }
        }
        else {
            // Fallback for simple src update
            container.config = {
                ...container.config,
                src: this.resolveSrc(src),
            };
        }
    }
    resolveSrc(src) {
        this.revokeCurrentUrl();
        if (typeof src === 'string') {
            return src;
        }
        if (src instanceof Blob) {
            this.currentObjectUrl = URL.createObjectURL(src);
            return this.currentObjectUrl;
        }
        if (src instanceof Uint8Array) {
            const blob = new Blob([src.buffer], { type: 'application/pdf' });
            this.currentObjectUrl = URL.createObjectURL(blob);
            return this.currentObjectUrl;
        }
        return '';
    }
    revokeCurrentUrl() {
        if (this.currentObjectUrl) {
            URL.revokeObjectURL(this.currentObjectUrl);
            this.currentObjectUrl = null;
        }
    }
    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                this.initViewer();
                observer.disconnect();
            }
        }, { threshold: 0.1 });
        observer.observe(this.elementRef.nativeElement);
        this.destroyRef.onDestroy(() => observer.disconnect());
    }
    async initViewer() {
        const container = this.containerElement()?.nativeElement;
        if (!container) {
            console.error('[RM_NG_PDF_VIEWER] Container element not found for PDF viewer.');
            return;
        }
        const stopPendingTask = this.pendingTasks.add();
        this.isLoading.set(true);
        this.loadingProgress.set(0);
        this.error.set(null);
        try {
            const { default: EmbedPDF } = await import('@embedpdf/snippet');
            if (this.destroyed()) {
                return;
            }
            const theme = this.resolveInitialTheme();
            const baseConfig = this.config() || this.globalConfig || {};
            const viewer = EmbedPDF.init({
                ...baseConfig,
                type: 'container',
                target: container,
                src: this.resolveSrc(this.src()),
                theme: theme,
            });
            if (!viewer)
                return;
            this.pdfContainer.set(viewer);
            this.onReady.emit(viewer);
            this.setupPluginEvents(viewer);
            if (this.syncTheme()) {
                this.watchThemeChanges();
            }
        }
        catch (importError) {
            const error = new Error(`[RM_NG_PDF_VIEWER] Failed to initialize PDF viewer: ${importError instanceof Error ? importError.message : String(importError)}`, { cause: importError instanceof Error ? importError : undefined });
            console.error(error);
            this.error.set(error);
            this.onError.emit(error);
        }
        finally {
            this.isLoading.set(false);
            stopPendingTask();
        }
    }
    async setupPluginEvents(viewer) {
        const registry = await viewer.registry;
        // Helper to get capability
        const getCapability = (id) => {
            const plugin = registry.getPlugin(id);
            return plugin?.provides ? plugin.provides() : null;
        };
        // Page Change
        const scroll = getCapability('scroll');
        if (scroll?.onPageChange) {
            scroll.onPageChange((event) => {
                this.onPageChange.emit(event.pageNumber);
            });
        }
        // Zoom Change
        const zoom = getCapability('zoom');
        if (zoom?.onZoomChange) {
            zoom.onZoomChange((event) => {
                this.onZoomChange.emit(event.newZoom);
            });
        }
        // Search Match
        const search = getCapability('search');
        if (search?.onSearchResult) {
            search.onSearchResult((event) => {
                this.onSearchMatch.emit(event);
            });
        }
        // Handle internal loading/error states if possible
        const docManager = getCapability('document-manager');
        if (docManager) {
            docManager.onDocumentOpened(() => {
                this.isLoading.set(false);
                this.loadingProgress.set(100);
                this.error.set(null);
                this.updateThumbnailsVisibility(viewer, this.showThumbnails());
            });
            docManager.onDocumentError((event) => {
                this.isLoading.set(false);
                this.error.set(new Error(event.message));
            });
        }
    }
    async updateThumbnailsVisibility(viewer, visible) {
        const registry = await viewer.registry;
        const ui = registry.getPlugin('ui');
        if (ui?.provides) {
            const capability = ui.provides();
            const docId = viewer.config?.documentManager?.initialDocuments?.[0]?.documentId || 'default';
            const scope = capability.forDocument(docId);
            if (visible) {
                scope.setActiveSidebar('left', 'primary', 'thumbnails');
            }
            else {
                scope.closeSidebarSlot('left', 'primary');
            }
        }
    }
    /**
     * Toggles the thumbnails sidebar.
     */
    async toggleThumbnails(visible) {
        const viewer = this.pdfContainer();
        if (!viewer)
            return;
        const nextState = visible ?? !this.showThumbnails();
        // We can't update the input signal directly, but we can call the internal update
        await this.updateThumbnailsVisibility(viewer, nextState);
    }
    /**
     * Toggles fullscreen mode.
     */
    async toggleFullscreen() {
        const viewer = this.pdfContainer();
        if (!viewer)
            return;
        const registry = await viewer.registry;
        const fullscreen = registry.getPlugin('fullscreen');
        if (fullscreen?.provides) {
            fullscreen.provides().toggleFullscreen();
        }
    }
    async updateFullscreenState(viewer, isFullscreen) {
        const registry = await viewer.registry;
        const fullscreen = registry.getPlugin('fullscreen');
        if (fullscreen?.provides) {
            const capability = fullscreen.provides();
            if (isFullscreen !== capability.isFullscreen()) {
                if (isFullscreen) {
                    capability.enableFullscreen();
                }
                else {
                    capability.exitFullscreen();
                }
            }
        }
    }
    resolveInitialTheme() {
        // 1. Prioritize component instance theme input
        const instanceTheme = this.theme();
        if (instanceTheme) {
            return instanceTheme;
        }
        // 2. Fallback to global config theme
        if (this.globalConfig?.theme) {
            return this.globalConfig.theme;
        }
        // 3. Try to resolve from localStorage if syncTheme is enabled (Browser only)
        if (this.syncTheme() && isPlatformBrowser(this.platformId)) {
            const userStoredThemeKey = this.themeStorageKey();
            const storedThemeName = userStoredThemeKey ? localStorage.getItem(userStoredThemeKey) : null;
            if (storedThemeName) {
                const isDark = storedThemeName.toLocaleLowerCase().includes('dark');
                return {
                    preference: isDark ? 'dark' : 'light',
                };
            }
        }
        return { preference: 'system' };
    }
    watchThemeChanges() {
        const html = this.doc.documentElement;
        this.observer = new MutationObserver(() => {
            const scheme = html.style.colorScheme;
            if ((scheme === 'light' || scheme === 'dark')) {
                this.updateViewerTheme(scheme);
            }
        });
        this.observer.observe(html, { attributes: true, attributeFilter: ['style'] });
        const win = this.doc.defaultView;
        const mq = win?.matchMedia('(prefers-color-scheme: dark)');
        const listener = (e) => {
            this.updateViewerTheme(e.matches ? 'dark' : 'light');
        };
        mq?.addEventListener('change', listener);
        this.destroyRef.onDestroy(() => mq?.removeEventListener('change', listener));
    }
    updateViewerTheme(preference) {
        const container = this.pdfContainer();
        if (container) {
            container.setTheme({
                preference,
                light: this.theme()?.light,
                dark: this.theme()?.dark,
            });
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "22.0.0", ngImport: i0, type: RmNgPdfViewer, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "22.0.0", type: RmNgPdfViewer, isStandalone: true, selector: "rm-ng-pdf-viewer", inputs: { src: { classPropertyName: "src", publicName: "src", isSignal: true, isRequired: false, transformFunction: null }, height: { classPropertyName: "height", publicName: "height", isSignal: true, isRequired: false, transformFunction: null }, theme: { classPropertyName: "theme", publicName: "theme", isSignal: true, isRequired: false, transformFunction: null }, syncTheme: { classPropertyName: "syncTheme", publicName: "syncTheme", isSignal: true, isRequired: false, transformFunction: null }, themeStorageKey: { classPropertyName: "themeStorageKey", publicName: "themeStorageKey", isSignal: true, isRequired: false, transformFunction: null }, config: { classPropertyName: "config", publicName: "config", isSignal: true, isRequired: false, transformFunction: null }, lazy: { classPropertyName: "lazy", publicName: "lazy", isSignal: true, isRequired: false, transformFunction: null }, loadingTemplate: { classPropertyName: "loadingTemplate", publicName: "loadingTemplate", isSignal: true, isRequired: false, transformFunction: null }, errorTemplate: { classPropertyName: "errorTemplate", publicName: "errorTemplate", isSignal: true, isRequired: false, transformFunction: null }, showSkeleton: { classPropertyName: "showSkeleton", publicName: "showSkeleton", isSignal: true, isRequired: false, transformFunction: null }, showProgressBar: { classPropertyName: "showProgressBar", publicName: "showProgressBar", isSignal: true, isRequired: false, transformFunction: null }, showThumbnails: { classPropertyName: "showThumbnails", publicName: "showThumbnails", isSignal: true, isRequired: false, transformFunction: null }, fullscreen: { classPropertyName: "fullscreen", publicName: "fullscreen", isSignal: true, isRequired: false, transformFunction: null }, showFullscreenButton: { classPropertyName: "showFullscreenButton", publicName: "showFullscreenButton", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { onReady: "onReady", onError: "onError", onPageChange: "onPageChange", onZoomChange: "onZoomChange", onSearchMatch: "onSearchMatch", onProgress: "onProgress" }, viewQueries: [{ propertyName: "containerElement", first: true, predicate: ["container"], descendants: true, isSignal: true }], ngImport: i0, template: `
    <div class="rm-pdf-viewer-wrapper" [style.height]="height()">
      @if (isLoading()) {
        <div class="rm-pdf-viewer-loading-container">
          @if (loadingTemplate()) {
            <ng-container [ngTemplateOutlet]="loadingTemplate()!"></ng-container>
          } @else if (showSkeleton()) {
            <div class="rm-pdf-viewer-skeleton">
              <div class="rm-skeleton-toolbar">
                <div class="rm-skeleton-item button"></div>
                <div class="rm-skeleton-item button"></div>
                <div class="rm-skeleton-spacer"></div>
                <div class="rm-skeleton-item search"></div>
                <div class="rm-skeleton-item button"></div>
              </div>
              <div class="rm-skeleton-content">
                <div class="rm-skeleton-sidebar" [style.display]="showThumbnails() ? 'block' : 'none'">
                  <div class="rm-skeleton-item thumb"></div>
                  <div class="rm-skeleton-item thumb"></div>
                  <div class="rm-skeleton-item thumb"></div>
                </div>
                <div class="rm-skeleton-page-area">
                  <div class="rm-skeleton-page"></div>
                </div>
              </div>
            </div>
          } @else {
            <div class="rm-pdf-viewer-default-loader">Loading PDF...</div>
          }
          
          @if (showProgressBar() && loadingProgress() > 0 && loadingProgress() < 100) {
            <div class="rm-pdf-viewer-progress-bar" [style.width.%]="loadingProgress()"></div>
          }
        </div>
      }

      @if (error()) {
        <div class="rm-pdf-viewer-error">
          @if (errorTemplate()) {
            <ng-container [ngTemplateOutlet]="errorTemplate()!" [ngTemplateOutletContext]="{ $implicit: error() }"></ng-container>
          } @else {
            <div class="rm-pdf-viewer-default-error">
              {{ error()?.message || 'An error occurred while loading the PDF.' }}
            </div>
          }
        </div>
      }

      <div #container [style.display]="isLoading() || error() ? 'none' : 'block'" [style.height]="'100%'"></div>

      @if (showFullscreenButton() && !isLoading() && !error()) {
        <button class="rm-fullscreen-button" (click)="toggleFullscreen()" title="Toggle Fullscreen">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      }
    </div>
  `, isInline: true, styles: [":host{display:block}.rm-pdf-viewer-wrapper{position:relative;width:100%;overflow:hidden;background-color:#f5f5f5}.rm-pdf-viewer-loading-container,.rm-pdf-viewer-error{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;z-index:1}.rm-pdf-viewer-progress-bar{position:absolute;top:0;left:0;height:3px;background-color:#2196f3;transition:width .2s ease-in-out;z-index:10}.rm-pdf-viewer-skeleton{width:100%;height:100%;display:flex;flex-direction:column;background:#fff}.rm-skeleton-toolbar{height:48px;padding:0 16px;display:flex;align-items:center;gap:12px;border-bottom:1px solid #eee;background:#f8f9fa}.rm-skeleton-content{flex:1;display:flex;overflow:hidden}.rm-skeleton-sidebar{width:200px;border-right:1px solid #eee;padding:16px;background:#fcfcfc}.rm-skeleton-page-area{flex:1;padding:24px;display:flex;justify-content:center;background:#e9ecef;overflow:hidden}.rm-skeleton-page{width:80%;max-width:800px;height:100%;background:#fff;box-shadow:0 2px 8px #0000001a;animation:rm-skeleton-pulse 1.5s infinite ease-in-out}.rm-skeleton-item{background:#e0e0e0;border-radius:4px;animation:rm-skeleton-pulse 1.5s infinite ease-in-out}.rm-skeleton-item.button{width:32px;height:32px}.rm-skeleton-item.search{width:150px;height:32px}.rm-skeleton-item.thumb{width:100%;height:150px;margin-bottom:16px}.rm-skeleton-spacer{flex:1}.rm-fullscreen-button{position:absolute;bottom:16px;right:16px;width:40px;height:40px;border-radius:50%;background:#fff;border:1px solid #ddd;box-shadow:0 2px 8px #0000001a;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#555;transition:all .2s;z-index:5}.rm-fullscreen-button:hover{background:#f8f9fa;color:#2196f3;transform:scale(1.05)}@keyframes rm-skeleton-pulse{0%{opacity:1}50%{opacity:.4}to{opacity:1}}.rm-pdf-viewer-default-loader{flex:1;display:flex;align-items:center;justify-content:center;font-family:sans-serif;color:#666}.rm-pdf-viewer-default-error{flex:1;display:flex;align-items:center;justify-content:center;font-family:sans-serif;color:#d32f2f;padding:1rem;text-align:center}\n"], dependencies: [{ kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "22.0.0", ngImport: i0, type: RmNgPdfViewer, decorators: [{
            type: Component,
            args: [{ selector: 'rm-ng-pdf-viewer', imports: [NgTemplateOutlet], template: `
    <div class="rm-pdf-viewer-wrapper" [style.height]="height()">
      @if (isLoading()) {
        <div class="rm-pdf-viewer-loading-container">
          @if (loadingTemplate()) {
            <ng-container [ngTemplateOutlet]="loadingTemplate()!"></ng-container>
          } @else if (showSkeleton()) {
            <div class="rm-pdf-viewer-skeleton">
              <div class="rm-skeleton-toolbar">
                <div class="rm-skeleton-item button"></div>
                <div class="rm-skeleton-item button"></div>
                <div class="rm-skeleton-spacer"></div>
                <div class="rm-skeleton-item search"></div>
                <div class="rm-skeleton-item button"></div>
              </div>
              <div class="rm-skeleton-content">
                <div class="rm-skeleton-sidebar" [style.display]="showThumbnails() ? 'block' : 'none'">
                  <div class="rm-skeleton-item thumb"></div>
                  <div class="rm-skeleton-item thumb"></div>
                  <div class="rm-skeleton-item thumb"></div>
                </div>
                <div class="rm-skeleton-page-area">
                  <div class="rm-skeleton-page"></div>
                </div>
              </div>
            </div>
          } @else {
            <div class="rm-pdf-viewer-default-loader">Loading PDF...</div>
          }
          
          @if (showProgressBar() && loadingProgress() > 0 && loadingProgress() < 100) {
            <div class="rm-pdf-viewer-progress-bar" [style.width.%]="loadingProgress()"></div>
          }
        </div>
      }

      @if (error()) {
        <div class="rm-pdf-viewer-error">
          @if (errorTemplate()) {
            <ng-container [ngTemplateOutlet]="errorTemplate()!" [ngTemplateOutletContext]="{ $implicit: error() }"></ng-container>
          } @else {
            <div class="rm-pdf-viewer-default-error">
              {{ error()?.message || 'An error occurred while loading the PDF.' }}
            </div>
          }
        </div>
      }

      <div #container [style.display]="isLoading() || error() ? 'none' : 'block'" [style.height]="'100%'"></div>

      @if (showFullscreenButton() && !isLoading() && !error()) {
        <button class="rm-fullscreen-button" (click)="toggleFullscreen()" title="Toggle Fullscreen">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      }
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: [":host{display:block}.rm-pdf-viewer-wrapper{position:relative;width:100%;overflow:hidden;background-color:#f5f5f5}.rm-pdf-viewer-loading-container,.rm-pdf-viewer-error{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;z-index:1}.rm-pdf-viewer-progress-bar{position:absolute;top:0;left:0;height:3px;background-color:#2196f3;transition:width .2s ease-in-out;z-index:10}.rm-pdf-viewer-skeleton{width:100%;height:100%;display:flex;flex-direction:column;background:#fff}.rm-skeleton-toolbar{height:48px;padding:0 16px;display:flex;align-items:center;gap:12px;border-bottom:1px solid #eee;background:#f8f9fa}.rm-skeleton-content{flex:1;display:flex;overflow:hidden}.rm-skeleton-sidebar{width:200px;border-right:1px solid #eee;padding:16px;background:#fcfcfc}.rm-skeleton-page-area{flex:1;padding:24px;display:flex;justify-content:center;background:#e9ecef;overflow:hidden}.rm-skeleton-page{width:80%;max-width:800px;height:100%;background:#fff;box-shadow:0 2px 8px #0000001a;animation:rm-skeleton-pulse 1.5s infinite ease-in-out}.rm-skeleton-item{background:#e0e0e0;border-radius:4px;animation:rm-skeleton-pulse 1.5s infinite ease-in-out}.rm-skeleton-item.button{width:32px;height:32px}.rm-skeleton-item.search{width:150px;height:32px}.rm-skeleton-item.thumb{width:100%;height:150px;margin-bottom:16px}.rm-skeleton-spacer{flex:1}.rm-fullscreen-button{position:absolute;bottom:16px;right:16px;width:40px;height:40px;border-radius:50%;background:#fff;border:1px solid #ddd;box-shadow:0 2px 8px #0000001a;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#555;transition:all .2s;z-index:5}.rm-fullscreen-button:hover{background:#f8f9fa;color:#2196f3;transform:scale(1.05)}@keyframes rm-skeleton-pulse{0%{opacity:1}50%{opacity:.4}to{opacity:1}}.rm-pdf-viewer-default-loader{flex:1;display:flex;align-items:center;justify-content:center;font-family:sans-serif;color:#666}.rm-pdf-viewer-default-error{flex:1;display:flex;align-items:center;justify-content:center;font-family:sans-serif;color:#d32f2f;padding:1rem;text-align:center}\n"] }]
        }], ctorParameters: () => [], propDecorators: { src: [{ type: i0.Input, args: [{ isSignal: true, alias: "src", required: false }] }], height: [{ type: i0.Input, args: [{ isSignal: true, alias: "height", required: false }] }], theme: [{ type: i0.Input, args: [{ isSignal: true, alias: "theme", required: false }] }], syncTheme: [{ type: i0.Input, args: [{ isSignal: true, alias: "syncTheme", required: false }] }], themeStorageKey: [{ type: i0.Input, args: [{ isSignal: true, alias: "themeStorageKey", required: false }] }], config: [{ type: i0.Input, args: [{ isSignal: true, alias: "config", required: false }] }], lazy: [{ type: i0.Input, args: [{ isSignal: true, alias: "lazy", required: false }] }], loadingTemplate: [{ type: i0.Input, args: [{ isSignal: true, alias: "loadingTemplate", required: false }] }], errorTemplate: [{ type: i0.Input, args: [{ isSignal: true, alias: "errorTemplate", required: false }] }], showSkeleton: [{ type: i0.Input, args: [{ isSignal: true, alias: "showSkeleton", required: false }] }], showProgressBar: [{ type: i0.Input, args: [{ isSignal: true, alias: "showProgressBar", required: false }] }], showThumbnails: [{ type: i0.Input, args: [{ isSignal: true, alias: "showThumbnails", required: false }] }], fullscreen: [{ type: i0.Input, args: [{ isSignal: true, alias: "fullscreen", required: false }] }], showFullscreenButton: [{ type: i0.Input, args: [{ isSignal: true, alias: "showFullscreenButton", required: false }] }], onReady: [{ type: i0.Output, args: ["onReady"] }], onError: [{ type: i0.Output, args: ["onError"] }], onPageChange: [{ type: i0.Output, args: ["onPageChange"] }], onZoomChange: [{ type: i0.Output, args: ["onZoomChange"] }], onSearchMatch: [{ type: i0.Output, args: ["onSearchMatch"] }], onProgress: [{ type: i0.Output, args: ["onProgress"] }], containerElement: [{ type: i0.ViewChild, args: ['container', { isSignal: true }] }] } });

/*
 * Public API Surface of rm-ng-pdf-viewer
 */

/**
 * Generated bundle index. Do not edit.
 */

export { RM_NG_PDF_VIEWER_CONFIG, RmNgPdfViewer, provideRmNgPdfViewerConfig };
//# sourceMappingURL=codewithrajat-rm-ng-pdf-viewer.mjs.map
