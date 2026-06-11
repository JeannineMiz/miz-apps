/** ======================================================================
 *  TimePicker component – Type Declarations
 *  Docs: docs/01-components/TimePicker.md
 *  ====================================================================== */

/**
 * TimePicker - Component for selecting time values
 * 
 * Nesting Rules:
 * - DOES NOT accept children components
 * - CAN be nested in: Stack, Section, ScrollView
 * - CANNOT be nested in: Button, Icon, Text, Image, List.Item
 * - CANNOT contain: Other UI components
 * - Usually invoked by TimeField rather than used directly
 */

import * as React from 'react';

/* --------------------------------------------------------------
 *  Literal unions
 * ------------------------------------------------------------ */
export type TimePickerInputMode = 'inline' | 'spinner';

/* --------------------------------------------------------------
 *  Props
 * ------------------------------------------------------------ */
export interface TimePickerProps {
  /**
   * Visibility tuple:  
   *   [isVisible, setVisible(nextVisible)]
   *
   * The picker displays when `isVisible` is true.
   * Call `setVisible(false)` in `onChange` or when the dialog closes.
   */
  visibleState: [boolean, (visible: boolean) => void];

  /** Selected time (ISO `HH:MM`).  Defaults to the current time. */
  selected?: string;

  /** Callback when user chooses a time. */
  onChange?: (selected: string) => void;

  /** Inline clock or spinner dialog. (iOS supports spinner only.) */
  inputMode?: TimePickerInputMode;

  /** Android-only: show 24-hour clock. */
  is24Hour?: boolean;
}

/* --------------------------------------------------------------
 *  Component
 * ------------------------------------------------------------ */
export const TimePicker: React.FC<TimePickerProps>;
export default TimePicker;