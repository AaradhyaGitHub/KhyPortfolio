import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import GenreGrid from "./components/galleryComponents/genreGrid";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, path: "", element: <Home /> },
        {
          path: "gallery",
          element: <Gallery />,
          children: [{ path: ":genre", element: <GenreGrid /> }]
        },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> }
      ]
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
