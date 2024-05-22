import React from 'react'
import "../../assets/css/sign.css";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import { CiLock } from "react-icons/ci";
import {Link} from "react-router-dom";
function Login() {
  return (
    <div className='sign'>
    <form action="" className='signin'>
    <h1>Hi, Welcome Back</h1>
    <div className="socail_sign">
        <a href="" target='_blank'><FcGoogle className='icon'/>Sign in with goggle</a>
        <a href="" target='_blank'><FaApple className='icon'/>Sign in with Apple</a>
    </div>
    <h6>or sign in with email and password <span>---------------------------</span></h6>
    <div className="rows">
        <label htmlFor="email">Email Address</label>
        <div className="box">
            <BsEnvelope className='icon'/>
            <input type="email" id='email'name='email' placeholder='Enter Emial'/>
        </div>
        <label htmlFor="password">Password</label>
        <div className="box">
            <CiLock className='icon'/>
            <input type="password" id='password'name='password' placeholder='Enter Emial'/>
        </div>
        <p>By signing in, you confirm that you have read and accepted our <a href="#" target='_blank'>Terms & Condition</a></p>
      <p>Don't have an account yet? <Link to="/sign">Sign up</Link></p>
        <button>Login</button>
    </div>
</form>
</div>
  )
}

export default Login