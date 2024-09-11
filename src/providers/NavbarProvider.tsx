import { useState } from "react";

import { NavbarContext } from "@/contexts/NavbarContext";

interface MyProfileProviderProps {
  children: React.ReactNode;
}

export const NavbarProvider: React.FC<MyProfileProviderProps> = ({ children }) => {
  const [showNavbar, setShowNavbar] = useState<boolean>(false)
  
  return(
    <NavbarContext.Provider
      value={{
        showNavbar,
        setShowNavbar
      }}
    >
      {children}
    </NavbarContext.Provider>
  )
}