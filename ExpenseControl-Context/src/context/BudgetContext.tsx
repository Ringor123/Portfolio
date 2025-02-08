import { createContext, Dispatch } from "react";
import {
  BudgetActions,
  BudgetState,
} from "../reducers/budget-reducer";

type BudgetContextProps = {
  state: BudgetState;
  dispatch: Dispatch<BudgetActions>;
};

export const BudgetContext = createContext<BudgetContextProps>(null!);



