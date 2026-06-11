/** ======================================================================
 *  Text component – Type Declarations
 *  Docs: docs/01-components/Text.md
 *  ====================================================================== */

/**
 * Text - Component for displaying text with various styles
 * 
 * Nesting Rules:
 * - CAN contain: Only string content, no child components
 * - CAN be nested in: Stack, Section, ScrollView, Selectable
 * - CANNOT be nested in: Button, Icon, Text, Image
 * - CANNOT contain: Other UI components
 */

import * as React from 'react';

/* --------------------------------------------------------------
 *  Literal unions
 * ------------------------------------------------------------ */
export type TextVariant =
  | 'sectionHeader'
  | 'captionRegular'
  | 'captionRegularTall'
  | 'captionMedium'
  | 'body'
  | 'headingSmall'
  | 'headingLarge'
  | 'display';

export type ColorType =
  | 'TextNeutral'
  | 'TextSubdued'
  | 'TextDisabled'
  | 'TextWarning'
  | 'TextCritical'
  | 'TextSuccess'
  | 'TextInteractive'
  | 'TextHighlight';

/* --------------------------------------------------------------
 *  Props
 * ------------------------------------------------------------ */
export interface TextProps {
  /** Typography preset (size / weight). */
  variant?: TextVariant;

  /** Text colour token. */
  color?: ColorType;

  /** Content to render. */
  children: React.ReactNode;
}

/* --------------------------------------------------------------
 *  Component
 * ------------------------------------------------------------ */
export const Text: React.FC<TextProps>;
export default Text;