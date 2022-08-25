import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbarnew.css";

const Navbarnew = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [username,setUsername] = useState(null);

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
        // console.log(data)
        setUsername(data.username);
        // setPlayerArray(data)
      })
  }

  useEffect(() => {
    
    // checkAuth();
    fetchData();
  }, [])

  return (
    <div className="navbar-wrapper">
      <svg
        className={`ham hamRotate ham1 ${navOpen ? "active" : ""}`}
        width={"64"}
        viewBox={"0 0 100 100"}
        onClick={() => setNavOpen((state) => !state)}
      >
        <path
          className="line top"
          d={
            "m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
          }
        ></path>
        <path className="line middle" d={"m 30,50 h 40"}></path>
        <path
          className="line bottom"
          d={
            "m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
          }
        ></path>
      </svg>

      <div className="navbar-desktop">
        <div className={`wrapper ${navOpen ? "active" : ""}`}>
          <nav class="sidenav bg-black bg-opacity-50" id="sidenav">
            <div class="navbrand">
              <img
                class="insaan rounded "
                src="https://avataaars.io/?avatarStyle=Circle&topType=WinterHat3&accessoriesType=Round&hatColor=Black&facialHairType=MoustacheMagnum&facialHairColor=Brown&clotheType=GraphicShirt&clotheColor=Heather&graphicType=Pizza&eyeType=Default&eyebrowType=UpDown&mouthType=Serious&skinColor=Tanned"
              />
              {username && <h2 class="title title-medium pt-8">{username}</h2>}
            </div>
            <ul class="navmenu pt-8 text-justify">
              {username && <li class="navmenu-item text-xl font-semibold hover:text-cyan-400  pb-4">
                <Link
                  to={"/"}
                  onClick={() => setNavOpen(false)}
                  style={{ textDecoration: "none" }}
                >
                  <span className="fa-li">
                    <i className="fas fa-home"></i>
                  </span>
                  Home
                </Link>
              </li>}
              

              {username && <li class="navmenu-item text-xl font-semibold hover:text-cyan-400  pb-4">
                <Link
                  to={"/selected-11"}
                  onClick={() => setNavOpen(false)}
                  style={{ textDecoration: "none" }}
                >
                  <span className="fa-li">
                    <i className="fas fa-home"></i>
                  </span>
                  My 11
                </Link>
              </li>}
              {/* {username && <li class="navmenu-item text-xl font-semibold hover:text-cyan-400  pb-4">
                <Link
                  to={"/leaderboard"}
                  onClick={() => setNavOpen(false)}
                  style={{ textDecoration: "none" }}
                >
                  <span className="fa-li">
                    <i className="fas fa-home"></i>
                  </span>
                  Leaderboard
                </Link>
              </li>} */}
              {username && <li class="navmenu-item text-xl font-semibold hover:text-red-500">
                <a href={"/logout"}
                  onClick={() => setNavOpen(false)}
                  style={{ textDecoration: "none" }}
                >
                  <span className="fa-li">
                    <i className="fas fa-home"></i>
                  </span>
                  Logout
                </a>
              </li>}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbarnew;
