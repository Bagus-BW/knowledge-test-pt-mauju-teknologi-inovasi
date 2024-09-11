import { useCallback, useEffect, useState } from "react"
import { toast } from "sonner";
import axios from "axios";

import { BaseAPIResponse } from "@/types/common";
import { User, UserCreate, UserUpdate } from "@/types/user";
import { useNavigate } from "react-router-dom";

interface UserHook {
  data: User[] | undefined,
  isLoading: boolean,
}

interface UserProps {
  page?: number,
  per_page?: number
}

export const useUser = ({ page = 1, per_page = 10 }: UserProps = {}): UserHook => {
  const [data, setData] = useState<User[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchResource = useCallback(async () => {
    try {
      setIsLoading(true);
  
      const { data } = await axios.get<BaseAPIResponse<User[]>>("https://reqres.in/api/users", {
        params: {
          page: page,
          per_page: per_page
        }
      })
  
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
  }, [page, per_page])

  useEffect(() => {
    fetchResource()
  }, [fetchResource])

  return { data, isLoading }
}

interface CreateUserHook {
  mutate: (createUserProps: CreateUserProps) => void;
  data: UserCreate | undefined
  isLoading: boolean
}

interface CreateUserProps {
  name: string
  job: string
}

export const useCreateUser = (): CreateUserHook => {
  const [data, setData] = useState<UserCreate | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate =  useNavigate()

  const AddUser = useCallback(async ({ name, job }: CreateUserProps) => {
    try {
      setIsLoading(true);
  
      const data = await axios.post<UserCreate>("https://reqres.in/api/users", {
        name,
        job
      })
  
      setData(data.data)
      toast(
        <div>
          <h1>Create User Successfully</h1>
          {JSON.stringify(data.data)}
        </div>
      );
      navigate("/users")
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        toast(`Axios error: ${err.response?.data.error}`);
      } else {
        toast(`Unexpected error: ${err}`);
      }
    } finally {
      setIsLoading(false)
    }
  }, [])

  return { mutate: AddUser, data, isLoading }
}

interface UpdateUserHook {
  mutate: (createUserProps: UpdateUserProps) => void;
  data: UserUpdate | undefined
  isLoading: boolean
}

interface UpdateUserProps {
  id: string
  name: string
  job: string
}

export const useUpdateUser = (): UpdateUserHook => {
  const [data, setData] = useState<UserUpdate | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate =  useNavigate()

  const UpdateUser = useCallback(async ({ id, name, job }: UpdateUserProps) => {
    try {
      setIsLoading(true);
  
      const data = await axios.post<UserUpdate>(`https://reqres.in/api/users/${id}`, {
        name,
        job
      })
  
      setData(data.data)
      toast(
        <div>
          <h1>Update User Successfully</h1>
          {JSON.stringify(data.data)}
        </div>
      );
      navigate("/users")
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        toast(`Axios error: ${err.response?.data.error}`);
      } else {
        toast(`Unexpected error: ${err}`);
      }
    } finally {
      setIsLoading(false)
    }
  }, [])

  return { mutate: UpdateUser, data, isLoading }
}

interface DeleteUserHook {
  mutate: (deleteUserProps: DeleteUserProps) => void;
  data: UserUpdate | undefined
  isLoading: boolean
}

interface DeleteUserProps {
  id: string
}

export const useDeleteUser = (): DeleteUserHook => {
  const [data, setData] = useState<UserUpdate | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const DeleteUser = useCallback(async ({ id }: DeleteUserProps) => {
    try {
      setIsLoading(true);
  
      const data = await axios.post(`https://reqres.in/api/users/${id}`)
  
      setData(data.data)
      toast(
        <div>
          <h1>Deleted User Successfully</h1>
          {JSON.stringify(data.data)}
        </div>
      );
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        toast(`Axios error: ${err.response?.data.error}`);
      } else {
        toast(`Unexpected error: ${err}`);
      }
    } finally {
      setIsLoading(false)
    }
  }, [])

  return { mutate: DeleteUser, data, isLoading }
}