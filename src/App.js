import './App.css';
import Navbar from './componet/Navbar';
// import FormFile from './componet/FormFile';
import AboutUs from './componet/Aboutus';
function App() {
  return (
    <>  
      <Navbar Title="Git"/>
        {/* <FormFile FTitle="Input your text" /> */}

        <AboutUs  headinh="About-Us" />
    </>
  );
}

export default App;
