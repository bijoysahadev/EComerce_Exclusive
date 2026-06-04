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
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={< RootLayout/>}>
       <Route path="/Home" element={<Home />}></Route>
       <Route path="/Contact" element={<Contact />}></Route>
       <Route path="/About" element={<About />}></Route>
       <Route path="/SignUp" element={<SignUp />}></Route>
       <Route path="/*" element={<Error/>}></Route>

     
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
