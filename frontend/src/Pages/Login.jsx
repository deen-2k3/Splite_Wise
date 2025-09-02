import React from 'react'
import { useState } from 'react'
import { apiConnector } from '../Services/apiConnector';
import { loginUrl } from '../Services/apis';

const Login = () => {
    const[data,setData]=useState({
        email:"",
        password:"",

    });
    const{email,password}=data;
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();

        try {
          const res=await apiConnector("POST",loginUrl,data) 
          console.log("Login Successfully.",res.data);
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        
       
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
        />
        <br /><br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
        />
        
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
