/** ======================================================================
 *  Transaction-complete event payload  (developer preview)
 *  Docs: docs/03-targets/TransactionCompleteEvent.md
 *  ====================================================================== */

export type ConnectivityStateSeverity = 'Connected' | 'Disconnected';

export interface ConnectivityState {
  internetConnected: ConnectivityStateSeverity;
}

export interface Device {
  deviceId: number;
  isTablet: boolean;
  name: string;
}

/* -- Session (trimmed) ------------------------------------------------- */
export type CurrencyCode = string; // 'USD' | 'EUR' | … (full list omitted)

export interface Session {
  currency: CurrencyCode;
  locationId: number;
  posVersion: string;
  shopDomain: string;
  shopId: number;
  userId: number;
  staffMemberId?: number;
}

/* -- Transaction union ------------------------------------------------- */
export interface Money { amount: number; currency: string; }

export interface SaleTransactionData {
  transactionType: 'Sale';
  grandTotal: Money;
  subtotal: Money;
  taxTotal: Money;
  lineItems: unknown[];       // expand later if needed
  paymentMethods: unknown[];  // expand later if needed
  orderId?: number;
}

export interface ReturnTransactionData {
  transactionType: 'Return';
  // …fields omitted for brevity
}

export interface ExchangeTransactionData {
  transactionType: 'Exchange';
  // …fields omitted for brevity
}

export type TransactionData =
  | SaleTransactionData
  | ReturnTransactionData
  | ExchangeTransactionData;

/* -- Top-level event payload ------------------------------------------ */
export interface TransactionCompleteData {
  connectivity: ConnectivityState;
  device: Device;
  locale: string;
  session: Session;
  transaction: TransactionData;
}