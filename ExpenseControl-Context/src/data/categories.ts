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
  { id: '1', name: 'Ahorro', icon: 'ahorro' },         // Savings
  { id: '2', name: 'Comida', icon: 'comida' },         // Food
  { id: '3', name: 'Casa', icon: 'casa' },             // House
  { id: '4', name: 'Gastos Varios', icon: 'gastos' },  // Miscellaneous
  { id: '5', name: 'Ocio', icon: 'ocio' },             // Entertainment
  { id: '6', name: 'Salud', icon: 'salud' },           // Health
  { id: '7', name: 'Suscripciones', icon: 'suscripciones' }, // Subscriptions
];