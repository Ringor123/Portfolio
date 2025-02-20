import { useAppStore } from "../stores/useAppStore"


export default function IndexPage() {

  const {recipes} = useAppStore()

  return (
    <div  className="grid grid-cols-3">
    {recipes.drinks.map((recipe) => (
      <div>
      <h1 key={recipe.idDrink}>{recipe.strDrink}</h1>
      <img className="w-50 " src={recipe.strDrinkThumb} />
      </div>
    ))}
      
    </div>
  )
}
