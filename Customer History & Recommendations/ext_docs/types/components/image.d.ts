/** ======================================================================
 *  Image component – Type Declarations
 *  Docs: docs/01-components/Image.md
 *  ====================================================================== */

/**
 * Image - Displays images from URL or asset catalog
 * 
 * Nesting Rules:
 * - DOES NOT accept children components
 * - CAN be nested in: Stack, Section, ScrollView, Selectable
 * - CANNOT be nested in: Button, Icon, Text, Image
 * - CANNOT contain: Any UI components
 */

import * as React from 'react';

/* --------------------------------------------------------------
 *  Literal unions
 * ------------------------------------------------------------ */
export type ImageSize = 's' | 'm' | 'l' | 'xl';

export type FillResizeMode =
  | 'cover'
  | 'contain'
  | 'stretch'
  | 'repeat'
  | 'center';

/* --------------------------------------------------------------
 *  Props
 * ------------------------------------------------------------ */
export interface ImageProps {
  /** Source URL or asset-catalog name. */
  src: string;

  /**
   * Size preset (`'s' | 'm' | 'l' | 'xl'`) **OR**
   * fill resize mode (`'cover' | 'contain' | …`).
   * Defaults to `'l'`.
   */
  size?: ImageSize | FillResizeMode;
}

/* --------------------------------------------------------------
 *  Component
 * ------------------------------------------------------------ */
export const Image: React.FC<ImageProps>;
export default Image;