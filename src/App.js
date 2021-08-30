// import logo from './logo.svg';
import './App.css';
import Textform from './components/Form';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      {/* Used default about_us value from navbar.js*/}
      <Navbar title="Texter" aboutText="About us" />
      <div className="container my-3">
        <Textform />
      </div>
    </>
  );
}

export default App;