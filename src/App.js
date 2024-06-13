import './App.css';
import Navbar from './components/Navbar';

import FormData from './components/MyForm';
import { useState } from 'react';
function App() {
     
  const [mode, setMode] = useState("light")
  const [thisBtn, SetBtn] = useState("Enable To Dark Mode")

  const ToggleTheam = () => {
    if (mode === 'light') {
      setMode("dark")
      SetBtn("Enable TO Dark Mode")
      document.body.style.background = "black";
      document.body.style.color = "white";

    } else {
      setMode("light")
      SetBtn("Enable To Light Mode")
      document.body.style.background = "white"
      document.body.style.color = "black"
    }
  }




  return (
    <>


      <Navbar Mytitle="Suraj" mode={mode} ToggleTheam3={ToggleTheam3}   ToggleTheam6={ToggleTheam6} ToggleTheam4={ToggleTheam4} ToggleTheam5={ToggleTheam5} ToggleTheam4={ToggleTheam4} ToggleTheam={ToggleTheam} ToggleTheam2={ToggleTheam2} ToggleTheam1={ToggleTheam1} thisBtn = {thisBtn} />
      <FormData Title="Enter your  Any Text"ToggleTheam3={ToggleTheam3}ToggleTheam6={ToggleTheam6}  ToggleTheam5={ToggleTheam5} ToggleTheam4={ToggleTheam4} mode={mode} ToggleTheam2={ToggleTheam2} ToggleTheam1={ToggleTheam1} ToggleTheam={ToggleTheam} input="input text here" />

    </>
  );
}




export default App;