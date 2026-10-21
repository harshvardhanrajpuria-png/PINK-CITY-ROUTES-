/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const ADMIN_SECRET_PIN = 'harsh@123@';
const ADMIN_STORAGE_KEY = 'pinkcityroutes_admin_verified_session';

/**
 * Checks if the provided PIN matches the secret admin passcode
 */
export const verifyAdminPasscode = (pin: string): boolean => {
  return pin.trim() === ADMIN_SECRET_PIN;
};

/**
 * Checks if admin mode is currently active in session storage
 */
export const isAdminSessionActive = (): boolean => {
  try {
    return sessionStorage.getItem(ADMIN_STORAGE_KEY) === 'true';
  } catch {
    return false;
  }
};

/**
 * Sets or clears admin session authentication
 */
export const setAdminSessionActive = (active: boolean): void => {
  try {
    if (active) {
      sessionStorage.setItem(ADMIN_STORAGE_KEY, 'true');
    } else {
      sessionStorage.removeItem(ADMIN_STORAGE_KEY);
    }
  } catch (e) {
    console.error('Error saving admin session state:', e);
  }
};
