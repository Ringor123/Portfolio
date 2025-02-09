/**
 * Circular progress indicator that shows budget usage percentage
 * Changes color to red when budget usage exceeds 90%
 */
import {CircularProgress} from "@heroui/progress";
import { useBudget } from "../hooks/useBudget";

export default function CircularProgressBar() {
  const {spentBudget, state} = useBudget()

  // Calculate percentage of budget spent
  const percentage = Math.floor((spentBudget * 100) / state.budget)
  
  // Flag to change UI when budget usage is critical (>90%)
  const isOverBudget = percentage > 90

  return (
    <CircularProgress
      aria-label="Loading..."
      color="warning"
      showValueLabel={true}
      size="lg"
      value={percentage}
      classNames={{
        svg: "w-full h-full drop-shadow-md",
        // Dynamic color based on budget usage
        indicator: isOverBudget ? "stroke-red-500" : "stroke-blue-500",
        track: "stroke-gray-900/10",
        value: `text-4xl font-semibold ${isOverBudget ? 'text-red-500' : 'text-blue-500'}`,
      }}
    />
  );
}
