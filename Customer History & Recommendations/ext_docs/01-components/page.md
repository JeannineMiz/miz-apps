---
title: Page
description: >-
  The page component serves as the main container for app content with preset
  layouts and heading controls. Use it to structure full-screen views with
  consistent navigation and content organization.


  Page is designed for full-screen modal interfaces and isn't suitable for
  inline content or partial page layouts within existing POS screens.
api_version: 2026-01
api_name: pos-ui-extensions
source_url:
  html: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/page
  md: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/page.md
---

# Page

The page component serves as the main container for app content with preset layouts and heading controls. Use it to structure full-screen views with consistent navigation and content organization.

Page is designed for full-screen modal interfaces and isn't suitable for inline content or partial page layouts within existing POS screens.

#### Use cases

* **Full-screen interfaces:** Create interfaces for complex workflows like customer management or inventory.
* **Header layouts:** Structure content areas with consistent headers, titles, and action buttons.
* **Sidebar support:** Organize content with built-in sidebar for secondary information or tools.
* **Consistent patterns:** Establish consistent page layouts to maintain user familiarity.

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

Configure the following properties on the page component.

* **heading**

  **string**

  **Default: : ''**

  The main page heading, displayed in the action bar at the top of the page.

* **id**

  **string**

  A unique identifier for the element.

* **subheading**

  **string**

  A secondary page heading, displayed under the main heading in the action bar.

## Slots

The page component supports slots for additional content placement within the page. Learn more about [using slots](https://shopify.dev/docs/api/polaris/using-polaris-web-components#slots).

* **aside**

  **HTMLElement**

  Content to display in the page's sidebar.

* **secondary-actions**

  **HTMLElement**

  Button element to display in the action bar. Only a single button is supported.

Examples

## Preview

![](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/page-default-CZqYcs-O.png)

### Examples

* #### Structure a page layout

  ##### Description

  Structure full-screen views using a page component with built-in header and content layouts. This example shows a basic page with title and main content area.

  ##### Default

  ```html
  <s-page heading="Title">
    <s-button slot="secondary-actions">
      Action
    </s-button>
  </s-page>
  ```

## Best practices

* **Write descriptive headings:** Use heading and subheading to describe the page's purpose and provide context about the current workflow step.
* **Place one primary action in action bar:** Use the secondary-actions slot for the page's most important action.
* **Use aside for supplementary content:** Reserve the aside slot for navigation, contextual help, or supporting information.

## Limitations

The `secondary-actions` slot supports only a single button element. Multiple actions in the action bar aren't supported and should be handled within the main content area.
