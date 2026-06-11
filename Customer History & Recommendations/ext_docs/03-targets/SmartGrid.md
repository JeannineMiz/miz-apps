# Smart-Grid Targets (Home Screen)

These two targets work together to put UI on the Shopify POS smart grid.

| target identifier      | kind             | description                                 |
|------------------------|------------------|---------------------------------------------|
| **pos.home.tile.render**  | static tile      | Renders a tile on the POS home screen       |
| **pos.home.modal.render** | full-screen modal | Opens when the tile calls `api.action.presentModal()` |

---

## Tile example — React

```tsx
import {
  Tile,
  reactExtension,
  useApi,
} from '@shopify/ui-extensions-react/point-of-sale';

const TileComponent = () => {
  const api = useApi<'pos.home.tile.render'>();
  return (
    <Tile
      title="My App"
      subtitle="Smart-grid React Ext"
      enabled
      onPress={() => api.action.presentModal()}
    />
  );
};

export default reactExtension('pos.home.tile.render', () => <TileComponent />);
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
} from '@shopify/ui-extensions-react/point-of-sale';

const Modal = () => (
  <Navigator>
    <Screen name="HelloWorld" title="Hello World!">
      <ScrollView>
        <Text>Welcome to the extension!</Text>
      </ScrollView>
    </Screen>
  </Navigator>
);

export default reactExtension('pos.home.modal.render', () => <Modal />);
```

---

## Tile example — Plain TypeScript

```ts
import {extension, Tile} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.tile.render', (root, api) => {
  const tile = root.createComponent(Tile, {
    title: 'My App',
    subtitle: 'Smart-grid vanilla Ext',
    enabled: true,
    onPress: () => api.action.presentModal(),
  });
  root.append(tile);
});
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

export default extension('pos.home.modal.render', (root) => {
  const navigator = root.createComponent(Navigator);
  const screen = root.createComponent(Screen, {
    name: 'HelloWorld',
    title: 'Hello World!',
  });
  const scroll = root.createComponent(ScrollView);
  const text = root.createComponent(Text, null, 'Welcome to the extension!');
  scroll.append(text);

  screen.append(scroll);
  navigator.append(screen);
  root.append(navigator);
});
```

---

## Notes
* The tile surface is small—keep the title & subtitle concise.  
* Use the modal for deeper workflows that need more space.  
* Both targets have access to standard APIs (e.g., `api.action`,
  `api.cart`, etc.) appropriate to their render context.