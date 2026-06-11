---
title: Icon
description: >-
  The icon component displays standardized visual symbols from the POS catalog
  to represent actions, statuses, or categories. Use icons to enhance navigation
  or provide visual context alongside text.


  For interactive icons, wrap them in
  [button](/docs/api/pos-ui-extensions/2026-01/web-components/actions/button) or
  [clickable](/docs/api/pos-ui-extensions/2026-01/web-components/actions/clickable)
  components.
api_version: 2026-01
api_name: pos-ui-extensions
source_url:
  html: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/media-and-visuals/icon
  md: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/media-and-visuals/icon.md
---

# Icon

The icon component displays standardized visual symbols from the POS catalog to represent actions, statuses, or categories. Use icons to enhance navigation or provide visual context alongside text.

For interactive icons, wrap them in [button](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/web-components/actions/button) or [clickable](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/web-components/actions/clickable) components.

#### Use cases

* **Action clarity:** Enhance buttons with visual indicators for actions like save, delete, or navigate.
* **Visual context:** Provide context in lists and cards to identify item types or statuses.
* **Navigation cues:** Create intuitive elements that help merchants understand destinations.
* **System states:** Indicate states like connectivity, battery levels, or processing status.

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

Configure the following properties on the icon component.

* **color**

  **ColorKeyword**

  **Default: 'base'**

  Modify the color to be more or less intense.

* **id**

  **string**

  A unique identifier for the element.

* **size**

  **SizeKeyword**

  **Default: 'base'**

  Adjusts the size of the icon.

* **tone**

  **ToneKeyword**

  **Default: 'auto'**

  Sets the tone of the icon, based on the intention of the information being conveyed.

* **type**

  **SupportedIconNames**

  **Default: ''**

  The type of icon to display.

### ColorKeyword

```ts
'subdued' | 'base' | 'strong'
```

### SizeKeyword

```ts
'small-500' | 'small-400' | 'small-300' | 'small-200' | 'small-100' | 'small' | 'base' | 'large' | 'large-100' | 'large-200' | 'large-300' | 'large-400' | 'large-500'
```

### ToneKeyword

Tone is a property for defining the color treatment of a component. A tone can apply a grouping of colors to a component. For example, critical may have a specific text color and background color. In some cases, like for Banner, the tone may also affect the semantic and accessibility treatment of the component.

```ts
'auto' | 'neutral' | 'info' | 'success' | 'caution' | 'warning' | 'critical' | 'accent' | 'custom'
```

### SupportedIconNames

```ts
'external' | 'alert-circle' | 'apps' | 'arrow-down' | 'arrow-left' | 'arrow-right' | 'arrow-up' | 'backspace' | 'barcode' | 'battery-low' | 'bolt-filled' | 'bullet' | 'camera-flip' | 'caret-down' | 'caret-up' | 'cart' | 'cart-down' | 'cart-filled' | 'cart-send' | 'cart-up' | 'chart-line' | 'chart-vertical' | 'check' | 'check-circle-filled' | 'chevron-down' | 'chevron-left' | 'chevron-right' | 'chevron-up' | 'circle' | 'clipboard-checklist' | 'clock' | 'collection' | 'credit-card' | 'credit-card-reader' | 'delete' | 'delivery' | 'desktop' | 'disabled' | 'disabled-filled' | 'discount' | 'discount-add' | 'discount-automatic' | 'discount-code' | 'discount-remove' | 'drag-handle' | 'drawer' | 'duplicate' | 'edit' | 'email' | 'exchange' | 'flag' | 'gift-card' | 'graduation-hat' | 'grid' | 'hide-filled' | 'home' | 'home-filled' | 'image' | 'images' | 'info' | 'inventory' | 'inventory-edit' | 'inventory-list' | 'inventory-transfer' | 'keyboard-hide' | 'keypad' | 'link' | 'list-bulleted' | 'list-bulleted-filled' | 'live' | 'live-critical' | 'live-none' | 'location' | 'lock' | 'maximize' | 'menu' | 'menu-filled' | 'menu-horizontal' | 'minimize' | 'minus' | 'mobile' | 'money' | 'money-split' | 'note' | 'order' | 'order-draft' | 'order-filled' | 'package' | 'package-cancel' | 'package-reassign' | 'payment' | 'person' | 'person-add' | 'person-filled' | 'phablet' | 'phone-out' | 'play-circle' | 'plus' | 'point-of-sale' | 'point-of-sale-register' | 'print' | 'product' | 'product-filled' | 'profile' | 'question-circle-filled' | 'receipt' | 'refresh' | 'return' | 'scan-qr-code' | 'search' | 'send' | 'settings' | 'shipping-label-cancel' | 'sort' | 'star-circle' | 'star-filled' | 'store' | 'tablet' | 'transaction-fee-add' | 'unlock' | 'variant' | 'view' | 'wallet' | 'x' | 'x-circle'
```

Examples

## Preview

![](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/icon-default-oNjH-9QJ.png)

### Examples

* #### Display icons from the POS catalog

  ##### Description

  Display standardized visual symbols using an icon component from the POS icon catalog. This example shows a basic icon with proper sizing and accessibility.

  ##### Default

  ```html
  <s-icon type="arrow-up" />
  <s-icon type="arrow-down" />
  <s-icon type="arrow-left" />
  <s-icon type="arrow-right" />
  ```

## Best practices

* **Choose recognizable icons:** Use universally recognized symbols like `search`, `cart`, or `settings`. Avoid ambiguous icons.
* **Match size to context:** Use smaller sizes for inline text or secondary actions, `base` for standard elements, larger sizes for primary actions.
* **Apply tones for meaning:** Use `critical` for destructive actions, `warning` for cautions, `success` for confirmations, `auto` or `neutral` for general elements.
* **Pair with text for clarity:** Consider adding text labels, especially for complex or uncommon actions.
* **Use color for hierarchy:** Use `subdued` for secondary elements, `base` for standard visibility, `strong` for emphasis.
