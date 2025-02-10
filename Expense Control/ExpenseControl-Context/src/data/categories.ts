/**
 * Predefined categories for expense classification
 * Each category includes:
 * - Unique identifier
 * - Display name
 * - Icon identifier for visual representation
 */
import { Category } from "../types";

// Array of available expense categories with their respective icons
export const categories: Category[] = [
  { id: '1', name: 'Savings', icon: 'savings' },         // Savings
  { id: '2', name: 'Food', icon: 'food' },         // Food
  { id: '3', name: 'House', icon: 'house' },             // House
  { id: '4', name: 'Miscellaneous', icon: 'miscellaneous' },  // Miscellaneous
  { id: '5', name: 'Entertainment', icon: 'entertainment' },             // Entertainment
  { id: '6', name: 'Health', icon: 'health' },           // Health
  { id: '7', name: 'Suscriptions', icon: 'subscriptions' }, // Subscriptions
];