import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import "./styles/global.css";
import UsersPage from './pages/users.jsx';
import BookPage from './pages/books.jsx';
import RegisterPage from './pages/register.jsx';
import LoginPage from './pages/login.jsx';
import ErrorPage from './pages/error.jsx';
import TodoApp from './components/todo/todoapp.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <TodoApp/>,
      },
      {
        path: "/users",
        element: <UsersPage/>,
      },
      {
        path: "/books",
        element: <BookPage/>,
      },
    ]

  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/register",
    element: <RegisterPage/>,
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
