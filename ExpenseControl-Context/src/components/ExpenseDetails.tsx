import { categories } from "../data/categories"
import { Expense } from "../types"
import { formatDate } from "../utils"
import AmountDisplay from "./AmountDisplay"

type ExpenseDetailsProps = {
  expense: Expense
}

export default function ExpenseDetails({expense}: ExpenseDetailsProps) {

  const categoryInfo = categories.filter(category => category.id === expense.category)[0]


  return (
    <div 
    className="bg-[#fdca40] shadow-lg p-5 w-full flex gap-5 items-center mt-1">
      <div>
        <img src={`/icono_${categoryInfo.icon}.svg`} className="w-20"/>
      </div>

      <div className="flex-1 space-y-1">
        <p className="text-sm font-bold uppercase text-[#31393c]">{categoryInfo.name}</p>
        <p>{expense.expenseName}</p>
        <p className="text-[#31393c] text-sm">{formatDate(expense.date.toString())}</p>
      </div>
      <AmountDisplay amount={expense.amount} />
    </div>
  )
}
