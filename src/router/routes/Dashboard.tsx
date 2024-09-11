import { RouteObject } from "react-router-dom";

import Authenticated from "@/router/middleware/Authenticated";

import DashboardLayout from "@/components/template/DashboardLayout";
import Dashboard from "@/components/pages/dashboard/Dashboard";


const router: RouteObject[] = [
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: (
          <Authenticated>
            <Dashboard />
          </Authenticated>
        ),
      },
    ],
  },
];

export default router;
