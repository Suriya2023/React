import './App.css';
import Navbar from './components/Navbar';
import FormData from './components/MyForm';
import { useState } from 'react';
function App() {
  const [mode, Setmode] = useState("light")

  const ToggleMode = () => {
    if (mode === "light") {
      Setmode("dark")
      document.body.style.background = "black"
      document.body.style.color = "white"


    } else {
      Setmode("light");
      document.body.style.background = "white"
      document.body.style.color = "black"
    }
  }



  return (
    <>
      <Navbar mode={mode} ToggleMode={ToggleMode} />
      <FormData mode={mode} ToggleMode={ToggleMode} />

    </>
  );
}




export default App;
