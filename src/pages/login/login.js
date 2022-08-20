import React, { Component, useEffect } from 'react'
import "./login.css";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {

  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fetchError, setFetchError] = useState(null);

  const authRedirect = () => {
    if(localStorage.getItem("auth-token") !== null){
      navigate("/ratings")
    }
  }
  useEffect(() => {
    // authRedirect();
  },
    []
  )
  const handleSubmit = (e) => {
    e.preventDefault();

    // setIsPending(true);
    const data = {username,password}

    fetch("http://localhost:8000/auth/token/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => {
        if(!res.ok){
            console.log(res)
            setFetchError("Invalid Credentials!!!")
            throw Error("Could not fetch the data.");
        }
        return res.json();
    }).then((data) => {
      localStorage.setItem("auth-token",data.auth_token)
      localStorage.setItem("username",username)
      setFetchError(null)
      navigate("/");
    });
  };  
  
    return (
        <div className="container w-auto h-[600px]">
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="header ">Login</h2>
      <div className="form__div">
        <input 
        type="text" name="user" 
        required 
        onChange = {(e) => {
          setUsername(e.target.value);
        }}
        />
        <label for="" className="form__label ">Username</label>
      </div>
      <div className="form__div">
        <input 
        type="password" 
        name="password" 
        required
        onChange = {(e) => {
          setPassword(e.target.value);
        }}
        />
        <label for="" className="form__label">Password</label>
      </div>
      <div className="form__div">
        <input className="submite" type="submit"/>
      </div>
      {fetchError && <p>{fetchError}</p>}
    </form>
  </div>
    )
}


export default Login
