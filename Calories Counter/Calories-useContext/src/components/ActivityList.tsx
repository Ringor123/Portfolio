// Import required dependencies and types
import { Activity } from "../types/types";
import { categories } from "../data/categories";
import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { Dispatch } from "react";
import { ActivityActions } from "../reducers/activity-reducer";

// Define props interface for ActivityList component
type ActivityListProps = {
  activities: Activity[];
  dispatch: Dispatch<ActivityActions>;
  scrollToForm: () => void;
};

/**
 * ActivityList Component
 * Displays a list of food and exercise activities
 * Provides functionality to edit and delete activities
 */
export default function ActivityList({
  activities,
  dispatch,
  scrollToForm,
}: ActivityListProps) {
  /**
   * Get category name from category ID
   * @param category - The category ID
   * @returns The corresponding category name
   */
  const categoryName = (category: Activity["category"]) => {
    return categories.map((cat) => (cat.id === category ? cat.name : ""));
  };

  /**
   * Handle edit button click
   * Sets the active ID and scrolls to the form
   */
  const handleEditClick = (id: Activity["id"]) => {
    dispatch({ type: "set-activeId", payload: { id: id } });
    scrollToForm();
  };

  /**
   * Handle delete button click
   * Removes the activity from the list
   */
  const handleDeleteClick = (id: Activity["id"]) => {
    dispatch({ type: "delete-activity", payload: { id: id } });
  };

  return (
    <>
      {/* Section title */}
      <h2 className="text-4xl font-bold text-white text-center">
        Food and Exercises
      </h2>

      {/* Conditional rendering based on activities existence */}
      {activities.length === 0 ? (
        <p className="text-center mt-5 font-semibold">
          No activities yet...
        </p>
      ) : (
        // Map through activities and render each activity card
        activities.map((activity) => (
          <div
            key={activity.id}
            className="px-5 py-10 bg-white mt-5 flex justify-between shadow-lg"
          >
            <div className="space-y-2 relative">
              <p
                className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold shadow-lg
                        ${
                          activity.category === 1
                            ? "bg-lime-500"
                            : "bg-orange-500"
                        }`}
              >
                {categoryName(activity.category)}
              </p>
              <p className="text-2xl font-bold pt-5">{activity.activityName}</p>
              <p className="font-black text-4xl text-lime-500">
                {activity.calories + " "}
                <span>Calories</span>
              </p>
            </div>

            <div className="flex flex-col gap-5 items-center justify-between">
              <button onClick={() => handleEditClick(activity.id)}>
                <PencilSquareIcon className="h-8 w-8 text-gray-800 cursor-pointer" />
              </button>
              <button onClick={() => handleDeleteClick(activity.id)}>
                <XCircleIcon className="h-8 w-8 text-red-500 cursor-pointer" />
              </button>
            </div>
          </div>
        ))
      )}
    </>
  );
}
