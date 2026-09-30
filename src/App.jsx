import React from 'react'
import { useState } from 'react'
import "./App.css"

const App = () => {
  const [theme, setTheme] = useState("dark");

  const lightTheme = () => {
    console.log("Lighting Theme");
    setTheme("light")
  }

  const darkTheme = () => {
    console.log("Dark Theme");
    setTheme("dark")
  }


  return (
    <div className={`theme-container ${theme}`}>

      <div className='btn'>
      <div className='light-btn'>
        <button id='light' onClick={lightTheme}>Light</button>
  
      <button id='dark' onClick={darkTheme}>Dark</button>
      </div>
      
      </div>
      </div>
  )
}

export default App