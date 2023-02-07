import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./pages/Root";
import Book from "./pages/Book";

export default createBrowserRouter([{path:"/", element: <Root/>, children: [
    {path:"", element: <Home/>},
    {path:"book", element: <Book/>}
] }])