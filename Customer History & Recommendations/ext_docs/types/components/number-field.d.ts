/** ======================================================================
 *  NumberField component – Type Declarations
 *  Docs: docs/01-components/NumberField.md
 *  ====================================================================== */

/**
 * NumberField - Input field for numeric values
 * 
 * Nesting Rules:
 * - DOES NOT accept children components
 * - CAN be nested in: Stack, Section, ScrollView
 * - CANNOT be nested in: Button, Icon, Text, Image, List.Item
 * - CANNOT contain: Other UI components
 */

import * as React from 'react';

/* --------------------------------------------------------------
 *  Helper: InputAction (shared with EmailField / DateField)
 * ------------------------------------------------------------ */
export interface InputAction {
  label: string;
  onPress: () => void;
  disabled?: boolean;
}

/* --------------------------------------------------------------
 *  String literals
 * ------------------------------------------------------------ */
export type NumberFieldInputMode = 'decimal' | 'numeric';

/* --------------------------------------------------------------
 *  Props
 * ------------------------------------------------------------ */
export interface NumberFieldProps {
  /* Basic */
  label: string;
  value?: string;
  placeholder?: string;

  /* Validation / limits */
  min?: number;
  max?: number;
  maxLength?: number;
  required?: boolean;
  disabled?: boolean;
  error?: string;

  /* Meta */
  helpText?: string;
  inputMode?: NumberFieldInputMode;

  /* Extra button */
  action?: InputAction;

  /* Events */
  onChange: (value: string) => void;
  onInput?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

/* --------------------------------------------------------------
 *  Component
 * ------------------------------------------------------------ */
export const NumberField: React.FC<NumberFieldProps>;
export default NumberField;