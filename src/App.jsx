import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Home from './pages/Home';
// import Contact from './pages/Contact';
// import About from './pages/About';
// import AdultDiapers from './pages/AdultDiapers';
// import Media from './pages/Media';
// import Blog1 from './pages/Blog1';

const App = () => {
  return (
    <BrowserRouter>
      <div>
      
        <Routes>
       
          {/* <Route path="/baby-diaper" element={<Diapers />} />
          <Route path="/about" element={<About />} />
          <Route path="/breaking-barriers" element={<Blog1 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sanitary-pads" element={<Pads />} />
          <Route path="/adult-diaper" element={<AdultDiapers/>} />          
          <Route path="/media" element={<Media/>} />           */}
         
          <Route path="/" element={<Home />} />
           
          {/* <Route path="/elanta" element={<Home />} />   */}
         
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
