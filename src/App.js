import './App.css';
import Navbar from './components/Navbar';
import FormData from './components/MyForm';
import { useState } from 'react';
function App() {

  const [mode, setMode] = useState("light")


  const ToggleTheam = () => {
    if (mode === 'light') {
      setMode("dark")
      document.body.style.background = "black";
      document.body.style.color = "white";

    } else {
      setMode("light")
      document.body.style.background = "white"
      document.body.style.color = "black"
    }
  }

  return (
    <>


      <Navbar Mytitle="Suraj" mode={mode} ToggleTheam={ToggleTheam} />
      <FormData Title="Enter  Any Text" mode={mode} ToggleTheam={ToggleTheam} input="input text here" />

    </>
  );
}




export default App;
