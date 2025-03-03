/**
 * Main page component that displays the search results for drinks.
 * Renders a grid of DrinkCard components based on the search criteria.
 * Uses the global app store to access drink data and last search values.
 */

import DrinkCard from "../components/DrinkCard";
import { useAppStore } from "../stores/useAppStore";

export default function IndexPage() {
  const { drinks, lastSearchValues } = useAppStore();

  const hasDrinks = drinks.drinks.length > 0;

  return (
    <>
      <h1 className="text-6xl text-center font-extrabold mb-5">Recipes</h1>
      {hasDrinks ? (
        <div>
          <p className="text-center mb-5">
            Search results for <span>{lastSearchValues.category}</span> with{" "}
            <span>{lastSearchValues.ingredient}</span>
          </p>
          <div className="mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10">
            {drinks.drinks.map((drink) => (
              <DrinkCard key={drink.idDrink} drink={drink} />
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center">No results. Use the form to find drinks</p>
      )}
    </>
  );
}
