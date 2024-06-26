import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";
import Logo from "@/components/Logo";
import { FaLock } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center max-w-2xl h-full mx-auto pt-8">
      <Logo />
      <h2 className="text-xl font-medium mb-3 mt-16">Login to your account</h2>
      <form className="w-1/2">
        <div className="w-full space-y-6">
          <div className="grid space-y-3">
            <Label name="email" label="Email" />
            <Input id="email" name="email" type="email" />
          </div>
          <div className="grid space-y-3">
            <Label name="password" label="Password" />
            <Input id="password" name="password" type="password" />
          </div>
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
          <Button>Login</Button>
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
              <Link to="/auth/register" className="text-sm">
                <span className="text-primaryBlue font-medium">Register</span>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
