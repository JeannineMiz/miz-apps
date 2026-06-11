---
title: Text area
description: >-
  The text area component captures multi-line text input. Use it to collect
  descriptions, notes, comments, or other extended text content.


  The component supports configurable height, character limits, and validation.
  For single-line text input, use [text
  field](/docs/api/pos-ui-extensions/2026-01/web-components/forms/text-field).
api_version: 2026-01
api_name: pos-ui-extensions
source_url:
  html: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/text-area
  md: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/text-area.md
---

# Text area

The text area component captures multi-line text input. Use it to collect descriptions, notes, comments, or other extended text content.

The component supports configurable height, character limits, and validation. For single-line text input, use [text field](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/web-components/forms/text-field).

#### Use cases

* **Descriptions:** Collect product descriptions or notes in inventory management workflows.
* **Customer notes:** Capture comments, special instructions, or notes in order processing.
* **Feedback:** Enable feedback collection or issue reporting with detailed explanations.
* **Multi-line entry:** Support multi-line text for addresses, delivery instructions, or requirements.

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

Configure the following properties on the text area component.

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

* **rows**

  **number**

  **Default: 2**

  A number of visible text lines.

* **value**

  **string**

  The current value for the field. If omitted, the field will be empty.

## Events

The text area component provides event callbacks for handling user interactions. Learn more about [handling events](https://shopify.dev/docs/api/polaris/using-polaris-web-components#handling-events).

* **blur**

  **(event: CallbackEvent<"s-text-area">) => void**

  Callback when the element loses focus.

* **change**

  **(event: CallbackEvent<"s-text-area">) => void**

  Callback after editing completes (typically on blur).

* **focus**

  **(event: CallbackEvent<"s-text-area">) => void**

  Callback when the element receives focus.

* **input**

  **(event: CallbackEvent<"s-text-area">) => void**

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

![](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/text-area-default-CdsAND00.png)

### Examples

* #### Capture multi-line text with a text area

  ##### Description

  Capture multi-line text input using a text area component. This example shows a basic text area with a label for extended content.

  ##### Default

  ```html
  <s-text-area 
    label="Shipping address" 
    value="1776 Barnes Street, Orlando, FL 32801"
  />
  ```

* #### Configure rows and character limits

  ##### Description

  Configure the number of visible rows and character limits to control text area size and input length. This example shows how to use the \`rows\` property to set initial height and \`maxlength\` to limit content, ensuring appropriate sizing for different types of text input.

  ##### Default

  ```jsx
  <s-text-area
    label="Order notes"
    placeholder="Add special instructions..."
    rows={5}
    maxLength={500}
    onInput={(event) => console.log('Characters:', event.currentTarget.value.length)}
  />
  ```

* #### Handle text input events

  ##### Description

  Subscribe to text area events to respond when merchants enter or modify text. This example demonstrates handling \`onChange\`, \`onInput\`, \`onFocus\`, and \`onBlur\` events for autosave functionality, character counting, or real-time validation of longer text content.

  ##### Default

  ```jsx
  <s-text-area
    label="Customer feedback"
    placeholder="Enter feedback..."
    onInput={(event) => console.log('Input:', event.currentTarget.value)}
    onChange={(event) => console.log('Change:', event.currentTarget.value)}
    onFocus={(event) => console.log('Focused')}
    onBlur={(event) => console.log('Blurred')}
  />
  ```

## Best practices

* **Set appropriate row count:** Use 2-3 `rows` for brief notes, 4-6 for descriptions, and more for extensive content.
* **Show character limit feedback:** When approaching `maxLength`, display remaining characters in the `details` text.
* **Write descriptive labels:** Use specific labels like "Product Description" or "Special Instructions" rather than generic terms.
