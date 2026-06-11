/** ======================================================================
 *  Box component – Type Declarations
 *  Docs: docs/01-components/Box.md
 *  ====================================================================== */

/**
 * Box - Basic container with background, border and padding options
 * 
 * Nesting Rules:
 * - CAN contain: Most UI components (Text, Stack, Button, etc.)
 * - CAN be nested in: Stack, Section, ScrollView
 * - CANNOT be nested in: Button, Icon, Text, Image
 * - Best practice: Use Stack for layout, Box for visual styling
 */

import * as React from 'react';

/* --------------------------------------------------------------
 *  Size & padding literals
 * ------------------------------------------------------------ */
export type SizeUnits  = `${number}px` | `${number}%` | `0`;
export type SizeUnitsOrAuto = SizeUnits | 'auto';
export type SizeUnitsOrNone = SizeUnits | 'none';

export type PaddingKeys =
  | '0' | '025' | '050' | '100' | '200' | '250' | '300' | '350'
  | '400' | '450' | '500' | '600' | '700' | '800' | '900'
  | '1000' | '1100' | '1200' | '1400' | '1800' | '2000'
  | 'none';

/* --------------------------------------------------------------
 *  Props
 * ------------------------------------------------------------ */
export interface BoxProps {
  /* Size */
  blockSize?: SizeUnitsOrAuto;
  inlineSize?: SizeUnitsOrAuto;
  minBlockSize?: SizeUnits;
  minInlineSize?: SizeUnits;
  maxBlockSize?: SizeUnitsOrNone;
  maxInlineSize?: SizeUnitsOrNone;

  /* Padding shorthand */
  padding?: PaddingKeys;
  paddingBlock?: PaddingKeys;
  paddingInline?: PaddingKeys;
  paddingBlockStart?: PaddingKeys;
  paddingBlockEnd?: PaddingKeys;
  paddingInlineStart?: PaddingKeys;
  paddingInlineEnd?: PaddingKeys;

  /* Children */
  children?: React.ReactNode;
}

/* --------------------------------------------------------------
 *  Component
 * ------------------------------------------------------------ */
export const Box: React.FC<BoxProps>;
export default Box;