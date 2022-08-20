import React from "react";
import "../../pages/pages.css";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";

const Ratings = () => {
  const total_budget = 15;
  const [playerArray, setPlayerArray] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState(new Set([]));
  const [canSubmit, setCanSubmit] = useState(false);
  const [budget,setBudget] = useState(total_budget);
  const [playerCount,setPlayerCount] = useState(0);
  const navigate = useNavigate();

  const fetchData = () => {
    fetch("http://localhost:8000/players/",{
      headers: { "content-type": "application/json", "Authorization":`Token ${localStorage.getItem("auth-token")}` }
    }) // Change URL
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPlayerArray(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, [])

  const lakhCrore = (x) => {
    x = parseFloat(x);
    if(x < 1) return `${x*100} Lakh`;
    return `${x} Cr`;
  }

  const updateBudgetPlayers = (e,member) => {
    if(e.target.checked){ 
      setBudget(budget-member.price);
      setPlayerCount(playerCount + 1);
    }
    else {
      setBudget(budget+member.price);
      setPlayerCount(playerCount - 1);
    }
    console.log(playerCount + "Player count")
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
     let inst = {'selectedPlayers': [...selectedPlayers]};

     if(budget < 0 || playerCount !== 11) return;

      fetch("http://localhost:8000/create-team/", {
        method: "POST",
        headers: { "content-type": "application/json", "Authorization":`Token ${localStorage.getItem("auth-token")}` },
        body: JSON.stringify(inst),
      }).then((res) => {
        console.log(res);
        return res.json();
        
      }).then((data) => {
        console.log(data);
        navigate("/");
      });
  };

  return (
    <body>
      <div className="">
        <h1 className="text-cyan-300 text-3xl   text-center pt-12 font-mono">
          Select The Best 11 : <br/>
          Remaining Budget : {budget}
          Remaining Players : {11 - playerCount}
        </h1>
        <div className="container  text-center">
          <form onSubmit={handleSubmit} method="POST">
            <div className=" text-center pt-4 ">
              {playerArray.map((member, i) => (
                <div
                  key={`member${i}`}
                  className=" card transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110  p-3  inline-block m-6 cursor-pointer rounded-xl"
                >
                  <div className="card-img h-[200px] w-[200px] ">
                    <img src={member.img} alt="cricketer" />
                  </div>
                  <div className="card-content text-center">
                    <p className="card-title">{member.name}</p>
                    <p className="card-post">{Math.round((member.final_rating) * 100) / 100}</p> <br/>
                    <p className="card-post">{lakhCrore(member.price)} </p>
                    <br></br>

                    <input
                      type="checkbox"
                      className="w-4 h-4 text-center"
                      onChange={(e) => {
                        if (e.target.checked)
                        setSelectedPlayers(new Set([...selectedPlayers,member.id]));
                        else{
                          let x = new Set([...selectedPlayers]);
                          x.delete(member.id);
                          setSelectedPlayers(x);
                        }
                        updateBudgetPlayers(e,member);
                        if(budget >= 0 && playerCount === 10) setCanSubmit(true);
                        else setCanSubmit(false);
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <button
              type="submit"
              className="border-2 hover:bg-blue-500 hover:text-white border-blue-500 px-4 py-2 rounded-lg"
            >
              Submit
            </button>
            <br></br>
            <br></br>
          </form>
        </div>
      </div>
    </body>
  );
};

export default Ratings;
