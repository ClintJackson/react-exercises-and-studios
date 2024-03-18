import { useState } from 'react';

export default function BoardAssignment () {
    const boards = [
        {
            value: "Nerdy thingsValue",
            label: "Nerdy thingsLabel",
        }, { 
            value: "Party RecipesValue",
            label: "Party RecipesLabel",
        }, {
            value: "LOTR stuffValue",
            label: "LOTR stuffLabel",
      },
      {
        value: "choose an optionValue",
        label: "choose an optionLabel",
    },
   ];
   //console.log (boards[0].value)

   const boardOptions = boards.map((board, index) => {
      return (
        <option key = {index} value = {board.value}>{board.label}</option>
      )
   })
   const [boardName, setName] = useState("choose an option");

   const handleChange = (event) => {
        
        /* let selectedValue = event.target.value;
        selectedValue == boards[0].value ? setName("Select a board to save to") :  setName("saved to " + selectedValue);
        setName(message); */
        //setName(event.target.value);
        console.log(event.target.value);
        event.target.value === boards[0].value ? setName("saved" + event.target.value) : setName("Saved to " + event.target.value);
        //trying to get it to return to default and update the <p> boardname space with the default message, but not working with anything I've tried. I think it's because there is "no change" if the first option is being selected. There's no reconciliation to perform. So, doing it this way may be a deadend. There's gotta be a way to do it. 
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
        {boardOptions}
      </select>

      <p> {boardName}!</p>
      </div>
   );
}
