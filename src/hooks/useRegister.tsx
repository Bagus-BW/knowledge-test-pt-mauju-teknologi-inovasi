import { useCallback, useState } from "react"
import { useCookies } from "react-cookie";
import { toast } from "sonner";
import axios from "axios";

import { Register } from "@/types/register";

interface RegisterHook {
  mutate: (loginProps: RegisterProps) => void;
  data: Register | undefined
  isLoading: boolean
}

interface RegisterProps {
  email: string
  password: string
}

export const useRegister = (): RegisterHook => {
  const [data, setData] = useState<Register | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [, setCookie] = useCookies(['token']);

  const Register = useCallback(async ({ email, password }: RegisterProps) => {
    try {
      setIsLoading(true);
  
      const data = await axios.post<Register>("https://reqres.in/api/register", {
        email,
        password
      })
  
      setData(data.data)
      setCookie("token", data.data?.token)
      toast("Register Successfully");
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

  return { mutate: Register, data, isLoading }
}