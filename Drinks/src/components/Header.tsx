/**
 * Header component that serves as the main navigation and search interface.
 * Features:
 * - Responsive navigation between Index and Favorites pages
 * - Search form for drinks by ingredient and category (only on home page)
 * - Dynamic background based on current route
 * - Form validation with error notifications
 * - Integration with global app store for search functionality
 */

import { useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";
import { SearchFilter } from "../types";

/** Initial state for the search form */
const INITIAL_STATE = {
  ingredient: '',
  category: ''
}

export default function Header() {

  const [pairSearch, setPairSearch] = useState<SearchFilter>(INITIAL_STATE)
  const { categories, fetchRecipes, setSearchValues, showNotification } = useAppStore();
  const location = useLocation();

  const isHome = location.pathname === "/";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    setPairSearch({
      ...pairSearch,
      [e.target.name]: e.target.value
  })
  }

  console.log(pairSearch)

  /**
   * Handles form submission:
   * - Validates all fields are filled
   * - Updates global search values
   * - Triggers API search
   * - Resets form to initial state
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if(Object.values(pairSearch).includes('')) {
      showNotification({
        text: 'All fields are required',
        error: true
      })
      return
    }
    setSearchValues(pairSearch)
    fetchRecipes(pairSearch)
    setPairSearch(INITIAL_STATE)
  }

  return (
    <header
      className={
        isHome
          ? "bg-[url(/header4.jpg)] bg-center bg-cover bg-no-repeat"
          : "bg-slate-800"
      }
    >
      <div
        className={
          isHome
            ? "flex justify-between items-center md:px-10 py-5"
            : "flex justify-between items-center md:px-10 py-5"
        }
      >
        <div>
          <img className="w-32" src="/logo.svg" alt="logo" />
        </div>

        <nav className="flex gap-4 pr-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-red-main uppercase font-extrabold"
                : "text-white uppercase font-extrabold"
            }
          >
            Index
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive
                ? "text-red-main uppercase font-extrabold"
                : "text-white uppercase font-extrabold"
            }
          >
            Favorites
          </NavLink>
        </nav>
      </div>
      <div
        className={
          isHome ? "mx-auto container px-5 py-16" : "mx-auto container px-5"
        }
      >
        {isHome && (
          <form 
          className="md:w-1/2 2xl:w-1/3 bg-yellow-main/80 backdrop-blur-xs my-8 p-10 rounded-lg space-y-6"
          onSubmit={handleSubmit}
          >
            <div className="space-y-4">
              <label
                htmlFor="ingredient"
                className="block text-slate-800 uppercase font-bold text-lg"
              >
                Ingredient
              </label>
              <input
                id="ingredient"
                type="text"
                name="ingredient"
                placeholder="Type an ingredient"
                className="bg-white p-3 w-full rounded-lg focus:outline-none"
                value={pairSearch.ingredient || ''}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-4">
              <label
                htmlFor="category"
                className="block text-slate-800 uppercase font-bold text-lg"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                className="bg-white p-3 w-full rounded-lg focus:outline-none"
                onChange={handleChange}
                value={pairSearch.category || ''}
              >
                <option>Select Category</option>
                {categories.drinks.map((category) => (
                  <option
                    key={category.strCategory}
                    value={category.strCategory}
                  >
                    {category.strCategory}
                  </option>
                ))}
              </select>
            </div>
            <input
              type="submit"
              value="Search"
              className="btn"
            />
          </form>
        )}
      </div>
    </header>
  );
}
