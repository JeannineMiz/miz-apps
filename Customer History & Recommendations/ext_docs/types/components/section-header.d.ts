/** ======================================================================
 *  SectionHeader component – Type Declarations
 *  Docs: docs/01-components/SectionHeader.md
 *  ====================================================================== */

/**
 * SectionHeader - Header with title and optional action button
 * 
 * Nesting Rules:
 * - DOES NOT accept children components
 * - CAN be nested in: Stack, ScrollView
 * - CANNOT be nested in: Button, Icon, Text, Image, List.Item
 * - Best practice: Use inside Section component
 */

import * as React from 'react';

/* --------------------------------------------------------------
 *  Helper: action button
 * ------------------------------------------------------------ */
export interface SectionHeaderAction {
  /** Button label. */
  label: string;
  /** Click handler. */
  onPress: () => void;
  /** Disable the button. */
  disabled?: boolean;
}

/* --------------------------------------------------------------
 *  Props
 * ------------------------------------------------------------ */
export interface SectionHeaderProps {
  /** Heading text. */
  title: string;

  /** Optional action button (requires `title`). */
  action?: SectionHeaderAction;

  /** Hide the divider line below the header. */
  hideDivider?: boolean;
}

/* --------------------------------------------------------------
 *  Component
 * ------------------------------------------------------------ */
export const SectionHeader: React.FC<SectionHeaderProps>;
export default SectionHeader;