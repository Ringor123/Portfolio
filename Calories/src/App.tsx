import Form from "./components/Form";
import { useEffect, useReducer, useRef } from "react";
import { activityReducer, initialState } from "./reducers/activity-reducer";
import ActivityList from "./components/ActivityList";
import CaloriesTracker from "./components/CaloriesTracker";

function App() {
  const formRef = useRef<HTMLDivElement>(null)

  const [state, dispatch] = useReducer(activityReducer, initialState)

  useEffect(() => {
    localStorage.setItem("CaloriesStorage", JSON.stringify(state.activities));
  }, [state.activities]);

  const canRestartApp = () => {
    return state.activities.length > 0
  }

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth'})
  }

  return (
    <>
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

      <section className="bg-[#3B6790] py-20 px-5">
        <div ref={formRef} className="max-w-4xl mx-auto">
          <Form dispatch={dispatch} state={state} />
        </div>
      </section>

      <section className="bg-[#23486A] py-10">
        <div className="max-w-4xl mx-auto">
          <CaloriesTracker activities={state.activities}/>
        </div>
      </section>

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
