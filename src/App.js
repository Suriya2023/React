import './App.css';
import Navbar from './components/Navbar';
import FormData from './components/MyForm';
import { useState } from 'react';
function App() {
  const [mode, Setmode] = useState("light")

  const ToggleMode = () => {
    if (mode === "light") {
      Setmode("😀")
      document.body.style.background = "black"
      document.body.style.color = "white"


    } else {
      Setmode("😴");
      document.body.style.background = "white"
      document.body.style.color = "black"
    }
  }



  return (
    <>
      <Navbar mode={mode} ToggleMode={ToggleMode} Setmode ={Setmode} />
      <FormData mode={mode} ToggleMode={ToggleMode} />

    </>
  );
}




export default App;
