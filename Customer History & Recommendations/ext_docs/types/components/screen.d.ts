/** ======================================================================
 *  Screen component – Type Declarations
 *  Docs: docs/01-components/Screen.md
 *  ====================================================================== */

/**
 * Screen - Container for a single screen in the navigation stack
 * 
 * Nesting Rules:
 * - CAN contain: ScrollView, Stack, or other content components
 * - MUST be a direct child of Navigator
 * - CANNOT be nested inside any other components
 * - Best practice: Wrap content in ScrollView for proper scrolling
 */

import * as React from 'react';

/* --------------------------------------------------------------
 *  Helper types
 * ------------------------------------------------------------ */
export interface ScreenPresentationProps {
  /** If true, present screen as a bottom sheet. */
  sheet?: boolean;
}

export interface SecondaryActionProps {
  /** Button text. */
  text: string;
  /** Press handler. */
  onPress: () => void;
  /** Disable the button. */
  isEnabled?: boolean;
}

/* --------------------------------------------------------------
 *  Props
 * ------------------------------------------------------------ */
export interface ScreenProps {
  /** Unique name for navigation. */
  name: string;

  /** Header title. */
  title: string;

  /** Show loading spinner. */
  isLoading?: boolean;

  /** Called when screen becomes active. */
  onNavigate?: () => void;

  /** Called after user navigates away (unmount). */
  onNavigateBack?: () => void;

  /** Params delivered from navigate(name, params). */
  onReceiveParams?: (params: any) => void;

  /** Override default back action. Runs on mount. */
  overrideNavigateBack?: () => void;

  /** Presentation style (e.g., bottom sheet). */
  presentation?: ScreenPresentationProps;

  /** Secondary header button. */
  secondaryAction?: SecondaryActionProps;

  /** Screen children. */
  children?: React.ReactNode;
}

/* --------------------------------------------------------------
 *  Component
 * ------------------------------------------------------------ */
export const Screen: React.FC<ScreenProps>;
export default Screen;