import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Bag from './components/Bag';
import Front from './components/Front';

const App = () => {
  return (<>
  <Routes>
        <Route path='/' element={<Navbar />}/>
    </Routes>
  <Routes>
        <Route path='/' element={<Home/>}/>
    </Routes>
    <Routes>
        <Route path='/bag' element={<Bag />}/>
    </Routes>
    <Routes>
      <Route path='/main' element={<Front/>}/>
    </Routes>
  </>)
}

export default App;