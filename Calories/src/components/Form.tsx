import { categories } from "../data/categories";
import { Activity } from "../types/types";
import { Dispatch, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ActivityActions, ActivityState } from "../reducers/activity-reducer";

// Define the props type for the Form component
type FormProps = {
    dispatch: Dispatch<ActivityActions>,
    state: ActivityState
}

// Define the initial state for a new activity
const initialState : Activity = {
    id: uuidv4(),
    category: 1,
    activityName: '',
    calories: 0
}

export default function Form({ dispatch, state }: FormProps) {
    // Initialize the activity state with the initial state
    const [activity, setActivity] = useState<Activity>(initialState)

    // Update the activity state when the active ID changes
    useEffect(() => {
        if(state.activeId) {
            const activeActivity = state.activities.find(stateActivity => stateActivity.id === state.activeId)
            if (activeActivity) {
                setActivity(activeActivity)
            }
        }
    }, [state.activeId])

    // Handle form input changes for both select and input elements
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        
        // Check if the field should be converted to a number (category and calories)
        const isNumberField = ['category', 'calories'].includes(event.target.id)

        setActivity({
            ... activity,
            [event.target.id]: (isNumberField ? Number(value) : value)
        })
    }

    // Validate that the activity has a name and positive calories
    const isValidActivity = () => {
        const { activityName, calories } = activity
        return activityName.trim() !== '' && calories > 0
    }

    // Handle form submission
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch({type: "save-activity", payload: {newActivity: activity}})
        // Reset form to initial state with a new id after submission
        setActivity({
            ...initialState,
            id: uuidv4()
        })
    }

    return (
        // Render the form with the activity details
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
                    value={activity.calories}
                    onChange={handleChange}
                    className="border border-slate-300 p-2 rounded-lg bg-white"
                    placeholder="Calories. e.g. 300 or 500"
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
