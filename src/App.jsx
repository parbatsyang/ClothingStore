import React from 'react'
import {Routes,Route, Router} from "react-router-dom"
import Home from "./components/Home"
import ProductDetailis from "./components/ProductDetails"
import Header from "./pages/Header"
import Sidebar from "./pages/Sidebar"
import Footer from "./pages/Footer"


function App() {
  return (
    <>
      <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product/:id' element={<ProductDetailis/>}/>
    </Routes>
      <Sidebar/>
      <Footer/>
    </>
  )
}

export default App