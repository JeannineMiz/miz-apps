/** =====================================================================
 *  Customer API – Type Declarations
 *  Docs: docs/02-apis/CustomerApi.md
 *  ===================================================================== */

import {
  Customer
} from './common/cart';
  
/** API surface available in customer-detail targets. */
export interface CustomerApi {
  customer: Customer;
}

/** Runtime singleton injected by the POS host. */
export const customer: CustomerApi;