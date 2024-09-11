import { RouteObject } from "react-router-dom";

import Authenticated from "@/router/middleware/Authenticated";

import AuthLayout from "@/components/template/AuthLayout";
import Login from "@/components/pages/login/Login";
import Register from "@/components/pages/register/Register";

const router: RouteObject[] = [
  {
    path: "/login",
    element: <AuthLayout />,
    children: [
      {
        path: "",
        element: (
          <Authenticated>
            <Login />
          </Authenticated>
        )
      }
    ]
  },
  {
    path: "/register",
    element: <AuthLayout />,
    children: [
      {
        path: "",
        element: (
          <Authenticated>
            <Register />
          </Authenticated>
        )
      }
    ]
  }
];

export default router;
