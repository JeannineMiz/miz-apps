# Cart-Line-Item Detail Targets

These three targets let your extension add UI to the **cart line-item details** flow in Shopify POS.

| target identifier                                         | kind              | where it appears / how it’s launched                              |
|-----------------------------------------------------------|-------------------|-------------------------------------------------------------------|
| **pos.cart.line-item-details.action.menu-item.render**    | static menu-item  | A menu entry on the cart line-item details screen                 |
| **pos.cart.line-item-details.block.render**               | block section     | A custom section *within* the manage line-item details screen     |
| **pos.cart.line-item-details.action.render**              | full-screen modal | Opens when the menu-item calls `api.action.presentModal()`        |

---

## Menu-item example — React

```tsx
import {Button, reactExtension, useApi}
  from '@shopify/ui-extensions-react/point-of-sale';

const MenuItem = () => {
  const api = useApi<'pos.cart.line-item-details.action.menu-item.render'>();
  return <Button onPress={() => api.action.presentModal()} />;
};

export default reactExtension(
  'pos.cart.line-item-details.action.menu-item.render',
  () => <MenuItem />,
);
```

---

## Block example — React

```tsx
import {
  POSBlock,
  POSBlockRow,
  Text,
  reactExtension,
  useApi,
} from '@shopify/ui-extensions-react/point-of-sale';

const Block = () => {
  const api = useApi<'pos.cart.line-item-details.block.render'>();
  return (
    <POSBlock
      action={{title: 'Open action', onPress: api.action.presentModal}}
    >
      <POSBlockRow>
        <Text>This is a block extension</Text>
        <Text>{`Title for this line item: ${api.cartLineItem.title}`}</Text>
      </POSBlockRow>
    </POSBlock>
  );
};

export default reactExtension(
  'pos.cart.line-item-details.block.render',
  () => <Block />,
);
```

---

## Modal example — React

```tsx
import {
  Navigator,
  Screen,
  Text,
  reactExtension,
  useApi,
} from '@shopify/ui-extensions-react/point-of-sale';

const Modal = () => {
  const api = useApi<'pos.cart.line-item-details.action.render'>();
  return (
    <Navigator>
      <Screen name="LineItem" title="Cart Line Item">
        <Text>{`Title: ${api.cartLineItem.title}`}</Text>
      </Screen>
    </Navigator>
  );
};

export default reactExtension(
  'pos.cart.line-item-details.action.render',
  () => <Modal />,
);
```

---

## Menu-item example — Plain TypeScript

```ts
import {Button, extension}
  from '@shopify/ui-extensions/point-of-sale';

export default extension(
  'pos.cart.line-item-details.action.menu-item.render',
  (root, api) => {
    const button = root.createComponent(Button, {
      onPress: () => api.action.presentModal(),
    });
    root.append(button);
  },
);
```

---

## Block example — Plain TypeScript

```ts
import {
  POSBlock,
  POSBlockRow,
  Text,
  extension,
} from '@shopify/ui-extensions/point-of-sale';

export default extension(
  'pos.cart.line-item-details.block.render',
  (root, api) => {
    const block = root.createComponent(POSBlock, {
      action: {title: 'Open action', onPress: api.action.presentModal},
    });

    const row = root.createComponent(POSBlockRow);
    const main = root.createComponent(Text, null, 'This is a block extension');
    const subtitle = root.createComponent(
      Text,
      null,
      `Title: ${api.cartLineItem.title}`,
    );

    row.append(main);
    row.append(subtitle);
    block.append(row);
    root.append(block);
  },
);
```

---

## Modal example — Plain TypeScript

```ts
import {
  Navigator,
  Screen,
  Text,
  extension,
} from '@shopify/ui-extensions/point-of-sale';

export default extension(
  'pos.cart.line-item-details.action.render',
  (root, api) => {
    const navigator = root.createComponent(Navigator);
    const screen = root.createComponent(Screen, {
      name: 'LineItem',
      title: 'Cart Line Item',
    });
    const text = root.createComponent(
      Text,
      null,
      `Title: ${api.cartLineItem.title}`,
    );

    screen.append(text);
    navigator.append(screen);
    root.append(navigator);
  },
);
```

---

## Notes
* **menu-item** and **block** targets share the same `api.cartLineItem` object for data about the selected line item.  
* The menu-item can only open its paired modal via `api.action.presentModal()`.  
* Use the **block** target for inline UI; use the **modal** for full-screen workflows.