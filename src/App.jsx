import React from 'react'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'


import Footer from './components/Footer'

function App() {

  return (
    
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
 
  
  );
    
  
}

export default App;
