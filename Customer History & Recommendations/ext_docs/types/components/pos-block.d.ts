/** ======================================================================
 *  POSBlock component – Type Declarations
 *  Docs: docs/01-components/POSBlock.md
 *  ====================================================================== */

/**
 * POSBlock - Container for extension content in POS UI targets
 * 
 * Nesting Rules:
 * - CAN contain: POSBlockRow components (ONLY)
 * - CAN be nested in: Targets such as CartLineItemDetails, ReceiptFooter
 * - CANNOT be nested in: Regular UI components
 * - Best practice: Use for extension blocks in POS UI targets
 */

import * as React from 'react';

/* --------------------------------------------------------------
 *  Action object
 * ------------------------------------------------------------ */
export interface POSBlockAction {
  /** Button text. */
  title: string;
  /** Disable the button. */
  disabled?: boolean;
  /** Callback when pressed. */
  onPress: () => void;
}

/* --------------------------------------------------------------
 *  Props
 * ------------------------------------------------------------ */
export interface POSBlockProps {
  /** Optional button shown in the block's header. */
  action?: POSBlockAction;
}

/* --------------------------------------------------------------
 *  Component
 * ------------------------------------------------------------ */
export const POSBlock: React.FC<POSBlockProps>;
export default POSBlock;