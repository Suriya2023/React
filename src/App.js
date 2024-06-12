import './App.css';
import Navbar from './componet/Navbar';
import FormFile from './componet/FormFile';
import { useState } from 'react';
import Alert from './componet/Alert'
function App() {

  const [mode, setMode] = useState('light')
  const [setBtn,setBtnMode] = useState("Enable To Dark Mode")
  const [alert , setAlert] = useState(null);


  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setBtnMode("Enable To Light Mode")
      setMode('dark');
      document.body.style.background = 'black'
      document.body.style.color = 'white'
      document.body.style.transition = 'all .5s'
      showAlert("Dark Mode Has Been Enable" , "success");

    }
    else {
      setMode('light');
      setBtnMode("Enable To Dark Mode")

      document.body.style.background = "white"
      document.body.style.color = 'black'

      document.body.style.transition = 'all .5s'
      showAlert("Light Mode Has Been Enable" , "success");

    }
  }

  return (
    <>
    <Alert alert = {alert}/>
      <Navbar Title="Git" mode={mode} toggleMode={toggleMode} setBtn = {setBtn} />
      <FormFile FTitle="Input your text" mode={mode} showAlert={showAlert} toggleMode ={toggleMode} />
    </>
  );
}

export default App;