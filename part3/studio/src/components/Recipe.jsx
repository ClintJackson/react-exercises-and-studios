import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://ko-fi.com/geekychef";
   let authorPhoto = "https://az743702.vo.msecnd.net/cdn/useruploads/b19f94bb-cb84-4227-a2a3-aeceb1c0b374.png";
   let authorName = "Cassandra Reeder";

   
   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = [
      "3 eggs",
      "1 cup of honey",
      "3 kumquats, whole",
      "2 teaspoons of orange flower water or rose water",
      "3 ounces of chopped almonds or macadamia nuts (fruits of the Mallorn tree)",
      "1/4 cup of melted butter",
      "2 1/4 cup flour (for maximum nerdy accuracy, use barley flour)",
      "1/2 teaspoon of salt"];
      const ingredientsMap = ingredients.map((ingredient, index)=>{
         return(
            <li key = {index}>{ingredient}</li>
         )
      })
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredientsMap}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   const recipeIntro = "For those who don't know, lembas is a special bread made by the elves of the Lord of the Rings series. It's shaped into thin cakes and because of its filling nature it's usually used for sustenance on long journeys. Generally wrapped in Mallorn leaves, not much else is known about the ingredients. The bread is supposed to be brown on the outside and cream colored on the inside, sort of like a flat bread, and tastier than most other cakes in Middle-Earth. You can find a template for mallorn leaves and a alternate recipe here. These would probably make great party hors d'oeuvres if you're nerdy enough to have a LoTR themed party. Which you probably are. Dork."
   const recipeInstructions = [
      "Put eggs, butter, honey, kumquats, rose or orange flower water, and nuts in a food processor or blendor",
      "Blend on high for 2-4 minutes",
      "Add 1 cup of the flour",
      "Blend for 1-2 minutes",
      "Place mixture into a bowl, add remaining flour and salt",
      "Whisk or stir until well-blended",
      "Bake in 2-tablespoon apportionments at 350 degrees for 10-15 minutes",
      "wrap in clean leaf when cooled",
   ]
   return (
      <div> 
         <div>
            <h1>Recipe Description</h1>
            <p>{recipeIntro}</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <recipeInstructions/>
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   const legolasAlt = "Legolas Thranduilion, known in Westron as Legolas Greenleaf, called 'Laicolassë' in the speech of Quenya, of the High Elves also called 'Legolas of the Woodland Realm', friend of Elessar, Prince of the Woodland Realm of Northern Mirkwood, Member of the Fellowship of the Ring, tall as a young tree, lithe, immensely strong, able swiftly to draw a great war-bow and shoot down a Nazgul, endowed with the tremendous vitality of Elvish bodies, so shard and resistant to hurt that he went only in light shoes over rock or through snow, the most tireless of all the Fellowship, holding lembas bread."
   return (
      <img src="https://pm1.aminoapps.com/6315/60b35eed94a08fdc498581766119de1f61fdc12d_hq.jpg" alt={legolasAlt} className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
