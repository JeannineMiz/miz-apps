---
title: Embed
description: >-
  The embed component displays a preview of printable content from a specified
  source URL. Use it to show users what will be printed before triggering the
  actual print operation.


  Embed works in conjunction with the Print API to provide complete print
  functionality from preview to execution.


  Supported document types:


  - **HTML documents** (`.html`, `.htm`) - Best printing experience with full
  CSS styling, embedded images, and complex layouts. Use for receipts, invoices,
  and formatted reports.


  - **Text files** (`.txt`, `.csv`) - Plain text with basic content and tabular
  data support. Use for simple receipts and data exports.


  - **PDF files** (`.pdf`) - Behavior varies by platform: prints directly on
  iOS/desktop, but downloads to external viewer on Android. Use for complex
  documents and compliance requirements.


  [Learn how to build a print extension in
  POS](/docs/apps/build/pos/build-print-extension).
api_version: 2026-01
api_name: pos-ui-extensions
source_url:
  html: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/media-and-visuals/embed
  md: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/media-and-visuals/embed.md
---

# Embed

The embed component displays a preview of printable content from a specified source URL. Use it to show users what will be printed before triggering the actual print operation.

Embed works in conjunction with the Print API to provide complete print functionality from preview to execution.

Supported document types:

* **HTML documents** (`.html`, `.htm`) - Best printing experience with full CSS styling, embedded images, and complex layouts. Use for receipts, invoices, and formatted reports.

* **Text files** (`.txt`, `.csv`) - Plain text with basic content and tabular data support. Use for simple receipts and data exports.

* **PDF files** (`.pdf`) - Behavior varies by platform: prints directly on iOS/desktop, but downloads to external viewer on Android. Use for complex documents and compliance requirements.

[Learn how to build a print extension in POS](https://shopify.dev/docs/apps/build/pos/build-print-extension).

#### Use cases

* **Print preview:** Display a preview of receipts, invoices, or labels before triggering the actual print operation.
* **Receipt formatting:** Show formatted HTML receipts with branding, styling, and embedded images for merchant review.
* **Document display:** Present PDF documents like compliance forms or detailed invoices within the POS interface.
* **Data exports:** Preview plain text or CSV exports before printing, such as inventory counts or sales reports.

### Support Targets (10)

### Supported targets

* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/customer-details#customer-details-action-modal-)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​exchange.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/post-exchange#post-exchange-action-modal-)
* [pos.​home.​modal.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/home-screen#home-screen-action-modal-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/order-details#order-details-action-modal-)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/product-details#product-details-action-modal-)
* [pos.​purchase.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/post-purchase#post-purchase-action-modal-)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/register-details#register-details-action-modal-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/post-return#post-return-action-modal-)

## Properties

Configure the following properties on the embed component. This component must be a direct child of the screen component.

* **accessibilityLabel**

  **string**

  A label that describes the purpose or contents of the embed. It will be read to users using assistive technologies such as screen readers.

* **blockSize**

  **MaybeResponsive\<SizeUnitsOrAuto>**

  **Default: 'auto'**

  Adjust the block size.

* **id**

  **string**

  A unique identifier for the element.

* **inlineSize**

  **MaybeResponsive\<SizeUnitsOrAuto>**

  **Default: 'auto'**

  Adjust the inline size.

* **maxBlockSize**

  **MaybeResponsive\<SizeUnitsOrNone>**

  **Default: 'none'**

  Adjust the maximum block size.

* **maxInlineSize**

  **MaybeResponsive\<SizeUnitsOrNone>**

  **Default: 'none'**

  Adjust the maximum inline size.

* **minBlockSize**

  **MaybeResponsive\<SizeUnits>**

  **Default: '0'**

  Adjust the minimum block size.

* **minInlineSize**

  **MaybeResponsive\<SizeUnits>**

  **Default: '0'**

  Adjust the minimum inline size.

* **src**

  **string**

  The source of the file to preview.

  The value must be either:

  * A relative path that will be appended to your app's `application_url`.
  * A full URL to your app's backend that will be used to return the file.

  Supported file types:

  * HTML files
  * Text files
  * PDF files

* **type**

  **'text/html' | 'text/plain' | 'application/pdf'**

  **Default: 'text/html'**

  The content type of the file to display.

### MaybeResponsive

```ts
T | `@container${string}`
```

### SizeUnitsOrAuto

```ts
SizeUnits | 'auto'
```

### SizeUnits

```ts
`${number}px` | `${number}%` | `0`
```

### SizeUnitsOrNone

```ts
SizeUnits | 'none'
```

Examples

## Preview

![](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2026-01/embed-default-Dmvcd9hD.png)

### Examples

* #### Preview printable content

  ##### Description

  Display a preview of printable content before triggering the print operation. This example shows how to use embed with HTML documents, PDFs, or text files, supporting various document formats with proper rendering for receipts, invoices, and formatted reports.

  ##### Default

  ```html
  <s-embed
    inlineSize="400px"
    blockSize="600px"
    type="application/pdf"
    src="print-preview.pdf"
  />
  ```

## Best practices

* **Design print-optimized content:** Structure your printable content with print-specific CSS media queries, appropriate page breaks, and formatting that works well on physical paper. Consider printer capabilities and paper sizes commonly used in POS environments.
* **Implement proper error handling:** Handle cases where the source URL is unavailable, the document format is unsupported, or network issues prevent content loading. Provide clear feedback to users when preview or printing fails.
* **Consider platform-specific limitations:** Be aware that PDF files on Android devices require external applications for printing. Design your workflow to handle this gracefully, potentially offering alternative formats or clear instructions for Android users.
* **Optimize source URL management:** Use relative paths when possible for internal app resources to simplify URL management and improve performance. Reserve full URLs for external resources or when you need complete control over the endpoint.
* **Provide clear print workflows:** Combine Embed with appropriate UI controls like print buttons, allowing users to review content before committing to print. Consider implementing print confirmation dialogs for important or expensive print operations.

## Limitations

* Embed must be a direct child of the screen component and can't be nested inside any other component—this structural requirement ensures proper preview rendering and print functionality.
* The component requires network access to fetch content from the specified source URL—offline functionality isn't supported for remote content.
* Content is displayed as-is from the source—real-time content modification or editing within the preview isn't supported.
* PDF printing on Android devices requires external applications—the component can't handle PDF printing natively on all platforms, which may affect user experience consistency across different POS devices.
