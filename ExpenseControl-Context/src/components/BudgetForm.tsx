import { useState } from "react"


export default function BudgetForm() {

  const [budget, setBudget] = useState(0)

  return (
    <form className="space-y-6">
      <div className="flex flex-col space-y-5">
        <label htmlFor="budget" className="text-4xl font-semibold text-center">
          Define Budget
        </label>
        <input
        id="budget"
        type="number"
        className="w-full bg-white border-gray-200 p-2"
        placeholder="Define your budget"
        name="budget"
        value={budget || ""}
      />
      </div>

      <input
        type="submit"
        className="transition bg-[#003049] hover:bg-[#DC7200] cursor-pointer
        w-full p-2 font-bold text-white uppercase"
        value='Define Budget'
      />
    </form>
  )
}
