import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import Login from "./components/page/Login";
import ErroPage from "./components/page/ErroPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

let router = createBrowserRouter([
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/",
    element: <App />,
    errorElement: <ErroPage />,
  },
  {
    path: "/erro/:id",
    element: <ErroPage />,
  },
]);

ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById("root")
);
