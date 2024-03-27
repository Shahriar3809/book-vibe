import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './Layouts/Root';
import Home from './Pages/Home';
import ListedBooks from './Components/ListedBooks';
import PageToRead from './Components/PageToRead';
import ErrorPage from './Pages/ErrorPage';
import Details from './Pages/Details';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Upcoming from './Pages/Upcoming';
import Contact from './Pages/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/PageToRead",
        element: <PageToRead></PageToRead>,
      },
      {
        path: "/bookDetails/:bookId",
        element: <Details></Details>,
        loader: () => fetch("/BooksData.json"),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/upComing",
        element: <Upcoming></Upcoming>
      },
    ],
  },
]);





ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer></ToastContainer>
  </React.StrictMode>
);
