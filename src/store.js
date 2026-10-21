import { configureStore } from '@reduxjs/toolkit'
import  BreadCrumbSlice  from './slices/BreadCrumbSlice'
import  addToCartSlice  from './slices/addToCartSlice';
export default configureStore({
  reducer: {
    breadcrumb: BreadCrumbSlice,
    cartitem :addToCartSlice,
  },
});