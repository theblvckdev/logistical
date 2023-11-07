import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home/home";
import "./assets/sass/global.scss";
import PageNotFound from "./pages/page_not_found/pageNotFound";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Layout from "./layout/layout";
import About from "./pages/about/about";

function App() {
  useEffect(() => {
    Aos.init();
    // Aos.refresh();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
      errorElement: <PageNotFound />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
