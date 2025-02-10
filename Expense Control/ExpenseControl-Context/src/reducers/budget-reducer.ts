/**
 * Budget management reducer that handles all state modifications
 * Includes actions for budget operations, expense management, and filtering
 */
import { Category, DraftExpense, Expense } from "../types"
import {v4 as uuidv4} from 'uuid'

// Define all possible actions that can be dispatched to modify the budget state
export type BudgetActions = 
    { type: 'add-budget', payload:{budget: number } }
  | { type: 'show-modal' }
  | { type: 'close-modal'}
  | { type: 'add-expense', payload: { expense: DraftExpense}}
  | { type: 'remove-expense', payload: { expense: Expense}}
  | { type: 'get-expense-by-id', payload: { id: Expense['id']}}
  | { type: 'update-expense', payload: { expense: Expense}}
  | { type: 'reset-app'}
  | { type: 'add-filter-category', payload:{ id: Category['id']}}

// Define the shape of our application state
export type BudgetState = {
  budget: number
  modal: boolean
  expenses: Expense[],
  editingId: Expense['id']
  currentCategory: Category['id']
}

// Initialize budget from localStorage or default to 0
const initialBudget = () : number => {
  const localStorageBudget = localStorage.getItem('budgetStorage')
  return localStorageBudget ? Number(localStorageBudget) : 0
}

// Initialize expenses from localStorage or default to empty array
const initialExpenses = () : Expense[] => {
  const localStorageExpenses = localStorage.getItem('expensesStorage')
  return localStorageExpenses ? JSON.parse(localStorageExpenses) : []
}

// Initial state configuration with persisted data from localStorage
export const initialState: BudgetState = {
  budget: initialBudget(),
  modal: false,
  expenses: initialExpenses(),
  editingId:'',
  currentCategory: ''
}

// Helper function to create a new expense with a unique ID
const createExpense = (draftExpense: DraftExpense): Expense => {
  const id = uuidv4()
  return {...draftExpense, id}
}

/**
 * Budget reducer function that handles state modifications based on dispatched actions
 * @param state Current state of the application
 * @param action Action to be performed on the state
 * @returns New state after applying the action
 */
export const BudgetReducer = (
  state: BudgetState = initialState,
  action: BudgetActions
) => {

  // Update budget when 'add-budget' action is dispatched
  if (action.type === 'add-budget') {
    return {
      ...state,
      budget: action.payload.budget
    }
  }

  // Show modal when 'show-modal' action is dispatched
  if (action.type === 'show-modal') {
    return {
      ...state,
      modal: true
    }
  }

  // Close modal when 'close-modal' action is dispatched
  if (action.type === 'close-modal') {
    return {
      ...state,
      modal: false,
      editingId: ''
    }
  }

  // Add new expense when 'add-expense' action is dispatched
  if (action.type === 'add-expense') {
    const newExpense = createExpense(action.payload.expense)
    return {
      ...state,
      expenses: [...state.expenses, newExpense],
      modal: false
    }
  }

  // Remove expense when 'remove-expense' action is dispatched
  if (action.type === 'remove-expense') {
    const newExpenseList = state.expenses.filter(expense => action.payload.expense.id !== expense.id)
    return {
      ...state,
      expenses: newExpenseList
    }
  }

  // Get expense by ID when 'get-expense-by-id' action is dispatched
  if (action.type === 'get-expense-by-id') {
    return {
      ...state,
      editingId: action.payload.id,
      modal:true
    }
  }

  // Update expense when 'update-expense' action is dispatched
  if (action.type === 'update-expense') {
    return {
      ...state,
      expenses: state.expenses.map(expense => expense.id === action.payload.expense.id ? action.payload.expense : expense),
      modal: false,
      editingId: ''
    }
  }

  // Reset application state when 'reset-app' action is dispatched
  if (action.type === 'reset-app') {
    return {
      ...state,
      expenses: [],
      budget: 0
    }
  }

  // Add filter category when 'add-filter-category' action is dispatched
  if (action.type === 'add-filter-category') {
    return {
      ...state,
      currentCategory: action.payload.id
    }
  }
  
  // Return unchanged state if no action is matched
  return state
}