/** ======================================================================
 *  TextArea component – Type Declarations
 *  Docs: docs/01-components/TextArea.md
 *  ====================================================================== */

/**
 * TextArea - Multi-line text input component
 * 
 * Nesting Rules:
 * - DOES NOT accept children components
 * - CAN be nested in: Stack, Section, ScrollView
 * - CANNOT be nested in: Button, Icon, Text, Image, List.Item
 * - CANNOT contain: Other UI components
 */

import * as React from 'react';

/* ------------------------------------------------------------------ */
/*  Shared helper for an extra button                                  */
/* ------------------------------------------------------------------ */
export interface InputAction {
  label: string;
  onPress: () => void;
  disabled?: boolean;
}

/* ------------------------------------------------------------------ */
/*  Props                                                              */
/* ------------------------------------------------------------------ */
export interface TextAreaProps {
  /* Core */
  label: string;
  value?: string;
  placeholder?: string;
  rows?: number;                // 1 – 8
  required?: boolean;
  disabled?: boolean;
  maxLength?: number;

  /* Validation / meta */
  helpText?: string;
  error?: string;

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
export const TextArea: React.FC<TextAreaProps>;
export default TextArea;