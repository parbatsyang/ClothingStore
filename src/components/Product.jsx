import React, { useContext } from "react";
import {BsEyeFill, BsPlus} from "react-icons/bs"
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";


const Product = ({ product }) => {
  const {id,image,category,title,price} = product;
  const {addToCart} =  useContext(CartContext);
  return (
    <div>
      <div className="border border-[#facb7a] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center ">
                  {/* image */}
            <div className="w-[200px] mx-auto flex justify-center items-center">
            <img src={image} className="max-h-[160px] group-hover:scale-110 transition duration-300" alt="Photo" />
            </div>
                  {/* button */}
            <div className="absolute top-6 right-10 group-hover:right-5 bg-red-500/40 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100">
              <button onClick={()=>addToCart(product,id)}>
               <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
                <BsPlus className="text-3xl"/>
               </div>
              </button>
              <Link to ={`/product/${id}`}  className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl">
                <BsEyeFill />
                </Link>

            </div>
          </div>
      </div>
      {/* categories */}
      <div>
        <div>{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1 ">{title}</h2>
        </Link>
        <div>${price}</div>
      </div>
    </div>
  );
};

export default Product;
