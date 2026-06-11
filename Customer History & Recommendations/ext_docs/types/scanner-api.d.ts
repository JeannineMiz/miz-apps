/** ======================================================================
 *  Scanner API – Type Declarations
 *  Docs: docs/02-apis/ScannerApi.md
 *  ====================================================================== */

/* --------------------------------------------------------------
 *  Helper RemoteSubscribable definition
 * ------------------------------------------------------------ */
export interface RemoteSubscribable<T> {
    initial: T;
    subscribe(cb: (value: T) => void): void;
  }
  
  /* --------------------------------------------------------------
   *  Scanner-specific types
   * ------------------------------------------------------------ */
  export type ScannerSource = 'camera' | 'external' | 'embedded';
  
  export interface ScannerSubscriptionResult {
    /** Decoded string from last scanner event. */
    data: string;
    /** Where the scan came from. */
    source: ScannerSource;
  }
  
  /* --------------------------------------------------------------
   *  Scanner API surface
   * ------------------------------------------------------------ */
  export interface ScannerApi {
    /** Latest scan + subscription for future scans. */
    scannerDataSubscribable: RemoteSubscribable<ScannerSubscriptionResult>;
  
    /** Available scanner sources on the device. */
    scannerSourcesSubscribable: RemoteSubscribable<ScannerSource[]>;
  }
  
  /** Singleton instance injected by the POS host runtime. */
  export const scanner: ScannerApi;