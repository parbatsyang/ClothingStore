import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import {IoMdAdd, IoMdClose, IoMdRemove} from "react-icons/io";
import { CartContext } from '../context/CartContext';

const CarTItem = ({item}) => {
 const {id,title,image,price,amount} =item;
 const {removeFromCart,increaseCart,decreaseCart}= useContext(CartContext);
  return (
    <div className='flex gap-x-4 py-2 lg:pax-6 border-b border-gray-200 w-full font-light text-gray-500'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
          {/* image */}
          <Link to={`/products/${id}`}>
          <img className='max-w-[80px]' src={image} alt=''/>
          </Link>
      
        <div className='w-full flex flex-col'>
        {/* title */}

        <div className='flex justify-between mb-2'>
        <Link to={`/products/${id}`} className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>
          {title} 
          </Link>
          <div className='text-xl cursor-pointer' onClick={()=>removeFromCart(id)}>
            <IoMdClose className='text-gray-500 hover:text-red-500 transition' />

          </div>
          </div>
         
          <div className='flex gap-x-2 h-[36px] text-sm'>
          {/* qty */}
          <div className='flex flex-1 max-w-[100px]  items-center h-full border text-primary font-medium'>
          <div onClick={()=>decreaseCart(id)} className='flex-1 h-full flex justify-center items-center cursor-pointer'><IoMdRemove/></div>
          {/* item price */}
          <div>{amount}</div>
          {/* final price */}
         
          <div onClick={()=>increaseCart(id)} className='flex-1 h-full flex justify-center items-center cursor-pointer'><IoMdAdd/></div>
          </div>
          </div>
          <div className='flex-1 flex items-center justify-around'>${price}</div>
          <div className='flex-1 flex justify-end items-center font-medium'>{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
        </div>
        </div>
     
    </div>
  )
}

export default CarTItem