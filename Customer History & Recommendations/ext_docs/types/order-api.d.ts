/** =====================================================================
 *  Order API – Type Declarations
 *  Docs: docs/02-apis/OrderApi.md
 *  ===================================================================== */

/** Minimal order representation (extend with more fields as needed). */
export interface Order {
    /** Unique Shopify order ID. */
    id: number;
  
    /** Human-readable order name (e.g., "#1234"). */
    name: string;
  
    /** Customer ID linked to the order, if any. */
    customerId?: number;
  }
  
  /** API surface injected into order-related targets. */
  export interface OrderApi {
    order: Order;
  }
  
  /** Singleton instance provided by the POS host runtime. */
  export const order: OrderApi;