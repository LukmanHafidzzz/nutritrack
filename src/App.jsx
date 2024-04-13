import { useState, useEffect } from 'react'

// Route
import { Route, Routes } from 'react-router-dom'
import Landingpage from './pages/Landingpage'

// Library
import 'aos/dist/aos.css';
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
    <Routes>
      <Route path='/' element={<Landingpage />}/>
    </Routes>
    </>
  )
}

export default App
