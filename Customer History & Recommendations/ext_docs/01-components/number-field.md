---
title: Number field
description: >-
  The number field component captures numeric input with built-in number
  validation. Use it to collect quantities, prices, or other numeric
  information.


  The component supports optional stepper controls, min/max constraints, and
  step increments for guided numeric entry.
api_version: 2026-01
api_name: pos-ui-extensions
source_url:
  html: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/number-field
  md: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/number-field.md
---

# Number field

The number field component captures numeric input with built-in number validation. Use it to collect quantities, prices, or other numeric information.

The component supports optional stepper controls, min/max constraints, and step increments for guided numeric entry.

#### Use cases

* **Quantities:** Collect product quantities, inventory counts, or stock levels.
* **Pricing:** Capture pricing information, discounts, or monetary amounts.
* **Stepper controls:** Provide `stepper` controls for intuitive increment/decrement interactions.
* **Validation:** Support form submissions with proper min/max validation.

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

Configure the following properties on the number field component.

* **controls**

  **'auto' | 'stepper' | 'none'**

  Sets the type of controls displayed for the field.

  * `stepper`: displays buttons to increase or decrease the value of the field by the stepping interval defined in the `step` property. Note that in POS adding stepper controls simplifies the behaviour of the Number Field itself. The field supports only integer values, is always-populated and automatically validates the value to be within the min and max bounds. Validation, label, details and placeholder are not supported when using Stepper controls.

  * `none`: no controls are displayed and users must input the value manually.

  * `auto`: the presence of the controls depends on the surface and context.

* **details**

  **string**

  Additional text to provide context or guidance for the field. This text is displayed along with the field and its label to offer more information or instructions to the user.

  This will also be exposed to screen reader users.

  Details are not supported when using Stepper controls

* **disabled**

  **boolean**

  **Default: false**

  Disables the field, disallowing any interaction.

* **error**

  **string**

  Indicate an error to the user. The field will be given a specific stylistic treatment to communicate problems that have to be resolved immediately.

  Error is not supported when using Stepper controls

* **id**

  **string**

  A unique identifier for the element.

* **inputMode**

  **'decimal' | 'numeric'**

  **Default: 'decimal'**

  Sets the virtual keyboard.

  Input mode is not supported when using Stepper controls

* **label**

  **string**

  Content to use as the field label.

  Label is not supported when using Stepper controls

* **max**

  **number**

  **Default: Infinity**

  The highest decimal or integer to be accepted for the field. When used with `step` the value will round down to the max number.

  Note: a user will still be able to use the keyboard to input a number higher than the max. It is up to the developer to add appropriate validation.

* **min**

  **number**

  **Default: -Infinity**

  The lowest decimal or integer to be accepted for the field. When used with `step` the value will round up to the min number.

  Note: a user will still be able to use the keyboard to input a number lower than the min. It is up to the developer to add appropriate validation.

* **placeholder**

  **string**

  A short hint that describes the expected value of the field.

  Placeholder text is not supported when using Stepper controls due to constrained space for the number field, especially on phones.

* **required**

  **boolean**

  **Default: false Required is not supported when using Stepper controls**

  Whether the field needs a value. This requirement adds semantic value to the field, but it will not cause an error to appear automatically. If you want to present an error when this field is empty, you can do so with the `error` property.

* **value**

  **string**

  The current value for the field. If omitted, the field will be empty.

## Slots

The number field component supports slots for additional content placement within the field. Learn more about [using slots](https://shopify.dev/docs/api/polaris/using-polaris-web-components#slots).

* **accessory**

  **HTMLElement**

  Additional content to be displayed in the field. Commonly used to display clickable text.

  **Note:** Accessory is not supported when using Stepper controls

## Events

The number field component provides event callbacks for handling user interactions. Learn more about [handling events](https://shopify.dev/docs/api/polaris/using-polaris-web-components#handling-events).

* **blur**

  **(event: CallbackEvent<"s-number-field">) => void**

  Callback when the element loses focus.

* **change**

  **(event: CallbackEvent<"s-number-field">) => void**

  Callback after editing completes (typically on blur).

* **focus**

  **(event: CallbackEvent<"s-number-field">) => void**

  Callback when the element receives focus.

* **input**

  **(event: CallbackEvent<"s-number-field">) => void**

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

![](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/number-field-default-CBWCioTZ.png)

### Examples

* #### Capture numeric input with a number field

  ##### Description

  Capture numeric input using a number field component. This example shows a basic number field with a label for collecting numeric values.

  ##### Default

  ```html
  <s-number-field 
    label="Item count"
    value="976"
    required
  />
  ```

* #### Add stepper controls and constraints

  ##### Description

  Enable stepper controls with increment and decrement buttons and set min/max constraints to limit valid input ranges. This example demonstrates using the \`controls\` property with \`min\` and \`max\` values to create bounded numeric inputs with visual stepper controls, ideal for quantity selection or limited-range numeric entry.

  ##### Default

  ```jsx
  <s-number-field
    label="Quantity"
    value="5"
    min={1}
    max={100}
    controls
    onInput={(event) => console.log('Input:', event.currentTarget.value)}
    onChange={(event) => console.log('Change:', event.currentTarget.value)}
  />;
  ```

* #### Configure keyboard input modes

  ##### Description

  Configure the keyboard layout by specifying \`inputMode\` for decimal or numeric entry. This example shows how to use the \`inputMode\` property to display appropriate mobile keyboards—numeric for integers or decimal for numbers with fractional parts—improving data entry speed and accuracy.

  ##### Default

  ```jsx
  <s-stack>
    <s-number-field
      label="Price"
      placeholder="0.00"
      inputMode="decimal"
      onInput={(event) => console.log('Value:', event.currentTarget.value)}
    />

    <s-number-field
      label="Stock count"
      placeholder="0"
      inputMode="numeric"
      onInput={(event) => console.log('Value:', event.currentTarget.value)}
    />
  </s-stack>;
  ```

## Best practices

* **Choose appropriate controls:** Use `stepper` for quantities or small adjustments. Use `none` for prices or large values where steppers are impractical.
* **Select the right input mode:** Use `decimal` for prices and measurements. Use `numeric` for quantities and counts.
* **Explain constraints in details:** Use `details` to clarify valid ranges or formatting, like "Enter a quantity between 1 and 999."
