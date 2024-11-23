import React from 'react';
import Navbar from './Component/Navbar.jsx';
import Home from './Pages/Home.jsx';
import Crime from './Pages/Crime.jsx';
import Financial from './Pages/Financial.jsx';
import Sports from './Pages/Sports.jsx';

import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
``
  return (
    <div className='app'>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/crime' element={<Crime/>}/>
        <Route path='/financial' element={<Financial/>}/>
        <Route path='/sports' element={<Sports/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
