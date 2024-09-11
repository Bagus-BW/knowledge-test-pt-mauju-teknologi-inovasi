import { Button } from "@/components/atoms/button";
import NavbarItem from "@/components/organisms/dashboard/NavbarItem";
import NavbarProfile from "@/components/organisms/dashboard/NavbarProfile";
import { MenuIcon } from "lucide-react";
import { useNavbar } from "@/hooks/useNavbar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/atoms/sheet";

const Navbar: React.FC = () => {

  const { setShowNavbar } = useNavbar()

  return (
    <div className="bg-[#0571E1] px-5 lg:px-[88px]">
      <div className="h-full flex items-center justify-end lg:justify-between py-5 lg:py-0">
        <div className="w-full hidden lg:flex items-center justify-between">
          <NavbarItem />
          <NavbarProfile />
        </div>

        {/* only on table and mobile view */}
        <div className="block lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                className="bg-white bg-opacity-35 hover:bg-white hover:bg-opacity-25"
                onClick={() => setShowNavbar(true)}
              >
                <MenuIcon className="text-white"/>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="h-full flex flex-col justify-between items-center">
                <NavbarItem />
                <NavbarProfile />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  )
}

export default Navbar;