/** @format */

import React, { useState } from "react";
import s from "./Login.module.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = (): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ email, password });
    navigate("/dashboard");
  };
  return (
    <div className={s.landingCover}>
      <div className={s.logoContainer}>
        <a>
          <img src="./images/logo.png" alt="logo" />
        </a>
      </div>
      <div className={s.loginLayout}>
        <div className={s.image}>
          <img src="./images/pablo-sign-in.png" alt="" />
        </div>
        <div className={s.loginForm}>
          <h1>Welcome!</h1>
          <p>Enter details to login.</p>
          <form action="" onSubmit={(e) => handleFormSubmit(e)}>
            <div className={s.inputWrap}>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className={s.passwordInputWrap}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {!showPassword && <span onClick={() => setShowPassword(true)}>SHOW</span>}
              {showPassword && <span onClick={() => setShowPassword(false)}>HIDE</span>}
            </div>
            <p className={s.forgotPassText}>FORGOT PASSWORD</p>

            <div>
              <button type="submit">LOG IN</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
