import { Form, FormControl, FormField, FormItem } from "@/components/atoms/form";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircleIcon } from "lucide-react";

import { registerValidationSchema, RegisterValidationSchema } from "@/schemas/register";

import { Input } from "@/components/atoms/input";
import { Button } from "@/components/atoms/button";
import { useRegister } from "@/hooks/useRegister";

const RegisterForm: React.FC = () => {
  const { mutate, isLoading } = useRegister()

  const form = useForm<RegisterValidationSchema>({
    resolver: zodResolver(registerValidationSchema),
    defaultValues: {
      name: "",
      email: "",
      password: ""
    }
  })

  const onSubmit = (data: RegisterValidationSchema) => {
    mutate({
      email: data.email,
      password: data.password
    });
  };

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="w-3/4 lg:w-1/2 flex flex-col gap-10">
        <div className="flex flex-col">
          <h1 className="text-[26px] text-[#333333] font-bold">Hello!</h1>
          <p className="text-lg text-[#333333]">Sign Up to Get Started</p>
        </div>
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
                        className="w-full text-[#333333] text-opacity-30 placeholder:text-[#333333] placeholder:text-opacity-30 focus:border-[#0575E6] focus-visible:ring-0 rounded-full pl-[45px] pr-[18px] py-[26px]"
                        {...field} 
                      />
                      <img 
                        src="./images/icon/user.png" 
                        alt="Mail Icon" 
                        className="absolute top-1/2 -translate-y-1/2 left-4"
                      />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input 
                        placeholder="Email Address" 
                        className="w-full text-[#333333] text-opacity-30 placeholder:text-[#333333] placeholder:text-opacity-30 focus:border-[#0575E6] focus-visible:ring-0 rounded-full pl-[45px] pr-[18px] py-[26px]"
                        {...field} 
                      />
                      <img 
                        src="./images/icon/mail.png" 
                        alt="Mail Icon" 
                        className="absolute top-1/2 -translate-y-1/2 left-4"
                      />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input 
                        type="password"
                        placeholder="Password" 
                        className="w-full text-[#333333] text-opacity-30 placeholder:text-[#333333] placeholder:text-opacity-30 focus:border-[#0575E6] focus-visible:ring-0 rounded-full pl-[45px] pr-[18px] py-[26px]"
                        {...field} 
                      />
                      <img 
                        src="./images/icon/lock.png" 
                        alt="Mail Icon" 
                        className="absolute top-1/2 -translate-y-1/2 left-4"
                      />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="bg-[#0575E6] hover:bg-[#0575E6] hover:bg-opacity-85 py-7 rounded-full"
            >
              {isLoading ? <LoaderCircleIcon className="animate-spin icon" /> : "Register"}
            </Button>

            <p className="text-xs text-center">
              have an account? 
              <Link 
                to="/login"
                className="text-[#0575E6]"
              >
                  &nbsp;Login
                </Link>
            </p>
          </form>
        </Form>
      </div> 
    </div>
  );
}

export default RegisterForm;