import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductProvider from './context/ProductContext.jsx'
import {BrowserRouter} from "react-router-dom"
import SidebarProvider from "./context/SidebarContext.jsx"
import CartProvider from './context/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <CartProvider>
    <ProductProvider>
      <SidebarProvider>
       
    <BrowserRouter>
    <App />
    </BrowserRouter>
   
    </SidebarProvider>
    </ProductProvider>
    </CartProvider>
  </React.StrictMode>,
)
