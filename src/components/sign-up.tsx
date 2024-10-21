import { useState } from "react";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { SignUpFormData, signUpSchema } from "../lib/form-validation-schema";
import CustomButton from "./button";
import CustomInput from "./input";
import { Link, useNavigate } from "react-router-dom";
import createUserApi from "../fetcher/user/create-user.api";

export default function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createUserApi,
    onSuccess: (data) => {
      toast.success(`Welcome ${data.username}!`);
      queryClient.invalidateQueries({ queryKey: ["users"] });
      localStorage.setItem("name", JSON.stringify(data.username));

      navigate("/");
    },
    onError: () => {
      toast.error("Error signing up");
    },
  });

  const onSubmit = (data: SignUpFormData) => {
    mutation.mutate(data);
  };
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold mb-5 text-primary">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <CustomInput
            label="Username"
            {...register("username")}
            error={errors.username?.message}
          />
        </div>

        <div className="mb-4">
          <CustomInput
            label="Email"
            {...register("email")}
            error={errors.email?.message}
          />
        </div>

        <div className="mb-4 relative">
          <CustomInput
            label="Password"
            {...register("password")}
            error={errors.password?.message}
            type={showPassword ? "text" : "password"}
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

        <CustomButton isLoading={mutation.isPending} type="submit">
          Sign Up
        </CustomButton>
      </form>
      <p className="mt-4 text-sm text-center text-gray-700">
        You Already have an account?
        <Link to={"/login"} className="text-primary ml-2 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}
