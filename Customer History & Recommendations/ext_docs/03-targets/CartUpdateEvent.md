# Cart-Update Event Target — `pos.cart-update.event.observe`

Listens for **any change** to the cart and receives a data payload with the
latest cart, connectivity, device, locale, and session information.

> ⚠️ Developer-preview feature — details may change before GA.

| target id                       | kind  | description                                  |
|---------------------------------|-------|----------------------------------------------|
| `pos.cart-update.event.observe` | event | Runs in the background whenever the cart is updated |

---

## Event payload shape&nbsp;(`CartUpdateEventData`)

| field          | type            | notes                          |
|----------------|-----------------|--------------------------------|
| `cart`         | `Cart`          | Full cart snapshot             |
| `connectivity` | `ConnectivityState` | Online / offline state      |
| `device`       | `Device`        | Device metadata                |
| `locale`       | `string`        | Merchant locale (e.g. `en`)    |
| `session`      | `Session`       | Current user session           |

(See canonical types → `types/events/cart-update-event.d.ts`.)

---

## React example — log cart changes

```tsx
import {
  reactExtension,
  useApi,
} from '@shopify/ui-extensions-react/point-of-sale';
import {useEffect} from 'react';

const ObserveCart = () => {
  // Typed for this event target
  const eventData = useApi<'pos.cart-update.event.observe'>();

  useEffect(() => {
    console.log('Cart updated:', eventData.cart);
    console.log('Connectivity:', eventData.connectivity.internetConnected);
  }, [eventData]);

  return null;           // event targets render nothing
};

export default reactExtension(
  'pos.cart-update.event.observe',
  () => <ObserveCart />,
);
```

---

## Plain TypeScript example

```ts
import {extension} from '@shopify/ui-extensions/point-of-sale';

export default extension(
  'pos.cart-update.event.observe',
  (_root, eventData) => {
    // This callback runs on every cart update
    console.log('Cart updated:', eventData.cart);
    console.log('Locale is', eventData.locale);
  },
);
```

---

## Notes
* Event extensions **do not** render UI; return `null` (React) or omit UI calls (vanilla).  
* You can still access standard APIs (e.g., `api.cart`) from the payload if needed.  
* Because this is a developer-preview target, confirm required permissions before shipping.