import { configureStore } from '@reduxjs/toolkit'
import  BreadCrumbSlice  from './slices/BreadCrumbSlice'
import  addToCartSlice  from './slices/addToCartSlice';
import  wishListSlice from './slices/wishListSlice';
export default configureStore({
  reducer: {
    breadcrumb: BreadCrumbSlice,
    cartitem :addToCartSlice,
    wishlistslice :wishListSlice,
  },
});