// PaginationContext.ts
import { createContext } from "react";

import { MyProfile } from "@/types/myProfile";

interface MyProfileContextProps {
  myProfile: MyProfile | undefined;
  setMyProfile: React.Dispatch<React.SetStateAction<MyProfile | undefined>>
}

export const MyProfileContext = createContext<MyProfileContextProps | undefined>(undefined);