/** ======================================================================
 *  Button component – Type Declarations
 *  Docs: docs/01-components/Button.md
 *  ====================================================================== */

/**
 * Button - Interactive button component
 * 
 * Nesting Rules:
 * - DOES NOT accept children (uses title prop for text)
 * - CAN be nested in: Stack, Section, ScrollView
 * - CANNOT contain other components
 * - CANNOT be nested in: Icon, Text, Button, Tile
 */

import * as React from 'react';

/* --------------------------------------------------------------
 *  Literal unions
 * ------------------------------------------------------------ */
export type ButtonType = 'primary' | 'basic' | 'destructive' | 'plain';

/* --------------------------------------------------------------
 *  Props
 * ------------------------------------------------------------ */
export interface ButtonProps {
  /** Text displayed on the button (ignored for menu-item targets). */
  title?: string;

  /** Visual style.  'plain' falls back to 'basic' on POS 10+. */
  type?: ButtonType;

  /** Disable the button. */
  isDisabled?: boolean;

  /** Show loading spinner. */
  isLoading?: boolean;

  /** Tap handler. */
  onPress?: () => void;
}

/* --------------------------------------------------------------
 *  Component
 * ------------------------------------------------------------ */
export const Button: React.FC<ButtonProps>;
export default Button;