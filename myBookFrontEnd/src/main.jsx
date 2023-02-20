import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Book from "./pages/Book";
import Bio from "./pages/Bio";
import Random from "./pages/Random"
import Home from "./pages/Home";
import OrderForm from "./pages/Form/OrderForm";



  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {path: "/", element: <Home/>},
        { path: "book", element: <Book /> },
        { path: "bio", element: <Bio /> },
        { path: "randomOnMe", element: <Random /> },
        { path: "orderform", element: <OrderForm/>}
      ],
    },
  ]);

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );

