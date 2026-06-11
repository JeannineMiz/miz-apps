---
title: Modal
description: >-
  The modal component displays content in an overlay that requires merchant
  attention. Use modals to present critical information, confirmations, or
  focused tasks while maintaining page context.


  Modals block interaction with the underlying interface until the merchant
  resolves the modal content.


  Modals don't automatically handle state management or persistence, so manage
  visibility and lifecycle programmatically through
  [events](/docs/api/pos-ui-extensions/2026-01/web-components/feedback-and-status-indicators/modal#events).
api_version: 2026-01
api_name: pos-ui-extensions
source_url:
  html: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/feedback-and-status-indicators/modal
  md: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/feedback-and-status-indicators/modal.md
---

# Modal

The modal component displays content in an overlay that requires merchant attention. Use modals to present critical information, confirmations, or focused tasks while maintaining page context.

Modals block interaction with the underlying interface until the merchant resolves the modal content.

Modals don't automatically handle state management or persistence, so manage visibility and lifecycle programmatically through [events](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/web-components/feedback-and-status-indicators/modal#events).

#### Use cases

* **Confirmations:** Display confirmation dialogs for critical actions like refunds or data deletion.
* **Detailed views:** Present information requiring focused attention, like error details or status.
* **Data collection:** Collect input through forms or settings panels without navigating away.
* **Progress indicators:** Show progress for long-running operations like imports or sync.

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

Configure the following properties on the modal component.

* **heading**

  **string**

  A title that describes the content of the modal.

* **id**

  **string**

  A unique identifier for the element.

## Slots

The modal component supports slots for additional content placement within the modal. Learn more about [using slots](https://shopify.dev/docs/api/polaris/using-polaris-web-components#slots).

* **primary-action**

  **HTMLElement**

  The primary action button displayed in the modal.

  The tone of the button is used to define the tone of the modal.

  If omitted, the modal will default to an 'info' tone, and show an 'OK' button, translated according to the user's locale.

* **secondary-actions**

  **HTMLElement**

  The secondary action buttons displayed in the modal.

## Events

The modal component provides event callbacks for handling user interactions. Learn more about [handling events](https://shopify.dev/docs/api/polaris/using-polaris-web-components#handling-events).

* **hide**

  **(event: CallbackEvent<"s-modal">) => void**

  Callback when the modal is hidden.

* **show**

  **(event: CallbackEvent<"s-modal">) => void**

  Callback when the modal is shown.

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

![](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/modal-default-YoMcdyhB.png)

### Examples

* #### Display content in a modal overlay

  ##### Description

  Display focused content in an overlay using a modal component that requires merchant attention. This example shows a basic modal with header, content area, and action buttons.

  ##### Default

  ```html
  <s-button command="--show" commandFor="modal">
    Open modal
  </s-button>
  <s-modal id="modal" heading="Changes could not be saved">
    Please check your internet connection and try again.
    <s-button slot="primary-action">OK</s-button>
  </s-modal>
  ```

## Best practices

* **Use for focused interactions:** Reserve modals for confirmations, critical information, or tasks requiring immediate attention.
* **Write clear headings:** Use concise titles that communicate the purpose or action.
* **Choose appropriate button tones:** The primary-action button's `tone` determines the modal's overall tone. Use `critical` for destructive actions, `success` for confirmations.
* **Include secondary actions:** Provide options like "Cancel" or "Go Back" to give merchants flexibility.
* **Keep content focused:** Limit to essential information and actions. For complex workflows, break into multiple steps.

## Limitations

Multiple modals can't be displayed simultaneously—showing a new modal while another is visible may cause unexpected behavior or poor user experience.
