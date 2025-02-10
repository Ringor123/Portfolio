// Import required dependencies and types
import { categories } from "../data/categories";
import { Activity } from "../types/types";
import { Dispatch, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ActivityActions, ActivityState } from "../reducers/activity-reducer";

/**
 * Props interface for the Form component
 * @property dispatch - Dispatch function for activity state updates
 * @property state - Current activity state containing activities and activeId
 */
type FormProps = {
    dispatch: Dispatch<ActivityActions>,
    state: ActivityState
}

/**
 * Initial state for a new activity
 * Creates a new activity with default values and a unique ID
 */
const initialState : Activity = {
    id: uuidv4(),
    category: 1,
    activityName: '',
    calories: 0
}

/**
 * Form Component
 * Handles the creation and editing of activities (food or exercise)
 * Provides form validation and state management for activity inputs
 */
export default function Form({ dispatch, state }: FormProps) {
    // Initialize local state for the activity being created/edited
    const [activity, setActivity] = useState<Activity>(initialState)

    /**
     * Effect hook to handle editing existing activities
     * Updates form state when an activity is selected for editing
     */
    useEffect(() => {
        if(state.activeId) {
            const activeActivity = state.activities.find(stateActivity => stateActivity.id === state.activeId)
            if (activeActivity) {
                setActivity(activeActivity)
            }
        }
    }, [state.activeId])

    /**
     * Handles changes in form inputs
     * Automatically converts numeric fields to numbers
     * @param event - Change event from input or select elements
     */
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        
        // Convert category and calories fields to numbers
        const isNumberField = ['category', 'calories'].includes(event.target.id)

        setActivity({
            ... activity,
            [event.target.id]: (isNumberField ? Number(value) : value)
        })
    }

    /**
     * Validates the activity form
     * Ensures activity has a name and positive calories value
     * @returns boolean indicating if the activity is valid
     */
    const isValidActivity = () => {
        const { activityName, calories } = activity
        return activityName.trim() !== '' && calories > 0
    }

    /**
     * Handles form submission
     * Saves or updates the activity and resets the form
     * @param event - Form submission event
     */
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch({type: "save-activity", payload: {newActivity: activity}})
        // Reset form with new ID for next activity
        setActivity({
            ...initialState,
            id: uuidv4()
        })
    }

    return (
        // Form layout with responsive grid and styling
        <form 
        className="space-y-5 bg-gray-50 shadow p-10 rounded-lg"
        onSubmit={handleSubmit}>
            {/* Category Selection */}
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className="font-bold">
                    Category:
                </label>
                <select
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                    id="category"
                    value={activity.category}
                    onChange={handleChange}
                >
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* Activity Name Input */}
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="activityName" className="font-bold">
                    Activity:
                </label>
                <input
                    type="text"
                    id="activityName"
                    value={activity.activityName}
                    onChange={handleChange}
                    className="border border-slate-300 p-2 rounded-lg bg-white"
                    placeholder="e.g. Orange Juice, Exercise, Salad ..."
                />
            </div>

            {/* Calories Input */}
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="calories" className="font-bold">
                    Calories:
                </label>
                <input
                    type="number"
                    id="calories"
                    value={activity.calories || ''}
                    onChange={handleChange}
                    className="border border-slate-300 p-2 rounded-lg bg-white"
                    placeholder="e.g. 300 or 500"
                />
            </div>

            {/* Submit Button */}
            <input
                type="submit"
                className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase 
                text-white cursor-pointer disabled:opacity-10 disabled:cursor-not-allowed"
                value={state.activeId ? `Update ${activity.category === 1 ? 'Food' : 'Exercise'}` 
                : `Save ${activity.category === 1 ? 'Food' : 'Exercise'}`} 
                disabled={!isValidActivity()}
            ></input>
        </form>
    );
}
