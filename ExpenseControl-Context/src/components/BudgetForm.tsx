/**
 * Form component for setting the initial budget
 * Features:
 * - Input validation for positive numbers
 * - Real-time validation feedback
 * - Submit button disabled when input is invalid
 */
import { useMemo, useState } from "react"
import { useBudget } from "../hooks/useBudget"

export default function BudgetForm() {
  const { dispatch } = useBudget()
  const [budget, setBudget] = useState(0)

  // Handle budget input changes with number validation
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(event.target.valueAsNumber)
  }

  // Memoized validation check for positive numbers
  const isValid = useMemo(() => {
    return !isNaN(budget) && budget > 0
  }, [budget])

  // Handle form submission and dispatch budget update
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch({type: 'add-budget', payload:{budget}})
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-5">
        <label htmlFor="budget" className="text-3xl md:text-4xl font-semibold text-center">
          Define your budget
        </label>
        <input
        id="budget"
        type="number"
        className="w-full bg-white border-gray-200 p-2"
        placeholder="Define your budget"
        name="budget"
        value={budget || ''}
        onChange={handleChange}
      />
      </div>

      <input
        type="submit"
        className="bg-header cursor-pointer
        w-full p-2 font-bold text-white uppercase disabled:opacity-40 disabled:cursor-not-allowed"
        value='Define Budget'
        disabled={!isValid}
      />
    </form>
  )
}
