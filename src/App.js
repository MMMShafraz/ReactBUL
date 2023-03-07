import HomePage from './HomePage/Home';
import About from './AboutUs/About';
import Work from './Work/Work';
import Contact from './contact/contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;