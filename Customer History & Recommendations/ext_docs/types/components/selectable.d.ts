/** ======================================================================
 *  Selectable component – Type Declarations
 *  Docs: docs/01-components/Selectable.md
 *  ====================================================================== */

/**
 * Selectable - Makes non-interactive components tappable
 * 
 * Nesting Rules:
 * - CAN contain: Non-interactive components (Text, Image, Stack, etc.)
 * - SHOULD NOT contain: Already interactive components (Button, Tile)
 * - CAN be nested in: Stack, Section, ScrollView
 * - CANNOT be nested in: Button, Icon
 */

import * as React from 'react';

/* --------------------------------------------------------------
 *  Props
 * ------------------------------------------------------------ */
export interface SelectableProps {
  /** Tap callback. */
  onPress: () => void;
  /** Disable touch interaction. */
  disabled?: boolean;
  /** Wrapped content. */
  children?: React.ReactNode;
}

/* --------------------------------------------------------------
 *  Component
 * ------------------------------------------------------------ */
export const Selectable: React.FC<SelectableProps>;
export default Selectable;