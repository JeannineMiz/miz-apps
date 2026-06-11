---
title: Text field
description: >-
  The text field component captures single-line text input. Use it to collect
  short, free-form information like names, titles, or identifiers.


  The component supports various input configurations including placeholders,
  character limits, and validation. For multi-line text entry, use the [text
  area](/docs/api/pos-ui-extensions/2026-01/web-components/forms/text-area)
  component.
api_version: 2026-01
api_name: pos-ui-extensions
source_url:
  html: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/text-field
  md: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/text-field.md
---

# Text field

The text field component captures single-line text input. Use it to collect short, free-form information like names, titles, or identifiers.

The component supports various input configurations including placeholders, character limits, and validation. For multi-line text entry, use the [text area](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/web-components/forms/text-area) component.

#### Use cases

* **Product identifiers:** Collect product names, SKUs, or short identifiers.
* **Customer info:** Capture customer names, reference numbers, or brief labels.
* **Filtering:** Enable text-based filtering or tagging with short text values.
* **Form submissions:** Support single-line text values like names, codes, or identifiers.

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

Configure the following properties on the text field component.

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

## Slots

The text field component supports slots for additional content placement within the field. Learn more about [using slots](https://shopify.dev/docs/api/polaris/using-polaris-web-components#slots).

* **accessory**

  **HTMLElement**

  Additional content to be displayed in the field. Commonly used to display clickable text.

## Events

The text field component provides event callbacks for handling user interactions. Learn more about [handling events](https://shopify.dev/docs/api/polaris/using-polaris-web-components#handling-events).

* **blur**

  **(event: CallbackEvent<"s-text-field">) => void**

  Callback when the element loses focus.

* **change**

  **(event: CallbackEvent<"s-text-field">) => void**

  Callback after editing completes (typically on blur).

* **focus**

  **(event: CallbackEvent<"s-text-field">) => void**

  Callback when the element receives focus.

* **input**

  **(event: CallbackEvent<"s-text-field">) => void**

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

![](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/text-field-default-BuqzLwYM.png)

### Examples

* #### Capture text input with a text field

  ##### Description

  Capture single-line text input using a text field component with validation support. This example shows a basic text field with label and placeholder text.

  ##### Default

  ```html
  <s-text-field
    label="Store name" 
    value="Snowdevil" 
    required
  />
  ```

* #### Add accessory buttons

  ##### Description

  Add action buttons to the text field using the accessory slot for quick actions like clearing text or submitting input. This example shows how to use \[\`s-button\`]\(/docs/api/pos-ui-extensions/{API\_VERSION}/web-components/actions/button) and \[\`s-clickable\`]\(/docs/api/pos-ui-extensions/{API\_VERSION}/web-components/actions/clickable) components with text content in the accessory slot, enabling inline actions without leaving the input context.

  ##### Default

  ```jsx
  <s-text-field label="Discount code" value="SUMMER2024">
    <s-button slot="accessory" onClick={() => console.log('Apply discount')}>
      Apply
    </s-button>
  </s-text-field>;
  ```

* #### Configure validation and guidance

  ##### Description

  Configure common text field properties for validation, character limits, and user guidance. This example demonstrates using props like \`maxlength\`, \`required\`, \`helperText\`, and \`error\` to create a well-guided input experience with proper validation feedback.

  ##### Default

  ```jsx
  <s-text-field
    label="Product SKU"
    value={sku}
    placeholder="Enter SKU"
    details="Use format: ABC-123"
    error={hasError ? "SKU already exists" : undefined}
    disabled={isProcessing}
    required
    maxLength={20}
    onChange={(event) => setSku(event.currentTarget.value)}
  />
  ```

* #### Handle input events

  ##### Description

  Subscribe to text field events including \`onInput\`, \`onFocus\`, \`onBlur\`, and \`onChange\` to respond to user interactions. This example shows how to handle different input events for real-time validation, autosave functionality, or dynamic form behavior.

  ##### Default

  ```jsx
  <s-text-field
    label="Product SKU"
    placeholder="Enter SKU"
    onInput={(event) => {
      console.log('Input:', event.currentTarget.value);
      console.log('Current error:', event.currentTarget.error);
    }}
    onFocus={(event) => {
      console.log('Focused with value:', event.currentTarget.value);
    }}
    onBlur={(event) => {
      console.log('Blurred with value:', event.currentTarget.value);
    }}
    onChange={(event) => {
      console.log('Changed to:', event.currentTarget.value);
    }}
  />
  ```

## Best practices

* **Use for single-line text input:** Choose text field for short values like names, titles, or identifiers. For multi-line content, use [text area](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/web-components/forms/text-area).
* **Show character limit feedback:** When approaching `maxLength`, display remaining characters in the `details` text.
* **Write descriptive labels:** Use specific labels like "Product Name" or "Reference Code" rather than generic terms.

## Limitations

The `accessory` slot supports only [button](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/web-components/actions/button) and [clickable](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/web-components/actions/clickable) components with text content only—other component types or complex layouts can't be used for field accessories.
