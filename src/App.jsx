import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, path: "", element: <Home /> },
        { index: true, path: "gallery", element: <Gallery /> },
        { index: true, path: "about", element: <About /> },
        { index: true, path: "contact", element: <Contact /> }
      ]
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
