import {ConnectivityState} from './cart-update-event'; // reuse if defined

export interface Device {
  deviceId: number;
  isTablet: boolean;
  name: string;
}

export type CurrencyCode = string; // narrowed list omitted for brevity

export interface Session {
  currency: CurrencyCode;
  locationId: number;
  posVersion: string;
  shopDomain: string;
  shopId: number;
  userId: number;
  staffMemberId?: number;
}

export interface CashTrackingSessionStartEvent {
  id: number;
  openingTime: string;
}

export interface CashTrackingSessionCompleteEvent {
  id: number;
  openingTime: string;
  closingTime: string;
}

export interface CashTrackingSessionStartData {
  cashTrackingSessionStart: CashTrackingSessionStartEvent;
  connectivity: ConnectivityState;
  device: Device;
  locale: string;
  session: Session;
}

export interface CashTrackingSessionCompleteData {
  cashTrackingSessionComplete: CashTrackingSessionCompleteEvent;
  connectivity: ConnectivityState;
  device: Device;
  locale: string;
  session: Session;
}