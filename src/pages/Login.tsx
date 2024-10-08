import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";
import { FaLock } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../components/addDoctor/formSchemas";
import {
  sanitizeToLetters,
  sanitizeToEmail
} from "@/utils/helperFunctions";
import { ChangeEvent } from "react";



export default function Login() {
  const { register, handleSubmit,reset,setValue,
    trigger, formState: { errors } } = useForm({mode: "all",
    reValidateMode: "onSubmit",
    resolver: yupResolver(loginSchema)
  });
  const onSubmit = data => {
    console.log(data);
    reset()
  };
  return (
    <>
      <h2 className="text-xl font-medium mb-3 mt-8">Login to your account</h2>
      <form className="w-[95%] md:w-3/4" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full space-y-6">
          <div className="grid space-y-3">
            <Label name="email" label="Email"className="text-xs text-red-600" required={true} />
            <Input id="email" name="email" type="email" className="w-full bg-none border border-gray-300 p-2 
            focus-visible:outline-primaryBlue"
            onChange={(e:ChangeEvent<HTMLInputElement>) => {
              setValue("email", sanitizeToEmail(e.target.value));
              trigger("email")}}
             {...register('email')} />
            
                {/* ERROR MESSAGE */}
                {errors.email && (
                  <p className="text-red-500 text-xs">
                    {errors.email.message}
                  </p>
                )}
          </div>
          <div className="grid space-y-3">
            <Label name="password" label="Password" className="text-xs text-red-600" required={true} />
            <Input id="password" name="password" type="password" className="w-full bg-none border border-gray-300 p-2 focus-visible:outline-primaryBlue"
            onChange={(e:ChangeEvent<HTMLInputElement>) => {
              setValue("email", sanitizeToLetters(e.target.value));
              trigger("password")}}
        
            
            {...register('password')} />
                
                {/* ERROR MESSAGE */}
                {errors.password && (
                  <p className="text-red-500 text-xs">
                    {errors.password.message}
                  </p>
                )}
            
          </div>
          <div className="flex flex-col space-y-2 md:flex-row items-center justify-between">
            <div className="flex items-start space-x-2">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 appearance-none border border-primaryBlue rounded-sm bg-white mt-1 shrink-0 checked:bg-primaryBlue checked:border-1 checked:border-primaryBlue"
              />
              <label htmlFor="remember-me" className="text-sm mt-[2px]">
                Remember me
              </label>
            </div>
            <Button type="submit">Login</Button>
          </div>
          <div>
            <div className="flex justify-center items-center space-x-2">
              <FaLock size={13} className="text-primaryBlue" />
              <Link to="/auth/forgot-password" className="text-sm">
                <span className="text-primaryBlue font-medium">
                  Forgot password?
                </span>
              </Link>
            </div>
            <div className="flex justify-center items-center space-x-1 mt-3">
              <p className="text-sm">Don't have an account?</p>
              <Link to="/auth/signup" className="text-sm">
                <span className="text-primaryBlue font-medium">Sign Up</span>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
