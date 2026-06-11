/** ======================================================================
 *  Banner component – Type Declarations
 *  Docs: docs/01-components/Banner.md
 *  ====================================================================== */

/**
 * Banner - Displays important messages with colored backgrounds
 * 
 * Nesting Rules:
 * - CAN contain: Text content only (supplied via title/message props)
 * - CAN be nested in: Stack, Section, ScrollView
 * - CANNOT be nested in: Button, Icon, Text, Image, List.Item
 * - CANNOT directly contain: Other UI components
 */

import * as React from 'react';

/* --------------------------------------------------------------
 *  Variant literal
 * ------------------------------------------------------------ */
export type BannerVariant =
  | 'confirmation'
  | 'alert'
  | 'error'
  | 'information';

/* --------------------------------------------------------------
 *  Props interface
 * ------------------------------------------------------------ */
/**
 * Banner used to communicate important, persistent information.
 *
 * @example
 * ```tsx
 * <Banner title="Error" variant="error" visible />
 * ```
 */
export interface BannerProps {
  /** Title text displayed on the banner. */
  title: string;

  /** Visual / semantic style of the banner. */
  variant: BannerVariant;

  /** Whether the banner is shown. */
  visible: boolean;

  /** Text for the action button (default: "Dismiss"). */
  action?: string;

  /** Hide the action button (default: true). */
  hideAction?: boolean;

  /** Press handler (default dismisses the banner). */
  onPress?: () => void;
}

/* --------------------------------------------------------------
 *  Component
 * ------------------------------------------------------------ */
export const Banner: React.FC<BannerProps>;
export default Banner;