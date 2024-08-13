import Button from "@/components/Button";
import Label from "@/components/Label";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { socialSchema } from "./formSchemas";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ChangeEvent } from "react";
import Input from '@/components/Input';
import {
  sanitizeToLetters,
} from "@/utils/helperFunctions";


export default function SocialForm({
  selectedForm,
  onSelectForm,
}: {
  selectedForm: string;
  onSelectForm: React.Dispatch<React.SetStateAction<string>>;
    }) {
    
  const {
    reset,
    register,
    setValue,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    reValidateMode: "onSubmit",
    resolver: yupResolver(socialSchema),
  });   
    
  function onSubmitHandler(data){
      console.log({ data });
      reset();
  }
  
  function onSelectFormHandler() {
    onSelectForm("socialForm");
    reset();
  }
    
    
  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div className="mt-6">
        <p
          onClick={onSelectFormHandler}
          className="flex justify-between items-center w-full text-sm font-medium text-white bg-primaryBlue p-3 cursor-pointer"
        >
          <span>Doctor Social Media Info</span>
          {selectedForm === "socialForm" ? (
            <FaAngleDown className="text-white text-lg font-semibold" />
          ) : (
            <FaAngleRight className="text-white text-lg font-semibold" />
          )}
        </p>
        {selectedForm === "socialForm" && (
          <div className="bg-white px-8 py-4">
            {/* FACEBOOK & TWITTER */}
            <div className="grid md:grid-cols-2 gap-5 mt-4 mb-6">
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <FaFacebook className="text-primaryBlue text-base" />
                  <Label name="facebook" label="Facebook" className="text-xs text-red-600" required={false} />
                </div>
                <Input
                  {...register("facebook")}
                  id="facebook"
                  type="text"
                  className="w-full border border-gray-300 p-2 focus- visible:outline-primaryBlue"
                  onChange={(e:ChangeEvent<HTMLInputElement>) => {
                    setValue("facebook", sanitizeToLetters(e.target.value));
                    trigger("facebook");
                  }}
                />

                {/* ERROR MESSAGE */}
                {errors.facebook && (
                  <p className="text-red-500 text-xs">
                    {errors.facebook.message}
                  </p>
                )}
              </div>
              <div className="grid space-y-2">
                <div className="flex items-center space-x-3">
                  <FaTwitter className="text-primaryBlue text-base" />
                  <Label name="twitter" label="Twitter" required={false} className="text-xs text-red-600" />
                </div>
                <Input
                  {...register("twitter")}
                  id="twitter"
                  type="text"
                  className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  onChange={(e:ChangeEvent<HTMLInputElement>) => {
                    setValue("twitter", sanitizeToLetters(e.target.value));
                    trigger("twitter");
                  }}
                />
                
                {/* ERROR MESSAGE */}
                {errors.twitter && (
                  <p className="text-red-500 text-xs">
                    {errors.twitter.message}
                  </p>
                )}
              </div>
            </div>

            {/* LINKEDLN && INSTAGRAM */}
            <div className="grid md:grid-cols-2 gap-5 mt-4 mb-6">
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <FaLinkedinIn className="text-primaryBlue text-base" />
                  <Label name="linkedin" label="Linkedin" className="text-xs text-red-600" required={false} />
                </div>
                <Input
                  {...register("linkedin")}
                  id="linkedin"
                  type="text"
                  className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  onChange={(e:ChangeEvent<HTMLInputElement>) => {
                    setValue("linkedin", sanitizeToLetters(e.target.value));
                    trigger("linkedin");
                  }}
                />
                
                {/* ERROR MESSAGE */}
                {errors.linkedin && (
                  <p className="text-red-500 text-xs">
                    {errors.linkedin.message}
                  </p>
                )}
              </div>
              <div className="grid space-y-2">
                <div className="flex items-center space-x-3">
                  <FaInstagram className="text-primaryBlue text-base" />
                  <Label name="instagram" label="Instagram" className="text-xs text-red-600" required={false} />
                </div>
                <Input
                  {...register("instagram")}
                  id="instagram"
                  type="text"
                  className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  onChange={(e:ChangeEvent<HTMLInputElement>) => {
                    setValue("linkedin", sanitizeToLetters(e.target.value));
                    trigger("linkedin");
                  }}
                />
                
                {/* ERROR MESSAGE */}
                {errors.instagram && (
                    <p className="text-red-500 text-xs">
                    {errors.instagram.message}
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
