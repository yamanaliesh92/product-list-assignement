import { useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { SignInFormData, signInSchema } from "../lib/form-validation-schema";
import CustomInput from "./input";
import CustomButton from "./button";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import loginApi from "../fetcher/user/login.api";

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  const mutation = useMutation({
    mutationFn: loginApi,
    onSuccess: (user) => {
      toast.success(`Welcome back, ${user.email}!`);
      localStorage.setItem("name", JSON.stringify(user.email));
      navigate("/");
    },
    onError: () => {
      toast.error("Invalid email or password");
    },
  });

  const onSubmit = (data: SignInFormData) => {
    mutation.mutate(data);
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4 text-primary">Sign In</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <CustomInput
            {...register("email")}
            name="email"
            type={"text"}
            label="Email"
            error={errors.email?.message}
          />
        </div>
        <div className="mb-4 relative">
          <CustomInput
            {...register("password")}
            name="password"
            type={showPassword ? "text" : "password"}
            error={errors.password?.message}
            label="Password"
          />
          {!showPassword ? (
            <AiFillEye
              onClick={togglePasswordVisibility}
              cursor={"pointer"}
              size={20}
              className="icon-style"
            />
          ) : (
            <AiFillEyeInvisible
              onClick={togglePasswordVisibility}
              cursor={"pointer"}
              size={20}
              className="icon-style"
            />
          )}
        </div>
        <div className="flex justify-end">
          <CustomButton isLoading={mutation.isPending} type={"submit"}>
            Sign in
          </CustomButton>
        </div>
      </form>
      <p className="text-sm text-center mt-4 text-gray-600">
        Don’t have an account?{" "}
        <Link
          to={"/sign-up"}
          className="text-primary ml-2  hover:text-secondary"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
