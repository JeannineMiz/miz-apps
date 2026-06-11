/** ======================================================================
 *  Navigator component – Type Declarations
 *  Docs: docs/01-components/Navigator.md
 *  ====================================================================== */

/**
 * Navigator - Container that manages a stack of Screen components
 * 
 * Nesting Rules:
 * - CAN ONLY contain: Screen components
 * - MUST be the root component for modal targets
 * - CANNOT be nested inside other components
 */

import * as React from 'react';

/* --------------------------------------------------------------
 *  Props
 * ------------------------------------------------------------ */
export interface NavigatorProps {
  /**
   * Name of the child <Screen> to show first.
   * Defaults to the first Screen added.
   */
  initialScreenName?: string;
}

/* --------------------------------------------------------------
 *  Component
 * ------------------------------------------------------------ */
export const Navigator: React.FC<NavigatorProps>;
export default Navigator;