import { useCallback, useState } from "react"
import { useCookies } from "react-cookie";
import { toast } from "sonner";
import axios from "axios";

import { Login } from "@/types/login";

interface LoginHook {
  mutate: (loginProps: LoginProps) => void;
  data: Login | undefined
  isLoading: boolean
}

interface LoginProps {
  email: string
  password: string
}

export const useLogin = (): LoginHook => {
  const [data, setData] = useState<Login | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [, setCookie] = useCookies(['token']);

  const Login = useCallback(async ({ email, password }: LoginProps) => {
    try {
      setIsLoading(true);
  
      const data = await axios.post<Login>("https://reqres.in/api/login", {
        email,
        password
      })
  
      setData(data.data)
      setCookie("token", data.data?.token)
      toast("Login Successfully");
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        toast(`Axios error: ${err.response?.data.error}`);
      } else {
        toast(`Unexpected error: ${err}`);
      }
    } finally {
      setIsLoading(false)
    }
  }, [setCookie])

  return { mutate: Login, data, isLoading }
}