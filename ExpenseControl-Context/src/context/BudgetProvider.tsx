/**
 * Main Budget context provider that manages the global state of the application
 * Uses useReducer for state management and provides access to budget calculations
 */
import { ReactNode, useReducer } from "react";
import { BudgetReducer, initialState } from "../reducers/budget-reducer";
import { BudgetContext } from "./BudgetContext";

type BudgetProviderProps = {
  children: ReactNode;
};

export const BudgetProvider = ({ children }: BudgetProviderProps) => {
  const [state, dispatch] = useReducer(BudgetReducer, initialState);

  // Calculate total spent amount by summing all expense amounts
  const spentBudget = state.expenses.reduce((total, expense) => total + expense.amount, 0);
  
  // Calculate remaining budget by subtracting spent amount from total budget
  const availableBudget = state.budget - spentBudget;

  return (
    <BudgetContext.Provider
      value={{
        state,
        dispatch,
        spentBudget,
        availableBudget
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
