/** ======================================================================
 *  POSBlockRow component – Type Declarations
 *  Docs: docs/01-components/POSBlockRow.md
 *  ====================================================================== */

/**
 * POSBlockRow - Row component for POSBlock containers
 * 
 * Nesting Rules:
 * - CAN contain: Text, Stack, Image, and other display components
 * - MUST be a direct child of POSBlock
 * - CANNOT be nested in: Regular UI components
 * - Best practice: Use for rows of content within POSBlock
 */

import * as React from 'react';

/* --------------------------------------------------------------
 *  Props
 * ------------------------------------------------------------ */
export interface POSBlockRowProps {
  /** Callback when the row is tapped. */
  onPress?: () => void;
  /** Children to render inside the row. */
  children?: React.ReactNode;
}

/* --------------------------------------------------------------
 *  Component
 * ------------------------------------------------------------ */
export const POSBlockRow: React.FC<POSBlockRowProps>;
export default POSBlockRow;