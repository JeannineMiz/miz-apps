/** ======================================================================
 *  Badge component – Type Declarations
 *  Docs: docs/01-components/Badge.md
 *  ====================================================================== */

/**
 * Badge - Small label with colored background for status indicators
 * 
 * Nesting Rules:
 * - CAN contain: Text content only (supplied via text prop)
 * - CAN be nested in: Stack, Section, ScrollView, List.Item
 * - CANNOT be nested in: Button, Icon, Text, Image
 * - CANNOT directly contain: Other UI components
 */

import * as React from 'react';

/* ------------------------------------------------------------------
 * String-literal types
 * ---------------------------------------------------------------- */
export type BadgeVariant =
  | 'neutral'
  | 'critical'
  | 'warning'
  | 'success'
  | 'highlight';

/** @deprecated Use a `variant` prop instead. */
export type BadgeStatus = 'empty' | 'partial' | 'complete';

/* ------------------------------------------------------------------
 * Props
 * ---------------------------------------------------------------- */
/**
 * Status badge used to convey short state information.
 *
 * @example
 * ```tsx
 * <Badge text="Paid" variant="success" />
 * ```
 */
export interface BadgeProps {
  /** Text displayed inside the badge. */
  text: string;

  /** Visual appearance and semantic meaning. */
  variant: BadgeVariant;

  /**
   * Circle status icon. Deprecated: will be removed in a future version—
   * migrate to `variant`.
   */
  status?: BadgeStatus;
}

/* ------------------------------------------------------------------
 * Component
 * ---------------------------------------------------------------- */
export const Badge: React.FC<BadgeProps>;
export default Badge;
