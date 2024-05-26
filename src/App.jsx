import './App.css';
import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About/About'
import Turs from './pages/Turs';
import Contacts from './pages/Contacts';
import Home from './pages/Home/Home'
import Hotels from './pages/Hotels/Hotels';
import Button from 'react-bootstrap/Button';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
     <Header/>
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/turs' element={<Turs/>}/>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/hotels' element={<Hotels/>}/>
        
      </Routes>
    </BrowserRouter>
    
    </div>        
  );
}

export default App;
