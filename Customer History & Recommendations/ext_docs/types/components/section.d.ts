/** ======================================================================
 *  Section component – Type Declarations
 *  Docs: docs/01-components/Section.md
 *  ====================================================================== */

/**
 * Section - Container with a header and optional action button
 * 
 * Nesting Rules:
 * - CAN contain: Stack, Text, Button, and other content components
 * - CAN be nested in: Stack, ScrollView
 * - CANNOT be nested in: Button, Icon, Text, Tile
 * - Best practice: Use Stack inside Section for layout control
 */

import * as React from 'react';

/* --------------------------------------------------------------
 *  Action object
 * ------------------------------------------------------------ */
export interface SectionHeaderAction {
  /** Label shown on the button. */
  title: string;
  /** Callback when pressed. */
  onPress: () => void;
  /** Disable the button. */
  disabled?: boolean;
}

/* --------------------------------------------------------------
 *  Props
 * ------------------------------------------------------------ */
export interface SectionProps {
  /** Heading text for the section. */
  title?: string;

  /** Optional button in the header. */
  action?: SectionHeaderAction;

  /** Section body. */
  children?: React.ReactNode;
}

/* --------------------------------------------------------------
 *  Component
 * ------------------------------------------------------------ */
export const Section: React.FC<SectionProps>;
export default Section;