"use client";

const EVENT = "tm-toast";

/** Show a short toast message (rendered by <ToastHost />). */
export function toast(message: string) {
  window.dispatchEvent(new CustomEvent<string>(EVENT, { detail: message }));
}

export const TOAST_EVENT = EVENT;

export const DEMO_NOTICE = "Demo clone: payments, accounts and carts are disabled.";
