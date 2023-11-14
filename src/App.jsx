import { useState} from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart';
function App() {
  
  return (
    <>
    <BrowserRouter>
    <NavBar />
      <Routes>
      
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails/>} />
          <Route path="/cart" element={<Cart/>} />
      </Routes>
      
    </BrowserRouter>
    
    </>
  )
}

export default App
