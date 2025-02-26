import DrinkCard from "../components/DrinkCard";
import { useAppStore } from "../stores/useAppStore";

export default function FavoritesPage() {
  const { favorites } = useAppStore();

  const hasFavorites = favorites.length > 0;

  return (
    <>
      <h1 className="text-6xl text-center font-extrabold mb-5">Favorites</h1>
      {hasFavorites ? (
        <div className="mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10">
          {favorites.map((drink) => (
            <DrinkCard key={drink.idDrink} drink={drink} />
          ))}
        </div>
      ) : (
        <p className="text-center">No favorites yet</p>
      )}
    </>
  );
}
