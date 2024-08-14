import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";
import google from "../assets/google.svg";

function Login() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const redirectUrl = "onebox-chi.vercel.app";
  if (token) {
    navigate("/");
  }

  const handleGoogleLogin = () => {
    // Redirect to  login URL
    window.location.href = `https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://${redirectUrl}/`;
  };

  return (
    <div>
      <div className="border-[#25262B] bg-black border-b-2 fixed text-white h-16 w-screen flex items-center justify-center">
        <div className="">
          <img src={logo} alt="logo" className=" h-10"></img>
        </div>
      </div>
      <div className="bg-black text-white w-screen h-screen flex flex-col justify-center items-center">
        <div className="bg-[#111214] max-w-[360px]  md:max-w-fit text-center space-y-10 px-16 rounded-2xl border border-[#343A40]">
          <div className="">
            <div className="text-xl font-semibold mt-6">
              Create a new account
            </div>
            <div
              className="mt-6 border-white/40 border flex justify-center md:px-20 py-2 text-sm  items-center text-[#CCCCCC] rounded-lg cursor-pointer"
              onClick={handleGoogleLogin}
            >
              <img src={google} alt="google" className="w-4 mr-3"></img>
              Sign Up with Google
            </div>
          </div>
          <div className="">
            <Link
              to="#"
              className="bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] mx-16 mt-5 px-2 text-nowrap	  md:px-6 text-sm py-3 rounded-md cursor-pointer"
            >
              Create an Account
            </Link>
            <div className="my-8 mb-10 text-[#909296]">
              Already have an account?{" "}
              <Link to="#" className="text-[#C1C2C5] block md:inline">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#121212] flex justify-center items-center text-sm bottom-0 fixed w-screen h-8 text-[#5C5F66]">
        © 2024 Reachinbox. All rights reserved.
      </div>
    </div>
  );
}

export default Login;
