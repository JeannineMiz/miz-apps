/** ======================================================================
 *  Navigation API – Type Declarations
 *  Docs: docs/02-apis/NavigationApi.md
 *  ====================================================================== */

/** Public Navigation API surface available in modal-type targets. */
export interface NavigationApi {
    /** Push or focus a screen in the current Navigator tree. */
    navigate(screenName: string, params?: any): void;
  
    /** Pop the current screen (does nothing if only one screen remains). */
    pop(): void;
  
    /** Dismiss the entire extension and return to the native POS view. */
    dismiss(): void;
  }
  
  /** Singleton instance injected by the POS host runtime. */
  export const navigation: NavigationApi;