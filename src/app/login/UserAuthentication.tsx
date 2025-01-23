
"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

// Initial values for the form fields
const initialValues = {
  email: "",
  password: "",
  rememberMe: false,
};

// Form submit handler
const onSubmit = (values: { email: string; password: string; rememberMe: boolean }) => {
  console.log("Form Data:", values);
};

// Validation schema using Yup
const validationSchema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

const UserAuth = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <Card className=" position-relative max-w-sm mx-auto mt-8">
      <CardHeader>
        <CardTitle className="text-2xl">LOGIN</CardTitle>
        <CardDescription className="font-title">
          You are accessing Aquanova as a part of your institution/organization
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={formik.handleSubmit} className="grid gap-1">
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <Input
              id="email"
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="Enter your email"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <Input
              id="password"
              type="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="Enter your password"
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500 text-sm">{formik.errors.password}</div>
            )}
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center gap-0 pt-2">
            <input
              type="checkbox"
              id="remember-me"
              name="rememberMe"
              onChange={formik.handleChange}
              checked={formik.values.rememberMe}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="text-sm text-gray-700 ml-2">
              Remember me
            </label>
            <Link href="#" className="ml-auto inline-block text-sm underline text-blue-500">
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button */}
          <div className="grid w-full pt-16 pb-3 px-1">
            <Button
              type="submit"
              className="bg-blue-700 w-full py-2 px-4"
              disabled={!(formik.isValid && formik.dirty)} // Disable submit if the form is not valid or untouched
            >
              LOGIN
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default UserAuth;
