/** ======================================================================
 *  CameraScanner component – Type Declarations
 *  Docs: docs/01-components/CameraScanner.md
 *  ====================================================================== */

/**
 * CameraScanner - Camera view for scanning barcodes/QR codes
 * 
 * Nesting Rules:
 * - DOES NOT accept children components
 * - CAN be nested in: Stack, ScrollView, Screen
 * - CANNOT be nested in: Button, Icon, Text, Image, List.Item
 * - CANNOT contain: Other UI components
 * - Best practice: Use as a primary view in a dedicated screen
 */

import * as React from 'react';
import {BannerVariant} from './banner';

/* --------------------------------------------------------------
 *  Banner overlay props
 * ------------------------------------------------------------ */
export interface CameraScannerBannerProps {
  /** Title text displayed inside the banner. */
  title: string;
  /** Visual / semantic style of the banner. */
  variant: BannerVariant;
  /** Whether the banner is visible. */
  visible: boolean;
}

/* --------------------------------------------------------------
 *  CameraScanner props
 * ------------------------------------------------------------ */
export interface CameraScannerProps {
  /** Optional banner shown over the camera feed. */
  bannerProps?: CameraScannerBannerProps;
}

/* --------------------------------------------------------------
 *  Component
 * ------------------------------------------------------------ */
export const CameraScanner: React.FC<CameraScannerProps>;
export default CameraScanner;