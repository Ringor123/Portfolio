/**
 * React Context for budget management
 * Provides global access to budget state and actions throughout the application
 */
import { createContext, Dispatch } from "react";
import { BudgetActions, BudgetState } from "../reducers/budget-reducer";

// Type definition for the context value
type BudgetContextProps = {
  spentBudget: number;      // Total amount spent across all expenses
  availableBudget: number;  // Remaining budget after expenses
  budget: number;           // Total budget
  state: BudgetState;       // Complete application state
  dispatch: Dispatch<BudgetActions>;  // Dispatch function for state updates
};

// Create context with non-null assertion as it will be provided by BudgetProvider
export const BudgetContext = createContext<BudgetContextProps>(null!);
