/** =====================================================================
 *  Draft Order API – Type Declarations
 *  Docs: docs/02-apis/DraftOrderApi.md
 *  ===================================================================== */

/** Minimal draft-order representation (extend if Shopify adds fields). */
export interface DraftOrder {
    /** Unique Shopify draft-order ID. */
    id: number;
  
    /** Human-readable draft-order name (e.g., "#D1234"). */
    name: string;
  
    /** Customer ID linked to the draft order, if any. */
    customerId?: number;
  }
  
  /** Public API injected into draft-order detail targets. */
  export interface DraftOrderApi {
    draftOrder: DraftOrder;
  }
  
  /** Singleton instance provided by the POS host. */
  export const draftOrder: DraftOrderApi;