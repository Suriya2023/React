import './App.css';
import Navbar from './componet/Navbar';
import FormFile from './componet/FormFile';
import { useState } from 'react';
function App() {

  const [mode, setMode] = useState('light')
  const [setBtn,setBtnMode] = useState("Enable To Dark Mode")

  const toggleMode = () => {
    if (mode === 'light') {
      setBtnMode("Enable To Light Mode")
      setMode('dark');
      document.body.style.background = 'black'
      document.body.style.color = 'white'
      document.body.style.transition = 'all .5s'
    }
    else {
      setMode('light');
      setBtnMode("Enable To Dark Mode")

      document.body.style.background = "white"
      document.body.style.color = 'black'

      document.body.style.transition = 'all .5s'

    }
  }

  return (
    <>
      <Navbar Title="Git" mode={mode} toggleMode={toggleMode} setBtn = {setBtn} />
      <FormFile FTitle="Input your text" mode={mode} toggleMode ={toggleMode} />
    </>
  );
}

export default App;