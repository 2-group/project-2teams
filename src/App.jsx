import './App.css';
import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About/About'
import Turs from './pages/Turs/Turs.jsx';
import Contacts from './pages/Contacts/Contacts.jsx';
import Home from './pages/Home/Home'
import Hotels from './pages/Hotels/Hotels';
import SearchList from './components/Search/SearchList.jsx';
import Excursion from './components/Search/SearchList.jsx';
import Registr from './pages/Registr/Registr.jsx';
import Login from './pages/Login/Login.jsx';


function App() {

  return (
    <div className="App">

      <BrowserRouter>
     <Header/>
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/turs' element={<Turs />}/>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/hotels' element={<Hotels/>}/>
        <Route path='/excursion' element={<Excursion/>}/>
        <Route path='/search' element={<SearchList/>}/>
        <Route path='/registr' element={<Registr/>}/>
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
    
    </div>        
  );
}

export default App;
