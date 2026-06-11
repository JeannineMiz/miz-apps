---
title: Email field
description: >-
  The email field component captures email address input. Use it to collect
  email information in forms, customer profiles, or contact workflows.


  Email field doesn't perform automatic email validation. Implement your own
  validation logic, and use the `error` property to display validation results.
api_version: 2026-01
api_name: pos-ui-extensions
source_url:
  html: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/email-field
  md: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/email-field.md
---

# Email field

The email field component captures email address input. Use it to collect email information in forms, customer profiles, or contact workflows.

Email field doesn't perform automatic email validation. Implement your own validation logic, and use the `error` property to display validation results.

#### Use cases

* **Customer emails:** Collect customer email addresses during account creation or updates.
* **Merchant emails:** Capture merchant emails for notifications or receipts.
* **Email features:** Enable features like sending receipts or order confirmations.
* **Validation:** Support email validation in checkout or customer management interfaces.

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

Configure the following properties on the email field component.

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

* **maxLength**

  **number**

  **Default: Infinity**

  Specifies the maximum number of characters allowed.

* **placeholder**

  **string**

  A short hint that describes the expected value of the field.

* **required**

  **boolean**

  **Default: false**

  Whether the field needs a value. This requirement adds semantic value to the field, but it will not cause an error to appear automatically. If you want to present an error when this field is empty, you can do so with the `error` property.

* **value**

  **string**

  The current value for the field. If omitted, the field will be empty.

## Events

The email field component provides event callbacks for handling user interactions. Learn more about [handling events](https://shopify.dev/docs/api/polaris/using-polaris-web-components#handling-events).

* **blur**

  **(event: CallbackEvent<"s-email-field">) => void**

  Callback when the element loses focus.

* **change**

  **(event: CallbackEvent<"s-email-field">) => void**

  Callback after editing completes (typically on blur).

* **focus**

  **(event: CallbackEvent<"s-email-field">) => void**

  Callback when the element receives focus.

* **input**

  **(event: CallbackEvent<"s-email-field">) => void**

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

![](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/email-field-default-BzeZBYA3.png)

### Examples

* #### Capture email addresses with an email field

  ##### Description

  Capture email address input using an email field component. This example shows a basic email field with a label for collecting email information.

  ##### Default

  ```html
  <s-email-field 
    label="Email"
    value="snowdevil@shopify.com"
    required
  />
  ```

* #### Handle email input events

  ##### Description

  Subscribe to email input events to respond when merchants enter email addresses. This example demonstrates handling \`onChange\`, \`onInput\`, \`onFocus\`, and \`onBlur\` events for real-time email validation, duplicate checking, or autosave functionality.

  ##### Default

  ```jsx
  <s-email-field
    label="Customer email"
    placeholder="customer@example.com"
    onInput={(event) => console.log('Input:', event.currentTarget.value)}
    onChange={(event) => console.log('Change:', event.currentTarget.value)}
    onFocus={(event) => console.log('Focus')}
    onBlur={(event) => console.log('Blur')}
  />
  ```

## Best practices

* **Write descriptive labels:** Use specific labels like "Customer Email" or "Receipt Email Address" rather than generic "Email."
* **Provide context in details:** Use `details` for additional context like "Required for digital receipts" or "We'll send order updates to this address."
* **Write actionable error messages:** Provide clear validation messages like "Please enter a valid email address" that help users correct their input.
