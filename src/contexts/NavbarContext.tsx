// PaginationContext.ts
import { createContext } from "react";

interface NavbarContextProps {
  showNavbar: boolean;
  setShowNavbar: React.Dispatch<React.SetStateAction<boolean>>
}

export const NavbarContext = createContext<NavbarContextProps>({
  showNavbar: false,
  setShowNavbar: () => false
});