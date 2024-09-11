import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/atoms/form";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircleIcon } from "lucide-react";

import { loginValidationSchema, LoginValidationSchema } from "@/schemas/login";

import { Input } from "@/components/atoms/input";
import { Button } from "@/components/atoms/button";
import { useLogin } from "@/hooks/useLogin";

const LoginForm: React.FC = () => {
  const { mutate, isLoading } = useLogin()

  const form = useForm<LoginValidationSchema>({
    resolver: zodResolver(loginValidationSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const onSubmit = (data: LoginValidationSchema) => {
    mutate(data);
  };

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="w-3/4 lg:w-1/2 flex flex-col gap-10">
        <div className="flex flex-col">
          <h1 className="text-[26px] text-[#333333] font-bold">Hello Again!</h1>
          <p className="text-lg text-[#333333]">Welcome Back</p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
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
                        src="./src/assets/images/icon/mail.png" 
                        alt="Mail Icon" 
                        className="absolute top-1/2 -translate-y-1/2 left-4"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
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
                        src="./src/assets/images/icon/lock.png" 
                        alt="Mail Icon" 
                        className="absolute top-1/2 -translate-y-1/2 left-4"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Link 
              to=""
              className="text-xs text-[#0575E6] text-end -mt-2"
            >
              Forgot Password
            </Link>

            <Button
              type="submit"
              className="bg-[#0575E6] hover:bg-[#0575E6] hover:bg-opacity-85 py-7 rounded-full"
            >
              {isLoading ? <LoaderCircleIcon className="animate-spin icon" /> : "Login"}
            </Button>

            <p className="text-xs text-center">
              Don't have an account? 
              <Link 
                to="/register"
                className="text-[#0575E6]"
              >
                  &nbsp;Register
                </Link>
            </p>
          </form>
        </Form>
      </div> 
    </div>
  );
}

export default LoginForm;