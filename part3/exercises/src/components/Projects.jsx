import data from '../data.json';
import { useState } from 'react';

export default function MyProjects() {
  const [index, setIndex] = useState(0);


  

  let myProjects = data.projects;
  function handleClick() {
  (index < myProjects.length-1) ? setIndex(index + 1) : setIndex(0);
  
  }
  
  let indivProject = myProjects[index];

  return (
    <div>
      <button onClick={handleClick}>
        Next
      </button>
      <div>
         <h2>{indivProject.canvas} by {indivProject.designer}</h2>
         <img src={indivProject.photoUrl} />
      </div>
      <h3>Wait, what?...these aren't guitars...?</h3>
    </div>
  );
}
