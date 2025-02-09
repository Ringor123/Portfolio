/**
 * Type definitions for the expense tracking application
 */

// Complete expense type with all required fields
export type Expense = {
  id: string,           // Unique identifier for the expense
  expenseName: string,  // Name/description of the expense
  amount: number,       // Monetary amount of the expense
  category: string,     // Category ID the expense belongs to
  date: Date           // Date when the expense occurred
}

// Type for new expenses before they get an ID
export type DraftExpense = Omit<Expense, 'id'>

// Category type for expense classification
export type Category = {
  id: string,     // Unique identifier for the category
  name: string,   // Display name of the category
  icon: string    // Icon identifier for the category
}