/** ======================================================================
 *  Print API – Type Declarations
 *  Docs: docs/02-apis/PrintApi.md
 *  ====================================================================== */

/**
 * Interface for handling print operations through the device’s
 * native print dialog (AirPrint, Android System Print, etc.).
 */
export interface PrintApi {
    /**
     * Open the print dialog for a document.
     *
     * @param src Relative path (appended to application_url) **or**
     *            absolute URL that returns the document to print.
     *            Supports HTML, text, images (PNG/JPEG…), PDF.
     */
    print(src: string): Promise<void>;
  }
  
  /** Singleton instance injected by the POS host runtime. */
  export const print: PrintApi;