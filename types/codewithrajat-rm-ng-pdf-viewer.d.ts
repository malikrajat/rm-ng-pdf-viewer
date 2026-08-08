import * as _angular_core from '@angular/core';
import { InjectionToken, TemplateRef, ElementRef } from '@angular/core';
import { EmbedPdfContainer } from '@embedpdf/snippet';

type RmNgPdfThemePreference = 'light' | 'dark' | 'system';
interface RmNgPdfThemeColors {
    accent?: Partial<{
        primary: string;
        primaryHover: string;
        primaryActive: string;
        primaryLight: string;
        primaryForeground: string;
    }>;
    background?: Partial<{
        app: string;
        surface: string;
        surfaceAlt: string;
        elevated: string;
        overlay: string;
        input: string;
    }>;
    foreground?: Partial<{
        primary: string;
        secondary: string;
        muted: string;
        disabled: string;
        onAccent: string;
    }>;
    interactive?: Partial<{
        hover: string;
        active: string;
        selected: string;
        focus: string;
    }>;
    border?: Partial<{
        default: string;
        subtle: string;
        strong: string;
    }>;
    state?: Partial<{
        error: string;
        errorLight: string;
        warning: string;
        warningLight: string;
        success: string;
        successLight: string;
        info: string;
        infoLight: string;
    }>;
}
type RmNgPdfThemeConfig = {
    preference?: RmNgPdfThemePreference;
    light?: RmNgPdfThemeColors;
    dark?: RmNgPdfThemeColors;
};
interface RmNgPdfViewerConfig {
    src?: string;
    theme?: RmNgPdfThemeConfig;
    disabledCategories?: string[];
    /**
     * Custom URL for the pdfium.wasm engine used by @embedpdf/snippet.
     * Useful for self-hosting in offline/air-gapped environments. When omitted,
     * the viewer uses the pdfium.wasm embedded in the library bundle (a data:
     * URL), so no extra assets or CDN access are required.
     */
    wasmUrl?: string;
    [key: string]: unknown;
}
interface RmNgPdfViewerGlobalConfig extends RmNgPdfViewerConfig {
    height?: string;
    syncTheme?: boolean;
    themeStorageKey?: string;
}
declare const RM_NG_PDF_VIEWER_CONFIG: InjectionToken<RmNgPdfViewerGlobalConfig>;
declare const provideRmNgPdfViewerConfig: (config?: RmNgPdfViewerGlobalConfig) => {
    provide: InjectionToken<RmNgPdfViewerGlobalConfig>;
    useValue: RmNgPdfViewerGlobalConfig;
};

declare class RmNgPdfViewer {
    private readonly globalConfig;
    private readonly platformId;
    private readonly doc;
    private readonly elementRef;
    private readonly destroyRef;
    private readonly pendingTasks;
    private observer;
    private readonly destroyed;
    private currentObjectUrl;
    readonly src: _angular_core.InputSignal<string | Uint8Array<ArrayBufferLike> | Blob>;
    readonly height: _angular_core.InputSignal<string>;
    readonly theme: _angular_core.InputSignal<RmNgPdfThemeConfig | undefined>;
    readonly syncTheme: _angular_core.InputSignal<boolean>;
    readonly themeStorageKey: _angular_core.InputSignal<string | undefined>;
    readonly config: _angular_core.InputSignal<RmNgPdfViewerConfig | undefined>;
    readonly lazy: _angular_core.InputSignal<boolean>;
    readonly loadingTemplate: _angular_core.InputSignal<TemplateRef<any> | null>;
    readonly errorTemplate: _angular_core.InputSignal<TemplateRef<any> | null>;
    readonly showSkeleton: _angular_core.InputSignal<boolean>;
    readonly showProgressBar: _angular_core.InputSignal<boolean>;
    readonly showThumbnails: _angular_core.InputSignal<boolean>;
    readonly fullscreen: _angular_core.InputSignal<boolean>;
    readonly showFullscreenButton: _angular_core.InputSignal<boolean>;
    readonly onReady: _angular_core.OutputEmitterRef<EmbedPdfContainer>;
    readonly onError: _angular_core.OutputEmitterRef<Error>;
    readonly onPageChange: _angular_core.OutputEmitterRef<number>;
    readonly onZoomChange: _angular_core.OutputEmitterRef<number>;
    readonly onSearchMatch: _angular_core.OutputEmitterRef<any>;
    readonly onProgress: _angular_core.OutputEmitterRef<number>;
    readonly pdfContainer: _angular_core.WritableSignal<EmbedPdfContainer | undefined>;
    readonly containerElement: _angular_core.Signal<ElementRef<HTMLDivElement> | undefined>;
    readonly isLoading: _angular_core.WritableSignal<boolean>;
    readonly error: _angular_core.WritableSignal<Error | null>;
    readonly loadingProgress: _angular_core.WritableSignal<number>;
    constructor();
    private loadNewSrc;
    private resolveSrc;
    private toAbsoluteUrl;
    private revokeCurrentUrl;
    private setupIntersectionObserver;
    private initViewer;
    private setupPluginEvents;
    private updateThumbnailsVisibility;
    /**
     * Toggles the thumbnails sidebar.
     */
    toggleThumbnails(visible?: boolean): Promise<void>;
    /**
     * Toggles fullscreen mode.
     */
    toggleFullscreen(): Promise<void>;
    private updateFullscreenState;
    private resolveInitialTheme;
    private watchThemeChanges;
    private updateViewerTheme;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<RmNgPdfViewer, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<RmNgPdfViewer, "rm-ng-pdf-viewer", never, { "src": { "alias": "src"; "required": false; "isSignal": true; }; "height": { "alias": "height"; "required": false; "isSignal": true; }; "theme": { "alias": "theme"; "required": false; "isSignal": true; }; "syncTheme": { "alias": "syncTheme"; "required": false; "isSignal": true; }; "themeStorageKey": { "alias": "themeStorageKey"; "required": false; "isSignal": true; }; "config": { "alias": "config"; "required": false; "isSignal": true; }; "lazy": { "alias": "lazy"; "required": false; "isSignal": true; }; "loadingTemplate": { "alias": "loadingTemplate"; "required": false; "isSignal": true; }; "errorTemplate": { "alias": "errorTemplate"; "required": false; "isSignal": true; }; "showSkeleton": { "alias": "showSkeleton"; "required": false; "isSignal": true; }; "showProgressBar": { "alias": "showProgressBar"; "required": false; "isSignal": true; }; "showThumbnails": { "alias": "showThumbnails"; "required": false; "isSignal": true; }; "fullscreen": { "alias": "fullscreen"; "required": false; "isSignal": true; }; "showFullscreenButton": { "alias": "showFullscreenButton"; "required": false; "isSignal": true; }; }, { "onReady": "onReady"; "onError": "onError"; "onPageChange": "onPageChange"; "onZoomChange": "onZoomChange"; "onSearchMatch": "onSearchMatch"; "onProgress": "onProgress"; }, never, never, true, never>;
}

export { RM_NG_PDF_VIEWER_CONFIG, RmNgPdfViewer, provideRmNgPdfViewerConfig };
export type { RmNgPdfThemeColors, RmNgPdfThemeConfig, RmNgPdfThemePreference, RmNgPdfViewerConfig, RmNgPdfViewerGlobalConfig };
