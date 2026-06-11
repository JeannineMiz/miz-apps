# React Helper Hooks

The package `@shopify/ui-extensions-react/point-of-sale` provides a set of
hooks that wrap POS UI-extension APIs and *RemoteSubscribable* objects so
your components update automatically when data changes.

---

## Hook reference

| hook | returns | description |
|------|---------|-------------|
| **useApi&lt;Target&gt;()** | API object for the render target | Access runtime APIs (`cart`, `action`, etc.) inside React |
| **useCartSubscription()** | `Cart` | React state wrapper around `api.cart.subscribable` |
| **useStatefulSubscribableCart()** | `StatefulRemoteSubscribable<Cart>` | Multiple cart subscriptions |
| **useConnectivitySubscription()** | `ConnectivityState` | Device connectivity (online / offline) |
| **useStatefulSubscribableConnectivity()** | `StatefulRemoteSubscribable<ConnectivityState>` | Multiple connectivity subscriptions |
| **useLocaleSubscription()** | `string` | Merchant locale (`en`, `fr`, …) |
| **useStatefulSubscribableLocale()** | `StatefulRemoteSubscribable<string>` | Multiple locale subscriptions |
| **useScannerDataSubscription()** | `ScannerSubscriptionResult` | Most recent scan result |
| **useStatefulSubscribableScannerData()** | `StatefulRemoteSubscribable<ScannerSubscriptionResult>` | Multiple scanner subscriptions |
| **useScannerSourcesSubscription()** | `ScannerSource[]` | Available scanner sources |
| **useStatefulSubscribableScannerSources()** | `StatefulRemoteSubscribable<ScannerSource[]>` | Multiple scanner-source subscriptions |

Destroy helpers (plain functions, not hooks):

* `destroyStatefulSubscribableConnectivity()`  
* `destroyStatefulSubscribableLocale()`  
* `destroyStatefulSubscribableScannerData()`  
* `destroyStatefulSubscribableScannerSources()`

All hooks & helpers live in:

```
@shopify/ui-extensions-react/point-of-sale
```

---

## Example — `useCartSubscription`

```tsx
import {Tile, reactExtension, useCartSubscription}
  from '@shopify/ui-extensions-react/point-of-sale';

const CartTile = () => {
  const cart = useCartSubscription();
  return (
    <Tile
      title="Cart"
      subtitle={`${cart.lineItems.length} items`}
      enabled
    />
  );
};

export default reactExtension('pos.home.tile.render', () => <CartTile />);
```

---

## Example — `useApi` typed per target

```tsx
import {reactExtension, useApi, Tile}
  from '@shopify/ui-extensions-react/point-of-sale';

const TileApp = () => {
  const api = useApi<'pos.home.tile.render'>();  // type-safe!
  return <Tile title="Open" onPress={() => api.action.presentModal()} />;
};

export default reactExtension('pos.home.tile.render', () => <TileApp />);