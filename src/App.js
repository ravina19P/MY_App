import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Price from './Components/Pricing/Price';
import Contact from './Components/Contact/Contact';
import Features from './Components/Features/Features';
const LazyContact = React.lazy(() => import('./Components/Contact/Contact'))

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/Features' element={<Features />} />
          <Route path='/Pricing' element={<Price></Price>} />       
          <Route path='/Contact' element={<React.Suspense fallback='loading...'><LazyContact /></React.Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

