---
title: Link
description: >-
  The link component makes text interactive, allowing users to trigger actions
  through tappable text. Use it for lightweight interactions, navigation
  triggers, or actions embedded within text content.


  Links support the command system for controlling other components
  declaratively. Use `command` and `commandFor` to show, hide, or toggle modals
  and other targetable elements. For primary actions like submitting forms or
  triggering operations, use
  [button](/docs/api/pos-ui-extensions/2026-01/web-components/actions/button)
  instead.
api_version: 2026-01
api_name: pos-ui-extensions
source_url:
  html: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/actions/link
  md: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/actions/link.md
---

# Link

The link component makes text interactive, allowing users to trigger actions through tappable text. Use it for lightweight interactions, navigation triggers, or actions embedded within text content.

Links support the command system for controlling other components declaratively. Use `command` and `commandFor` to show, hide, or toggle modals and other targetable elements. For primary actions like submitting forms or triggering operations, use [button](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/web-components/actions/button) instead.

#### Use cases

* **Inline navigation:** Add tappable text links within content to navigate between related views or open detail screens.
* **Help references:** Link to help documentation, policies, or external resources from within the POS interface.
* **Modal triggers:** Use the command system to show, hide, or toggle modals and other targetable elements through text links.
* **Contextual actions:** Embed lightweight actions within text content, such as "View order" or "Contact customer" links.

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

Configure the following properties on the link component.

* **accessibilityLabel**

  **string**

  A label that describes the purpose or contents of the link. It will be read to users using assistive technologies such as screen readers.

  Use this when using only an icon or the content of the link is not enough context for users using assistive technologies.

* **command**

  **'--auto' | '--show' | '--hide' | '--toggle' | '--copy'**

  **Default: '--auto'**

  Sets the action the `commandFor` should take when this clickable is activated.

  See the documentation of particular components for the actions they support.

  * `--auto`: a default action for the target component.
  * `--show`: shows the target component.
  * `--hide`: hides the target component.
  * `--toggle`: toggles the target component.
  * `--copy`: copies the target ClipboardItem.

* **commandFor**

  **string**

  ID of a component that should respond to activations (e.g. clicks) on this component.

  See `command` for how to control the behavior of the target.

* **id**

  **string**

  A unique identifier for the element.

## Events

The link component provides event callbacks for handling user interactions. Learn more about [handling events](https://shopify.dev/docs/api/polaris/using-polaris-web-components#handling-events).

* **click**

  **(event: CallbackEvent<"s-link">) => void**

  Called when the link is activated.

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

![](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2026-01/link-default-D3sbafMb.png)

### Examples

* #### Create an interactive link

  ##### Description

  Create interactive links using the link component. This example demonstrates basic link usage with onClick handlers for custom actions.

  ##### Default

  ```html
  <s-link onClick={handleLinkTap}>Tappable link</s-link>
  ```

## Best practices

* **Write clear, descriptive text:** link text should clearly indicate the action or destination, helping users understand what will happen when they tap.
* **Keep text concise:** Use brief, actionable language that doesn't clutter the interface. Links work well embedded within text content.
* **Provide accessibility labels when needed:** Use `accessibilityLabel` when the visible text doesn't fully describe the action, especially for short labels like "Edit" or "View".
* **Use the command system for component control:** Use `command` (`--show`, `--hide`, `--toggle`, `--copy`) with `commandFor` to control modals and other components declaratively.
* **Handle onClick for custom logic:** Implement `onClick` handlers for actions like showing toasts, updating state, or triggering side effects.
* **Reserve buttons for primary actions:** Use button for prominent actions like "Save" or "Submit". Use link for secondary, embedded, or text-based interactions.
