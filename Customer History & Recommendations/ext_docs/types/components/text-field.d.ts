/** ======================================================================
 *  TextField component – Type Declarations
 *  Docs: docs/01-components/TextField.md
 *  ====================================================================== */

/**
 * TextField - Single-line text input component
 * 
 * Nesting Rules:
 * - DOES NOT accept children components
 * - CAN be nested in: Stack, Section, ScrollView
 * - CANNOT be nested in: Button, Icon, Text, Image, List.Item
 * - CANNOT contain: Other UI components
 */

import * as React from 'react';

/* ------------------------------------------------------------------ */
/*  Helper for extra button                                            */
/* ------------------------------------------------------------------ */
export interface InputAction {
  label: string;
  onPress: () => void;
  disabled?: boolean;
}

/* ------------------------------------------------------------------ */
/*  Props                                                              */
/* ------------------------------------------------------------------ */
export interface TextFieldProps {
  /* Content & state */
  label: string;
  value?: string;
  placeholder?: string;
  helpText?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  maxLength?: number;

  /* Extra button */
  action?: InputAction;

  /* Events */
  onChange: (value: string) => void;
  onInput?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export const TextField: React.FC<TextFieldProps>;
export default TextField;