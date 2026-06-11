/** =======================================================================
 *  Direct Admin GraphQL API – Request Body Declaration
 *  Docs: docs/02-apis/DirectApi.md
 *  =======================================================================
 */

/**
 * Payload used when calling the Shopify Admin GraphQL API via `fetch()`
 * inside a POS UI extension.
 */
export interface DirectApiRequestBody {
    /** GraphQL query or mutation string. */
    query: string;
  
    /** Named variables referenced inside the GraphQL operation. */
    variables?: Record<string, unknown>;
  }