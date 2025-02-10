/**
 * Component that displays the filtered list of expenses
 * Handles both unfiltered and category-filtered views
 * Provides empty state handling when no expenses are present
 */
import { useBudget } from "../hooks/useBudget";
import ExpenseDetails from "./ExpenseDetails";
import { formatCurrency } from "../utils";
import { categories } from "../data/categories";

export default function ExpenseList() {
  const { state } = useBudget();

  // Apply category filter if one is selected, otherwise show all expenses
  // This logic filters the expenses based on the currently selected category
  const filteredExpenses = state.currentCategory
    ? state.expenses.filter(
        (expense) => expense.category === state.currentCategory
      )
    : state.expenses;

  // Calculate total amount for the current category filter
  const categoryAmount = formatCurrency(
    filteredExpenses.reduce((total, expenses) => total + expenses.amount, 0)
  );

  // Get the name of the selected category, defaults to "all categories" if none selected
  const selectedCategory = state.currentCategory
    ? categories.find((cat) => cat.id === state.currentCategory)?.name
    : "all categories";

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
          {/* Display total amount spent in the selected category */}
          <p className="text-lg text-header mb-4">
            You spent <span className="font-bold">{categoryAmount}</span> on{" "}
            <span className="font-bold uppercase">{selectedCategory}</span>
          </p>
          {/* Render each expense with its details */}
          {filteredExpenses.map((expense) => (
            <ExpenseDetails key={expense.id} expense={expense} />
          ))}
        </>
      )}
    </div>
  );
}
