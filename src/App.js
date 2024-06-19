import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/MyForm.js';

function App() {

  const [mode,setMode] = useState("light");
  
  const [btnText,setBtnText] = useState("Enable Dark Mode");

  const toggleMode = () => {
    if (mode === 'light') {
        setMode('dark');
        document.body.style.background= "black"
        document.body.style.color= "white"
        setBtnText("Enable light Mode");
    } else {
      setMode('light');
      document.body.style.background= "white"
      document.body.style.color= "black"
      setBtnText("Enable Dark Mode");
    }
  }
  const redToggle = () => {
    if (mode === 'light') {
        setMode('red');
        document.body.style.backgroundImage="linear-gradient(to top, #ff0844 0%, #ffb199 100%)";
        document.body.style.color= "DarkRed"
        setBtnText("Enable light Mode");
    } else {
      setMode('red');
      document.body.style.color="linear-gradient(to top, #ff0844 0%, #ffb199 100%)";
        document.body.style.backgroundColor= "DarkRed"
      setBtnText("Enable Dark Mode");
    }
  }

  const greenToggle = () => {
    if (mode === 'light') {
        setMode('green');
        document.body.style.backgroundImage= "linear-gradient(to right, #43e97b 0%, #38f9d7 100%)";
        document.body.style.color= "green"
        setBtnText("Enable light Mode");
    } else {
      setMode('green');
      document.body.style.background= "green"
      document.body.style.color= "linear-gradient(to right, #43e97b 0%, #38f9d7 100%)"
      setBtnText("Enable Dark Mode");
    }
  }

  const purpleToggle = () => {
    if (mode === 'light') {
        setMode('blue');
        document.body.style.backgroundImage = "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)";
        document.body.style.color= "purple"
        setBtnText("Enable light Mode");
    } else {
      setMode('blue');
      document.body.style.background= "lightblue"
      document.body.style.color= "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)"
      setBtnText("Enable Dark Mode");
    }
  }

  const yellowToggle = () => {
    if (mode === 'light') {
        setMode('orange');
        document.body.style.backgroundImage = "linear-gradient(to right, #f83600 0%, #f9d423 100%)";
        document.body.style.color= "yellow"
        setBtnText("Enable light Mode");
    } else {
      setMode('orange');
      document.body.style.background= "orange"
      document.body.style.color= "linear-gradient(to right, #f83600 0%, #f9d423 100%)"
      setBtnText("Enable Dark Mode");
    }
  }

  const blueToggle = () => {
    if (mode === 'light') {
        setMode('blue');
        document.body.style.backgroundImage = "linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%)";
        document.body.style.color= "darkblue"
        setBtnText("Enable light Mode");
    } else {
      setMode('blue');
      document.body.style.background= "lightblue"
      document.body.style.color= "linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%)"
      setBtnText("Enable Dark Mode");
    }
  }

  const grayToggle = () => {
    if (mode === 'light') {
        setMode('gray');
        document.body.style.backgroundImage = "linear-gradient(-20deg, #616161 0%, #9bc5c3 100%)";
        document.body.style.color= "black"
        setBtnText("Enable light Mode");
    } else {
      setMode('gray');
      document.body.style.background= "gray"
      document.body.style.color= "white"
      setBtnText("Enable Dark Mode");
    }
  }

  

 


  return (
    <> 
    <Navbar  heading="SIT" AboutText="About Us"  mode = {mode} btnText={btnText} toggleMode = {toggleMode} redToggle = {redToggle} purpleToggle = {purpleToggle}  greenToggle = {greenToggle} yellowToggle = {yellowToggle} blueToggle = {blueToggle} grayToggle = {grayToggle}/>

    
    <TextForm title="About Us" mode = {mode}  toggleMode = {toggleMode} redToggle = {redToggle} greenToggle = {greenToggle} purpleToggle = {purpleToggle} yellowToggle = {yellowToggle} grayToggle = {grayToggle}/>
    </>
  );
}

export default App;