import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Login from "./components/page/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

let router = createBrowserRouter([
  {
    path: "/Login",
    element: <Login />,
    errorElement: <h1>404 Not Found</h1>,
  },
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById("root")
);
