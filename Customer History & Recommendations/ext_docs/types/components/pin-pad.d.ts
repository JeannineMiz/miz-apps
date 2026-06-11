/** ======================================================================
 *  PinPad component – Type Declarations
 *  Docs: docs/01-components/PinPad.md
 *  ====================================================================== */

/**
 * PinPad - Secure input for numeric PIN codes
 * 
 * Nesting Rules:
 * - DOES NOT accept children components
 * - CAN be nested in: Stack, ScrollView, Screen
 * - CANNOT be nested in: Button, Icon, Text, Image, List.Item
 * - CANNOT contain: Other UI components
 * - Best practice: Place in a dedicated screen for auth flows
 */

import * as React from 'react';

/* ------------------------------------------------------------------ */
/*  Literal unions                                                     */
/* ------------------------------------------------------------------ */
export type PinValidationResult = 'accept' | 'reject';

export type PinLength = 4 | 5 | 6 | 7 | 8 | 9 | 10;

/* ------------------------------------------------------------------ */
/*  Helper objects                                                     */
/* ------------------------------------------------------------------ */
export interface PinPadActionType {
  label: string;
  onPress: () => Promise<number[]>;
}

/* ------------------------------------------------------------------ */
/*  Props                                                              */
/* ------------------------------------------------------------------ */
export interface PinPadProps {
  /** Prompt text above keypad. */
  label?: string;

  /** Minimum PIN length (defaults to 4). */
  minPinLength?: PinLength;

  /** Maximum PIN length (defaults to 6). */
  maxPinLength?: PinLength;

  /** Mask digits while typing (default: true). */
  masked?: boolean;

  /** Live callback whenever digits change. */
  onPinEntry?: (pin: number[]) => void;

  /** Extra button between prompt and keypad. */
  pinPadAction?: PinPadActionType;

  /**
   * Called when merchant presses "Enter".
   * Return `'accept'` to close / continue, `'reject'` to shake + reset.
   */
  onSubmit: (pin: number[]) => Promise<PinValidationResult>;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export const PinPad: React.FC<PinPadProps>;
export default PinPad;