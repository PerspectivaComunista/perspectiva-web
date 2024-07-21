"use client";
import React, { useState } from "react";
import { Login, Register } from ".";
import { subYears } from "date-fns";
import DatePicker from "react-datepicker";

export default function AuthModal({
  isLogin,
  isRegister,
  setIsLogin,
  setIsRegister,
  handleClose,
}: {
  isLogin: boolean;
  isRegister: boolean;
  setIsLogin: (value: boolean) => void;
  setIsRegister: (value: boolean) => void;
  handleClose: () => void;
}) {
  //Register form
  const maxDate = subYears(new Date(), 14);
  const [formData, setFormData] = useState({
    username: "",
    gender: "",
    birthDate: null,
    email: "",
    password: "",
    confirmPassword: "",
    subscribe: false,
  });

  const [errors, setErrors] = useState({
    username: "",
    birthDate: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //Login form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  //Switch between login and register
  const handleLoginClick = () => {
    setIsRegister(false);
    setIsLogin(true);
  };

  const handleRegisterClick = () => {
    setIsRegister(true);
    setIsLogin(false);
  };

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full m-auto rounded-3xl md:mt-0 sm:max-w-md xl:p-0 bg-red shadow-2xl shadow-slate-800">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <div className="flex items-center my-auto border-2 border-white rounded-2xl">
          <button
            className={`text-xl font-bold py-4 rounded-xl rounded-r-none w-full transition ${
              isLogin ? "bg-gray-50 text-red" : "text-white"
            }`}
            type="button"
            disabled={isLogin}
            onClick={handleLoginClick}
          >
            Conectează-te
          </button>
          <button
            className={`text-xl font-bold py-4 rounded-xl rounded-l-none w-full transition ${
              isRegister ? "bg-gray-50 text-red" : "text-white"
            }`}
            type="button"
            disabled={isRegister}
            onClick={handleRegisterClick}
          >
            Crează cont
          </button>
        </div>
        {isLogin && (
          <Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            isSubmitting={isSubmitting}
            setIsSubmitting={setIsSubmitting}
            handleClose={handleClose}
          />
        )}

        {isRegister && (
          <Register
            formData={formData}
            errors={errors}
            setFormData={setFormData}
            setErrors={setErrors}
            maxDate={maxDate}
            DatePicker={DatePicker}
            setIsLogin={setIsLogin}
            setIsRegister={setIsRegister}
          />
        )}
      </div>
    </div>
  );
}
