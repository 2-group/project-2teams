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

import { CartProvider } from './pages/basket/CartContext.jsx';
import Cart from './pages/basket/Cart.jsx';
import Product from './pages/basket/Product.jsx';
import Checkout from './pages/basket/Checkout.jsx';


function App() {
  const sampleProduct = { id: 1, name: 'Пример продукта', price: 10000 };

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
      </Routes>
    </BrowserRouter>

    <CartProvider>
      <div>
        <h1>Мой магазин</h1>
        <Product product={sampleProduct} />
        <Cart />
        <Checkout />
      </div>
    </CartProvider>
    
    </div>        
  );
}

export default App;
