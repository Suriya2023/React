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


  const ToggleTheam1 = () => {
    if (mode === 'dark') {
      document.body.style.background = "blue";
      document.body.style.color = "white";

    } else {
      document.getElementById("Theamsoine").style.background = "blacK"

      document.body.style.background = "white"
      document.body.style.color = "black"
    }
  }

  const ToggleTheam2 = () => {
    if (mode === 'light') {
      document.body.style.background = "gray";
      document.body.style.color = "black";

    } else {
      document.body.style.background = "white"
      document.body.style.color = "black"
    }
  }


  const ToggleTheam3 = () => {
    if (mode === 'light') {
      document.body.style.background = "green";
      document.body.style.color = "black";

    } else {
      document.body.style.background = "white"
      document.body.style.color = "black"
    }
  }

  const ToggleTheam4 = () => {
    if (mode === 'light') {
      document.body.style.background = "red";
      document.body.style.color = "white";

    } else {
      document.body.style.background = "white"
      document.body.style.color = "black"
    }
  }

  const ToggleTheam5 = () => {
    if (mode === 'light') {
      document.body.style.background = "yellow";
      document.body.style.color = "red";

    } else {
      document.body.style.background = "white"
      document.body.style.color = "black"
    }
  }

  const ToggleTheam6 = () => {
    if (mode === 'light') {
      document.body.style.background = "aqua";
      document.body.style.color = "red";

    } else {
      document.body.style.background = "white"
      document.body.style.color = "black"
    }
  }

  const ToggleTheam7 = () => {
    if (mode === 'light') {
      document.body.style.background = "aqua";
      document.body.style.color = "red";

    } else {
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
