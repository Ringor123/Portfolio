/**
 * Component that displays the filtered list of expenses
 * Handles both unfiltered and category-filtered views
 * Provides empty state handling when no expenses are present
 */
import { useBudget } from "../hooks/useBudget";
import ExpenseDetails from "./ExpenseDetails";

export default function ExpenseList() {
  const { state } = useBudget();

  // Apply category filter if one is selected, otherwise show all expenses
  const filteredExpenses = state.currentCategory
    ? state.expenses.filter(
        (expense) => expense.category === state.currentCategory
      )
    : state.expenses;

  // Check if there are any expenses to display
  const isEmpty = filteredExpenses.length === 0;

  return (
    <div className="mt-10 max-w-7xl mx-auto">
      {isEmpty ? (
        // Display message when no expenses are found
        <p className="text-2xl font-bold">There are not expenses</p>
      ) : (
        <>
          <p className="text-2xl font-bold my-5">Expenses List</p>
          {/* Render each expense with its details */}
          {filteredExpenses.map((expense) => (
            <ExpenseDetails key={expense.id} expense={expense} />
          ))}
        </>
      )}
    </div>
  );
}
