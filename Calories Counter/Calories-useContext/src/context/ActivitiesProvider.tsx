import { ReactNode, useReducer } from "react";
import { activityReducer, initialState } from "../reducers/activity-reducer";
import { ActivitiesContext } from "./ActivitiesContext";

type ActivitiesProviderProps = {
  children: ReactNode;
};

export default function ActivitiesProvider({
  children,
}: ActivitiesProviderProps) {
  const [state, dispatch] = useReducer(activityReducer, initialState);

  const caloriesConsumed = state.activities.reduce(
    (total, activity) =>
      activity.category === 1 ? total + activity.calories : total,
    0
  );

  const caloriesBurned = state.activities.reduce(
    (total, activity) =>
      activity.category === 2 ? total + activity.calories : total,
    0
  );

  const caloriesDiff = caloriesConsumed - caloriesBurned;

  return (
    <ActivitiesContext.Provider
      value={{
        state,
        dispatch,
        caloriesConsumed,
        caloriesBurned,
        caloriesDiff,
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
}
