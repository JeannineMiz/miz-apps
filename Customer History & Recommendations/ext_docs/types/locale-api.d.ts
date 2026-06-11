/** =====================================================================
 *  Locale API – Type Declarations
 *  Docs: docs/02-apis/LocaleApi.md
 *  ===================================================================== */

/** Generic RemoteSubscribable helper. */
export interface RemoteSubscribable<T> {
    initial: T;
    subscribe(callback: (value: T) => void): void;
  }
  
  /** Public Locale API surface. */
  export interface LocaleApi {
    /** Current locale and a subscription mechanism for changes. */
    subscribable: RemoteSubscribable<string>;
  }
  
  /** Runtime singleton injected by the POS host. */
  export const locale: LocaleApi;