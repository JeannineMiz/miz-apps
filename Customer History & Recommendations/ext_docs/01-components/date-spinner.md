---
title: Date spinner
description: >-
  The date spinner component enables merchants to select dates using a spinner
  interface with scrollable columns for month, day, and year. Use it for compact
  date selection in space-constrained layouts or when selecting dates close to
  the current date.


  For visual calendar context, consider using [date
  picker](/docs/api/pos-ui-extensions/2026-01/web-components/forms/date-picker)
  instead. For text date entry, use [date
  field](/docs/api/pos-ui-extensions/2026-01/web-components/forms/date-field).
api_version: 2026-01
api_name: pos-ui-extensions
source_url:
  html: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/date-spinner
  md: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/date-spinner.md
---

# Date spinner

The date spinner component enables merchants to select dates using a spinner interface with scrollable columns for month, day, and year. Use it for compact date selection in space-constrained layouts or when selecting dates close to the current date.

For visual calendar context, consider using [date picker](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/web-components/forms/date-picker) instead. For text date entry, use [date field](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/web-components/forms/date-field).

#### Use cases

* **Compact selection:** Provide compact date selection in space-constrained interfaces.
* **Quick navigation:** Enable quick date selection by scrolling through nearby dates.
* **Modal dialogs:** Support date input in modal dialogs where a spinner is more appropriate.
* **Touch optimization:** Offer touch-optimized scrolling date selection for POS devices.

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

Configure the following properties on the date spinner component.

* **id**

  **string**

  A unique identifier for the element.

* **value**

  **string**

  **Default: ""**

  Current selected value for the spinner.

  This uses a date in `YYYY-MM-DD` format.

## Events

The date spinner component provides event callbacks for handling user interactions. Learn more about [handling events](https://shopify.dev/docs/api/polaris/using-polaris-web-components#handling-events).

* **blur**

  **(event: CallbackEvent<"s-date-spinner">) => void**

  Callback when the date spinner is dismissed.

* **change**

  **(event: CallbackEvent<"s-date-spinner">) => void**

  Callback when the value changes. Only called when a different value is selected.

* **focus**

  **(event: CallbackEvent<"s-date-spinner">) => void**

  Callback when the date spinner is revealed.

* **input**

  **(event: CallbackEvent<"s-date-spinner">) => void**

  Callback when the user makes a selection.

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

![](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/date-spinner-default-7UJbpmzJ.png)

### Examples

* #### Select dates with a spinner

  ##### Description

  Enable compact date selection using a date spinner component with scrollable columns for month, day, and year. This example shows a basic date spinner for space-constrained layouts.

  ##### Default

  ```html
  <s-button command="--show" commandFor="date-spinner">
    Show
  </s-button>
  <s-date-spinner
    id="date-spinner"
    value="2021-09-17" 
  />
  ```

* #### Control spinner visibility

  ##### Description

  Control date spinner visibility programmatically using the command system with \`show\` and \`hide\` methods. This example demonstrates using button commands to display or dismiss the spinner picker, enabling custom trigger patterns for date selection in constrained layouts.

  ##### Default

  ```jsx
  <>
    <s-button command="--show" commandFor="date-spinner">
      Select Date
    </s-button>
    <s-date-spinner
      id="date-spinner"
      value="2024-10-26"
      onChange={(event) => console.log('Date selected:', event.currentTarget.value)}
    />
  </>;
  ```

* #### Handle date selection events

  ##### Description

  Subscribe to date selection events to respond when merchants pick a date from the spinner columns. This example shows how to handle \`onChange\` events to capture selected dates, enabling validation, scheduling logic, or dynamic updates based on the chosen date.

  ##### Default

  ```jsx
  <s-date-spinner 
    value="2024-10-26"
    onInput={(event) => console.log('Input:', event.currentTarget.value)}
    onChange={(event) => console.log('Change:', event.currentTarget.value)}
    onFocus={(event) => console.log('Focus')}
    onBlur={(event) => console.log('Blur')}
  />
  ```

## Best practices

* **Use for space-constrained layouts:** Choose date spinner for narrow layouts or split-screen interfaces where a calendar view would be impractical.
* **Best for nearby dates:** Use when selecting dates close to the current date. For distant dates, [date picker](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/web-components/forms/date-picker) provides faster navigation.
* **Provide interaction cues:** Consider labels or instructions to help first-time users understand the scrollable column interface.
