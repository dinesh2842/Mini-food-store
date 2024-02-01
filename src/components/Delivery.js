import React from 'react'

const Delivery = () => {
  return (
    <div className='w-full bg-whitw py-16 px-4'>
      <h2 className='text-orange-500 font-bold text-2xl text-center'>Quick Delievery</h2><br /><br />
      <div className='w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[550px] mx-auto my-4 rounded-2xl h-[400px]' 
        src='https://images.pexels.com/photos/6169129/pexels-photo-6169129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>
          
        </img>
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold y-6'>Get the App</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Limitless Convenience on-demand </h1>
          <p>Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense.

It is a sequence of Latin words that, as they are positioned, do not form sentences with a complete sense, but give life to a test text useful to fill spaces that will subsequently be occupied from ad hoc texts composed by communication professionals.

It is certainly the most famous placeholder text even if there are different versions distinguishable from the order in which the Latin words are repeated.

Lorem ipsum contains the typefaces more in use, an aspect that allows you to have an overview of the rendering of the text in terms of font choice and font size .

When referring to Lorem ipsum, different expressions are used, namely fill text , fictitious text , blind text or placeholder text : in short, its meaning can also be zero, but its usefulness is so clear as to go through the centuries and resist the ironic and modern versions that came with the arrival of the web.

The most used versio</p>
<button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Delivery
