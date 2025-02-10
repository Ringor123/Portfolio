// Main imports for React components and hooks
import Form from "./components/Form";
import { useEffect, useReducer, useRef } from "react";
import { activityReducer, initialState } from "./reducers/activity-reducer";
import ActivityList from "./components/ActivityList";
import CaloriesTracker from "./components/CaloriesTracker";

/**
 * Main App component that manages the calories tracking application
 * Handles state management, persistence, and layout of the application
 */
function App() {
  // Reference to the form section for scroll functionality
  const formRef = useRef<HTMLDivElement>(null)

  // State management using reducer pattern
  const [state, dispatch] = useReducer(activityReducer, initialState)

  // Persist activities data in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("CaloriesStorage", JSON.stringify(state.activities));
  }, [state.activities]);

  // Check if there are activities to enable app reset
  const canRestartApp = () => {
    return state.activities.length > 0
  }

  // Smooth scroll to form function for edit operations
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth'})
  }

  return (
    <>
      {/* Header section with app title and reset button */}
      <header className="bg-[#EFB036] py-3">
        <div className="max-w-4xl mx-auto flex justify-between px-5 items-center">
          <h1 className="text-center text-lg font-bold text-black uppercase cursor-default">
            Calories Counter
          </h1>
          <button 
          className="transition bg-gray-800 hover:bg-gray-900 uppercase font-semibold text-white 
          text-sm py-1 px-2 rounded cursor-pointer disabled:opacity-10 disabled:cursor-not-allowed"
          onClick={() => dispatch({type: 'restart-app'})}
          disabled={!canRestartApp()}
          >
            Reset App
          </button>
        </div>
      </header>

      {/* Form section for adding/editing activities */}
      <section className="bg-[#3B6790] py-20 px-5">
        <div ref={formRef} className="max-w-4xl mx-auto">
          <Form dispatch={dispatch} state={state} />
        </div>
      </section>

      {/* Calories tracking summary section */}
      <section className="bg-[#23486A] py-10">
        <div className="max-w-4xl mx-auto">
          <CaloriesTracker activities={state.activities}/>
        </div>
      </section>

      {/* List of activities section */}
      <section className="p-10 mx-auto max-w-4xl">
        <ActivityList 
        activities={state.activities} 
        dispatch={dispatch} 
        scrollToForm={scrollToForm}/>
      </section>
    </>
  );
}

export default App;
