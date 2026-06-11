---
title: Divider
description: >-
  The divider component creates visual separation between content sections by
  rendering a horizontal or vertical line. Use it to organize information and
  improve content hierarchy.
api_version: 2026-01
api_name: pos-ui-extensions
source_url:
  html: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/divider
  md: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/divider.md
---

# Divider

The divider component creates visual separation between content sections by rendering a horizontal or vertical line. Use it to organize information and improve content hierarchy.

#### Use cases

* **Content separation:** Separate distinct content sections within forms, lists, or panels.
* **Visual breaks:** Create breaks between groups of related actions or controls.
* **Information boundaries:** Establish clear boundaries between different types of information.
* **Hierarchy:** Improve content hierarchy by dividing complex interfaces into digestible sections.

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

Configure the following properties on the divider component.

* **direction**

  **'inline' | 'block'**

  **Default: 'inline'**

  Specify the direction of the divider. This uses [logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values).

* **id**

  **string**

  A unique identifier for the element.

Examples

## Preview

![](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/divider-default-CyGQrUtw.png)

### Examples

* #### Separate content sections with a divider

  ##### Description

  Separate content sections using a divider component. This example shows a basic horizontal divider.

  ##### Default

  ```HTML
  <s-divider />
  ```

## Best practices

* **Choose appropriate direction:** Use `inline` (horizontal) for most content separation. Use `block` (vertical) for columns or sidebar boundaries.
* **Avoid overuse:** Use dividers strategically. In dense interfaces, consider whitespace or typography hierarchy instead.
