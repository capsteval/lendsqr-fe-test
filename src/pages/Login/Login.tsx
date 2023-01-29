/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
    <LandingCover>
      <div className="logoContainer">
        <a>
          <img src="./images/logo.png" alt="logo" />
        </a>
      </div>
      <div className="loginLayout">
        <div className="image">
          <img src="./images/pablo-sign-in.png" alt="" />
        </div>
        <div className="loginForm">
          <h1>Welcome!</h1>
          <p>Enter details to login.</p>
          <form action="" onSubmit={(e) => handleFormSubmit(e)}>
            <div className="inputWrap">
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
            <div className="passwordInputWrap">
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
            <p className="forgotPassText">FORGOT PASSWORD</p>

            <div>
              <button type="submit">LOG IN</button>
            </div>
          </form>
        </div>
      </div>
    </LandingCover>
  );
};

const LandingCover = styled.div`
  min-height: 100vh;

  .logoContainer {
    display: flex;
    width: 90%;
    margin: 0 auto;
    padding-top: 70px;
    padding-bottom: 30px;
  }
  .loginLayout {
    width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;

    .loginForm {
      display: grid;
      justify-content: center;
      width: 100%;
      h1 {
        color: #213f7d;
      }
      p {
        line-height: 27px;
        color: #545f7d;
      }
      form {
        margin-top: 60px;
        width: 447px;
      }
      .passwordInputWrap {
        position: relative;
        height: 50px;
        cursor: pointer;
        span {
          z-index: 2;
          position: absolute;
          right: 0%;
          top: 50%;
          transform: translate(-50%, -50%);
          cursor: pointer;

          font-family: "Avenir Next";
          font-style: normal;
          font-weight: 600;
          font-size: 12px;
          line-height: 16px;
          text-align: center;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #39cdcc;
        }
      }

      input {
        width: 100%;
        padding: 1rem;
        &[type="password"] {
          position: absolute;
        }
      }
      .inputWrap {
        margin-bottom: 24px;
      }
      .forgotPassText {
        margin-top: 24px;
        font-weight: 600;
        font-size: 12px;
        line-height: 16px;
        text-align: left;
        letter-spacing: 0.1em;
        text-transform: uppercase;

        color: #39cdcc;
      }
      button[type="submit"] {
        background: #39cdcc;
        border-radius: 8px;
        margin-top: 30px;
        border: none;
        outline: none;
        width: 100%;
        padding: 15px;
        font-family: "Avenir Next";
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
        text-align: center;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #ffffff;
        cursor: pointer;
      }
    }
  }
`;

export default Login;
