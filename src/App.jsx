import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import RootLayout from "./Components/RootLayout";
import NewsPart from "./layouts/NewsPart";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Error from "./pages/Error";
import Cart from "./pages/Cart";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={< RootLayout/>}>
       <Route path="/" element={<Home />}></Route>
       <Route path="/Contact" element={<Contact />}></Route>
       <Route path="/About" element={<About />}></Route>
       <Route path="/SignUp" element={<SignUp />}></Route>
       <Route path="/Login" element={<Login />}></Route>
       <Route path="/Cart" element={<Cart />}></Route>
       <Route path="/*" element={<Error/>}></Route>
       <Route path="/Products" element={<Products/>}></Route>

     
      </Route>
     
    </>,
  ),
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
