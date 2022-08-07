import React from "react";
import "../../pages/pages.css";

const Your11 = () => {
  const playerDetails = [
    {
      PlayerName: "Player1",
      Position: "Batsman",
      Ratings: "8",
      BasePrice: "1.5Cr",
      logo: "https://assets.telegraphindia.com/telegraph/2021/Dec/1640288068_24spokohli1_5col.jpg",
    },
    {
      PlayerName: "Player2",
      Position: "Batsman",
      Ratings: "8",
      BasePrice: "1.5Cr",
      logo: "https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
    },
    {
      PlayerName: "Player3",
      Position: "Batsman",
      Ratings: "8",
      BasePrice: "1.5Cr",
      logo: "https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
    },
    {
      PlayerName: "Player4 ",
      Position: "Batsman",
      Ratings: "8",
      BasePrice: "1.5Cr",
      logo: "https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
    },
    {
      PlayerName: "Player5",
      Position: "Batsman",
      Ratings: "8",
      BasePrice: "1.5Cr",
      logo: "https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
    },
    {
      PlayerName: "Player6",
      Position: "Batsman",
      Ratings: "8",
      BasePrice: "1.5Cr",
      img: "https://drive.google.com/uc?export=view&id=1kqyU7WUULqPKL8_1TvWt3IuKrWV9akcA",
      logo: "https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
    },
    {
      PlayerName: "Player7",
      Position: "Batsman",
      Ratings: "8",
      BasePrice: "1.5Cr",

      logo: "https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
    },
    {
      PlayerName: "Player8 ",
      Position: "Batsman",
      Ratings: "8",
      BasePrice: "1.5Cr",

      logo: "https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
    },
    {
      PlayerName: "Player9",
      Position: "Batsman",
      Ratings: "8",
      BasePrice: "1.5Cr",

      logo: "https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
    },
    {
      PlayerName: "Player10",
      Position: "Batsman",
      Ratings: "8",
      BasePrice: "1.5Cr",

      logo: "https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
    },
    {
      PlayerName: "Player11",
      Position: "Batsman",
      Ratings: "8",
      BasePrice: "1.5Cr",
      logo: "https://assets.telegraphindia.com/telegraph/2021/Dec/1640288068_24spokohli1_5col.jpg",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <body>
      <div className="text-center">
        <h1 className="text-cyan-300 text-3xl   text-center pt-12 font-mono">
          Your Selected 11:
        </h1>
        <div className="container  ">
          <form onSubmit={handleSubmit} method="POST">
            <div className=" ">
              {playerDetails.map((member, i) => (
                <div
                  key={`member${i}`}
                  className="card transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110  p-3  inline-block ml-12 mr-8 mt-8 cursor-pointer rounded-xl"
                >
                  <div className="card-img h-[200px] w-[200px] ">
                    <img src={member.logo} alt="cricketer" />
                  </div>
                  <div className="card-content">
                    <p className="card-title">{member.PlayerName}</p>
                    <p className="card-post">{member.Position}</p>
                    <p className="card-rating text-yellow-400">
                      Ratings: {member.Ratings}
                    </p>
                    <p className="card-price text-slate-600">
                      Base Price:
                      {member.BasePrice}
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
