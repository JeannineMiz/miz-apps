# Product-Details Targets

Extend the Shopify POS **product details** screen with a menu item, an
inline block, or a full-screen modal.

| target identifier                                   | kind              | where it appears / how it’s launched                    |
|-----------------------------------------------------|-------------------|---------------------------------------------------------|
| **pos.product-details.action.menu-item.render**     | static menu-item  | Menu entry on the product details screen               |
| **pos.product-details.block.render**                | block section     | Custom section inside the product details screen       |
| **pos.product-details.action.render**               | full-screen modal | Opens when the menu-item calls `api.action.presentModal()` |

---

## Menu-item example — React

```tsx
import {Button, reactExtension, useApi}
  from '@shopify/ui-extensions-react/point-of-sale';

const MenuItem = () => {
  const api = useApi<'pos.product-details.action.menu-item.render'>();
  return <Button onPress={() => api.action.presentModal()} />;
};

export default reactExtension(
  'pos.product-details.action.menu-item.render',
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
  const api = useApi<'pos.product-details.block.render'>();
  return (
    <POSBlock action={{title: 'Open action', onPress: api.action.presentModal}}>
      <POSBlockRow>
        <Text>This is a block extension</Text>
        <Text>{`Product ID: ${api.product.id}`}</Text>
      </POSBlockRow>
    </POSBlock>
  );
};

export default reactExtension(
  'pos.product-details.block.render',
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
  const api = useApi<'pos.product-details.action.render'>();
  return (
    <Navigator>
      <Screen name="ProductDetails" title="Product Details">
        <ScrollView>
          <Text>{`Product ID: ${api.product.id}`}</Text>
        </ScrollView>
      </Screen>
    </Navigator>
  );
};

export default reactExtension(
  'pos.product-details.action.render',
  () => <Modal />,
);
```

---

## Menu-item example — Plain TypeScript

```ts
import {Button, extension}
  from '@shopify/ui-extensions/point-of-sale';

export default extension(
  'pos.product-details.action.menu-item.render',
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
  'pos.product-details.block.render',
  (root, api) => {
    const block = root.createComponent(POSBlock, {
      action: {title: 'Open action', onPress: api.action.presentModal},
    });

    const row = root.createComponent(POSBlockRow);
    row.append(
      root.createComponent(Text, null, 'This is a block extension'),
      root.createComponent(Text, null, `Product ID: ${api.product.id}`),
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
  'pos.product-details.action.render',
  (root, api) => {
    const navigator = root.createComponent(Navigator);
    const screen = root.createComponent(Screen, {
      name: 'ProductDetails',
      title: 'Product Details',
    });
    const scroll = root.createComponent(ScrollView);
    const text = root.createComponent(
      Text,
      null,
      `Product ID: ${api.product.id}`,
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
* The **menu-item** target can only open its paired modal via
  `api.action.presentModal()`.  
* All three targets expose `api.product` for information about the current
  product.  
* Use the **block** for inline UI; use the **modal** for multi-step or
  data-heavy workflows.