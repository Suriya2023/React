import './App.css';
import Navbar from './componet/Navbar';
import FormFile from './componet/FormFile';
import { useState } from 'react';
function App() {

  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = 'black'
      document.body.style.color = 'white'
      document.body.style.transition = 'all .5s'
    }
    else {
      setMode('light');
      document.body.style.background = "white"
      document.body.style.color = 'black'

      document.body.style.transition = 'all .5s'

    }
  }

  return (
    <>
      <Navbar Title="Git" mode={mode} toggleMode={toggleMode} />
      <FormFile FTitle="Input your text" />
    </>
  );
}

export default App;
