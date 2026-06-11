---
title: POS block
description: >-
  The POS block component creates a container to place content with an action
  button. Use it to display structured content within POS block targets.


  The component provides a standardized layout specifically designed for content
  blocks within POS detail views, with consistent padding, spacing, and optional
  action buttons.
api_version: 2026-01
api_name: pos-ui-extensions
source_url:
  html: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/pos-block
  md: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/pos-block.md
---

# POS block

The POS block component creates a container to place content with an action button. Use it to display structured content within POS block targets.

The component provides a standardized layout specifically designed for content blocks within POS detail views, with consistent padding, spacing, and optional action buttons.

#### Use cases

* **Customer information:** Display customer info, loyalty status, or account details.
* **Order summaries:** Show order details, transaction info, or fulfillment status.
* **Product recommendations:** Present recommendations, inventory status, or related items.
* **Contextual content:** Provide actions and information that enhance core POS functionality.

### Support Targets (18)

### Supported targets

* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/customer-details#customer-details-action-modal-)
* [pos.​customer-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/customer-details#customer-details-targets)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​draft-order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/draft-order-details#draft-order-details-targets)
* [pos.​exchange.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/post-exchange#post-exchange-action-modal-)
* [pos.​exchange.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/post-exchange#post-exchange-targets)
* [pos.​home.​modal.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/home-screen#home-screen-action-modal-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/order-details#order-details-action-modal-)
* [pos.​order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/order-details#order-details-targets)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/product-details#product-details-action-modal-)
* [pos.​product-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/product-details#product-details-targets)
* [pos.​purchase.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/post-purchase#post-purchase-action-modal-)
* [pos.​purchase.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/post-purchase#post-purchase-targets)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/register-details#register-details-action-modal-)
* [pos.​register-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/register-details#register-details-block-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/post-return#post-return-action-modal-)
* [pos.​return.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/post-return#post-return-targets)

## Properties

Configure the following properties on the POS block component.

* **heading**

  **string**

  The heading to display within the POSBlock.

  If not provided, the description of the extension will be used when a heading is appropriate.

* **id**

  **string**

  A unique identifier for the element.

## QR Code

The POS block component renders a QR code when the block is used within a receipt target.

* **content**

  **string**

  The content to be encoded in the QR code, which can be any string such as a URL, email address, plain text, etc. Specific string formatting can trigger actions on the user's device when scanned, like opening geolocation coordinates on a map, opening a preferred app or app store entry, preparing an email, text message, and more.

* **id**

  **string**

  A unique identifier for the element.

## Slots

The POS block component supports slots for additional content placement within the block. Learn more about [using slots](https://shopify.dev/docs/api/polaris/using-polaris-web-components#slots).

* **secondary-actions**

  **HTMLElement**

  The secondary actions to perform, provided as button or link type elements.

Examples

## Preview

![](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/pos-block-default-oPm9hnKz.png)

### Examples

* #### Create a content block with an action button

  ##### Description

  Create structured content blocks using a POS block component with optional action buttons. This example shows a basic block with content and an action button.

  ##### Default

  ```html
  <s-pos-block>
    <s-box paddingBlock="base">
      <s-text>Customer Loyalty</s-text>
    </s-box>
  </s-pos-block>
  ```

## Best practices

* **Provide descriptive headings:** If you don't specify a heading, the system uses your extension's description, so ensure it's meaningful and concise.
* **Place important actions in secondary-actions slot:** Include only the most relevant actions directly related to your block's content.
* **Limit secondary actions:** To maintain clean, focused interfaces that don't overwhelm the existing POS workflow, use only one secondary action element in each block.
