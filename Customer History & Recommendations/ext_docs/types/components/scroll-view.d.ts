/** ======================================================================
 *  ScrollView component – Type Declarations
 *  Docs: docs/01-components/ScrollView.md
 *  ====================================================================== */

/**
 * ScrollView - Makes content scrollable when it exceeds viewport
 * 
 * Nesting Rules:
 * - CAN contain: Any content components (Stack, Section, Text, etc.)
 * - SHOULD be a direct child of Screen
 * - CAN be nested in: Screen
 * - CANNOT be nested in: Button, Icon, Text, Tile
 * - Best practice: Use as first child of Screen for scrollable content
 */

import * as React from 'react';

/**
 * At the moment Shopify POS doesn't expose extra props
 * (no horizontal, no scroll indicators).  If more props are added
 * in the future, extend this interface accordingly.
 */
export interface ScrollViewProps {
  children?: React.ReactNode;
}

/* --------------------------------------------------------------
 *  Component
 * ------------------------------------------------------------ */
export const ScrollView: React.FC<ScrollViewProps>;
export default ScrollView;