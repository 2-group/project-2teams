import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Header/>
      <Routes>
        <Route path='/about' element={<About/>}/>
        
      </Routes>
    </BrowserRouter>
    </div>        
  );
}

export default App;
