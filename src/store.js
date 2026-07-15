import { configureStore } from '@reduxjs/toolkit'
import  BreadCrumbSlice  from './slices/BreadCrumbSlice'
export default configureStore({
  reducer: {
    breadcrumb: BreadCrumbSlice,
  },
});