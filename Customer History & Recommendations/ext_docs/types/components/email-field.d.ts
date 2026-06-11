/** ======================================================================
 *  EmailField component – Type Declarations
 *  Docs: docs/01-components/EmailField.md
 *  ====================================================================== */

/**
 * EmailField - Input field specialized for email addresses
 * 
 * Nesting Rules:
 * - DOES NOT accept children components
 * - CAN be nested in: Stack, Section, ScrollView
 * - CANNOT be nested in: Button, Icon, Text, Image, List.Item
 * - CANNOT contain: Other UI components
 */

import * as React from 'react';

/* --------------------------------------------------------------
 *  Helper: InputAction (re-use if defined elsewhere)
 * ------------------------------------------------------------ */
export interface InputAction {
  label: string;
  onPress: () => void;
  disabled?: boolean;
}

/* --------------------------------------------------------------
 *  EmailField props
 * ------------------------------------------------------------ */
export interface EmailFieldProps {
  label: string;

  /* current value */
  value?: string;

  /* hint when empty */
  placeholder?: string;

  /* helper / guidance text */
  helpText?: string;

  /* error message & styling */
  error?: string;

  /* mark field required */
  required?: boolean;

  /* disable editing */
  disabled?: boolean;

  /* max characters */
  maxLength?: number;

  /* extra button below field */
  action?: InputAction;

  /* callbacks */
  onChange?: (value: string) => void;
  onInput?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

/* --------------------------------------------------------------
 *  Component
 * ------------------------------------------------------------ */
export const EmailField: React.FC<EmailFieldProps>;
export default EmailField;