/** ======================================================================
 *  DatePicker component – Type Declarations
 *  Docs: docs/01-components/DatePicker.md
 *  ====================================================================== */

/**
 * DatePicker - Calendar component for selecting dates
 * 
 * Nesting Rules:
 * - DOES NOT accept children components
 * - CAN be nested in: Stack, Section, ScrollView
 * - CANNOT be nested in: Button, Icon, Text, Image, List.Item
 * - CANNOT contain: Other UI components
 * - Usually invoked by DateField rather than used directly
 */

import * as React from 'react';

/* --------------------------------------------------------------
 *  Helper types
 * ------------------------------------------------------------ */
export type DatePickerInputMode = 'inline' | 'spinner';

/* --------------------------------------------------------------
 *  Props
 * ------------------------------------------------------------ */
export interface DatePickerProps {
  /**
   * Tuple controlling visibility:
   * [isVisible, setVisible(nextVisible)]
   *
   * Call setVisible(false) in your onChange or when the dialog closes.
   */
  visibleState: [boolean, (visible: boolean) => void];

  /** ISO date currently selected. Defaults to current date. */
  selected?: string;

  /** Callback when user picks a date (ISO string). */
  onChange?: (selected: string) => void;

  /** Show inline calendar or spinner dialog. */
  inputMode?: DatePickerInputMode;
}

/* --------------------------------------------------------------
 *  Component
 * ------------------------------------------------------------ */
export const DatePicker: React.FC<DatePickerProps>;
export default DatePicker;