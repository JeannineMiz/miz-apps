---
title: Image
description: >-
  The image component displays visual content. Use images to showcase products,
  illustrate concepts, or provide visual context in POS workflows.


  Images are display-only components. For interactive functionality, wrap them
  in [button](/docs/api/pos-ui-extensions/2026-01/web-components/actions/button)
  or
  [clickable](/docs/api/pos-ui-extensions/2026-01/web-components/actions/clickable)
  components.
api_version: 2026-01
api_name: pos-ui-extensions
source_url:
  html: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/media-and-visuals/image
  md: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/media-and-visuals/image.md
---

# Image

The image component displays visual content. Use images to showcase products, illustrate concepts, or provide visual context in POS workflows.

Images are display-only components. For interactive functionality, wrap them in [button](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/web-components/actions/button) or [clickable](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/web-components/actions/clickable) components.

#### Use cases

* **Product images:** Display images in catalogs and order details to help identify items.
* **Marketing content:** Show promotional banners or seasonal content for business information.
* **Visual guidance:** Provide instructions or onboarding content for complex processes.
* **Branding:** Display logos or store imagery to maintain brand consistency.

### Support Targets (18)

### Supported targets

* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/customer-details#customer-details-action-modal-)
* [pos.​customer-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/customer-details#customer-details-targets)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​draft-order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/draft-order-details#draft-order-details-targets)
* [pos.​exchange.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/post-exchange#post-exchange-action-modal-)
* [pos.​exchange.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/post-exchange#post-exchange-targets)
* [pos.​home.​modal.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/home-screen#home-screen-action-modal-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/order-details#order-details-action-modal-)
* [pos.​order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/order-details#order-details-targets)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/product-details#product-details-action-modal-)
* [pos.​product-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/product-details#product-details-targets)
* [pos.​purchase.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/post-purchase#post-purchase-action-modal-)
* [pos.​purchase.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/post-purchase#post-purchase-targets)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/register-details#register-details-action-modal-)
* [pos.​register-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/register-details#register-details-block-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/post-return#post-return-action-modal-)
* [pos.​return.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/post-return#post-return-targets)

## Properties

Configure the following properties on the image component.

* **alt**

  **string**

  **Default: \`''\`**

  An alternative text description that describe the image for the reader to understand what it is about. It is extremely useful for both users using assistive technology and sighted users. A well written description provides people with visual impairments the ability to participate in consuming non-text content. When a screen readers encounters an `s-image`, the description is read and announced aloud. If an image fails to load, potentially due to a poor connection, the `alt` is displayed on screen instead. This has the benefit of letting a sighted buyer know an image was meant to load here, but as an alternative, they’re still able to consume the text content. Read [considerations when writing alternative text](https://www.shopify.com/ca/blog/image-alt-text#4) to learn more.

* **id**

  **string**

  A unique identifier for the element.

* **inlineSize**

  **'fill' | 'auto'**

  **Default: 'fill'**

  The displayed inline width of the image.

  * `fill`: the image will takes up 100% of the available inline size.
  * `auto`: the image will be displayed at its natural size.

  **Mobile surfaces:** Always wrap your image in a box with a set width and height. ScrollViews on mobile have a dynamic height, which can cause images to appear inconsistently without defined dimensions.

* **objectFit**

  **'contain' | 'cover'**

  **Default: 'contain'**

  Determines how the content of the image is resized to fit its container. The image is positioned in the center of the container.

* **src**

  **string**

  The image source, which should be a remote URL.

  When the image is loading or no `src` is provided, a placeholder will be rendered.

Examples

## Preview

![](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/image-default-C9wYXMTU.png)

### Examples

* #### Display an image

  ##### Description

  Display visual content using an image component with automatic loading optimization and error handling. This example shows a basic image with source URL and alt text for accessibility.

  ##### Default

  ```html
  <s-image src="example.png" inlineSize="auto" />
  ```

## Best practices

* **Choose appropriate sizing:** Use `inlineSize="fill"` for responsive layouts. Use `inlineSize="auto"` to maintain natural dimensions.
* **Select object fit behavior:** Use `objectFit="contain"` to show the complete image. Use `objectFit="cover"` to fill the container, accepting cropping.
* **Implement error handling and loading states:** Image loading and caching behavior depends on the browser and network conditions—implement proper error handling and loading states for better user experience.

## Limitations

Large images can impact performance—ensure proper optimization and compression for better loading times.
