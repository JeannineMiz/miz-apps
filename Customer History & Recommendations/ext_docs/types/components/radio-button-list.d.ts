/** ======================================================================
 *  RadioButtonList component – Type Declarations
 *  Docs: docs/01-components/RadioButtonList.md
 *  ====================================================================== */

/**
 * RadioButtonList - Vertical list of radio button options
 * 
 * Nesting Rules:
 * - DOES NOT accept children components (uses items prop)
 * - CAN be nested in: Stack, Section, ScrollView
 * - CANNOT be nested in: Button, Icon, Text, Image, List.Item
 * - Items are defined through props, not as children
 */

import * as React from 'react';

/* --------------------------------------------------------------
 *  Props
 * ------------------------------------------------------------ */
export interface RadioButtonListProps {
  /** Array of option labels shown as radio buttons. */
  items: string[];

  /**
   * Controlled selection handler. Called with the
   * label of the item the user selected.
   */
  onItemSelected: (item: string) => void;

  /**
   * Currently selected item (controlled). If provided,
   * keep this value in sync with `onItemSelected`.
   */
  initialSelectedItem?: string;

  /**
   * If true, the initialSelectedItem is scrolled into view at
   * the top of the list.
   */
  initialOffsetToShowSelectedItem?: boolean;
}

/* --------------------------------------------------------------
 *  Component
 * ------------------------------------------------------------ */
export const RadioButtonList: React.FC<RadioButtonListProps>;
export default RadioButtonList;