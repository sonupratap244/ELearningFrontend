//import React from 'react';
import { useState } from "react";
import "./auth.css";
import {Link, useNavigate} from "react-router-dom";
import { UserData } from "../../context/UserContext";


const Register = () => {
      
  const navigate = useNavigate();
  const{btnLoading,registerUser} = UserData();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async(e)=>{
    e.preventDefault();
    await registerUser(name,email,password,navigate);

  };


  return (
    <div className="auth-page">
        <div className="auth-form">
            <h2>Register</h2>
            <form onSubmit={submitHandler}>
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="enter your name"
                value={name} 
                onChange={(e)=>setName(e.target.value)} 
                required/>
                
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="enter your email"
                 value={email} 
                 onChange={(e)=>setEmail(e.target.value)} 
                 required/>
                
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="password" 
                value={password} 
                onChange={(e)=>setPassword(e.target.value)} 
                required/>
            
                <button type="submit" disabled={btnLoading} 
                className="common-btn">{btnLoading? "Please Wait..." : "Register"}</button>
            </form>
            <p>
                 have an account? <Link to="/login">Login</Link>
            </p>
        </div>
    </div>
  );
};

export default Register;