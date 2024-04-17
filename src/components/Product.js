import React from 'react'
import { useDispatch } from 'react-redux'
import { addtoCart } from '../redux/cartSlice'

function Product({id,title, price,image}) {
  const dispatch = useDispatch()
  return (
    <div className='item-center flex flex-col  py-5'>
      <div className='self-center flex justify-center'><img src={image} alt ="" className='w-[150px] max-h-52'/></div>
      <h3 className='item-center flex justify-center text-emerald-600 font-extrabold my-2'>{title}</h3>
      <h4 className='item-center flex justify-center text-gray-600 font-extrabold mb-5'>{price}</h4>
      <button className='bg-orange-600 text-white py-2 rounded-md ease-in duration-300 hover:bg-orange-900' onClick={() => dispatch(addtoCart({id, title,price, image}))}>Add to Cart</button>
    </div>
  );
}

export default Product;
