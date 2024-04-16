import { useState, useEffect } from 'react'

// Route
import { Route, Routes } from 'react-router-dom'
import Landingpage from './pages/Landingpage'

// Library
import 'aos/dist/aos.css';
import AOS from 'aos';
import CekStatus from './pages/CekStatus';
import Marketplace from './pages/Marketplace';
import DaftarKontak from './pages/DaftarKontak';
import HasilStatus from './pages/HasilStatus';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
    <Routes>
      <Route path='/' element={<Landingpage />}/>
      <Route path='/cek-nutrisi' element={<CekStatus />} />
      <Route path='/marketplace' element={<Marketplace />} />
      <Route path='/daftar-kontak' element={<DaftarKontak />} />
      <Route path='/cek-nutrisi/hasil-hitung' element={<HasilStatus />} />
    </Routes>
    </>
  )
}

export default App
