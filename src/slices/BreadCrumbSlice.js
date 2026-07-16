import { createSlice } from '@reduxjs/toolkit'

export const  BreadCrumbSlice= createSlice({
  name: 'breads',
  initialState: {
    currentvalue: "",
    prevoiusvalue: "",
  },
  reducers: {
    addbreadcrumb: (state,action) => {
        // console.log(state.value);
        // console.log(state.currentvalue);
        // console.log(state.prevoiusvalue);
        // console.log(action.payload);
         state.prevoiusvalue=state.currentvalue
        state.currentvalue=action.payload
        
       
        console.log(state.prevoiusvalue,"prevois");
        console.log(state.currentvalue,"current");
        
    
    },
   
  },
})


export const { addbreadcrumb,  } = BreadCrumbSlice.actions

export default BreadCrumbSlice.reducer