import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About'
import Turs from './pages/Turs';
import Contacts from './pages/Contacts';
import Home from './pages/Home/Home'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
     <Header/>
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/turs' element={<Turs/>}/>
        <Route exact path='/' element={<Home/>}/>
        <Route path='contacts' element={<Contacts/>}/>
      </Routes>
    </BrowserRouter>
    </div>        
  );
}

export default App;
