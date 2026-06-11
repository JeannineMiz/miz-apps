/** =====================================================================
 *  Cart Line Item API – declarations
 *  Docs: docs/02-apis/CartLineItemApi.md
 *  ===================================================================== */

import {
  LineItem
} from './common/cart';
  
  /** API object injected into targets that deal with a single line item. */
  export interface CartLineItemApi {
    /** Currently-selected cart line item. */
    cartLineItem: LineItem;
  }
  
  /* ---------------------------------------------------------------------
   * Runtime helper (for clarity)
   * ------------------------------------------------------------------- */
  export const cartLineItemApi: CartLineItemApi;