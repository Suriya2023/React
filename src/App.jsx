import './App.css';
import Navbar from './componet/Navbar';
import FormFile from './componet/FormFile';
import { useState } from 'react';
import Alert from './componet/Alert'
import Privecy from './privecyPolicy';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
function App() {

  const [mode, setMode] = useState('light')
  const [setBtn, setBtnMode] = useState("Enable To Dark Mode")
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
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
      showAlert("Dark Mode Has Been Enable", "success");
      setInterval(() => {
        document.title = "SIT - Admission"
      }, 2000);

      setInterval(() => {
        document.title = "SIT - B.sc.It"
      }, 1500);
    }
    else {
      setMode('light');
      setBtnMode("Enable To Dark Mode")

      document.body.style.background = "white"
      document.body.style.color = 'black'

      document.body.style.transition = 'all .5s'
      showAlert("Light Mode Has Been Enable", "success");
      showAlert("Light Mode Has Been Enable  ", "Success")
      document.title = "SIT - Light Mode"

    }
  }
  const router = createBrowserRouter([{
    path: '/Home',
    element: <>
      <Navbar Title="Git" mode={mode} toggleMode={toggleMode} setBtn={setBtn} />
      <Alert alert={alert} />

      <FormFile FTitle="Input your text" mode={mode} showAlert={showAlert} toggleMode={toggleMode} />
    </>
  },
    {
      path: '/privecyPolicy',
    element: <>
      <Navbar Title="Git" mode={mode} toggleMode={toggleMode} setBtn={setBtn} />

      <FormFile FTitle="Input your text" mode={mode} showAlert={showAlert} toggleMode={toggleMode} />
      
      <Privecy />
    </>
    }
  ])

  return (
    <>
<RouterProvider router={router}/>
    </>
  );
}

export default App;