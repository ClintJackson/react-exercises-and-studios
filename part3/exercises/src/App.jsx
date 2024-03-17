import { useState } from 'react'
import './App.css'
import HobbyIntroduction from './components/Introduction';
import MyProjects from './components/Projects';

function App() {

  return (
    <div className = "App">
      <h1>My Hobby: Guitar</h1>
      <div>
        <HobbyIntroduction/>
        <MyProjects/>
      </div>

    </div>
  )
}

export default App
