import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import Login from './pages/Login';
const router = createBrowserRouter(
  createRoutesFromElements(
  <>
       <Route
      path="/Home"
      element={<Home/>}
  
    >
   
      </Route>
       <Route
      path="/Products"
      element={<Products/>}
  
    >
   
      </Route>
      
         <Route
      path="/Login"
      element={<Login/>}
  
    >
   
      </Route>
  </>
   
  )
);

const App = () => {
  return (
    <>


<RouterProvider router={router} />
    </>
  )
}

export default App
