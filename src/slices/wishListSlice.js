import { createSlice } from '@reduxjs/toolkit'

export const  wishListSlice= createSlice({
  name: 'wishlist',
  initialState: {
    value: [],

  },
  reducers: {
    addwishlist: (state,action) => {
    
   
     state.value.push(action.payload)
        
    
    },
   
  },
})


export const { addwishlist,  } = wishListSlice.actions

export default wishListSlice.reducer