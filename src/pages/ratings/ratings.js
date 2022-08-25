import React from "react";
// import "./ratings.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import useFetch from "../useFetch";

const Ratings = () => {
  let totalPoints = 200;
  const [playerArray, setPlayerArray] = useState([]);
  const [pointsLeft, setPointsLeft] = useState(totalPoints);
  const [errorMessage, setErrorMessage] = useState(null);
  // const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const fetchData = () => {
    fetch("http://localhost:8000/players/", {
      headers: {
        "content-type": "application/json",
        Authorization: `Token ${localStorage.getItem("auth-token")}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPlayerArray(data);
      });
  };
  const authRedirect = () => {
    if (localStorage.getItem("auth-token") === null) {
      navigate("/login");
    }
  };

  const calculatePoints = (e) => {
    let sum = 0;

    playerArray.map((player, i) => {
      sum += parseInt(player.rating);
    });
    if (sum > totalPoints) {
      setErrorMessage("Not Enough Points!!");
    } else {
      setErrorMessage(null);
    }
    setPointsLeft(totalPoints - sum);
  };

  useEffect(() => {
    fetchData();
    authRedirect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // setIsPending(true);
    const inst = {
      playerArray: playerArray,
      username: localStorage.getItem("username"),
    };
    console.log(JSON.stringify(inst));
    if (pointsLeft < 0) {
      setErrorMessage("Not Enough Points!");
      return;
    }

    fetch("http://localhost:8000/players/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Token ${localStorage.getItem("auth-token")}`,
      },
      body: JSON.stringify(inst),
    }).then(() => {
      console.log("Data Posted!");
      // localStorage.removeItem("auth-token")
      // localStorage.removeItem("username")
      // setIsPending(false);
      navigate("/");
    });
  };

  return (
    <body>
      <div className="bg-opacity-50 bg-black">
        <h1 className="sticky201 text-cyan-300 text-3xl  bg-[#0d0e2386] text-center pt-4 pb-4 font-mono z-50">
          Rate the following players: {pointsLeft}
        </h1>
        {errorMessage && (
          <h1 className="sticky201  text-right px-20 z-50 py-5 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br  focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium   mx-auto text-xl inline-block  ">
            {errorMessage}
          </h1>
        )}
        <div className="container   ">
          <form onSubmit={handleSubmit} method="POST">
            <div className=" lg:grid lg:grid-cols-5 lg:gap-12 pt-12 ">
              {playerArray.map((member, i) => (
                <div
                  key={`member${i}`}
                  className="card transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110"
                >
                  <div className="card-img h-[200px] w-[200px] ">
                    <img src={member.img} alt="cricketer" />
                  </div>
                  <div className="card-content">
                    <p className="fontname text-gray-100  font-semibold ">{member.name}</p>
                    <p className="card-post mt-2">{member.role}</p>
                    <br></br>
                    <input
                      type="number"
                      required
                      name={member.name}
                      min="0"
                      max="10"
                      step="1"
                      // value={member.rating}
                      placeholder="Rating"
                      className="pl-2 border-solid font-semibold mt-2 text-amber-300 w-[100px] text-center py-1 border-cyan-300 border-opacity-75   rounded-md"
                      onChange={(e) => {
                        if (e.target.value >= 10) e.target.value = 10;
                        if (e.target.value <= 0) e.target.value = 0;
                        let temp = [...playerArray];
                        temp[i].rating = e.target.value;
                        setPlayerArray(temp);
                        calculatePoints(e);
                        console.log(playerArray);
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="mb-4 text-center rounded-lg text-white bg-gradient-to-r from-blue-400 via-purple-500 to-violet-400 hover:bg-gradient-to-br  focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium  px-5 py-2.5  mx-auto text-lg inline-block"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </body>
  );
};

export default Ratings;
