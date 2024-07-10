import Image from "next/image";
import { useRouter } from "next/router"; // Add this line to import useRouter
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
};

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter(); // Initialize useRouter

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    if (data.email === "zakirali@gmail.com" && data.password === "12345") {
      console.log("Login successful!");
      // Redirect to dashboard after successful login
      router.push("/dashboard");
    } else {
      console.log("Login failed! Invalid credentials.");
    }
  };

  const onPasswordIcon = () => {    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center overflow-hidden">
      <div className="w-full md:p-8 p-2 rounded-lg">
        <div>
          <h2 className="black-500 text-[32px] py-6 flex font-semibold text-center justify-center">
            Login
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="text-3xl w-full mb-4">
              <div className="relative">
                <input
                  {...register("email", {
                    required: "Email is required",
                  })}
                  type="email"
                  id="floating_outlined"
                  className="block p-5 w-full border text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                  placeholder=" "
                />
                <label
                  htmlFor="floating_outlined"
                  className="absolute font-normal text-sm mx-2 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus: peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Email
                </label>
              </div>
              {errors.email && (
                <span className="text-red-500 relative -top-4 font-thin text-xs">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="pb-4">
              <div className="relative">
                <input
                  {...register("password", {
                    required: "Password is required",
                  })}
                  type={`${showPassword ? "text" : "password"}`}
                  id="password"
                  className="block p-5 w-full border text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                  placeholder=" "
                />
                <Image
                  width="40"
                  onClick={onPasswordIcon}
                  className={`absolute translate-4 duration-300 transform scale-75 top-[18%] right-2 cursor-pointer`}
                  height="30"
                  src={
                    showPassword
                      ? "/assets/images/hide-password.svg"
                      : "/assets/images/show-password.svg"
                  }
                  alt="Toggle Password Visibility"
                />
                <label
                  htmlFor="password"
                  className="absolute text-sm mx-2 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus: peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Password
                </label>
              </div>
              <div className="flex  text-sm py-1 justify-between">
                {errors.password && (
                  <span className="text-red-500 text-xs">
                    {errors.password.message}
                  </span>
                )}
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="bg-black text-white w-[80%] flex mx-auto justify-center py-5 rounded-lg"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
