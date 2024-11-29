/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Eye, EyeOff, Facebook, Twitter } from "lucide-react";
import { Checkbox, Spinner } from "@nextui-org/react";
import { userLogin } from "@/components/UtlitiFunction/userLogin";
import { useAppDispatch } from "@/components/Redux/hooks";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { setUser } from "@/components/Redux/authSlice";

interface LoginFormInputs {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormInputs>();

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    setLoading(true);
    const toastId = toast.loading("Login Processing !");

    try {
      const res = await userLogin(data);
      if (res?.data.token) {
        dispatch(setUser({ accessToken: res?.data?.token }));
        reset();
        toast.success("Login Successfully", { id: toastId, duration: 2000 });
        setLoading(false);
        router.push("/");
      } else {
        toast.error("Something Went Wrong", { id: toastId, duration: 2000 });
        setLoading(false);
      }
    } catch (err) {
      console.error("Error:", "Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md md:max-w-5xl grid grid-cols-12 mx-auto">
        {/* Left Section */}
        <div className="col-span-12 md:col-span-6 flex items-center justify-center bg-[#ee916a] h-96">
          <div className="text-white text-center space-y-3">
            <h2 className="text-3xl font-bold">Welcome to login!</h2>
            <p className="text-lg">Don't have an account?</p>
            <button className=" border border-white py-2 px-6 rounded-full">
              Sign Up
            </button>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="col-span-12 md:col-span-6 bg-white p-6">
          <div className=" flex items-center justify-between">
            <h1 className=" font-medium text-xl vigaRegular text-slate-700">
              Sign In
            </h1>
            <div className=" flex items-center gap-2">
              <div className=" h-8 w-8 rounded-full border border-gray-100 flex justify-center items-center">
                <Facebook size={16} className=" text-slate-500" />
              </div>
              <div className=" h-8 w-8 rounded-full border border-gray-100 flex justify-center items-center">
                <Twitter size={16} className=" text-slate-500" />
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email Field */}
            <div className=" pt-4">
              <label
                htmlFor="email"
                className="block text-base font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
                className={`w-full px-6 py-2 border rounded-full focus:none focus:none${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-base font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  className={`w-full px-4 py-2 border rounded-full ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-4 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className=" pb-4">
              <button
                type="submit"
                className="w-full primaryBg text-white py-2 rounded-full font-medium transition duration-300"
              >
                {loading ? <Spinner color="default" size="sm" /> : " Sign In"}
              </button>
            </div>
            <div className=" flex justify-between items-center">
              <h1 className=" primaryColor">
                <Checkbox defaultSelected={true} className="custom-checkbox" />{" "}
                Remember Me
              </h1>
              <h1>Forget Password</h1>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
