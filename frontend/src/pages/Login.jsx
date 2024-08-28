import React from "react";

import Navbar from "../component/Navbar";
import axios from "axios";
import { baseServerUrl } from "../utils";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();
  const handleUserLogin = async () => {
    console.log(email, password);

    try {
      const response = await axios.post(`${baseServerUrl}/api/users/login`, {
        email: email,
        password: password,
      });
      console.log(response);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="mt-20 flex justify-center ">
        <section className="bg-black  p-20 rounded-[20px]">
          <h2 className="text-white text-center font-medium text-[40px]">
            Sign in
          </h2>
          <p className="text-center text-white text-[15px] mb-3">
            Welcome user, please sign in to continue
          </p>
          <div className="mb-10">
            <p className="text-white text-[15px] mb-3">Email Address</p>
            <input
              className="w-[300px] h-[40px] rounded-[10px]"
              type="email"
              name=""
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <p className="text-white text-[15px] mb-3">Password</p>
            <input
              className="w-[300px] h-[40px] rounded-[10px]"
              type="password"
              name="input password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-10">
            <button
              onClick={handleUserLogin}
              className="w-[300px] h-[40px] bg-white text-black rounded-[10px]"
            >
              Sign in
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
