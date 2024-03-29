import React, { useState, useEffect } from "react";
import "../../pages/pages.css";

const Your11 = () => {
  const [playerArray, setPlayerArray] = useState([]);
  const [finalScore, setFinalScore] = useState(0);
  const [noTeamMessage, setMessage] = useState(null);

  const fetchData = () => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/create-team/`, {
      headers: {
        "content-type": "application/json",
        Authorization: `Token ${localStorage.getItem("auth-token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPlayerArray(data);
        if (playerArray.length === 0)
          setMessage("You have not selected your team yet.");
        return data;
      })
      .then((data) => {
        calculateScore(data);
        console.log(finalScore);
      });
  };

  const calculateScore = (data) => {
    let count = 0;
    data.map((player, i) => {
      console.log(parseFloat(player.final_rating));
      count += parseFloat(player.final_rating) + parseFloat(player.dr);
    });
    setFinalScore(Math.round(count * 100) / 100);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <body>
      <div className="text-center">
        {playerArray && (
          <h1 className="text-cyan-300 text-3xl text-center pt-12 font-mono">
            Your Selected 11 + Impact Player: Score : {finalScore}
          </h1>
        )}
        <div className="container  ">
          <form onSubmit={handleSubmit} method="POST">
            <div className=" ">
              {playerArray &&
                playerArray.map((member, i) => (
                  <div
                    key={`member${i}`}
                    className="card transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 p-3 inline-block ml-12 mr-8 mt-8 cursor-pointer rounded-xl"
                  >
                    {member.role !== "Impact" ? (
                      <>
                        <div className="card-img h-[200px] w-[200px] ">
                          <img src={member.img} alt="cricketer" />
                        </div>
                        <div className="card-content">
                          <p className="card-title">{member.name}</p>
                          <p className="card-post">{member.role}</p>
                          <p className="card-rating text-yellow-400">
                            Rating:{" "}
                            {Math.round(
                              (parseFloat(member.final_rating) +
                                parseFloat(member.dr)) *
                                100
                            ) / 100}
                          </p>
                          <p className="card-price text-slate-600">
                            Base Price: {member.price}
                          </p>
                          <br />
                        </div>
                      </>
                    ) : (
                      <>
                        Impact player Selected:
                        <p className="card-title">{member.name}</p>
                        <p className="card-post">{member.role}</p>
                      </>
                    )}
                  </div>
                ))}
            </div>
          </form>
        </div>
      </div>
    </body>
  );
};

export default Your11;
