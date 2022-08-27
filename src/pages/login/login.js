import React, { Component, useEffect } from 'react'
import "./login.css";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = (props) => {

  const [loading, setLoading] = useState(false)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const navigate = useNavigate()

  const authRedirect = () => {
    if (localStorage.getItem("auth-token") !== null) {
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

    setLoading(true);
    const data = { username, password }

    fetch("https://cricwars.herokuapp.com/auth/token/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => {
      if (!res.ok) {
        props.toast.toast.error("Error: Invalid Credentials!")
        setFetchError("Invalid Credentials!!!")
        setLoading(false);
        throw Error("Could not fetch the data.");
      }
      setLoading(false);
      return res.json();
    }).then((data) => {
      localStorage.setItem("auth-token", data.auth_token)
      localStorage.setItem("username", username)
      setFetchError(null)
      props.toast.toast.success("Logged in successfully!")
      setTimeout(() => {
        setLoading(false);
      }, 1600)
      setTimeout(() => {
        navigate("/");
      }, 1800)
    });
  };

  return (loading ? props.loader :
    <>
      {props.toast.container}
      <div className="container w-auto h-[600px]">
        <form className="form" onSubmit={handleSubmit}>
          <h2 className="header ">Login</h2>
          <div className="form__div">
            <input
              type="text" name="user"
              required
              onChange={(e) => {
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
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <label for="" className="form__label">Password</label>
          </div>
          <div className="form__div">
            <input className="submite" type="submit" />
          </div>
          {/* {fetchError && <p>{fetchError}</p>} */}
        </form>
      </div>
    </>
  )
}


export default Login
