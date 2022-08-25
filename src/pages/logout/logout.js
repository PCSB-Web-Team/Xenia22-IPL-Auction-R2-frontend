import React from "react";
import "../../pages/pages.css";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";

const Logout = () => {

const navigate = useNavigate();

const logout = () => {
    localStorage.removeItem("auth-token")
    localStorage.removeItem("username")
    navigate('/login')
}

  useEffect(() => {
    logout();
  }, [])






  return (
    <body>
      <div className="">
        <h1 className="text-cyan-400 text-4xl text-center pt-12 font-mono font-bold mb-4">
          You have beed logged out.
        </h1>


      </div>
    </body>
  );
};

export default Logout;
