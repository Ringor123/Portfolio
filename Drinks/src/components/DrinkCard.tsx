/**
 * DrinkCard component displays a single drink in a card format.
 * Features:
 * - Displays drink image with loading state
 * - Shows drink name with truncation for long titles
 * - Handles click to show detailed recipe in modal
 * - Includes hover effects on image
 */

import { useState } from "react";
import { useAppStore } from "../stores/useAppStore";
import { Drink } from "../types";

/**
 * Props for the DrinkCard component
 */
type DrinkCardProps = {
  /** Drink data containing id, name, and image URL */
  drink: Drink;
};

export default function DrinkCard({ drink }: DrinkCardProps) {

  const {selectRecipe, setModal} = useAppStore()
  const [imageLoading, setImageLoading] = useState(true);

  const handleClick = () => {
    selectRecipe(drink.idDrink)
    setModal(true)
  }

  return (
    <div className="items-center rounded-2xl bg-white overflow-hidden shadow-lg text-center">
      <div className="overflow-hidden">
      {imageLoading && <div className="spinner3"></div>}
      <img 
       className={`hover:scale-110 transition hover:rotate-2 ${
                      imageLoading && 'hidden'
                    }`}
      src={drink.strDrinkThumb} 
      alt={`Image of ${drink.strDrink}`}
      onLoad={() => setImageLoading(false)}
      />
      </div>

      <div className="p-5">
      <h2 className="text-2xl truncate font-bold">{drink.strDrink}</h2>
      <button
      type="button"
      className="btn mt-5 w-full"
      onClick={handleClick}
      >
        Show Recipe
      </button>
      </div>
    </div>
  );
}
