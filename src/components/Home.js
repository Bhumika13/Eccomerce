import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Product from './Product'
import Shoes from '../assets/shoe.png'
import Watch from '../assets/watch.jpeg'
import Purse from '../assets/purse.png'
import Jeans from '../assets/jeans.jpeg'
import Navbar from './Navbar'


function Home() {


  const usenavigate = useNavigate();
  useEffect(() => {
    let username = sessionStorage.getItem('username');
    if (username === '' || username === null) {
      usenavigate('/login');
    }
  });
  return (
    <div>
      <Navbar />
      <div class="grid grid-cols-4 gap-4 mt-[90px]">
        <div className='bg-white flex flex-row drop-shadow-md items-center justify-center'>
          <Product
            id="1"
            title="Women Shoe"
            price="$20"
            image={Shoes}
          />
        </div>
        <div className='bg-white flex flex-row drop-shadow-md items-center justify-center'>
          <Product
            id="2"
            title="Hand Bag"
            price="$10"
            image={Purse}
          />
        </div>
        <div className='bg-white flex flex-row drop-shadow-md items-center justify-center'>
          <Product
            id="3"
            title="Women Watch"
            price="$30"
            image={Watch}
          />
        </div>
        <div className='bg-white flex flex-row drop-shadow-md items-center justify-center'>
          <Product
            id="4"
            title="Sun Glasses"
            price="$20"
            image={Jeans}
          />
        </div>
      </div>
     
    </div>
  )
}

export default Home
