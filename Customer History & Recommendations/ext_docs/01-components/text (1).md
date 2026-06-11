---
title: Text
description: >-
  The text component displays text with specific visual styles or tones. Use it
  to present content with appropriate emphasis, hierarchy, or tone while
  maintaining semantic meaning.


  Text on mobile surfaces is blockish, rather than inline.
api_version: 2026-01
api_name: pos-ui-extensions
source_url:
  html: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/text
  md: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/text.md
---

# Text

The text component displays text with specific visual styles or tones. Use it to present content with appropriate emphasis, hierarchy, or tone while maintaining semantic meaning.

Text on mobile surfaces is blockish, rather than inline.

#### Use cases

* **Body content:** Display text, labels, and descriptions with appropriate visual hierarchy.
* **Status information:** Present alerts or notifications using tone to convey urgency or importance.
* **Emphasis:** Create emphasized text elements using type variations like strong or small.
* **Nested content:** Support nested text elements for complex formatting within a single block.

### Support Targets (20)

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
* [pos.​receipt-footer.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/receipts#receipt-block-footer-)
* [pos.​receipt-header.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/receipts#receipts-targets)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/register-details#register-details-action-modal-)
* [pos.​register-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/register-details#register-details-block-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/post-return#post-return-action-modal-)
* [pos.​return.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/post-return#post-return-targets)

## Properties

Configure the following properties on the text component.

* **color**

  **ColorKeyword**

  **Default: 'base'**

  Modify the color to be more or less intense.

* **id**

  **string**

  A unique identifier for the element.

* **tone**

  **| 'auto' | 'neutral' | 'info' | 'success' | 'caution' | 'warning' | 'critical'**

  **Default: 'auto'**

  Sets the tone of the component, based on the intention of the information being conveyed.

* **type**

  **'strong' | 'small' | 'generic'**

  **Default: 'generic'**

  Provide semantic meaning and default styling to the text.

  Other presentation properties on Text override the default styling.

### ColorKeyword

```ts
'subdued' | 'base' | 'strong'
```

Examples

## Preview

![](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/text-default-CzKWIT1t.png)

### Examples

* #### Display text with visual styles

  ##### Description

  Display text content using a text component with customizable visual styles and tones. This example shows basic text with appropriate emphasis and hierarchy.

  ##### Default

  ```html
  <s-text>
    <s-text type="strong">Name:</s-text> Jane Doe
  </s-text>
  ```

## Best practices

* **Choose semantic types:** Use `strong` for emphasis, `small` for secondary info, `generic` for standard text.
* **Apply appropriate tones:** Use `success` for positive outcomes, `warning` or `critical` for alerts, `info` for helpful context, `auto` for neutral content.
* **Balance color intensity:** Use `strong` for emphasis, `base` for readability, `subdued` for secondary info.
* **Nest for mixed formatting:** Nest text components when you need multiple styles within one text block.
* **Use stack for icons and badges:** When combining text with icons or badges, use stack with direction="inline" instead of nesting components inside text.

## Limitations

Complex rich text formatting isn't supported—use multiple text components or nested text elements for varied formatting needs.

Nesting icon or badge components inside text isn't supported due to React Native alignment limitations—use stack with direction="inline" and alignItems="center" instead to properly align icons and badges with text.
