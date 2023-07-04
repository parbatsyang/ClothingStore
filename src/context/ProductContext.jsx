import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';

export const ProductContext= createContext();

const ProductProvider = ({children}) => {
    const [products,setProducts] =useState([]);

    const getData=async()=>{
        const response= await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
    }
    // console.log(products);
    useEffect(()=>{
        getData();
    },[]);
  return (
    <ProductContext.Provider value={{products}}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider
