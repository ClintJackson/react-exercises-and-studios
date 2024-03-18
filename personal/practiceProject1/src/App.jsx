import { useState } from 'react'
import ShoeButton from "./components/ShoeButton.jsx";
import './App.css'
import Ringer from "./components/Ringer.jsx";
import ReportForm from './components/Report.jsx';
import BoardAssignment from './components/exampleBoard.jsx';
function App() {
 

  return (
    <div>
      <ShoeButton/>
      <Ringer/>
      <ReportForm/>
      <BoardAssignment/>
    </div>
  )
}

export default App;
