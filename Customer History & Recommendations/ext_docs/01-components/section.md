---
title: Section
description: >-
  The section component groups related content into clearly-defined thematic
  areas. Use it to organize content and provide clear navigation landmarks.


  The component manages heading levels automatically, ensuring nested sections
  maintain proper semantic structure. Only one secondary action button is
  supported for each section.
api_version: 2026-01
api_name: pos-ui-extensions
source_url:
  html: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/section
  md: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/section.md
---

# Section

The section component groups related content into clearly-defined thematic areas. Use it to organize content and provide clear navigation landmarks.

The component manages heading levels automatically, ensuring nested sections maintain proper semantic structure. Only one secondary action button is supported for each section.

#### Use cases

* **Content grouping:** Organize forms or interfaces into logical groups with clear headings.
* **Navigation support:** Group related settings or information into distinct scannable areas.
* **Contextual actions:** Provide actions through the secondary actions slot, like edit or configure buttons.

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

Configure the following properties on the section component.

* **heading**

  **string**

  A title that describes the content of the section.

  If omitted, and no secondaryActions are provided, the section will be rendered without a header.

* **id**

  **string**

  A unique identifier for the element.

## Slots

The section component supports slots for additional content placement within the section. Learn more about [using slots](https://shopify.dev/docs/api/polaris/using-polaris-web-components#slots).

* **secondary-actions**

  **HTMLElement**

  Button element to display in the section heading. A single button is supported.

Examples

## Preview

![](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/section-default-CfOcmLim.png)

### Examples

* #### Group related content into sections

  ##### Description

  Group related content using a section component. This example shows a basic section with a heading and content area.

  ##### Default

  ```html
  <s-section heading="Select product category">
    <s-button slot="secondary-actions">Edit</s-button>
    <s-choice-list>
      <s-choice value="snowboards">Snowboards</s-choice>
      <s-choice value="jackets">Jackets</s-choice>
      <s-choice value="label">Label</s-choice>
    </s-choice-list>
  </s-section>
  ```

## Best practices

* **Write descriptive headings:** Provide clear heading text that represents the section's content.
* **Let heading levels adjust automatically:** Nested sections automatically adjust heading levels for proper semantic structure.
* **Place relevant secondary actions:** Use the secondary-actions slot for actions that apply to the entire section, like "Edit Settings" or "Add Item."
