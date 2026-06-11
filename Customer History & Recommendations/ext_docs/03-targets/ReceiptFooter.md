# Receipt-Footer Target — `pos.receipt-footer.block.render`  
*(developer preview)*

Adds a custom block to the **footer of the printed / emailed POS receipt**.

| target identifier                | kind         | where it appears |
|----------------------------------|--------------|------------------|
| `pos.receipt-footer.block.render`| block footer | Bottom of the POS receipt |

The extension receives the same `TransactionCompleteData` payload that the
`pos.transaction-complete.event.observe` target gets, so you can reference
`data.transaction`, `data.session`, etc.

---

## React example

```tsx
import {
  reactExtension,
  useApi,
  POSReceiptBlock,
  QRCode,
  Text,
} from '@shopify/ui-extensions-react/point-of-sale';

const Block = () => {
  const {transaction} = useApi<'pos.receipt-footer.block.render'>();

  const qrCodeValue =
    transaction.transactionType === 'Exchange'
      ? `exampleExchange=${encodeURIComponent(transaction.exchangeId ?? '')}`
      : `exampleOrder=${encodeURIComponent(transaction.orderId ?? '')}`;

  return (
    <POSReceiptBlock>
      <Text>{`Transaction type: ${transaction.transactionType}`}</Text>
      <Text>{`Total tax: ${transaction.taxTotal}`}</Text>
      <QRCode value={`https://www.shopify.com?${qrCodeValue}`} />
    </POSReceiptBlock>
  );
};

export default reactExtension('pos.receipt-footer.block.render', () => <Block />);
```

---

## Plain TypeScript example

```ts
import {
  extension,
  POSReceiptBlock,
  QRCode,
  Text,
} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.receipt-footer.block.render', (root, api) => {
  const block = root.createComponent(POSReceiptBlock);

  block.append(
    root.createComponent(
      Text,
      null,
      `Transaction type: ${api.transaction.transactionType}`,
    ),
    root.createComponent(
      Text,
      null,
      `Total tax: ${api.transaction.taxTotal}`,
    ),
    root.createComponent(QRCode, {
      value:
        api.transaction.transactionType === 'Exchange'
          ? `https://www.shopify.com?exampleExchange=${encodeURIComponent(
              api.transaction.exchangeId ?? '',
            )}`
          : `https://www.shopify.com?exampleOrder=${encodeURIComponent(
              api.transaction.orderId ?? '',
            )}`,
    }),
  );

  root.append(block);
});
```

---

## Notes
* Runs **after** a transaction completes, when the receipt is being
  generated.  
* Because this feature is in **developer preview**, the payload schema may
  change; rely on `transaction.transactionType` and other documented fields
  rather than undocumented ones.  
* If you need full IntelliSense for the payload, reference or extend the
  `TransactionCompleteData` declaration in  
  `types/events/transaction-complete-event.d.ts`.