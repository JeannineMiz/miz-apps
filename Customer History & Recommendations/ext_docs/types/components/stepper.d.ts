/** ======================================================================
 *  Stepper component – Type Declarations
 *  Docs: docs/01-components/Stepper.md
 *  ====================================================================== */

/**
 * Stepper - Plus/minus numeric value input
 * 
 * Nesting Rules:
 * - DOES NOT accept children components
 * - CAN be nested in: Stack, Section, ScrollView
 * - CANNOT be nested in: Button, Icon, Text, Image, List.Item
 * - CANNOT contain: Other UI components
 */

import * as React from 'react';

/* --------------------------------------------------------------
 *  Props
 * ------------------------------------------------------------ */
export interface StepperProps {
  /** Initial value used for internal state. */
  initialValue: number;

  /** Callback fired whenever value changes. */
  onValueChanged: (value: number) => void;

  /** Minimum allowed value (default 1). */
  minimumValue?: number;

  /** Maximum allowed value. */
  maximumValue?: number;

  /** Disable interaction. */
  disabled?: boolean;

  /**
   * Controlled value.  If provided, component ignores its own state
   * and relies on this prop; keep it in sync with `onValueChanged`.
   */
  value?: number;
}

/* --------------------------------------------------------------
 *  Component
 * ------------------------------------------------------------ */
export const Stepper: React.FC<StepperProps>;
export default Stepper;