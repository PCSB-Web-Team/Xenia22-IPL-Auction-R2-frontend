import React from "react";
// import "./ratings.css";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";

import useFetch from "../useFetch"

const Ratings = () => {
  let totalPoints = 200
  const [playerArray, setPlayerArray] = useState([]);
  const [pointsLeft, setPointsLeft] = useState(totalPoints);
  const [errorMessage, setErrorMessage] = useState(null);
  // const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const fetchData = () => {
    fetch("http://localhost:8000/players/",{
      headers: { "content-type": "application/json", "Authorization":`Token ${localStorage.getItem("auth-token")}` },
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)
        setPlayerArray(data)
      })
  }
  const authRedirect = () => {
    if(localStorage.getItem("auth-token") === null){
      navigate("/login")
    }
  }

  const calculatePoints = (e) => {
    let sum = 0;
    
    playerArray.map((player,i) => {
      sum += parseInt(player.rating);
    }
    )
    if(sum>totalPoints){
      setErrorMessage("Not Enough Points!!")
    }
    else{
      setErrorMessage(null);
    }
    setPointsLeft(totalPoints-sum);
  }

  useEffect(() => {
    fetchData();
    authRedirect();
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    // setIsPending(true);
    const inst = {playerArray:playerArray,username:localStorage.getItem("username")}
    console.log(JSON.stringify(inst))
    if(pointsLeft < 0){
      setErrorMessage("Not Enough Points!")
      return;
    }
    
    fetch("http://localhost:8000/players/", {
      method: "POST",
      headers: { "content-type": "application/json", "Authorization":`Token ${localStorage.getItem("auth-token")}` },
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
      <div className="">
        <h1 className="text-cyan-300 text-3xl  bg-[#2a4284] pl-40 pt-12 font-mono">
          Rate the following players: {pointsLeft}
        </h1>
        {errorMessage && <h1>{errorMessage}</h1>}
        <div className="container  ">
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
                    <p className="card-title">{member.name}</p>
                    <p className="card-post">{member.role}</p>
                    <br></br>
                    <input
                      type="number"
                      required
                      name={member.name}
                      min="0"
                      max="10"
                      // value={member.rating}
                      placeholder="Rating"
                      className="pl-2 border-solid text-red-500 w-[100px] text-center border-red-300   rounded-lg"
                      onChange={(e) => {
                        if(e.target.value >= 10) e.target.value = 10;
                        if(e.target.value <= 0) e.target.value = 0;
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
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </body>
  );
};

export default Ratings;

