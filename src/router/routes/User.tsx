import { RouteObject } from "react-router-dom";

import Authenticated from "@/router/middleware/Authenticated";

import DashboardLayout from "@/components/template/DashboardLayout";
import Resources from "@/components/pages/user/Users";
import UserCreate from "@/components/pages/user/UserCreate";
import UserEdit from "@/components/pages/user/UserEdit";



const router: RouteObject[] = [
  {
    path: "/users",
    element: (
      <Authenticated>
        <DashboardLayout />
      </Authenticated>
    ),
    children: [
      {
        path: "",
        element: (
          <Resources />
        ),
      },
      {
        path: "create",
        element: (
          <UserCreate />
        ),
      },
      {
        path: "edit/:id",
        element: (
          <UserEdit />
        ),
      },
    ],
  },
];

export default router;
