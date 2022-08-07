import React, { Component } from 'react'
import "./login.css";

export class login extends Component {
  render() {
    return (
        <div className="container w-auto h-[600px]">
    <form className="form" action="https://jkorpela.fi/cgi-bin/echo.cgi" method="post">
      <h2 className="header ">Login</h2>
      <div className="form__div">
        <input type="text" name="user" required/>
        <label for="" className="form__label ">Username</label>
      </div>
      <div className="form__div">
        <input type="password" name="password" required/>
        <label for="" className="form__label">Password</label>
      </div>
      <div className="form__div">
        <input className="submite" type="submit"/>
      </div>
    </form>
  </div>
    )
  }
}

export default login
