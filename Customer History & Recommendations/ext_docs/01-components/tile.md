---
title: Tile
description: >-
  The tile component displays interactive buttons for the POS smart grid. Use
  tiles as customizable shortcuts that allow merchants to quickly access
  workflows, actions, and information from the smart grid.


  Tiles can change their appearance, content, and enabled state based on
  surrounding context such as cart contents, device conditions, or runtime
  state. They can display contextual information through titles, subtitles, and
  badge values.


  Each POS UI extension can only render one tile component for each [home screen
  tile
  target](/docs/api/pos-ui-extensions/2026-01/targets/home-screen#home-screen-tile-).
api_version: 2026-01
api_name: pos-ui-extensions
source_url:
  html: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/actions/tile
  md: >-
    https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/actions/tile.md
---

# Tile

The tile component displays interactive buttons for the POS smart grid. Use tiles as customizable shortcuts that allow merchants to quickly access workflows, actions, and information from the smart grid.

Tiles can change their appearance, content, and enabled state based on surrounding context such as cart contents, device conditions, or runtime state. They can display contextual information through titles, subtitles, and badge values.

Each POS UI extension can only render one tile component for each [home screen tile target](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/home-screen#home-screen-tile-).

#### Use cases

* **Quick actions:** Create action shortcuts like "Apply 10% discount" or "Add popular item."
* **Contextual info:** Display dynamic subtitles showing cart totals or item counts.
* **Notifications:** Show badges for pending items, alerts, or status indicators.
* **Workflow entry:** Provide entry points to launch detailed modal workflows.

### Support Targets (1)

### Supported targets

* [pos.​home.​tile.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-01/targets/home-screen#home-screen-targets)

## Properties

Configure the following properties on the tile component.

* **disabled**

  **boolean**

  **Default: false**

  Disables the tile meaning it cannot be clicked or receive focus.

* **heading**

  **string**

  **Default: ''**

  A title that describes the content of the tile.

* **id**

  **string**

  A unique identifier for the element.

* **itemCount**

  **number**

  A numeric indicator rendered within the tile (for example, a count or a step number).

  * When provided, the indicator is displayed inside the tile.
  * Intended for small integers. It may clamp, truncate, or abbreviate larger values.

* **subheading**

  **string**

  **Default: ''**

  Supporting text displayed below the heading.

* **tone**

  **'auto' | 'neutral' | 'accent'**

  **Default: 'auto'**

  Sets the tone of the tile, based on the intention of the information being conveyed.

## Events

The tile component provides event callbacks for handling user interactions. Learn more about [handling events](https://shopify.dev/docs/api/polaris/using-polaris-web-components#handling-events).

* **click**

  **(event: CallbackEvent<"s-tile">) => void**

  Callback when the tile is activated.

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

![](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2026-01/tile-default-Bh6-qbCa.png)

### Examples

* #### Create a smart grid tile

  ##### Description

  Create interactive smart grid shortcuts using a tile component with customizable title, subtitle, and badge. This example shows a basic tile for the POS smart grid.

  ##### Default

  ```html
  <s-tile heading="Extension title" subheading="Subtitle" />
  <s-tile heading="Extension title" subheading="Subtitle" tone="accent" />
  ```

## Best practices

* **Write action-oriented headings:** Use specific language like "Apply loyalty discount" rather than generic terms like "Loyalty app."
* **Provide contextual subheadings:** Show dynamic information like cart totals, eligibility requirements, or current status.
* **Use meaningful item counts:** Display counts for actionable items like pending notifications or items requiring action, not just informational counts.
* **Launch modals for workflows:** Use `onClick` with `shopify.action.presentModal()` rather than performing complex operations directly.

## Limitations

The tile component supports click and long press interactions only. Swipe, drag, and other gestures aren't supported.
