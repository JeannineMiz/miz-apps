/** ======================================================================
 *  Dialog component – Type Declarations
 *  Docs: docs/01-components/Dialog.md
 *  ====================================================================== */

/**
 * Dialog - Modal popup for confirmations and important messages
 * 
 * Nesting Rules:
 * - CAN contain: Text content via props (content, title)
 * - SHOULD be used in response to API calls (not directly in JSX)
 * - CANNOT be nested inside components
 * - Best practice: Invoke via dialog API, not rendered directly
 */

import * as React from 'react';

/* --------------------------------------------------------------
 *  Dialog type / variant
 * ------------------------------------------------------------ */
export type DialogType =
  | 'confirmation'
  | 'alert'
  | 'error'
  | 'information';

/* --------------------------------------------------------------
 *  Props
 * ------------------------------------------------------------ */
export interface DialogProps {
  /** Title text at the top of the dialog. */
  title: string;

  /** Body text (optional). */
  content?: string;

  /** Primary button text. */
  actionText: string;

  /** Callback when primary action pressed. */
  onAction: () => void;

  /** Control visibility. */
  isVisible: boolean;

  /** Visual / semantic style. */
  type?: DialogType;

  /** Secondary button text. */
  secondaryActionText?: string;

  /** Show secondary action (default: false unless text provided). */
  showSecondaryAction?: boolean;

  /** Callback when secondary action pressed. */
  onSecondaryAction?: () => void;
}

/* --------------------------------------------------------------
 *  Component
 * ------------------------------------------------------------ */
export const Dialog: React.FC<DialogProps>;
export default Dialog;