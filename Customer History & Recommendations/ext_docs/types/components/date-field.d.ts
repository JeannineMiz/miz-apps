/** ======================================================================
 *  DateField component – Type Declarations
 *  Docs: docs/01-components/DateField.md
 *  ====================================================================== */

/**
 * DateField - Input field for date selection
 * 
 * Nesting Rules:
 * - DOES NOT accept children components
 * - CAN be nested in: Stack, Section, ScrollView
 * - CANNOT be nested in: Button, Icon, Text, Image, List.Item
 * - CANNOT contain: Other UI components
 * - Triggers DatePicker component on focus
 */

import * as React from 'react';

/* --------------------------------------------------------------
 *  Helper: InputAction
 * ------------------------------------------------------------ */
export interface InputAction {
  /** Text displayed in the button. */
  label: string;
  /** Callback executed when pressed. */
  onPress: () => void;
  /** Disable the button. */
  disabled?: boolean;
}

/* --------------------------------------------------------------
 *  DateField props
 * ------------------------------------------------------------ */
export interface DateFieldProps {
  /** Field label shown above the input. */
  label: string;

  /** Current value (ISO date string). Defaults to "now". */
  value?: string;

  /** Extra button under the field (e.g., Clear). */
  action?: InputAction;

  /** Disable editing. */
  disabled?: boolean;

  /** Error message / styling. */
  error?: string;

  /** Helper text below the field. */
  helpText?: string;

  /** Focus gained callback. */
  onFocus?: () => void;

  /** Focus lost callback. */
  onBlur?: () => void;

  /** Fired when user selects a date. */
  onChange?: (value: string) => void;
}

/* --------------------------------------------------------------
 *  Component
 * ------------------------------------------------------------ */
export const DateField: React.FC<DateFieldProps>;
export default DateField;