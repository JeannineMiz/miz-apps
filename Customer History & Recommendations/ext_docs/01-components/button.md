---
title: Button
description: >-
  The button component triggers actions or events, such as opening dialogs or
  navigating to other pages. Use button to let merchants perform specific tasks
  or to initiate interactions throughout the POS interface.


  Buttons support various visual styles, tones, and interaction patterns to
  communicate intent and hierarchy within the interface.
api_version: 2026-01
api_name: pos-ui-extensions
source_url:
  html: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/actions/button
  md: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/actions/button.md
---

# Button

The button component triggers actions or events, such as opening dialogs or navigating to other pages. Use button to let merchants perform specific tasks or to initiate interactions throughout the POS interface.

Buttons support various visual styles, tones, and interaction patterns to communicate intent and hierarchy within the interface.

#### Use cases

* **Primary actions:** Create actions like "Save changes," "Add customer," or "Process payment" that complete workflows.
* **Secondary actions:** Provide supporting actions such as "Cancel," "Edit," or "View details."
* **Navigation:** Enable screen transitions or launch modal experiences for complex operations.
* **Loading states:** Display loading indicators during asynchronous operations while preventing duplicate submissions.

### Support Targets (27)

### Supported targets

* [pos.​cart.​line-item-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/cart-details#cart-details-targets)
* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/customer-details#customer-details-action-menu-item-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/customer-details#customer-details-action-modal-)
* [pos.​customer-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/customer-details#customer-details-targets)
* [pos.​draft-order-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/draft-order-details#draft-order-details-action-menu-item-)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​draft-order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/draft-order-details#draft-order-details-targets)
* [pos.​exchange.​post.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/post-exchange#post-exchange-action-menu-item-)
* [pos.​exchange.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/post-exchange#post-exchange-action-modal-)
* [pos.​exchange.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/post-exchange#post-exchange-targets)
* [pos.​home.​modal.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/home-screen#home-screen-action-modal-)
* [pos.​order-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/order-details#order-details-action-menu-item-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/order-details#order-details-action-modal-)
* [pos.​order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/order-details#order-details-targets)
* [pos.​product-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/product-details#product-details-action-menu-item-)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/product-details#product-details-action-modal-)
* [pos.​product-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/product-details#product-details-targets)
* [pos.​purchase.​post.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/post-purchase#post-purchase-action-menu-item-)
* [pos.​purchase.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/post-purchase#post-purchase-action-modal-)
* [pos.​purchase.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/post-purchase#post-purchase-targets)
* [pos.​register-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/register-details#register-details-targets)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/register-details#register-details-action-modal-)
* [pos.​register-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/register-details#register-details-block-)
* [pos.​return.​post.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/post-return#post-return-action-menu-item-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/post-return#post-return-action-modal-)
* [pos.​return.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/post-return#post-return-targets)

## Properties

Configure the following properties on the button component.

* **command**

  **'--auto' | '--show' | '--hide' | '--toggle'**

  **Default: '--auto'**

  Sets the action the `commandFor` should take when this clickable is activated.

  See the documentation of particular components for the actions they support.

  * `--auto`: a default action for the target component.
  * `--show`: shows the target component.
  * `--hide`: hides the target component.
  * `--toggle`: toggles the target component.

* **commandFor**

  **string**

  ID of a component that should respond to activations (e.g. clicks) on this component.

  See `command` for how to control the behavior of the target.

* **disabled**

  **boolean**

  **Default: false**

  Disables the button meaning it cannot be clicked or receive focus.

* **id**

  **string**

  A unique identifier for the element.

* **loading**

  **boolean**

  **Default: false**

  Replaces content with a loading indicator while a background action is being performed.

  This also disables the button.

* **tone**

  **'auto' | 'neutral' | 'caution' | 'warning' | 'critical'**

  **Default: 'auto'**

  Sets the tone of the button, based on the intention of the information being conveyed.

* **variant**

  **'primary' | 'secondary'**

  **Default: 'auto' - the variant is automatically determined by the button's context**

  Changes the visual appearance of the button.

## Events

The button component provides event callbacks for handling user interactions. Learn more about [handling events](https://shopify.dev/docs/api/polaris/using-polaris-web-components#handling-events).

* **click**

  **(event: CallbackEvent<"s-button">) => void**

  Called when the button is activated.

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

![](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/button-default-DKZbKEDr.png)

### Examples

* #### Trigger actions with a button

  ##### Description

  Trigger actions using a button component with customizable visual styles and tones. This example shows a basic button with text content.

  ##### Default

  ```html
  <s-button variant="primary">Add customer</s-button>
  <s-button variant="secondary">Select more items</s-button>
  ```

## Best practices

* **Write action-oriented text:** Use specific, actionable language like "Save customer" or "Process payment" rather than generic terms like "OK" or "Submit."
* **Choose appropriate variants and tones:** Use `primary` for the main action and `secondary` for supporting actions. Use `critical` for destructive actions, `caution` or `warning` for actions requiring attention.
* **Show loading states:** Set `loading` to `true` during async operations to prevent duplicate submissions.
* **Use command system for component control:** Use `commandFor` and `command` to control modals and overlays declaratively.
* **Structure hierarchies clearly:** Group related actions together. Separate destructive actions to prevent accidental activation.
