import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      {
         value: "Nerdy things",
         label: "Nerdy things"
      }, { 
         value: "Party Recipes",
         label: "Party Recipes"
      }, {
         value: "LOTR stuff",
         label: "LOTR stuff"
      }
   ];

   const boardOptions = boards.map((board, index) => {
      return(
         <option value = {board.value} key = {index}>{board.label}</option>
      )
   })
   const [boardName, setName] = useState("not saved yet");
   const handleChange = (event) => {
      setName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boardOptions}
      </select>

      <p>Saved to: {boardName}!</p>
      </div>
   );
}
