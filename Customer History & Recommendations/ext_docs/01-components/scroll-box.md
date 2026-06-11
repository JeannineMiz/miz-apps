---
title: Scroll box
description: >-
  The scroll box component creates a scrollable area for content that exceeds
  container bounds. Use it to display large amounts of content within
  constrained spaces while maintaining usability.


  The component creates a defined scrollable area with customizable dimensions
  and scroll behavior.
api_version: 2026-01
api_name: pos-ui-extensions
source_url:
  html: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/scroll-box
  md: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/scroll-box.md
---

# Scroll box

The scroll box component creates a scrollable area for content that exceeds container bounds. Use it to display large amounts of content within constrained spaces while maintaining usability.

The component creates a defined scrollable area with customizable dimensions and scroll behavior.

#### Use cases

* **Long lists:** Display lists of items or data that exceed available screen space.
* **Constrained layouts:** Create scrollable areas within modals where fixed dimensions are required.
* **Dynamic content:** Handle content that varies in length, like product lists or search results.
* **Overflow handling:** Contain overflow content without disrupting the overall page layout.

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

Configure the following properties on the scroll box component.

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

![](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/scrollbox-default-Mw9pDTuZ.png)

### Examples

* #### Create a scrollable content area

  ##### Description

  Create scrollable content areas using a scroll box component for content that exceeds container bounds. This example shows a basic scrollable area with customizable dimensions.

  ##### Default

  ```html
  <s-scroll-box>
    <s-choice-list>
      <s-choice value="true-twin">True Twin board</s-choice>
      <s-choice value="directional">Directional board</s-choice>
      <s-choice value="volume">Volume shifted board</s-choice>
      <s-choice value="asymmetrical">Asymmetrical board</s-choice>
    </s-choice-list>
  </s-scroll-box>
  ```

## Best practices

* **Set clear dimensions:** Use percentage values for responsive layouts or pixels for exact dimensions.
* **Use for appropriate content:** Reserve scroll box for long lists or dynamic content that genuinely needs scrolling, not short content that fits within available space.
