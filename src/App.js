// import logo from './logo.svg';
import './App.css';
//import About from './components/About';
import Textform from './components/Form';
import Navbar from './components/Navbar';
import React, { useState } from 'react'

function App() {
  const toggleMode = () => {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = "#292C35"
      settextColor({
        headingColor : "orange",
        textColor : "white"
      });
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = "#fff"
      settextColor({
        headingColor : "black",
        textColor : "black"
      });
    }
  }
  
  const [mode, setMode] = useState('light'); // Hook for dark mode
  const [textColors, settextColor] = useState({
    headingColor : "black",
    textColor : "white"
  }); 

  return (
    <>
      {/* Used default about_us value from navbar.js*/}
      <Navbar title="Texter" aboutText="About us" mode = {mode} toggleMode = {toggleMode}/>
      <div className="container my-3">
        <Textform textColors = {textColors}/>
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;