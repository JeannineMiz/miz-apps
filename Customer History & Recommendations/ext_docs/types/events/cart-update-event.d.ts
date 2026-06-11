/** Event payload for pos.cart-update.event.observe */
import {Cart} from '../cart-api';
export type ConnectivityStateSeverity = 'Connected' | 'Disconnected';

export interface ConnectivityState {
  internetConnected: ConnectivityStateSeverity;
}

export interface CartUpdateEventData {
  cart: Cart;
  connectivity: ConnectivityState;
  device: unknown;   // expand when spec finalises
  locale: string;
  session: unknown;  // expand when spec finalises
}