import React from 'react'
import { CartProvider } from 'react-use-cart'
import './App.css'
import HomeScreen from './screens/HomeScreen'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import CartScreen from './screens/CartScreen';
import Header from './layouts/Header'

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <section className="container">
        <Routes>
          <Route path="/" exact element={<HomeScreen />} />
          <Route path="/Cart" exact element={<CartScreen />} />
        </Routes>
        </section>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
