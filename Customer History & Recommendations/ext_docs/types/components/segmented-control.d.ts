/** ======================================================================
 *  SegmentedControl component – Type Declarations
 *  Docs: docs/01-components/SegmentedControl.md
 *  ====================================================================== */

/**
 * SegmentedControl - Horizontal tab-like selector of options
 * 
 * Nesting Rules:
 * - DOES NOT accept children components (uses items prop)
 * - CAN be nested in: Stack, Section, ScrollView
 * - CANNOT be nested in: Button, Icon, Text, Image, List.Item
 * - Segments are defined through props, not as children
 */

import * as React from 'react';

/* ------------------------------------------------------------------ */
/*  Segment object                                                     */
/* ------------------------------------------------------------------ */
export interface Segment {
  /** Unique ID for the segment. */
  id: string;
  /** Label shown inside the segment. */
  label: string;
  /** Disable the segment if true. */
  disabled: boolean;
}

/* ------------------------------------------------------------------ */
/*  Props                                                             */
/* ------------------------------------------------------------------ */
export interface SegmentedControlProps {
  /** Array of segments to render. */
  segments: Segment[];

  /** ID of the currently-selected segment (controlled). */
  selected: string;

  /** Called when the user selects a segment. */
  onSelect: (id: string) => void;
}

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */
export const SegmentedControl: React.FC<SegmentedControlProps>;
export default SegmentedControl;