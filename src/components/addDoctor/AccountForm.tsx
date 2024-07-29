import Button from "@/components/Button";
import Label from "@/components/Label";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { accountSchema } from './formSchemas';
import {
  sanitizeToLetters
} from "@/utils/helperFunctions";


export default function AccountForm({
  selectedForm,
  onSelectForm,
}: {
  selectedForm: string;
  onSelectForm: React.Dispatch<React.SetStateAction<string>>;
}) {
  const {
    reset,
    trigger,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    reValidateMode: "onSubmit",
    resolver: yupResolver(accountSchema),
  });

  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
  };

  function onSelectFormHandler(){
    onSelectForm("accountForm");
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div className="mt-6">
        <p
          onClick={onSelectFormHandler}
          className="flex justify-between items-center w-full text-sm font-medium text-white bg-primaryBlue p-3 cursor-pointer"
        >
          <span>Doctor's Account Information</span>
          {selectedForm === "accountForm" ? (
            <FaAngleDown className="text-white text-lg font-semibold" />
          ) : (
            <FaAngleRight className="text-white text-lg font-semibold" />
          )}
        </p>
        {selectedForm === "accountForm" && (
          <div className="bg-white px-8 py-4">
            {/* USERNAME NAME & STAFF ON DUTY */}
            <div className="grid mt-4">
              <div className="space-y-2">
                <Label name="username" label="Username" required={true} />
                <input
                  {...register("username")}
                  id="username"
                  type="text"
                  className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  onChange={(e) => {
                    setValue("username", sanitizeToLetters(e.target.value));
                    trigger("username");
                  }}
                />

                {/* ERROR MESSAGE */}
                {errors.username && (
                  <p className="text-red-500 text-xs">
                    {errors.username.message}
                  </p>
                )}
              </div>
            </div>

            {/* PASSWORD & CONFIRM PASSWORD */}
            <div className="grid md:grid-cols-2 gap-5 mt-4 mb-6">
              <div className="space-y-2">
                <Label name="password" label="Password" required={true} />
                <input
                  {...register("password")}
                  id="password"
                  type="password"
                  className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                />

                {/* ERROR MESSAGE */}
                {errors.password && (
                  <p className="text-red-500 text-xs">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="grid space-y-2">
                <Label
                  name="confirmPassword"
                  label="Confirm Password"
                  required={true}
                />
                <input
                  {...register("confirmPassword")}
                  id="confirmPassword"
                  type="password"
                  className="w-full  border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                />

                {/* ERROR MESSAGE */}
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>
            <Button type="submit">Submit</Button>
          </div>
        )}
      </div>
    </form>
  );
}
