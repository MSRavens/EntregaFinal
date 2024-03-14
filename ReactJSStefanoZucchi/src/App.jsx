import React, { useEffect } from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error/Error';
import './App.css';
import Cart from './components/Cart/Cart';
import CartProvider from './context/CartContext';
import CheckOut from './components/CheckOut/Checkout';

const App = () => {

  return (
    <div className='body'>
      <BrowserRouter>

        <CartProvider>

          <Navbar />

          <Routes>

            <Route path='/' element={<ItemListContainer />} />

            <Route path='/categoria/:categoryId' element={<ItemListContainer />} />

            <Route path='/detalle/:id' element={<ItemDetailContainer />} />

            <Route path='/cart' element={<Cart/>} />

            <Route path='/CheckOut' element={<CheckOut/>}/>

            <Route path='*' element={<Error />} />

          </Routes>

          <Footer />

        </CartProvider>

      </BrowserRouter>




    </div>
  )
}

export default App;
