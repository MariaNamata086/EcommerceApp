
import { useParams} from 'react-router-dom';
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { BsFillChatLeftTextFill,BsChatLeftDots } from "react-icons/bs";
import { useSelector, useDispatch } from 'react-redux';
import { selectProductData } from '../store/slices/productSlice';
import { addToCart } from '../store/slices/cartSlice';


const ProductDetails = ()=>{
   const productData = useSelector(selectProductData);   
   const dispatch = useDispatch()
    const  {id} = useParams<{id:string}>();    
    
    const productId = id? parseInt(id):undefined          
    const selectedItem = productData.find((product)=>product.id === productId)          
    if(!selectedItem) return <div className=' flex text-2xl text-cyan-700 items-center justify-center bg-lime-200 h-[100vh] p-5 font-bold'>
        <span>No Products found!</span></div>   
    
    const {brand,category,description,rating,stock,price,thumbnail,title,discountPercentage,images}= selectedItem; 
    const formattedPrice = price.toLocaleString();
   
    return(
        <>  
    <div className="flex flex-row bg-stone-300 w-[90%]  mt-5 gap-10 h-[100vh] mx-auto">
        {/* product details */}
      <div className="flex flex-col w-2/3 h-[600px] bg- rounded-lg gap-5 bg-white">
        <div className="flex flex-row gap-1 justify-start h-3/5" >
            <div className="flex flex-col w-3/5">
                <img src={thumbnail} alt='Product Image' className="flex w-full mt-4 h-3/4 object-cover"/>
                <div className=' flex flex-row h-[50px] mt-5 gap-2 mt-1 '>
                {images.map((item,index) => <a href={item} key={index} target='_blank'>
                    <img className=' flex h-full w-[90px] object-scale-down hover:scale-150' src={item} alt = {`Product Image ${index}`}/>
                </a>)}
                </div>
            </div>
            <div className="flex flex-col mt-4 items-center gap-1 justify-start w-2/5">
            <span className='text-red-700 font-bold'>{title}</span>
            <span className='flex flex-row items-center'>
                <span className='text-black font-semibold'>Brand:</span>
                <span className='text-blue-500'>{brand}</span>
                </span>
            <span>{`Rating: ${rating}`}</span> <hr className='bg-gray-700'/>           
            <span className='text-slate-700 font-bold text-xl md:2xl'>{`\$ ${formattedPrice}`}</span>
            <span className='text-xs font-bold text-orange-500 bg-orange-100 px-2 py-1.5 mt-1'>{`-${discountPercentage}%`}</span>
            <span className='text-slate-300 text-sm mt-1 mb-7'>{`${stock} items left`}</span>
            <div className='flex flex-row  gap-1 md:gap-3 shadow-lg items-center text-white text-md md:text-xl bg-amber-500 px-3 py-2 hover:bg-yellow-400 rounded-lg md:px-5 md:py-2'>
                <span><MdOutlineAddShoppingCart/></span>
                <span onClick={()=>{
          dispatch(addToCart({
            id :productId,
            imageUrl:thumbnail,
            title:title,
            price:price,                     
            discount:discountPercentage,
             quantity:1  }))}}>Add To Cart</span>
            </div>            
            <hr/>
            </div>
        </div>
        <div className="flex flex-col shadow-sm h-1/10 ml-1 ">
            <h3 className='text-lg md:text-xl tracking-wider font-semibold text-slate-700'>Product Description</h3><hr/>            
            <p className='text-slate-400 font-semibold text-sm tracking-widest mt-3'>{description}</p>
        </div>
        <div className="flex flex-col ml-1 h-3/10">
            <h3 className='text-semibold text-lg text-fuchsia-400 tracking-wider'>SPECIFICATIONS</h3><hr/>
            <span className='flex flex-row items-center gap-2'>
                <span className='font-bold text-slate-700 text-lg'>Category:</span>
                <span className='text-slate-500 font-semibold'>{category}</span>
                </span>
            <span className='flex flex-row items-center gap-2'>
            <span className='font-bold text-slate-700 text-lg'>Brand:</span>
                <span className='text-slate-500 font-semibold'>{brand}</span>
            </span>
        </div>
      </div>
      {/* delivery and returns */}
      <div className="flex flex-col mt-3 w-1/4 h-full gap-10">
        <div className='flex flex-col items-center mt-5 gap-2 bg-white p-2 rounded-xl shadow-lg justify-center'>
            <h2 className='font-bold text-xl '>Questions about this product?</h2>
            <a href='#'title='Chat With Us' className='text-2xl font-bold hover:text-blue-500'><BsFillChatLeftTextFill/></a>
        </div>
        <div className='flex flex-row gap-3 itmes-center ml-3 p-4 rounded-lg shadow-lg hover:bg-white/80'>
            <a href='#' className='text-2xl font-bold'><BsChatLeftDots/></a>
            <span className='text-md hover:text-lg hover:font-bold'>Customer FeedBack</span>
        </div>
        <div className='bg-lime-300 rounded-lg text-white h-[350px] shadow-lg text-center text-lg p-4'>Payment Options</div>
      </div>
    </div>
        </>
       
    )        
    
 }
export default ProductDetails