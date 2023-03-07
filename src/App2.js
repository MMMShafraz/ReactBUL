import HomePage from './HomePage/Home';
import About from './AboutUs/About';
import Work from './Work/Work';
import Contact from './contact/contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App2(){
  return(
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<HomePage />} />
    //     <Route path="/About" element={<About />} />
    //   </Routes>
    // </BrowserRouter>
    <>
    
    <HomePage />
    <About />
    <Work />
    <Contact />
    </>
  );
}

export default App2;