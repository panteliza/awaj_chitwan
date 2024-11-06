import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import HearingTest from './pages/HearingTest';
import SpeechLanguageTherapy from './pages/SpeechLanguageTherapy';
import HearingAidTrialsAndFittings from './pages/HearingAid';
import ReceiverInCanal from './pages/ReceiverInCanal';
import BehindTheEar from './pages/BehindTheEar';
import InTheEar from './pages/InTheEar';
import InvisibleInTheCanal from './pages/InvisibleInTheCanal';
import CompletelyInCanal from './pages/CompletelyInCanal';
import OAE from './pages/OAE';
import PTATest from './pages/PTATest';
import TympanometryTest from './pages/Tympanometry';



const App = () => {
  return (
    <BrowserRouter>
      <div>
      
        <Routes>
       
          
          <Route path="/about" element={<About />} />
          
          <Route path="/contact" element={<Contact />} />
          <Route path="/hearing-tests" element={<HearingTest />} />
          <Route path="/pta-test" element={<PTATest />} />
          <Route path="/tympanometry-stapedius" element={<TympanometryTest/>} />
          <Route path="/behind-the-ear" element={<BehindTheEar/>} />
          <Route path="/in-the-ear" element={<InTheEar/>} />
          <Route path="/completely-in-canal" element={<CompletelyInCanal/>} />
          <Route path="/receiver-in-canal" element={<ReceiverInCanal />} />
          <Route path="/invisible-in-the-canal" element={<InvisibleInTheCanal />} />
          <Route path="/hearing-aid-trial-and-fittings" element={<HearingAidTrialsAndFittings />} />
          <Route path="/otoacostic-emission" element={<OAE />} />
          <Route path="/speech-and-language-therapy" element={<SpeechLanguageTherapy />} />
         

              
         
          <Route path="/" element={<Home />} />
           
          <Route path="/aawaz" element={<Home />} />  
         
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;