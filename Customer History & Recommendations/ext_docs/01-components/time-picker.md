---
title: Time picker
description: >-
  The time picker component allows merchants to select times using an
  interactive picker interface. Use it when merchants benefit from visual time
  selection rather than typing exact times.


  For direct text entry when merchants know the exact time, use [time
  field](/docs/api/pos-ui-extensions/2026-01/web-components/forms/time-field).
api_version: 2026-01
api_name: pos-ui-extensions
source_url:
  html: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/time-picker
  md: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/time-picker.md
---

# Time picker

The time picker component allows merchants to select times using an interactive picker interface. Use it when merchants benefit from visual time selection rather than typing exact times.

For direct text entry when merchants know the exact time, use [time field](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/web-components/forms/time-field).

#### Use cases

* **Visual selection:** Provide visual time selection for appointments or scheduling workflows.
* **Quick selection:** Enable quick time selection for business hours or delivery windows.
* **Touch optimization:** Support touch-optimized time input on POS devices.
* **User-friendly:** Allow users to select times without remembering specific formats.

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

Configure the following properties on the time picker component.

* **id**

  **string**

  A unique identifier for the element.

* **value**

  **string**

  **Default: ''**

  Current selected value.

  The default, `''`, means no time is selected.

  The value must be a 24-hour time in `HH:mm:ss` format, with leading zeros.

  Examples: `"00:00:00"`, `"09:05:00"`, `"23:59:00"`, `"14:03:30"`.

  This follows the HTML time input value format, which is always 24-hour with leading zeros regardless of UI presentation.

  See: <https://developer.mozilla.org/docs/Web/HTML/Element/input/time>

  If the provided value is invalid, '' is used as the value.

## Events

The time picker component provides event callbacks for handling user interactions. Learn more about [handling events](https://shopify.dev/docs/api/polaris/using-polaris-web-components#handling-events).

* **blur**

  **(event: CallbackEvent<"s-time-picker">) => void**

  Callback when the time picker is dismissed.

* **change**

  **(event: CallbackEvent<"s-time-picker">) => void**

  Callback when the user selects a time from the picker that is different to the current value.

* **focus**

  **(event: CallbackEvent<"s-time-picker">) => void**

  Callback when the time picker is revealed.

* **input**

  **(event: CallbackEvent<"s-time-picker">) => void**

  Callback when the user selects a time from the picker.

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

![](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/time-spinner-default-Bj59miQ-.png)

### Examples

* #### Select times with a time picker

  ##### Description

  Select times using a time picker component. This example shows a basic time picker for selecting hours and minutes.

  ##### Default

  ```html
  <s-button command="--show" commandFor="time-picker">
    Show
  </s-button>
  <s-time-picker
    value="9:41"
    id="time-picker"
  />
  ```

* #### Control picker visibility

  ##### Description

  Control time picker visibility programmatically using the command system with \`show\` and \`hide\` methods. This example demonstrates using button commands to display or dismiss the time picker, enabling custom trigger patterns for time selection workflows.

  ##### Default

  ```jsx
  <>
    <s-button command="--show" commandFor="time-picker">
      Select Time
    </s-button>
    <s-time-picker
      id="time-picker"
      value="14:30"
      onChange={(event) => console.log('Time selected:', event.currentTarget.value)}
    />
  </>;
  ```

* #### Handle time selection events

  ##### Description

  Subscribe to time selection events to respond when merchants pick a time. This example shows how to handle \`onChange\` events to capture selected times, enabling validation, scheduling logic, or dynamic updates based on the chosen time.

  ##### Default

  ```jsx
  <s-time-picker
    value="14:30"
    onInput={(event) => console.log('Input:', event.currentTarget.value)}
    onChange={(event) => console.log('Change:', event.currentTarget.value)}
    onFocus={(event) => console.log('Focused')}
    onBlur={(event) => console.log('Blurred')}
  />
  ```

## Best practices

* **Choose for visual time selection:** Use time picker when users benefit from a visual picker interface. Use [time field](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/web-components/forms/time-field) when users know the exact time.
* **Use correct format:** Always use `HH:mm:ss` format with leading zeros. The internal format is always 24-hour regardless of UI presentation.
* **Validate before setting values:** Invalid values reset to empty string. Implement validation to show appropriate error messages.
