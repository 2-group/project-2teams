import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Turs from './pages/Turs';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Header/>
     <About />
      <Routes>
        <Route path='/about' element={<About />}/>
        <Route path='/contacts' element={<Contacts/>} />
        <Route path='/turs' element={<Turs />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
