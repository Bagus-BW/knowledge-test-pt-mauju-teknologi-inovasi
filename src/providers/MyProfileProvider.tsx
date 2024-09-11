import { useState } from "react";

import { MyProfile } from "@/types/myProfile";

import { MyProfileContext } from "@/contexts/MyProfileContext";

interface MyProfileProviderProps {
  children: React.ReactNode;
}

export const MyProfileProvider: React.FC<MyProfileProviderProps> = ({ children }) => {
  const [myProfile, setMyProfile] = useState<MyProfile | undefined>(undefined)
  
  return(
    <MyProfileContext.Provider
      value={{
        myProfile,
        setMyProfile
      }}
    >
      {children}
    </MyProfileContext.Provider>
  )
}