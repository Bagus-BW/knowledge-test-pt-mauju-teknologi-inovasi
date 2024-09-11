import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import { userValidationSchema, UserValidationSchema } from "@/schemas/user";

import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/atoms/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/atoms/form";
import { Input } from "@/components/atoms/input";
import { Separator } from "@/components/atoms/separator";
import { useCreateUser, useUpdateUser } from "@/hooks/useUser";
import { useCallback } from "react";

interface UserFormProps {
  type: "create" | "edit"
}

const UserForm: React.FC<UserFormProps> = ({ type }) => {
  const { id } = useParams<{id: string}>()
  const navigate = useNavigate()
  const { mutate: create } = useCreateUser()
  const { mutate: update } = useUpdateUser()

  const form = useForm<UserValidationSchema>({
    resolver: zodResolver(userValidationSchema),
    defaultValues: {
      name: "",
      job: ""
    }
  })

  const onSubmit = useCallback((data: UserValidationSchema) => {
    if(type === "create") {
      create(data);
    }

    if(type === "edit") {
      update({
        id: id || "",
        name: data.name,
        job: data.job
      })
    }
  }, [create, id, type, update])

  return (
    <div className="flex flex-col gap-5 bg-white p-6">
      <h1 className="text-2xl font-bold">
        {type === "create" ? "Create" : "Update"} User
      </h1>
      <Separator />
      <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input 
                        placeholder="Full Name" 
                        className="w-full text-[#333333] placeholder:text-[#333333] placeholder:text-opacity-30 focus:border-[#0575E6] focus-visible:ring-0 rounded-full px-[18px] py-[26px]"
                        {...field} 
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="job"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input 
                        placeholder="Job Position" 
                        className="w-full text-[#333333] placeholder:text-[#333333] placeholder:text-opacity-30 focus:border-[#0575E6] focus-visible:ring-0 rounded-full px-[18px] py-[26px]"
                        {...field} 
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end gap-3">
              <Button 
                className="bg-transparent hover:bg-[#0575E6] hover:bg-opacity-10 border border-[#0575E6] text-base text-[#0575E6] p-6"
                onClick={() => navigate('/users')}
              >
                Cancel
              </Button>
              <Button 
                type="submit"
                className="bg-[#0575E6] hover:bg-[#0575E6] hover:bg-opacity-85 p-6 text-base"
              >
                Save
              </Button>
            </div>
          </form>
        </Form>
    </div>
  )
} 

export default UserForm;