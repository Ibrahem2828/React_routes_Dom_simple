import React from 'react';
import {BrowserRouter,Routes,Route}from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Nav from './components/Nav';
import Contact from './components/Contact';

function App() {
  return (

      <div>
   <BrowserRouter>
    <Nav/>
    <Routes>
     <Route path="/" element={< Home />}/>
     <Route path="/about" element={< About />}/>
     <Route path="/contact" element={<Contact/>}/>
   </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;