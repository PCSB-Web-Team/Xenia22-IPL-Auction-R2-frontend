import React from "react";
import "./ratings.css";

const Ratings = () => {
  const playerDetails = [
    {
      PlayerName: "Player1",
      Position: "Batsman",
      logo: "https://assets.telegraphindia.com/telegraph/2021/Dec/1640288068_24spokohli1_5col.jpg",
    },
    {
      PlayerName: "Player2",
      Position: "Batsman",
      logo: "https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
    },
    {
      PlayerName: "Player3",
      Position: "Batsman",
      logo: "https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
    },
    {
      PlayerName: "Player4 ",
      Position: "Batsman",
      logo: "https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
    },
    {
      PlayerName: "Player5",
      Position: "Batsman",
      logo: "https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
    },
    {
      PlayerName: "Player6",
      Position: "Batsman",
      img: "https://drive.google.com/uc?export=view&id=1kqyU7WUULqPKL8_1TvWt3IuKrWV9akcA",
      logo: "https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
    },
    {
      PlayerName: "Player7",
      Position: "Batsman",

      logo: "https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
    },
    {
      PlayerName: "Player8 ",
      Position: "Batsman",

      logo: "https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
    },
    {
      PlayerName: "Player9",
      Position: "Batsman",

      logo: "https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
    },
    {
      PlayerName: "Player10",
      Position: "Batsman",

      logo: "https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <body>
      <div className="">
        <h1 className="text-cyan-300 text-3xl  bg-[#2a4284] pl-40 pt-12 font-mono">
          Rate the following players:
        </h1>
        <div className="container  ">
          <form onSubmit={handleSubmit} method="POST">
            <div className=" lg:grid lg:grid-cols-5 lg:gap-12 pt-12 ">
              {playerDetails.map((member, i) => (
                <div
                  key={`member${i}`}
                  className="card transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110"
                >
                  <div className="card-img h-[200px] w-[200px] ">
                    <img src={member.logo} alt="cricketer" />
                  </div>
                  <div className="card-content">
                    <p className="card-title">{member.PlayerName}</p>
                    <p className="card-post">{member.Position}</p>
                    <br></br>
                    <input
                      type="number"
                      required
                      name={member.PlayerName}
                      min="0"
                      max="10"
                      placeholder="Rating"
                      className="pl-2 border-solid text-red-500 w-[100px] text-center border-red-300   rounded-lg"
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
