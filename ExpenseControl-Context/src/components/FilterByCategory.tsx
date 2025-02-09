/**
 * Component for filtering expenses by category
 * Features:
 * - Dropdown selection of predefined categories
 * - Option to show all expenses
 * - Responsive design with flex layout
 */
import { ChangeEvent } from "react";
import { categories } from "../data/categories";
import { useBudget } from "../hooks/useBudget";

export default function FilterByCategory() {
  const {dispatch} = useBudget()

  // Handle category selection changes and update filter
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({type: 'add-filter-category', payload: {id:e.target.value}})
  }

  return (
    <div className="bg-[#FDCA40] shadow-lg rounded-lg p-2.5">
      <form>
        <div className="flex flex-col md:flex-row md:items-center gap-5">
          <label htmlFor="category">Filter expenses: </label>
          <select onChange={handleChange} id="category" className="p-2 flex-1 rounded outline-0">
            <option value="">--- all categories ---</option>
            {categories.map((category) => (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
}
