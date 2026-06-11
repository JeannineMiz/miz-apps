---
title: Spinner
description: >-
  The spinner component indicates ongoing processes or loading states. Use it to
  provide visual feedback when content is loading or an operation is in
  progress, helping users understand that the system is working.
api_version: 2026-01
api_name: pos-ui-extensions
source_url:
  html: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/feedback-and-status-indicators/spinner
  md: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/feedback-and-status-indicators/spinner.md
---

# Spinner

The spinner component indicates ongoing processes or loading states. Use it to provide visual feedback when content is loading or an operation is in progress, helping users understand that the system is working.

#### Use cases

* **Data loading:** Indicate when product catalogs, customer lists, or order histories are being fetched.
* **Processing feedback:** Show that an operation like payment processing, sync, or data submission is in progress.
* **Search results:** Display a loading state while search results are being retrieved from the server.
* **Content transitions:** Provide visual feedback during content transitions or screen loading.

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

Configure the following properties on the spinner component.

* **accessibilityLabel**

  **string**

  A label that describes the purpose of the progress. When set, it will be announced to users using assistive technologies and will provide them with more context. Providing an `accessibilityLabel` is recommended if there is no accompanying text describing that something is loading.

* **id**

  **string**

  A unique identifier for the element.

Examples

## Preview

![](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2026-01/spinner-default-DBmbHLPC.png)

### Examples

* #### Show loading state with a spinner

  ##### Description

  Display loading states using a spinner component. This example shows a basic spinner that indicates an ongoing process.

  ##### Default

  ```html
  <s-spinner accessibilityLabel="Loading content" />
  <s-spinner accessibilityLabel="Loading content" />
  <s-spinner accessibilityLabel="Loading content" />
  ```

## Best practices

* **Use for asynchronous operations:** Display spinners during data fetching, form submission, or any operation that requires waiting time.
* **Provide accessibility labels:** Always use `accessibilityLabel` to describe what is loading, helping screen reader users understand the context.
* **Position strategically:** Place spinners where content will appear, or center them in the loading area to provide clear visual feedback.
* **Don't overuse:** Avoid multiple spinners on the same screen. Use a single spinner to represent the overall loading state when possible.
* **Consider alternatives for long waits:** For operations taking more than a few seconds, consider using status messages instead.
