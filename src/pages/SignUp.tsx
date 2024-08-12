import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../components/addDoctor/formSchemas";
import { useForm } from "react-hook-form";
import {
  sanitizeToLetters,
  sanitizeToEmail
} from "@/utils/helperFunctions";
import { ChangeEvent } from "react";


export default function SignUp() {
  const { register, handleSubmit,setValue,trigger,reset, formState: { errors } } = useForm({
    mode: "all",
    reValidateMode: "onSubmit",
    resolver: yupResolver(signUpSchema)
  });
  const onSubmit = data => {
    console.log(data);
    reset()
  };
  return (
      <>
        <h2 className="text-xl font-medium mb-3 mt-8">Create an account</h2>
        <form className="w-3/4" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full space-y-6">
            <div className="grid space-y-3">
              <Label name="email" label="Email" className="text-xs text-red-600" required={true} />
              <Input id="email" name="email" type="email" className="w-full bg-none border border-gray-300 p-2 focus-visible:outline-primaryBlue"
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
                    setValue("password", sanitizeToLetters(e.target.value));
                    trigger("password")}}
               {...register('password')} />
               {/* ERROR MESSAGE */}
               {errors.password && (
                  <p className="text-red-500 text-xs">
                    {errors.password.message}
                  </p>
                )}
            </div>
            <Button type="submit" styles="bg-primaryBlue text-white">
              Register
            </Button>
            <div>
              <div className="flex justify-center items-center space-x-1 mt-3">
                <p className="text-sm">Already have an account?</p>
                <Link to="/auth/login" className="text-sm">
                  <span className="text-primaryBlue font-medium">Login</span>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </>
  );
}
