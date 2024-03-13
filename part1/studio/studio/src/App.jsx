
import './App.css';
import RecipePhoto from './components/Photos.jsx'
import RecipeDescription from './components/Description.jsx';
import RecipeIngredients from './components/Ingredients.jsx';
function App() {

  return (
    <>
      <div className="App">
        <div className= "recipePhotoBlock">
          <RecipePhoto/>
          <div>
            <RecipeDescription />          
            <RecipeIngredients />
          </div>
        </div>
      </div>
    </>
  )
}

export default App


