import { ChevronDown } from "lucide-react";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/atoms/dropdown-menu";
import { Separator } from "@/components/atoms/separator";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { useCookies } from "react-cookie";
import { useProfile } from "@/hooks/useProfile";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/avatar";

const NavbarProfile: React.FC = () => {
  const navigate = useNavigate()
  const [, , removeCookie] = useCookies(["token"]);
  const { myProfile } = useProfile()

  const handleSignOut = useCallback(() => {
    removeCookie("token")
    navigate("/login")
  }, [navigate, removeCookie]);

  return (
    <div className="flex gap-6">
      <Separator 
        orientation="vertical"
        className="hidden lg:block h-14 w-0.5 bg-[#0563c6]"
      />
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex items-center gap-2">
            <Avatar className="border-2 border-[#0571E1] w-12 h-12">
              <AvatarImage src={myProfile?.avatar || "./images/default/avatar.png"} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2">
                <h1 className="text-[#0563c6] lg:text-white font-bold capitalize">{myProfile?.first_name + " " + myProfile?.last_name}</h1>
                <ChevronDown className="text-[#0563c6] lg:text-white" />
              </div>
              <p className="text-xs text-[#0563c6] lg:text-white font-medium">Sales Lead</p>
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[200px] p-0">
          <DropdownMenuItem 
            className="p-3"
            onClick={() => navigate("/my-profile")}
          >
            My Profile
          </DropdownMenuItem>
          <Separator />
          <DropdownMenuItem 
            className="p-3"
            onClick={handleSignOut}
          >
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default NavbarProfile