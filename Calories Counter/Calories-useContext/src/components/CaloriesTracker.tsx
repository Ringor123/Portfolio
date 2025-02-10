import { useActivities } from "../hooks/useActivities"
import CaloriesDisplay from "./CaloriesDisplay"


export default function CaloriesTracker() {

  const {state} = useActivities()

  const activities = state.activities

  const caloriesConsumed = () => {
    return activities.reduce((total, activity) => activity.category === 1 ? total + activity.calories : total, 0)
  }

  const caloriesBurned = () => {
    return activities.reduce((total, activity) => activity.category === 2 ? total + activity.calories : total, 0)
  }

  const caloriesDiff = () => {
    return caloriesConsumed() - caloriesBurned()
  }

  return (
    <>
    <h2 className="text-4xl font-bold text-white text-center">Calories resume</h2>
    <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10 px-10">
      <CaloriesDisplay text="Consumed" calories={caloriesConsumed()}/>
      <CaloriesDisplay text="Burned" calories={caloriesBurned()}/>
      <CaloriesDisplay text="Diff" calories={caloriesDiff()}/>
    </div>
    </>
  )
}
