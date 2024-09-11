import { useCallback, useEffect, useState } from "react"
import { toast } from "sonner";
import axios from "axios";

import { BaseAPIResponse } from "@/types/common";
import { MyProfile } from "@/types/myProfile";
import { useProfile } from "./useProfile";

interface MyProfileHook {
  data: MyProfile | undefined,
  isLoading: boolean,
}

export const useMyProfile = (): MyProfileHook => {
  const [data, setData] = useState<MyProfile | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { myProfile } = useProfile()

  const fetchMyProfile = useCallback(async () => {
    try {
      setIsLoading(true);
  
      const { data } = await axios.get<BaseAPIResponse<MyProfile>>("https://reqres.in/api/users/2")
  
      setData(data.data)
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        toast(`Axios error: ${err.message}`);
      } else {
        toast(`Unexpected error: ${err}`);
      }
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    if(!myProfile) {
      fetchMyProfile()
    }
  }, [fetchMyProfile, myProfile])

  return { data, isLoading }
}