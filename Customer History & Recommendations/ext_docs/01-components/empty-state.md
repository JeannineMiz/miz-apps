---
title: Empty state
description: >-
  The empty state component displays a placeholder view when there is no content
  to show. Use it to guide users on what to do next, such as adding new items or
  performing actions to populate the view.
api_version: 2026-01
api_name: pos-ui-extensions
source_url:
  html: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/empty-state
  md: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/empty-state.md
---

# Empty state

The empty state component displays a placeholder view when there is no content to show. Use it to guide users on what to do next, such as adding new items or performing actions to populate the view.

#### Use cases

* **No results:** Display a helpful message when search queries or filters return no matching items.
* **Empty lists:** Guide users to add items when product lists, customer lists, or order histories are empty.
* **First-time setup:** Provide onboarding guidance when a feature is used for the first time.
* **No data available:** Indicate when data is unavailable and suggest actions to populate the view.

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

Configure the following properties on the empty state component.

* **heading**

  **string**

  The heading of the empty state.

* **subheading**

  **string**

  The subheading of the empty state.

## Slots

The empty state component supports slots for adding graphics and actions. Learn more about [using slots](https://shopify.dev/docs/api/polaris/using-polaris-web-components#slots).

* **graphic**

  **HTMLElement**

  The graphic to display in the empty state. The only supported components is Icon, with a type of `alert-circle`, `search`, `info`, or `circle-info`.

* **primary-action**

  **HTMLElement**

  The primary action to perform, provided as a button or link type element.

* **secondary-actions**

  **HTMLElement**

  The secondary actions to perform, provided as button or link type elements.

Examples

## Preview

![](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2026-01/emptystate-default-Cg0jEImL.png)

### Examples

* #### Create a generic empty state

  ##### Description

  Create layouts using an empty state component. This example demonstrates a basic empty state container.

  ##### Default

  ```html
  <s-empty-state heading="Empty state title" subheading="Supporting copy">
    <s-icon slot="graphic" type="info" />
    <s-button slot="primary-action">Primary action</s-button>
  </s-empty-state>
  ```
