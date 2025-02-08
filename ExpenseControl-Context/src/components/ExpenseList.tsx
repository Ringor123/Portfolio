import { useBudget } from "../hooks/useBudget"
import ExpenseDetails from "./ExpenseDetails"

export default function ExpenseList() {

  const {state} = useBudget()

  const isEmpty = state.expenses.length === 0
  return (
    <div className="mt-10">
      {isEmpty ? <p className="text-2xl font-bold">There are not expenses</p> : (
        <>
        <p className="text-2xl font-bold my-5">Expenses List</p>
        {state.expenses.map(expense => (
          <ExpenseDetails 
          key={expense.id}
          expense={expense}
          />
        ))}
        </>
      )}
    </div>
  )
}
