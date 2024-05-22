import React from "react";
import "../../assets/css/sign.css";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import { CiLock } from "react-icons/ci";
import { Link } from "react-router-dom";
function Sign() {
  return (
    <div className="sign">
      <form action="" className="signup">
        <h1>Sign Up</h1>
        <div className="socail_sign">
          <a href="" target="_blank">
            <FcGoogle className="icon" />
            Sign up with goggle
          </a>
          <a href="" target="_blank">
            <FaApple className="icon" />
            Sign up with Apple
          </a>
        </div>
        <h6>
          or sign up with email and password{" "}
          <span>---------------------------</span>
        </h6>
        <div className="rows">
          <label htmlFor="email">Email Address</label>
          <div className="box">
            <BsEnvelope className="icon" />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Emial"
            />
          </div>
          <label htmlFor="password">Password</label>
          <div className="box">
            <CiLock className="icon" />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Emial"
            />
          </div>
          <p>
            By signing up, you confirm that you have read and accepted our{" "}
            <a href="#" target="_blank">
              Terms & Condition
            </a>
          </p>
          <p>
            Have an account Already? <Link to="/login">Login</Link>
          </p>
          <button>Sign up</button>
        </div>
      </form>
    </div>
  );
}

export default Sign;
