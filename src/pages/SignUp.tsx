import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
      <>
        <h2 className="text-xl font-medium mb-3 mt-8">Create an account</h2>
        <form className="w-3/4">
          <div className="w-full space-y-6">
            <div className="grid space-y-3">
              <Label name="email" label="Email" required={true} />
              <Input id="email" name="email" type="email" />
            </div>
            <div className="grid space-y-3">
              <Label name="password" label="Password" required={true} />
              <Input id="password" name="password" type="password" />
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
