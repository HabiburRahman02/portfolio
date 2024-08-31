import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import Home from "./pages/Home/Home/Home";
import Skills from "./pages/Home/Skills/Skills";
import Projects from "./pages/Home/Projects/Projects";
import AboutMe from "./pages/Home/AboutMe/AboutMe";
import Education from "./pages/Home/Education/Education";
import Contact from "./pages/Home/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/aboutMe',
        element: <AboutMe></AboutMe>
      },
      {
        path: '/skills',
        element: <Skills></Skills>
      },
      {
        path: '/projects',
        element: <Projects></Projects>
      },
      {
        path: '/education',
        element: <Education></Education>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="bg-gray-50">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
