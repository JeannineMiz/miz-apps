# Draft-Order Details Targets

Extend the Shopify POS **draft-order details** screen with a menu item, a
block section, or a full-screen modal.

| target identifier                                       | kind              | where it appears / how it’s launched                    |
|---------------------------------------------------------|-------------------|---------------------------------------------------------|
| **pos.draft-order-details.action.menu-item.render**     | static menu-item  | Menu entry on the draft-order details screen            |
| **pos.draft-order-details.block.render**                | block section     | Custom section inside the draft-order details screen    |
| **pos.draft-order-details.action.render**               | full-screen modal | Opens when the menu-item calls `api.action.presentModal()` |

---

## Menu-item example — React

```tsx
import {
  Button,
  reactExtension,
  useApi,
} from '@shopify/ui-extensions-react/point-of-sale';

const MenuItem = () => {
  const api = useApi<'pos.draft-order-details.action.menu-item.render'>();
  return <Button onPress={() => api.action.presentModal()} />;
};

export default reactExtension(
  'pos.draft-order-details.action.menu-item.render',
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
  const api = useApi<'pos.draft-order-details.block.render'>();
  return (
    <POSBlock action={{title: 'Open action', onPress: api.action.presentModal}}>
      <POSBlockRow>
        <Text>This is a block extension</Text>
        <Text>{`Draft Order ID: ${api.draftOrder.id}`}</Text>
      </POSBlockRow>
    </POSBlock>
  );
};

export default reactExtension(
  'pos.draft-order-details.block.render',
  () => <Block />,
);
```

---

## Modal example — React

```tsx
import {
  Navigator,
  Screen,
  ScrollView,
  Text,
  reactExtension,
  useApi,
} from '@shopify/ui-extensions-react/point-of-sale';

const Modal = () => {
  const api = useApi<'pos.draft-order-details.action.render'>();
  return (
    <Navigator>
      <Screen name="DraftOrderDetails" title="Draft Order Details">
        <ScrollView>
          <Text>{`Order ID: ${api.draftOrder.id}`}</Text>
        </ScrollView>
      </Screen>
    </Navigator>
  );
};

export default reactExtension(
  'pos.draft-order-details.action.render',
  () => <Modal />,
);
```

---

## Menu-item example — Plain TypeScript

```ts
import {Button, extension}
  from '@shopify/ui-extensions/point-of-sale';

export default extension(
  'pos.draft-order-details.action.menu-item.render',
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
  'pos.draft-order-details.block.render',
  (root, api) => {
    const block = root.createComponent(POSBlock, {
      action: {title: 'Open action', onPress: api.action.presentModal},
    });

    const row = root.createComponent(POSBlockRow);
    row.append(
      root.createComponent(Text, null, 'This is a block extension'),
      root.createComponent(Text, null, `Draft Order ID: ${api.draftOrder.id}`),
    );

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
  ScrollView,
  Text,
  extension,
} from '@shopify/ui-extensions/point-of-sale';

export default extension(
  'pos.draft-order-details.action.render',
  (root, api) => {
    const navigator = root.createComponent(Navigator);
    const screen = root.createComponent(Screen, {
      name: 'DraftOrderDetails',
      title: 'Draft Order Details',
    });
    const scroll = root.createComponent(ScrollView);
    const text = root.createComponent(
      Text,
      null,
      `Order ID: ${api.draftOrder.id}`,
    );

    scroll.append(text);
    screen.append(scroll);
    navigator.append(screen);
    root.append(navigator);
  },
);
```

---

## Notes
* The menu-item can only open its paired modal via
  `api.action.presentModal()`.  
* All three targets expose `api.draftOrder` for information about the
  current draft order.  
* Use the block for inline UI; use the modal for multi-step workflows.