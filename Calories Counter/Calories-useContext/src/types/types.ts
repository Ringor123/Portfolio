/**
 * Category type definition
 * Represents a category of activity (Food or Exercise)
 */
export type Category = {
  id: number; // Unique identifier for the category
  name: string; // Name of the category
};

/**
 * Activity type definition
 * Represents a single activity entry (either food consumed or exercise performed)
 */
export type Activity = {
  category: number; // Reference to the category ID
  activityName: string; // Name of the activity
  calories: number; // Number of calories (positive for food, negative for exercise)
  id: string; // Unique identifier for the activity
};
