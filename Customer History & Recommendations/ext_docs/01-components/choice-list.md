---
title: Choice list
description: >-
  The choice list component presents multiple options for single or multiple
  selections. Use it when merchants need to choose from a defined set of
  options, such as filtering results or collecting preferences.


  The component supports both single selection (radio button behavior) and
  multiple selection (checkbox behavior) modes. It offers multiple layout
  variants including list, inline, block, and grid formats to suit different
  space constraints and visual requirements.
api_version: 2026-01
api_name: pos-ui-extensions
source_url:
  html: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/choice-list
  md: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/choice-list.md
---

# Choice list

The choice list component presents multiple options for single or multiple selections. Use it when merchants need to choose from a defined set of options, such as filtering results or collecting preferences.

The component supports both single selection (radio button behavior) and multiple selection (checkbox behavior) modes. It offers multiple layout variants including list, inline, block, and grid formats to suit different space constraints and visual requirements.

#### Use cases

* **Option selection:** Create fields where users select one or multiple options from a list.
* **Filtering:** Implement filtering where users select categories or attributes to refine content.
* **Settings:** Provide configuration options where users choose preferences.
* **Multi-select:** Enable scenarios like choosing multiple product variants or categories.

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

Configure the following properties on the choice list component.

* **id**

  **string**

  A unique identifier for the element.

* **multiple**

  **boolean**

  **Default: false**

  Whether multiple choices can be selected.

* **values**

  **string\[]**

  An array of the `value`s of the selected options.

  This is a convenience prop for setting the `selected` prop on child options.

## Events

The choice list component provides event callbacks for handling user interactions. Learn more about [handling events](https://shopify.dev/docs/api/polaris/using-polaris-web-components#handling-events).

* **change**

  **(event: CallbackEvent<"s-choice-list">) => void**

  Callback when the user changes a choice. Fires simultaneously with onInput.

* **input**

  **(event: CallbackEvent<"s-choice-list">) => void**

  Callback when the user changes a choice. Fires simultaneously with onChange.

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

## Choice

The choice component creates options that let merchants select one or multiple items from a list of choices.

* **disabled**

  **boolean**

  **Default: false**

  Disables the control, disallowing any interaction.

* **id**

  **string**

  A unique identifier for the element.

* **selected**

  **boolean**

  **Default: false**

  Whether the control is active.

* **value**

  **string**

  The value used in form data when the control is checked.

Examples

## Preview

![](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/choicelist-default-BdR0OK5p.png)

### Examples

* #### Create a choice list for selections

  ##### Description

  Present options using a choice list component. This example shows a basic choice list for single selection.

  ##### Default

  ```html
  <s-choice-list>
    <s-choice value="s" selected>Small</s-choice>
    <s-choice value="m">Medium</s-choice>
    <s-choice value="l">Large</s-choice>
    <s-choice value="xl">Extra large</s-choice>
  </s-choice-list>
  ```

* #### Enable multiple selection mode

  ##### Description

  Enable multiple selection mode to allow merchants to select multiple options from the list. This example demonstrates using controlled values with the \`multiple\` property, perfect for filtering interfaces or collecting multiple preferences in forms.

  ##### Default

  ```jsx
  <s-choice-list 
    multiple
    values={['small', 'medium']}
    onChange={(event) => console.log('Selected:', event.currentTarget.values)}
  >
    <s-choice value="small">Small</s-choice>
    <s-choice value="medium">Medium</s-choice>
    <s-choice value="large">Large</s-choice>
  </s-choice-list>
  ```

* #### Handle selection events

  ##### Description

  Subscribe to \`onChange\` and \`onInput\` events to respond when merchants select options. This example shows how to handle selection changes and capture user input in real time, enabling dynamic behavior and form validation based on merchant choices.

  ##### Default

  ```jsx
  <s-choice-list
    onChange={(event) => console.log('onChange:', event.currentTarget.values)}
    onInput={(event) => console.log('onInput:', event.currentTarget.values)}
  >
    <s-choice value="option1">Option 1</s-choice>
    <s-choice value="option2" disabled>Option 2 (disabled)</s-choice>
    <s-choice value="option3">Option 3</s-choice>
  </s-choice-list>
  ```

* #### Compose rich choice content

  ##### Description

  Compose rich choice content by nesting other components within choice elements. This example demonstrates combining images, text, and layout components to create visually enhanced choice options with descriptions and supporting images.

  ##### Default

  ```jsx
  <s-choice-list>
    {/* Composed choice with image and text */}
    <s-choice value="option1">
      <s-stack gap="small-200" alignItems="center" direction="inline">
        <s-box blockSize="40px" inlineSize="40px">
          <s-image src="https://placehold.co/60x60" inlineSize="fill" objectFit="cover" />
        </s-box>
        <s-box>
          <s-text>Option 1</s-text>
          <s-text type="small" color="subdued">
            Additional details for option 1
          </s-text>
        </s-box>
      </s-stack>
    </s-choice>

    {/* Composed choice with nested text */}
    <s-choice value="option2">
      <s-text type="strong">
        Option 2
        <s-text type="small" color="subdued">
          Additional details for option 2
        </s-text>
      </s-text>
    </s-choice>

    {/* Mix of text and composed elements */}
    <s-choice value="option3" disabled>
      Option 3
      <s-text type="small" color="subdued">
        (disabled)
      </s-text>
      <s-text type="strong">Additional details for option 3</s-text>
    </s-choice>
  </s-choice-list>
  ```

## Best practices

* **Choose appropriate selection modes:** Use single selection for mutually exclusive options. Enable `multiple` when merchants can select more than one.
* **Write clear, concise choice labels:** Keep labels short but descriptive enough that merchants understand each option without additional explanation.

## Limitations

Choice list component types other than choice can't be used as options within the choice list.
