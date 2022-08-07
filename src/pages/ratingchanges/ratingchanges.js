import React, { Component } from "react";
import "./ratingchanges.css";
const changes = () => {
  const Players = [
    {
      PlayersName: "Player1",

      Ratings: "9.5",
      number: "1",
    },
    {
      PlayersName: "Player2",
      Ratings: "9.5",
      number: "2",
    },
    {
      PlayersName: "Player3",
      Ratings: "9.5",
      number: "3",
    },
    {
      PlayersName: "Player4 ",
      Ratings: "9.5",
      number: "4",
    },
    {
      PlayersName: "Player5",
      Ratings: "9.5",
      number: "5",
    },
    {
      PlayersName: "Player6",
      Ratings: "9.5",
      number: "6",
    },
    {
      PlayersName: "Player7",

      Ratings: "9.5",
      number: "7",
    },
    {
      PlayersName: "Player8",
      Ratings: "9.5",
      number: "8",
    },
    {
      PlayersName: "Player9",
      Ratings: "9.5",
      number: "9",
    },
    {
      PlayersName: "Player10 ",
      Ratings: "9.5",
      number: "10",
    },
    {
      PlayersName: "Player11",
      Ratings: "9.5",
      number: "11",
    },
    {
      PlayersName: "Player12",
      Ratings: "9.5",
      number: "12",
    },
    {
      PlayersName: "Player13",

      Ratings: "9.5",
      number: "13",
    },
    {
      PlayersName: "Player14",
      Ratings: "9.5",
      number: "14",
    },
    {
      PlayersName: "Player15",
      Ratings: "9.5",
      number: "15",
    },
    {
      PlayersName: "Player16 ",
      Ratings: "9.5",
      number: "16",
    },
    {
      PlayersName: "Player17",
      Ratings: "9.5",
      number: "17",
    },
    {
      PlayersName: "Player18",
      Ratings: "9.5",
      number: "18",
    },
    {
      PlayersName: "Player19",

      Ratings: "9.6",
      number: "19",
    },
    {
      PlayersName: "Player20",
      Ratings: "9.5",
      number: "20",
    },
    {
      PlayersName: "Player21",
      Ratings: "9.5",
      number: "21",
    },
    {
      PlayersName: "Player22 ",
      Ratings: "9.5",
      number: "22",
    },
    
  ];
  return (
    <div className="lead_body pb-12">
      <form className="text-center">
        <h2 className="text-4xl pt-12 pb-12 font-mono">
          Ratings To be Changed
        </h2>
        <table
          id="table"
          className="border-2 border-cyan-200 pb-12  text-center"
        >
          <div class="table-section">
            <tr class="header-row">
              <th class="header-item items">RANK</th>
              <th class="header-item items">PLAYER NAME</th>
              <th class="header-item items">TOTAL RATINGS</th>
            </tr>

            {Players.map((member, i) => (
              <tr class="table-rows text-center " key={`member${i}`}>
                <td class="items">{member.number}</td>
                <td class="items">{member.PlayersName}</td>
                <td class="items text-center ">
                  <input
                    type="number"
                    min="-1"
                    max="1.5"
                    step="0.25"
                    // placeholder="0"
                    defaultValue={0}
                    // value="0"
                    required 
                    className="text-center"
                  ></input>
                </td>
              </tr>
            ))}
          </div>
        </table>
        <button
          type="submit"
          className="border-2 hover:bg-blue-500 text-center hover:text-white border-blue-500 px-4 py-2 rounded-lg mt-8 mb-8 "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default changes;
