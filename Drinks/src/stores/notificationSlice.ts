/**
 * Zustand store slice for managing toast notifications.
 * Features:
 * - Auto-dismissing notifications after 2 seconds
 * - Support for success and error states
 * - Controlled visibility with show/hide functionality
 */

import { StateCreator } from "zustand";
import { Notification } from "../types";

/**
 * Type definition for the notification slice state and actions.
 * Manages the display and hiding of toast notifications.
 */
export type NotificationSliceType = {
  /** Current notification state */
  notification: Notification,
  /** Shows a notification with the given text and error state */
  showNotification: (data: Pick<Notification, 'text' | 'error'>) => void,
  /** Hides the current notification */
  closeNotification: () => void
};

export const createNotificationSlice: StateCreator<NotificationSliceType> = (set, get) => ({
  notification: {show: false} as Notification,
  
  /**
   * Displays a notification and sets up auto-dismiss timer.
   * @param data Object containing notification text and error state
   */
  showNotification: (data) => {
    set(() => ({
      notification: {
        text: data.text,
        error: data.error,
        show: true
      }
    }))

    setTimeout(() => {
      get().closeNotification()
    }, 2000)

  },

  /**
   * Hides the current notification while preserving its data.
   * Only modifies the show state to support exit animations.
   */
  closeNotification: () => {
    const notification = get().notification
    set(() => ({
      notification: {
        ...notification,
        show: false
      }
    }))
  }
});
