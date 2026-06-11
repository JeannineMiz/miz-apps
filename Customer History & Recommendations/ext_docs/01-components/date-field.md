---
title: Date field
description: >-
  The date field component captures date input with a consistent interface for
  date selection and proper validation. Use it to collect date information in
  forms, scheduling interfaces, or data entry workflows.


  The component supports manual text entry. For visual calendar-based selection,
  consider using [date
  picker](/docs/api/pos-ui-extensions/2026-01/web-components/forms/date-picker)
  or [date
  spinner](/docs/api/pos-ui-extensions/2026-01/web-components/forms/date-spinner)
  components.
api_version: 2026-01
api_name: pos-ui-extensions
source_url:
  html: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/date-field
  md: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/date-field.md
---

# Date field

The date field component captures date input with a consistent interface for date selection and proper validation. Use it to collect date information in forms, scheduling interfaces, or data entry workflows.

The component supports manual text entry. For visual calendar-based selection, consider using [date picker](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/web-components/forms/date-picker) or [date spinner](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/web-components/forms/date-spinner) components.

#### Use cases

* **Scheduling:** Collect appointment dates, delivery dates, or scheduling information.
* **Transaction dates:** Capture transaction dates or expiration dates in financial interfaces.
* **Filtering:** Provide date-based filtering controls for reports or transaction histories.
* **Validation:** Support form submissions with proper date validation.

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

Configure the following properties on the date field component.

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

  The current value for the field. If omitted, the field will be empty.

## Events

The date field component provides event callbacks for handling user interactions. Learn more about [handling events](https://shopify.dev/docs/api/polaris/using-polaris-web-components#handling-events).

* **blur**

  **(event: CallbackEvent<"s-date-field">) => void**

  Callback when the element loses focus.

* **change**

  **(event: CallbackEvent<"s-date-field">) => void**

  Callback after editing completes (typically on blur).

* **focus**

  **(event: CallbackEvent<"s-date-field">) => void**

  Callback when the element receives focus.

* **input**

  **(event: CallbackEvent<"s-date-field">) => void**

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

![](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/date-field-default-C-zMSYMx.png)

### Examples

* #### Capture date input with a date field

  ##### Description

  Capture date input using a date field component with built-in validation and picker integration. This example shows a basic date field with label and placeholder text.

  ##### Default

  ```html
  <s-date-field 
    label="Date" 
    value="2025-10-08"
  />
  ```

* #### Handle date selection events

  ##### Description

  Subscribe to date input events to respond when merchants select or enter dates. This example shows how to handle \`onChange\` events to capture date selections, enabling real-time validation, date range checks, or dynamic scheduling behavior based on merchant input.

  ##### Default

  ```jsx
  <s-date-field 
    label="Order date"
    value="2024-10-26"
    onInput={(event) => console.log('Input:', event.currentTarget.value)}
    onChange={(event) => console.log('Change:', event.currentTarget.value)}
    onFocus={(event) => console.log('Focused with:', event.currentTarget.value)}
    onBlur={(event) => console.log('Blurred with:', event.currentTarget.value)}
  />
  ```

## Best practices

* **Choose for direct text input:** Use date field when users know the exact date and can type it efficiently. Use [date picker](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/web-components/forms/date-picker) for calendar selection or [date spinner](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/web-components/forms/date-spinner) for space-constrained layouts.
* **Explain date constraints:** Use `details` to clarify requirements like "Select a date within the next 30 days" or "Must be a future date."
* **Write actionable error messages:** Provide clear validation messages for invalid dates that help users correct their input.
