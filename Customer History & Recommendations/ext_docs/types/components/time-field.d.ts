/** ======================================================================
 *  TimeField component – Type Declarations
 *  Docs: docs/01-components/TimeField.md
 *  ====================================================================== */

/**
 * TimeField - Input field for time selection
 * 
 * Nesting Rules:
 * - DOES NOT accept children components
 * - CAN be nested in: Stack, Section, ScrollView
 * - CANNOT be nested in: Button, Icon, Text, Image, List.Item
 * - CANNOT contain: Other UI components
 * - Triggers TimePicker component on focus
 */

import * as React from 'react';

/* --------------------------------------------------------------
 *  Helper for extra button
 * ------------------------------------------------------------ */
export interface InputAction {
  label: string;
  onPress: () => void;
  disabled?: boolean;
}

/* --------------------------------------------------------------
 *  Props
 * ------------------------------------------------------------ */
export interface TimeFieldProps {
  /* Basic content & state */
  label: string;
  value?: string;          // ISO time string HH:MM
  placeholder?: string;
  helpText?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  maxLength?: number;      // rarely used for time, but kept for parity

  /* Android-only */
  is24Hour?: boolean;

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
export const TimeField: React.FC<TimeFieldProps>;
export default TimeField;