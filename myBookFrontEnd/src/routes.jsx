import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./pages/Root";
import Book from "./pages/Book";
import Bio from "./pages/Bio";
import Random from "./pages/Random"

export default createBrowserRouter([{path:"/", element: <Root/>, children: [
    {path:"", element: <Home/>},
    {path:"book", element: <Book/>},
    {path:"bio", element: <Bio/>},
    {path:"randomOnMe", element:<Random/>}
] }])