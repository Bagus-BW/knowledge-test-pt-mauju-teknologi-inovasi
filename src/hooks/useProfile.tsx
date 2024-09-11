import { useContext } from "react";

import { MyProfileContext } from "@/contexts/MyProfileContext";

export const useProfile = () => {
  const context = useContext(MyProfileContext);
  if (!context) {
    throw new Error("useProfile must be used within a MyProfileProvider");
  }
  return context;
};