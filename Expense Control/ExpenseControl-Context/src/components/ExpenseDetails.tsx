/**
 * Component for displaying individual expense details with swipe actions
 * Includes:
 * - Swipe left to update expense
 * - Swipe right to delete expense
 * - Category icon display
 * - Formatted amount and date
 */
import { categories } from "../data/categories"
import { useBudget } from "../hooks/useBudget"
import { Expense } from "../types"
import { formatDate } from "../utils"
import AmountDisplay from "./AmountDisplay"
import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions } from "react-swipeable-list"
import "react-swipeable-list/dist/styles.css"

type ExpenseDetailsProps = {
  expense: Expense
}

export default function ExpenseDetails({expense}: ExpenseDetailsProps) {
  const { dispatch } = useBudget()

  // Find category information for the current expense
  const categoryInfo = categories.filter(category => category.id === expense.category)[0]

  // Configure swipe left action for updating expense
  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction
        onClick={() => dispatch({type: 'get-expense-by-id', payload:{id: expense.id}})}
      >
        Update
      </SwipeAction>
    </LeadingActions>
  )
  
  // Configure swipe right action for deleting expense
  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        onClick={() => dispatch({type: 'remove-expense', payload:{expense: expense}})}
        destructive={true}
      >
        Delete
      </SwipeAction>
    </TrailingActions>
  )

  return (
    <SwipeableList className="select-none">
      <SwipeableListItem
      maxSwipe={0.51}
      leadingActions={leadingActions()}
      trailingActions={trailingActions()}
      className="overflow-hidden"
      >
    <div 
    className="bg-cards shadow-lg px-4 py-5 w-full border-body flex gap-5 items-center cursor-default">
      <div>
        <img src={`/${categoryInfo.icon}_icon.svg`} className="w-20 pointer-events-none"/>
      </div>

      <div className="flex-1 space-y-1">
        <p className="text-sm font-bold uppercase text-header">{categoryInfo.name}</p>
        <p>{expense.expenseName}</p>
        <p className="text-header text-sm">{formatDate(expense.date.toString())}</p>
      </div>
      <AmountDisplay amount={expense.amount} />
    </div>
    </SwipeableListItem>
  </SwipeableList>
  )
}
