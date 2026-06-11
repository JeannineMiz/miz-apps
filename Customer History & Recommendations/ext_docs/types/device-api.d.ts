/** =====================================================================
 *  Device API – Type Declarations
 *  Docs: docs/02-apis/DeviceApi.md
 *  ===================================================================== */

/** Public Device API surface exposed to POS UI extensions. */
export interface DeviceApi {
    /** Human-readable name (e.g., “iPad Pro 12.9”) */
    name: string;
  
    /** Unique Shopify device ID */
    getDeviceId(): Promise<string>;
  
    /** Whether the device is a tablet */
    isTablet(): Promise<boolean>;
  }
  
  /** Singleton instance injected by the POS host runtime. */
  export const device: DeviceApi;