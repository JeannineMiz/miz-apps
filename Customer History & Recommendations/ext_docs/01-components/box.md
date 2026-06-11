---
title: Box
description: >-
  The box component provides a container for layout and visual styling. Use it
  to apply padding, borders, and background colors, or to nest and group other
  components.


  For user interaction, use box in combination with interactive components like
  [button](/docs/api/pos-ui-extensions/2026-01/web-components/actions/button) or
  [clickable](/docs/api/pos-ui-extensions/2026-01/web-components/actions/clickable).
  For scrollable content, use [scroll
  box](/docs/api/pos-ui-extensions/2026-01/web-components/layout-and-structure/scroll-box).
api_version: 2026-01
api_name: pos-ui-extensions
source_url:
  html: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/box
  md: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/box.md
---

# Box

The box component provides a container for layout and visual styling. Use it to apply padding, borders, and background colors, or to nest and group other components.

For user interaction, use box in combination with interactive components like [button](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/web-components/actions/button) or [clickable](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/web-components/actions/clickable). For scrollable content, use [scroll box](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/web-components/layout-and-structure/scroll-box).

#### Use cases

* **Spacing control:** Create consistent spacing and padding around content groups.
* **Structured layouts:** Build layouts by nesting components within Box containers.
* **Responsive sizing:** Apply sizing that adapts to different screen sizes and orientations.
* **Visual grouping:** Group related interface elements with consistent boundaries.

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

Configure the following properties on the box component.

* **blockSize**

  **SizeUnitsOrAuto**

  **Default: 'auto'**

  Adjust the block size.

* **id**

  **string**

  A unique identifier for the element.

* **inlineSize**

  **SizeUnitsOrAuto**

  **Default: 'auto'**

  Adjust the inline size.

* **maxBlockSize**

  **SizeUnitsOrNone**

  **Default: 'none'**

  Adjust the maximum block size.

* **maxInlineSize**

  **SizeUnitsOrNone**

  **Default: 'none'**

  Adjust the maximum inline size.

* **minBlockSize**

  **SizeUnits**

  **Default: '0'**

  Adjust the minimum block size.

* **minInlineSize**

  **SizeUnits**

  **Default: '0'**

  Adjust the minimum inline size.

* **padding**

  **MaybeAllValuesShorthandProperty\<PaddingKeyword>**

  **Default: 'none'**

  Adjust the padding of all edges.

  [1-to-4-value syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#edges_of_a_box) is supported. Note that, contrary to the CSS, it uses flow-relative values and the order is:

  * 4 values: `block-start inline-end block-end inline-start`
  * 3 values: `block-start inline block-end`
  * 2 values: `block inline`

  For example:

  * `large` means block-start, inline-end, block-end and inline-start paddings are `large`.
  * `large none` means block-start and block-end paddings are `large`, inline-start and inline-end paddings are `none`.
  * `large none large` means block-start padding is `large`, inline-end padding is `none`, block-end padding is `large` and inline-start padding is `none`.
  * `large none large small` means block-start padding is `large`, inline-end padding is `none`, block-end padding is `large` and inline-start padding is `small`.

  A padding value of `auto` will use the default padding for the closest container that has had its usual padding removed.

* **paddingBlock**

  **'' | MaybeTwoValuesShorthandProperty\<PaddingKeyword>**

  **Default: '' - meaning no override**

  Adjust the block-padding.

  * `large none` means block-start padding is `large`, block-end padding is `none`.

  This overrides the block value of `padding`.

* **paddingBlockEnd**

  **'' | PaddingKeyword**

  **Default: '' - meaning no override**

  Adjust the block-end padding.

  This overrides the block-end value of `paddingBlock`.

* **paddingBlockStart**

  **'' | PaddingKeyword**

  **Default: '' - meaning no override**

  Adjust the block-start padding.

  This overrides the block-start value of `paddingBlock`.

* **paddingInline**

  **'' | MaybeTwoValuesShorthandProperty\<PaddingKeyword>**

  **Default: '' - meaning no override**

  Adjust the inline padding.

  * `large none` means inline-start padding is `large`, inline-end padding is `none`.

  This overrides the inline value of `padding`.

* **paddingInlineEnd**

  **'' | PaddingKeyword**

  **Default: '' - meaning no override**

  Adjust the inline-end padding.

  This overrides the inline-end value of `paddingInline`.

* **paddingInlineStart**

  **'' | PaddingKeyword**

  **Default: '' - meaning no override**

  Adjust the inline-start padding.

  This overrides the inline-start value of `paddingInline`.

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

### MaybeAllValuesShorthandProperty

```ts
T | `${T} ${T}` | `${T} ${T} ${T}` | `${T} ${T} ${T} ${T}`
```

### PaddingKeyword

```ts
SizeKeyword | 'none'
```

### SizeKeyword

```ts
'small-500' | 'small-400' | 'small-300' | 'small-200' | 'small-100' | 'small' | 'base' | 'large' | 'large-100' | 'large-200' | 'large-300' | 'large-400' | 'large-500'
```

### MaybeTwoValuesShorthandProperty

```ts
T | `${T} ${T}`
```

Examples

## Preview

![](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/box-default-DydB6e8N.png)

### Examples

* #### Create a container with a box

  ##### Description

  Create layouts using a box component. This example demonstrates a basic box container with padding and styling.

  ##### Default

  ```html
  <s-box padding="base">
    <s-text>View shipping settings</s-text>
  </s-box>
  ```

## Best practices

* **Use semantic sizing:** Choose `auto` to adapt to content, percentages for responsive layouts, pixels only for exact dimensions.
* **Use design system padding:** Use predefined padding keywords (`small`, `base`, `large`) for consistency.
* **Use directional padding for asymmetry:** Use `paddingInline` and `paddingBlock` when different spacing is needed on different sides.
* **Understand block vs inline:** `block` refers to content flow direction (usually vertical), `inline` to text direction (usually horizontal).
