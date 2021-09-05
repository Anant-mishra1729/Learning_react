// import logo from './logo.svg';
// import './App.css';
//import About from './components/About';
import Textform from './components/Form';
import Navbar from './components/Navbar';
import React, { useState } from 'react'
import Alert from './components/Alert';

function App() {
  
  const toggleMode = () => {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = "#292C35";
      showAlert("Dark mode is enabled","success");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = "#fff";
      showAlert("Light mode is enabled","success");
    }
  }
  
  const showAlert = (msg, type) => {
    setAlert({
      message : msg,
      type : type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [mode, setMode] = useState('light'); // Hook for dark mode 
  const [alert,setAlert] = useState(null);

  return (
    <>
      {/* Used default about_us value from navbar.js*/}
      <Navbar title="Texter" aboutText="About us" mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container my-3">
        <Textform mode = {mode} showAlert = {showAlert}/>
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;