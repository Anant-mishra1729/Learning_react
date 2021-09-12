// import './App.css';
import About from "./components/About";
import Textform from "./components/Form";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import Alert from "./components/Alert";

// Importing react router -> Used to change contents of page without reloading page
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#292C35";
      showAlert("Dark mode is enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      showAlert("Light mode is enabled", "success");
    }
  };

  const showAlert = (msg, type) => {
    setAlert({
      message: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 500);
  };

  const [mode, setMode] = useState("light"); // Hook for dark mode
  const [alert, setAlert] = useState(null);

  return (
    <Router>
      <Navbar
        title="Texter"
        aboutText="About us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/">
            <Textform mode={mode} showAlert={showAlert} />
          </Route>

          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
