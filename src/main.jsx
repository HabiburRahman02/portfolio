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
import ViewDetails from "./pages/Home/Projects/ViewDetails";
import { ToastContainer } from 'react-toastify';

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
      {
        path: '/viewDetails/:id',
        element: <ViewDetails></ViewDetails>,
        loader: () => fetch(`projects.json`)
      },
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="bg-base-200 dark:bg-[rgb(33,37,41)] dark:text-white">
      <RouterProvider router={router} />
      <ToastContainer></ToastContainer>
    </div>
  </StrictMode>
);
