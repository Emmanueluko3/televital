"use client";
import { Button } from "@/components/common/button";
import { InputIcon } from "@/components/common/input";
import { IMAGES } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";

const Signup: React.FC = () => {
  const [signupData, setSignupData] = useState<any>({
    profile_image: null,
    name: "",
    gender: "",
    phone: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [signupError, setSignupError] = useState<any>({
    profile_image: null,
    name: "",
    gender: "",
    phone: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    const sanitizedPhone = value.replace(/\D/g, "");

    switch (name) {
      case "profile_image":
        if (files) {
          setSignupData({
            ...signupData,
            profile_image: files[0],
          });
        }
        break;
      case "phone":
        setSignupData({
          ...signupData,
          phone: sanitizedPhone,
        });

        break;
      default:
        setSignupData({
          ...signupData,
          [name]: value,
        });
        break;
    }
  };

  const validateField = (name: string, value: any) => {
    switch (name) {
      case "name":
        return value.trim() ? "" : "This field is required";
      case "phone":
        return /^\d{8,12}$/.test(value.trim())
          ? ""
          : "Phone number must be between 8 and 12 digits";
      case "email":
        return /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)
          ? ""
          : "Invalid email";
      case "password":
        return value.length >= 6
          ? ""
          : "Password must be at least 6 characters";
      case "confirm_password":
        return value === signupData.password ? "" : "Passwords do not match";
      default:
        return "";
    }
  };

  const validateForm = () => {
    const errors = Object.entries(signupData).reduce((acc, [name, value]) => {
      const error = validateField(name, value);
      if (error) acc[name] = error;
      return acc;
    }, {} as any);

    setSignupError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        setIsLoading(true);
      } catch (error: any) {
        if (error?.response?.data?.error) {
        }
        console.log("error message", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div
      style={{
        background: `url('/Bg-pattern.png')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
      }}
      className="w-full flex items-center justify-center h-screen py-6 relative overflow-hidden"
    >
      <div
        style={{
          background: `url('/pattern.png')`,
          backgroundRepeat: "no-repeat",
        }}
        className="bg-contain bg-center bg-fixed lg:bg-left-bottom -left-28 -bottom-56 min-h-screen absolute w-full overflow-hidden"
      ></div>
      <div className="p-5 lg:p-7 lg:px-10 w-full lg:w-4/12 flex flex-col justify-center items-center bg-primary-550 rounded-lg lg:drop-shadow-lg text-center">
        <Link href="/" className="mb-6 lg:mb-8">
          <Image
            src={IMAGES.logo}
            width={500}
            height={500}
            alt="Logo"
            className="h-10 lg:h-16 w-fit"
          />
        </Link>

        <h2 className="font-semibold text-3xl mb-3 text-center">
          Create an account
        </h2>

        <p className="font-medium text-sm text-center">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-blue-500 font-semibold hover:text-primary-700 transition-all"
          >
            Log in
          </Link>
        </p>

        <form
          onSubmit={handleSignup}
          className="w-full flex flex-col items-center justify-center"
        >
          {/* Name */}
          <div className="w-full mb-5 text-start">
            <InputIcon
              name="name"
              type="text"
              value={signupData.name}
              onChange={handleChange}
              placeholder="Name"
              maxLength={50}
              autoComplete="off"
            />
            {signupError.name && (
              <p className="text-red-500 text-sm">{signupError.name}</p>
            )}
          </div>

          <div className="w-full mb-5 text-start">
            <InputIcon
              name="phone"
              type="tel"
              pattern="\d*"
              value={signupData.phone}
              onChange={handleChange}
              placeholder="Phone number"
              maxLength={16}
              autoComplete="off"
            />
            {signupError.phone && (
              <p className="text-red-500 text-sm">{signupError.phone}</p>
            )}
          </div>
          {/* Email */}
          <div className="w-full mb-5 text-start">
            <InputIcon
              name="email"
              type="email"
              value={signupData.email}
              onChange={handleChange}
              placeholder="Email"
              maxLength={40}
              autoComplete="off"
            />
            {signupError.email && (
              <p className="text-red-500 text-sm">{signupError.email}</p>
            )}
          </div>
          {/* Passwords */}
          <div className="w-full mb-5 text-start">
            <InputIcon
              name="password"
              type="password"
              value={signupData.password}
              onChange={handleChange}
              placeholder="Password"
              maxLength={40}
              autoComplete="off"
              onPaste={(e) => e.preventDefault()}
            />
            {signupError.password && (
              <p className="text-red-500 text-sm">{signupError.password}</p>
            )}
          </div>
          <div className="w-full mb-5 text-start">
            <InputIcon
              name="confirm_password"
              type="password"
              value={signupData.confirm_password}
              onChange={handleChange}
              placeholder="Confirm password"
              maxLength={40}
              autoComplete="off"
              onPaste={(e) => e.preventDefault()}
            />
            {signupError.confirm_password && (
              <p className="text-red-500 text-sm">
                {signupError.confirm_password}
              </p>
            )}
          </div>

          {/* terms and condition */}
          <div className="flex items-center mb-8 w-full">
            <input type="checkbox" className="h-4 w-4 border-0 mr-3" />
            <span className="text-sm font-medium">
              I accept all{" "}
              <Link
                href="/terms&conditions"
                className="text-sm font-medium text-blue-500  lg:hover:text-blue-700"
              >
                terms
              </Link>{" "}
              &{" "}
              <Link
                href="/terms&conditions"
                className="text-sm font-medium text-blue-500 lg:hover:text-blue-700"
              >
                conditions
              </Link>
              {/* {t("I accept all terms & conditions")} */}
            </span>
          </div>

          <Button
            isLoading={isLoading}
            disabled={isLoading}
            type="submit"
            className="w-full"
          >
            Create Account
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
