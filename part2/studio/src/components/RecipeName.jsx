import recipedata from "./recipe.json";


export default function RecipeName() {
  const recipeName = recipedata.map(recipe => (
    <div key = {recipe.name}>
      <h1>{recipe.name}</h1>
    </div>
  ));
  return (
  <div>
    {recipeName}
  </div>);
}



//import return the name of the recipe as a level 1 header