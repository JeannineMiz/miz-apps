/** =======================================================================
 *  List component – minimal public declarations (stub)
 *  Docs: docs/01-components/List.md
 *  =======================================================================
/** ======================================================================
 *  List component – Type Declarations
 *  Docs: docs/01-components/List.md
 *  ====================================================================== */

/**
 * List - Displays rows of content with consistent styling
 * 
 * Nesting Rules:
 * - CAN contain: List.Item components ONLY
 * - CAN be nested in: Stack, Section, ScrollView
 * - CANNOT be nested in: Button, Icon, Text, Image, List.Item
 * - List.Item CAN contain: Text, Image, Icon components
 * - List.Item CANNOT contain: List, Button, Section components
 */

import * as React from 'react';
import {BadgeProps, BadgeVariant, BadgeStatus} from './badge.d';


/* ------------------------------------------------------------------
 * Helper row types
 * ---------------------------------------------------------------- */
export interface ListRowLeftSide {
  /** Main label shown on the left. */
  label: string;

  /**
   * Optional subtitle lines (up to 3). Each subtitle can be a simple string
   * or an object with content and color.
   */
  subtitle?: Array<string | {content: string; color?: string}>;

  /** Optional badges displayed under the label. */
  badges?: BadgeProps[];

  /** Optional image metadata. */
  image?: { source?: string; badge?: number };
}

export interface ListRowRightSide {
  /** Text shown on the right side. */
  label?: string;

  /** Show chevron when row navigates elsewhere. Default: false */
  showChevron?: boolean;

  /** Optional toggle switch. */
  toggleSwitch?: {
    disabled?: boolean;
    value: boolean;
  };
}

export interface ListRow {
  /** Unique identifier. */
  id: string;

  /** Left-hand UI. */
  leftSide: ListRowLeftSide;

  /** Right-hand UI. */
  rightSide?: ListRowRightSide;

  /** Row press handler. */
  onPress?: () => void;
}

/* ------------------------------------------------------------------
 * List props
 * ---------------------------------------------------------------- */
export interface ListProps {
  /** Data source for rows. */
  data: ListRow[];

  /** Large header title shown above the list. */
  title?: string;

  /**
   * Image display strategy.
   * - automatic: detect images, else placeholders
   * - always: always show image / placeholder
   * - never: never show image or placeholder
   */
  imageDisplayStrategy?: 'automatic' | 'always' | 'never';

  /** True while more data is loading (pagination). */
  isLoadingMore?: boolean;

  /** Callback when scrolled to bottom. */
  onEndReached?: () => void;

  /** Optional custom header component. */
  listHeaderComponent?: unknown; // RemoteFragment in runtime
}

/* ------------------------------------------------------------------
 * Component
 * ---------------------------------------------------------------- */
export const List: React.FC<ListProps>;
export default List;