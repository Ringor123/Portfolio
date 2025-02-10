// Import Category type definition
import { Category } from "../types/types";

/**
 * Predefined categories for activities
 * id: 1 - Food items (calories gained)
 * id: 2 - Exercise activities (calories burned)
 */
export const categories: Category[] = [
    { id: 1, name: 'Food'},
    { id: 2, name: 'Exercise'}
  ]