import data from './recipe.json';
import style from './styles.module.css';

export default function RecipeImage() {
  const recipeimg = data.map(recipe => (
    <div key = {recipe.name} >
      <img src = {recipe.recipeImage} className={style.recipeImage}/>
    </div>
  ));
   return (recipeimg);
 }
 
 //import json file for the data
 //apply css for className recipeImage
 