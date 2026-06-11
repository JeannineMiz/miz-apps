/** ======================================================================
 *  POSReceiptBlock component – Type Declarations
 *  Docs: docs/01-components/POSReceiptBlock.md
 *  ====================================================================== */

/**
 * POSReceiptBlock - Container for receipt extension content
 * 
 * Nesting Rules:
 * - CAN contain: HTML content as string via 'html' prop
 * - CAN be nested in: ReceiptFooter target
 * - CANNOT be nested in: Regular UI components
 * - CANNOT directly contain: UI components
 * - Best practice: Use for extension content on receipts
 */

import * as React from 'react';
import {QRCodeProps} from './qr-code';   // if you have a QRCode type file
import {TextProps} from './text';       // if you have a Text type file

/* --------------------------------------------------------------
 *  Allowed children
 * ------------------------------------------------------------ */
export type POSReceiptBlockChild =
  | React.ReactElement<TextProps>
  | React.ReactElement<QRCodeProps>;

/* --------------------------------------------------------------
 *  Props
 * ------------------------------------------------------------ */
export interface POSReceiptBlockProps {
  children?: POSReceiptBlockChild | POSReceiptBlockChild[];
}

/* --------------------------------------------------------------
 *  Component
 * ------------------------------------------------------------ */
export const POSReceiptBlock: React.FC<POSReceiptBlockProps>;
export default POSReceiptBlock;