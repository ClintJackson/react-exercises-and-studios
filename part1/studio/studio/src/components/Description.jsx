import React from 'react'
import styles from "./Description.module.css"

function RecipeAuthor (){
    let authorLink = "https://www.bodybuilding.com/recipes/ginger-basil-chicken-and-rice";
    let authorPhoto = "https://www.bodybuilding.com/images/authors/author-smallbox-justin-woltering.jpg";
    let authorName = "Justin Woltering";

    return (
        <div className={styles.recipeAuthorBlock}>
            <img src = {authorPhoto} alt = "Author photo" className={styles.imageUpdates}/>

            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}> Author's Recipe Page</a>
            </div>
        </div>
    )
}

class RecipeDescription extends React.Component{
    render() {
        return (
        <div>
            <div>
                <h1> Ginger Basil Chicken And Rice</h1>
                <p>This easy recipe based on the classic "chicken and rice" recipe is perfect for macro targetting</p>
            </div>
            <RecipeAuthor />
        </div>
        )
    }
}

export default RecipeDescription;