/** ======================================================================
 *  QRCode component – Type Declarations
 *  Docs: docs/01-components/QRCode.md
 *  ====================================================================== */

/**
 * QRCode - Displays a QR code from URL or text content
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
export interface QRCodeProps {
  /** Text or URL encoded into the QR code. */
  value: string;
}

/* --------------------------------------------------------------
 *  Component
 * ------------------------------------------------------------ */
export const QRCode: React.FC<QRCodeProps>;
export default QRCode;