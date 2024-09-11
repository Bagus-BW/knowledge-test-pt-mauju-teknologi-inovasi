import { RouteObject } from "react-router-dom";

import Authenticated from "@/router/middleware/Authenticated";

import DashboardLayout from "@/components/template/DashboardLayout";
import MyProfile from "@/components/pages/my-profile/MyProfile";


const router: RouteObject[] = [
  {
    path: "/my-profile",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: (
          <Authenticated>
            <MyProfile />
          </Authenticated>
        ),
      },
    ],
  },
];

export default router;
