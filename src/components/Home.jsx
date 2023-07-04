import React,{useContext} from 'react'
import { ProductContext } from '../context/ProductContext'
import Product from './Product';
import Hero from './Hero';


const Home = () => {

    const {products} =useContext(ProductContext);
    


    const filteredProducts = products.filter((item)=>{
        return(
            item.category==="men's clothing" || item.category === "women's clothing"
        )
    });
   
  return (
    <div>
      <Hero/>
      <section className='py-16'>
            <div className='container mx-auto px-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-7 max-w-sm mx-auto md:max-w-none md:mx-0' >
                    {filteredProducts.map((product,i)=>{
                        return <Product product={product} key={i}/>
                    })}
                </div>
            </div>
      </section>
    </div>
  )
}

export default Home
