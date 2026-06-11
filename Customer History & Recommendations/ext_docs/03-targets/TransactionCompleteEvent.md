# Transaction-Complete Event Target — `pos.transaction-complete.event.observe`

Runs **in the background** whenever a POS transaction (sale, return, exchange) completes.

> Developer preview — payload details may change.

| target id                               | kind  | description              |
|-----------------------------------------|-------|--------------------------|
| `pos.transaction-complete.event.observe`| event | Fires on completed sale, return, or exchange |

---

## Event payload (trimmed)

```ts
interface TransactionCompleteData {
  connectivity: ConnectivityState;   // online / offline
  device: Device;                    // id, name, isTablet
  locale: string;                    // merchant locale
  session: Session;                  // user / shop / POS version
  transaction: SaleTransactionData | ReturnTransactionData | ExchangeTransactionData;
}
```

See full schema in Shopify developer preview docs.

---

## React example — log completed transactions

```tsx
import {reactExtension, useApi}
  from '@shopify/ui-extensions-react/point-of-sale';
import {useEffect} from 'react';

const OnTransactionComplete = () => {
  const data = useApi<'pos.transaction-complete.event.observe'>();

  useEffect(() => {
    console.log('Transaction finished:', data.transaction);
    console.log('Device:', data.device.name);
  }, [data]);

  return null;   // event target renders nothing
};

export default reactExtension(
  'pos.transaction-complete.event.observe',
  () => <OnTransactionComplete />,
);
```

---

## Plain TypeScript example

```ts
import {extension} from '@shopify/ui-extensions/point-of-sale';

export default extension(
  'pos.transaction-complete.event.observe',
  (_root, data) => {
    console.log('Transaction finished:', data.transaction);
    console.log('Connectivity:', data.connectivity.internetConnected);
  },
);
```

---

## Notes
* Event extensions don’t display UI; they execute logic (analytics, webhook calls, etc.).  
* Ensure the app has permissions to access transaction data before publishing.  
* `data.transaction.transactionType` indicates whether it’s a sale, return, or exchange.