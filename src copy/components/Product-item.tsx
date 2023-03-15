import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { addToCart } from '../store/slices/cartSlice'

interface ProductItemProps {    
imageUrl:string,
id:number,
title: string,
price: number,
desc: string,
discount: number,
}

const ProductItem = ({imageUrl,id,title,price,desc,discount}: ProductItemProps) => {
   const titleLength = title.length;   
   const divHeight = titleLength>26?'50%':'66.6667%';
   const dispatch = useDispatch();
  return (
    <div  className = ' h-[250px] mt-10 hover:shadow-xl hover:scale-105 bg-white px-2'>
        <div className=' flex relative flex-col gap-0 items-center h-4/5 justify-start'>         
         <div style={{height:divHeight}} className='flex  h-4/9 md:h-2/3 w-full relative'>
         <Link to={`/productDetails/${id}`}>            
         <img src={imageUrl} alt='Product-image' className='w-full h-full object-scale-down px-2.5 pt-2'/>
          </Link>
         </div>        
        <span className='text-xs font-bold text-orange-500 bg-orange-100 px-2 py-1.5 absolute top-2 right-2'>{`-${discount}%`}</span>
        <div className='flex flex-col text-md  md:space-y-0.5 md:mt-2 items-center justify-start'>
            <h3 className='font-bold text-red-600'>{title}</h3>
            <span className='text-slate-600 hover:text-slate-700 text-sm font-bold'>${price}</span>
            <span title={desc} className=' hidden text-sm text-slate-600 font-light md:block'>Description</span>
          
        </div>
        </div>
        <button className='px-4 py-1 sm:py-1.5 mt-3 border-none rounded-full bg-yellow-400 text-white hover:bg-amber-500'onClick={()=>{ dispatch(addToCart({ id,imageUrl, title,  price,  desc, quantity:0, discount,}))          
        }}>Add to Cart</button>
    </div>
  )
}

export default ProductItem