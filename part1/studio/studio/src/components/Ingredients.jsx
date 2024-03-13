import style from "./Ingredients.module.css";

export default function RecipeIngredients(){
    let ingredientsArray = [
        "8 oz chicken breast",
        "1 red bell pepper, sliced",
        "1 carrot, sliced",
        "1 cup broccoli",
        "1 tbsp olive or avocado oil",
        "2 clove garlic, minced",
        "1 tbsp ground ginger",
        "1/4 cup fresh basic leaves, chopped",
    ];

    return (
        <div>
            <h3 className = {style.ingredientsListHeader}>Recipe Ingredients</h3>
            <ul className = {style.ingredientList}>
                <li>{ingredientsArray[0]}</li>
                <li>{ingredientsArray[1]}</li>
                <li>{ingredientsArray[2]}</li>
                <li>{ingredientsArray[3]}</li>
                <li>{ingredientsArray[4]}</li>
                <li>{ingredientsArray[5]}</li>
                <li>{ingredientsArray[6]}</li>
                <li>{ingredientsArray[7]}</li>
            </ul>
        </div>
    )
}