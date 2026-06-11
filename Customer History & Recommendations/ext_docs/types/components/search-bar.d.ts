/** ======================================================================
 *  SearchBar component – Type Declarations
 *  Docs: docs/01-components/SearchBar.md
 *  ====================================================================== */

/**
 * SearchBar - Search input field with clear button
 * 
 * Nesting Rules:
 * - DOES NOT accept children components
 * - CAN be nested in: Stack, Section, ScrollView
 * - CANNOT be nested in: Button, Icon, Text, Image, List.Item
 * - CANNOT contain: Other UI components
 */

import * as React from 'react';

/* --------------------------------------------------------------
 *  Props
 * ------------------------------------------------------------ */
export interface SearchBarProps {
  /** Mandatory callback when user submits search. */
  onSearch: (value: string) => void;

  /** Live callback on every keystroke. */
  onTextChange?: (value: string) => void;

  /** Placeholder when input is empty. */
  placeholder?: string;

  /** Initial text value. */
  initialValue?: string;

  /** Allow editing (default false). */
  editable?: boolean;

  /** Focus callback. */
  onFocus?: () => void;
}

/* --------------------------------------------------------------
 *  Component
 * ------------------------------------------------------------ */
export const SearchBar: React.FC<SearchBarProps>;
export default SearchBar;