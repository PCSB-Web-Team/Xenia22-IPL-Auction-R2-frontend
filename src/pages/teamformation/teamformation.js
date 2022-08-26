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
    fetch("https://cricwars.herokuapp.com/players/",{
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
      setBudget(Math.round((budget-member.price) * 100) / 100);
      setPlayerCount(playerCount + 1);
    }
    else {
      setBudget(Math.round((budget+member.price) * 100) / 100);
      setPlayerCount(playerCount - 1);
    }
    // setBudget(Math.round(budget * 100) / 100)
    console.log(playerCount + "Player count")
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
     let inst = {'selectedPlayers': [...selectedPlayers]};

     if(budget < 0 || playerCount !== 11) return;

      fetch("https://cricwars.herokuapp.com/create-team/", {
        method: "POST",
        headers: { "content-type": "application/json", "Authorization":`Token ${localStorage.getItem("auth-token")}` },
        body: JSON.stringify(inst),
      }).then((res) => {
        console.log(res);
        return res.json();
        
      }).then((data) => {
        console.log(data);
        navigate("/selected-11");
      });
  };

  return (
    <body>
      <div className="">
        <h1 className="text-cyan-400 text-4xl text-center pt-12 font-mono font-bold mb-4">
          Select the Best Possible 11
        </h1>
        <div className="sticky201 z-50  bg-[#0d0e2386] text-cyan-300 text-3xl text-center  pt-4 pb-4 font-mono">
          <p>Remaining Budget : {budget} </p>
          <p>Remaining Players : {11 - playerCount} </p>
        </div>
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
                    <p className="fontname text-gray-100  font-semibold ">
                      {member.name}
                    </p>
                    <p className="card-post mt-2 text-gray-100 font-semibol text-xl">
                      {Math.round(member.final_rating * 100) / 100} ± {Math.abs(member.dr)}
                    </p>{" "}
                    <br />
                    <p className="card-post text-fuchsia-500 font-semibold">
                      {lakhCrore(member.price)}{" "}
                    </p>
                    <br></br>
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-center"
                      onChange={(e) => {
                        if (e.target.checked)
                          setSelectedPlayers(
                            new Set([...selectedPlayers, member.id])
                          );
                        else {
                          let x = new Set([...selectedPlayers]);
                          x.delete(member.id);
                          setSelectedPlayers(x);
                        }
                        updateBudgetPlayers(e, member);
                        if (budget >= 0 && playerCount === 10)
                          setCanSubmit(true);
                        else setCanSubmit(false);
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="my-8 text-center  rounded-lg text-white bg-gradient-to-r from-blue-400 via-purple-500 to-violet-400 hover:bg-gradient-to-br  focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium  px-5 py-2.5  mx-auto text-lg inline-block"
            >
              Submit
            </button>
            
          </form>
        </div>
      </div>
    </body>
  );
};

export default Ratings;
