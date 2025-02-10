import { useContext } from "react";
import { ActivitiesContext } from "../context/ActivitiesContext";

export const useActivities = () => {
  const context = useContext(ActivitiesContext);

  if (!context) {
    throw new Error("useActivities must be used whithin a ActivitiesProvider");
  }

  return context;
};
