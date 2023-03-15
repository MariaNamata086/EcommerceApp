import React from 'react'
import CartProduct from './components/CartProduct';
import {Link} from 'react-router-dom'
import {useState,useEffect} from 'react'
import {useSelector} from 'react-redux'
import {selectCartData } from './store/slices/cartSlice';
import { FaCartPlus } from "react-icons/fa";

interface CartItem{
  id:number;
  imageUrl:string;
  title:string;
  price:number;   
  discount:number;
  quantity:number;
}

const ShoppingCart = () => {
  const [total, setTotal] = useState<string>()
 const cartData = useSelector(selectCartData)

  useEffect(()=>{
    let sum = 0;
    const itemTotal = cartData.map((item)=>item.price * item.quantity)
   sum = itemTotal.reduce((accumulator,currentValue)=>accumulator + currentValue,0)
    const formattedSum = sum.toLocaleString();
    setTotal(formattedSum); 
  },[cartData])

  return (
    <>    
    {cartData.length === 0 ?<div className='flex flex-col items-center justify-center gap-y-3 h-[300px]'>
      <span className='flex text-6xl text-white bg-lime-500 px-4 rounded-full py-4'><FaCartPlus/></span>
      <h1 className='text-center 
    text-xl text-neutral-600 mb-2
     shadow-sm font-bold'>Your cart is empty!</h1>
     <h3 className='font-semibold text-slate-500 pb-4 '>Browse our categories and discover our best deals!</h3>
     <button className='px-3 py-1.5 text-white font-semibold bg- border-none rounded-full bg-yellow-400  hover:bg-amber-500'><Link to = '/'>Shop Now</Link></button>
    </div> :(<>
    
    <div className='flex flex-col justify-center md:w-[85%] mx-auto max-w-screen-xl mx-auto gap-6 md:flex-row'>
      <div className='md:w-2/3 bg-white rounded-lg shadow-xl'>
      {cartData && cartData.map((product)=>{
      return(
        <div className='grid grid-cols-1 auto-cols-auto gap-3 md:w-2/3'>
          <CartProduct
          key={product.id}
          id={product.id}
          imageUrl = {product.imageUrl}
          title = {product.title}
          price = {product.price}
          discount = {product.discount}
          quantity = {product.quantity}         
          
          />
        </div>
      )
     })}
      </div>     
        <div className='md:w-1/3 bg-white flex flex-col gap-6 rounded-lg shadow-xl'>
        <div className='flex flex-col space-y-2 w-4/5 md:w-full px-3 '>
            <h3 className='py-2 text-xl font-bold text-sky-900 shadow-sm'>Cart Summary</h3><hr/>
            <span className=' flex flex-row items-center justify-between font-semibold text-md text-sky-600'>
              <span> subtotal</span>
              <span>{`\$ ${total}`}</span>
              </span><hr/>
            <button className='bg-amber-400 p-1 mt-3 text-white font-semibold border-none rounded-lg shadow-lg'>{`Checkout (${total})`}</button>
        </div>
        <div className='flex justify-center h-full rounded-lg bg-pink-200 text-white text-3xl text-center'>Delivery details</div>
        </div>
    </div>
    
    </>)}
    
    </>
  )
}

export default ShoppingCart