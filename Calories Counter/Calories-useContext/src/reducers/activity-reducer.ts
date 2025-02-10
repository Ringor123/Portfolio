// Import Activity type for type checking
import { Activity } from "../types/types";

/**
 * Union type defining all possible actions that can be dispatched to the reducer
 * - save-activity: Save or update an activity
 * - set-activeId: Set an activity for editing
 * - delete-activity: Remove an activity
 * - restart-app: Reset the app to initial state
 */
export type ActivityActions =
  | { type: "save-activity"; payload: { newActivity: Activity } }
  | { type: "set-activeId"; payload: { id: Activity["id"] } }
  | { type: "delete-activity"; payload: { id: Activity["id"] } }
  | { type: "restart-app"}

/**
 * State type for the activity reducer
 * @property activities - Array of all activities
 * @property activeId - ID of the activity being edited (if any)
 */
export type ActivityState = {
  activities: Activity[];
  activeId: Activity["id"];
};

/**
 * Retrieves activities from localStorage
 * @returns Array of activities or empty array if none found
 */
const localStorageActivities = (): Activity[] => {
  const initialStorage = localStorage.getItem("CaloriesStorage");
  return initialStorage ? JSON.parse(initialStorage) : [];
};

/**
 * Initial state for the activity reducer
 * Loads activities from localStorage if available
 */
export const initialState: ActivityState = {
  activities: localStorageActivities(),
  activeId: "",
};

/**
 * Activity Reducer
 * Manages the state of activities in the application
 * Handles creating, updating, and deleting activities
 * 
 * @param state - Current state of activities
 * @param action - Action to perform on the state
 * @returns New state after applying the action
 */
export const activityReducer = (
  state: ActivityState = initialState,
  action: ActivityActions
) => {
  // Handle saving or updating an activity
  if (action.type === "save-activity") {
    let updatedActivities: Activity[] = [];

    if (state.activeId) {
      // Update existing activity
      updatedActivities = state.activities.map((activity) =>
        activity.id === state.activeId ? action.payload.newActivity : activity
      );
    } else {
      // Add new activity
      updatedActivities = [...state.activities, action.payload.newActivity];
    }

    return {
      ...state,
      activities: updatedActivities,
      activeId: "", // Clear activeId after save
    };
  }

  // Set an activity for editing
  if (action.type === "set-activeId") {
    return {
      ...state,
      activeId: action.payload.id,
    };
  }

  // Remove an activity
  if (action.type === "delete-activity") {
    return {
      ...state,
      activities: state.activities.filter(
        (activity) => activity.id !== action.payload.id
      ),
    };
  }

  // Reset the app to initial state
  if (action.type === 'restart-app') {
    return {
      activities: [],
      activeId: ""
    }
  }

  // Return unchanged state for unknown actions
  return state;
};
