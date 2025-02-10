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

  return (
    <ActivitiesContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
}
