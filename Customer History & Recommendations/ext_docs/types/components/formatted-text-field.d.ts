/** ======================================================================
 *  FormattedTextField component – Type Declarations
 *  Docs: docs/01-components/FormattedTextField.md
 *  ====================================================================== */

/**
 * FormattedTextField - Text input with automatic formatting
 * 
 * Nesting Rules:
 * - DOES NOT accept children components
 * - CAN be nested in: Stack, Section, ScrollView
 * - CANNOT be nested in: Button, Icon, Text, Image, List.Item
 * - CANNOT contain: Other UI components
 * - Best practice: Use for phone numbers, currency, etc.
 */

import * as React from 'react';

/* --------------------------------------------------------------
 *  String-literal enums
 * ------------------------------------------------------------ */
export type AutoCapitalizationType = 'none' | 'sentences' | 'words' | 'characters';

export type InputType =
  | 'text'
  | 'number'
  | 'currency'
  | 'giftcard'
  | 'email';

/* --------------------------------------------------------------
 *  Helper: InputAction (share with EmailField / DateField if needed)
 * ------------------------------------------------------------ */
export interface InputAction {
  label: string;
  onPress: () => void;
  disabled?: boolean;
}

/* --------------------------------------------------------------
 *  Props
 * ------------------------------------------------------------ */
export interface FormattedTextFieldProps {
  /* Core behaviour */
  onChangeText: (value: string) => void;

  /* Appearance & meta */
  title?: string;
  placeholder?: string;
  initialValue?: string;
  inputType?: InputType;
  autoCapitalize?: AutoCapitalizationType;

  /* Validation & state */
  isValid?: boolean;
  errorMessage?: string;
  required?: boolean;
  disabled?: boolean;
  maxLength?: number;

  /* Extra button */
  action?: InputAction;

  /* Events */
  onInput?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

/* --------------------------------------------------------------
 *  Component
 * ------------------------------------------------------------ */
export const FormattedTextField: React.FC<FormattedTextFieldProps>;
export default FormattedTextField;