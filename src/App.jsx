import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import HearingTest from './pages/HearingTest';
import SpeechLanguageTherapy from './pages/SpeechLanguageTherapy';
import HearingAidTrialsAndFittings from './pages/HearingAid';



const App = () => {
  return (
    <BrowserRouter>
      <div>
      
        <Routes>
       
          
          <Route path="/about" element={<About />} />
          
          <Route path="/contact" element={<Contact />} />
          <Route path="/hearing-tests" element={<HearingTest />} />
          <Route path="/hearing-aid-trial-and-fittings" element={<HearingAidTrialsAndFittings />} />
          <Route path="/speech-and-language-therapy" element={<SpeechLanguageTherapy />} />
         
              
         
          <Route path="/" element={<Home />} />
           
          <Route path="/aawaz" element={<Home />} />  
         
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;