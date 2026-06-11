/** =======================================================================
 *  Shopify POS – Action API
 *  Docs: docs/02-apis/ActionApi.md
 *  =======================================================================
 */

/**
 * The Action API is available on render targets like
 * `pos.home.tile.render`, `*.action.menu-item.render`, etc.
 * It allows a menu-item (or tile) extension to present its paired
 * full-screen modal target.
 *
 * @example
 * const api = useApi<'pos.home.tile.render'>();
 * api.action.presentModal();   // launches pos.home.modal.render
 */
export interface ActionApi {
    /** Present the corresponding `*.action.render` modal view. */
    presentModal(): void;
  }
  
  /** Singleton instance injected by the POS host runtime. */
  export const action: ActionApi;