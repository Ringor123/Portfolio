/**
 * Modal component for displaying detailed drink recipe information.
 * Features:
 * - Displays full recipe details including ingredients, measures, and instructions
 * - Handles adding/removing drinks from favorites
 * - Shows loading states for both modal content and images
 * - Implements responsive design with backdrop blur effect
 * 
 * Uses Headless UI for accessible dialog implementation and integrates with
 * the global app store for state management.
 */

import { useState } from "react";
import { DialogPanel, DialogTitle, Dialog, Button } from "@headlessui/react";
import { useAppStore } from "../stores/useAppStore";
import { Recipe } from "../types";

export default function Modal() {
  const {
    modal,
    setModal,
    recipe,
    addToFavorites,
    removeFromFavorites,
    favorites,
    showNotification
  } = useAppStore();
  const [imageLoading, setImageLoading] = useState(true);

  const isFavorite = favorites.some(
    (recipeFav) => recipeFav.idDrink === recipe.idDrink
  );

  /**
   * Builds a list of ingredients and their measures from the recipe data.
   * Handles up to 10 ingredient-measure pairs, filtering out empty values.
   */
  const renderIngredients = () => {
    const ingredients = [];
    for (let i = 1; i <= 10; i++) {
      const ingredient = recipe[`strIngredient${i}` as keyof Recipe];
      const measure = recipe[`strMeasure${i}` as keyof Recipe];

      if (ingredient && measure) {
        ingredients.push(
          <li key={i} className="text-lg">
            {ingredient} - {measure}
          </li>
        );
      }
    }
    return ingredients;
  };

  /**
   * Resets modal state and image loading state when closing.
   */
  const close = () => {
    setModal(false);
    setImageLoading(true);
  };

  /**
   * Handles adding/removing drinks from favorites and shows appropriate notification.
   * Automatically closes the modal after the action is completed.
   */
  const handleClick = () => {
    if (!isFavorite) {
      addToFavorites(recipe);
      setModal(false);
      showNotification({
        text: 'Recipe added to favorites',
        error: false
      })
    } else {
      removeFromFavorites(recipe);
      setModal(false);
      showNotification({
        text: 'Recipe deleted from favorites',
        error: false
      })
    }
  };

  return (
    <>
      <Dialog
        open={modal}
        as="div"
        transition
        className="fixed inset-0 flex w-screen items-center justify-center bg-black/75 p-4 transition duration-300 ease-out data-[closed]:opacity-0"
        onClose={close}
      >
        {!recipe.idDrink ? (
          <div className="spinner2">
            <div className="dot1"></div>
            <div className="dot2"></div>
          </div>
        ) : (
          <>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4">
                <DialogPanel
                  transition
                  className="relative transform overflow-hidden rounded-lg bg-white/50 backdrop-blur-lg px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6"
                >
                  <DialogTitle
                    as="h3"
                    className="text-gray-900 text-4xl font-extrabold mb-5 uppercase text-center"
                  >
                    {recipe.strDrink}
                  </DialogTitle>
                  {imageLoading && <div className="spinner1"></div>}
                  <img
                    src={recipe.strDrinkThumb}
                    alt={recipe.strDrink}
                    className={`rounded-lg opacity-75 mb-10 mx-auto w-96 ${
                      imageLoading ? "hidden" : "block"
                    }`}
                    onLoad={() => setImageLoading(false)}
                  />

                  <DialogTitle
                    as="h3"
                    className="mb-2 text-gray-900 text-xl font-extrabold uppercase text-center"
                  >
                    Ingredients and Measures
                  </DialogTitle>
                  {renderIngredients()}
                  <DialogTitle
                    as="h3"
                    className="mt-10 mb-2 text-gray-900 text-xl font-extrabold uppercase text-center"
                  >
                    Instructions
                  </DialogTitle>

                  <p className="text-lg text-black">{recipe.strInstructions}</p>
                  <div className="flex justify-between mt-10 gap-5">
                    <Button
                      className="cursor-pointer bg-green-600/75 text-white font-extrabold w-full p-2 rounded-lg shadow-lg uppercase"
                      onClick={handleClick}
                    >
                      {isFavorite
                        ? "Delete from favorites"
                        : "Add to favorites"}
                    </Button>
                    <Button
                      className="cursor-pointer bg-red-main/75 text-white font-extrabold w-full p-2 rounded-lg shadow-lg uppercase"
                      onClick={close}
                    >
                      Got it, thanks!
                    </Button>
                  </div>
                </DialogPanel>
              </div>
            </div>
          </>
        )}
      </Dialog>
    </>
  );
}
