import { useContext, useEffect, useRef } from "react";
import loginBg from "/src/assets/others/authentication.png";
import loginArt from "/src/assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Space } from "lucide-react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const captchaRef = useRef(null);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleLogin = (e) => {
    e.preventDefault();
    if (!validateCaptcha(captchaRef.current.value)) {
      alert("Wrong captcha!");
      return;
    }
    const email = e.target.email.value;
    const password = e.target.password.value;
    logIn(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Helmet>
        <title>Log In | BistroBoss</title>
      </Helmet>
      <div
        style={{ backgroundImage: `url(${loginBg})` }}
        className="py-16 min-h-[calc(100vh-220px)] flex items-center gap-10 justify-center"
      >
        <div>
          <img src={loginArt} alt="" className="w-[400px]" />
        </div>
        <div className="space-y-5 min-w-[350px]">
          <h1 className="text-center text-3xl font-semibold">Login</h1>
          <form action="" onSubmit={handleLogin} className="space-y-4 w-full">
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
                required
              />
            </label>
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
                required
              />
            </label>
            <LoadCanvasTemplate />
            <label className="input input-bordered flex items-center gap-2">
              <Space className="w-4" />
              <input
                type="text"
                ref={captchaRef}
                name="captcha"
                placeholder="Type the text you see above"
                className="grow"
              />
            </label>

            <button className="btn w-full bg-[#dbb884]">Log In</button>
          </form>
          <p className="text-[#dbb884] text-center">
            New here?{" "}
            <Link to={"/signup"} className="font-semibold">
              Create a new account.
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
