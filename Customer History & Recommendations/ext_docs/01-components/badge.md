---
title: Badge
description: >-
  The badge component uses color and text to communicate status information for
  orders, products, customers, and other business data. Use badges to create
  visual hierarchy and help merchants quickly identify important information or
  status changes.


  Badges aren't interactive elements. They display information but don't respond
  to user interactions like clicks or taps.
api_version: 2026-01
api_name: pos-ui-extensions
source_url:
  html: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/feedback-and-status-indicators/badge
  md: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/feedback-and-status-indicators/badge.md
---

# Badge

The badge component uses color and text to communicate status information for orders, products, customers, and other business data. Use badges to create visual hierarchy and help merchants quickly identify important information or status changes.

Badges aren't interactive elements. They display information but don't respond to user interactions like clicks or taps.

#### Use cases

* **Order status:** Display status indicators like "Paid," "Pending," or "Refunded" for quick visibility.
* **Inventory states:** Show availability like "In Stock," "Low Stock," or "Out of Stock."
* **Customer status:** Indicate account status like "VIP," "New Customer," or "Loyalty Member."
* **Labels:** Categorize items with labels like "Featured," "Sale," or "New."

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

Configure the following properties on the badge component.

* **id**

  **string**

  A unique identifier for the element.

* **tone**

  **| 'auto' | 'neutral' | 'info' | 'success' | 'caution' | 'warning' | 'critical'**

  **Default: 'auto'**

  Sets the tone of the badge, based on the intention of the information being conveyed.

Examples

## Preview

![](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/badge-default-DVziMZIg.png)

### Examples

* #### Display status information with a badge

  ##### Description

  Display status information using a badge component with customizable tone and content. This example shows a basic badge with a tone property to indicate status through color.

  ##### Default

  ```HTML
  <s-badge tone="neutral">Paid</s-badge>
  <s-badge tone="success">Active</s-badge>
  <s-badge tone="info">Draft</s-badge>
  <s-badge tone="warning">On hold</s-badge>
  <s-badge tone="critical">Action required</s-badge>
  ```

## Best practices

* **Apply appropriate tones:** Use `success` for positive states, `critical` for urgent issues, `warning` for attention-needed states, `info` for neutral information.
* **Keep text brief:** Use single words or short phrases. Avoid lengthy descriptions that don't fit the compact design.
* **Position near related content:** Place badges next to the items they describe for clear associations.
* **Use for status, not actions:** Badges display information only. For interactive elements, use buttons or clickable components.

## Limitations

Very long text content may be truncated or cause layout issues depending on the container and screen size.
