import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Preloader1 from './pages/preloader1';
import Preloader2 from './pages/preloader2';
import Preloader3 from './pages/preloader3';
import Home from './pages/home';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Preloader1 />} />
      <Route path="/home" element={<Home/>} />
      <Route path="/preload1" element={<Preloader2 />} />
      <Route path="/preload" element={<Preloader3 />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App