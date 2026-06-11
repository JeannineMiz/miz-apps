---
title: Stack
description: >-
  The stack component organizes elements along the block (vertical) or inline
  (horizontal) axis. Use it to structure layouts and control spacing between
  elements.


  The component automatically manages spacing through gap properties and
  supports flexible alignment and wrapping behavior. Complex grid-like layouts
  may require multiple nested stack components or alternative layout approaches.
api_version: 2026-01
api_name: pos-ui-extensions
source_url:
  html: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/stack
  md: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/stack.md
---

# Stack

The stack component organizes elements along the block (vertical) or inline (horizontal) axis. Use it to structure layouts and control spacing between elements.

The component automatically manages spacing through gap properties and supports flexible alignment and wrapping behavior. Complex grid-like layouts may require multiple nested stack components or alternative layout approaches.

#### Use cases

* **Layout arrangement:** Arrange form elements, buttons, or content in vertical or horizontal layouts.
* **Responsive design:** Create layouts that adapt to different screen sizes and orientations.
* **Spacing control:** Control spacing between elements using gap properties for visual hierarchy.
* **Content alignment:** Align content precisely using `justify` and `align` properties.

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

Configure the following properties on the stack component.

* **alignContent**

  **AlignContentKeyword**

  Aligns the stack along the cross axis.

* **alignItems**

  **AlignItemsKeyword**

  Aligns the stack's children along the cross axis.

* **blockSize**

  **SizeUnitsOrAuto**

  **Default: 'auto'**

  Adjust the block size. **Mobile surfaces:** Avoid using percentage-based sizes. They do not behave as expected when placed within a scrollable container.

* **columnGap**

  **'' | SpacingKeyword**

  **Default: '' - meaning no override**

  Adjust spacing between elements in the inline axis. This overrides the column value of gap.

* **direction**

  **'block' | 'inline'**

  **Default: 'block'**

  Sets how the children are placed within the stack. This uses logical properties.

* **gap**

  **MaybeTwoValuesShorthandProperty\<SpacingKeyword>**

  **Default: 'none'**

  Adjust spacing between elements. A single value applies to both axes. A pair of values (eg large-100 large-500) can be used to set the inline and block axes respectively.

* **id**

  **string**

  A unique identifier for the element.

* **inlineSize**

  **SizeUnitsOrAuto**

  **Default: 'auto'**

  Adjust the inline size.

* **justifyContent**

  **JustifyContentKeyword**

  **Default: 'normal'**

  Aligns the stack along the main axis.

* **maxBlockSize**

  **SizeUnitsOrNone**

  **Default: 'none'**

  Adjust the maximum block size. **Mobile surfaces:** Avoid using percentage-based sizes. They do not behave as expected when placed within a scrollable container.

* **maxInlineSize**

  **SizeUnitsOrNone**

  **Default: 'none'**

  Adjust the maximum inline size. **Mobile surfaces:** Avoid using percentage-based sizes. They do not behave as expected when placed within a scrollable container.

* **minBlockSize**

  **SizeUnits**

  **Default: '0'**

  Adjust the minimum block size. **Mobile surfaces:** Avoid using percentage-based sizes. They do not behave as expected when placed within a scrollable container.

* **minInlineSize**

  **SizeUnits**

  **Default: '0'**

  Adjust the minimum inline size. **Mobile surfaces:** Avoid using percentage-based sizes. They do not behave as expected when placed within a scrollable container.

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

  **MaybeTwoValuesShorthandProperty<'' | PaddingKeyword>**

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

  **MaybeTwoValuesShorthandProperty<'' | PaddingKeyword>**

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

* **rowGap**

  **'' | SpacingKeyword**

  **Default: '' - meaning no override**

  Adjust spacing between elements in the block axis. This overrides the row value of gap.

### AlignContentKeyword

Align content sets the distribution of space between and around content items along a flexbox's cross axis, or a grid or block-level element's block axis.

```ts
'normal' | BaselinePosition | ContentDistribution | OverflowPosition | ContentPosition
```

### BaselinePosition

```ts
'baseline' | 'first baseline' | 'last baseline'
```

### ContentDistribution

```ts
'space-between' | 'space-around' | 'space-evenly' | 'stretch'
```

### OverflowPosition

```ts
`unsafe ${ContentPosition}` | `safe ${ContentPosition}`
```

### ContentPosition

```ts
'center' | 'start' | 'end'
```

### AlignItemsKeyword

Align items sets the align-self value on all direct children as a group.

```ts
'normal' | 'stretch' | BaselinePosition | OverflowPosition | ContentPosition
```

### SizeUnitsOrAuto

```ts
SizeUnits | 'auto'
```

### SizeUnits

```ts
`${number}px` | `${number}%` | `0`
```

### SpacingKeyword

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

### JustifyContentKeyword

Justify content defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.

```ts
'normal' | ContentDistribution | OverflowPosition | ContentPosition
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

Examples

## Preview

![](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/stack-default-B7z12LPO.png)

### Examples

* #### Organize elements with a stack

  ##### Description

  Organize elements using a stack component. This example shows a basic stack with spacing between child elements.

  ##### Default

  ```html
  <s-stack gap="small" direction="inline" justifyContent="center">
    <s-badge tone="neutral">Paid</s-badge>
    <s-badge tone="success">Active</s-badge>
  </s-stack>
  ```

## Best practices

* **Choose appropriate direction:** Use `block` for vertical arrangements like forms. Use `inline` for horizontal arrangements like button groups. Note that inline wraps while block doesn't.
* **Use design system spacing:** Use `SpacingKeyword` values for consistency. Start with `base` and adjust as needed.
* **Apply alignment properties:** Use `justifyContent` for main axis distribution, `alignItems` for cross axis positioning, `alignContent` for extra space distribution.
* **Avoid percentages on mobile:** Don't use percentage-based sizing within scrollable containers on mobile surfaces.
* **Use gap for spacing control:** Use `gap` for uniform spacing, `rowGap` for block axis, `columnGap` for inline axis.
