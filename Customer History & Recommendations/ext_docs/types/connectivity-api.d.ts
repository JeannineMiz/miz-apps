/** =====================================================================
 *  Connectivity API – Type Declarations
 *  Docs: docs/02-apis/ConnectivityApi.md
 *  ===================================================================== */

export type ConnectivityStateSeverity = 'Connected' | 'Disconnected';

/** Current online / offline status of the POS device. */
export interface ConnectivityState {
  internetConnected: ConnectivityStateSeverity;
}

/** Minimal RemoteSubscribable helper used by many POS APIs. */
export interface RemoteSubscribable<T> {
  /** Initial value at subscription time. */
  initial: T;
  /** Subscribe to future updates. */
  subscribe(callback: (value: T) => void): void;
}

/** Public Connectivity API surface. */
export interface ConnectivityApi {
  /** Subscribe to connectivity-state changes. */
  subscribable: RemoteSubscribable<ConnectivityState>;
}

/** Singleton instance injected by the POS host runtime. */
export const connectivity: ConnectivityApi;