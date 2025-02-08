import { useMemo } from "react";
import BudgetForm from "./components/BudgetForm";
import BudgetTracker from "./components/BudgetTracker";
import ExpenseModal from "./components/ExpenseModal";
import { useBudget } from "./hooks/useBudget";
import ExpenseList from "./components/ExpenseList";

function App() {
  const { state } = useBudget();

  const isValidBudget = useMemo(() => state.budget > 0, [state.budget]);

  return (
    <>
      <header className="bg-[#31393C] py-8 max-h-72">
        <h1 className="uppercase text-center font-bold text-4xl text-white">
          Budget Planner
        </h1>
      </header>

      <div className="max-w-3xl mx-5 md:mx-auto bg-[#FDCA40] shadow-lg rounded-lg mt-10 p-10">
        {isValidBudget ? <BudgetTracker /> : <BudgetForm />}
      </div>

      {isValidBudget && (
        <main className="max-w-3xl mx-auto py-10">
          <ExpenseList />
          <ExpenseModal />
        </main>
      )}
    </>
  );
}

export default App;
