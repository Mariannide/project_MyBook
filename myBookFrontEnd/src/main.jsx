import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Book from "./pages/Book";
import Bio from "./pages/Bio";
import Random from "./pages/Random"



  {/*const [data, setData] = useState([]);

  useEffect(() => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => setData(json));
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]); */}

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "book", element: <Book /> },
        { path: "bio", element: <Bio /> },
        { path: "randomOnMe", element: <Random /> },
      ],
    },
  ]);

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );

