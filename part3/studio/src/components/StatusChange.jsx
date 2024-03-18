import { useState } from 'react';

export default function StatusChange () {

   const [notes, setNotes] = useState("");
   const [recipeStatus, setRecipeStatus] = useState(false);

   const handleChange = (event) => {
      setNotes(event.target.value);
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      setRecipeStatus(true)
   }

   return (
      <div style={{paddingTop: "50px"}}>
         <form onSubmit={handleSubmit}>
            <label>Have you tried this recipe? Add your notes here: <input type="text" value={notes} onChange={handleChange} />
            </label>
            <input type="submit" />
         </form>

         <p>{notes}</p>

         <p>{recipeStatus === false ? 
            "Give the recipe a shot if you're heading to Mordor" : 
            <img src = "https://i.pinimg.com/564x/c1/3d/30/c13d30dde29d240d987a847ecd2aea4c.jpg"/>}</p>
      </div>
   );
}
