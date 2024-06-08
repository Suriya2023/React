import './App.css';

import Navbar from './componet/Navbar.js';
// import FormFile from './componet/FormFile';
import AboutUs from './componet/Aboutus.js';
function App() {
  return (
    <>
      <Navbar Title="Git" />
      {/* <FormFile FTitle="Input your text" /> */}

      <AboutUs heading="About-Us" />



    </>
  );
}

export default App;
