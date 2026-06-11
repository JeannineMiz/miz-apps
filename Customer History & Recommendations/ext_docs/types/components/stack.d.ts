/** ====================================================================
 *  Stack component – Type Declarations
 *  Docs: docs/01-components/Stack.md
 *  ==================================================================== */

/**
 * Stack - Primary layout container
 * 
 * Nesting Rules:
 * - CAN contain: Most UI components (Button, Text, Image, Section, etc.)
 * - CAN be nested in: Screen, ScrollView, Section, Selectable
 * - CANNOT be nested in: Icon, Badge, Button
 */

import * as React from 'react';

/* ------------------------------------------------------------------ */
/*  Literal unions                                                     */
/* ------------------------------------------------------------------ */
export type ContentPosition = 'center' | 'start' | 'end';
export type ContentDistribution = 'space-around' | 'space-between' | 'space-evenly';

export type StackDirection = 'inline' | 'block' | 'vertical' | 'horizontal'; // last two deprecated

export type SpacingKeyword =
  | '0' | '025' | '050' | '100' | '200' | '250' | '300' | '350'
  | '400' | '450' | '500' | '600' | '700' | '800' | '900' | '1000'
  | '1100' | '1200' | '1400' | '1800' | '2000' | 'none';

export type SizeUnits = `${number}px` | `${number}%` | `0`;
export type SizeUnitsOrAuto = SizeUnits | 'auto';
export type SizeUnitsOrNone = SizeUnits | 'none';

export type VerticalSpacing =
  | 'HalfPoint' | 'ExtraSmall' | 'Small' | 'Medium' | 'Large' | 'ExtraLarge';
export type HorizontalSpacing =
  | VerticalSpacing | 'ExtraExtraLarge';

/* ------------------------------------------------------------------ */
/*  Props                                                              */
/* ------------------------------------------------------------------ */
export interface StackProps {
  /* Layout */
  direction?: StackDirection;             // default 'inline'
  flex?: number;                          // flex grow / shrink
  flexChildren?: boolean;                 // stretch children
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse'; // deprecated

  /* Size */
  blockSize?: SizeUnitsOrAuto;
  inlineSize?: SizeUnitsOrAuto;
  minBlockSize?: SizeUnits;
  minInlineSize?: SizeUnits;
  maxBlockSize?: SizeUnitsOrNone;
  maxInlineSize?: SizeUnitsOrNone;

  /* Gap */
  gap?: SpacingKeyword;                   // default '0'
  rowGap?: SpacingKeyword | '';           // '' means inherit
  columnGap?: SpacingKeyword | '';

  /* Alignment */
  alignItems?: 'stretch' | 'baseline' | ContentPosition; // default 'stretch'
  alignContent?: 'stretch' | ContentPosition | ContentDistribution; // default 'start'
  justifyContent?: ContentPosition | ContentDistribution; // default 'start'
  alignment?: ContentPosition | ContentDistribution;      // deprecated

  /* Padding (new API) */
  padding?: SpacingKeyword;
  paddingBlock?: SpacingKeyword;
  paddingInline?: SpacingKeyword;
  paddingBlockStart?: SpacingKeyword;
  paddingBlockEnd?: SpacingKeyword;
  paddingInlineStart?: SpacingKeyword;
  paddingInlineEnd?: SpacingKeyword;

  /* Padding (deprecated shorthands) */
  paddingHorizontal?: HorizontalSpacing;
  paddingVertical?: VerticalSpacing;
  spacing?: 0.5 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 13 | 16; // deprecated

  /* Children */
  children?: React.ReactNode;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export const Stack: React.FC<StackProps>;
export default Stack;