import React, { useMemo } from "react";
import { NavLink } from "react-router-dom";

import { Home, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface Menus {
  label: string
  icon: React.JSX.Element
  route: string
}

const NavbarItem: React.FC = () => {
  const menus: Menus[] = useMemo(() => {
    return [
      {
        label: "Home",
        icon: <Home />,
        route: "/",
      },
      {
        label: "User",
        icon: <User />,
        route: "/users",
      },
    ]
  }, []);

  return (
    <ul className="flex flex-col lg:flex-row gap-2 lg:gap-6 mt-10 lg:mt-0">
      {menus.map((menus, idx) => (
        <React.Fragment key={idx}>
          <li className="relative flex justify-center items-center">
            <NavLink 
              to={menus.route}
              className={({ isActive }) => {
                return cn(
                  "text-2xl lg:text-sm text-[#0563c6] lg:text-white",
                  isActive && "bg-white bg-opacity-25 p-2 rounded-md",
                );
              }}
            >
              {menus.label}
            </NavLink>
          </li>
        </React.Fragment>
      ))}
    </ul>
  );
}

export default NavbarItem;