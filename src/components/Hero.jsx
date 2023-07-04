import React from 'react'
import shopping from "../assets/shoppingwomen.jpg"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='bg-pink-200 h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
      <div className='container ms-5 mx-auto flex justify-center h-full xl:ms-20'>
      {/* text */}
      <div className='flex flex-col justify-center'>
        <div className='font-semibold flex items-center uppercase'>
          <div className='w-10 h-[2px] bg-red-500 mr-3'></div>New Trend
          </div>
          <h1 className='text-[70px] leading-[1.1] font-light mb-4'>AUTUMN SALE STYLISH<br/>
            <span className='font-semibold'>WOMENS</span>
          </h1>
          <Link to={'/'} className=' self-start uppercase font-semibold border-b-2 border-primary'>
            Discover More
          </Link>
        </div>
        {/* image */}
        <div className='hidden lg:block overflow-hidden'>
        <img src={shopping} alt=''/>
        </div>
      </div>
    </section>
  )
}

export default Hero
