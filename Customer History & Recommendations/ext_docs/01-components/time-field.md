---
title: Time field
description: >-
  The time field component captures time input through direct text entry. Use it
  when merchants know the exact time they want to enter or for quick time data
  entry.


  For visual time selection with clock or spinner interfaces, use [time
  picker](/docs/api/pos-ui-extensions/2026-01/web-components/forms/time-picker).
api_version: 2026-01
api_name: pos-ui-extensions
source_url:
  html: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/time-field
  md: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/time-field.md
---

# Time field

The time field component captures time input through direct text entry. Use it when merchants know the exact time they want to enter or for quick time data entry.

For visual time selection with clock or spinner interfaces, use [time picker](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/web-components/forms/time-picker).

#### Use cases

* **Scheduling:** Collect appointment times or service hours in booking workflows.
* **Business hours:** Capture opening hours or time-based preferences in configuration interfaces.
* **Filtering:** Provide time-based filtering controls for reports or event logs.
* **Shift management:** Enable time entry for shift scheduling or time tracking.

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

Configure the following properties on the time field component.

* **details**

  **string**

  Additional text to provide context or guidance for the field. This text is displayed along with the field and its label to offer more information or instructions to the user.

  This will also be exposed to screen reader users.

* **disabled**

  **boolean**

  **Default: false**

  Disables the field, disallowing any interaction.

* **error**

  **string**

  Indicate an error to the user. The field will be given a specific stylistic treatment to communicate problems that have to be resolved immediately.

* **id**

  **string**

  A unique identifier for the element.

* **label**

  **string**

  Content to use as the field label.

* **required**

  **boolean**

  **Default: false**

  Whether the field needs a value. This requirement adds semantic value to the field, but it will not cause an error to appear automatically. If you want to present an error when this field is empty, you can do so with the `error` property.

* **value**

  **string**

  Current selected value.

  The default, `''`, means no time is selected.

  The value must be a 24-hour time in `HH:mm:ss` format, with leading zeros.

  Examples: `"00:00:00"`, `"09:05:00"`, `"23:59:00"`, `"14:03:30"`.

  This follows the HTML time input value format, which is always 24-hour with leading zeros regardless of UI presentation.

  See: <https://developer.mozilla.org/docs/Web/HTML/Element/input/time>

## Events

The time field component provides event callbacks for handling user interactions. Learn more about [handling events](https://shopify.dev/docs/api/polaris/using-polaris-web-components#handling-events).

* **blur**

  **(event: CallbackEvent<"s-time-field">) => void**

  Callback when the element loses focus.

* **change**

  **(event: CallbackEvent<"s-time-field">) => void**

  Callback after editing completes (typically on blur).

* **focus**

  **(event: CallbackEvent<"s-time-field">) => void**

  Callback when the element receives focus.

* **input**

  **(event: CallbackEvent<"s-time-field">) => void**

  Callback when the user makes any changes in the field.

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

![](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/time-field-default-Dzm8y6C_.png)

### Examples

* #### Capture time input with a time field

  ##### Description

  Capture time input using a time field component. This example shows a basic time field with a label for time entry.

  ##### Default

  ```html
  <s-time-field
    label="Time"
    value="11:42"
  />
  ```

* #### Handle time selection events

  ##### Description

  Subscribe to time input events to respond when merchants select or enter times. This example shows how to handle \`onChange\` events to capture time selections, enabling real-time validation, time range checks, or dynamic scheduling behavior based on merchant input.

  ##### Default

  ```jsx
  <s-time-field
    label="Appointment time"
    value="14:30"
    onInput={(event) => console.log('Input:', event.currentTarget.value)}
    onChange={(event) => console.log('Change:', event.currentTarget.value)}
    onFocus={(event) => console.log('Focused')}
    onBlur={(event) => console.log('Blurred')}
  />
  ```

## Best practices

* **Use correct format:** Always use `HH:mm:ss` format with leading zeros (like `"09:05:00"` not `"9:5:0"`).
* **Explain time constraints:** Use `details` to clarify requirements like "Business hours only (09:00-17:00)" or "Must be a future time."
