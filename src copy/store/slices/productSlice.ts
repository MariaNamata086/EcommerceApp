import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import {PayloadAction} from '@reduxjs/toolkit'
import  {RootState}  from '../store'

 export interface Product{
    
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
    images:string[]
}

interface ProductState {
  productData : Product[];
  status: 'idle' | 'loading' | 'completed' | 'failed';
  error: 'string' | null
}

const initialState: ProductState = {
    productData: [],
    status:'idle',
    error: null  
}

export const fetchProductList  = createAsyncThunk('products/fetchProducts',
 async()=>{    
    const response = await fetch('https://dummyjson.com/products');    
     const {products}= await response.json();     
     return products;
})


//defining a selector function that can be passed as a paramenter to the useSelector hook
export const selectProductData = (state:RootState) => state.products.productData

const productsSlice = createSlice({
    name:'products',
    initialState,
    reducers:{},
    extraReducers:builder =>{
        builder.addCase(fetchProductList.pending,(state:ProductState)=>{
         state.status = 'loading' 
        })
        .addCase(fetchProductList.fulfilled,(state:ProductState,action:PayloadAction<Product[]>)=>{
            state.status = 'completed'           
            state.productData = action.payload;
        })
        .addCase(fetchProductList.rejected,(state:ProductState,action:PayloadAction<any>)=>{
          state.status = 'failed'
          state.error = action.payload 
        })
      }      

    }
)
 export const productReducer = productsSlice.reducer;
