import React, { useState, useEffect } from "react";
import "../../pages/pages.css";

const Your11 = () => {

  const [playerArray,setPlayerArray] = useState([]);
  const [finalScore, setFinalScore] = useState(0);

  const fetchData = () => {
    fetch("http://localhost:8000/create-team/", {
      headers: { "content-type": "application/json", "Authorization":`Token ${localStorage.getItem("auth-token")}` },
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)
        setPlayerArray(data)
        
      }).then(() => {
        calculateScore();
        console.log(finalScore);
        

      })
  }

  const calculateScore = () => {
    let count = 0
    playerArray.map((player,i) => {

      count += player.final_rating;
    }
    )
    setFinalScore(count)

    
  }

  useEffect(() => {
    fetchData();
    
    
  },[])
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <body>
      <div className="text-center">
        <h1 className="text-cyan-300 text-3xl   text-center pt-12 font-mono">
          Your Selected 11:  Score : {finalScore}
        </h1>
        <div className="container  ">
          <form onSubmit={handleSubmit} method="POST">
            <div className=" ">
              {playerArray.map((member, i) => (
                <div
                  key={`member${i}`}
                  className="card transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110  p-3  inline-block ml-12 mr-8 mt-8 cursor-pointer rounded-xl"
                >
                  <div className="card-img h-[200px] w-[200px] ">
                    <img src={member.img} alt="cricketer" />
                  </div>
                  <div className="card-content">
                    <p className="card-title">{member.name}</p>
                    <p className="card-post">{member.role}</p>
                    <p className="card-rating text-yellow-400">
                      Rating: {Math.round((member.final_rating + member.dr) * 100) / 100}
                    </p>
                    <p className="card-price text-slate-600">
                      Base Price:
                      {member.price}
                    </p>
                    <br></br>
                  </div>
                </div>
              ))}
            </div>
            {/* <button type="submit">Submit</button> */}
          </form>
        </div>
      </div>
    </body>
  );
};

export default Your11;
