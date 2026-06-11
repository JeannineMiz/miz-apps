/** =======================================================================
 *  Shopify POS – Cart API (unstable, 2024-06)  –  Canonical Declarations
 *  Docs: docs/02-apis/CartApi.md
 *  =======================================================================
 */

import {
  Address,
  Customer,
  CustomSale,
  Discount,
  LineItem
} from './common/cart';
  
  /* ---------------------------------------------------------------------
   * Minimal cart snapshot shape (trimmed for brevity)
   * ------------------------------------------------------------------- */
  export interface Cart {
    subtotal: string;
    taxTotal: string;
    grandTotal: string;
    note?: string;
    cartDiscount?: Discount;
    cartDiscounts: Discount[];
    customer?: Customer;
    lineItems: LineItem[];
    properties: Record<string, string>;
  }
  
  /* ---------------------------------------------------------------------
   * RemoteSubscribable (simplified so consumers can type-safely subscribe)
   * ------------------------------------------------------------------- */
  export interface RemoteSubscribable<T> {
    /** Initial value at time of subscription */
    initial: T;
    /** Subscribe to future updates */
    subscribe(callback: (value: T) => void): void;
  }
  
  /* ---------------------------------------------------------------------
   * Cart API
   * ------------------------------------------------------------------- */
  /**
   * Mutable view of the current POS cart.
   *
   * @example Add a variant and attach an address
   * ```tsx
   * const api = useApi<'pos.home.tile.render'>();
   * await api.cart.addLineItem(123, 2);
   * await api.cart.addAddress({
   *   address1: '123 Main St',
   *   city: 'Ottawa',
   *   province: 'Ontario',
   *   firstName: 'John',
   *   lastName: 'Doe',
   *   country: 'Canada',
   *   countryCode: 'CA',
   *   zip: 'K1A 0B1',
   * });
   * console.log(api.cart.subtotal);
   * ```
   */
  export interface CartApi {
    /* --- Mutations ---------------------------------------------------- */
    addAddress(address: Address): Promise<void>;
    addCartCodeDiscount(code: string): Promise<void>;
    addCustomSale(sale: CustomSale): Promise<string>;
    addLineItem(variantId: number, quantity: number): Promise<string>;
    clearCart(): Promise<void>;
    removeCustomer(): Promise<void>;
    setCustomer(customer: { id: number }): Promise<void>;
    // … other mutation methods omitted for brevity
  
    /* --- Observability ------------------------------------------------ */
    /** Subscribe to cart updates in real time */
    readonly subscribable: RemoteSubscribable<Cart>;
  }
  
  /** Singleton instance injected into the extension runtime */
  export const cart: CartApi;