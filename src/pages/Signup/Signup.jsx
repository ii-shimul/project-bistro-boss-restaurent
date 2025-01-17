import { useContext } from "react";
import signupBg from "/src/assets/others/authentication.png";
import signupArt from "/src/assets/others/authentication2.png";
import { Image } from "lucide-react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";

const Signup = () => {
  const { createUser } = useContext(AuthContext);
  const nav = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password, name, photoURL } = data;
    createUser(email, password, name, photoURL);
    toast.success("Account created successfully!");
    nav("/");
  };

  return (
    <>
      <Helmet>
        <title>Signup | BistroBoss</title>
      </Helmet>
      <div
        style={{ backgroundImage: `url(${signupBg})` }}
        className="py-20 min-h-[calc(100vh-220px)] flex items-center gap-10 justify-center"
      >
        <div>
          <img src={signupArt} alt="" className="w-[400px]" />
        </div>
        <div className="space-y-5 min-w-[350px]">
          <h1 className="text-center text-3xl font-semibold">Sign Up</h1>
          <form
            action=""
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 w-full"
          >
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="Name"
                name="name"
                {...register("name", { required: true })}
              />
            </label>
            {errors.name && (
              <span className="text-red-600 text-xs ml-2">
                Name is required
              </span>
            )}
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="email"
                name="email"
                className="grow"
                placeholder="Email"
                {...register("email", { required: true })}
              />
            </label>
            {errors.email && (
              <span className="text-red-600 text-xs ml-2">
                Email is required
              </span>
            )}

            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                name="password"
                className="grow"
                placeholder="Password"
                {...register("password", { required: true })}
              />
            </label>
            {errors.password && (
              <span className="text-red-600 text-xs ml-2">
                Password is required
              </span>
            )}

            <label className="input input-bordered flex items-center gap-2">
              <Image className="w-4" />
              <input
                type="url"
                name="photoURL"
                className="grow"
                placeholder="photoURL"
                {...register("photoURL", { required: true })}
              />
            </label>
            {errors.photoURL && (
              <span className="text-red-600 text-xs ml-2">
                photoURL is required
              </span>
            )}

            <button className="btn w-full bg-[#dbb884]">Create Account</button>
          </form>
          <p className="text-[#dbb884] text-center">
            Already have an account?{" "}
            <Link to={"/login"} className="font-semibold">
              Log in.
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
