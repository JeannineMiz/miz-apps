/** ======================================================================
 *  Spacing constants – Type Declarations
 *  Docs: docs/01-components/Spacing.md
 *  ====================================================================== */

/**
 * Spacing - Token constants for consistent spacing
 * 
 * Nesting Rules:
 * - NOT a component, used as a utility for spacing constants
 * - Applied through props on Stack, Box, and other components
 * - Reference for spacing values throughout the application
 */

/* --------------------------------------------------------------
 *  Token exports
 * ------------------------------------------------------------ */
export type VerticalSpacing =
  | 'HalfPoint'
  | 'ExtraSmall'
  | 'Small'
  | 'Medium'
  | 'Large'
  | 'ExtraLarge';

export type HorizontalSpacing =
  | 'HalfPoint'
  | 'ExtraSmall'
  | 'Small'
  | 'Medium'
  | 'Large'
  | 'ExtraLarge'
  | 'ExtraExtraLarge';
