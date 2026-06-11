/** ======================================================================
 *  Toast API – Type Declarations
 *  Docs: docs/02-apis/ToastApi.md
 *  ====================================================================== */

/** Optional settings when showing a toast. */
export interface ShowToastOptions {
    /** Milliseconds the toast stays visible (default ~3500 ms). */
    duration?: number;
  }
  
  /** Public Toast API surface. */
  export interface ToastApi {
    /**
     * Display a toast notification.
     * @param content  Text content shown in the toast.
     * @param options  Optional duration override.
     */
    show(content: string, options?: ShowToastOptions): void;
  }
  
  /** Singleton instance injected by the POS host runtime. */
  export const toast: ToastApi;