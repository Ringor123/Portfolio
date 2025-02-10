/**
 * Budget tracking dashboard component
 * Features:
 * - Visual progress indicator using CircularProgressBar
 * - Display of total budget, available funds, and spent amount
 * - Reset functionality for the entire application
 * - Responsive grid layout for desktop and mobile
 */
import { useBudget } from "../hooks/useBudget";
import AmountDisplay from "./AmountDisplay";
import CircularProgressBar from "./CircularProgressBar";

export default function BudgetPlanner() {
  const { state, spentBudget, availableBudget, dispatch } = useBudget();

  return (
    <div className="px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Progress indicator section */}
        <div className="flex justify-center">
          <CircularProgressBar />
        </div>

        {/* Budget information and controls section */}
        <div className="flex flex-col justify-center items-center gap-8">
          {/* Reset application state button */}
          <button
            type="button"
            className="transition bg-header hover:bg-[#D62828] w-full p-2 
          text-white uppercase font-bold rounded-lg cursor-pointer"
          onClick={() => dispatch({type: 'reset-app'})}
          >
            Reset App
          </button>

          {/* Budget amount displays */}
          <AmountDisplay label="Budget" amount={state.budget} />
          <AmountDisplay label="Available" amount={availableBudget} />
          <AmountDisplay label="Spent" amount={spentBudget} />
        </div>
      </div>
    </div>
  );
}
