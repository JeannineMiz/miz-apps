# Cash-Tracking Session Event Targets  
*(developer preview)*

These targets fire when a cash-tracking session **starts** or **completes**
on Shopify POS.

| target identifier                                          | kind  | when it fires |
|------------------------------------------------------------|-------|---------------|
| **pos.cash-tracking-session-start.event.observe**          | event | Session is opened |
| **pos.cash-tracking-session-complete.event.observe**       | event | Session is closed |

Both targets deliver a payload that includes:

* cash-tracking event object (`cashTrackingSessionStart` or `cashTrackingSessionComplete`)
* `connectivity` – online/offline state  
* `device` – device metadata  
* `locale` – merchant locale  
* `session` – current user session (currency, location, POS version, etc.)

---

## Payload shapes (trimmed)

```ts
interface CashTrackingSessionStartData {
  cashTrackingSessionStart: { id: number; openingTime: string };
  connectivity: ConnectivityState;
  device: Device;
  locale: string;
  session: Session;
}

interface CashTrackingSessionCompleteData {
  cashTrackingSessionComplete: {
    id: number;
    openingTime: string;
    closingTime: string;
  };
  connectivity: ConnectivityState;
  device: Device;
  locale: string;
  session: Session;
}
```

See full spec → `types/events/cash-tracking-event.d.ts`.

---

## React example — observe session **start**

```tsx
import {reactExtension, useApi}
  from '@shopify/ui-extensions-react/point-of-sale';
import {useEffect} from 'react';

const OnCashStart = () => {
  const data = useApi<'pos.cash-tracking-session-start.event.observe'>();

  useEffect(() => {
    console.log('Cash-tracking session opened:', data.cashTrackingSessionStart);
    console.log('Device:', data.device.name);
  }, [data]);

  return null;   // event targets render no UI
};

export default reactExtension(
  'pos.cash-tracking-session-start.event.observe',
  () => <OnCashStart />,
);
```

---

## React example — observe session **complete**

```tsx
import {reactExtension, useApi}
  from '@shopify/ui-extensions-react/point-of-sale';
import {useEffect} from 'react';

const OnCashEnd = () => {
  const data = useApi<'pos.cash-tracking-session-complete.event.observe'>();

  useEffect(() => {
    console.log('Cash-tracking session closed:', data.cashTrackingSessionComplete);
    console.log('Locale:', data.locale);
  }, [data]);

  return null;
};

export default reactExtension(
  'pos.cash-tracking-session-complete.event.observe',
  () => <OnCashEnd />,
);
```

---

## Plain TypeScript example — session complete

```ts
import {extension} from '@shopify/ui-extensions/point-of-sale';

export default extension(
  'pos.cash-tracking-session-complete.event.observe',
  (_root, data) => {
    console.log('Cash session complete:', data.cashTrackingSessionComplete);
    console.log('POS version:', data.session.posVersion);
  },
);
```

---

## Notes
* Event extensions do **not** display UI; they run in the background.  
* These targets are part of a developer preview—API details may change.  
* Ensure the extension has permission to read cash-tracking data before publishing.