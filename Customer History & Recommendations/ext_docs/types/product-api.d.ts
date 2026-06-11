/** =====================================================================
 *  Product API – Canonical Product declarations
 *  Docs: docs/02-apis/ProductApi.md
 *  ===================================================================== */

import {
  Product
} from './common/product';

/* ------------------------------------------------------------------ */
/*  Product API surface (product details targets)                     */
/* ------------------------------------------------------------------ */
export interface ProductApi {
  product: Product;
}

/** Runtime singleton provided by the POS host. */
export const product: ProductApi;