import { Outlet } from "react-router-dom";

import { useMyProfile } from "@/hooks/useMyProfile";

import Navbar from "@organisms/dashboard/Navbar";
import { LoaderCircleIcon } from "lucide-react";
import { useEffect } from "react";
import { useProfile } from "@/hooks/useProfile";

const DashboardLayout: React.FC = () => {
  const { data, isLoading } = useMyProfile()
  const { setMyProfile } = useProfile()

  useEffect(() => {
    if(data) {
      setMyProfile(data)
    }
  }, [data, setMyProfile])

  return (
    <div className="w-screen h-screen flex flex-col">
      {isLoading ? (
        <LoaderCircleIcon className="animate-spin icon" />
      ) : (
        <>
          <Navbar />
          <div className="h-[calc(100vh-56px)] bg-[#F2F2F2] px-6 md:px-[88px] py-10 overflow-scroll">
            <Outlet />
          </div>
        </>
      )}
    </div>
  );
}

export default DashboardLayout;