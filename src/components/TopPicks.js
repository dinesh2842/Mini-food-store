import React from 'react'

import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';
import { topPicks } from '../data/data';

const TopPicks = () => {
  return (
   <>
   <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Top Pick's</h1>
   <div className='hidden lg:flex max-w[1520] m-auto py-2 px-2'>
    <Splide options={{perPage: 4 , gap:"15px",drag:"free",arrows:false}}>
      {
      topPicks.map((item)=>{
        return(
          <SplideSlide key={item.id}> 
            <div className='rounded-3xl relative'>
                <div className='absolute w-full h-full bg-black/50 rounded-3xl text-white'>
                  <p className='px-2 pt-4 font-bold text-2xl'>{item.title}</p>
                  <p className='px-2'>{item.price}</p>
                  <button className='border-dotted border-white text-white mx-2 absolute bottom-4'>Add to cart</button>

                </div>
                <img className=' w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-300 h-[350px]'
                src='https://images.unsplash.com/photo-1699728088614-7d1d4277414b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNoYXdhcm1hfGVufDB8fDB8fHww'>
                  
                </img>
                
            </div>
            </SplideSlide>
          )
      })
    }
    </Splide>
   </div>
   </>
  )
}

export default TopPicks
