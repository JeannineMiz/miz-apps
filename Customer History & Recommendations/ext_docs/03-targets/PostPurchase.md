# Post-Purchase Targets

Enhance the **post-purchase** screen with a menu item, inline block, or full-screen modal.

| target identifier                                  | kind              | where it appears / how it’s launched                       |
|----------------------------------------------------|-------------------|------------------------------------------------------------|
| **pos.purchase.post.action.menu-item.render**      | static menu-item  | Menu entry on post-purchase screen                         |
| **pos.purchase.post.block.render**                 | block section     | Custom section inside the post-purchase screen             |
| **pos.purchase.post.action.render**                | full-screen modal | Opens when the menu-item calls `api.action.presentModal()` |

---

## Menu-item example — React

```tsx
import {Button, reactExtension, useApi}
  from '@shopify/ui-extensions-react/point-of-sale';

const MenuItem = () => {
  const api = useApi<'pos.purchase.post.action.menu-item.render'>();
  return <Button onPress={() => api.action.presentModal()} />;
};

export default reactExtension(
  'pos.purchase.post.action.menu-item.render',
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
  const api = useApi<'pos.purchase.post.block.render'>();
  return (
    <POSBlock action={{title: 'Open action', onPress: api.action.presentModal}}>
      <POSBlockRow>
        <Text>This is a block extension</Text>
        <Text>{`Order ID: ${api.order.id}`}</Text>
      </POSBlockRow>
    </POSBlock>
  );
};

export default reactExtension(
  'pos.purchase.post.block.render',
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
  const api = useApi<'pos.purchase.post.action.render'>();
  return (
    <Navigator>
      <Screen name="PostPurchase" title="Post-purchase">
        <ScrollView>
          <Text>{`Order ID: ${api.order.id}`}</Text>
        </ScrollView>
      </Screen>
    </Navigator>
  );
};

export default reactExtension(
  'pos.purchase.post.action.render',
  () => <Modal />,
);
```

---

## Notes
* The menu-item target can only open its paired modal via `api.action.presentModal()`.  
* All three targets expose `api.order` for the completed checkout order.  
* Use the block for inline confirmation or upsell content; use the modal for multi-step post-purchase workflows.