import recipedata from './recipe.json';

export default function IngredientList() {
   return (
    <div>
      <h3>Ingredients</h3>
      {recipedata.map(data =>{
        return (
          <div key = {data.name}>
            {data.ingredients.map((ingredients, index)=> {
              return <li key={index}>{ingredients}</li>
            })}
          </div>
        )
          })}
    </div>
   )
 }
 

 
//import json file for the data
//use a nested map to get inside the inner array
 