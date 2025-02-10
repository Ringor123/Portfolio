/**
 * Custom hook to access the budget context throughout the application
 * Provides type-safe access to budget state and dispatch functions
 * Throws an error if used outside of BudgetProvider context
 */
import { useContext } from "react"
import { BudgetContext } from "../context/BudgetContext"

export const useBudget = () => {
    const context = useContext(BudgetContext)

    // Ensure the hook is used within a provider component
    if (!context) {
        throw new Error('useBudget must be used whitin a BudgetProvider')
    }
    return context
}