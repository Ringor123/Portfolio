import { ReactNode, useReducer } from "react";
import { BudgetReducer, initialState } from "../reducers/budget-reducer";
import { BudgetContext } from "./BudgetContext";

type BudgetProviderProps = {
    children: ReactNode
  }
  
  export const BudgetProvider = ({ children }: BudgetProviderProps) => {
    const [state, dispatch] = useReducer(BudgetReducer, initialState);
  
    return (
      <BudgetContext.Provider
        value={{
          state,
          dispatch,
        }}
      >
        {children}
      </BudgetContext.Provider>
    );
  };