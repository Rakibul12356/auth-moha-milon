import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./component/Root";
import Home from "./component/Home";
import Login from "./component/Login";
import Register from "./component/Register";
import AuthProvider from "./provider/AuthProvider";
import Order from "./component/Order";
import PrivateRoute from "./component/PrivateRoute";
import Profile from "./component/Profile";
import DashBoard from "./component/DashBoard";



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
        path: '/login',
        element: <Login></Login>

      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path:"/order",
        element:<PrivateRoute><Order></Order></PrivateRoute>
      },
      {
        path:"/profile",
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path:"/dashboard",
        element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>
);

