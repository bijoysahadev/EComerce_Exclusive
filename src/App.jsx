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
import RootLayout from "./Components/RootLayout";
import NewsPart from "./layouts/NewsPart";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={< RootLayout/>}>
       <Route path="/Home" element={<Home />}></Route>
       <Route path="/Login" element={<Login />}></Route>
       <Route path="/Products" element={<Products />}></Route>
       <Route path="/SignUp" element={<SignUp />}></Route>

     
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
