/** =======================================================================
 *  Tile component – Type Declarations
 *  Docs: docs/01-components/Tile.md
 *  ======================================================================= */

/**
 * Tile - A customizable button-style card for SmartGrid or detail pages
 * 
 * Nesting Rules:
 * - DOES NOT accept children components
 * - CAN ONLY be used in SmartGrid targets (pos.home.tile.render)
 * - CANNOT be nested inside other components
 */

import * as React from 'react';

/* ------------------------------------------------------------------ */
/*  Props                                                              */
/* ------------------------------------------------------------------ */
export interface TileProps {
  /** Main label shown on the tile. */
  title: string;

  /** Secondary label (optional). */
  subtitle?: string;

  /** Number badge displayed in the top-right corner. */
  badgeValue?: number;

  /** Render tile in destructive (red) style. */
  destructive?: boolean;

  /** Enable / disable interaction (default true). */
  enabled?: boolean;

  /** Tap handler. */
  onPress?: () => void;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export const Tile: React.FC<TileProps>;
export default Tile;