/** ======================================================================
 *  Icon component – Type Declarations
 *  Docs: docs/01-components/Icon.md
 *  ====================================================================== */

/**
 * Icon - Displays a system icon from the asset catalog
 * 
 * Nesting Rules:
 * - DOES NOT accept children components
 * - CAN be nested in: Stack, Section, ScrollView, Selectable
 * - CANNOT be nested in: Button (use Button icon prop instead), Text, Icon, Image
 * - CANNOT contain: Any UI components
 */

import * as React from 'react';

/* --------------------------------------------------------------
 *  Literal unions
 * ------------------------------------------------------------ */
export type IconSize = 'minor' | 'major' | 'spot' | 'caption' | 'badge';

export type IconName =
  | 'add-customer'
  | 'analytics'
  | 'apps'
  | 'arrow'
  | 'arrow-left'
  | 'backspace'
  | 'card-reader'
  | 'call'
  | 'cancel'
  | 'not-stocked'
  | 'cash'
  | 'checkmark'
  | 'caret-down'
  | 'checkmark-active'
  | 'checkmark-inactive'
  | 'chevron-up'
  | 'chevron-right'
  | 'chevron-down'
  | 'circle-alert'
  | 'circle-cancel'
  | 'circle-checkmark'
  | 'circle-disconnected'
  | 'circle-info'
  | 'circle-outline'
  | 'clock'
  | 'collections'
  | 'copy'
  | 'credit-card'
  | 'custom-payment'
  | 'custom-sale'
  | 'discount'
  | 'external-link'
  | 'flag'
  | 'flip-camera'
  | 'gallery-view'
  | 'gift-card'
  | 'help'
  | 'hide-keyboard'
  | 'home'
  | 'horizontal-dots'
  | 'keypad'
  | 'lightning'
  | 'link'
  | 'list'
  | 'list-view'
  | 'lock'
  | 'mail'
  | 'available-at-other-locations'
  | 'menu'
  | 'minus'
  | 'mobile'
  | 'note-report'
  | 'drawer'
  | 'orders'
  | 'shopify-payments'
  | 'play-button'
  | 'plus'
  | 'products'
  | 'radio-active'
  | 'radio-inactive'
  | 'rearrange'
  | 'receipt'
  | 'refresh'
  | 'register'
  | 'retrieve-cart'
  | 'image-placeholder'
  | 'save-cart'
  | 'scan-barcode'
  | 'search'
  | 'send'
  | 'settings'
  | 'shipment'
  | 'split-payment'
  | 'sort'
  | 'staff'
  | 'star'
  | 'unordered-list'
  | 'connectivity-warning'
  | 'internet'
  | 'delivery'
  | 'shop-pay';

/* --------------------------------------------------------------
 *  Props
 * ------------------------------------------------------------ */
export interface IconProps {
  /** Which icon to render. */
  name: IconName;
  /** Rendering size (default: 'major'). */
  size?: IconSize;
}

/* --------------------------------------------------------------
 *  Component
 * ------------------------------------------------------------ */
export const Icon: React.FC<IconProps>;
export default Icon;