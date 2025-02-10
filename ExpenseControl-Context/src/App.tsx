/**
 * Main application component that orchestrates the budget planning interface
 * Features:
 * - Persistent storage of budget and expenses in localStorage
 * - Conditional rendering based on budget validity
 * - Responsive layout with header and main content areas
 */
import { useEffect, useMemo } from "react";
import BudgetForm from "./components/BudgetForm";
import BudgetTracker from "./components/BudgetTracker";
import ExpenseModal from "./components/ExpenseModal";
import { useBudget } from "./hooks/useBudget";
import ExpenseList from "./components/ExpenseList";
import FilterByCategory from "./components/FilterByCategory";

function App() {
  const { state } = useBudget();

  // Persist budget and expenses data to localStorage whenever they change
  useEffect(()=> {
    localStorage.setItem('budgetStorage', JSON.stringify(state.budget))
    localStorage.setItem('expensesStorage', JSON.stringify(state.expenses))
  }, [state.expenses, state.budget])

  // Memoized check for valid budget to control component rendering
  const isValidBudget = useMemo(() => state.budget > 0, [state.budget]);

  return (
    <>
      <header className="bg-header py-8 max-h-72">
        <h1 className="uppercase text-center font-bold text-4xl text-white">
          Budget Planner
        </h1>
      </header>

      <div className="max-w-3xl mx-5 md:mx-auto bg-[#FDCA40] shadow-lg rounded-lg mt-10 p-10">
        {isValidBudget ? <BudgetTracker /> : <BudgetForm />}
      </div>

      {isValidBudget && (
        <main className="max-w-3xl mx-auto py-10 px-4">
          <FilterByCategory />
          <ExpenseList />
          <ExpenseModal />
        </main>
      )}
    </>
  );
}

export default App;
