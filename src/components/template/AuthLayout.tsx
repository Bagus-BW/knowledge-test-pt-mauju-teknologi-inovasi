import { Button } from "@atoms/button";
import { Outlet } from "react-router-dom";

const AuthLayout: React.FC = () => {
  return (
    <div className="w-screen h-screen flex bg-white">
      <div className="relative hidden lg:block w-3/5 bg-gradient-to-bl	from-[#0575E6] from-15% via-[#02298A] via-70% to-[#021B79] to-100%">
        <div className="h-full flex flex-col justify-center translate-x-[157px]">
          <h1 className="text-[40px] font-bold text-white">GoFinance</h1>
          <p className="text-lg font-medium text-white">Lorem ipsum dolor sit amet</p>
          <Button className="w-max bg-[#0575E6] hover:bg-[#0575E6] hover:bg-opacity-85 text-white rounded-full mt-6 px-[30px] py-2">Read More</Button>
        </div>
        <img 
          src="./images/auth/line-half-circle.png" 
          alt="Line Half Circle" 
          className="w-1/2 absolute bottom-0 left-0"
        />
      </div>
      <div className="w-full lg:w-2/5">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;