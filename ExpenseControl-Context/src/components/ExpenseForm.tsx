/**
 * Form component for adding and editing expenses
 * Handles both new expense creation and updating existing expenses
 * Includes validation for budget limits and required fields
 */
import { useEffect, useState } from "react";
import { categories } from "../data/categories";
import { DraftExpense } from "../types";
import ErrorMessage from "./ErrorMessage";
import { useBudget } from "../hooks/useBudget";

export default function ExpenseForm() {
  // Initialize form state with empty values
  const [expense, setExpense] = useState<DraftExpense>({
    expenseName: "",
    amount: 0,
    category: "",
    date: new Date(),
  });

  // State for error handling and tracking previous amount for budget calculations
  const [error, setError] = useState("");
  const [previousAmount, setPreviousAmount] = useState(0);

  const { state, dispatch, availableBudget } = useBudget();

  // Load existing expense data when in edit mode
  useEffect(() => {
    if (state.editingId) {
      const editingExpense = state.expenses.filter(
        (e) => e.id === state.editingId
      )[0];
      if (editingExpense) {
        setExpense({
          ...editingExpense,
          date: new Date(editingExpense.date),
        });
        // Store previous amount for budget validation when updating
        setPreviousAmount(editingExpense.amount)
      }
    }
  }, [state.editingId, state.expenses, availableBudget]);

  // Auto-clear error messages after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setError("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [error]);

  // Handle form input changes with type safety
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setExpense({
      ...expense,
      [name]: name === "amount" ? Number(value) : value,
    });
  };

  // Handle date input changes separately
  const handleChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(e.target.value);
    setExpense({ ...expense, date: newDate });
  };

  // Validate form data and dispatch update or add actions
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check for required fields
    if (Object.values(expense).includes("")) {
      setError("All fields are required");
      return;
    }

    // Validate budget limits
    if ((expense.amount - previousAmount) > availableBudget) {
      setError("You cannot spend more than the amount available");
      return;
    }

    // Dispatch update or add actions based on edit mode
    if (state.editingId) {
      dispatch({
        type: "update-expense",
        payload: { expense: { id: state.editingId, ...expense } },
      });
    } else {
      dispatch({ type: "add-expense", payload: { expense } });
    }

    // Reset form state after submission
    setExpense({
      expenseName: "",
      amount: 0,
      category: "",
      date: new Date(),
    });
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <legend className="uppercase text-center text-[#31393c] text-2xl font-black border-b-4 py-2">
        {state.editingId ? "Update" : "New"} expense
      </legend>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <div className="flex flex-col gap-2">
        <label htmlFor="expenseName" className="text-xl">
          Expense name:
        </label>
        <input
          type="text"
          id="expenseName"
          placeholder="Add expense name..."
          className="bg-slate-100 p-2"
          name="expenseName"
          value={expense.expenseName}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="amount" className="text-xl">
          Amount:
        </label>
        <input
          type="number"
          id="amount"
          placeholder="Add amount... e.g. 300"
          className="bg-slate-100 p-2"
          name="amount"
          value={expense.amount || ""}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="category" className="text-xl">
          Category:
        </label>
        <select
          id="category"
          className="bg-slate-100 p-2"
          name="category"
          value={expense.category}
          onChange={handleChange}
        >
          <option value=""> --- Select category --- </option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="expenseDate" className="text-xl">
          Expense date:
        </label>
        <input
          type="date"
          name="date"
          className="bg-slate-100 p-2 border-0 w-full"
          value={expense.date.toISOString().split("T")[0]}
          onChange={handleChangeDate}
        />
      </div>

      <input
        type="submit"
        className="bg-[#31393c] w-full py-2 uppercase font-bold text-white cursor-pointer rounded-lg"
        value="Send"
      />
    </form>
  );
}
