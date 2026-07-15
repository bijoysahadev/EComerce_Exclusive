import { createSlice } from '@reduxjs/toolkit'

export const  BreadCrumbSlice= createSlice({
  name: 'breads',
  initialState: {
    value: 0,
  },
  reducers: {
    addbreadcrumb: (state,action) => {
        console.log(state.value);
        
    
    },
   
  },
})


export const { addbreadcrumb,  } = BreadCrumbSlice.actions

export default BreadCrumbSlice.reducer