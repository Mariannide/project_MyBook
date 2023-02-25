import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Book from "./pages/Book";
import Home from "./pages/Home";
import OrderForm from "./pages/Form/OrderForm";
import Bio from "./pages/Bio";
import Inspiration from "./pages/About/Inspiration";
import Interview from "./pages/About/Interview";



  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {path: "/", element: <Home/>},
        { path: "book", element: <Book /> },
        { path: "bio", element: <Bio /> },
        { path: "orderform", element: <OrderForm/>},
        {path:"inspiration", element:<Inspiration/>},
        {path:"interview", element:<Interview/>}
      ],
    },
  ]);

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );

