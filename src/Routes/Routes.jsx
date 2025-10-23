import React from 'react';
import {createBrowserRouter} from "react-router"
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import ListedBooks from '../Pages/ListedBooks/ListedBooks';
import BookDetails from '../Pages/BookDetails/BookDetails';

export const router = createBrowserRouter([
  {
    path:'/',
    Component:Root,
    // errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        index:true,
        path:'/',
        loader:()=>fetch('/booksData.json'),
        Component:Home
      },
      {
        path:'/listed-books',
        loader:()=>fetch('/booksData.json'),
        Component:ListedBooks,
      },
      {
        path: '/bookDetails/:id',
        loader:()=>fetch('/booksData.json'),
        Component:BookDetails,
      },
      {
        path:'*',
        element:<ErrorPage></ErrorPage>,
      }
    ]
  }
])