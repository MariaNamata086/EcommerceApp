import {IoTrashOutline} from "react-icons/io5";
import { Link } from "react-router-dom";
import {useDispatch,} from 'react-redux'
import { removeFromCart,decreaseQuantity,increaseQuantity } from "../store/slices/cartSlice";
interface CartItemType {

  id: number;
  imageUrl: string;
  title: string;
  price: number; 
  discount: number;
  quantity: number;
}

interface CartItemProps{
  id:number;
  imageUrl:string;
  title:string;
  price:number;   
  discount:number;
  quantity:number; 
}

const CartProduct = ({id,imageUrl,title,price,discount,quantity}: CartItemProps) => {
  const dispatch = useDispatch();

  return (
    <div className='flex flex-col mt-5'>
       <div className='flex flex-row md:px-2 gap-10 h-3/4'>
        <div className='flex  bg-pink-200 flex h-full w-[200px] justify-center min-w-[100%]'>
          <Link to = {`/productDetails/${id}`}>
          <img src = {imageUrl} alt='Product image'  className='h-[190px] w-full max-w-[100%] object-contain '/>
          </Link>
        </div>
        <div className='flex flex-col space-y-2 md:space-y-3 md:text-2xl'>
            <div className='flex flex-col'>
              <span className='text-slate-700 text-md md:text-lg font-semibold tracking-wide'>{title}</span>
              <span className='text-sm text-slate-400 tracking-normal'>In Stock</span>
            </div>
            <div className='flex flex-col'>
              <span className='font-bold text-gray-800'>${price}</span>
              <span className='text-xs font-bold text-orange-500 bg-orange-100 px-2 py-1.5 mt-1'>{`-${discount}%`}</span>
            </div>
          </div>
         </div>
         {/* buttons div */}
         <div className='flex flex-col-reverse mt-5 md:flex-row h-1/4 items-center justify-around '>
            <div className='flex flex-row items-center px-2 gap-2 text-lg text-slate-500 hover:bg-rose-100' onClick={()=>dispatch(removeFromCart(id))}>
             <span><IoTrashOutline/> </span>  
            <button>Remove</button>
            </div>
            <div className='flex flex-row text-xl items-center gap-4'>
                <button type = 'button' onClick={()=>{ 
                  dispatch(increaseQuantity(id))
          
        }} className='text-white px-1.5 py-1 text-center rounded-lg font-xl bg-amber-400 shadow-lg'>+</button>
                <span>{quantity}</span>
                <button onClick={()=>{
                  dispatch(decreaseQuantity(id))}} className='text-white px-1.5 py-1 text-center rounded-lg text-xl bg-amber-400 shadow-lg'disabled = {quantity ===1}>-</button>
            </div><hr/>
         </div>
        </div>
   
  )
}
// style={{height:id === 29? '100px' : '100%'}}
export default CartProduct;