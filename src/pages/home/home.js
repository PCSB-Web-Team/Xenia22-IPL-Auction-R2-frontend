import React, { Component, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import "./home.css";
import xeniadark1 from "../../assets/images/xeniaLogoFinal.png";
import cricwars from "../../assets/images/cricwars1.png";
import xeniadark from "../../assets/images/Xeniadark.png";
import bgcricwars3 from "../../assets/images/cricwarshomepage3.png";
import bgcricwars1 from "../../assets/images/cricwarshomepage1.png";
import bgcricwars2 from "../../assets/images/cricwarshomepage2.png";
const Home = () => {

  const [canRate, setCanRate] = useState(false);
  const [username, setUsername] = useState(null);
  const [canView, setCanView] = useState(false);
  const [canCreate, setCanCreate] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const fetchData = () => {
    console.log(localStorage.getItem("auth-token"));
    fetch("http://localhost:8000/users/me",{
      method: "GET",
      headers: { "content-type": "application/json", "Authorization":`Token ${localStorage.getItem("auth-token")}` },
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)
        setCanRate(data.canRatePlayers);
        setCanView(data.canAccessFinalRatings);
        setCanCreate(data.canSelectTeam);
        // setPlayerArray(data)
      })
  }

  const checkAuth = () => {
    if(localStorage.getItem("auth-token") !== null) setIsLoggedIn(true);
    else setIsLoggedIn(false);
    console.log(localStorage.getItem("auth-token"),"hehehhehe")
    console.log(isLoggedIn)
  }



  useEffect(() => {
    
    fetchData();
    checkAuth();
    console.log(localStorage.getItem("auth-token"),"thishkjbj")
  }, [])

  return (
    <div>
      <div className="container-home h-[100vh] w-[100%] ">
        <div className="homepage-background-img relative">
          <img
            className="  "
            // src={bgcricwars3}
            src={bgcricwars1}
            // src={bgcricwars2}
            alt="homepage-background"
          />
        </div>
        <div className="xeniadark1  ml-[800px] mr-12 absolute top-8 ">
          <img classname="   " src={xeniadark} alt="logo" />{" "}
        </div>
        <div className="presents font-serif text-4xl text-white z-50 absolute ml-[1100px] mr-12 italic top-48 ">
          <p>presents</p>
        </div>

        <div className="xeniadark1  ml-[800px] mr-12 absolute top-16 ">
          <img classname="   " src={cricwars} alt="logo" />{" "}
        </div>

        {/* <Link to="/login">
          <button
            type="submit"
            className="btn py-3 z-50  px-8 hover:text-teal-200 inline-block text-lg absolute text-center  text-white bg-gradient-to-r from-blue-400 via-purple-500 to-violet-400 hover:bg-gradient-to-br  focus:outline-none focus:ring-red-300 dark:focus:ring-red-800   "
          >
            Click to Login
          </button>
        </Link> */}

        {!isLoggedIn && (
          <Link to="/login">
            <button
              type="submit"
              className="btn py-3 z-50 px-8 hover:text-teal-200 inline-block text-lg absolute text-center  text-white bg-gradient-to-r from-blue-400 via-purple-500 to-violet-400 hover:bg-gradient-to-br  focus:outline-none focus:ring-red-300 dark:focus:ring-red-800   "
            >
              Click to Login
            </button>
          </Link>
        )}
        {canRate && (
          <Link to="/ratings">
            <button
              type="submit"
              className="btn py-3 z-50 px-8 hover:text-teal-200 inline-block text-lg absolute text-center  text-white bg-gradient-to-r from-blue-400 via-purple-500 to-violet-400 hover:bg-gradient-to-br  focus:outline-none focus:ring-red-300 dark:focus:ring-red-800   "
            >
              Rate Players
            </button>
          </Link>
        )}
        {canCreate && (
          <Link to="/create-team">
            <button
              type="submit"
              className="btn py-3 z-50 px-8 hover:text-teal-200 inline-block text-lg absolute text-center  text-white bg-gradient-to-r from-blue-400 via-purple-500 to-violet-400 hover:bg-gradient-to-br  focus:outline-none focus:ring-red-300 dark:focus:ring-red-800   "
            >
              Create Team
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Home;



