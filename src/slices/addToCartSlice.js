import { createSlice } from '@reduxjs/toolkit'

export const addToCartSlice= createSlice({
  name: 'cart',
  initialState: {
cartvalue:[]
  },
  reducers: {
    addtocart: (state,action) => {
   

    let data=state.cartvalue.find(item=>item.title===action.payload.title)
       
        if(data){
data.quantity=data.quantity+1
        }
    else {
   state.cartvalue.push({...action.payload,quantity:1})
    }
    },
   IncrementaddtoCart:(state,action)=> {
  console.log(action.payload);
  state.cartvalue.map(item=>{
    if(item.title==action.payload.title){
      item.quantity+=1
    }
  })
  
   },
   DecrementaddtoCart:(state,action)=> {
  console.log(action.payload);
  state.cartvalue.map(item=>{
    if(item.title==action.payload.title){
     
      if(item.quantity>1){
          item.quantity-=1
      }
    }
  })
  
   },
     Deleteaddtocart:(state,action)=> {
  console.log(action.payload);
  state.cartvalue.map((item,index)=>{
    if(item.title==action.payload.title){
    state.cartvalue.splice(index,1)
     
     
     
    }
  })
  
   },
  },
 
  },
)


export const { addtocart,IncrementaddtoCart,DecrementaddtoCart,Deleteaddtocart  } = addToCartSlice.actions

export default addToCartSlice.reducer