import { createContext, Dispatch } from "react";
import { ActivityActions, ActivityState } from "../reducers/activity-reducer";

type ActivitiesContextProps = {
  dispatch: Dispatch<ActivityActions>;
  state: ActivityState;
  caloriesConsumed: number;
  caloriesDiff: number;
  caloriesBurned: number
};

export const ActivitiesContext = createContext<ActivitiesContextProps>(null!);
