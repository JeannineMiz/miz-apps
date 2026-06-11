/** ======================================================================
 *  PrintPreview component – Type Declarations
 *  Docs: docs/01-components/PrintPreview.md
 *  ====================================================================== */

/**
 * PrintPreview - Preview of printed receipt or document
 * 
 * Nesting Rules:
 * - DOES NOT accept children components (content via HTML prop)
 * - CAN be nested in: Stack, ScrollView, Screen
 * - CANNOT be nested in: Button, Icon, Text, Image, List.Item
 * - CANNOT contain: Other UI components
 * - Content provided as HTML string through props
 */

import * as React from 'react';

/* --------------------------------------------------------------
 *  Props
 * ------------------------------------------------------------ */
export interface PrintPreviewProps {
  /**
   * Path or URL of the document to preview.
   * - Relative paths are appended to your app's `application_url`
   * - Absolute URLs can point to your own backend
   */
  src: string;
}

/* --------------------------------------------------------------
 *  Component
 * ------------------------------------------------------------ */
export const PrintPreview: React.FC<PrintPreviewProps>;
export default PrintPreview;