---
title: Clickable
description: >-
  The clickable component makes any content interactive. Use it to add click
  interactions to non-interactive elements while maintaining full control over
  their visual presentation.


  Unlike the
  [button](/docs/api/pos-ui-extensions/2026-01/web-components/actions/button)
  component, clickable doesn't impose visual styling, allowing you to create
  custom interactive elements. You must implement focus indicators and other
  visual cues yourself.
api_version: 2026-01
api_name: pos-ui-extensions
source_url:
  html: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/actions/clickable
  md: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/actions/clickable.md
---

# Clickable

The clickable component makes any content interactive. Use it to add click interactions to non-interactive elements while maintaining full control over their visual presentation.

Unlike the [button](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/web-components/actions/button) component, clickable doesn't impose visual styling, allowing you to create custom interactive elements. You must implement focus indicators and other visual cues yourself.

#### Use cases

* **Interactive cards:** Create custom cards that respond to clicks without button styling.
* **Clickable elements:** Make text, images, or icons clickable while preserving visual appearance.
* **Complex layouts:** Build interactive layouts with multiple clickable regions.
* **Custom interfaces:** Implement selection interfaces, galleries, or navigation with tailored designs.

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

Configure the following properties on the clickable component.

* **disabled**

  **boolean**

  Disables the clickable, meaning it cannot be clicked or receive focus.

  In this state, onClick will not fire. If the click event originates from a child element, the event will immediately stop propagating from this element.

  However, items within the clickable can still receive focus and be interacted with.

  This has no impact on the visual state by default, but developers are encouraged to style the clickable accordingly.

* **id**

  **string**

  A unique identifier for the element.

## Events

The clickable component provides event callbacks for handling user interactions. Learn more about [handling events](https://shopify.dev/docs/api/polaris/using-polaris-web-components#handling-events).

* **click**

  **(event: CallbackEvent<"s-clickable">) => void**

  Callback when the element is activated.

### CallbackEvent

* bubbles

  ```ts
  boolean
  ```

* cancelable

  ```ts
  boolean
  ```

* composed

  ```ts
  boolean
  ```

* currentTarget

  ```ts
  HTMLElementTagNameMap[T]
  ```

* detail

  ```ts
  any
  ```

* eventPhase

  ```ts
  number
  ```

* target

  ```ts
  HTMLElementTagNameMap[T] | null
  ```

Examples

## Preview

![](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/clickable-default-1lM16C1O.png)

### Examples

* #### Make content clickable

  ##### Description

  Make any content interactive using a clickable component wrapper without imposing visual styling. This example shows how to create custom interactive elements while maintaining full control over appearance.

  ##### Default

  ```html
  <s-clickable onClick={handleShippingSettings}>
    <s-box padding="base">
      <s-text>View shipping settings</s-text>
    </s-box>
  </s-clickable>
  ```

## Best practices

* **Implement visual feedback:** Since clickable has no built-in styling, add focus indicators and active states to show interactivity.
* **Wrap non-interactive elements:** Use clickable for text, images, or icons. Avoid wrapping components with built-in interactions.
* **Handle disabled state carefully:** When `disabled`, child elements can still receive focus. Provide visual feedback for the non-interactive state.

## Limitations

The component doesn't automatically provide keyboard navigation support beyond basic click functionality.
