import './main.css'
import { useState } from 'react';
import {Routes,Route,Link, useLocation} from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import Products from './components/Products';
import ShoppingCart from './ShoppingCart';
import { useSelector } from 'react-redux';
import { selectProductData } from './store/slices/productSlice';
import { AiOutlineInstagram,AiOutlineYoutube,AiOutlineTwitter,AiOutlineShop,AiOutlineUser } from "react-icons/ai";
import { FaPinterestP,FaFacebookF } from "react-icons/fa";
function App() {
  
  const productData = useSelector(selectProductData); 
  const [isOpen, setIsOpen] = useState(false)  

  const handleClick = ()=>{
   setIsOpen(!isOpen);   
  }
  return (
    <>
    <nav className="flex mt-2 sticky top-0 items-center justify-around z-10 text-xl text-white bg-black p-3 md:hidden">
      {/* ham menu */}
      <div>
      <button className={`block hamburger -mt-3 focus:outline-none md:hidden w-[24px] h-[20px] relative ${isOpen? 'open': ''}`} onClick={handleClick}>
              <span className=' top absolute h-[2px] w-[24px] bg-white transform'></span>
              <span className=' middle absolute h-[2px] w-[24px] bg-white translate-y-[7px]'></span>
              <span className=' bottom absolute h-[2px] w-[24px] bg-white translate-y-[14px]'></span>
            </button>            
      </div>
      <div className='flex flex-row gap-7 justify-around'>
       <span><Link to='/'>Home</Link></span>
       <span><Link to='/shoppingCart'>Shopping Cart</Link></span>
      </div>            
      </nav>
      <div  className={`flex flex-col text-md text-slate-900 bg-neutral-200  text-semibold asolute gap-2 w-[50%] ml-3  mt-2 ${isOpen?'block': 'hidden'}`}>
              <a href='#' className='hover:underline pt-2 ml-5 hover:text-amber-500'>Create Account</a>
              <a href='#' className=' ml-5 hover:underline hover:text-amber-500'>Login</a>
              <a href='#' className=' ml-5 hover:underline hover:text-amber-500'>Help Center</a>
              <a href='#' className=' ml-5 hover:underline hover:text-amber-500'>Call & Track Order</a>
              <a href='#' className=' ml-5 hover:underline hover:text-amber-500'>Order Cancellation</a>
              <a href='#' className='ml-5 hover:underline hover:text-amber-500 mb-2'>Returns &Refunds</a>
            </div>
    <nav className=' hidden flex-row items-center h-[10vh] justify-around text-xl md:3xl navbar text-slate-900 font-semibold pt-3 pb-2 mt-2 shadow-lg md:flex'>
      <div className='flex flex-row gap-10'>
        <div className='flex flex-row items-center'>
          <span className='flex -mr-1 text-5xl text-cyan-500 '><AiOutlineShop/></span>
          <span className='text-2xl text-[#a855f7]'>E</span>
          <span className='text-xl'>-</span>
          <span className='text-xl'>Mart</span>
        </div>
        </div>
        <h1>Welcome!</h1>
      <div className='flex flex-row  gap-6 '>
      <span className='hover:underline hover:text-slate-400'><Link to='/'>Home</Link></span>
      <div className='relative inline-block flex-col items-center dropdown '>
        <span className='flex flex-row gap-1 items-center hover:text-slate-400'>
          <span><AiOutlineUser/></span>
          <span>My Account</span>
        </span>
        <span className='hidden z-20 shadow-md bg-neutral-200 absolute flex-col text-sm text-stone-400 dropdown-content '>
          <a href='#' className='block hover:text-amber-300 px-3 py-2 hover:underline'>Login</a>
          <a href='#' className='block hover:text-amber-300 px-3 py-2 hover:underline'>Create Account</a>
          <a href='#' className='block hover:text-amber-300 px-3 py-2 hover:underline'>My Orders</a>
          <a href='#' className='block hover:text-amber-300 px-3 py-2 hover:underline'>Saved items</a>
        </span>
      </div>
     <span className='hover:underline hover:text-slate-400'><Link to='/shoppingCart'>ShoppingCart</Link></span>
      </div>     
    </nav>
     <Routes>
      <Route path='/' element={<Products/>}/>
      <Route path='/shoppingCart' element={<ShoppingCart/>}/>
      <Route path='/productDetails/:id' element={<ProductDetails/>}/>
    </Routes>
    { productData.length > 1 && (<footer className=' left-0 bottom-0 w-full  bg-teal-700 text-white h-auto'>
      <div className='flex flex-col gap-5'>
      <div className='flex flex-row items-center  justify-around'>        
          <div className='flex flex-col mt-8 gap-1'>
            <span className='text-xl font-semibold  md:text-2xl'>LET US HELP YOU</span>
            <a href='#' className='hover:underline'>Help Center</a>
            <a href='#' className='hover:underline'>Contact us</a>
            <a href='#' className='hover:underline'>How to buy on E-shop</a>
            <a href='#' className='hover:underline'>Payment Methods</a>
            <a href='#' className='hover:underline'>Delivery</a>
            <a href='#' className='hover:underline'>Report a Product</a>
            <a href='#' className='hover:underline'>Return Process</a>
            </div>
          <div className='flex flex-col -mt-16'>
            <span className='text-xl font-semibold  md:text-2xl'>MAKE MONEY WITH US</span>
            <a href='#' className='hover:underline'>Sell on E-shop</a>
            <a href='#' className='hover:underline'>Become a Sales Consultant</a>
            <a href='#' className='hover:underline'>Become a delivery Agent</a>
            <a href='#' className='hover:underline'>Become a logistics service Partner</a>
          </div>
         </div>      
      
      <div className='flex flex-col items-center justify-center gap-2'>
        <span className='text-xl font-semibold  md:text-2xl'>Follow Us</span>
        <div className='flex flex-row gap-3 text-2xl md:text-3xl'>
        <span title='Facebook'><FaFacebookF/></span>
        <span title='You-Tube'><AiOutlineYoutube/></span>
        <span title='Twitter'><AiOutlineTwitter/></span>
        <span title='Instagram'><AiOutlineInstagram/></span>
        <span title='Pinterest'><FaPinterestP/></span>
        </div>
      </div>
      <div className='grid grid-cols-3 ml-16 md:ml-[220px] gap-3'>
        <a href='#' className='hover:underline'>Apple</a>
        <a href='#' className='hover:underline'>Asus</a>
        <a href='#' className='hover:underline'>SamSung</a>
        <a href='#' className='hover:underline'>Huawei</a>
        <a href='#' className='hover:underline'>Infinix</a>
        <a href='#' className='hover:underline'>Oppo</a>
        <a href='#' className='hover:underline'>Hp</a>
        <a href='#' className='hover:underline'>Nokia</a>
        <a href='#' className='hover:underline'>Hisense</a>
        <a href='#' className='hover:underline'>Redmi</a>
      </div><hr/>
      <div className='flex items-center justify-center text-sm font-semibold'>Copyright &copy;2022, All Rights Reserved</div>
      </div>      
      </footer>)}
    
    </>
   
   
  )
}

export default App
