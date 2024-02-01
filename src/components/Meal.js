// 
import React, { useState } from 'react';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { mealData } from '../data/data';

const Meal = () => {
  const [foods, setFoods] = useState(mealData);

  const filterCat = (category) => {
    setFoods(
      mealData.filter((item) => {
        return item.category === category;
      })
    );
  };

  return (
    <div className='max-w-[1520px] m-auto px-4 py-12'>
      <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Our Meal</h1>
      <div className='flex flex-col lg:flex-row justify-center'>
        <div className='flex justify-center md:justify-center'>
          <button
            onClick={() => setFoods(mealData)}
            className='m-1 border-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700  bg-orange-700'
          >
            All
          </button>
          <button
            onClick={() => filterCat('pizza')}
            className='m-1 border-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700  bg-orange-700'
          >
            Pizza
          </button>
          <button
            onClick={() => filterCat('chicken')}
            className='m-1 border-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700  bg-orange-700'
          >
            Chicken
          </button>
          <button
            onClick={() => filterCat('salad')}
            className='m-1 border-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700 bg-orange-700'
          >
            Salad
          </button>
        </div>
      </div>
      <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-4'>
        {foods.map((item) => (
          <div key={item.id} className='border-none hover:scale-105 duration-300'>
            <img
              src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D'
              className='w-full h-[200px] object-cover rounded-lg mb-4' // Add margin-bottom to create space between images
            />
            <div className='flex justify-between py-2 px-2'>
              <p className='font-bold'>{item.name}</p>
              <p className='bg-orange-700 h-18 w-18 rounded-full -mt-10 text-white py-4 px-2  border-8 font-bold'>{item.price}</p>
            </div>
            <div className='pl-2 py-4 -mt-7 '>
              <p className='flex items-center text-indigo-600'>
                View more< FaRegArrowAltCircleRight className='w-5 ml-2' />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meal;
