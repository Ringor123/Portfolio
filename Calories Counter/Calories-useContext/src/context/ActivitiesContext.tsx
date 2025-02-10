import { createContext, Dispatch } from "react";
import { ActivityActions, ActivityState } from "../reducers/activity-reducer";

type ActivitiesContextProps = {
  dispatch: Dispatch<ActivityActions>;
  state: ActivityState;
};

export const ActivitiesContext = createContext<ActivitiesContextProps>(null!);
