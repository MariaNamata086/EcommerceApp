import React, { useState,useEffect } from 'react';
import ProductItem from './Product-item';
import {ImSpinner2} from "react-icons/im";
import { BsCart3 } from "react-icons/bs";
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from "react-icons/ai";
import { RootState } from '../store/store';
import { fetchProductList, selectProductData} from '../store/slices/productSlice';
import { AppDispatch } from '../store/store';
import { FaAngleRight } from "react-icons/fa";
 interface CartItem {
  id: number;
  imageUrl: string;
  title: string;
  price: number;
  desc: string;
  discount: number;
  quantity: number;
}
interface Product{
    
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;   
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string
}

const Products = () => {
   
   const productData:Product[] = useSelector(selectProductData);  
    const [inputValue,setInputValue] = useState<string>('');    
    const cartData = useSelector((state:RootState)=>state.cart.cartData);    
    const pStatus = useSelector((state: RootState) => state.products.status);
    const error = useSelector((state:RootState) => state.products.error)
    const dispatch:AppDispatch = useDispatch();
    
    const cartLength = cartData.length;
    const padding = cartLength>0?'1':'2';
    const display = cartLength>0?'block':'none';

useEffect(()=>{
  if(pStatus === 'idle'){
    dispatch(fetchProductList())
  } 
},[pStatus])
  
  return ( 
    <>
    <div className='bg-white'>
    <div className='flex flex-row items-center mt-5 sticky gap-x-7 top-0 py-4 px-3 z-10 bg-slate-100'>
      <div className='hidden flex flex-row w-2/4 gap-2 text-sky-900  md:flex'>
        <span className='flex flex-row hover:text-amber-500 hover:underline items-center '>
          <span className='pb-1  '>Categories</span>
          <a href='#'><FaAngleRight/></a>
        </span>
        <span className='flex flex-row hover:text-amber-500 hover:underline items-center'>
          <span className='pb-1'>Smart Phones</span>
          <span><FaAngleRight/></span>
        </span>
        <span className='flex flex-row hover:underline hover:text-amber-500 items-center'>
          <span className='pb-1'>Computers</span>
          <a href='#'><FaAngleRight/></a>
        </span>
        <span className='flex flex-row hover:underline hover:text-amber-500 items-center'>
          <span className='pb-1'>Consumables</span>
          <a href='#'><FaAngleRight/></a>
        </span>
        <span className='flex flex-row hover:underline hover:text-amber-500 items-center'>
          <span className='pb-1'>Fashion</span>
          <a href='#'><FaAngleRight/></a>
        </span>
        <span className='flex flex-row items-center hover:underline hover:text-amber-500'>
          <span className='pb-1'>Skin Care</span>
          <a href='#'><FaAngleRight/></a>
        </span>
      </div>
      <form className='flex flex-1 w-4/5 items-center'>
        <span className='-mr-8 z-10 text-xl text-slate-600 md:text-2xl'><AiOutlineSearch/></span>
        <input type='text' placeholder='Search Products' value = {inputValue} onChange = {(event)=>setInputValue(event.currentTarget.value)} className='w-3/4 p-2 border-none rounded-full pl-10 transparent focus:outline-none'/>        
      </form>
      <div className='flex relative w-1/8'>
        <Link to = '/shoppingCart'><BsCart3 className='flex text-slate-700 text-3xl'/></Link>        
        <span style = {{padding:padding,display:display}} className='-top-1 -right-1 bg-yellow-400 text-white text-xs p-1 rounded-full absolute'>{cartData.length > 0 && cartData.length}</span>
        </div>
    </div>   
        
        {pStatus === 'loading' ? (<div className=' flex flex-col h-full w-full items-center justify-center gap-3 mt-10 font-bold text-red-500'>
            <div className='text-5xl animate-spin'><ImSpinner2/></div>
            <span>Loading products...</span>            
        </div>):( 
          pStatus === 'completed'?(<div className='grid grid-cols-2  auto-cols-auto w-90 gap-y-2 md:grid-cols-5 max-w-[1200px] mx-auto items-center grid-rows shadow-xl gap-y-3'>           
           { productData.filter((product)=>{
            if(!inputValue){return product}else if(product.title.toLowerCase().includes(inputValue.toLowerCase())){
              return product}
           }).map((product: any)=>{
                return(              
                <ProductItem
                key = {product.id}
                id={product.id}
                imageUrl = {product.thumbnail}
                title = {product.title}
                price = {product.price} 
                desc = {product.description}
                discount = {product.discountPercentage}               
                    
                />
               
                )
              })}
           </div>   
           ):(<div>{error}</div>)          
        )        

        }
    </div>   
    </> 
  )
    
   
}

export default Products