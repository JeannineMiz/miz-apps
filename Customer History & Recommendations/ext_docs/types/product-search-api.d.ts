/** ======================================================================
 *  Product Search API – Type Declarations
 *  Docs: docs/02-apis/ProductSearchApi.md
 *  ====================================================================== */

import {
  Product,
  ProductVariant
} from './common/product';
  
  /* --------------------------------------------------------------
   *  Pagination helpers
   * ------------------------------------------------------------ */
  export interface PaginationParams {
    cursor?: string;
    pageSize?: number;
  }
  
  export interface PaginatedResult<T> {
    items: T[];
    nextCursor?: string;
  }
  
  export interface MultipleResourceResult<T> {
    items: T[];
  }
  
  /* --------------------------------------------------------------
   *  Product Search API surface
   * ------------------------------------------------------------ */
  export interface ProductSearchApi {
    searchProducts(
      params: { queryString?: string } & PaginationParams,
    ): Promise<PaginatedResult<Product>>;
  
    fetchProductWithId(productId: number): Promise<Product>;
    fetchProductsWithIds(
      productIds: number[],
    ): Promise<MultipleResourceResult<Product>>;
  
    fetchProductVariantWithId(variantId: number): Promise<ProductVariant>;
    fetchProductVariantsWithIds(
      variantIds: number[],
    ): Promise<MultipleResourceResult<ProductVariant>>;
  
    fetchProductVariantsWithProductId(
      productId: number,
    ): Promise<ProductVariant[]>;
  
    fetchPaginatedProductVariantsWithProductId(
      productId: number,
      pagination: PaginationParams,
    ): Promise<PaginatedResult<ProductVariant>>;
  }
  
  /** Singleton instance injected by the POS host. */
  export const productSearch: ProductSearchApi;