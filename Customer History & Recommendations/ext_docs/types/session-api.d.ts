/** ======================================================================
 *  Session API – Type Declarations
 *  Docs: docs/02-apis/SessionApi.md
 *  ====================================================================== */

import {
  Session
} from './common/session';

/* ------------------------------------------------------------------ */
/*  Session API surface                                               */
/* ------------------------------------------------------------------ */
export interface SessionApi {
  /** Details about the current POS session. */
  currentSession: Session;

  /** Fresh JWT to send to your backend service. */
  getSessionToken(): Promise<string>;
}

/** Singleton instance injected by the POS host runtime. */
export const session: SessionApi;