import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
interface CartItem{
    id:number|any;
    imageUrl:string;
    title:string;
    price:number;   
    discount:number;
    quantity:number;
    desc?: string
}

interface CartDataState{
    cartData: CartItem[];
}
const initialState:CartDataState = {
    cartData:[]}

export const selectCartData = (state:RootState) => state.cart.cartData;
export const cartSlice = createSlice({
 name:'cart',
 initialState,
 reducers:{
    increaseQuantity:(state,action:PayloadAction<number>)=>{
        state.cartData.map((item : CartItem)=>{
            item.id === action.payload? item.quantity ++ :item
        })
    },
    addToCart: (state,action:PayloadAction<CartItem>)=>{
        const existingItem = state.cartData.find(
             (cartItem:CartItem) => cartItem.id === action.payload.id
             );
              if (existingItem) {
              state.cartData.map((item:CartItem)=>{
                item.id === action.payload.id ? {...item,quantity: item.quantity +1} : item
              })    
                 } else {                   
                 state.cartData.push({...action.payload,quantity:1})                  
                
                  }
                },
      removeFromCart: (state, action:PayloadAction<number>)=>{
         const filteredArray: CartItem[] = state.cartData.filter((item:CartItem)=>item.id !== action.payload
         )
         state.cartData = filteredArray
      },
      decreaseQuantity:(state,action:PayloadAction<number>)=>{        
       state.cartData.map((item:CartItem)=>{
        item.id === action.payload? item.quantity --  : item       
       })
      }
      
            
    }
 }
)
export const {increaseQuantity,removeFromCart,addToCart,decreaseQuantity} = cartSlice.actions;
export const cartReducer = cartSlice.reducer