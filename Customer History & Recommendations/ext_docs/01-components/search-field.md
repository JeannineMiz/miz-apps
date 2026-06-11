---
title: Search field
description: >-
  The search field component captures search terms for filtering and search
  functionality. Use it to enable inline search within specific sections or
  lists, like filtering products or searching customers.
api_version: 2026-01
api_name: pos-ui-extensions
source_url:
  html: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/search-field
  md: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/search-field.md
---

# Search field

The search field component captures search terms for filtering and search functionality. Use it to enable inline search within specific sections or lists, like filtering products or searching customers.

#### Use cases

* **Inline filtering:** Enable filtering of lists, tables, or content sections.
* **Quick search:** Provide search inputs for finding items within catalogs or data sets.
* **Real-time filtering:** Support filtering as users type with automatic clear functionality.
* **Contextual search:** Implement search within product variants, order items, or customer lists.

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

Configure the following properties on the search field component.

* **disabled**

  **boolean**

  **Default: false**

  Disables the field, disallowing any interaction.

* **id**

  **string**

  A unique identifier for the element.

* **placeholder**

  **string**

  A short hint that describes the expected value of the field.

* **value**

  **string**

  The current value for the field. If omitted, the field will be empty.

## Events

The search field component provides event callbacks for handling user interactions. Learn more about [handling events](https://shopify.dev/docs/api/polaris/using-polaris-web-components#handling-events).

* **blur**

  **(event: CallbackEvent<"s-search-field">) => void**

  Callback when the field loses focus.

* **change**

  **(event: CallbackEvent<"s-search-field">) => void**

  Callback when the field loses focus after the user changes the value in the field.

* **focus**

  **(event: CallbackEvent<"s-search-field">) => void**

  Callback when the field is focused.

* **input**

  **(event: CallbackEvent<"s-search-field">) => void**

  Callback when the user changes the value in the field.

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

![](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/search-field-default-37hn9zFB.png)

### Examples

* #### Enable search with a search field

  ##### Description

  Enable search functionality using a search field component. This example shows a basic search field with placeholder text.

  ##### Default

  ```html
  <s-search-field placeholder="Search" />
  ```

* #### Handle search input events

  ##### Description

  Subscribe to search input events to respond when merchants enter search terms. This example demonstrates handling \`onChange\` and \`onInput\` events for real-time search functionality, debounced filtering, or triggering search API calls as merchants type their queries.

  ##### Default

  ```jsx
  <s-search-field
    placeholder="Search products..."
    value=""
    onInput={(event) => console.log('Input:', event.currentTarget.value)}
    onChange={(event) => console.log('Change:', event.currentTarget.value)}
    onFocus={(event) => console.log('Search focused')}
    onBlur={(event) => console.log('Search blurred')}
  />
  ```

## Best practices

* **Use for inline search and filtering:** Choose search field for filtering within specific sections or lists, not for global navigation or complex multi-step searches.
* **Follow placeholder pattern:** Use `"Search {items}"` format like `"Search products"` or `"Search customers"` to clarify scope.
* **Choose the right event:** Use `input` for real-time filtering as users type. Use `change` for expensive operations that should wait until typing completes.
* **Handle empty values:** When the field is cleared, reset filters or show all items appropriately.
